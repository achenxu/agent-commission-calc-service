import bodyParser from "body-parser";
import boom from "boom";
import express from "express";

import {CommissionsController} from "./controllers";

const app = express();
const port: number | string = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routing definitions
app.use("/commissions", CommissionsController);

// for boom http error handling
app.use((err: boom, req: express.Request, res: express.Response, next: express.NextFunction) => {
    return res.status(err.output.statusCode).json(err.output.payload);
});

app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
});

export default app;
