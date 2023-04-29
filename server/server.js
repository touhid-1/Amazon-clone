const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const Stripe = require("stripe")('sk_test_51N1opmSA4RHaflmj5Y854pz0eV6F7kGqHFWmg7o6gU6xmnKLTLk3IuJVkOO2uNtl0ZQsUICAGQqFE0WxqFJvPlsg00NWEXbqZF');


app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

const port = 8000;
app.get("/", (req, res) => {
    res.send("This is amazon's Backend");
});


app.post("/pay", async (req, res) => {
    console.log(req.body.token);
    console.log(log);  //post is working 
    await Stripe.charges.create({
        source: req.body.token.id,
        amount: req.body.amount,
        currency: "rs",
    })
})


app.listen(port, () => {
    console.log(`Server is running on Port ${port}`)
});