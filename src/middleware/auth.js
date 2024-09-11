
import jwt from 'jsonwebtoken';
import AppError from '../utils/AppError.js';
import userModel from '../../database/models/user.model.js';


const Auth = (req, res, next) => {
    jwt.verify(req.header('token'), process.env.SECRET_KEY, async (err, decoded) => {
        if (err) return next(new AppError(err, 409))
        req.body.id = decoded.userId
        next()
    })
}
const AuthCompany = (req, res, next) => {
    jwt.verify(req.header('token'), process.env.SECRET_KEY, async (err, decoded) => {
        if (err) return next(new AppError(err, 409))
        let user = await userModel.findOne({ _id: decoded.userId, role: 'Company_HR' })
        if (user) {
            req.body.user = user
            next()
        } else {
            next(new AppError('not have the access', 409))
        }

    })
}

export {
    AuthCompany,
    Auth
} 