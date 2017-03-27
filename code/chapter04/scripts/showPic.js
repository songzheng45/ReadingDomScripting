function showPic(whichPic) {
    var src = whichPic.getAttribute('href');

    var placeholder = document.getElementById('placeholder');
    placeholder.setAttribute('src', src);

    var title = whichPic.getAttribute('title');
    var desc = document.getElementById('description');
    desc.firstChild.nodeValue = title;
}