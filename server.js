
const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "Pip Helper AI",
    status: "online",
    message: "Welcome to Pip Helper!"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    assistant: "Pip Helper AI"
  });
});

app.post("/api/chat", async (req, res) => {
  try {
    const message = req.body.message;

    if (!message || typeof message !== "string") {
      return res.status(400).json({
        error: "Please enter a message."
      });
    }

    res.json({
      reply: "Pip Helper has received your message: " + message
    });
  } catch (error) {
    res.status(500).json({
      error: "Something went wrong."
    });
  }
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Pip Helper running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log("Pip Helper running on port " + PORT);
});

