const express = require("express");
const app = express();
const PORT = 50500;

app.use(express.static("public"));

app.get("/", (req, res)=> {
    console.log("hit the page");
    res.render("index.ejs");
})

app.get("/secondpage", (req, res)=> {
    console.log("hit the second page");
    res.render("secondpage.ejs");
})








app.listen(PORT, ()=> {
    console.log("now listening on port ",PORT);
});