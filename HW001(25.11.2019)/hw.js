"use strict";

class Player {
    constructor(name) {
        this._name = name;
        this._yellowCards = 0;
        this._redCards = 0;
    }

    receiveYellowCard() {
        this._yellowCards++
    }
    receiveRedCard() {
        this._redCards++
    }
    isInGame() {
        return this._yellowCards < 2 && this._redCards === 0
    }
}

class Team {
    constructor(name, numberOfPlayers) {
        this._name;
        this.players = [];
        for (let i = 0; i < numberOfPlayers; i++) {
            this.players.push(new Player(i + 1))
        }
    }
    howManyInGame() {
        return this.players.reduce((counter, currentPlayer) => {
            if (currentPlayer.isInGame()) {
                return ++counter
            }
            return counter
        }, 0);
    }
    hasSufficientPlayers() {
        return this.howManyInGame() >= 7
    }
}

function menStillStanding(matchEvents) {

    let teamA = new Team("A", 11);
    let teamB = new Team("B", 11);

    matchEvents.forEach(element => {

        if (teamA.hasSufficientPlayers() && teamB.hasSufficientPlayers()) {
            let playerNumber = Number(element.match(/\d+/g)[0]) - 1;
            let cardColor = element.match(/[A-Z]$/)[0];
            let currentPlayer = (element[0] === "A") ? teamA.players[playerNumber] : teamB.players[playerNumber];

            if (currentPlayer.isInGame()) {
                cardColor === "Y" ? currentPlayer.receiveYellowCard() : currentPlayer.receiveRedCard()
            }
        }
    })

    return [teamA.howManyInGame(), teamB.howManyInGame()]
}