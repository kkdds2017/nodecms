<script type="text/javascript">
$(function(){
	//表单验证开始；
	$('#regForm').validate({
		debug:true,//开启调试模式
		rules:{
			name:{
				required:true,
				rangelength:[6,12]
			}
	        password:{
	        	required:true,
				rangelength:[6,12]
	        }
	        password2:{
	        	required:true,
				equalTo:'#password2'
	        }
		}
	});
});

</script>