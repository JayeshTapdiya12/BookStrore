import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to get all users
router.get('', userController.getAllUsers);

//route to create a new user
router.post('/sign', newUserValidator, userController.sign);


// Route ti get the login by user
router.post('/login', userController.login)


//route to delete a single user by their user id
router.delete('/:_id', userController.deleteUser);




// //route to get a single user by their user id
// router.get('/:_id', userAuth, userController.getUser);

// //route to update a single user by their user id
// router.put('/:_id', userController.updateUser);




export default router;
