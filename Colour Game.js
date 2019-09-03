 window.setTimeout(function(){

 	var numSquares=6;
 	var colours=generateRandomColours(numSquares);

 	var squares= document.querySelectorAll(".square");
 	var pickedColour=pickColour();
 	var colourDisplay=document.getElementById("hi");
 	var messageDisplay=document.querySelector("#message");
 	var h1=document.querySelector("h1");
 	var resetButton=document.querySelector("#reset");
 	var easybtn=document.querySelector("#easybtn");
 	var hardbtn=document.querySelector("#hardbtn");

 	easybtn.addEventListener("click", function(){
 		easybtn.classList.add("selected");
 		hardbtn.classList.remove("selected");
 		numSquares=3;
 		colours=generateRandomColours(numSquares);
 		pickedColour=pickColour();
 		colourDisplay.textContent=pickedColour;
 		resetButton.textContent="new colours";
 		messageDisplay.textContent="";
 		for(var i=0;i<squares.length;i++){
 			if(colours[i]){
 				squares[i].style.background=colours[i];
 			}else{
 				squares[i].style.display="none";
 			}
 		}


 	});


 	hardbtn.addEventListener("click", function(){
 		hardbtn.classList.add("selected");
 		easybtn.classList.remove("selected");
 		numSquares=6;
 		colours=generateRandomColours(numSquares);
 		pickedColour=pickColour();
 		colourDisplay.textContent=pickedColour;
 		resetButton.textContent="new colours";
 		messageDisplay.textContent="";
 		for(var i=0;i<squares.length;i++){
 				squares[i].style.background=colours[i];
 				squares[i].style.display="block";
 			}

 	});

 	resetButton.addEventListener("click", function(){
 		colours=generateRandomColours(numSquares);
 		pickedColour=pickColour();
 		colourDisplay.textContent= pickedColour;
 		for(var i=0;i<colours.length;i++){
 			squares[i].style.background=colours[i];
 		}
 		this.textContent="New colours";
 		h1.style.background="steelblue";
 		messageDisplay.textContent="";

 	})


 	colourDisplay.textContent=pickedColour;

 	for(var i=0; i<colours.length;i++){
 		squares[i].style.background=colours[i];

 		squares[i].addEventListener("click",function(){
 			var clickedColour=this.style.background;

 			if(clickedColour === pickedColour){
 				messageDisplay.textContent="Correct!";
 				changeColour(clickedColour);
 				h1.style.background=clickedColour;
 				resetButton.textContent="Play Again?";
 			}else{
 				this.style.background="#232323";
 				messageDisplay.textContent="Try Again!";

 			}
 		});
 	}


 	function changeColour(colour){
 		for(var i=0;i<colours.length;i++){
 			squares[i].style.background=colour;
 		}

 	}


 	function pickColour(){
 		var random=Math.floor(Math.random()*colours.length);
 		return colours[random];
 	}

 	function generateRandomColours(num){
 		var arr=[];
 		for(var i=0;i<num;i++){
 			arr.push(randomColour());
		}
 		return arr;
 	}

 	function randomColour(){
 		var r= Math.floor(Math.random()*256);
 		var g= Math.floor(Math.random()*256);
 		var b= Math.floor(Math.random()*256);
 		return "rgb("+r+", "+g+", "+b+")";
 	}
 },500);


