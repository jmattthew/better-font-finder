var sampleText = "Explore the filters &amp; Tap this text to edit it.";
var minInputLength = 10;
var fontsReturned = 0;
var familiesCount = 0;
var navUA = navigator.userAgent;

fonts.sort(fontDBsorter);

// load webfonts
var families = [];
for ((i = 0), (il = fonts.length); i < il; i++) {
	var str = fonts[i].family;
	var weights = 0;
	for ((j = i + 1), (jl = fonts.length); j < jl; j++) {
		if (fonts[i].family == fonts[j].family) {
			if (weights == 0) {
				str += ':' + fonts[i].cssWeight + ',';
			}
			str += fonts[j].cssWeight + ',';
			weights++;
		} else {
			if (weights > 0) {
				str = str.substring(0, str.length - 1);
				weights = 0;
			}
			break;
		}
	}
	families[families.length] = str;
	familiesCount++;
	i = j - 1;
}

WebFont.load({
	google: {
		families: families
	},
	active: function() {
		// delay is needed because active is triggered
		// before font has rendered despite the claims of
		// documentation.
		var t = window.setTimeout(function(){
			filter_list();
			scale_fonts();
		},500);
	},
	fontactive: function(familyName, fvd) {
		fontsReturned++;
		updateLoadingProgress();
	},
	fontinactive: function(familyName, fvd) {
		fontsReturned++;
		updateLoadingProgress();
		console.log(familyName + ' failed to load');
	}
});

// Add Helvetica & Times local fonts for comparison
if(navUA.indexOf('Android') == -1) {
	// Helvetica & Times are not currently available on Android devices
	fonts[fonts.length] = {
		cap: "none",
		contrast: "unstressed",
		apparentWeight: "400",
		cssWeight: "400",
		primary: true,
		family: "Helvetica"
	};
	fonts[fonts.length] = {
		cap: "none",
		contrast: "unstressed",
		apparentWeight: "700",
		cssWeight: "700",
		primary: false,
		family: "Helvetica"
	};
	fonts[fonts.length] = {
		cap: "classic",
		contrast: "stressed",
		apparentWeight: "400",
		cssWeight: "400",
		primary: true,
		family: "Times New Roman"
	};
	fonts[fonts.length] = {
		cap: "classic",
		contrast: "stressed",
		apparentWeight: "700",
		cssWeight: "700",
		primary: false,
		family: "Times New Roman"
	};
	familiesCount += 2;
}
fonts.sort(fontDBsorter);


