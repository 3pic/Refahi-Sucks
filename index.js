const express = require("express");

const { d0_da_g3t } = require("./func");

const app = express();
const port = 8569;
app.use(express.json());

app.post("/back_off_b1tch_u_dont_wanna_t3st_me", (req, res) => {
  let resData = d0_da_g3t(req.body);
  console.log(req.body, resData);
  res.json({
    stats: "done"
  });
});

app.post("/test", (req, res) => res.json(req.body));

app.listen(port, () => console.log(`app listening on port ${port}!`));
