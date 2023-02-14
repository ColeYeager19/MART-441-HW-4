// JavaScript Document

//temp code//

let img = document.querySelector("img");
let choice1 = document.querySelector("choice1");
let choice2 = document.querySelector("choice2");

choice1.addEventListener("click", () => {
	img.src = "./Media/BearForest.jpg";
})

choice2.addEventListener("click", () => {
	img.src = "./Media/BearWcone.jpg";
})

//temp code//

function theForLoop()
            {
                for(var i = 0; i < 5; i++)
                {
                    document.write("Make sure to try all the endings!   ");
                }
            }

function myFunction() {
	let userInput = document.querySelector("#userInput");
	let message = document.querySelector("#message");
	
	message.innerHTML = "I hope you enjoy " + userInput.value + "!";
}

function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
	
	if (choice == 1 && answer1 == "Yes") {
        document.getElementById("story").innerHTML = "The Friendly Bear ventures out from his cave into the forest.";
        document.getElementById("choice1").innerHTML = "Go to the river";
        document.getElementById("choice2").innerHTML = "Go to the road";
		
    } else if (choice == 2 && answer2 == "No") {
        document.getElementById("story").innerHTML = "The Friendly Bear goes back to sleep.";
        document.getElementById("choice1").innerHTML = "Wake him up";
        document.getElementById("choice2").innerHTML = "Let him rest";
		
	} else if (choice == 1 && answer1 == "Wake him up") {
        document.getElementById("story").innerHTML = "The Friendly Bear ventures out from his cave into the forest.";
        document.getElementById("choice1").innerHTML = "Go to the river";
        document.getElementById("choice2").innerHTML = "Go to the road";
		
	} else if (choice == 2 && answer2 == "Let him rest") {
        document.getElementById("story").innerHTML = "The Friendly Bear takes a well deserved nap, perhaps he will venture out another day.";
		document.getElementById("choice1").innerHTML = "The End.";
		document.getElementById("choice2").innerHTML = "Restart";
		
	//Beginning of River Storyline//
		
	} else if (choice == 1 && answer1 == "Go to the river") {
        document.getElementById("story").innerHTML = "The Friendly Bear wanders down to the river and must decide on an activity.";
        document.getElementById("choice1").innerHTML = "Go fishing";
        document.getElementById("choice2").innerHTML = "Watch the sunrise over the water";

	} else if (choice == 1 && answer1 == "Go fishing") {
        document.getElementById("story").innerHTML = "The Friendly Bear dives into the river to catch his breakfast.";
        document.getElementById("choice1").innerHTML = "Success";
        document.getElementById("choice2").innerHTML = "Missed opportunity";

    } else if (choice == 2 && answer2 == "Watch the sunrise over the water") {
        document.getElementById("story").innerHTML = "The Friendly Bear stays on the shoreline and gracefully watches the sunrise.";
		document.getElementById("choice1").innerHTML = "Go fishing";
		document.getElementById("choice2").innerHTML = "Return home peacefully";

    } else if (choice == 2 && answer2 == "Return home peacefully") {
        document.getElementById("story").innerHTML = "The Friendly Bear ventures home filled by a love for nature.";
		document.getElementById("choice1").innerHTML = "The End.";
		document.getElementById("choice2").innerHTML = "Restart";
		
    } else if (choice == 1 && answer1 == "Success") {
        document.getElementById("story").innerHTML = "The Friendly Bear makes a record 35 pound salmon.";
		document.getElementById("choice1").innerHTML = "Go home satisfied by breakfast";
		document.getElementById("choice2").innerHTML = "Wait to watch the sunset before going home";
		
    } else if (choice == 1 && answer1 == "Go home satisfied by breakfast") {
        document.getElementById("story").innerHTML = "The Friendly Bear goes back to his cave happy to have achieved something so great!";
		document.getElementById("choice1").innerHTML = "The End.";
		document.getElementById("choice2").innerHTML = "Restart";
		
    } else if (choice == 2 && answer2 == "Wait to watch the sunset before going home") {
        document.getElementById("story").innerHTML = "The Friendly Bear goes home happier than he thought possible, truly a perfect day!";
		document.getElementById("choice1").innerHTML = "The End.";
		document.getElementById("choice2").innerHTML = "Restart";
		
	} else if (choice == 2 && answer2 == "Missed opportunity") {
        document.getElementById("story").innerHTML = "The Friendly Bear dissapointed has a decision to make";
		document.getElementById("choice1").innerHTML = "Return home hungry and annoyed";
		document.getElementById("choice2").innerHTML = "Make the best of the evening";
		
	} else if (choice == 1 && answer1 == "Return home hungry and annoyed") {
        document.getElementById("story").innerHTML = "The Friendly Bear returns to his cave and hopes for a better day tomorrow";
		document.getElementById("choice1").innerHTML = "The End.";
		document.getElementById("choice2").innerHTML = "Restart";
		
	} else if (choice == 2 && answer2 == "Make the best of the evening") {
        document.getElementById("story").innerHTML = "The Friendly Bear watches the sunset until dark, then stays up to stargaze. Not the day he hoped for, but a good end in his book.";
		document.getElementById("choice1").innerHTML = "The End.";
		document.getElementById("choice2").innerHTML = "Restart";
		
	//End of River Storyline//

	
	//Beginning of Road Storyline//	
		
	} else if (choice == 2 && answer2 == "Go to the road") {
        document.getElementById("story").innerHTML = "The Friendly Bear finds himself on a road under construction.";
        document.getElementById("choice1").innerHTML = "Commit traffic violation";
        document.getElementById("choice2").innerHTML = "Kindly stay out of the way";

	} else if (choice == 1 && answer1 == "Commit traffic violation") {
        document.getElementById("story").innerHTML = "The Friendly Bear steals a traffic cone.";
        document.getElementById("choice1").innerHTML = "Return home with loot";
        document.getElementById("choice2").innerHTML = "Put the cone back before going home";

    } else if (choice == 2 && answer2 == "Kindly stay out of the way") {
        document.getElementById("story").innerHTML = "The Friendly Bear stays off the road and watches the people work.";
        document.getElementById("choice1").innerHTML = "Return home happily";
        document.getElementById("choice2").innerHTML = "Fall asleep next to a worker's truck";

    } else if (choice == 1 && answer1 == "Return home with loot") {
        document.getElementById("story").innerHTML = "The Friendly Bear goes back to his cave with a new trophy, a traffic cone. A wonderful adventure indeed.";
		document.getElementById("choice1").innerHTML = "The End.";
		document.getElementById("choice2").innerHTML = "Restart";
		
    } else if (choice == 2 && answer2 == "Put the cone back before going home") {
        document.getElementById("story").innerHTML = "The Friendly Bear goes back to his cave with the knowledge that he did the right thing, a good day.";
		document.getElementById("choice1").innerHTML = "The End.";
		document.getElementById("choice2").innerHTML = "Restart";
		
    } else if (choice == 1 && answer1 == "Return home happily") {
        document.getElementById("story").innerHTML = "The Friendly Bear goes home to rest for tomorrows adventure!";
		document.getElementById("choice1").innerHTML = "The End.";
		document.getElementById("choice2").innerHTML = "Restart";
		
	} else if (choice == 2 && answer2 == "Fall asleep next to a worker's truck") {
        document.getElementById("story").innerHTML = "The Friendly Bear rests right where he is and unknowingly causes trouble for the construction crew.";
		document.getElementById("choice1").innerHTML = "The End.";
		document.getElementById("choice2").innerHTML = "Restart";
		
		
    //End of Road Storyline//
		
	//Misc. Tags//
		
	} else if (choice == 1 && answer1 == "The End.") {
        document.getElementById("story").innerHTML = "Thank you for joining us on the adventure of The Friendly Bear!";
        document.getElementById("choice2").innerHTML = "Restart";
		
	} else if (choice == 2 && answer2 == "Restart") {
        document.getElementById("story").innerHTML = "Our Friendly Bear is ready to begin his day, are you ready to start the adventure?";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";
	
	//End Misc. Tags//

	}
	
}
