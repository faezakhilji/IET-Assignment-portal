//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const url = 'mongodb+srv://amaan-admin:test123@cluster0.ghxgg.mongodb.net/ecommerce?retryWrites=true&w=majority';
mongoose.connect(
    url, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        
        
    }
)
const postSchema = {
    subject: String,
    class : String,
    details: String,
    topic : String,
    post : String
  };
  const hostSchema = {
    top: String,
    data : String,
    link: String,
   
  };
  const lostSchema = {
   t : String,
    d : String,
    l : String,
   
  };
 
  const Post = mongoose.model("Post", postSchema);
  const Host = mongoose.model("Host", hostSchema);
  const Lost = mongoose.model("Lost", lostSchema);
  
//get
app.get("/",function(req,res){
    res.render("home");
});
app.get("/home",function(req,res){
    res.render("home");
});

app.get("/upload",function(req,res){
    res.render("upload");
});
app.get("/submit",function(req,res){
    res.render("submit");
});
app.get("/cssub",function(req,res){
    res.render("cssub");
});
app.get("/itsub",function(req,res){
    res.render("itsub");
});
app.get("/civilsub",function(req,res){
    res.render("civilsub");
});
app.get("/mechsub",function(req,res){
    res.render("mechsub");
});app.get("/eisub",function(req,res){
 res.render("eisub");
});app.get("/tcsub",function(req,res){
    res.render("tcsub");
});



   app.get("/csphy",function(req,res){
    Post.find({subject:'physics',class:'CS'},function(err,posts){
    res.render("csphy",{
        posts: posts

    });
});
});


app.get("/itphy",function(req,res){
    Post.find({subject:'physics',class:'IT'},function(err,posts){
    res.render("itphy",{
        posts: posts

    });
});
});


app.get("/civilphy",function(req,res){
    Post.find({subject:'physics',class:'CIVIL'},function(err,posts){
    res.render("civiphy",{
        posts: posts

    });
});
});


app.get("/cscpp",function(req,res){
    Post.find({subject:'cpp',class:'CS'},function(err,posts){
    res.render("cscpp",{
        posts: posts

    });
});
});

app.get("/itcpp",function(req,res){
    Post.find({subject:'cpp',class:'IT'},function(err,posts){
    res.render("itcpp",{
        posts: posts

    });
});
});

app.get("/civilcpp",function(req,res){
    Post.find({subject:'cpp',subject:'CIVIL'},function(err,posts){
    res.render("civilcpp",{
        posts: posts

    });
});
});




app.get("/assignments",function(req,res){
    Host.find({},function(err,hosts){
    res.render("assignments",{
        hosts: hosts

    });
});
});

app.get("/res",function(req,res){
    Lost.find({},function(err,losts){
    res.render("res",{
        losts: losts

    });
});
});




app.post("/upload",function(req,res){
    const post = new Post ({
        subject:req.body.subject,
        class: req.body.class,
        details: req.body.details,
        topic: req.body.topic,
        post: req.body.post
    });
  

    post.save(function(err){
        if (!err){
            res.redirect("/");
        }
      });
    
    
});



app.post("/assignments",function(req,res){
    const host = new Host ({
        top:req.body.top,
        data: req.body.data,
        link: req.body.link
       
    });
  

    host.save(function(err){
        if (!err){
            res.redirect("/");
        }
      });
    
    
});

app.post("/res",function(req,res){
    const lost = new Lost ({
        t:req.body.a,
        d: req.body.b,
        l: req.body.c
       
    });
  

    lost.save(function(err){
        if (!err){
            res.redirect("/");
        }
      });
    
    
});


app.get("/assignments",function(req,res){
    Host.find({},function(err,hosts){
    res.render("assignments",{
        hosts: hosts

    });
});
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}



app.listen( port ,function(){
    console.log("server running on 3000");
});