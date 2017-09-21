var meta=meta || {};
meta.common=(()=>{
	var init=ctx=>{
		onCreate();
		meta.session.init(ctx);
		meta.index.init();
	};
	var onCreate=()=>{
		setContentView();
	};
	var setContentView=()=>{};
	return { init:init };
})();
meta.index=(()=>{
	var $wrapper,$navbar,$container,ctx,img,js,css,
		temp,algo;
	var init=()=>{
			js=$$('j');
			temp=js+'/template.js';
			algo=js+'/algo.js';
			$navbar=$('#navbar');
			$container=$('#container');
			$table=$('#table');
			$div=$('#div');
			$h1=$('#h1');
			ctx=$$('x');
			img=$$('i');
			onCreate();
		};
	var onCreate=()=>{
		$.getScript(temp,()=>{
			$container.append(compUI.div('content')).css({'width':'100%','text-align': 'center'});
			$('#content').css({'width':'50%','margin': '0 auto'}).append(compUI.image('loading',img+'/loading.gif'));
			$('#loading').after(compUI.h1('h-btn'));
			
			$('#h-btn').append(compUI.span('btn')).attr('display','inline');
			$('#btn').html('알고리즘').addClass('label label-default');
			
			$('#h-btn').append(compUI.span('btn2')).attr('display','inline');
			$('#btn2').html('LOGIN').addClass('label label-primary').css({'margin-left':'10px'});
				
			$('#btn').click(()=>{
				$container.empty();
				//meta.auth.init();	
				meta.navbar.init();
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('#resultBtn').click(()=>{
					$.getScript(algo,(x,y)=>{
						$('#result').text('결과 : '
								+series.arithmetic(
										$('#start').val(),
										$('#end').val()
						));
					});
				});
			});
			$('#btn2').click(()=>{
				alert('login 가기');
				});
			
			compUI.span('bbsBtn')
			.html('게시판 관리')
			.addClass('label label-danger')
			.css({'margin-left':'10px'})
			.appendTo('#h-btn')
			.click(()=>{
				alert('게시판 가기');
				var url = ctx+'/get/board/list';
				$.getJSON(url,x=>{alert('x msg is'+x.msg);
			      $container.empty();
	               $navbar.append(introUI.navbar());
	               compUI.div('content').appendTo($container);
	               $content = $('#content');
	               compUI.table('board-tab').appendTo($content);
	               compUI.thead('board-thead').appendTo($('#board-tab'));
	               compUI.tr('board-th-tr').appendTo($('#board-thead')).css({'background-color':'yellow'});
	               compUI.tbody('board-tbody').appendTo($('#board-tab'));
	               compUI.tr('board-tb-tr').appendTo($('#board-thead'));
	               compUI.idTag('th').text('No').appendTo($('#board-th-tr'));
	               compUI.idTag('th').text('제목').appendTo($('#board-th-tr'));
	               compUI.idTag('th').text('내용').appendTo($('#board-th-tr'));
	               compUI.idTag('th').text('글쓴이').appendTo($('#board-th-tr'));
	               compUI.idTag('th').text('등록일').appendTo($('#board-th-tr'));
	               compUI.idTag('th').text('조회수').appendTo($('#board-th-tr'));
	            
	               compUI.idTag('td').text('1').appendTo($('#board-tb-tr')).css({'text-align':'left'});
	               compUI.idTag('td').text('2').appendTo($('#board-tb-tr')).css({'text-align':'left'});
	               compUI.idTag('td').text('3').appendTo($('#board-tb-tr')).css({'text-align':'left'});
	               compUI.idTag('td').text('4').appendTo($('#board-tb-tr')).css({'text-align':'left'});
	               compUI.idTag('td').text('5').appendTo($('#board-tb-tr')).css({'text-align':'left'});
	               compUI.idTag('td').text('6').appendTo($('#board-tb-tr')).css({'text-align':'left'});
	             
	               $content.append(pageUI.paging());

				
				});
			});
		});
		};
	return {init:init};
})();

