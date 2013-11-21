function mousePack(){
	mouseMoveInCanvas();
	mouseClickInCanvas();
	mouseUpInCanvas();

	function mouseMoveInCanvas(){
		var canvas = document.getElementById("canvas");
		var line = document.getElementById("line");
		line.onmousemove = function (e){
			var rect = e.target.getBoundingClientRect();
			var w=g_canvas/g_detail;
			var x=Math.floor((e.pageX-rect.left)/w)*w;
			var y=Math.floor((e.pageY-rect.top)/w)*w;
			
			if(0<=x && x<g_canvas && 0<=y && y<g_canvas && g_mouse){
				var context = canvas.getContext("2d");
				
				if(g_paint){
					context.beginPath();
					context.fillStyle = g_color;
					context.fillRect(x,y,w,w);
					context.stroke();
					g_canvas_values[Math.floor((e.pageX-rect.left)/w)][Math.floor((e.pageY-rect.top)/w)]=g_color;
				}else{
					context.clearRect(x,y,w,w);
					g_canvas_values[Math.floor((e.pageX-rect.left)/w)][Math.floor((e.pageY-rect.top)/w)]=null;
				}
				
			}
			print_icon_iamge();
		}
	}
	function mouseClickInCanvas(){
		var canvas = document.getElementById("canvas");
		var line = document.getElementById("line");
		line.onmousedown = function (e){
			g_mouse=true;
			var rect = e.target.getBoundingClientRect();
			var w=g_canvas/g_detail;
			var x=Math.floor((e.pageX-rect.left)/w)*w;
			var y=Math.floor((e.pageY-rect.top)/w)*w;
		
			if(0<=x && x<g_canvas && 0<=y && y<g_canvas){
				var context = canvas.getContext("2d");
				
				if(g_paint){
					context.beginPath();
					context.fillStyle = g_color;
					context.fillRect(x,y,w,w);
					context.stroke();
					g_canvas_values[Math.floor((e.pageX-rect.left)/w)][Math.floor((e.pageY-rect.top)/w)]=g_color;
				}else{
					context.clearRect(x,y,w,w);
					g_canvas_values[Math.floor((e.pageX-rect.left)/w)][Math.floor((e.pageY-rect.top)/w)]=null;
				}
				
			}
			print_icon_iamge();
		}
		
	}
	function mouseUpInCanvas(){
		var line = document.getElementById("line");
		line.onmouseup = function (e){
			g_mouse=false;
		}
	}
	
}
