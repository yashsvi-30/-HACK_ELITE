var express     = require("express");
var    app         = express();
var    bodyParser  = require("body-parser");
var    request		= require("request");
var    mongoose = require("mongoose");


//connection for mongoose to be created
//


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:"true"}));
var URL= "mongodb://localhost:27017/blockChain";

//routes

//root route
app.get("/",function(req, res){
  	res.render("landing");
});

app.get("/info",function(req,res){
	res.render("info");
});
//index route
app.get("/home",function(req,res){

	request(URL,function(error,response,body){
		if(!error && response.statusCode == 200){
			var data = JSON.parse(body);
			res.render("home",{data : data});
		} 
	}); 
});

//post route
app.post("/home",function(req,res){
		var query = req.body.query;
	    var url = "show/"+query;
	    res.redirect(url);
	}); 
//show route
app.get("/show",function(req,res){
	res.render("show")
});

app.get("/show/:name",function(req,res){
	var name=req.params.name;
	request(URL,function(error,response,body){
		if(!error && response.statusCode == 200){
			var data = JSON.parse(body);
			data.forEach(function(data){
				if(data.name==name){
				res.render("show",{data : data});
				}
			});
		} 
	});
});


//detail route
app.get("/show/:name/:time",function(req,res){
	var name=req.params.name,
		time=req.params.time;
	request(URL,function(error,response,body){
		if(!error && response.statusCode == 200){
			var data = JSON.parse(body);
			data.forEach(function(data){
				if(data.name.toLowerCase()==name.toLowerCase()){
					var patient =data;
				if(time==patient .timeframe[0].when){
					res.render("info",{data : patient });
				}
				else{
					patient.timeline.forEach(function(stage){
						if(stage.when==time){
							var i=patient.timeframe.indexOf(stage);
							res.render("info",{data: patient,i : i})
						}
					});
				}
				}
			});
		} 
	});
});



//server
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The Server Has Started!");
});

// var port_number = server.listen(process.env.PORT || 3000);
// app.listen(port_number);




// app.listen(3000, function(){
// console.log("The Server Has Started on localhost 3000!");
//});
 
