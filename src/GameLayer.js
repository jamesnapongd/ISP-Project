
var GameLayer = cc.LayerColor.extend({
    init: function() {
        
        this._super( new cc.Color( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.scheduleUpdate();
        
        this.background = new Background();
        this.addChild(this.background);
        this.background.setPosition( new cc.Point( 300,300 ) );

        this.box = new Box();
        this.box.setPosition( screenWidth/2 , 130  );
        this.addChild( this.box );
        this.box.scheduleUpdate();
        this.addKeyBoardHandlers();
        this.BoxFloor = 0;
        this.BoxCurrentFloor = 0;

        this.floor = new Floor();
        this.addChild(this.floor);
       
        this.enemy = new Enemy();
        this.enemy.setPosition( new cc.Point( 200, 300 ) );
        this.addChild(this.enemy);
        this.enemy.scheduleUpdate();

        this.state =  GameLayer.STATES.MENU;

        this.scoreLabel = cc.LabelTTF.create( '0', 'Arial', 40 );
        this.scoreLabel.setPosition( new cc.Point( 750, 550 ) );
        this.addChild( this.scoreLabel );

        

    },
    
    update : function(){
        this.scoreLabel.setString( Score );
        this.checkDead();
    },
    
    addKeyBoardHandlers: function(){
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed : function( key , event ){
                self.onkeydown( key , event );
            },
            onkeyReleased : function( key , event ){
                self.onkeyup( key , event );
            }
        },this);
    },
        
    onkeydown: function (key , event ){
       

        this.state = GameLayer.STATES.START;
    
        switch( key ){
            case cc.KEY.a:
                this.box.setNextMove( Box.DIR.LEFT );
                break;
            case cc.KEY.d:
                this.box.setNextMove( Box.DIR.RIGHT );
                break;
            case cc.KEY.s:
                this.box.setNextMove( Box.DIR.STILL );
                break;
            case cc.KEY.w:
                this.box.setNextJump( Box.DIR.JUMPUP );
                break;           
        }
        this.box.isStart = true;
        this.box.jumping();
        this.removeChild(this.floor);
        
    },
                                     
    onKeyUp: function( key , event){
        this.box.setNextMove( Box.DIR.STILL );
    },

    checkDead: function() {
        if( this.box.y <= 0 || this.box.y >= screenHeight ){
            this.state = GameLayer.STATES.OVER;
            cc.director.runScene(new GameoverScene());
           
        }

        if( this.enemy.x + 50 >= this.box.x - 30 && this.enemy.x - 50 <= this.box.x + 30 
            && this.enemy.y + 50 >= this.box.y - 30 && this.enemy.y - 50 <= this.box.y + 30 ){
            this.state = GameLayer.STATES.OVER;
            cc.director.runScene(new GameoverScene());
        }
        
       
       

    },

   
    
});
 
var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        console.log( 'Initialized' );
        layer.init();
        this.addChild( layer );
    }
});

var GameoverScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        
        var layer = new GameOver();
        layer.init();
        this.addChild( layer );
        
    }
});

var Score = 0;

GameLayer.STATES = {
    MENU: 1,
    START: 2,
    OVER: 3
};