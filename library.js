$(document).ready(function(){


$("#submitSearch").on('click', function(){
  var endpoint = $("#endpointDrop").val();
  var qs;
  if (endpoint == "search"){
    qs = `search?api_key=3OnvA7qrm4u56MjNl7j0HVuHAdXGG8FF&q=${$("#q").val()}&limit=${$("#limit").val()}&offset=${$("#offset").val()}&rating=${$("#rating").val()}&lang=${$("#lang").val()}`
      }
  else if (endpoint == "translate"){
    qs = `translate?api_key=3OnvA7qrm4u56MjNl7j0HVuHAdXGG8FF&s=${$("#q").val()}`
      }
  else if (endpoint == "random") {
    qs = `random?api_key=3OnvA7qrm4u56MjNl7j0HVuHAdXGG8FF&tag=${$("#q").val()}&rating=${$("#rating").val()}`
      }
      console.log(endpoint);
  $.getJSON(`https://api.giphy.com/v1/gifs/${qs}`, function(data){
    buildGifs(data)
  });
})

function buildGifs(gifs){
  $("#results").empty()
  if (!gifs.data){
    console.log("nothing returned");
    return;
  }

  if (!gifs.meta.msg == "OK"){
  return;
}
  // need to add handler

  if(Array.isArray(gifs.data)){
    for(var i in gifs.data){
      appendGif(gifs.data[i])
    }
  }
  else(
  appendGif(gifs.data)
  )
}

function appendGif(gif){
  var event = new Date(gif.import_datetime);
  event = event.toLocaleString('en-US', { timezone: 'UTC'})
  event = event.split(",")[0]
  $(`<div class="card col-4">
    <img class="card-img-top w-100 h-auto" src="${gif.images.downsized.url}">
    <div class="card-body">
      <p class="card-text">"${gif.title}"</p>
      <p class="card-text">"${event}"</p>
      <p class="card-text">"${gif.url}"</p>
      <a href="#" class="btn btn-secondary" id="copyLink">copy link</a>
    </div>
  </div>`
  ).appendTo($("#results"))
}



});


/*




*/
