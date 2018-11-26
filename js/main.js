//Man Hinh 2D
var canvas = new Canvas(WIDTH_SCREEN_GAME, HEIGHT_SCREEN_GAME);
document.body.appendChild(canvas.canvas);

//Bien
var player; //nguoi choi
var obstacles; //cac vat can
var listObstacles = [];

function startGame() {
	player = new Player(START_POINT_X, START_POINT_Y, LENGHT_REACTANGLE, LENGHT_REACTANGLE, COLOR_PLAYER);
}