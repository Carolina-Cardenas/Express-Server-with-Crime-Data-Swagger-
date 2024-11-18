import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;

app.get("/crimes", async (req, res) => {
  try {
    const response = await axios.get(
      "https://brottsplatskartan.se/api/events/?location=helsingborg"
    );
    res.json(response.data.data[0]);
    // console.log(response.data.data[0]);
  } catch (err) {
    console.error(err);
  }
});

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