$(document).ready(function() {

	// insert icons
	$('#compare svg').html(iconFavorite);
	$('#classic_stressed svg').html(iconClassicStressed);
	$('#classic_stressed_zoomed svg').html(iconClassicStressedZoomed);
	$('#none_unstressed svg').html(iconNoneUnstressed);
	$('#none_unstressed_zoomed svg').html(iconNoneUnstressedZoomed);
	$('#slab svg').html(iconSlab);
	$('#slab_zoomed svg').html(iconSlabZoomed);
	$('#classic svg').html(iconClassic);
	$('#classic_zoomed svg').html(iconClassicZoomed);
	$('#none svg').html(iconNone);
	$('#none_zoomed svg').html(iconNoneZoomed);
	$('#round svg').html(iconRound);
	$('#round_zoomed svg').html(iconRoundZoomed);
	$('#othercap svg').html(iconOtherCap);
	$('#othercap_zoomed svg').html(iconOtherCapZoomed);
	$('#ultra svg').html(iconUltra);
	$('#ultra_zoomed svg').html(iconUltraZoomed);
	$('#stressed svg').html(iconStressed);
	$('#stressed_zoomed svg').html(iconStressedZoomed);
	$('#unstressed svg').html(iconUnstressed);
	$('#unstressed_zoomed svg').html(iconUnstressedZoomed);
	$('#hybrid svg').html(iconHybrid);
	$('#hybrid_zoomed svg').html(iconHybridZoomed);
	$('.group_accordion svg').html(iconWeightAccordion);

	// insert font list
	for ((i = 0), (il = fonts.length); i < il; i++) {
		var font = fonts[i];
		font.cssName = font.family.replace(/\s/g,'_');
		font.url = font.family.replace(/\s/g,'+');
		font.apparentWeight =	'w' + font.apparentWeight;
		var primary = font.primary ? " primary" : "";
		html =
			'<div class="specimen ' +
			font.cap +
			" " +
			font.contrast +
			" " +
			font.apparentWeight +
			" css" +
			font.cssWeight +
			" " +
			font.cssName +
			primary +
			'"><div class="sample"><span>' +
			sampleText +
			'</span></div><div class="google_link"><a href="https://fonts.google.com/specimen/' +
			font.url +
			'" target="_blank">' +
			font.family +
			" <span>" +
			font.cssWeight +
			'<span></a>' +
			'<div class="favorite"><svg viewBox="0 0 45 45">' +
			iconFavorite +
			+ '</svg></div></div></div>';
		var el = $(html)
		$(el).data('cssName',font.cssName);
		$("#list > div").append(el);
		var html =
			'<style type="text/css"> .' +
			font.cssName +
			" { font-family: '" +
			font.family +
			"'; } </style>";
		$("#list > div").append(html);
	}

	// Fix links for Helvetica & Times local fonts
	$('.Helvetica .google_link a, .Times_New_Roman .google_link a').attr('href','#');




	// bind event handlers




	// filter buttons
	$('#filters').mouseleave(function() {
		$('.option, .filter_preset, .binary').removeClass('tapped');
	});

	$('#compare .binary').click(function(event) {
		$(this).toggleClass('selected');
		$('#categorize').toggleClass('open');
		$(this).addClass('tapped');
		filter_list();
		scale_fonts();
	});

	$('.option').click(function() {
		window.getSelection().removeAllRanges();
		update_header();
		$(this).toggleClass('selected');
		$(this).addClass('tapped');
		// count selected options
		var options = $(this).parent().find('.option');
		var selectedCount = 0;
		for ((j = 0), (jl = options.length); j < jl; j++) {
			var option = $(options).eq(j);
			if ($(option).hasClass('selected')) {
				selectedCount++;
			}
		}
		// update toggle
		var toggle = $(this).parent().parent().find('.group_toggle');
		if (selectedCount == 0) {
			$(toggle).removeClass('selected');
		} else {
			$(toggle).addClass('selected');
		}
		$('.filter_preset').removeClass('selected');
		filter_list();
		scale_fonts();
	});

	// toggle buttons
	$('.group_toggle').click(function(){
		update_header();
		$(this).toggleClass('selected');
		var options = $(this).parent().find('.option');
		if($(this).hasClass('selected')) {
			$(options).addClass('selected');
		} else {
			$(options).removeClass('selected');
		}
		$('.filter_preset').removeClass('selected');
		filter_list();
		scale_fonts();
	});

	// preset buttons
	$('.filter_preset').click(function() {
		$(this).addClass('tapped');
		// update option buttons
		var classes = $(this).attr('class').split(" ");
		$('.option').removeClass('selected');
		for (var i = 0, il = classes.length; i < il; i++) {
			$("#" + classes[i]).addClass('selected');
			if(classes[i] == 'unstressed') {
			}
		}
		$(this).addClass('selected');
		filter_list();
		scale_fonts();
	});

	// weight accordion button
	$('.group_accordion').click(function() {
		$(this).toggleClass('selected');
		$(this).parent().toggleClass('open');
		if(!$(this).parent().hasClass('open')) {
			// collapsing weights toggles all weights to on
			$('#weight .option, #weight group_toggle').addClass('selected');
			$('.google_link a').removeClass('show_weights');
	    	$('#filters #weight').css('overflow','');
		} else {
			// scroll down if weights are hidden
			$('#filters').animate({
				scrollTop: 296
			}, {
			    duration: 500,
			    easing: 'swing',
			    complete: function() {
			    	$('#filters #weight').css('overflow','visible');
			    }
			});
			$('.google_link a').addClass('show_weights');
		}
		filter_list();
		scale_fonts();
	});

	// specimens
	$('.specimen').click(function() {
		if($(this).find('input').length == 0) {
			window.getSelection().removeAllRanges();
			$('.header_bar').toggleClass('selected');
			$('#about_button').toggleClass('selected');
			// replace the sample span with an identical looking input field
			$(this).find('span').eq(0).css('display','none');
			var fontClasses = $(this).attr('class');
			fontClasses = fontClasses.replace('animate','');
			fontClasses = fontClasses.replace('specimen','');
			var inputText = sampleText.replace(/&nbsp;/g,' ')
			var html = '<input type="text" value="' + inputText + '" class="' + fontClasses + '">';
			$(this).find('.sample').append(html);
			var scale = parseFloat($(this).find('.sample').css('transform').split(',')[0].replace('matrix(',''));
			var width = parseFloat($(this).find('.sample').css('width'));
			$(this).find('input').css('width',width/scale);
			$(this).find('input').focus();
			$(this).find('input').select();
			$(this).find('input').keydown(function(e) {
				$(this).data('key',e.which);
			});
			$(this).find('input').keyup(function() {
				var key = $(this).data('key');
				if (key == 32 || key == 8 || key >= 46) {
					// on space, delete, or visible character
					sampleText = $(this).val();
					if(sampleText.length < minInputLength) {
						for(i=0, il = minInputLength - sampleText.length; i<il; i++) {
							sampleText += ' ';
						}
					}
					sampleText = sampleText.replace(/\s/g,'&nbsp;');
					$('.sample span').html(sampleText);
					scale_fonts();
				} else if(key == 13 || key == 27) {
					// on return or escape
					$(this).blur();
				}
			});
			$(this).find('input').blur(function() {
				var hollaBack = function(el){
					var t2 = window.setTimeout(function() {
						$('.header_bar').toggleClass('selected');
						$('#about_button').toggleClass('selected');
					},250);
					$(el).parent().find('span').css('display','');
					if($(el).val().length == 0) {
						sampleText = 'OI&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
						$('.sample span').html(sampleText);
						scale_fonts();
					}
					$(el).remove();
					$('a').blur();
				};
				var t = window.setTimeout(hollaBack, 50, this); // delay required or else specimin click fires
			});
		}
	});

	// header specimen buttons
	$('#header_bar_edit div').click(function() {
		$('#header input').remove();
		sampleText = $(this).find('span').html();
		sampleText = sampleText.replace(/\s/g,'&nbsp;');
		$('.sample span').html(sampleText);
		scale_fonts();
	});

	// links to google
	$('.google_link a').click(function(event) {
		event.stopPropagation();
	});

	// links for Helvetica & Times local fonts
	$('.Helvetica .google_link a, .Times_New_Roman .google_link a').click(function() {
		var about = $('#about div');
		$(about).data('originalAbout',$(about).html());
		var html = '';
		html += '<p>Tap anywhere to <a href="#">close</a> this message.</p>';
		html += '<p>"Helvetica" &amp; "Times New Roman" are not freely available from Google Fonts, unlike all the other fonts in this list.</p>';
		html += '<p>They are included for comparison because they are two of the most widely used and historically important fonts.</p>';
		html += '<p>As of 2017, they are pre-installed on all Mac, Windows, and iOS devices, but not on Android devices.</p>';
		html += '<p>Tap on any of the other font-name buttons to open that font on the Google Fonts website.</p>'
		html += '<p><a href="#">Got it!</a></p>'
		$(about).html(html);
		$('#about, #about_button').toggleClass('open');
		return false;
	});

	// compare buttons
	$('.favorite').click(function(event) {
		event.stopPropagation();
		$(this).toggleClass('selected');
		$(this).parent().parent().toggleClass('favorited');
		if($('.favorited').length > 0) {
			$('#compare').addClass('open');
			// scroll up if compare button is hidden
			$('#filters').animate({
				scrollTop: 0
			}, {
			    duration: 500,
			    easing: 'swing'
			});
		} else {
			$('#compare').removeClass('open');
			$('#compare .binary').removeClass('selected');
			filter_list();
			scale_fonts();
		}
	});

	// about
	$('#about, #about_button').click(function() {
		var about = $('#about div');
		$(about).html($(about).data('originalAbout'));
		$('#about, #about_button').toggleClass('open');
	});

	// browser
	$(window).resize(function() {
		update_header();
		$('#list').css('opacity','0');
		// re-scale fonts after browser window resizing has stopped
		clearTimeout($.data(this, 'scrollTimer'));
			$.data(this, 'scrollTimer', setTimeout(function() {
			filter_list();
			scale_fonts();
		}, 500));
	});

});

