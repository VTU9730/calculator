const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const app=express();
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
var sum="";
var num1="";
var num2="";
var sub="";
var mul="";
var divide="";
var obj=[];
app.get("/",function(req,res){
  res.render("about",{numa:num1,sum:sum,numb:num2,sub:sub,mul:mul,divide:divide});
});

app.post("/",function(req,res){
   num1=Number(req.body.num1);
   num2=Number(req.body.num2);
   obj.push(req.body);
   var exp=req.body.exp;
   switch(exp){
     case "+":
     {
       sum=num1+num2;
        break;
     }
     case "-":
     {
        sub=num1-num2;
         break;
     }
     case "*":
     {
       mul=num1*num2;
        break;
     }
     case "/":
     {
       divide=Math.floor(num1/num2);
       break;
     }
     default:{
       console.log("something is fishy");
     }
   }
   res.redirect("/");
   console.log(num1);
   console.log(num2);
   console.log(sum);
   console.log(obj);
});

app.listen(3000,function(){
  console.log("server is running on 3000");
});
