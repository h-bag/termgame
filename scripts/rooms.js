// functions, classes & object definitions for room shit - this file will be very messy


// define room class
class Room{
    constructor(name,desc,exits, coords) {
        this.name = name;
        this.desc = desc;
        this.exits = exits;
        this.coords = coords;

        // functions to be ran upon object creation
        this.addToArray = function() {
            rooms.push(this);
        }
        this.addToArray(); // add room object to array of rooms
    }
}

// init rooms array
var rooms = [];

// maybe store room descs in seperate files, so they dont take up shitloads of space?
let player_apartment = new Room('Your Apartment',
                                'uhhh',
                                ['south'],
                                [0,0,0]);

let devroom = new Room('Dev Room', "You shouldn't be here.", ['north'], [-1,0,0]);


// set starting room
let current_room = player_apartment;


/////////////////////////////////////
//   FUNCTIONS
/////////////////////////////////////

function getCurrentRoom() {
    for (let i = 0; i < rooms.length; i++) {
        // check the player's coordinates against every room's coordinates
        if(isEqual(rooms[i].coords,player.coords)) {
            current_room = rooms[i]
        }
    }
}

// player movement - figured this should go in with the room shit
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
            output = "you moved bitch";
            getCurrentRoom();
        }

        if(!exit_found) {
            output = "You can't go that way.";
        }
    }
}