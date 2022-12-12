import express from "express";
import morgan from "morgan";
import cors from "cors";

import router from "./routes/image.js";

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/images", router);

app.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}`);
  });

export default app;