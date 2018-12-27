
obtenerVideos(9, '')

function obtenerVideos (mostrar, buscar) {
    let cardVideo = $('#card-video');
    let carouselVideo = $('#card2-video');
    
    $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=' + mostrar + '&order=viewCount&q=' + buscar + '&type=video&videoDefinition=any&key=AIzaSyD8KtrA3UwaI4wDZ6nxe4WOzqNfWxxjts4',
        success: function (res) {
            let cadena = ''
            for (const item of res.items) {
                cadena += `
                    <div id="estilocard" class="card col-lg-4 col-12 mb-4 ma-4 border-White">
                            <img class="card-img-top" src="` + item.snippet.thumbnails.default.url + `" alt="Card image cap">
                            <div class="card-block d-flex align-content-between flex-wrap ">
                                <h7 class="card-title text- pointer ">` + item.snippet.title + `</h7>
                               
                                <a href="#" class="btn btn-danger" onclick="reproducirVideo('` + item.id.videoId + `')">Reproducir</a>
                            </div>
                    </div>
                        `;
            }
            

         
            carouselVideo.html(cadena);
            
        }
    });
}

function buscarVideo (e, verificar) {
    let buscar = $('#buscar').val();
    if (verificar == true) {
        if (e.keyCode == 13) {
            obtenerVideos(9, buscar)
        }
    } else {
        obtenerVideos(9, buscar)
    }
}

function reproducirVideo (videoId) {
    let videoPlay = $('#video-play');
    videoPlay.attr('src', 'https://www.youtube.com/embed/' + videoId)
    
    console.log(videoId)
}



