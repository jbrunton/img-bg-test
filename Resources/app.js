var win = Titanium.UI.createWindow({
        backgroundColor : '#fff'
});

function createGrid() {
    var compositeView = Ti.UI.createView({
           width: "288dp",
           height: "17dp",
           backgroundColor: "#fcc"
    });
    
    var grid = Ti.UI.createImageView({
            width : "288dp",
            height : "17dp",
            backgroundColor: "transparent",
            image : "availability_shell.png",
            zIndex: 15
    });
    
    compositeView.add(grid);
     
    var tmpImage = compositeView.toImage();
    tmpImage.backgroundColor = "transparent";
    
    var imageView = Titanium.UI.createImageView({
        width: "288dp",
        height: "17dp",
        image: tmpImage,
        top: "10dp",
        backgroundColor: "transparent"
    });
    
    return imageView;    
}

win.add(createGrid());
 
win.open();