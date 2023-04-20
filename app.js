const express = require("express");
const path  = require("path");
const request = require("requests");
const https = require("https");
const bcrypt = require("bcrypt")
const app = express();



  const user = [];

  

  

  app.use(express.static(path.join(__dirname, "public")))

app.use(express.urlencoded({extended: false}))





app.post("/", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash( req.body.password, 10)
    user.push({
      id: Date.now().toString(), 
      fName: req.body.fName,
      lName: req.body.lName,
      password: hashedPassword
    })

    console.log(user)
    res.redirect("/success")
   
  } catch (error) {
    console.log(error)
    res.redirect("/")
    
  }

  
})

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Signup.html")
})


app.get("/Success", (req, res) => {
  res.sendFile(__dirname + "/Success.html")
})

app.get("/Failure", (req, res) => {
  res.sendFile(__dirname + "/Failure.html")
})

/* app.post("/", (req, res) => {
   const firstName = req.body.fName;
   const lastName = req.body.lName;
   const email = req.body.eMail;
  user.push(firstName, lastName, email)

 */


/* 


 






client.setConfig({
  apiKey: "8f09663526f635309e64ac8ad132f000-us12",
  server: "YOUR_SERVER_PREFIX",
});

const run = async () => {
  const response = await client.lists.getList("07ae5c33f3");
  console.log(response);
};

run();

*/







/* 
const client = require("@mailchimp/mailchimp_marketing");

client.setConfig({
  apiKey: "YOUR_API_KEY",
  server: "YOUR_SERVER_PREFIX",
});

const run = async () => {
  const response = await client.lists.batchListMembers("list_id", {
    members: [{}],
  });
  console.log(response);
};

run();



 */


app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running on port 3000");
});

// API KEY 
// 8f09663526f635309e64ac8ad132f000-us12
// LIST ID
// 07ae5c33f3