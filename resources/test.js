// resources/test.js
import { Joi } from '@kratosbase/kratos'

const commonRules = {
    full_name: Joi.string().required(),
    date: Joi.date().required(),
    type: Joi.string().trim().required()
}

const test = {
    schema: {
        full_name: { type: String, required: true },
        date: { type: Date, required: true },
        type: { type: String, required: true },
        registration_date: { type: Date, default: Date.now }
    },

    validationRules: {
        post: {
            rules: commonRules,
            roles: ['user']
        },

        get: {
            rules: {
                full_name: Joi.string(),
                date: Joi.date(),
                type: Joi.string().trim()
            },

            roles: ['user', 'doctor']
        }
    }
}

export default test