// jshint esversion:8
const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const exphbs=require("express-handlebars");
const nodemailer=require("nodemailer");
const https=require("https");
const path=require('path');
const app=express();
app.engine('handlebars',exphbs());
app.set('view engine','handlebars');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/index.html");
});

app.get("/index.html",(req,res)=>{
  res.sendFile(__dirname+"/index.html");
});

app.get("/contact.html",(req,res)=>{
  res.sendFile(__dirname+"/contact.html");
});
app.get("/services.html",(req,res)=>{
  res.sendFile(__dirname+"/services.html");
});
app.get("/process.html",(req,res)=>{
  res.sendFile(__dirname+"/process.html");
});
app.get("/work.html",(req,res)=>{
  res.sendFile(__dirname+"/work.html");
});
app.get("/lcr.html",(req,res)=>{
  res.sendFile(__dirname+"/lcr.html");
});
app.get("/aboutus.html",(req,res)=>{
  res.sendFile(__dirname+"/aboutus.html");
});
app.post("/send",(req,res)=>{
  var fname=req.body.fname;
  var lname=req.body.lname;
  var email=req.body.email;
  var subject=req.body.subject;
  var message=req.body.message;
  const output=`
  <p>You have a new contact request</p>
  <h3>Contact Details</h3>
  <ul>
  <li>First Name : ${req.body.fname}</li>
  <li>Last Name : ${req.body.lname}</li>
  <li>Email : ${req.body.email}</li>
  <li>Subject : ${req.body.subject}</li>
  <li>Message : ${req.body.message}</li>
  </ul>`;
  console.log(output);
  async function main() {
  let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'gnanasai9966250545@gmail.com', // generated ethereal user
    pass: '*****', // generated ethereal password
  },

});

// send mail with defined transport object
let info = await transporter.sendMail({
  from: req.body.email, // sender address
  to: "gnanasai9966250545@gmail.com", // list of receivers
  subject: req.body.subject, // Subject line
  text: "Hello world?", // plain text body
  html: output, // html body
});
//
res.sendFile(__dirname+"/success.html");
console.log("Message sent: %s", info.messageId);


console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

// main().catch(console.error);
main().catch((error)=>{
  res.sendFile(__dirname+"/failure.html");
  console.log(error);
});




});
app.listen(process.env.PORT || 8000,(req,res)=>{
  console.log("server is running at port 8000");
});
// list id
// 71ec55f9c4
