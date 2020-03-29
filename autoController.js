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
    }, +req.params.limitNumber);
};


// Handle create auto actions
exports.new = function (req, res) {
    var auto = new Auto();
    auto.marca = req.body.marca;
    auto.submarca = req.body.submarca;
    auto.descripcion = req.body.descripcion;
    auto.modelos = req.body.modelos;
    auto.claveVehicular = req.body.claveVehicular;

    auto.save(function (err) {
        res.json({
            message: 'New auto created!',
            data: auto
        });
    });
};


// Handle view auto info
exports.view = function (req, res) {
    if (req.params.auto_id) {
        Auto.findById(req.params.auto_id, function (err, auto) {
            if (err)
                res.send(err);



            res.json({
                message: 'Auto details loading...',
                data: auto
            });
        });
    } else {
        res.json({
            message: "El id de parámetro no puede ir vacio"
        })
    }

};


// Handle update auto info
exports.update = function (req, res) {

    if (req.params.auto_id) {
        Auto.findById(req.params.auto_id, function (err, auto) {
            if (err)
                res.send(err);

            auto.id = req.body.id ? req.body.id : auto.id;
            auto.marca = req.body.marca;
            auto.submarca = req.body.submarca;
            auto.descripcion = req.body.descripcion;
            auto.modelos = req.body.modelos;
            auto.claveVehicular = req.body.claveVehicular;
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
    } else {
        res.json({
            message: "El id de parámetro no puede ir vacio"
        })
    }




};

//Handle delete auto
exports.delete = function (req, res) {

    if (res.params.auto_id) {
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
    } else {
        res.json({
            message: "El id de parámetro no puede ir vacio"
        })
    }

}