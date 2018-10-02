var Floor = cc.Node.extend({
	ctor: function() {
		this._super();
		this.floor = cc.Sprite.create( 'res/images/floor.png' );
		//this.floor.setAnchorPoint( new cc.point( 0,0 ) );
        this.floor.setPosition( new cc.Point( screenWidth/2 , 50 ) );
        this.addChild( this.floor );
	},

	getBuildingRect: function() {
        var spriteRect = this.getBoundingBoxToWorld();
        var spritePos = this.getPosition();

        var X = this.x - spritePos.x;
        var Y = this.y - spritePos.y;
        return cc.rect( spriteRect.x + X,spriteRect.y +Y,spriteRect.width,spriteRect.height);
    },

    getXPos: function() {
    	return this.getPosition().x;
    },

    getYPos: function() {
        return this.getPosition().y;
    },

    isBoxOnFloor: function( Box ) {
        return cc.rectIntersectsRect( Box.getPlayerRectFoot(), this.getBuildingRect() );
    }
});