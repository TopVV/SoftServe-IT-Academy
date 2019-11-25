function refereeHelper (matchEvents) {
    matchEvents.forEach(element => {
        switch(element[2]) {
            case "Y":
                    team${element[0]}[element[1]].receiveYellowCard;
                    break
        }
         
    });
}


class Team {
    constructor(teamName) {
        this.teamName = teamName;
        this.players = [];
    }
    addPlayer(player){
        this.players.push(player);
    }
    hasSufficientPlayers() {
        return this.players.length>7
    }
}

class Player {
    constructor(name) {
        this._name = name;
        this._nYellowCards = 0;
        this._nRedCards = 0;
        this._inGame = true;
    }
    getPlayersName() {
        return this._name
    }
    receiveYellowCard() {
        this._nYellowCards++
    }
    receiveRedCard() {
        this._nRedCards++
    }
    isInGame() {
        return this.inGame
    }
}

function collectPlayersInTeam(team, numberOfPlayers) {
    for(let i = 0; i < numberOfPlayers; i++) {
        team.addPlayer(new Player(i+1))
    }
}

let teamA = new Team("A");
let teamB = new Team("B");
collectPlayersInTeam(teamA, 11);
collectPlayersInTeam(teamB, 11);



// ["A4Y", "A4Y"]