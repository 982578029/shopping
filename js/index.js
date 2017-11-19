		// var i=$(".box1 .wsj-inp2").val();
		// var j=$(".box2 .wsj-inp2").val();
		// $(".box1 .wsj-box").on("click",".wsj-inp1",function(){	
		// 	if(i>=1){
		// 		$(this).next().val(--i);
		// 		$(".warp p .sapn33").text(i*60+j*70);
		// 	}
		// })
		// $(".box1 .wsj-box").on("click",".wsj-inp3",function(){
		// 	i=$(".box1 .wsj-inp2").val();
		// 	$(this).prev().val(++i);
		// 	$(".warp p .sapn33").text(i*60+j*70);
		// })

		// $(".box2 .wsj-box").on("click",".wsj-inp1",function(){	
		// 	if(j>=1){
		// 		$(this).next().val(--j);
		// 		$(".warp p .sapn33").text(i*60+j*70);
		// 	}
		// })
		// $(".box2 .wsj-box").on("click",".wsj-inp3",function(){
		// 	j=$(".box2 .wsj-inp2").val();
		// 	$(this).prev().val(++j);
		// 	$(".warp p .sapn33").text($(".box1 .wsj-inp2").val()*60+$(".box2 .wsj-inp2").val()*70);
		// })
		
		// $(".box2 .wsj-box .wsj-inp2").blur(function(){
		// 	$(".warp p .sapn33").text($(".box1 .wsj-inp2").val()*60+$(".box2 .wsj-inp2").val()*70);
		// })
		// $(".box1 .wsj-box .wsj-inp2").blur(function(){
		// 	$(".warp p .sapn33").text($(".box1 .wsj-inp2").val()*60+$(".box2 .wsj-inp2").val()*70);
		// })
		// $(".warp p .sapn33").text(i*60+j*70);

		// function(){
		// 	$()
		// }
		

		function allPrice(){
			var price=0;
			for(var i=0;i<$(".mmk").length;i++){
				price=price+Number($(".mmk").eq(i).find(".wsj-inp2").val())*Number($(".mmk").eq(i).find("b span").text());
			}
			$(".sapn33").text(price);

		}
		allPrice();
		$(".wsj-inp3").each(function(i,ele){
			$(ele).click(function(){
				var num=Number($(ele).prev(".wsj-inp2").val());
				var nuu=num+1;
				$(ele).prev(".wsj-inp2").val(nuu);
				allPrice();
			})
		});
		$(".wsj-inp1").each(function(i,ele){
			$(ele).click(function(){
				var hun=Number($(ele).next(".wsj-inp2").val());
					if(hun>0){
						var cct=hun-1;
						$(ele).next(".wsj-inp2").val(cct);
						allPrice();	
					}
					else{
						$(ele).next(".wsj-inp2").val(0)
						allPrice();
					}
			})	
		})
		

			