function load(blog) {
    blog.post.reverse();

    var i = 0
    var webi = 0
    do {
        var post = document.createElement('post')
        if (!blog.post[i].link) {
            post.innerHTML = blog.post[i].link + blog.post[i].title + "<br>" + blog.post[i].post
        } else {
            post.innerHTML = "<a href='post?post=" + webi + "'>" + blog.post[i].title + "</a>" + "<br>" + blog.post[i].post
            post.setAttribute('id',webi)
            webi = webi + 1
        }
        document.getElementById('post').appendChild(post);
        document.getElementById("post").appendChild(document.createElement('br'));

        i = i + 1
    } while ( i < blog.post.length )
}