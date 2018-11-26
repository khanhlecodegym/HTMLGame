function Player(x, y, width, height, color) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.color = color;	
	this.speedX = 0;
    this.speedY = 0;    

	this.update = function() {
		ctx = canvas.context;
    	ctx.fillStyle = color;
    	ctx.fillRect(this.x, this.y, this.width, this.height);
	}
	
	this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }

    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    } 

    this.moveLeft = function() {
    	this.speedX = -1;
    }

    this.moveUp = function() {
    	this.speedY = -1;
    }

    this.moveRight = function() {
    	this.speedX = 1;
    }

    this.moveDown = function() {
    	this.speedY = 1;
    }

    this.moveObs = function() {
    	this.x -= 1;
    }
}