function scale_fonts() {
	// scale font to match in width
	var sampleWidth = $('.specimen').eq(0).width();
	var els = $('.specimen');
	var elsa = $(els).find('.google_link');
	var aW = 0;
	var temp = 0;
	$(elsa).css('width','');
	for ((i = 0), (il = $(elsa).length); i < il; i++) {
		// find widest font link
		temp = $(elsa).eq(i).outerWidth();
		if(temp > aW) { aW = temp; }
	}
	aW = aW * 1.2;
	if($(document).width() > 600) {
		$(elsa).css('width',aW);
		sampleWidth -= aW;
		$(els).find('.sample').css('width',sampleWidth);
	}
	for ((i = 0), (il = $(els).length); i < il; i++) {
		var el = $(els).eq(i);
		var currentWidth = $(el).find('span').width();
		var scale = sampleWidth/currentWidth;
		$(el).find('.sample').css('transform','scale('+ scale +')');
		var currentHeight = $(el).find('span').height();
		$(el).data('cssHeight',currentHeight*scale);
		if((el).find('input').length > 0) {
			$('#list').find('input').css('width',sampleWidth/scale);
		}
	}
	for ((i = 0), (il = $(els).length); i < il; i++) {
		var el = $(els).eq(i);
		$(el).css('height',$(el).data('cssHeight'));
	}
}

