function lookAtTheHand() {
    const isItInTheHand = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
    document.getElementById("AS").addEventListener("click", function (){isItInTheHand[12]=true;});
    document.getElementById("AD").addEventListener("click", function (){isItInTheHand[25]=true;});
    document.getElementById("AC").addEventListener("click", function (){isItInTheHand[38]=true;});
    document.getElementById("AH").addEventListener("click", function (){isItInTheHand[51]=true;});
    document.getElementById("2S").addEventListener("click", function (){isItInTheHand[0]=true;});
    document.getElementById("2D").addEventListener("click", function (){isItInTheHand[13]=true;});
    document.getElementById("2C").addEventListener("click", function (){isItInTheHand[26]=true;});
    document.getElementById("2H").addEventListener("click", function (){isItInTheHand[39]=true;});
    document.getElementById("3S").addEventListener("click", function (){isItInTheHand[1]=true;});
    document.getElementById("3D").addEventListener("click", function (){isItInTheHand[14]=true;});
    document.getElementById("3C").addEventListener("click", function (){isItInTheHand[27]=true;});
    document.getElementById("3H").addEventListener("click", function (){isItInTheHand[40]=true;});
    document.getElementById("4S").addEventListener("click", function (){isItInTheHand[2]=true;});
    document.getElementById("4D").addEventListener("click", function (){isItInTheHand[15]=true;});
    document.getElementById("4C").addEventListener("click", function (){isItInTheHand[28]=true;});
    document.getElementById("4H").addEventListener("click", function (){isItInTheHand[41]=true;});
    document.getElementById("5S").addEventListener("click", function (){isItInTheHand[3]=true;});
    document.getElementById("5D").addEventListener("click", function (){isItInTheHand[16]=true;});
    document.getElementById("5C").addEventListener("click", function (){isItInTheHand[29]=true;});
    document.getElementById("5H").addEventListener("click", function (){isItInTheHand[42]=true;});
    document.getElementById("6S").addEventListener("click", function (){isItInTheHand[4]=true;});
    document.getElementById("6D").addEventListener("click", function (){isItInTheHand[17]=true;});
    document.getElementById("6C").addEventListener("click", function (){isItInTheHand[30]=true;});
    document.getElementById("6H").addEventListener("click", function (){isItInTheHand[43]=true;});
    document.getElementById("7S").addEventListener("click", function (){isItInTheHand[5]=true;});
    document.getElementById("7D").addEventListener("click", function (){isItInTheHand[18]=true;});
    document.getElementById("7C").addEventListener("click", function (){isItInTheHand[31]=true;});
    document.getElementById("7H").addEventListener("click", function (){isItInTheHand[44]=true;});
    document.getElementById("8S").addEventListener("click", function (){isItInTheHand[6]=true;});
    document.getElementById("8D").addEventListener("click", function (){isItInTheHand[19]=true;});
    document.getElementById("8C").addEventListener("click", function (){isItInTheHand[32]=true;});
    document.getElementById("8H").addEventListener("click", function (){isItInTheHand[45]=true;});
    document.getElementById("9S").addEventListener("click", function (){isItInTheHand[7]=true;});
    document.getElementById("9D").addEventListener("click", function (){isItInTheHand[20]=true;});
    document.getElementById("9C").addEventListener("click", function (){isItInTheHand[33]=true;});
    document.getElementById("9H").addEventListener("click", function (){isItInTheHand[46]=true;});
    document.getElementById("10S").addEventListener("click", function (){isItInTheHand[8]=true;});
    document.getElementById("10D").addEventListener("click", function (){isItInTheHand[21]=true;});
    document.getElementById("10C").addEventListener("click", function (){isItInTheHand[34]=true;});
    document.getElementById("10H").addEventListener("click", function (){isItInTheHand[47]=true;});
    document.getElementById("JS").addEventListener("click", function (){isItInTheHand[9]=true;});
    document.getElementById("JD").addEventListener("click", function (){isItInTheHand[22]=true;});
    document.getElementById("JC").addEventListener("click", function (){isItInTheHand[35]=true;});
    document.getElementById("JH").addEventListener("click", function (){isItInTheHand[48]=true;});
    document.getElementById("QS").addEventListener("click", function (){isItInTheHand[10]=true;});
    document.getElementById("QD").addEventListener("click", function (){isItInTheHand[23]=true;});
    document.getElementById("QC").addEventListener("click", function (){isItInTheHand[36]=true;});
    document.getElementById("QH").addEventListener("click", function (){isItInTheHand[49]=true;});
    document.getElementById("KS").addEventListener("click", function (){isItInTheHand[11]=true;});
    document.getElementById("KD").addEventListener("click", function (){isItInTheHand[24]=true;});
    document.getElementById("KC").addEventListener("click", function (){isItInTheHand[37]=true;});
    document.getElementById("KH").addEventListener("click", function (){isItInTheHand[50]=true;});
    document.getElementById("J1").addEventListener("click", function (){isItInTheHand[52]=true;});
    document.getElementById("J2").addEventListener("click", function (){isItInTheHand[53]=true;});

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
