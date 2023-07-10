require("dotenv").config();
const app = require("./app");
const connectDB = require("./server/config/db");

connectDB();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
