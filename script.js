window.onload = function () {
  var btn = document.getElementById("generate");
  var keys = [
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
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "!",
    "@",
    "#",
    "$",
    "%",
    "&",
    "?",
    "+",
    ";",
    ":",
    "~",
  ];

  btn.onclick = function () {
    var textArea = document.getElementById("password");
    textArea.value = "";

    var userPref = prompt(
      "How long do you want you password? (Must be at least 8 - 128 characters)"
    );
    userPref = parseInt(userPref);
    if (userPref >= 8 && userPref <= 128) {
      var x = "";
      for (var i = 0; i < userPref; i++) {
        var password = keys[Math.floor(Math.random() * keys.length)];
        x += password;
      }

      textArea.value = x;
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      alert("COPIED");
    } else {
      alert("Must be at least 8 - 128 characters");
    }
  };
};
