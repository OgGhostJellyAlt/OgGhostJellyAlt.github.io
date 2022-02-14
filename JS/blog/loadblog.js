function load(blog) {
    var i = 0
    do {
        var post = document.createElement('post')
        if (!blog.post[i].link) {
            post.innerHTML = blog.post[i].link + blog.post[i].title + "<br>" + blog.post[i].post
        } else {
            post.innerHTML = "<a href='post?post=" + i + "'>" + blog.post[i].title + "</a>" + "<br>" + blog.post[i].post
        }
        document.getElementById('post').appendChild(post);
        document.getElementById("post").appendChild(document.createElement('br'));

        i = i + 1
    } while ( i < blog.post.length )
}