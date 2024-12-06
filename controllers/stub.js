import { Joi } from '@kratosbase/kratos'

export default async function chat(req, res) {
    const validationSchema = {
        message: Joi.string().required().label('Message')
    }

    const { error, value } = Joi.object(validationSchema).validate(req.body)

    if (error) {
        return res.status(400).send({ status: 400, message: error.details[0].message })
    } else {
        switch (value.message) {
            case 'hello':
                return res.status(200).send({ status: 200, message: 'Hi, how may I help you today?' })       
                break;
            
            case 'what is your name?':
                return res.status(200).send({ status: 200, message: 'Stub. Mind sharing yours?' })
            default:
                return res.status(200).send({ status: 200, message: "I don't understand that... try: 'hello' or 'what is your name?'" })
                break;
        }
    }
}