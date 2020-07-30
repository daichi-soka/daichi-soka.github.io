$(".kuji").click(function () {

//    let randomNumber = Math.floor(Math.random() * 8 + 1);
//
//    console.log(randomNumber);
//
//    var img = resultArray[];
    
//
//$(".kuji").change();


$(".kujikekka").text("大吉！！！");

});


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
console.log(getRandomInt(3));

var cpHand = "";
var cpNumber = (getRandomInt(3));
if (cpNumber == 0) {
    cpHand = "グー"
} else if (cpNumber == 1) {
    cpHand = "チョキ"
} else if (cpNumber == 2) {
    cpHand = "パー"
}


function janken(aaa) {
    
    var myNumber = "";
    
    if (aaa == 0) {
        myNumber = 0;
    } else if (aaa == 1) {
        myNumber = 1;
    } else if (aaa == 2) {
        myNumber = 2;
    }
    //        console.log(myNumber);


var myHand = "";
if (myNumber == 0) {
    var myHand = "グー";
} else if (myNumber == 1) {
    var myHand = "チョキ";
} else if (myNumber == 2) {
    var myHand = "パー";
}
    
var message = "";
if (myNumber - cpNumber == -2) {
    alert("コンピュータは「"+cpHand+"」を出しました。あなたは「"+myHand+"」を出したので、あなたの 『負け』です。");
} else if (myNumber - cpNumber == -1) {
    alert("コンピュータは「"+cpHand+"」を出しました。あなたは「"+myHand+"」を出したので、あなたの 『勝ち』です。");
} else if (myNumber - cpNumber == 0) {
    alert("コンピュータは「"+cpHand+"」を出しました。あなたは「"+myHand+"」を出したので、『引き分け』です。あいこでしょ！");
} else if (myNumber - cpNumber == 1) {
    alert("コンピュータは「"+cpHand+"」を出しました。あなたは「"+myHand+"」を出したので、あなたの 『負け』です。");
} else if (myNumber - cpNumber == 2) {
    alert("コンピュータは「"+cpHand+"」を出しました。あなたは「"+myHand+"」を出したので、あなたの 『勝ち』です。");
}
}
