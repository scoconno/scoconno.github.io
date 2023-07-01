$(document).ready(function() {
	initHorizNav();
	initNavLinks();
	initVideoSliders();
	initVideoThumbs();
	initSearchField();
	initAdminToolBoxLinks();
	initImgLinks();
	initGallerySlideshows();
	initLinkCheck();
	initEventCarousel();
});

$(window).load(function() {
	initHeaders();
	initSidebarHeight();
	initAHLinks();
});

function initLinkCheck()
{
	if (typeof(site_base_url) != 'undefined')
	{
		var testCheck = ((typeof(urlBasePath) == 'undefined') ? false : true);

		$('a').each(function(index){
			if ($(this).attr('href') != '' && $(this).attr('href') != null && $(this).attr('href') != '#' && $(this).attr('href').indexOf('javascript') != 0 && $(this).attr('href').indexOf('/admin') != 0 && $(this).attr('href').indexOf('/wizard') != 0 && $(this).attr('href').indexOf('/events/site') != 0 && $(this).attr('href').indexOf('mailto') != 0)
			{
				if ((!testCheck || $(this).attr('href').indexOf(urlBasePath) == -1) && ($(this).attr('href').indexOf(site_base_url) == -1 && $(this).attr('href').indexOf(site_base_url2) == -1))
				{
					$(this).attr('target', '_blank');
				}
			}
		});
	}
}

function getProps(obj)
{
	var props = [];

	for (prop in obj)
	{
		props.push(prop + ' == ' + obj[prop] + '\n');
	}

	alert(props);
}

function getWHProps(elem)
{
	var props = {
		borderW		: 0,
		borderH		: 0,
		marginW		: 0,
		marginH		: 0,
		paddingW	: 0,
		paddingH	: 0,
		width		: 0,
		height		: 0,
		totalW		: 0,
		totalH		: 0
	};

	if ($(elem).length)
	{
		props.width = $(elem).width();
		props.height = $(elem).height();

		props.borderW = parseInt($(elem).css('border-left-width').replace('px', '')) + parseInt($(elem).css('border-right-width').replace('px', ''));
		props.borderH = parseInt($(elem).css('border-top-width').replace('px', '')) + parseInt($(elem).css('border-bottom-width').replace('px', ''));

		props.marginW = parseInt($(elem).css('margin-left').replace('px', '')) + parseInt($(elem).css('margin-right').replace('px', ''));
		props.marginH = parseInt($(elem).css('margin-top').replace('px', '')) + parseInt($(elem).css('margin-bottom').replace('px', ''));

		props.paddingW = parseInt($(elem).css('padding-left').replace('px', '')) + parseInt($(elem).css('padding-right').replace('px', ''));
		props.paddingH = parseInt($(elem).css('padding-top').replace('px', '')) + parseInt($(elem).css('padding-bottom').replace('px', ''));

		props.totalW = props.borderW + props.marginW + props.paddingW + props.width;
		props.totalH = props.borderH + props.marginH + props.paddingH + props.height;
	}

	return props;
}

function initGallerySlideshows()
{
	if ($('.gallery_slider').length > 0)
	{
		$('.gallery_slider').each(function(index){
			$(this).attr('id', 'gallery_view_' + index);
			$('#gallery_view_' + index).easySlider(
			{
				prevId: 'previous' + index,
				nextId: 'next' + index
			}
			);
		});

		// Remove any preexisting click functions.
		$('.gallery_slider ul li a').unbind('click');

		// Setup the click function to load the new image
		$('.gallery_slider ul li a').click(function(e)
		{
			var tempLink = $(this);

			curSlideshow = tempLink.parents('.gallery_slideshow');

			curSlideshow.find('.gallery_preloader').show();

			curImg = $('<img />');
			curImg.attr('src', tempLink.find('img').attr('src').replace('/thumb/', '/full/')).load(updateGalleryImage);

			e.stopPropagation();
			return false;
		});
	}
}

function updateGalleryImage()
{
	$(this).hide();
	curSlideshow.find('.gallery_image img').replaceWith($(this));
	$(this).fadeIn('slow');
	curSlideshow.find('.gallery_preloader').hide();
	curSlideshow = null;
}

function initAHLinks()
{
	var links = $('.aheader a.ah_show, .aheader a.ah_hide');

	if (links.length)
	{
		links.click(function(e){
			e.stopPropagation();

			$(this).parents('.ah_block').toggleClass('active');

			return false;
		});

		if ($('#header').length && $('#header').height() > 0)
		{
			if ($('#header').height() > $('.ah_overlay').height())
			{
				$('.ah_panels').height(($('#header').height()) + 'px');
			}

			var diff = 0;

			if ($('#bottom').css('border-top-width') != '0px')
				diff = parseInt($('#bottom').css('border-top-width').replace('px', ''));

			$('.ah_block').css({'top':'-' + ($('#header').height() + diff) + 'px'});
		}

		else
		{
			$('#content').css({'padding-top':$('.ah_overlay').height() + 'px'});
		}
	}
}

