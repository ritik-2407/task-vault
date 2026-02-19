import express from "express"
import mongoose from "mongoose";
import taskRoutes from "./routes/task.routes.js"
import { errorMiddleware} from "./middleware/error.middleware.js"
const app = express();

app.use(express.json());

app.use("/tasks" , taskRoutes);

app.use(errorMiddleware);

const MONGO_URI = "mongodb+srv://idfcnub_db_user:ritik2407@task-vault.i5as5nr.mongodb.net/";

mongoose.connect(MONGO_URI).then( () => {
    console.log("Mongo DB connected");

    app.listen(3000 , () => {
        console.log("Server running on port 3000");
    });
})
.catch((error) => {
    console.error("mongoDB connection failed:" , error);
});
