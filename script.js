//Alphabet Array
var alpha = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
//Number Array
var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
//Special Array
var special = ["!", "@", "#", "$", "%", "&", "?", "+", ";", ":", "~"];
//button in DOM
var btn = document.getElementById("generate");

//When button is clicked
btn.addEventListener("click", function () {
  var textArea = document.getElementById("password");
  var pref1 = prompt("Would you like numbers? (y/n) *case sensitive*");
  var pref2 = prompt("Would you like special character? (y/n) *case sensitive*");
  var pref3 = prompt(
    "How long do you want you password? (Must be at least 8 - 128 characters)"
  );
  //Clear text area
  textArea.value = "";
  pref3 = parseInt(pref3);
  //If userInput is great than or equal to 8 and less than or equal to 128,
  if (pref3 >= 8 && pref3 <= 128) {
    //If user inputs 'y' for number and special options
    if (pref1 == "y" && pref2 == "y" ) {
      //combine all arrays
      var opt1 = alpha.concat(num, special);
      var x = "";
      //loop through array
      for (var i = 0; i < pref3; i++) {
        var password = opt1[Math.floor(Math.random() * opt1.length)];
        //add loop outputs to variable x
        x += password;
      }

      //adds x value to textarea
      textArea.value = x;
      //auto click textarea
      textArea.focus();
      //select the text
      textArea.select();
      //copy text
      document.execCommand("copy");
      //If user inputs 'n' for number and special options
    } else if (pref1 == "n" && pref2 == "n") {
      var y = "";
      for (var i = 0; i < pref3; i++) {
        var password = alpha[Math.floor(Math.random() * alpha.length)];
        y += password;
      }

      textArea.value = y;
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      //If user inputs 'y' for number option and 'n' for special option
    } else if (pref1 == "y" && pref2 == "n") {
      var opt2 = alpha.concat(num);
      var z = "";
      for (var i = 0; i < pref3; i++) {
        var password = opt2[Math.floor(Math.random() * opt2.length)];
        z += password;
      }
      textArea.value = z;
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      //If user inputs 'n' for number option and 'y' for special option
    } else if (pref1 == "n" && pref2 == "y") {
      var opt3 = alpha.concat(special);
      var a = "";
      for (var i = 0; i < pref3; i++) {
        var password = opt3[Math.floor(Math.random() * opt3.length)];
        a += password;
      }
      textArea.value = a;
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      //else alert
    } else {
      alert("Uh Oh! Something went wrong :(");
    }
  } else {
    alert("Must be at least 8 - 128 characters");
  }
});
