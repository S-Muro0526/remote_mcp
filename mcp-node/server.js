const express = require("express");
const app = express();

app.use(express.json());

app.post("/mcp", async (req, res) => {
  const { tool, params } = req.body;

  // --- tool routing sample ---
  if (tool === "ping") {
    return res.json({ result: "pong" });
  }

  if (tool === "echo") {
    return res.json({ result: params });
  }

  return res.status(400).json({ error: "Unknown tool" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("MCP Node.js server running on", port));
