function lookAtTheHand() {
    let aceSpades = document.getElementById("AS").checked;
    let aceDiamonds = document.getElementById("AD").checked;
    let aceClubs = document.getElementById("AC").checked;
    let aceHearts = document.getElementById("AH").checked;
    let twoSpades = document.getElementById("2S").checked;
    let twoDiamonds = document.getElementById("2D").checked;
    let twoClubs = document.getElementById("2C").checked;
    let twoHearts = document.getElementById("2H").checked;
    let threeSpades = document.getElementById("3S").checked;
    let threeDiamonds = document.getElementById("3D").checked;
    let threeClubs = document.getElementById("3C").checked;
    let threeHearts = document.getElementById("3H").checked;
    let fourSpades = document.getElementById("4S").checked;
    let fourDiamonds = document.getElementById("4D").checked;
    let fourClubs = document.getElementById("4C").checked;
    let fourHearts = document.getElementById("4H").checked;
    let fiveSpades = document.getElementById("5S").checked;
    let fiveDiamonds = document.getElementById("5D").checked;
    let fiveClubs = document.getElementById("5C").checked;
    let fiveHearts = document.getElementById("5H").checked;
    let sixSpades = document.getElementById("6S").checked;
    let sixDiamonds = document.getElementById("6D").checked;
    let sixClubs = document.getElementById("6C").checked;
    let sixHearts = document.getElementById("6H").checked;
    let sevenSpades = document.getElementById("7S").checked;
    let sevenDiamonds = document.getElementById("7D").checked;
    let sevenClubs = document.getElementById("7C").checked;
    let sevenHearts = document.getElementById("7H").checked;
    let eightSpades = document.getElementById("8S").checked;
    let eightDiamonds = document.getElementById("8D").checked;
    let eightClubs = document.getElementById("8C").checked;
    let eightHearts = document.getElementById("8H").checked;
    let nineSpades = document.getElementById("9S").checked;
    let nineDiamonds = document.getElementById("9D").checked;
    let nineClubs = document.getElementById("9C").checked;
    let nineHearts = document.getElementById("9H").checked;
    let tenSpades = document.getElementById("10S").checked;
    let tenDiamonds = document.getElementById("10D").checked;
    let tenClubs = document.getElementById("10C").checked;
    let tenHearts = document.getElementById("10H").checked;
    let jackSpades = document.getElementById("JS").checked;
    let jackDiamonds = document.getElementById("JD").checked;
    let jackClubs = document.getElementById("JC").checked;
    let jackHearts = document.getElementById("JH").checked;
    let queenSpades = document.getElementById("QS").checked;
    let queenDiamonds = document.getElementById("QD").checked;
    let queenClubs = document.getElementById("QC").checked;
    let queenHearts = document.getElementById("QH").checked;
    let kingSpades = document.getElementById("KS").checked;
    let kingDiamonds = document.getElementById("KD").checked;
    let kingClubs = document.getElementById("KC").checked;
    let kingHearts = document.getElementById("KH").checked;
    let firstJoker = document.getElementById("J1").checked;
    let secondJoker = document.getElementById("J2").checked;

    const isItInTheHand = [twoSpades, threeSpades, fourSpades, fiveSpades, sixSpades, sevenSpades, eightSpades, nineSpades, tenSpades, jackSpades, queenSpades, kingSpades, aceSpades, twoDiamonds, threeDiamonds, fourDiamonds, fiveDiamonds, sixDiamonds, sevenDiamonds, eightDiamonds, nineDiamonds, tenDiamonds, jackDiamonds, queenDiamonds, kingDiamonds, aceDiamonds, twoClubs, threeClubs, fourClubs, fiveClubs, sixClubs, sevenClubs, eightClubs, nineClubs, tenClubs, jackClubs, queenClubs, kingClubs, aceClubs, twoHearts, threeHearts, fourHearts, fiveHearts, sixHearts, sevenHearts, eightHearts, nineHearts, tenHearts, jackHearts, queenHearts, kingHearts, aceHearts, firstJoker, secondJoker];

    findHand(isItInTheHand);
    //let message = getMessage(hand); 
    //updateMessage(message);

}

function findHand(isItInTheHand) {
    var hand = [];
    for (let x = 0; x < 4; x++) {
        for (let i = (13 * x); i < (13 * (x + 1)); i++) {
            if (isItInTheHand[i] == true) {
                let suit = ""
                if (x == 0) {
                    suit = "Spades";
                } else if (x == 1) {
                    suit = "Diamonds";
                } else if (x == 2) {
                    suit = "Clubs";
                } else {
                    suit = "Hearts";
                }
                let num = (i - (13 * x)) + 2;
                const details = [num, suit];
                hand.push(details);
            }
        }
    }
    for (let y = 53; y < 55; y++) {
        if (isItInTheHand[y] == true) {
            const details = [100, "Joker"];
            hand.push(details);
        }
    }
    document.getElementById("test").innerHTML = hand;
}
