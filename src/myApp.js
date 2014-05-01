var MyLayer = cc.Layer.extend({
    helloLabel:null,

    init:function () {
        this._super();

        var size = cc.director.getWinSize();

        this.helloLabel = cc.LabelTTF.create("Hello World", "Impact", 38);
        this.helloLabel.setPosition(size.width / 2, size.height - 40);
        this.addChild(this.helloLabel, 5);
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
