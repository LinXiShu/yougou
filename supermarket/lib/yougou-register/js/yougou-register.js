require.config({
	// baseUrl:'lib',

	// 配置别名（虚拟路径）
	paths:{
		// 格式：别名:真实路径（基于baseUrl）
		jquery:'../../jquery-3.3.1',
	},

	// 配置依赖
	// shim:{
	// 	xzoom:['jquery']
	// }
})

require(['jquery'],function($){
	let $meta = $('<meta />').attr({
		'name':"viewport",
		'content':"width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1.0, minimum-scale=1",
		'id':"vp"});

	$('head').append($meta);
	
	// 把尺寸放大N倍（N是window.devicePixelRatio）
    var wd = document.documentElement.clientWidth*window.devicePixelRatio/10;
    //物理像素*设备像素比=真实像素
    document.getElementsByTagName("html")[0].style.fontSize = wd + "px";

	let scale = 1/window.devicePixelRatio;


	$('#vp').attr({
		'name':"viewport",
		'content':`width=device-width, user-scalable=no, initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}`});

	let $css = $('<link />').attr({'rel':"stylesheet",'href':'../css/yougou-register.css'});
	$('head').append($css);

	// 点击手机登录，标签高亮，显示注册填写信息
	$('.registerType').click(function(){
		$('.registerType').addClass('active');
		$('.loginType').removeClass('active');

		$('.registerType_content').css({display:'block'});
		$('.loginType_content').css({display:'none'});
	});

	// 点击账号登录，标签高亮，显示登录填写信息
	$('.loginType').click(function(){
		$('.loginType').addClass('active');
		$('.registerType').removeClass('active');


		$('.loginType_content').css({display:'block'});
		$('.registerType_content').css({display:'none'});
	});

	// 注册
	$('.btn_register').click(function(){
		$.ajax({
			type: "post",
			url: "http://10.3.135.105:1898/signin",
			data: {
				phone: $('.reg_usernamePhone').val(),
				password: $('.reg_password').val()
			},
			success:function(data){
				// console.log(data)
				if(data === 'yesSignin'){
					console.log(666)
					// $('.btn_register').location.href = "zzh.html";
					// (function(){
					// 	location.href = "zzh.html"
					// })()
				}
			}
		})
	});
	// 登录
	$('.btn_login').click(function(){
		$.ajax({
			type: "post",
			url: "http://10.3.135.105:1898/login",
			data: {
				phone: $('.login_usernamePhone').val(),
				password: $('.login_password').val()
			},
			success:function(data){
				console.log(data)
				// if(data === 'yesSignin'){
				// 	// console.log(666)
				// 	// $('.btn_register').location.href = "zzh.html";
				// 	(function(){
				// 		location.href = "zzh.html"
				// 	})()
				// }
			}
		})
	});
})