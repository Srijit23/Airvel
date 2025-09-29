# API Documentation

## Endpoint: `/users/register`

### Description
This endpoint allows users to register by providing their personal information. Upon successful registration, a token will be generated for the user.

### Required Data
The following fields are required in the request body:

- **fullname**: An object containing:
  - **firstname**: A string with a minimum length of 3 characters.
  - **lastname**: A string with a minimum length of 3 characters.
- **email**: A string that must be a valid email format and is unique.
- **password**: A string with a minimum length of 6 characters.

### Status Codes
- **201 Created**: User registration successful. Returns the generated token and user information.
- **400 Bad Request**: Validation errors occurred. Returns an array of error messages.