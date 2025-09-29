import express from "express";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

// Serve css and js
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
