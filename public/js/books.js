$(document).ready(function(){

  $('body').append('<div style="" id="loadingDiv"><div class="loader"><img  class="loader-img" src="assets/images/load.gif" alt="Loading..."><p style="font-size: 20px;">Loading...</p></div></div>');
  $(window).on('load', function(){
  setTimeout(removeLoader, 500); //wait for page load PLUS two seconds.
  });
  function removeLoader(){
      $( "#loadingDiv" ).fadeOut(700, function() {
      // fadeOut complete. Remove the loading div
      $(".carousel-control-prev").fadeIn(1000, function(){
        $(".carousel-control-prev").show();
      });
      $(".carousel-control-next").fadeIn(700, function(){
        $(".carousel-control-next").show();
      });
      
      $( "#loadingDiv" ).remove(); //makes page more lightweight 
  });  
  }
    $(".modal").modal();
    $("#carousel2").click(function(){
      console.log("click")
      var element = document.getElementById("modal-1");
      element.classList.add("show");
      element.classList.add("in");
    $("#modal-1").modal('show');

    });
    
    $("#close-button").click(function(){
        console.log("click")
        var element = document.getElementById("modal-1");
        element.classList.remove("show");
        element.classList.remove("in");
        $("#modal-1").modal('hide');

      });
      $("#carousel3").click(function(){
        console.log("click")
        var element = document.getElementById("modal-2");
        element.classList.add("show");
        element.classList.add("in");
      $("#modal-2").modal('show');
  
      });
      
      $("#close-button-2").click(function(){
          console.log("click")
          var element = document.getElementById("modal-2");
          element.classList.remove("show");
          element.classList.remove("in");
          $("#modal-2").modal('hide');
  
        });
        $("#carousel4").click(function(){
          console.log("click")
          var element = document.getElementById("modal-3");
          element.classList.add("show");
          element.classList.add("in");
        $("#modal-3").modal('show');
    
        });
        
        $("#close-button-3").click(function(){
            console.log("click")
            var element = document.getElementById("modal-3");
            element.classList.remove("show");
            element.classList.remove("in");
            $("#modal-3").modal('hide');
    
          });
          $("#carousel5").click(function(){
            console.log("click")
            var element = document.getElementById("modal-4");
            element.classList.add("show");
            element.classList.add("in");
          $("#modal-4").modal('show');
      
          });
          
          $("#close-button-4").click(function(){
              console.log("click")
              var element = document.getElementById("modal-4");
              element.classList.remove("show");
              element.classList.remove("in");
              $("#modal-4").modal('hide');
      
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