meta.auth=(()=>{
	var $wrapper,ctx,img,js,css,temp;
	var init=()=>{
		$wrapper=$('#wrapper');
		img=$$('i');
		js=$$('j');
		temp=js+'/template.js';
		onCreate();
	};
	var onCreate=()=>{setContentView();};
	var setContentView=()=>{
		$.getScript(temp,(i)=>{
			$wrapper.append(introUI.login(img));
			$('#login_input').after(meta.comp.input(
					{
						type : 'button',
						id : 'login_btn',
						value : '로그인'
					}
				));
				$('#login_box').append(meta.comp.input(
					{
						type : 'button',
						id : 'cancel_btn',
						value : '취소'
					}
				));
		});
		
	};
	var joinView=()=>{};
	return {
		init : init
	};
})();
meta.navbar=(()=>{
	var algo,js,temp,$container;
	var init=()=>{
		js=$$('j');
		$container=$('#container');
		algo=js+'/algo.js';
		temp=js+'/template.js';
		onCreate();
		
		/*algo=js+'/algo.js';*/
		
	};
	var onCreate=()=>{
		$.getScript(temp,()=>{
			$('#navbar').html(introUI.navbar());
			$('#container').html(algoUI.series());
			$('#start_txt').after(compUI.input('start','text'));
			$('#start').attr('placeholder','시작값');
			$('#end_txt').after(compUI.input('end','text'));
			$('#end').attr('placeholder','끝값');
			$('#result').before(compUI.input('resultBtn','button'));
			$('#resultBtn').val('결과보기');
			$('#resultBtn').click(()=>{
				$.getScript(algo,(x1,x2)=>{
					$('#result').text('결과 : '+
							series.arithmetic(
									$('#start').val(),
									$('#end').val()
							));
				});
			});
			$('.dropdown-menu a').eq(0).on('click',()=>{
				//app.controller.moveTo('member','member_add');
			});
			$('.dropdown-menu a').eq(1).on('click',()=>{
				//app.member.list(1);
			});
			$('.dropdown-menu a').eq(2).on('click',()=>{
				//app.controller.moveTo('member','member_detail');
			});
			$('.dropdown-menu a').eq(3).on('click',()=>{
				//app.controller.deleteTarget('hong','member','member_delete');
			});
			$('.dropdown-menu a').eq(4).on('click',()=>{
				//app.controller.moveTo('grade','grade_add');
			});
			$('.dropdown-menu a').eq(5).on('click',()=>{
				//app.controller.moveTo('hong','grade','grade_list');
			});
			$('.dropdown-menu a').eq(6).on('click',()=>{
				//app.controller.moveTo('grade','grade_detail');
			});
			$('.dropdown-menu a').eq(7).on('click',()=>{
				//app.controller.deleteTarget('hong','grade','grade_delete');
			});
			$('.dropdown-menu a').eq(8).on('click',()=>{
				//app.controller.moveTo('board','board_write');
			});
			$('.dropdown-menu a').eq(9).on('click',()=>{
				//app.controller.moveTo('board','board_list');
			});
			$('.dropdown-menu a').eq(10).on('click',()=>{
				//app.controller.moveTo('board','board_detail');
			});
			$('.dropdown-menu a').eq(11).on('click',()=>{
				//app.controller.moveTo('board','board_delete');
			});
			$('#arithBtn').click(()=>{
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('h1').html('등차수열의 합');
				$('#resultBtn').click(()=>{
					$.getScript(algo,(x1,x2)=>{
						$('#result').text('결과 : '+
								series.arithmetic(
										$('#start').val(),
										$('#end').val()
								));
					});
				});
			});
			$('#differBtn').click(()=>{
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('h1').html('계차수열의 합');
				$('#start').val('1').attr('readonly','true');
					$('#resultBtn').click(()=>{
					$.getScript(algo,(x)=>{
						$('#result').text('결과값'+series.differSeries(
								$('#end').val()));
					});
				})
			});
			$('#switchBtn').click(()=>{
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('h1').html('스위치수열의 합');
				$('#start').val('1').attr('readonly','true');
				$('#end').val('100').attr('readonly','true');
				$('#resultBtn').click(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과값'+series.switchSeries());
					});
				})
			});
			$('#facBtn').click(()=>{
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('h1').html('팩토리얼의 합');
				$('#start').val('1').attr('readonly','true');
				$('#resultBtn').click(()=>{
					$.getScript(algo,(x)=>{
						$('#result').text('결과값'+series.factorial(
								$('#end').val()
						));
					});
				})
			});
			$('#fiboBtn').click(()=>{
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('h1').html('피보나치의 합');
				$('#start').val('1').attr('readonly','true');
				$('#end').val('100').attr('readonly','true');
				$('#resultBtn').click(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과값'+series.fibonacci());
					});
				})
			});
			$('#selBtn').click(()=>{
				alert('select 버튼');
				$container.html(algoUI.sort());
				var sortList =new Array(5);
				$('#add').before(compUI.input('addBtn','button'));
				$('#addBtn').val('입력버튼');
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','값');
				$('h1').html('selection 배열');
				var i=0;
				
				$('#addBtn').click((x)=>{
					sortList[i]=$('#start').val();
					$('#start').val('');
					i++;
					if(i==5){
						alert(sortList);
						$('#start_txt').remove();
						$('#start').remove();
						$('#addBtn').val('결과보기');
						$('#addBtn').click((x)=>{
							console.log('선택정렬');
						$('#addBtn').remove();
						$.getScript(algo,(x)=>{					
							$('#result').html('<h3>결과값 '+sort.selection(sortList)+'</h3>');});
						i=0;						
					});	}			
					
				});
			
			});
			$('#bubbleBtn').click(()=>{
				alert('bubble 버튼');
				$container.html(algoUI.sort());
				var sortList =new Array(5);
				$('#add').before(compUI.input('addBtn','button'));
				$('#addBtn').val('입력버튼');
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','값');
				$('h1').html('bubble 배열');
				var i=0;
			$('#addBtn').click((x)=>{
				sortList[i]=$('#start').val();
				$('#start').val('');
				i++;
				if(i==5){
					alert(sortList);
					$('#start_txt').remove();
					$('#start').remove();
					$('#addBtn').val('결과보기');
					$('#addBtn').click((x)=>{
						console.log('버블정렬');
					$('#addBtn').remove();
						$.getScript(algo,(x)=>{					
						$('#result').html('<h3>결과값 '+sort.bubble(sortList)+'</h3>');});
						i=0;						
					});	}			
					
				});
			
			});
			$('#insertBtn').click(()=>{
				alert('insert 버튼');
				$container.html(algoUI.sort());
				var sortList =new Array(5);
				$('#add').before(compUI.input('addBtn','button'));
				$('#addBtn').val('입력버튼');
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','값');
				$('h1').html('insert 배열');
				var i=0;
			$('#addBtn').click((x)=>{
				sortList[i]=$('#start').val();
				$('#start').val('');
				i++;
				if(i==5){
					alert(sortList);
					$('#start_txt').remove();
					$('#start').remove();
					$('#addBtn').val('결과보기');
					$('#addBtn').click((x)=>{
						console.log('insert 정렬');
					$('#addBtn').remove();
						$.getScript(algo,(x)=>{					
						$('#result').html('<h3>결과값 '+sort.insertion(sortList)+'</h3>');});
						i=0;						
					});	}			
					
				});
			
			});
			$('#rankBtn').click(()=>{
				alert('rank 버튼');
				$container.html(algoUI.sort());
				var sortList =new Array(5);
				$('#add').before(compUI.input('addBtn','button'));
				$('#addBtn').val('입력버튼');
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','값');
				$('h1').html('rank 배열');
				var i=0;
			$('#addBtn').click((x)=>{
				sortList[i]=$('#start').val();
				$('#start').val('');
				i++;
				if(i==5){
					alert(sortList);
					$('#start_txt').remove();
					$('#start').remove();
					$('#addBtn').val('결과보기');
					$('#addBtn').click((x)=>{
						console.log('rank 정렬');
					$('#addBtn').remove();
						$.getScript(algo,(x)=>{					
						$('#result').html('<h3>결과값 '+sort.ranking(sortList)+'</h3>');});
						i=0;						
					});	}			
					
				});
			
			});
		});			
	};
	return {init:init};
})();

meta.session=
	{
	   init : (x)=>{
				sessionStorage.setItem('x',x);
				sessionStorage.setItem('j',x+'/resources/js');
				sessionStorage.setItem('c',x+'/resources/css');
				sessionStorage.setItem('i',x+'/resources/img');
	   		  },
	   getPath : (x)=>{
				return sessionStorage.getItem(x);
	   		  }
	};
var $$= function(x){return meta.session.getPath(x);};