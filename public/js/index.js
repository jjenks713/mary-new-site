$(document).ready(function(){

    $.get('/key.txt', function(data) {

/*         //var fileDom = $(data);
            var apiKey = data
            addKeyAjax(apiKey);
        });
    //trying to add api for images. easier to just edit manually
    function addKeyAjax(apiKey){

        var url = "https://api.unsplash.com/users/jenkin79/photos/?client_id=" + apiKey;
                //var int = number[1001];
        var numArray = [];
        for (var y = 0; y < 1000; y++){
            
            numArray.push(y);
            //console.log(numArray);
        }
        $.ajax({
            url: url,
            method: 'GET'
        }).done(function (result) {
           // var response = result.length;
                for (var i = 0; i < result.length; i++){
                    //fconsole.log(result[i].user.username);    
    //                console.log(result.length);
                    //var unsplashArray = result[i].urls.regular;
                    console.log(result[i].urls.regular); 

                    var singleNumber
                    for (var n = 0; n < numArray.length; n++){
                        singleNumber = numArray[n];
                        //console.log(numArray[n]);
                    }
                    
                    var displayImage = 
                    '<div class="gutter-sizer"></div>' +
                    '<div class="grid-sizer"></div>' +
                        '<div class="grid-item">' +
                            '<img class="img-responsive" alt="" src="' + result[i].urls.regular + '">' +
                            '<a class="project-description"  data-toggle="modal" data-target="#exampleModal' + singleNumber + '"></a>' +
                            '<div class="modal fade" id="exampleModal' + singleNumber + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
                            '<div class="modal-dialog modal-dialog-centered text-white modal-lg" role="document">' +
                                '<div class="modal-content bg-dark" style="width: 600px;">' +
                                '<div class="modal-header">' +
                                    '<h5 class="modal-title text-white" id="exampleModalLabel' + singleNumber + '">Art Title</h5>' +
                                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                                    '<span aria-hidden="true">&times;</span>' +
                                    '</button>' +
                                '</div>' +
                                '<div class="modal-body text-white">' +
                                    '<p>Art Something</p><p>Art</p><p>Art</p><p>yup art</p>' +
                                    '<img class="img-responsive" alt="" style="width: 600px;" src="' + result[i].urls.regular + '"></a>' +
                                '</div>' +
                                '</div>' +
                                '</div>' +
                            '</div>' +
                            '</div>'
                    console.log(singleNumber);
                    $("#photos-appear-here").prepend(displayImage);
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