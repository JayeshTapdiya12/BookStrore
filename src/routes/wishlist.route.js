import express from 'express';
import * as wishlistController from '../controllers/wishlist.controller';
import { userAuth } from '../middlewares/auth.middleware';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.get('/getwishlist', userAuth(process.env.hidden_key), wishlistController.getwishlist);

router.get('/addwishlist/:_id', userAuth(process.env.hidden_key), wishlistController.addwishlist);

router.delete('/reovewishlist/:_id', userAuth(process.env.hidden_key), wishlistController.removewishlist);







export default router;