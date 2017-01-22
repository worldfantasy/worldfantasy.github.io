function screenmaker() {
  
}
function playerconstructor() {
  var fstname = document.getElementById('playerfst').value;
  var lstname = document.getElementById('playerlst').value;
  var health = 50;
  var items = [];
  var game = window.open(" ", "WORLD", "width=100,hieght=100");
  game.document.write("<div></div>")
  
};
document.getElementbyId('register').onclick = playerconstructor;
