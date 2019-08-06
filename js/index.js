function colorImage(imgId,color) {
    // create hidden canvas (using image dimensions)
    var imgElement = document.getElementById(imgId);

    // replace image source with canvas data
    imgElement.src = 'imgs/' + imgId+ '/' + imgId + color + '.png';
}

// changing color of capsule on select event
document.getElementById('sel_A').onchange = function(){
    colorImage('A', this.value);
}
document.getElementById('sel_B').onchange = function(){
    colorImage('B', this.value);
}

document.getElementById('sel_pad').onchange = function(){
    colorImage('pad', this.value);
}


