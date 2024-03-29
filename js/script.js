document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// $(function () {
// 	var austDay = new Date();
// 	austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
// 	$('#defaultCountdown').countdown({until: austDay});
// 	$('#year').text(austDay.getFullYear());
// });
let qs = function(selector) {
	return document.querySelector(selector);
}

HTMLElement.prototype.qs  = function(selector){
	return this.querySelector(selector);
}

let qsa = function(selector) {
	return document.querySelectorAll(selector);
}
HTMLElement.prototype.qsa  = function(selector){
	return this.querySelectorAll(selector);
}


HTMLElement.prototype.parentFinder = function(clName){
	if(this.classList.contains(clName)){
		return this;
	} else {
		if(this.parentElement != null){
			return this.parentElement.parentFinder(clName);			
		}
	}
}

function ajax_handler(form_id, action, callback, err_callback) {
		var form = jQuery(form_id)[0];
	    var data = new FormData(form);
	    data.append("action", action);

	    jQuery.ajax({
	        type: "POST",
	        enctype: 'multipart/form-data',
	        url: ajaxurl,
	        data: data,
	        processData: false,
	        contentType: false,
	        cache: false,
	        timeout: 600000,
	        success: function (data) {
	        	callback(data);
	        },
	        error: function (e) {
	        	err_callback(e);
	        }
	    });
}


qs('#tabs').addEventListener('click', function(e){
	this.qsa('.tab-wrapper').forEach((item) => {
		if(!item.classList.contains('closetb') && item != e.target.parentElement){
			item.classList.add('closetb');
		}
	});
	if(e.target.classList.contains('tab-trigger')){
		e.target.parentElement.classList.toggle('closetb');
	}
});

var videoLink = jQuery('.video-link');
if (videoLink.length !== 0) {
    videoLink.YouTubePopUp();
}

var rewSlider = {
    init: function () {
        this.commentSlide = jQuery('.slick');
        this.commentSlide.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
};
if (jQuery('.slick').length !== 0) {
    rewSlider.init();
}