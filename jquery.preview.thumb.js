/* jquery.previewThumb.js
 * ========
 * 图片预览
 * @Author:Mr.Alex
 * @Email:<mail@wangqiqiang.com>
 * @version:2.0.0
 * @date:2017-08-12 18:30:00
 */
(function($){

	$.fn.extend({
		// start
		previewThumb:function(option){
			var config = {
				ext:['jpg','jpeg','gif','png']
			};
			var option = $.extend(config,option);
			$(this).each(function(){
				var ext = function(self){
					var suffix = option.ext;
					var url = $(self).val();
					var ext = url.split('.');
						ext = ext[ext.length-1];
					return $.inArray(ext.toLowerCase(),suffix) === -1 ? false : true;
				};
				
				$(this).mouseover(function(){
					if( ext(this) ){
						var wrap = "<div id='previewThumb' style='position:absolute;z-index:9999;background:#fff;'>";
							wrap += "<img src='" + $(this).val() + "' style='max-height:350px;min-height:100px;border:1px #ccc solid;'>";
							wrap += "</div>";
						$("body").append(wrap);
					}
				});
				
				$(this).mousemove(function(e){
					if( ext(this) ){
						$("#previewThumb").css({
							"top": (e.pageY + 5) + "px",
							"left": (e.pageX + 5) + "px"
						});
					}
				});
				
				$(this).mouseout(function(){
					$("#previewThumb").remove();
				});
				
				$(this).dblclick(function(){
					if( ext(this) ){
						var img = $(this).val();
						var image = "<a title='点击图片查看原图' href='" + img + "' target='_blank'>";
							image += "<img alt='点击图片查看大图' style='max-width:800px;min-width:100px;max-height:800px;min-height:100px;' src='" + img + "' />";
							image += "</a>";
						layer.open({
							type: 1,
							title: '图片预览',
							shade: 0.8,
							shadeClose: true,
							area:['auto','auto'],
							content: image,
						});
					}
				});
				
			});
		}
		// end
	});
	
})(jQuery);