Ext.onReady(function() {
//	Ext.Msg.show({
//		title: '请等待',
//		msg: '数据加载中, 请稍后...',
//		width: 300,
//		wait: true,
//		waitConfig: {
//			interval: 200
//		}
//	});
	
	// 这句代码好屌的样子
	Ext.Msg.wait('请等待', '数据加载中...');
});

