var $window=$(window);
	var clientWidth=$(window).width();
	var clientHeight=$(window).height();

	(function(a){
		a.fn.typewriter=function(){
			this.each(function(){
				var d=a(this),c=d.html(),b=0;
				d.html("");
				var e=setInterval(function(){
					var f=c.substr(b,1);
					if(f=="<"){
						b=c.indexOf(">",b)+1
					}
					else{b++}
					d.html(c.substring(0,b)+(b&1?"_":""));
					if(b>=c.length){
						clearInterval(e)
					}
				},75)
			});
			return this
		}
	})(jQuery);

	function timeElapse(c){
		$("#elapseClock").html(a)
	}
	function adjustCodePosition(){
		$("#code").css("margin-top",100)
	}