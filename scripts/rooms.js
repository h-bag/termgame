// functions, classes & object definitions for room shit - this file will be very messy


// define room class
class Room{
    constructor(name,desc,exits, coords, npcs, items) {
        this.name = name;
        this.desc = desc;
        this.exits = exits;
        this.coords = coords;
        this.npcs = npcs;
        this.items = items;

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
                                [0,0,0],
                                null,
                                null);

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