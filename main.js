// all actual game code goes here

// define output var
let output = String;

// entry point for all player commands, essentially a "hub" for that shit i guess
// note for future self: please dear GOD use a switch
function parseCommand(cmd) {
    switch(cmd) {
        case "help":
            output = "lol. lmao.<br>";
            break;
        // if none of the commands match
        default:
            output = "That makes no sense.<br>";
    }

    // print output shit to user's screen
    output = ('<p style="color:white;margin:0">&gt;' + cmd.toUpperCase() + '</p>' + output)
    document.getElementById("outputBox").innerHTML += output;
}