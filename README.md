## 简介

preview-thumb 是一款 jQuery 插件，主要用于在线图片预览。

## 演示
[DEMO](https://jundayw.github.io/preview-thumb/preview.html)

## 开发理念

简单、快速。

## 开使用方法

加载依赖库
```html
<script src="jQuery.js"></script>
<script src="layer.js"></script>
```
加载本插件
```html
<script src="jquery.preview.thumb.js"></script>
```
调用
```javascript
<script type="text/javascript">
$(function(){
	$("[rel-action=preview]").each(function(){
		$(this).previewThumb();
	});
});
</script>
```
HTML代码调整
```html
<input type="text" rel-action="preview" name='image' value="https://www.baidu.com/img/bd_logo1.png" />
```
完成
