var restart = document.querySelector('#b');

var squares = document.querySelectorAll("td");

function clearSquares() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  }

}
restart.addEventListener("click", clearSquares);

function changeMarker(){
  if(this.textContent ===''){
    this.textContent = 'X';
  }
  else if(this.textContent === 'X'){
    this.textContent = 'O';
  }
  else{
    this.textContent ='';
  }
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click',changeMarker);
}
var winX = 'X';
var winO = 'O';
if (squares[0].this.textContent == winX && squares[1].this.textContent == winX && squares[2].this.textContent == winX){
  alert("You won!");
}
