// api-routes.js

// Initialize express router
let router = require('express').Router();


// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

// Import auto controller
var autoController = require('./autoController');

// Auto routes
router.route('/autos')
    .get(autoController.index)
    .post(autoController.new);

router.route('/autos/:auto_id')
    .get(autoController.view)
    .patch(autoController.update)
    .put(autoController.update)
    .delete(autoController.delete);

router.route('/autos/limit/:limitNumber')
    .get(autoController.limit);

// Export API routes
module.exports = router;