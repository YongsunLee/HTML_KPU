// Navbar Button Shape Change
function myFunction(x) {
	x.classList.toggle("change");
}

$(document).ready(function() {
   $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1] // Will preload 0 - before current, and 1 after the current image
          },
          image: {
                  tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                  titleSrc: function(item) {
                      return item.el.attr('title') + '<small>by 8ung_Pic</small>';
                  }
              }
        });
});

$('.js-imgSizeSame').each(function(index) { 
	$(this).children('img').one("load", function() { 
	}).each(function() { 
		imageSizeSame($(this).parent(), 0.7); 
	});

	$(this).parents('.card').find('.desc-noimg').addClass('desc').removeClass('desc-noimg'); 
});

function imageSizeSame(wrapImgClass, ratio=0) { // 1번 
	var divHeight; 
	var div = wrapImgClass; 
	var img = div.children('img'); 
	var divWidth = div.width(); 

	if(!ratio || ratio == 0) { // 2번 
		divHeight = div.height(); // 3번 
	} 
	else { 
		divHeight = divWidth * ratio; // 4번 
		div.height(divHeight + 'px'); // 5번 
	} 

	var divAspect = divHeight / divWidth; // 6번 
	var imgAspect = img.height() / img.width(); // 7번 
	if (imgAspect <= divAspect) { // 8번 
		// 이미지가 div보다 납작한 경우 세로를 div에 맞추고 가로는 중앙으로 맞춤 
		var imgWidthActual = div.outerHeight(true) / imgAspect; 
		var imgWidthToBe = div.outerHeight(true) / divAspect; 
		var marginLeft = -Math.round((imgWidthActual - imgWidthToBe)/100); 
		img.css({ width: 'auto', 'margin-left': marginLeft + 'px', height: '100%' }); 
	} 
	else { // 9번 
		// div가 이미지보다 납작한 경우 가로를 img에 맞추고 세로는 중앙으로 맞춤 
		var imgHeightActual = div.outerWidth(true) * imgAspect; 
		var imgHeightToBe = div.outerWidth(true) * divAspect; 
		var marginTop = Math.round((imgHeightActual - imgHeightToBe) / 4); 
		img.css(
				{width: '100%', 'margin-left': 0, 'margin-top': - marginTop + 'px', height: 'auto' }
		); 
	} 
}
