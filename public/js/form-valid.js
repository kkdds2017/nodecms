<script src="http://cdn.static.runoob.com/libs/jquery/2.1.1/jquery.min.js"></script>
//$.validator.setDefaults({
//    submitHandler: function() {
//      alert("提交事件!");
//    }
//});
//$(document).ready(function(){
//	$('#username').blur(function(){
//		alert("username");
//	});

	//	表单验证
//    $("#regForm").validate({
//        debug: true, //调试模式取消submit的默认提交功能   
//        //errorClass: "label.error", //默认为错误的样式类为：error   
//        focusInvalid: false, //当为false时，验证无效时，没有焦点响应  
//        onkeyup: false,   
//        submitHandler: function(form){   //表单提交句柄,为一回调函数，带一个参数：form   
//            alert("提交表单");   
//            form.submit();   //提交表单   
//        },
//    	rules:{
//    		username:{
//    			required:true
//    		}
//    	},
//    	messages:{
//    		username:{
//    			required:"注册名字不能为空"
//    		}
//    	}
//    });
//    $("#sub").click(function(){
//    	alert("提交成功！");
//    });
//});
<script type="text/javascript">
$(document).ready(function(){
	$("#username").click(function(){
		alert("OK!");
		});
});

</script>