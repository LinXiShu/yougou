/* 
* @Author: Marte
* @Date:   2018-06-11 20:00:21
* @Last Modified by:   Marte
* @Last Modified time: 2018-06-13 18:01:05
*/

jQuery(function($){
    let $header=$('header');
    window.onscroll=function(){
        console.log(6)  
        var scrollTop=window.scrollY;
        if(scrollTop>=20){
            $header.addClass('backG');
        }else{
            $header.className='';
        }
    }
});