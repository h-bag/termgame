// functions, classes & object definitions for room shit - this file will be very messy


// define room class
class Room{
    constructor(name,desc,exits, coords) {
        this.name = name;
        this.desc = desc;
        this.exits = exits;
        this.coords = coords;
    }
}


let player_apartment = new Room('Your Apartment','uhhh',null,[0,0,0]);

// init rooms array
let rooms = [player_apartment]

// set starting room
let current_room = player_apartment;


/////////////////////////////////////
//   FUNCTIONS
/////////////////////////////////////

function getCurrentRoom() {
    for (let i = 0; i < rooms.length; i++) {
        if(rooms[i].coords === player.coords) {
            current_room = rooms[i];
        }
    }
}