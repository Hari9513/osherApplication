'use strict';
const express = require('express');
const Login = require('../models').Login;
const router = express.Router();
const jwt = require('jsonwebtoken');
const secret = 'my secret';
const expiresIn = '1h';

var mysql = require('mysql');


const errorHandler = (error, req, res, next) => {
    console.error(error);
    res.json({ isSuccess: false, message: error.message });
};


router.route('/login')
	
.post((req, res, next) => {
	const user = {
		email: req.body.email,
	 password: req.body.password
	};

	Login.findUser(user)
		.then(data => {
			if(data.results.length){
				const token = jwt.sign({data}, secret, {expiresIn})
			res.json({
				data,
				token,
				status: 200
			});
		} else {
			res.json({
				data: [],
				status: 404
			})
		}
		})
		.catch(next);
})

router.use(errorHandler)

module.exports = router;