function colorImage(imgId,color) {
    // create hidden canvas (using image dimensions)
    var imgElement = document.getElementById(imgId);

    // replace image source with canvas data
    imgElement.src = 'imgs/' + imgId+ '/' + imgId + color + '.png';
}


