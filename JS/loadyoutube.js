var videos = {}
var channel = {}

fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyCCJ403rxQUp_0b124E49pbdsetulNTfRE&channelId=UCD1IYOrmoXBFBArQ4lSxUYQ&part=snippet,id&order=date&maxResults=3")
  .then(response => response.json())
  .then(json => { videos = json ; loadvid(videos) } )
  .catch(error => {
    alert('Failed to load, Error Message:\n' + error)
    document.getElementById('title').innerHTML = "Data Failed To Load :("
  });

fetch("https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=UCD1IYOrmoXBFBArQ4lSxUYQ&key=AIzaSyCCJ403rxQUp_0b124E49pbdsetulNTfRE")
  .then(response => response.json())
  .then(json => { channel = json ; loadchan(channel) } )
  .catch(error => {
    if ( error != 'TypeError: NetworkError when attempting to fetch resource.') {
      alert('Failed to load, Error Message:\n' + error)
      document.getElementById('title').innerHTML = "Data Failed To Load :("
    } else {
      alert('check your internet connection...')
    }
  });

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

function loadchan (channel) {
  //load title
  document.getElementById('title').innerHTML = channel.items[0].snippet.title
  //load desc
  document.getElementById('desc').innerHTML = channel.items[0].snippet.description
  //load profile
  var stat = document.createElement('img')
  stat.setAttribute('src',channel.items[0].snippet.thumbnails.default.url)
  document.getElementById('stats').appendChild(stat);
  //load subcount
  var stat = document.createElement('h3')
  stat.innerHTML = 'Subscribers: ' + channel.items[0].statistics.subscriberCount
  document.getElementById('stats').appendChild(stat);
  //load viewcount
  var stat = document.createElement('h3')
  stat.innerHTML = 'Total Views: ' + channel.items[0].statistics.viewCount
  document.getElementById('stats').appendChild(stat);
  //load totalvideos
  var stat = document.createElement('h3')
  stat.innerHTML = 'Total Videos: ' + channel.items[0].statistics.videoCount
  document.getElementById('stats').appendChild(stat);
  //load IMPORTANTDATA
  var stat = document.createElement('h3')
  stat.innerHTML = 'IRL Stats: NaN'
  document.getElementById('stats').appendChild(stat);
  //load date
  document.getElementById('date').innerHTML = 'Channel Creation: ' + channel.items[0].snippet.publishedAt
}