//These routes will be used for registration and Login , here
// we would register the user and authenticate the user and generate the token
// the token will be supplied to the user.`

var express = require('express');
var registrationLogin = express.Router();
var mongoose = require('mongoose');
var user = require('../models/user')
var jwt = require('jsonwebtoken');
var superSecret = require('../config')

registrationLogin.post('/registration', function(req, res) {
    //Logic for registration of restaurant
    if (req.body.email && req.body.password && req.body.name) {
        var newUser = new user({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name

        })

        newUser.save(function(err, data) {
            if (err) {
                res.json({ success: false })
            }
            res.json({
                success: true,
                data: data
            })
        })
    } else {
        res.json({
            success: false,
            msg: "No data entered"
        })
    }

})

registrationLogin.post('/login', function(req, res) {
    //Logic for Login and sending the token
    if (!req.body.email || !req.body.password) {
        res.json({
            success: false,
            msg: "No data entered"
        })
    } else {
        user.findOne({
            email: req.body.email
        }, function(err, restaurant) {

            if (err) throw err;

            if (!restaurant) {
                res.json({ success: false, message: 'Authentication failed. restaurant not found.' });
            } else if (restaurant) {

                // check if password matches
                if (restaurant.password != req.body.password) {
                    res.json({ success: false, message: 'Authentication failed. Wrong password.' });
                } else {

                    // if restaurant is found and password is right
                    // create a token
                    //var fortoken = { resid: restaurant._id, resemail: restaurant.email }
                    var token = jwt.sign(restaurant, superSecret.secret, {
                        expiresIn: 86400 // expires in 24 hours
                    });

                    res.json({
                        success: true,
                        message: 'token generated',
                        token: token
                    });
                }

            }

        })
    }
})

module.exports = registrationLogin;