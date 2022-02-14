function load(post) {
    //load favicon
    var fav = document.createElement('link')
    fav.setAttribute('rel','shortcut icon')
    fav.setAttribute('href','IMG/' + post.img )
    document.getElementById('head').appendChild(fav);
    //load title
    document.getElementById('title').innerHTML = post.title
    document.getElementById('header').innerHTML = post.title
    //load post
    var i = 0
    do {
        if (!!post.post[i].text) {
            var msg = document.createElement('t')
            msg.setAttribute('class',post.post[i].detail)
            msg.innerHTML = post.post[i].text
            document.getElementById('post').appendChild(msg);
        } else {
            document.getElementById('post').appendChild(document.createElement('br'));
        }

        i = i + 1
        } while ( i < post.post.length )
};

//<link rel="shortcut icon" href="IMG/rickroll.gif" type="image/x-icon">