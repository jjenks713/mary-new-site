$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
        placement : 'top',
        trigger : 'hover'
    });
    $( "#modal-trigger" ).click(function() {
      console.log("nothing");
      //alert( "Handler for .click() called." );
      $(".modal").show();
    });
    $("#MyModal").modal();


    $.get('/key.txt', function(data) {
      //var fileDom = $(data);
        console.log("testing get");
        console.log(data);
        var apiKey = data
        addKeyAjax(apiKey);
    });
    function addKeyAjax(apiKey){
        var url = "https://api.unsplash.com/photos/?client_id=" + apiKey;
        console.log(url);
        $.ajax({
            url: url,
            method: 'GET'
        }).done(function (result) {
           // var response = result.length;
            for (var i = 0;i < result.length; i++){

                console.log(result.length);
                if (result[i].length){
                    console.log(0);
                    var photoDiv = $("<div></div>")
                    var image = $("<img>")
                    image.attr("src", result[i].urls.full);
                    console.log(image);
                    photoDiv.append(image);
                    $("#photos-appear-here").prepend(photoDiv);
                } else {
                    console.log("Not working");
                };

            };
        console.log(result);
        }).fail(function (err) {
            //console.log(url);
            throw err;
        });
    };
});