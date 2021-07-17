const express = require ("express");
const bodyParser = require ("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmi" , function(req,res){
    res.sendFile(__dirname + "/bmi.html");
});

app.post("/bmicalculation", function(req,res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var result = weight/(height*height);

    res.send("Your BMI is : " + result + "<p>BMI weight range: <br> Less than 18.5 = Underweight <br> Between 18.5 - 24.9 = Healthy <br> Weight Between 25 - 29.9 = Overweight <br> Over 30 = Obese</p>");
});

app.listen(3000, function() {
    console.log("Server has started at port 3000. Thank you. ~ADMIN");
});