'use strict';

const express = require('express');
var multer = require('multer');
var nodemailer = require('nodemailer');
const UserStatusUpdate = require('../models').UserStatusUpdate;
const router = express.Router();


const errorHandler = (error, req, res, next) => {
    console.error(error);
    res.json({ isSuccess: false, message: error.message });
};

router.route('/userstatusupdate')

// // Perform Operations By User ID
// router.route('/user/:id')
    .post((req, res, next) => {
        // console.log(req.params);
        console.log(req.body);
        var userStatus = {
            id: req.body.id,
            status: 1,
            last_login: new Date()
        }
        UserStatusUpdate.updateUserStatusById(userStatus)
            .then(data => {
                res.json(data);
            })
            .catch(next);

    })

    .put((req, res, next) => {
        const user = {
            email: 'harikrishna9513@gmail.com',
            status: 0
        };
        console.log(user);

        UserStatusUpdate.updateUserById(user)
        .then(data => {
            res.json(data);
        })
        .catch(next);
    })

router.use(errorHandler)

module.exports = router;
