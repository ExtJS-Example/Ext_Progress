Ext.onReady(function() {
	Ext.Msg.progress('请等待', '数据处理进度...');
	
	for(var i=0; i<=20; i++) {
		setTimeout(fun(i), i*100);
	}
});

fun = function(p) {
	return function() {
		if(p==20) {
			Ext.Msg.hide();
		} else {
			Ext.Msg.updateProgress(p/20, '正在处理第'+p+'个, 一共20个');
		}
	};
};
