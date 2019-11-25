class Player {
    constructor(name) {
        this._name = name;
        this._yellowCards = 0;
        this._redCards = 0;
    }

    receiveYellowCard() {
        this._yellowCards++
    }
    receiveRedCard () {
        this._redCards++
    }
    isInGame () {
        return this._yellowCards < 2 && this._redCards === 0
    }
}

class Team {
    constructor(name, numberOfPlayers) {
        this._name;
        this.players = [];
        for(let i = 0; i < numberOfPlayers; i++) {
            this.players.push(new Player(i + 1))
        }
    }
    hasSufficientPlayers() {
        return this.players.length > 7
    }
}

let teamA = new Team("A", 11);
let teamB = new Team("B", 11);

function menStillStanding(matchEvents) {
    let A = teamA;
    let B = teamB;

    matchEvents.forEach(element => {
        ele
    });
}







// ["A4Y", "A4Y"]