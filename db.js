import mongoose from "@kratosbase/kratos";

export default async function connectDB() {
  if (mongoose.connection.readyState === 1) return; // Avoid duplicate connections

  await mongoose
    .connect('mongodb://127.0.0.1:27017/learnly')
    .then((response) => {
      return response
    })
    .catch((err) => {
      console.log(err)
    })
}