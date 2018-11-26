function updateGameArea(argument) {
	CheckCrash();
    canvas.clear();
    canvas.frameNo += 1;
    CreateListObs();
    moveObs();
    UpDatePlayer();
    player.newPos();   
    player.update();
}

function moveObs() {
	for (let i = 0; i < listObstacles.length; i += 1) {
        listObstacles[i].moveObs();
        listObstacles[i].update();
    }
}

function CheckCrash() {
	for (let i = 0; i < listObstacles.length; i += 1) {
        if (player.crashWith(listObstacles[i])) {
            canvas.stop();
            return;
        } 
    }
}

function CreateListObs() {
	var pointX, height, gap, minHeight, maxHeight, minGap, maxGap;
    if (canvas.frameNo === 1 || canvas.everyInterval()) {
	    pointX = canvas.canvas.width;
	    minHeight = 20;
	    maxHeight = 200;
	    height = Math.floor(Math.random() * ( maxHeight - minHeight + 1) + minHeight);
	    minGap = 50;
	    maxGap = 200;
	    gap = Math.floor(Math.random() * ( maxGap - minGap + 1 ) + minGap );
	    listObstacles.push(new Player(pointX, 0, OBSTACLES_HEIGHT, height, COLOR_OBS));
	    listObstacles.push(new Player(pointX, height + gap ,OBSTACLES_HEIGHT, pointX - height - gap ,COLOR_OBS));
	}
}

function UpDatePlayer() {
	//player.speedX = 0;
	//player.speedY = 0;   
	if(canvas.key) {
		switch(canvas.key) {

			case KEY_LEFT :
				player.moveLeft();
				break;
			case KEY_UP :

				player.moveUp();
				break;	
			case KEY_RIGHT :

				player.moveRight();
				break;

			case KEY_DOWN :
				player.moveDown();
				break		
		}
	}
}