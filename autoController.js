// autoController.js

// Import auto model
Auto = require('./autoModel');
exports.index = function (req, res) {
    Auto.get(function (err, autos) {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        }
        res.json({
            status: "success",
            message: "Autos retrieved successfully",
            data: autos
        });
    });
};


exports.limit = function (req, res) {
    Auto.get(function (err, autos) {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        }
        res.json({
            status: "success",
            message: "Autos retrieved successfully",
            data: autos
        });
    }, req.param.limitNumber);
};


// Handle create auto actions
exports.new = function (req, res) {
    var auto = new Auto();
    auto.id = req.body.id ? req.body.id : auto.id;
    auto.marca = req.body.marca;
    auto.submarca = req.body.submarca;
    auto.descripcion = req.body.descripcion;
    auto.modelos = req.body.modelos;

    auto.save(function (err) {
        res.json({
            message: 'New auto created!',
            data: auto
        });
    });
};


// Handle view auto info
exports.view = function (req, res) {
    Auto.findById(req.params.auto_id, function (err, auto) {
        if (err)
            res.send(err);

        res.json({
            message: 'Auto details loading...',
            data: auto
        });
    });
};


// Handle update auto info
exports.update = function (req, res) {
    Auto.findById(req.params.auto_id, function (err, auto) {
        if (err)
            res.send(err);

        auto.id = req.body.id ? req.body.id : auto.id;
        auto.marca = req.body.marca;
        auto.submarca = req.body.submarca;
        auto.descripcion = req.body.descripcion;
        auto.modelos = req.body.modelos;

        // save the auto and check for errors
        auto.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Auto Info update',
                data: auto
            });
        });
    });
};

//Handle delete auto
exports.delete = function (req, res) {
    Auto.remove({
        _id: req.params.auto_id
    }, function (err, auto) {
        if (err)
            res.send(err);

        res.json({
            status: "success",
            message: 'Auto deleted'
        });
    });
}