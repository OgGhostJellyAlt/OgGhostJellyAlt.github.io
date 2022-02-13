//load stats
function loadstat(stat) {
    //do {
        console.log(videos)
    //} while ()
}

//load videos
function loadvid (videos) {
    var i = 0
    do {
        //div
        var div = document.createElement('div')
        div.setAttribute('id', i)
        document.getElementById('videos').appendChild(div)
        //load desc
        var desc = document.createElement('p')
        desc.innerHTML = videos.items[i].snippet.title
        document.getElementById(i).appendChild(desc);
        //load iframe
        var iframe = document.createElement('iframe')
        iframe.setAttribute('width','280')
        iframe.setAttribute('height','157')
        iframe.setAttribute('src','https://www.youtube.com/embed/' + videos.items[i].id.videoId)
        iframe.setAttribute('title','YouTube video player')
        iframe.setAttribute('frameborder','0')
        iframe.setAttribute('allow','accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture')
        iframe.setAttribute('allowfullscreen','true')
        document.getElementById(i).appendChild(iframe);

        i = i + 1
    } while ( i < videos.items.length )
}



//<iframe width="560" height="315" src="https://www.youtube.com/embed/GEXOf8zMVYA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>