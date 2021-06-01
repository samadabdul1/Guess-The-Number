let answer=getRandomNumber();
let history =[];
window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)
}

function playGame(){
  let numberGuess=document.getElementById("number-guess").value;
  displayResults(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
}

function displayResults(numberGuess){
    if(numberGuess>answer){
        console.log("too high");
        showNumberAbove();
    }else if(numberGuess<answer){
        console.log("too low");
        showNumberBelow();
    }else{
        console.log("is correct");
        showYouWon();
    }
}

function initGame(){ 
    answer=getRandomNumber();
    document.getElementById("result").innerHTML="";
    history=[];
    displayHistory();
}

function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}


function getRandomNumber(){
  let random =Math.random();
  let randomm=Math.floor(random*100)+1;
  return randomm;
}

function saveGuessHistory(numberGuess) {
  
  history.push(numberGuess);
}

function displayHistory() {
  let index=history.length-1;
  let list = "<ul class='list-group'>";
  while(index>=0){
    list += "<li class='list-group-item'>"+ "you guessed " + history[index]+"</li>";
    index-=1;
  }
  list += '</ul>';
  document.getElementById("history").innerHTML = list;
}


function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  let dialog = getDialog('won',text);
  
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  let dialog =getDialog('warning',text);

  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  
  let dialog =getDialog('warning',text);
  document.getElementById("result").innerHTML = dialog;
}
