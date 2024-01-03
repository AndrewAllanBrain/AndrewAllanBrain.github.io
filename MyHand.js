function lookAtTheHand() {
    const isItInTheHand = [document.getElementById("2S").checked, document.getElementById("3S").checked, document.getElementById("4S").checked, document.getElementById("5S").checked, document.getElementById("6S").checked, document.getElementById("7S").checked, document.getElementById("8S").checked, document.getElementById("9S").checked, document.getElementById("10S").checked, document.getElementById("JS").checked, document.getElementById("QS").checked, document.getElementById("KS").checked, document.getElementById("AS").checked, document.getElementById("2D").checked, document.getElementById("3D").checked, document.getElementById("4D").checked, document.getElementById("5D").checked, document.getElementById("6D").checked, document.getElementById("7D").checked, document.getElementById("8D").checked, document.getElementById("9D").checked, document.getElementById("10D").checked, document.getElementById("JD").checked, document.getElementById("QD").checked, document.getElementById("KD").checked, document.getElementById("AD").checked, document.getElementById("2C").checked, document.getElementById("3C").checked, document.getElementById("4C").checked, document.getElementById("5C").checked, document.getElementById("6C").checked, document.getElementById("7C").checked, document.getElementById("8C").checked, document.getElementById("9C").checked, document.getElementById("10C").checked, document.getElementById("JC").checked, document.getElementById("QC").checked, document.getElementById("KC").checked, document.getElementById("AC").checked, document.getElementById("2H").checked, document.getElementById("3H").checked, document.getElementById("4H").checked, document.getElementById("5H").checked, document.getElementById("6H").checked, document.getElementById("7H").checked, document.getElementById("8H").checked, document.getElementById("9H").checked, document.getElementById("10H").checked, document.getElementById("JH").checked, document.getElementById("QH").checked, document.getElementById("KH").checked, document.getElementById("AH").checked, document.getElementById("J1").checked, document.getElementById("J2").checked];
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
