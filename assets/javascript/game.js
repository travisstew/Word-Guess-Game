var words = ["happy","google", "bootcamp", "richmond","school"];
var pick = Math.floor(Math.random() * words.length);
var wordSelect = words[pick];
var wordLength = wordSelect.length;

// put the selected word in array by letter
var spaces =[];
for(var t =0; t< wordLength; t++){
  // console.log(wordSelect.charAt(t));
  spaces.push(wordSelect.charAt(t))
}

// select elements on the page 
var btnStart = document.getElementById('btnstart');
var gameSpots = document.getElementById('gameSpots');
var letterHold = [];

btnStart.addEventListener('click', function(){
  for(var i = 0; i < wordLength; i++){
    var li = document.createElement("LI");
    li.id="word" + i;
    li.innerHTML = "_";
    gameSpots.appendChild(li);
  }  

});
  // the amount of user trys
  var chances = 4;
  var gameWin = [];
  
  // takes in users input and checks to see if it matches a letter
  function keyPress(event){
    // console.log(wordSelect.search(event.key))  prints out the a -1 because the key pressed is not in array.
    console.log(wordSelect);
    
    if(wordSelect.search(event.key) === -1){
        chances = chances - 1;
    }  
    for(var index = 0; index < spaces.length; index++) {
        if(event.key === spaces[index]){
              document.getElementById('word'+ index).innerHTML = event.key;   
             
              gameWin.push(spaces[index]);
            } 
      
        
        } 
   

  }






