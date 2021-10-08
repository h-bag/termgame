// all actual game code goes here
// sort of an entry point for all other scripts, as this is what's ran whenever the player submits
// ANY command - it's all handled by the parseCommand function


// create player object - put this in its own file later, jackass
const player = {
    health:100,
    sanity:100,
    energy:100,
    hunger:100,
    money:50,
    coords:[0,0,0] // x, y, z respectively
};                 // north - x goes up, south - x goes down, east - z goes up, west - z goes down
                   // im sure you can figure out y; up is up, down is down. obviously.


// entry point for all player commands, essentially a "hub" for that shit i guess
function parseCommand(cmd) {
    getCurrentRoom(); // defined in rooms.js
    switch(splitCmd(cmd)[0].toLowerCase()) {
        case "help":
            printOut("lol. lmao.");
            break;
        case "look":
            lookCmd();
            break;
        case "go":
            goCmd(splitCmd(cmd)[1]);
            break;
        // if none of the commands match
        default:
            printOut("That makes no sense. Try using 'HELP'.");
    }
}



///////////////////////////////////////////////
//    OUTPUT FUNCTIONS
//
// printOut - prints the user's command, and then
//            the output of that command
//
// printOutNoEcho - like printOut, but doesn't
//                  echo the user's command
///////////////////////////////////////////////

function printOutNoEcho(output) {
    document.getElementById("outputBox").innerHTML += output;
}

function printOut(output) {
    cmd = document.getElementById('commandbox').value;
    output = ('<p style="color:white;margin:0">&gt;' + cmd.toUpperCase() + '</p>' + output);
    document.getElementById("outputBox").innerHTML += output;
}

function splitCmd(cmd) {
    cmdFirstWord = cmd.split(' ')[0];
    cmdOtherWords = cmd.replace(cmdFirstWord + ' ', '');
    return [cmdFirstWord,cmdOtherWords];
}

function isEqual(arr1, arr2) {
	// Check if the arrays are the same length
	if (arr1.length !== arr2.length) return false;
	// Check if all items exist and are in the same order
	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}
	// Otherwise, return true
	return true;
};