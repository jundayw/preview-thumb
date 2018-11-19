## 简介

preview-thumb 是一款 jQuery 插件，主要用于在线图片预览。

## 开发理念

简单、快速。

## 开使用方法

加载依赖库
```
<script src="jQuery.js"></script>
<script src="layer.js"></script>
```
加载本插件
```
<script src="jquery.preview.thumb.js"></script>
```
调用
```
<script type="text/javascript">
$(function(){
	$("[rel-action=preview]").each(function(){
		$(this).previewThumb();
	});
});
</script>
```
