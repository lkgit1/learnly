// resources/history.js
import { Joi } from '@kratosbase/kratos'

const commonRules = {
    patient: Joi.string().required(),
    action: Joi.string().required(),
    date: Joi.date().required(),
    created_at: Joi.date()
}

const test = {
    schema: {
        patient: { type: String, required: true },
        action: { type: String, required: true },
        date: { type: Date, required: true },
        created_at: { type: Date, default: Date.now }
    },

    validationRules: {
        post: {
            rules: commonRules,
            roles: ['doctor']
        },

        get: {
            rules: {
                patient: Joi.string(),
                action: Joi.string(),
                date: Joi.date(),
                created_at: Joi.date()
            },

            roles: ['doctor']
        }
    }
}

export default test