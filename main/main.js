module.exports = function theBeerSong(x) {
    var s = '';
    var y = x;
    if(x >= 99){
        y = 99;
    }
    for(var i=y;i>2;i--){
        s = s + parseInt(i) + " bottles of beer on the wall, " + parseInt(i) + " bottles of beer.\n" +
            "Take one down and pass it around, "+ parseInt(i-1) +" bottles of beer on the wall.\n";
        y--;
    }

    if(y === 2){
        s += "2 bottles of beer on the wall, 2 bottles of beer.\n"+
        "Take one down and pass it around, 1 bottle of beer on the wall.\n";
        y--;
    }

    if(y === 1){
        s += "1 bottle of beer on the wall, 1 bottle of beer.\n"+
            "Take one down and pass it around, no more bottles of beer on the wall.\n";
        y--;
    }

     if(y === 0){
        s = s + "No more bottles of beer on the wall, no more bottles of beer.\n" +
                "Go to the store and buy some more, 99 bottles of beer on the wall.";
    }
    console.log(s);
}
