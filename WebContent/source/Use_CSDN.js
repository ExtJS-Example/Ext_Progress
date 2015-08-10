Ext.onReady(function() {
//	Ext.Msg.show({
//		title: '请等待',
//		msg: '数据读取中...',
//		width: 240,
//		progress: true,
//		closeable: false
//	});
	
	// 可以显示静态的进度条
//	Ext.Msg.progress('请等待', '数据读取中...');
//	for(var i=1; i<12; i++) {
//		setTimeout(f(i), i*200);
//	}

	// 自动控制变化的进度条提示框
	Ext.Msg.wait('请等待', '数据读取中....');
	
});

// 使进图条动起来的函数
var f = function(v) {
	return function() {
		if(v==11) {
			Ext.Msg.hide();
		} else {
			Ext.Msg.updateProgress(v/10, '正在读取第'+v+'个, 一共10个');
		}
	};
};