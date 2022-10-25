var Enemy = cc.Sprite.extend({
	ctor: function() {
        this._super();
        this.initWithFile( 'res/images/enemy.png' );
        this.direction = Enemy.DIR.RIGHT;
       

    },

	update: function( dt ) {
	  

        
        if(this.getXPos() > screenWidth - 50 ){
    		this.direction = Enemy.DIR.LEFT;
    		Score++;
            Enemy.MOVE_X ++;
    		this.y += Enemy.MOVE_Y * Enemy.CHANGEDIRECTION;
    		console.log(Score);
    		
    	}
    	else if( this.getXPos() < 50 ){
    		this.direction = Enemy.DIR.RIGHT;
            Enemy.MOVE_X ++;
    		Score++;
    		this.y += Enemy.MOVE_Y * Enemy.CHANGEDIRECTION;
    		console.log(Score);
    		
    	}

    	if( this.getYPos() > screenHeight - 100 ){
            Enemy.MOVE_Y++;
    		Enemy.CHANGEDIRECTION = -1;
    		checkUpDown = false;
    		console.log('in')

    	}

    	if (this.getYPos() < 90 && checkUpDown == false){
            Enemy.MOVE_Y++;
    		console.log('pn')
    		checkUpDown = true;
			Enemy.CHANGEDIRECTION = 1;
    	}

    	this.walk();
    	
  
    },

    getXPos: function() {
    	return this.getPosition().x;
    },

    getYPos: function() {
        return this.getPosition().y;
    },

   

    walk: function(){
    	var pos = this.getPosition();
    	if( this.direction == Enemy.DIR.RIGHT )
    		this.setPosition( new cc.Point( pos.x + Enemy.MOVE_X , pos.x ) );
    	else if( this.direction == Enemy.DIR.LEFT )
    		this.setPosition( new cc.Point( pos.x - Enemy.MOVE_Y , pos.y ) );
	else if( this.direction == Enemy.DIR.LEFT )
    		this.setPosition( new cc.Point( pos.z - Enemy.MOVE_Z , pos.z ) );
    }

	
});

Enemy.DIR = {
    STILL: 0,
    LEFT: -3,
    RIGHT: 3
    
};

Enemy.MOVE_X = 20;
Enemy.MOVE_Y = 50;
Enemy.MOVE_Z = 150;
Enemy.CHANGEDIRECTION = 1;

var checkUpDown = true;
