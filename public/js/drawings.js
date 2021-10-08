$(document).ready(function(){


    var picArray = [
        {
            url: '/assets/images/3-amigos.jpg',
            name: 'Three Amigos',
            med: 'Sanded Acrylic and Charcoal',
            size: '12”x16”',
            val: '1'
        },
        {
            url: '/assets/images/Arrow.jpg',
            name: 'Arrow',
            med: 'Ballpoint Pen Drawing',
            size: '8”x10”',
            val: '2'
        },
        {
            url: '/assets/images/Depression.gif',
            name: 'Depression',
            med: 'Digital Gif',
            size: '',
            val: '3'
        },
        {
            url: '/assets/images/Drift.jpg',
            name: 'Drift',
            med: 'Graphite and Ink on Stonehenge',
            size: '18”x24”',
            val: '4'
        },
        {
            url: '/assets/images/girl-profile.jpg',
            name: 'Girl Profile',
            med: 'Sanded Acrylic Paint and Charcoal',
            size: '15”x22”',
            val: '5'
        },
        {
            url: '/assets/images/harlot-banner.jpg',
            name: 'Harlot’s Calamity Lyric Banner',
            med: 'Digital Drawing',
            size: '',
            val: '6'
        },
        {
            url: '/assets/images/Rita.jpg',
            name: 'Rita',
            med: 'Copic Markers and Gel Pens',
            size: '6”x8”',
            val: '7'
        },
        {
            url: '/assets/images/Nyx.jpg',
            name: 'Nyx',
            med: 'Copic Markers and Gel Pens',
            size: '6”x8”',
            val: '8'
        },
        {
            url: '/assets/images/bear.png',
            name: 'Bear',
            med: 'Wood Burning on Cutting Board',
            size: '',
            val: '9'
        },
        {
            url: '/assets/images/boar.png',
            name: 'Wild Boar',
            med: 'Wood Burning',
            size: '24”x36”',
            val: '10'
        },
        {
            url: '/assets/images/for-hideo.jpg',
            name: 'For Hideo',
            med: 'Copic Markers and Gel Pens',
            size: '8”x10”',
            val: '11'
        },
        {
            url: '/assets/images/girl-1.jpg',
            name: 'Girl 1',
            med: 'Charcoal on Gray Paper',
            size: '9”x11”',
            val: '12'
        },
        {
            url: '/assets/images/music.jpg',
            name: 'Music',
            med: 'Digital Drawing',
            size: '',
            val: "13"
        },
        {
            url: '/assets/images/Yue.jpg',
            name: 'Yue',
            med: '',
            size: '',
            val: "15"
        },
        {
            url: '/assets/images/optimism.gif',
            name: 'Optimism',
            med: 'Digital GIF',
            size: '',
            val: "16"
        },
        {
            url: '/assets/images/pessimism.gif',
            name: 'Pessimism',
            med: 'Digital GIF',
            size: '',
            val: "17"
        },
        {
            url: '/assets/images/girl-2.jpg',
            name: 'Girl 2',
            med: 'Charcoal on Gray Paper',
            size: '',
            val: "18"
        },
        {
            url: '/assets/images/girl-3.jpg',
            name: 'Girl 3',
            med: 'Charcoal on Gray Paper',
            size: '',
            val: "19"
        },
        {
            url: '/assets/images/heart.png',
            name: 'Heart',
            med: 'Oil Painting',
            size: '18”x24”',
            val: "20"
        },
        {
            url: '/assets/images/i-love-you.jpeg',
            name: 'I Love You',
            med: 'Oil Painting',
            size: '',
            val: "21"
        },
        {
            url: '/assets/images/img.jpg',
            name: 'Spidey Venom',
            med: 'Acrylic Painting',
            size: '16”x20”',
            val: "22"
        },
        {
            url: '/assets/images/jose.jpg',
            name: 'Jose',
            med: 'Copic Markers and Gel Pens',
            size: '8”x10”',
            val: "23"
        },
        {
            url: '/assets/images/ruby.jpg',
            name: 'Ruby Rose',
            med: 'Graphite on Stonehenge',
            size: '9”x11”',
            val: "24"
        },
        {
            url: '/assets/images/shop.jpg',
            name: 'Shop Till You Drop',
            med: 'Collage and Acrylic on Plywood Box',
            size: '6”x6”',
            val: "25"
        },
        {
            url: '/assets/images/skull-study.jpg',
            name: 'Skull Study',
            med: 'Graphite on Stonehenge',
            size: '14”x20”',
            val: "26"
        },
        {
            url: '/assets/images/skull.jpg',
            name: 'Skull',
            med: 'Graphite and Ink on Stonehenge',
            size: '24”x18”',
            val: "27"
        },
        {
            url: '/assets/images/slithery.jpg',
            name: 'Slithery Little Snake',
            med: 'Sanded Acrylic and Charcoal',
            size: '12”x36”',
            val: "28"
        },
        {
            url: '/assets/images/tied-up.jpg',
            name: 'Tied Up',
            med: 'Acrylic and Charcoal',
            size: '10.5”x17.5”',
            val: "29"
        },
        {
            url: '/assets/images/miles.jpg',
            name: 'Miles',
            med: 'Copic Markers and Gel Pens',
            size: '8”x10”',
            val: "30"
        },
        {
            url: '/assets/images/mothers-love.jpg',
            name: 'Mothers Love',
            med: 'Pastels and Ink',
            size: '18”x14”',
            val: "31"
        },
        {
            url: '/assets/images/the-godfather.jpg',
            name: 'The Godfather',
            med: 'Acrylic Painting',
            size: '12”x16”',
            val: "32"
        },
        {
            url: '/assets/images/insecure.jpg',
            name: 'Insecure Exposure',
            med: 'Charcoal, Chalk Pastels, and Acrylic Paint',
            size: '44”x30”',
            val: "33"
        },
        {
            url: '/assets/images/jack-sally.jpg',
            name: 'Jack and Sally',
            med: 'Oil Paint',
            size: '',
            val: "34"
        },
        {
            url: '/assets/images/kid-knot.jpg',
            name: 'I Kid You Knot',
            med: 'Acrylic and Charcoal',
            size: '22”x30”',
            val: "35"
        },
        {
            url: '/assets/images/modern-living.jpg',
            name: 'Modern Living',
            med: 'Chalk Pastels and Acrylic Paint',
            size: '30”x44”',
            val: "36"
        },
        {
            url: '/assets/images/rose.jpg',
            name: 'Rose',
            med: 'Charcoal Drawing',
            size: '8”x10”',
            val: "37"
        },
        {
            url: '/assets/images/too-late.jpg',
            name: 'It’s Too Late to Apologize',
            med: 'Sanded Acrylic and Charcoal',
            size: '12”x16”',
            val: "38"
        },
        {
            url: '/assets/images/V.jpg',
            name: 'V',
            med: 'Charcoal Drawing',
            size: '8”x10”',
            val: "39"
        },
        {
            url: '/assets/images/wonderboom-1.jpg',
            name: 'Wonderboom Ad 1',
            med: 'Charcoal Drawing, Digital Ad',
            size: '',
            val: "40"
        },
        {
            url: '/assets/images/wonderboom-2.jpg',
            name: 'Wonderboom Ad 2',
            med: 'Charcoal Drawing, Digital Ad',
            size: '',
            val: "41"
        },
        {
            url: '/assets/images/Wood.jpg',
            name: 'Wood',
            med: 'Graphite and Ink on Stonehenge',
            size: '18”x24”',
            val: "42"
        }
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
      mediaItemContainer.imagesLoaded();
      
    };

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