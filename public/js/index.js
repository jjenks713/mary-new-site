$(document).ready(function(){

    var picArray = [
        {
            url: '/assets/images/harlots-calamaty.jpg',
            name: 'Harlots Calamity',
            med: 'Intaglio on Stonehenge',
            size: '10"X14in"',
            ed: 'Ed. 15',
            val: '1'
        },
        {
            url: '/assets/images/heres-johnny.jpg',
            name: 'Heres Johnny',
            med: 'Screenprint on Stonehenge',
            size: '14"X18in"',
            ed: 'Ed. 15',
            val: '2'
        },
        {
            url: '/assets/images/human-nature.jpg',
            name: 'Human Nature',
            med: 'Relief on Stonehenge',
            size: '20”x15”',
            ed: 'Ed. 10',
            val: '3'
        },
        {
            url: '/assets/images/2020.jpg',
            name: '2020',
            med: 'Relief on Masa',
            size: '7”x10”',
            ed: 'Ed. 9',
            val: '4'
        },
        {
            url: '/assets/images/a-town-divided.jpg',
            name: 'A Town Divided',
            med: 'Suicide Relief on Lenox',
            size: '11”x15”',
            ed: 'Ed. 6',
            val: '5'
        },
        {
            url: '/assets/images/alice.jpg',
            name: 'Alice',
            med: 'Screenprint on Stonehenge',
            size: '11”x18”',
            ed: 'Ed. 10',
            val: '6'
        },
        {
            url: '/assets/images/any-other-name.jpg',
            name: 'Any Other Name',
            med: 'Intaglio on Lenox',
            size: '6”x8”',
            ed: 'Ed. 20',
            val: '7'
        },
        {
            url: '/assets/images/happy-family.jpg',
            name: 'Happy Family',
            med: 'Intaglio on Rives BFK',
            size: '11”x14”',
            ed: 'Ed. 10',
            val: '8'
        },
        {
            url: '/assets/images/king-of-printers.jpg',
            name: 'King of Printers',
            med: 'Letterpress on Lettra',
            size: '5.25”x7”',
            ed: 'Ed. 50',
            val: '9'
        },
        {
            url: '/assets/images/marionette.jpg',
            name: 'Marionette',
            med: 'Intaglio on Stonehenge',
            size: '10”x14”',
            ed: 'Ed. 15',
            val: '10'
        },
        {
            url: '/assets/images/monument.jpg',
            name: 'Monument Valley',
            med: 'Screenprint on Stonehenge',
            size: '12”x12”',
            ed: 'Ed. 20',
            val: '11'
        },
        {
            url: '/assets/images/psychopaths.jpg',
            name: 'Psychopaths',
            med: 'Letterpress on Lettra',
            size: '5.5”x9.5”',
            ed: 'Ed. 25',
            val: '12'
        },
        {
            url: '/assets/images/purgatory.jpg',
            name: 'Psychopaths',
            med: 'Screenprint on Stonehenge',
            size: '11”x14”',
            ed: 'Ed. 7',
            val: "13"
        },
        {
            url: '/assets/images/sinking.jpg',
            name: 'Sinking',
            med: 'Photopolymer Etching on Stonehenge',
            size: '5”x7”',
            ed: 'Ed. 20',
            val: "14"
        },
        {
            url: '/assets/images/sisters-bw.jpg',
            name: 'Sisters B&W',
            med: 'Relief on Masa',
            size: '5”x6”',
            ed: 'Ed. 30',
            val: "15"
        },
        {
            url: '/assets/images/sisters.jpg',
            name: 'Sisters',
            med: 'Relief on Masa',
            size: '5”x6”',
            ed: 'Ed. 30',
            val: "16"
        },
        {
            url: '/assets/images/sloth.jpg',
            name: 'Sloth',
            med: 'Suicide Relief and Letterpress',
            size: '11”x13.5”',
            ed: 'Ed. 25',
            val: "17"
        },
        {
            url: '/assets/images/studio-life.jpg',
            name: 'Studio Life',
            med: 'Suicide Relief on Masa',
            size: '12”x12”',
            ed: 'Ed. 10',
            val: "18"
        },
        {
            url: '/assets/images/tenacious.jpg',
            name: 'Tenacious',
            med: 'Intaglio on Stonehenge',
            size: '8”x10”',
            ed: 'Ed. 10 AP',
            val: "19"
        },
        {
            url: "/assets/images/unawares.jpg",
            name: 'Unawares',
            med: 'Relief and Watercolor on Lenox',
            size: '12”x16”',
            ed: 'Ed. 5',
            val: "20"
        },
    ];
    //$('selector').masonry()
    $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: 200
      });
    
    var mediaItemContainer = $('#display-div');

    for(var i = 0; i < picArray.length; i++){
        //console.log(picArray[i]);
        var displayDiv =
        '<div class="grid-item">' +
            '<img class="img-responsive" alt="" src="'+ picArray[i].url + '" loading="lazy">' +
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
                        '<p>'+ picArray[i].ed + '</p>' +
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
    $('selector').masonry()

    var freeMasonry = $('.grid');

    freeMasonry.imagesLoaded()
        .done(function(){
        freeMasonry.masonry({
            itemSelector: '.grid-item'
        });
        });

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