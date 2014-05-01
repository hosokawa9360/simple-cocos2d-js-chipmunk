var MyLayer = cc.LayerColor.extend({
    helloLabel:null,

    init:function () {
        this._super();
        this.setColor(cc.color(255,255,255));

        var size = cc.director.getWinSize();

        this.helloLabel = cc.LabelTTF.create("Hello Octcat", "Impact", 24);
        this.helloLabel.setColor(cc.color(0,0,0));
        this.helloLabel.setPosition(size.width / 2, size.height - 40);
        this.addChild(this.helloLabel, 5);

        this.addSprite(cc.p(size.width/2, size.height/2));
    },

    onEnter:function() {
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function(touch, event) {
                this.addSprite(touch.getLocation());
            }.bind(this)
        }, this);
        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            onMouseUp: function(event) {
                this.addSprite(cc.p(event.getLocationX(),event.getLocationY()));
            }.bind(this)
        },this);
    },

    addSprite: function(position) {
        var sprite = cc.Sprite.create(s_Octcat);
        sprite.setPosition(position.x, position.y);
        sprite.setScale(0.5);
        this.addChild(sprite);
    }
});

var MyScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MyLayer();
        this.addChild(layer);
        layer.init();
    }
});
