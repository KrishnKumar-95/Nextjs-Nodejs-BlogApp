import Express from "express";
import cors from "cors";
import Routes from "./Routes/index.mjs";
import { connectDB } from "./mongoose.js";
import compression from "compression";

const App = Express();
const PORT = 8080;

App.use(compression());
App.use(cors({ origin: true }));

App.use(Express.json({ limit: "50mb" }));
App.use(Express.urlencoded({ extended: true }));

App.get("/", (req, res) => {
  res.send(`http://localhost:${PORT}`);
});

App.use(Routes);
connectDB().catch(console.dir);

App.listen(PORT, () => {
  console.log(`http://localhost:${PORT} is working.`);
});
