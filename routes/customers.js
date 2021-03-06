const express = require('express');
const router = express.Router();
const passport = require('passport');

//Import controllers
const {
  createCustomer,
  forgotRegistration,
  loginCustomer,
  getCustomer,
  editCustomerInfo,
  updatePassword,
  forgotPassword,
  resetPassword,
} = require('../controllers/customers');

// @route   POST /customers
// @desc    Register customer
// @access  Public
router.post('/', createCustomer);

// @route   POST /customers/profile/forgot-registration
// @desc    Registration forgot
// @access  Public
router.post('/confirm-registration/:token', forgotRegistration);

// @route   POST /customers/login
// @desc    Login Customer / Returning JWT Token
// @access  Public
router.post('/login', loginCustomer);

// @route   GET /
// @desc    Return current customer
// @access  Private
router.get('/customer', passport.authenticate('jwt', { session: false }), getCustomer);

// @route   PUT /customers
// @desc    Return current customer
// @access  Private
router.put('/', passport.authenticate('jwt', { session: false }), editCustomerInfo);

// @route   POST /customers/profile/update-password
// @desc    Return current customer and success or error message
// @access  Private
router.put('/password', passport.authenticate('jwt', { session: false }), updatePassword);

// @route   POST /customers/profile/forgot-password
// @desc    Email a link to reset your password
// @access  Public
router.post('/forgot', forgotPassword);

// @route   POST /customers/profile/reset-password
// @desc    Password reset
// @access  Public
router.post('/reset/:token', resetPassword);

module.exports = router;
