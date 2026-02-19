import express from "express"
import mongoose from "mongoose";
import taskRoutes from "./routes/task.routes.js"
import { errorMiddleware} from "./middleware/error.middleware.js"
import dotenv from "dotenv";
const app = express();

app.use(express.json());

app.use("/tasks" , taskRoutes);

app.use(errorMiddleware);

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI as string).then( () => {
    console.log("Mongo DB connected");

    app.listen(3000 , () => {
        console.log("Server running on port 3000");
    });
})
.catch((error) => {
    console.error("mongoDB connection failed:" , error);
});