function initHorizNav()
{
	var links = $('ul.nav_horiz > li > a');

	if (links.length > 3)
	{
		var width = $('ul.nav_horiz').width() - links.length - 1;
		var indWidth = Math.round(width / links.length);

		links.css({padding:'4px 0', width:indWidth + 'px'});

		$('ul.nav_horiz > li:last-child').css({'border-right':'none'});

		var diff = $('ul.nav_horiz').width() - ((indWidth + 1) * links.length) + 1;

		$('ul.nav_horiz > li:last-child > a').css({'width':(indWidth + diff) + 'px'});
	}
}

function initNavLinks()
{
	$( "body.nav_horizontal #nav li ul, body.nav_dual #nav li ul" ).each(function(i)
	{
		var col = $(this);
		var max = 0;
		var parWidth = $(this).parents('li').width();

		col.show();

		col.find('li').each(function(j){
			if ($(this).width() > max)
			{
				max = $(this).width();
			}
		});

		if (parWidth > max)
		{
			max = parWidth + 1;
		}

		else
		{
			max += 20;
		}

		col.hide();
		col.removeAttr('style');

		col.width(max + 'px');
		col.find('li').width(max + 'px');
	});
}

function initSidebarHeight()
{
	var nav = $('body.nav_left #navbar, body.nav_right #navbar');

	if (nav.length > 0)
	{
		var par = nav.parents('#inner');

		if (par.height() > nav.height())
		{
			nav.height(par.height() + 'px');
		}
	}

	var nav2 = $('body.nav_dual #sidenav');

	if (nav2.length > 0)
	{
		var par = $('#content');
		var props = getWHProps(nav2);
		var props2 = getWHProps(par);

		if (props.totalH < props2.totalH)
		{
			nav2.height((props.height + props2.totalH - props.totalH) + 'px');
		}

		else if (props.totalH > props2.totalH)
		{
			par.height((props2.height + props.totalH - props2.totalH) + 'px');
		}
	}

	var sidebar = $('#content > .sidebar, #content > .swap_cols > .sidebar');

	if (sidebar.length)
	{
		var main = $('#content > .main_side, #content > .swap_cols > .main_side');

		if (main.height() > sidebar.height())
		{
			sidebar.height(main.height() + 'px');
		}
	}
}

function initImgLinks()
{
	$('a img').parents('a').addClass('img_link');
}

function initHeaders()
{
	var items = $('.header_img_outer');
	var maxHeight = 0;

	if (items.length > 0)
	{
		items.each(function(i)
		{
			$(this).show();

			var title = $(this).find('.header_title');
			var overlay = $(this).find('.header_overlay');

			overlay.height(title.height() + 'px');
			overlay.fadeTo(0, 0.6);

			if ($(this).find('img').length <= 0)
			{
				overlay.parent().height(overlay.height() + 'px');
			}

			if ($(this).height() > maxHeight)
			{
				maxHeight = $(this).height();
			}

			if (i > 0)
			{
				$(this).fadeOut('0').css({'position':'absolute'});
			}

			else
			{
				$(this).fadeIn('1').css({'position':'absolute'});
			}
		});

		// If there is more than one
		if (items.length > 1)
		{
			setInterval('headerSlideshow()', 10000);
		}

		$('#header').height(maxHeight + 'px');
	}
}

function headerSlideshow()
{
	var items = $('div.header_img_outer');
	var curItem = $('div.header_img_outer:visible');
	var curIndex = items.index(curItem);
	var randomType = items.parents('.hs_random').length > 0 ? true : false;
	var nextIndex = curIndex;

	if (randomType)
	{
		while (nextIndex == curIndex)
		{
			nextIndex = Math.floor(Math.random() * items.length);
		}
	}

	else
	{
		nextIndex++;

		if (nextIndex > items.length - 1)
		{
			nextIndex = 0;
		}
	}

	curItem.css({'z-index':40}).fadeOut(3000);
	items.eq(nextIndex).css({'z-index':30}).fadeIn(3000);
}

function initAdminToolBoxLinks()
{
	$("#admin_toolbox a.tb_publish").fancybox({
		width: 678,
		height: 353,
		titleShow: false,
		overlayOpacity: 0.7,
		type: 'iframe',
		overlayColor: '#000'
	});

	$("#admin_toolbox a.tb_site_approve, #admin_toolbox a.tb_site_decline").fancybox({
		width: 600,
		height: 300,
		titleShow: false,
		overlayOpacity: 0.7,
		type: 'iframe',
		overlayColor: '#000'
	});

	$("#admin_toolbox h2 a").click(function(e)
	{
		e.stopPropagation();

		if ($(this).hasClass('close'))
		{
			$(this).removeClass('close');
			$(this).parents('#admin_toolbox').find('ul').hide();
		}

		else
		{
			$(this).addClass('close');
			$(this).parents('#admin_toolbox').find('ul').show();
		}

		return false;
	});
}

