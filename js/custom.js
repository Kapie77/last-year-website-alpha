var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
jQuery(document).ready(function($) {

	// VIMEO POPUP MODAL
	$('.home-video').on('click',function(e){
		videoURL = $('.video-modal').attr('data-url');
		$('.video-modal').html('<iframe src="'+videoURL+'?autoplay=1" width="750" height="421" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
		$('.video-overlay, .video-close').fadeIn();
		$('.video-modal').show();
		e.preventDefault();
	});

	$('.video-close').on('click',function(){
		$('.video-overlay, .video-modal, .video-close').fadeOut();
		$('.video-modal').html('');
	});


	// FAQ 
	$('.faq-entry').on('click','.faq-question',function(f){
		f.preventDefault();

		$(this).parent().toggleClass('open');
		$(this).parent().find('.faq-answer').stop().slideToggle('fast');

		$(".faq-entry").not($(this).parent()).removeClass('open');
		$(".faq-answer").not($(this).parent().find('.faq-answer')).slideUp('fast');

	});


	// CHARACTERS 
	$('#character-1').fadeIn();
	$('.character-selectors li:first-child a').addClass('selected');

	
	$('.character-selectors').on('click','a',function(a){
		a.preventDefault();
	});

	$('.character-selectors').on('mouseenter','a',function(a){
		$(this).addClass('selected');
		$('.character-selectors a').not($(this)).removeClass('selected');
		$character = $(this).attr('data-uri');
		$('#'+$character).stop().fadeIn();
		$('.character-block').not($('#'+$character)).stop().fadeOut();
	});

	// BLOG 
	$('.blog-excerpt').each(function(){
		postid = $(this).attr('data-id');
		if ($('body').hasClass(postid)) {
			$(this).hide();
		}
	})

	// FOOTER ALWAYS AT BOTTOM (EXCEPT CHARACTERS PATE)
	if (!$('body.page-template-page-characters').length) {
		$headerheight = $('header').height();
		$footerheight = $('footer').height();
		$contentheight = $(window).height() - $headerheight - $footerheight;
		$('.content').css('min-height',$contentheight+'px');
	}
});



}