var win = Titanium.UI.createWindow({
        backgroundColor : '#fff'
});

function createImageViewFromComposite(compositeView, left, top, width, height) {
    var tmpImage = compositeView.toImage();
    tmpImage.backgroundColor = "transparent";

    var imageView = Titanium.UI.createImageView({
        width: width,
        height: height,
        image: tmpImage,
        top: top,
        backgroundColor: "transparent"
    });

    return imageView;    
}

function createGridPage() {
    var compositeView = Ti.UI.createView({
           width: "100dp",
           height: "17dp",
           backgroundColor: "#fff"
    });
    
    for (var i = 0; i < 10; ++i) {
        var cell = Ti.UI.createView({
                width : "10dp",
                height : "17dp",
                left: "" + (i * 10) + "dp",
                zIndex: 10,
                backgroundColor: i % 2 == 0 ? "#fff" : "#ccf"
        });
    
        compositeView.add(cell);        
    }
    
    var imageView = createImageViewFromComposite(compositeView, 0, "20dp", "100dp", "17dp");
    
    return imageView;
}

function createGridHeader() {
    var compositeView = Ti.UI.createView({
           width: "100dp",
           height: "17dp",
           backgroundColor: "#fff"
    });
    
    var label = Ti.UI.createLabel({
        text: "testing..",
        top: 0,
        verticalAlign: 'top',
        font: {fontSize: '9dp'},
        color: '#4d4d4f',
        height: 20
    });
    
    compositeView.add(label);
    
    var imageView = createImageViewFromComposite(compositeView, 0, 0, "100dp", "17dp");
    
    return imageView;
}

function createGrid() {
    var compositeView = Ti.UI.createView({
           width: "288dp",
           height: "37dp",
           backgroundColor: "#eee"
    });
    
    var gridPage = createGridPage();
    compositeView.add(gridPage);
    
    var gridHeader = createGridHeader();
    compositeView.add(gridHeader);

    var grid = Ti.UI.createView({
            width : "288dp",
            height : "17dp",
            top: "20dp",
            backgroundImage: "availability_shell.png",
            zIndex: 15
    });
    
    compositeView.add(grid);
    
    var imageView = createImageViewFromComposite(compositeView, 0, "20dp", "288dp", "37dp");

    return imageView;    
}

win.add(createGrid());

win.open();