function initSearchField()
{
	$('input.search_field').focus(function(e)
	{
		var field = $(this);
		var curVal = new String(field.val());
		curVal = jQuery.trim(curVal.toLowerCase());

		if (curVal == 'search usc dornsife')
		{
			field.val('');
		}
	});

	$('input.search_field').blur(function(e)
	{
		var field = $(this);
		var curVal = new String(field.val());
		curVal = jQuery.trim(curVal.toLowerCase());

		if (curVal == 'search usc dornsife' || curVal == '')
		{
			field.val('Search USC Dornsife');
		}
	});
}

function initVideoThumbs()
{
	$('.video_list li a').click(function(e)
	{
		e.stopPropagation();

		var link = $(this);

		if (parseInt(link.attr('rel')) > 0)
		{
			updateMultiVideoPlayer(link.attr('rel'));
		}

		return false;
	});
}

function initVideoSliders()
{
	try
	{
		$(".video_list").easySlider({multi:3, check_pad:true, check_margin:true});
	}

	catch (e)
	{
	}
}

function updateMultiVideoPlayer(id)
{
	$('.html_videos .video').html('<div id="flash_video_internal"></div>');

	// If Flash exists
	if (swfobject.hasFlashPlayerVersion('9.0.115'))
	{
		var vars =
		{
			autoplay:'false',
			config:'/videos/xml/' + id + '/0/'
		};

		var params = {scale:'noScale', salign:'lt', menu:'false', allowScriptAccess:'always'};
		var attributes = {id:'flaswf', name:'flaswf', bgcolor:'#262626', wmode:'transparent'};

		swfobject.embedSWF('/assets/swf/player.swf', 'flash_video_internal', 396, 223, '9.0.115', '/assets/swf/expressInstall.swf', vars, params, attributes);
		try{swfmacmousewheel.registerObject(attributes.id);}catch(e){}
	}

	// Otherwise if QuickTime exists
	else if (_QTDetect())
	{
		$('#flash_video_internal').replaceWith($('<div id="qt_video_full"><img src="/assets/img/videos/screenshot/' + id + '.jpg" /><a href="/assets/video/' + id + '.mov" title="Play">Play</a></div>'));

		initQTVids();
	}
}


function initQTVids()
{
	// Remove any preexisting click functions.
	$('#qt_video_full a, #qt_video_small a, #qt_video_multimedia a, #qt_video_display a').unbind('click');

	// Link to play video
	$('#qt_video_full a, #qt_video_small a, #qt_video_multimedia a, #qt_video_display a').click(playQTVideo);
}

function playQTVideo(e)
{
	e.stopPropagation();

	var vidURL = 'http://' + document.domain + $(this).attr('href'); // /assets/video/sample.m4v

	var player = QT_GenerateOBJECTText_XHTML(vidURL, '396', '223', '', 'BGCOLOR', '#262626', 'CONTROLLER', 'true', 'AUTOPLAY', 'true', 'LOOP', 'false', 'ENABLEJAVASCRIPT', 'true', 'SCALE', 'ToFit', 'PLUGIN', 'quicktimeplugin', 'TYPE', 'video/quicktime', 'WMODE', 'transparent', 'QTSRC', vidURL);
	$('#qt_video_full').replaceWith($(player));

	return false;
}

function initEventCarousel()
{
	var maxHeight = 0;
	var items = $('.content_slider li');

	if (items.length > 1)
	{
		// Get the height of the tallest box

		items.each(function(i)
		{
			if ($(this).height() > maxHeight)
			{
				maxHeight = $(this).height();
			}

			if (i > 0)
			{
				$(this).hide();
			}

			$(this).css({position:'absolute', top:0, left:0 });
		});

		// Set the container height to the max item height
		items.parent().parent().height(maxHeight + 30);

		setInterval('crossFadeSideEvents()', 6500);
	}
}

function crossFadeSideEvents()
{
	var items = $('.content_slider li');
	var numBoxes = 0;
	var fadeOutBox = 0;
	var fadeInBox = 0;

	if (items.length > 1)
	{
		items.each(function(i)
		{
			numBoxes++;

			if ($(this).is(':visible'))
			{
				fadeOutBox = i;
			}
		});

		if (fadeOutBox == numBoxes - 1)
		{
			fadeInBox = 0;
		}

		else
		{
			fadeInBox = fadeOutBox + 1;
		}

		items.each(function(i)
		{
			if (i == fadeOutBox)
			{
				$(this).fadeOut(1000);
			}

			if (i == fadeInBox)
			{
				$(this).fadeIn(1000);
			}
		});
	}
}