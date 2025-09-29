const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controller');

// Register route
router.post(
  '/register',
  [
    // Validate email
    body('email')
      .isEmail()
      .withMessage('Invalid email'),

    // Validate fullname object
    body('fullname').custom((value) => {
      if (!value || typeof value !== 'object') {
        throw new Error('Fullname must be an object with firstname and lastname');
      }
      if (!value.firstname || value.firstname.length < 3) {
        throw new Error('First name must be at least 3 characters long');
      }
      if (!value.lastname || value.lastname.length < 3) {
        throw new Error('Last name must be at least 3 characters long');
      }
      return true;
    }),

    // Validate password
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
  ],
  userController.registerUser
);

module.exports = router;
