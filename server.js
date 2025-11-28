const express = require("express");
const app = express();

app.use(express.json());

app.post("/mcp", async (req, res) => {
  // 必要に応じてツール処理を実装
  res.json({
    result: "Hello from Railway MCP server!",
    received: req.body,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("MCP server running on port " + port));
