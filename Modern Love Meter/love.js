
let completeArr= {
    "A":0,
    "B":0,
    "C":0,
    "D":0,
    "E":0,
    "F":0,
    "G":0,
    "H":0,
    "I":0,
    "J":0,
    "K":0,
    "L":0,
    "M":0,
    "N":0,
    "O":0,
    "P":0,
    "Q":0,
    "R":0,
    "S":0,
    "T":0,
    "U":0,
    "W":0,
    "X":0,
    "Y":0,
    "Z":0
};

    let yourName = window.prompt("Enter your name: ");
    let ourName = yourName.toUpperCase();
    document.getElementById("firstName").innerHTML = ourName;

    let crushName = window.prompt("Enter your crush name: ");
    let loverName = crushName.toUpperCase();
    document.getElementById("secondName").innerHTML = loverName;

function runIt(){
    for(let i=0; i<ourName.length; i++){
        completeArr[ourName[i]]++;
    }
    for(let i=0; i<loverName.length; i++){
        completeArr[loverName[i]]--;
    }
    let count=0;
    for(let i=65; i<=95; i++){
        let s = String.fromCharCode(i);
        if (completeArr[s]>0){
            count += completeArr[s];
            console.log(completeArr);
        }
        else if(completeArr[s]<0){
            count -= completeArr[s];
            console.log(completeArr);
        }
    }
    console.log(completeArr);
    let finalPer = Math.floor( (count*100)/(yourName.length + crushName.length));
    // document.getElementById("result").innerText = finalPer;
    let perSen = "Your Love percentage is " +finalPer+ "% higher than all others in the world";

    // function printSlogan(){
    let finalSen = "";
    // if (finalPer = 0){
    //     finalSen = perSen +  "& Quick!! Close your browser! Nobody saw this. Not even you..."
    // }
    // else 
    if(finalPer >= 0 && finalPer <= 10){
        finalSen = perSen + " & Sorry, but your love is as likely to bear fruit as a mango tree planted on an Antarctic glacier."
    }
    else if (finalPer >= 11 && finalPer <= 20){
        finalSen = perSen + " & Your love is like that which a parent with a newborn baby feels for sleep – distant and beyond consideration."
    }
    else if(finalPer >= 21 && finalPer <= 30){
        finalSen = perSen + " & Your love is as strong as the love between most children and their vegetables – insubstantial."
    }
    else if(finalPer >= 31 && finalPer <= 40){
        finalSen = perSen + " & Your love is comparable to rush hour traffic. Slow and frustrating, but possible to navigate through persistence and sheer force of will."
    }
    else if(finalPer >= 41 && finalPer <= 50){
        finalSen = perSen + " & There's probably something there. Just make sure your presence is known so your feelings don't get trampled like a NBA player."
    }
    else if(finalPer >= 51 && finalPer <= 60){
        finalSen = perSen + " & This level of love is equivalent to a cat's love of boxes. It may not be immediately evident, but take a look in the box and you might just find something ready to jump out at you."
    }
    else if(finalPer >= 61 && finalPer <= 70){
        finalSen = perSen + " & Good enough. Might as well check love off your list of things society believes you should've accomplished by now."
    }
    else if(finalPer >= 71 && finalPer <= 80){
        finalSen = perSen + " & Love like this can be seen in the eyes of a dog wanting to continue playing fetch with its exhausted owner – longing, yet not currently viable."
    }
    else if(finalPer >= 81 && finalPer <= 90){
        finalSen = perSen + " & Your love is as strong as that between an owner and their pet! Unyielding in its loyalty and comfort, albeit with less than optimal odors."
    }
    else if(finalPer >= 91 && finalPer < 100){
        finalSen = perSen + " & Your love burns as hot as the sun, blazing through the vastness of space, and searing itself into your being.";
    }
    else if(finalPer=100){
        finalSen = perSen + " & Love no other words to explain your relationship";
    }
    document.getElementById("result").innerText = finalSen;
  }  
// }
