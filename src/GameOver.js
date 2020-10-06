

var GameOver = cc.LayerColor.extend({
    init: function() {
        this._super();
     
        this.scoreLabel = cc.LabelTTF.create( 'YOUR SCORE : ' + Score, 'Arial', 30 );
        this.scoreLabel.setPosition( new cc.Point( 400, 450 ) );
        this.addChild( this.scoreLabel );
        
        
        var MenuItem1 = new cc.MenuItemFont("play again",play);
        var menu = new cc.Menu(MenuItem1);
        this.addChild(menu);
        Score = 0.0;
        Enemy.MOVE_X = 20;
        Enemy.MOVE_Y = 50;
        Enemy.CHANGEDIRECTION = 1;

        var checkUpDown = true;
	    return true;
    },

    
});

var play = function(){

    cc.director.runScene(new playScene());

}

var playScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
        
    }
});

