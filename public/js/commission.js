$(document).ready(function(){

    $('body').append('<div style="" id="loadingDiv"><div class="loader">Loading...</div></div>');
    $(window).on('load', function(){
    setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
    });
    function removeLoader(){
        $( "#loadingDiv" ).fadeOut(500, function() {
        // fadeOut complete. Remove the loading div
        $( "#loadingDiv" ).remove(); //makes page more lightweight 
    });  
    }

    var picArray = [
        {
            url: '/assets/images/Rita.jpg',
            name: 'Rita',
            med: 'Copic Markers and Gel Pens',
            size: '6"X8in"',
            val: '1'
        },
        {
            url: '/assets/images/Nyx.jpg',
            name: 'Nyx',
            med: 'Copic Markers and Gel Pens',
            size: '6"X8in"',
            val: '2'
        },
        {
            url: '/assets/images/bear.png',
            name: 'Bear',
            med: 'Wood Burning on Cutting Board',
            val: '3'
        },
        {
            url: '/assets/images/boar.png',
            name: 'Boar',
            med: 'Wood Burning',
            size: '24”x36”',
            val: '4'
        },
        {
            url: '/assets/images/for-hideo.jpg',
            name: 'For hideo',
            med: 'Copic Markers and Gel Pens',
            size: '8”x10”',
            val: '5'
        },
        {
            url: '/assets/images/girl-1.jpg',
            name: 'Girl 1',
            med: 'Charcoal on Gray Paper',
            size: '9”x11”',
            val: '6'
        },
        {
            url: '/assets/images/girl-2.jpg',
            name: 'Girl 2',
            med: 'Charcoal on Gray Paper',
            size: '9"x11"',
            val: '7'
        },
        {
            url: '/assets/images/girl-3.jpg',
            name: 'Girl 3',
            med: 'Charcoal on Gray Paper',
            size: '9”x11”',
            val: '8'
        },
        {
            url: '/assets/images/heart.png',
            name: 'Heart',
            med: 'Oil Painting',
            size: '18”x24”',
            val: '9'
        },
        {
            url: '/assets/images/i-love-you.jpeg',
            name: 'I love You',
            med: 'Oil Painting',
            val: '10'
        },
        {
            url: '/assets/images/img.jpg',
            name: 'Spidey Venom',
            med: 'Acrylic Painting',
            size: '16”x20”',
            val: '11'
        },
        {
            url: '/assets/images/jose.jpg',
            name: 'Jose',
            med: 'Copic Markers and Gel Pens',
            size: '8”x10”',
            val: '12'
        },
        {
            url: '/assets/images/miles.jpg',
            name: 'Miles',
            med: 'Copic Markers and Gel Pens',
            size: '8”x10”',
            val: "13"
        },
        {
            url: '/assets/images/mothers-love.jpg',
            name: 'Mothers Love',
            med: 'Pastels and Ink',
            size: '18”x14”',
            val: "15"
        },
        {
            url: '/assets/images/the-godfather.jpg',
            name: 'The Godfather',
            med: 'Acrylic Painting',
            size: '12”x16”',
            val: "16"
        },
        {
            url: '/assets/images/Yue.jpg',
            name: 'Yue',
            val: "17"
        },
    ];
    //$('selector').masonry()
    $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: 300
      });
    
    var mediaItemContainer = $('#display-div');

    for(var i = 0; i < picArray.length; i++){
        //console.log(picArray[i]);
        var displayDiv =
        '<div class="grid-item">' +
            '<img class="img-responsive" alt="" src="'+ picArray[i].url + '">' +
            '<a class="project-description"  data-toggle="modal" data-target="#modal' + picArray[i].val + '"></a>' +
            '<div class="modal fade" id="modal' + picArray[i].val + '" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">' +
            '<div class="modal-dialog modal-dialog-centered modal-xl text-white" role="document">' +
                '<div class="modal-content bg-dark container">' +
                    '<div id="class-removal" class="modal-body text-white">' +
                    '<button type="button" class="close" data-dismiss="modal" class="co-2" aria-label="Close">' +
                        '<span aria-hidden="true">&times;</span>' +
                        '</button>' +
                    '<div class="co-1">' +
                        '<img class="img-responsive" alt="" src="'+ picArray[i].url + '">' +
                    '</div>' +
                    '<div class="co-2">' +
                        '<h2 class="text-white" id="modalLabel">'+ picArray[i].name + '</h2>' +
                        '<div> ' +
                        '<p>'+ picArray[i].med + '</p>' +
                        '<p>'+ picArray[i].size + '</p>' +
                        '</div>' +
                    '</div>' +                   
                    '</div>' +          
                '</div>' +
            '</div>' +
            '</div>' +
      '</div>' +
      '<br> ' +
      '<br> '

      //$("#display-div"). append(displayDiv).masonry('appended', displayDiv);
      mediaItemContainer.append(displayDiv).masonry( 'appended', displayDiv );
      mediaItemContainer.masonry( 'reloadItems' );
      mediaItemContainer.masonry( 'layout' );
    };


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
    //$('.carousel').carousel();

});