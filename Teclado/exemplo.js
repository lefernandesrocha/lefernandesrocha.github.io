//var score = [0,0];
//var player= "";
//v//ar ia = "";

//var options = ["rock","paper","scizor"];


function num(event){

	var a = event.target;
	var key = parseInt(event.keyCode);
	
	var numero = a.id.split("_")[1];

	//score[0]=25;
	document.getElementById("teclado").innerHTML +=  numero;
	//document.getElementById("teclado").innerHTML += event.keyCode;
}

function numeroTeclado(event){

	//var a = event.target;
	var key = event.which;
	
	if(key == 48){
		document.getElementById("teclado").innerHTML +=  0;
	}
	if(key == 49){
		document.getElementById("teclado").innerHTML +=  1;
	}
	if(key == 50){
		document.getElementById("teclado").innerHTML +=  2;
	}
	if(key == 51){
		document.getElementById("teclado").innerHTML +=  3;
	}
	if(key == 52){
		document.getElementById("teclado").innerHTML +=  4;
	}
	if(key == 53){
		document.getElementById("teclado").innerHTML +=  5;
	}
	if(key == 54){
		document.getElementById("teclado").innerHTML +=  6;
	}
	if(key == 55){
		document.getElementById("teclado").innerHTML +=  7;
	}
	if(key == 56){
		document.getElementById("teclado").innerHTML +=  8;
	}
	if(key == 57){
		document.getElementById("teclado").innerHTML +=  9;
	}
	
	
}
function init(){
	var options = document.getElementsByClassName("option");
	//console.log(options.length)
	for(var i=0; i< options.length; i++){
		//console.log(options)
		options[i].addEventListener("click",num);
	}
	

	document.addEventListener("keypress",numeroTeclado);
	
}


/*function iaPlay(){
	ia = options[Math.floor( Math.random()*3 )]; // pega um numero aleatorio entre 0 e 2
	var element = document.getElementById("p2_"+ia).className += " selected"; //pega a classe do html e adiciona no nome o selected
}*/

/*function action(event){
	zera();
	var choice = event.target;
	player = choice.id.split("_")[1];//pega o id da div e o split quebra a string pelo caracter _ e retorna duas strings(pois o id sempre é string1_string2) como são sempre duas stirngs, sempre vai retornar um vetor de 2 e pega a segunda opção [1];
	choice.className += " selected";
	iaPlay();
	check();
}

*/





/*
var score = [0,0];
var player = "";
var ia = ""; //inteligencia artificial

var options = ["rock","paper","scizon"];

function init (){
	var p1Rock = document.getElementById("p1_rock");
	var p1Paper = document.getElementById("p1_paper");
	var p1Scizon = document.getElementById("p1_scizon");
	
	p1Rock.onclick = action; 
	p1Paper.onclick = action;
	p1Scizon.onclick = action;
}

function iaPlay(){
	ia = options[Math.floor(Math.random()*3)]; 
	
	var element = document.getElementById("p2"_+ia).className += "selected";
}

function action(event){

	zerar();
	var choice = event.target;
	player = choice.id.split("_")[1]; 
	choice.className += "selected";
	iaPlay();
	check();

}

function zerar(){
	var options = document.getElementsByClassName("option");
	
	for (var i=0); i < options.length ; i++{
		options[i].className = "option";
	
	}
}

function check(){
	var result = document.getElementById("result").childNodes[0];
	
	if(ia == player){
		result.src = "cat.jpg"; 
	}else if( (player == "rock" && ia == "paper")
			||(player = "paper" && ia == "scizor")
			||(player = "scizor" && ia == "rock") ){
			result.src = "lose.jpg";
			score [1] ++;
			
			}else{
				result.src="victory.jpg";
				score[0]++;
			}
		
	
	}
}*/

window.onload = init; //quando a janela for carregada ela chama a função de inicio