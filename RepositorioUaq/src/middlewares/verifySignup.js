import { ROLES } from "../models/roles"
import User from "../models/user"

export const checkDuplicateUsernameOrEmail = async (req, res, next) => {
    const user = await User.findOne({matricula: req.body.matricula})

    if(user) return res.status(400).json({message: 'La matricula existe'})

    const correo = await User.findOne({correo: req.body.correo})

    if(correo) return res.status(400).json({message: 'El correo existe'})
    
    next();
}

export const checkRolesExisted = (req, res, next) => {
    if (req.body.Roles) {
        for (let i = 0; i < req.body.Roles.length; i++) {
            if(!ROLES.includes(req.body.Roles[i])) {
                return res.status(400).json({
                    message: `Los roles ${req.body.Roles[i]} no existen`
                })
            }
        }
    }
    next();
}