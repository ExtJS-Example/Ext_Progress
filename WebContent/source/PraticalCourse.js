Ext.onReady(function() {
	Ext.get('btn4').on('click', function() {
		Ext.Msg.progress('进度', '正在处理, 请稍后...', '0%');
		updateProgress(0);
	});
});

var updateProgress = function(progress) {
	if(progress>=1) {
		Ext.Msg.updateProgress(1, '处理完成');
		Ext.defer(function() {
			Ext.Msg.hide();
		}, 200);
		return
	}
	
	Ext.Msg.updateProgress(progress, Math.round(progress*100) + '%');
	Ext.defer(function() {
		updateProgress(progress+0.1);
	}, 500);
};
