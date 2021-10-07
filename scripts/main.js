// all actual game code goes here

// define output var
let output = String;

// create player object - put this in its own file later, jackass
const player = {
    health:100,
    sanity:100,
    energy:100,
    hunger:100,
    money:50,
    coords:[0,0,0]
};


// entry point for all player commands, essentially a "hub" for that shit i guess
function parseCommand(cmd) {
    getCurrentRoom(); // defined in rooms.js
    switch(cmd) {
        case "help":
            output = "lol. lmao.<br>";
            break;
        case "look":
            output = (current_room.name + '<br>' + current_room.desc);
            break;
        // if none of the commands match
        default:
            output = "That makes no sense. Try using 'HELP'.<br>";
    }

    // print output shit to user's screen
    output = ('<p style="color:white;margin:0">&gt;' + cmd.toUpperCase() + '</p>' + output)
    document.getElementById("outputBox").innerHTML += output;
}