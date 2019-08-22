var words = ["happy", "google", "bootcamp", "richmond","school"];
var pick = Math.floor(Math.random() * words.length);
var wordSelect = words[pick];
var wordLength = wordSelect.length;


var spaces =[]; //each letter is add to a single element 
for(var t =0; t< wordLength; t++){
  // console.log(wordSelect.charAt(t));
  spaces.push(wordSelect.charAt(t))
}




// select elements on the page 
var btnStart = document.getElementById('btnstart');
var gameSpots = document.getElementById('gameSpots');
var trys = document.getElementById('trys');
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
  var count = 0;
  
  // takes in users input and checks to see if it matches a letter
  function keyPress(event){
    // console.log(wordSelect.search(event.key))  prints out the a -1 because the key pressed is not in array.
    console.log(wordSelect);
    
    if(wordSelect.search(event.key) === -1){
        
       if(chances > 0){
        chances = chances - 1;
        trys.innerHTML = chances;
       }
    } 
    if(chances > 0){
    for(var index = 0; index < spaces.length; index++) {
        if(event.key === spaces[index]){
              document.getElementById('word'+ index).innerHTML = event.key;  
             
              if(document.getElementById('word'+ index)){
                console.log(event.key);
                count = count + 1;
                if(count === spaces.length){
                  console.log('You WiN');
                }                 
              }
            } 
            }
        }else{
          console.log('u lose ');
          
        }
      }
    
  
  



    
  
  
 



