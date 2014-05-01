var MyLayer = cc.LayerColor.extend({
    helloLabel:null,
    sprite:null,

    init:function () {
        this._super();
        this.setColor(cc.color(255,255,255));

        var size = cc.director.getWinSize();

        this.helloLabel = cc.LabelTTF.create("Hello Octcat", "Impact", 24);
        this.helloLabel.setColor(cc.color(0,0,0));
        this.helloLabel.setPosition(size.width / 2, size.height - 40);
        this.addChild(this.helloLabel, 5);

        this.sprite = cc.Sprite.create(s_Octcat);
        this.sprite.setPosition(size.width / 2, size.height / 2);
        this.sprite.setScale(0.5);
        this.addChild(this.sprite);
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
