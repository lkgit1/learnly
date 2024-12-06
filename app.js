import Kratos from '@kratosbase/kratos'
import tests from './resources/test.js'
import consultations from './resources/consultation.js'
import history from './resources/history.js'
import routes from './routes.js'

const app = new Kratos({
  port: 9000,
  db_server: 'mongodb://127.0.0.1:27017/learnly',
  cors_origins: ['http://localhost:3000'],
  jwt_secret: "60d8169bc2212b25bffac48d37a630f1ddf274dfc19c652be180c1abe3a17a9c"
})

const defaultRoutes = app.router({
  tests: tests,
  consultations: consultations,
  medical_history: history
}).getRoutes()

app.launch(defaultRoutes, routes)