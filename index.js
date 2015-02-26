$(function() {
	var data = [{
		'time': 5,
		'text': 'hello world'
	}, {
		'time': 10,
		'text': '你好 世界',
		'color': 'red',
		'fontSize': '22px'
	}, {
		'time': 15,
		'text': '这是一个',
		'color': 'green'
	}, {
		'time': 20,
		'text': 'HTML5弹幕视频播放器',
		'color': 'blue'
	}, {
		'time': 25,
		'text': '样例'
	}]
	$('video').hunter(data);
});