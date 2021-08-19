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
        addKeyAjax(data);
    });
    function addKeyAjax(data){
        var url = "https://photoslibrary.googleapis.com/v1/albums";
        url += '?' + $.param({
            'api-key': data,
        });
        console.log(url);
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function (result) {
            console.log(result);
        }).fail(function (err) {
            throw err;
        });
    };
});