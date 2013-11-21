function title(){
	var canvas = document.getElementById("board");
		if (canvas.getContext) {
			var context = canvas.getContext("2d");
			context.font = "40pt Impact";
			context.fillStyle = "white";
			context.fillText("Icon Maker", 30, 60);	
			context.font = "25pt Impact";
			context.fillText("color", 550, 105);
			context.fillText("detail", 550, 290);	
			context.fillText("image (.png)", 545, 390);
			context.font = "20pt Impact";
			context.fillText("-2013.11.17 itakanaya9-", 280, 60);
			
			context.fillRect(20,80,500,500);
			context.strokeStyle = 'white';
			context.beginPath();
				context.moveTo(540,400);
				context.lineTo(540,400);
				context.lineTo(540+180,400);
				context.lineTo(540+180,400+180);
				context.lineTo(540,400+180);
				context.lineTo(540,400);
			context.stroke();
		}
}

function line(){
	var canvas = document.getElementById("line");
		if (canvas.getContext) {
			var context = canvas.getContext("2d");
			context.strokeStyle = 'silver';
			var w=g_canvas/g_detail;
			for(var i=1;i<g_detail;i++){
				context.beginPath();
					context.moveTo(w*i,0); //縦線の終点
					context.lineTo(w*i,g_canvas);  //縦線の始点
				context.stroke();
				context.beginPath();
					context.moveTo(0,w*i); //縦線の終点
					context.lineTo(g_canvas,w*i);  //縦線の始点
				context.stroke();
			}
		}
}

function cover_with_paint(){
	var canvas = document.getElementById("canvas");
		if (canvas.getContext) {
			var context = canvas.getContext("2d");
			context.clearRect(0,0,g_canvas,g_canvas);
			for(var i=0;i<100;i++){
				for(var j=0;j<100;j++){
					
					var w=g_canvas/g_detail;
					if(g_paint){
						context.beginPath();
							context.fillStyle = g_color;
							context.fillRect(i*w,j*w,w,w);
						context.stroke();
						g_canvas_values[i][j]=g_color;
					}else{
						g_canvas_values[i][j]=null;
					}
				}
			}
		}
	line();
}

function print_icon_iamge(){
	var canvas = document.getElementById("canvas");
	iconImage.src=canvas.toDataURL();
}

function slider(){
	  function hexFromRGB(r, g, b) {
	    var hex = [
	      r.toString( 16 ),
	      g.toString( 16 ),
	      b.toString( 16 )
	    ];
	    $.each( hex, function( nr, val ) {
	      if ( val.length === 1 ) {
	        hex[ nr ] = "0" + val;
	      }
	    });
	    return hex.join( "" ).toUpperCase();
	  }
	  function refreshSwatch() {
	    var red = $( "#red" ).slider( "value" ),
	      green = $( "#green" ).slider( "value" ),
	      blue = $( "#blue" ).slider( "value" ),
	      hex = hexFromRGB( red, green, blue );
	      g_color="#"+hex;
	    $( "#swatch" ).css( "background-color", "#" + hex );
	  }
	  $(function() {
	    $( "#red, #green, #blue" ).slider({
	      orientation: "horizontal",
	      range: "min",
	      max: 255,
	      value: 127,
	      slide: refreshSwatch,
	      change: refreshSwatch
	    });
	    $( "#red" ).slider( "value", 60 );
	    $( "#green" ).slider( "value", 120 );
	    $( "#blue" ).slider( "value", 220 );
	  });
	  
	  
	  function refreshLineSlider() {
	    var line_sl = $( "#line_sl" ).slider( "value" );
	    
	    var canvas = document.getElementById("board");
			if (canvas.getContext) {
				var context = canvas.getContext("2d");
				context.clearRect(630,230,100,100);
				context.font = "30pt Impact";
				context.fillStyle = "white";
				context.fillText(line_sl, 650, 290);	
			}
		g_detail=line_sl;
		
		var canvas = document.getElementById("line");
			if (canvas.getContext) {
				var context = canvas.getContext("2d");
				context.clearRect(0,0,g_canvas,g_canvas);	
			}
		
		var canvas = document.getElementById("canvas");
			if (canvas.getContext) {
				var context = canvas.getContext("2d");
				context.clearRect(0,0,g_canvas,g_canvas);	
				
				for(var i=0;i<100;i++){
					for(var j=0;j<100;j++){
						var w=g_canvas/g_detail;
							if(g_canvas_values[i][j]){
								context.beginPath();
								context.fillStyle = g_canvas_values[i][j];
								context.fillRect(i*w,j*w,w,w);
								context.stroke();
							}
					}
				}
			}
		line();
		print_icon_iamge();
		
	  }
	  
	  $(function() {
	    $( "#line_sl" ).slider({
	      orientation: "horizontal",
	      range: "min",
	      min: 1,
	      max: 100,
	      value: 30,
	      slide: refreshLineSlider,
	      change: refreshLineSlider
	    });
	    $( "#line_sl" ).slider( "value", 30 );
	  });
}

function checkbox(){
   if($("#switch").prop('checked')) {
     g_paint=true;
   }else {
     g_paint=false;
   }
}
