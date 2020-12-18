// Core
import express from 'express'

const app = express();
const port = 9000;

// Routes
const one = 1;
const two = 2;

app.get("/", (_req, res) => res.send(`1 + 2 = ${one + two}`));
app.listen(port);

// Message
console.log(`[app] : http://localhost:${port}`);
