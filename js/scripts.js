window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z','!','$','%','&','*','(',')','-','=',
        '+','_','{','}',';','/',;

        var levels;         // Array of levels
        var chosenLevel;     // Selected level
        var getHint ;          // Word getHint
        var word ;              // Selected word
        var guess ;             // Geuss
        var geusses = [ ];      // Stored geusses
        var lives ;             // Lives
        var counter ;           // Count correct geusses
        var space;              // Number of spaces in word '-

        // Get elements
        var showLives = document.getElementById("mylives");
        var showCatagory = document.getElementById("scatagory");
        var getHint = document.getElementById("hint");
        var showClue = document.getElementById("clue");


          // create alphabet ul
          var buttons = function () {
            myButtons = document.getElementById('buttons');
            letters = document.createElement('ul');
