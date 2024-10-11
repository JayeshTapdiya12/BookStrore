import * as wishlistService from '../services/wishlist.service';
import HttpStatus from 'http-status-codes';

export const getwishlist = async (req, res, next) => {
    const data = await wishlistService.getwishlist(req.param, req.body)
    try {
        res.status(HttpStatus.ACCEPTED).json({
            code: HttpStatus.ACCEPTED,
            data: data,
            message: 'wishlist retrived'
        })
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`
        })
    }
}



export const addwishlist = async (req, res, next) => {
    const data = await wishlistService.addwishlist(req.param, req.body)
    try {
        res.status(HttpStatus.ACCEPTED).json({
            code: HttpStatus.ACCEPTED,
            data: data,
            message: 'book addeded to wishlist'
        })
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`
        })
    }
}



export const removewishlist = async (req, res, next) => {
    const data = await wishlistService.removewishlist(req.param, req.body)
    try {
        res.status(HttpStatus.ACCEPTED).json({
            code: HttpStatus.ACCEPTED,
            data: data,
            message: 'book remove from wishlist'
        })
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`
        })
    }
}