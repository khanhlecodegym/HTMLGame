function Canvas(width, height) {
	this.canvas = document.createElement('canvas');
    this.canvas.width = width;
    this.canvas.height = height; 
    this.context = this.canvas.getContext("2d");
    this.interval = setInterval(updateGameArea, 20);
    this.frameNo = 0;

    this.clear = function() {
    	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    this.stop = function() {
    	clearInterval(this.interval);  	
    }

    window.addEventListener('keydown', function (e) {
        canvas.key = e.keyCode;
    })
    window.addEventListener('keyup', function (e) {
        canvas.key = false;
    })

    this.everyInterval = function() {
    	if ((this.frameNo / TIME_CREATE_OBS) % 1 == 0) {return true;}
    	return false;
    }
}