function filter_list() {
	var specimens = $('.specimen');
	$(specimens).removeClass('filtered_out');
	// hide specimens without a matching selected option
	var options = $('.option');
	for ((i = 0), (il = specimens.length); i < il; i++) {
		var specimen = $(specimens).eq(i);
		if($('#compare .binary').hasClass('selected')) {
			// ignore all options and show favorited
			if(!$(specimen).find('.favorite').hasClass('selected')) {
				$(specimen).addClass('filtered_out');
			}
		} else {
			for ((j = 0), (jl = options.length); j < jl; j++) {
				var option = $(options).eq(j);
				if (!$(option).hasClass('selected')) {
					if ($(specimen).hasClass($(option).attr('id'))) {
						$(specimen).addClass('filtered_out');
					}
				}
				// also hide non primary weigths if weigths collapsed
				if(!$('#weight').hasClass('open')) {
					if(!$(specimen).hasClass('primary')) {
						$(specimen).addClass('filtered_out');
					}
				}
			}
		}
	}
	// add animations
	$(specimen).removeClass('animate');
	$(specimen).css('animation-delay','');
	var delay = 0;
	for ((i = 0), (il = specimens.length); i < il; i++) {
		var specimen = $(specimens).eq(i);
		if(!$(specimen).hasClass('filtered_out')) {
			$(specimen).addClass('animate');
			$(specimen).css('animation-delay',(delay*30)+'ms');
			delay++;
		}
	}
	// update family count
	var count = 0;
	var lastName = '';
	for ((i = 0), (il = specimens.length); i < il; i++) {
		var specimen = $(specimens).eq(i);
		if($(specimen).css('display')=='block') {
			var cssName = $(specimen).data('cssName');
			if(cssName != lastName) { count++ }
			lastName = cssName;
		}
	}
	$('#loading span').css('animation-iteration-count',1);
	$('#loading').css('opacity',0);
	if(count > 0) {
		$('#families_count').html('<span>Displaying <strong>' + count + ' of the ' + familiesCount + '</strong></span>.');
		$('#list').css('opacity','1');
		$('#no_matches').removeClass('open');
	} else {
		$('#families_count').html('<span><em>All ' + familiesCount + ' fonts are hidden!</em></span>.');
		$('#list').css('opacity',0);
		$('#no_matches').addClass('open');
	}
}

function update_header() {
	// ensure that found count is visible on narrow window
	$('#title, #subtitle').css('display','');
	if($(document).width() < 980) {
		$('#subtitle').css('display','none');
	}
	if($(document).width() < 600) {
		$('#title').css('display','none');
	}
}

function updateLoadingProgress() {
	var percent = parseInt((fontsReturned/fonts.length)*100);
	var gradient = 	'linear-gradient(to right,rgba(255,255,255,1) 0%,rgba(255,255,255,1) ' +
		(percent-5) +
		'%,rgba(255,255,255,0) ' +
		(percent+5) +
		'%,rgba(255,255,255,0) 100%)';
	$('#loading > div > div').css('background',gradient);
}

function fontDBsorter(a, b) {
	// sort by font database by family then cssWeight
	if (a.family < b.family) {
		return -1;
	} else if (a.family > b.family) {
		return 1;
	} else {
		if (a.cssWeight < b.cssWeight) {
			return -1;
		} else if (a.cssWeight > b.cssWeight) {
			return 1;
		} else {
			return 0;
		}
	}
}








