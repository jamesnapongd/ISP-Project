var Box = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/box.png' );
        this.move = Box.DIR.STILL;
        this.nextMove = Box.DIR.STILL;
        this.jump = Box.DIR.STILL;
        this.nextJump = Box.DIR.STILL;
        this.vy = 15;
        this.isStart = false;
        this.gameOver = false;
    },
    
    
    update: function( dt ) {
	    var pos = this.getPosition();
	    this.move = this.nextMove;
        this.jump = this.nextJump;
        if(this.isStart){
            this.vy += Box.G;
            this.y += this.vy;
        }
        // if(this.move != Box.DIR.STILL){
        //     this.setPosition( new cc.Point( pos.x + this.move , pos.y ) );
        // }
        // if(this.jump != Box.DIR.JUMP){
        //     this.setPosition( new cc.Point( pos.x + this.move , pos.y + this.vy ) );
        
        // }
       /* var pos = this.getPosition();
        this.setPosition( new cc.Point( pos.x, pos.y + this.vy ) );
        this.vy += -1;
        */

       


    },

    setNextMove: function( move ) {
        this.nextMove = move;
    },

    setNextJump: function(move) {
        this.nextJump = move;

    },
    
    jumping: function() {
        this.vy = 15;
    },

    over: function(){

    }

});

Box.DIR = {
    STILL: 0,
    LEFT: -3,
    RIGHT: 3,
    JUMP: 0,
    JUMPUP: 4,
    JUMPDOWN: -4
 };

Box.G = -0.7;
Box.STARTING_VELOCITY = 15;
Box.JUMPING_VELOCITY = 15;

 