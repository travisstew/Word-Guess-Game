$(document).ready(function () {
var words = ["happy","google", "bootcamp", "richmond","school"];
var pick = Math.floor(Math.random() * words.length);
var wordSelect = words[pick];
var wordLength = wordSelect.length;

var spaces =[];
for(var t =0; t< wordLength; t++){
  // console.log(wordSelect.charAt(t));
  spaces.push(wordSelect.charAt(t))
}

// var btnStart = document.getElementById('btnstart');
// var gameSpots = document.getElementById('gameSpots');
// var letterHold = [];



  $('#start-btn').click(function(){
    for(var i = 0; i < wordLength; i++){
      $('#gameSpots').appendChild("<li></li>");
      $('li').attr("id","word"+i);
      
      $('li').html("_ ");
      
    
    }
  });

  $('#user-input').keydown(function (e) { 
      
  });
});