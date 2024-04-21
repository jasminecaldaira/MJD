$(document).ready(function() {
    $ ('#click').click(function(){
        alert("I have been clicked!");
    })
    $('#hide').click(function(){
        $('#hideP').hide();
    })
    $('#show').click(function(){
        $('#show').after("I am the shown message").show();
    })
    $( "#toggle" ).click(function(){
        $( "#togglethis" ).toggle( "slow");
    });
    $('#slideDown').click(function(){
        $('h2').hide().slideDown("slow");
    })
    $('#slideUp').click(function(){
        $('h2').hide().slideUp("slow", function(){
            $('h2').show();
        });
    });
    $('#slideToggle').click(function(){
        $('#slideToggle').slideToggle("slow", function(){
            $('#slideToggle').show();
        });
    });
    $('#before').click(function(){
        $('#before').before('This is a before text.')
    });
    $('#addClass').click(function(){
        $( "p" ).first().addClass( "selected" );
    });
    $('#after').click(function(){
        $('#after').after('This is an after text.');
    });
    $('#append').click(function(){
        $('#append').append('This is an append text.');
    });
    $("#html").click(function() {
        var htmlString = $( this ).html();
        $( this ).text( htmlString );
      });
    $('#text').click(function(){
        $('#text p').text('I am created using the test() method of JQuery')
    })
    $('#fadeOut').click(function(){
        $('p').fadeOut("3000");
    }) 
    $('#fadeIn').click(function(){
        $('p').fadeIn("3000");
    })
    $('#addClass').click(function(){
        $(' p').addClass("selected");
    })
    $('#val').click(function(){
        var text = $('#val p').first().text();
        $('input').val(text);
    })
    $('#attr').click(function(){
        $('#attr #box').attr('width', '10%')
    })
});