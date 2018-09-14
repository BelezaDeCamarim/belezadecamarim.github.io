//Preloader 
$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('#apresentacao-home').delay(350).css({'overflow':'visible'});
})

// Animação das Imagens 
$(function() {
  $('.img-effect')
    // tile mouse actions
    .on('mouseover', function(){
      $(this).children('.photo').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
    })
    .on('mouseout', function(){
      $(this).children('.photo').css({'transform': 'scale(1)'});
    })
    .on('mousemove', function(e){
      $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 50 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 50 +'%'});
    })
    // tiles set up
    .each(function(){
      $(this)
        // add a photo container
        .append('<div class="photo"></div>')
        // set up a background image for each tile based on data-image attribute
        .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
    })
});


//Formulario do botao email fixo
$(function() {
  
  // contact form animations
  $('#btn-email').click(function() {
    $('#contactForm').fadeToggle();
    $('.overlay-modal').fadeToggle();
  })
  //$(document).mouseup(function (e) {
  //  var container = $("#contactForm");

  //  if (!container.is(e.target) // if the target of the click isn't the container...
  //      && container.has(e.target).length === 0 || jQuery('#btn-email').click) // ... nor a descendant of the container
  //  {
  //      container.hide();
  //  }
  //});
  
});

//Panel de redefinição de senha
$(function() {
  
  // redefining password panel animations
  $('.esqueciSenha').click(function() {
    $('#recovery-panel').fadeIn();
    $('.overlay-modal').fadeIn();
  });

  $('#cancela').click(function() {
    $('#recovery-panel').fadeOut();
    $('.overlay-modal').fadeOut();
  });
  
});

//Animação geral dos elementos do site
var root = document.documentElement;
root.className += ' js';

function boxTop(idBox) {
	var boxOffset = $(idBox).offset().top;
	return boxOffset;
}

$(document).ready(function() {
	var $target = $('.anime'),
			animationClass = 'anime-init',
			windowHeight = $(window).height(),
			offset = windowHeight - (windowHeight / 4);

	function animeScroll() {
		var documentTop = $(document).scrollTop();
		$target.each(function() {
			if (documentTop > boxTop(this) - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}
	animeScroll();

	$(document).scroll(function() {
		setTimeout(function() {animeScroll()}, 150);
	});
});

//Catalogo Filtro
filterSelection("todos")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "todos") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "mostrar");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "mostrar");    
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}



// Catálogo Filtros Active Animação
$(function() {
      $( '#myBtnCatalogo button' ).on( 'click', function() {
            $( this ).parent().find( 'button.active' ).removeClass( 'active' );
            $( this ).addClass( 'active' );
      });
});
