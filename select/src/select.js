/**
 * [initSelect description]            模拟select-option下拉选项
 * @param  {[type : object]}    true   dom      [下拉框选项最外层的dom容器对象]
 * @param  {[type : object]}    false  object   [下拉选项的配置参数，以键值对的方式]
 * @return {[type：undefined]}         null  [该函数没有返回值]
 */
function initSelect(dom,object){
	var $showSelected = dom.find('div').eq(0).addClass('selected-option');
	var $optionList = $showSelected.next();

	if(object === undefined){

	}else {
		configSelect(object,$showSelected);	
	}

	$(document).on('click',$showSelected,function(e){
		showOptionList(e,$optionList);
	})

	var $optionItem = $optionList.children('li').addClass('option-item');
	$(document).on('click',$optionItem,function(e){
		if(!$(e.target).hasClass('option-item')) return;
		$showSelected.html($(e.target).html());
	})
}

/**
 * [showOptionList description]
 * @param  {[type]} list [description]
 * @return {[type]}      [description]
 */
function showOptionList(e,list){
	if(!$(e.target).hasClass('selected-option')){
		list.removeClass('option-wrapper');
		return;
	};
	list.toggleClass('option-wrapper');
}


function configSelect(obj,$showSelected){
	if(obj.width){
		$showSelected.parent().css('width',obj.width);
	}
}

/*initSelect($('#select-wrapper'),{'width':'100px'});*/