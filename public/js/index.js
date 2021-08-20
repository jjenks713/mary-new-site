$(document).ready(function(){

    //trying to add api for images. easier to just edit manually
/*     function addKeyAjax(apiKey){
        $.get('/key.txt', function(data) {
            //var fileDom = $(data);
                var apiKey = data
                addKeyAjax(apiKey);
            });
        var url = "https://api.unsplash.com/users/jenkin79/photos/?client_id=" + apiKey;
        
        $.ajax({
            url: url,
            method: 'GET'
        }).done(function (result) {
           // var response = result.length;
            for (var i = 0; i < result.length; i++){
                //fconsole.log(result[i].user.username);    
//                console.log(result.length);
                var unsplashArray = result[i].urls.regular;
               console.log(result[i].urls.regular); 

                $("#photos-appear-here").append('<img class="img-responsive" alt="" src="' + unsplashArray + '"><a class="project-description"  data-toggle="modal" data-target="#exampleModal"></a>');
                };
            }).fail(function (err) {
            //console.log(url);
            throw err;
        });
    }; */

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

});