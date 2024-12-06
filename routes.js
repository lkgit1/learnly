import { express } from "@kratosbase/kratos"
import chat from "./controllers/stub.js"

const router = express.Router()

router.post('/chatbot', chat)

export default router