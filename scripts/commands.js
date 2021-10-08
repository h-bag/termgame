// command functions
// the parseCommand function in main.js probably sent the user command here, to one of these functions
// i'll try and keep each command marked with a comment so you know what it's for, even though the function names should be pretty
// self-explanatory


// MOVEMENT COMMAND

function goCmd(exit) {
    exit_found = false;
    for (let i = 0; i < current_room.exits.length; i++) {
        if (exit === current_room.exits[i]) {
            exit_found = true;
            
            // determine player's new coords - feel free to clean this up if you can do it better
            switch(exit) {
                case "north":
                    player.coords[0]++;
                    break;
                case "south":
                    player.coords[0]--;
                    break;
                case "east":
                    player.coords[2]++;
                    break;
                case "west":
                    player.coords[2]--;
                    break;
                case "up":
                    player.coords[1]++;
                    break;
                case "down":
                    player.coords[1]--;
                    break;
            }
            printOut("You make your way to the " + exit + ".<br>");
            getCurrentRoom();
            lookCmd(false); // print room details after move
        }

        if(!exit_found) {
            printOut("You can't go that way.");
        }
    }
}


// LOOK COMMAND

function lookCmd(echoin=true) {
    if (current_room.exits != null) {
        if (current_room.exits.length > 1) {
            if (echoin === true) {
                printOut(current_room.name + '<br>' + current_room.desc + '<br><br>There are exits to the idfk fill me later');
            } else {
                printOutNoEcho(current_room.name + '<br>' + current_room.desc + '<br><br>There are exits to the idfk fill me later');
            }
        } else {
            if (echoin === true) {
                printOut(current_room.name + '<br>' + current_room.desc + '<br>There is an exit to the ' + current_room.exits[0] + '.');
            } else {
                printOutNoEcho(current_room.name + '<br>' + current_room.desc + '<br>There is an exit to the ' + current_room.exits[0] + '.');
            }
        }
    }
}