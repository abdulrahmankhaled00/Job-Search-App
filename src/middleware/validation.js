import AppError from "../utils/AppError.js";

export const validation = (schema) => {
    return (req, res, next) => {
        if (req.body.userTechSkills) {
            req.body.userTechSkills = JSON.parse(req.body.userTechSkills)
        }
        if (req.body.userSoftSkills) {
            req.body.userSoftSkills = JSON.parse(req.body.userSoftSkills)
        }
        const { error } = schema.validate({ ...req.body, ...req.params, ...req.query, ...req.header }, { abortEarly: false })
        if (error) {
            const allMsg = []
            error.details.forEach((element) => {
                allMsg.push(element.message)
            });
            next(new AppError(allMsg, 401));
        } else {
            next()
        }
    }
}