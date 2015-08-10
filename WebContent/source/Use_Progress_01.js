Ext.onReady(function() {
	var msgBox = Ext.Msg.show({
		title: '提示',
		msg: '动态更新的进度条和信息文字',
		modal: true,
		width: 300,
		progress: true
	});	
	
	var count = 0;	// 滚动条被刷新的次数
	var percentage = 0;	// 进度条百分比
	var progressText = '';	// 进度条信息
	
	var task = {
		run: function() {
			count++;
			// 计算进度
			percentage = count/10;
			// 生成进度条文字
			progressText = '当前完成度:' + percentage*100 + '%';
			// 更新信息提示对话框
			msgBox.updateProgress(percentage, progressText, '当前时间:' + Ext.util.Format.date(new Date(), 'Y-m-d g:i:s A'));
			
			// 刷新10次后关闭信息提示框
			if(count>10) {
			
				Ext.TaskMgr.stop(task);
				msgBox.hide();
			}
		},
		interval: 1000
	};
	
	Ext.TaskMgr.start(task);
});
