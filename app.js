// jshint esversion:6

//without using html file

// const express = require("express");

// const https = require("https");
// const app=express();

// app.get("/",function(req,res){
    
//     const url="https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=dfa7f16b9e65edade884a65c7ce691bb&units=metric";
//     https.get(url,function(response){
//         console.log(response.statusCode);

//         response.on("data",function(data){
//             const w=JSON.parse(data);
//             const temp=w.main.temp;
//             const weatherDescription=w.weather[0].description;
//             const city=w.name;
//             const img=w.weather[0].icon;
//             const imgurl="http://openweathermap.org/img/wn/"+img+"@2x.png";
//             console.log(weatherDescription);
//             console.log(temp+"'C");
//             console.log(city);
//             res.write("<h1>City:</h1>"+city);
//             res.write("<h1>Temprature:</h1>"+temp);
//             res.write("<h1>Description:</h1>"+weatherDescription+"\n");
//             res.write("<img src="+imgurl+">");
//             res.send();
//             });
//         });
//     });
//     app.listen(3000,function(){
//     console.log("server is running at localhost 3000");
// });

//using html file

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    //console.log(req.body.cityName);
    const city=req.body.cityName;
    const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=dfa7f16b9e65edade884a65c7ce691bb&units=metric";
        https.get(url,function(response){
            console.log(response.statusCode);
    
            response.on("data",function(data){
                const w=JSON.parse(data);
                const temp=w.main.temp;
                const weatherDescription=w.weather[0].description;
                const city=w.name;
                const img=w.weather[0].icon;
                const imgurl="http://openweathermap.org/img/wn/"+img+"@2x.png";
                console.log(weatherDescription);
                console.log(temp+"'C");
                console.log(city);
                res.write("<h1>City:</h1>"+city);
                res.write("<h1>Temprature:</h1>"+temp);
                res.write("<h1>Description:</h1>"+weatherDescription+"\n");
                res.write("<img src="+imgurl+">");
                res.send();
                });
            });

});

app.listen(3000,function(){
    console.log("server is running at localhost 3000");

});