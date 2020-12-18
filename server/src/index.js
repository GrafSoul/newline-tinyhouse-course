// Core
const express = require("express");
const app = express();
const port = 9000;

// Routes
app.get("/", (req, res) => res.send("Hello World"));
app.listen(port);

// Message
console.log(`[app] : http://localhost:${port}`);
