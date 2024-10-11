import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth, roleMiddleware } from '../middlewares/auth.middleware';

const router = express.Router();



//route to create a new user
router.post('/sign', newUserValidator, roleMiddleware, userController.sign);

router.post('/sign/admin', newUserValidator, roleMiddleware, userController.sign);

// Route ti get the login by user
router.post('/login', userController.login)


export default router;
