const http = require("http");
const app = require("./app");

const PORT = 3000;

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT} ...`);
});
