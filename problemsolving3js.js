"use script";
function getUserInput(){
	let info = prompt("Enter anything you want");
	return info;
}

function lettersCondensed(userInput){
	// characters = characters.split("");
	let long = userInput.length;
	let counter = 1;
	let everything = "";
	for (let i = 0; i < long; i++){
		if(userInput.charAt(i) === userInput.charAt(i + 1)){
			counter++;

		}
		else{
		    let record = counter + userInput.charAt(i);
			everything += record;
			counter = 1;

		}
	}
    return everything;  
}
let userInput = getUserInput();
let trial = lettersCondensed(userInput);
console.log(trial);

