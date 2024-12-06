// resources/consultation.js
import { Joi } from '@kratosbase/kratos'

const commonRules = {
    client_name: Joi.string().trim().required(),
    doctor_name: Joi.string().trim().required(),
    meeting_link: Joi.string().trim(),
    date: Joi.date().required(),
    registration_date: Joi.date()
}

const consultation = {
    schema: {
        client_name: { type: String, required: true },
        doctor_name: { type: String, required: true },
        date: { type: String, required: false },
        meeting_link: { type: String, required: false },
        registration_date: { type: Date, default: Date.now, required: true }
    },

    validationRules: {
        post: {
            rules: commonRules,
            roles: ['user', 'doctor']
        },

        get: {
            rules: {
                client_name: Joi.string().trim(),
                doctor_name: Joi.string().trim(),
                date: Joi.date(),
                registration_date: Joi.date()
            },
            roles: ['user', 'doctor']
        }
    }
}

export default consultation