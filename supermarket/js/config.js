//首页
// jQuery(function($){

// });

// (function(){
//  console.log('首页');
//  // randomColor();
// })();


// home依赖的模块（文件）
// * jquery
// * common

/*
    baseUrl（基础路径，基于基础路径的模块不需要后缀名,写后缀基于html文件）
        * 默认html所在的目录
        * data-main：主模块所在的目录（推荐）
        * 配置：执行基础路径

    添加别名

    api：
        * require(dependencies,callback)：引入模块
            * dependencies：依赖的模块（文件），可以是多个
                * 依赖的模块为标准模块，则可以在Callback参数中引用
            * callback：回掉函数，依赖模块加载完成后执行
        * require.config()：配置参数
            * paths
            * shim
        * define()：定义模块
 */

 require.config({
    // baseUrl:

    // 设置别名（虚拟路径）
    paths:{
        'jquery':'../lib/jquery-3.2.1',
        'zoom':'../lib/jquery.gdsZoom/jquery.gdsZoom',
      
    },
    shim:{
        //zoom依赖jquery
        // 'zoom':['jquery']
        'zoom':{
             deps: ["jquery"],//设置依赖
             exports:'jQuery.prototype.gdsZoom'
        }
    }
 })
