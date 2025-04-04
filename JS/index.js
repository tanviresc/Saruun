// I am going to continue to improve this...
// I attempt to perform candle again but could not overcome the previous version.
// http://codepen.io/fixcl/pen/nKFDr

$(document).ready(function()
	{
		var NavigatorName = navigator.userAgent.toLowerCase();
		//console.log($.browser.version);
		console.log(NavigatorName);
		if (NavigatorName.indexOf('edge') != -1)
		{
			$('#firstsection').empty();
			$('#firstsection').append('<h1>sarah，Im really sorry.，But the Edge browser does not support birthday cake animation effects，I once couldnt find a good solution，Please use FireFox to view this page，please?</h1>');
			$('#firstsection').append('<p>Dont believe me, you see.</p>');
			$('#firstsection').append("<img src='photo/截图.png' />");
			
		}
		
		var velas_top = window.screen.height * 0.5 - 130;
		console.log(velas_top);
		$('.velas').css(
			{
				'top': velas_top +'px'
			}
		);
		
		$('.text').addClass('hide');
		$('#fullpage').fullpage(
			{
				sectionsColor: ['#ee9ca7', '#66cccc', '#ffcc66', '#00cc99','#ee9ca7', '#66cccc', '#ffcc66'],
				anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage'],
				navigation: true,
				afterLoad: function(anchorLink, index)
				{
					if (index == 7)
					{
						return;
					}
					
					
		            var text = $(this).find('.text');
		            text.removeClass('hide');
		            $(this).find('.text').addClass('animated fadeInDown');
		            svgpaint(index);
		            
		            if (index == 4)
		            {
		            	$(this).find('img').addClass('flipInX')
		            }
	       	},
				
				 onLeave: function(index, nextIndex, direction){ 
				 	
				 	
					if (index == 7)
					{
						return;
					}
				 	var text = $(this).find('.text');
				 	$(this).find('.text').removeClass('animated fadeInDown').addClass('hide');
				 	
				 },
			}
			
		);
		
		
	});