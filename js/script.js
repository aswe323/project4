/*
 * TODO:
 * 	basic functionality ( I/O to index.html ) !DONE!
 *
 * 	create turn object with:
 *		token switch X/O !DONE!
 *
 * 		turn cycle mathod !DONE!
 *
 *		make interface for squares:
 *			
 *			1.access !DONE!
 *			2.change class based on gameLogic.token !DONE!
 *			3.commiting move:
 *				3a. End Turn button? <--- !DONE!
 *				3b. one click and your done? <--- CANCELED
 *				!. event listeners !DONE!
 *			4.win conditions:
 *--->				4a. brute!
 *
 *
 *
 *
 *
 *
 * 
 */

class logic  {
	constructor(token, player2, player1) {

	document.querySelector(".boxes").addEventListener("click", (event) => {
		let clicked = event.target;
		this.move(clicked);
	}
		
	);
	
	this.player2 = document.querySelector("#player2"); // X
	this.player1 = document.querySelector("#player1"); // O
		
		//setting o to start

	this.player1.setAttribute("class","players active");

	this.rowOne = [document.querySelectorAll(".box")[0], document.querySelectorAll(".box")[1], document.querySelectorAll(".box")[2]];
	this.rowTwo = [document.querySelectorAll(".box")[3], document.querySelectorAll(".box")[4], document.querySelectorAll(".box")[5]];
	this.rowThree = [document.querySelectorAll(".box")[6], document.querySelectorAll(".box")[7], document.querySelectorAll(".box")[8]];
	this.token = "o";
	}

	//logic for the click event on the boxes

	move(box){
		if (box.getAttribute("class") === "box box-filled-1"  || box.getAttribute("class") === "box box-filled-2" ) {
			console.log("yep");
			return
		}else if(this.token === "o"){
			box.setAttribute("class", "box box-filled-1");
			box.setAttribute("claim",this.token);
			this.nextTurn();
		}else if(this.token === "x"){
			box.setAttribute("class", "box box-filled-2");
			box.setAttribute("claim",this.token);
			this.nextTurn();
		};
	}

	//simple switch function to change then active player element and token :)
	//not dry enough?
	nextTurn(){
			//checking for a winner BEFORE switching the token :D
		this.winner();
		if (this.token === "x"){
			this.token = "o";
			this.player1.setAttribute("class","players active");
			this.player2.setAttribute("class","players");
			

		}else{
			this.token = "x";
			this.player2.setAttribute("class","players active");
			this.player1.setAttribute("class","players");
		};
	};

	//win condition checker
	
	winner(){

		//complete row claimed
			//
		if (this.rowOne[0].getAttribute("claim") === this.token && this.rowOne[1].getAttribute("claim") === this.token && this.rowOne[2].getAttribute("claim") === this.token ){
			//PLACEHOLDER 
			return console.log("works!");
		}else if(this.rowTwo[0].getAttribute("claim") === this.token && this.rowTwo[1].getAttribute("claim") === this.token && this.rowTwo[2].getAttribute("claim") === this.token ){
			//PLACEHOLDER
			return console.log("works!");
		}else if(this.rowThree[0].getAttribute("claim") === this.token && this.rowThree[1].getAttribute("claim") === this.token && this.rowThree[2].getAttribute("claim") === this.token ){
			//PLACEHOLDER
			return console.log("works!");




		//comeplete horizonal.. row? claimed :)
			//
		}else if(this.rowOne[0].getAttribute("claim") === this.token && this.rowTwo[0].getAttribute("claim") === this.token && this.rowThree[0].getAttribute("claim") === this.token ){
			//PLACEHOLDER
			return console.log("works!");
		}else if(this.rowOne[1].getAttribute("claim") === this.token && this.rowTwo[1].getAttribute("claim") === this.token && this.rowThree[1].getAttribute("claim") === this.token ){
			//PLACEHOLDER
			return console.log("works!");
		}else if(this.rowOne[2].getAttribute("claim") === this.token && this.rowTwo[2].getAttribute("claim") === this.token && this.rowThree[2].getAttribute("claim") === this.token ){
			//PLACEHOLDER
			return console.log("works!");



		//diagenel claims
			//
		}else if(this.rowOne[0].getAttribute("claim") === this.token && this.rowTwo[1].getAttribute("claim") === this.token && this.rowThree[2].getAttribute("claim") === this.token ){
			//PLACEHOLDER
			return console.log("works!");
		}else if(this.rowOne[2].getAttribute("claim") === this.token && this.rowTwo[1].getAttribute("claim") === this.token && this.rowThree[0].getAttribute("claim") === this.token ){
			//PLACEHOLDER
			return console.log("works!");
		}else{
			return
		}; 
	};

	
}

let gameLogic = new logic();







