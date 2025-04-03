import express from "express";
import { routes } from "./routes";
import { appErrors } from "./errors/appErrors";
import { sqliteConnections } from "./databases";
import { runMigrations } from "./databases/migrations";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(cookieParser());

const whitelist = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
];

app.use(
  cors({
    origin: whitelist,
    credentials: true,
  })
);
app.use(routes);

app.use(appErrors);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});

sqliteConnections()
  .then(() => {
    console.log("Database is connected!");
  })
  .catch((error) => {
    console.log("Database ERROR - ", error);
  });

runMigrations();

app.get("/test", (req, res) => {
  res.status(200).json({ message: "hello world!" });
});
