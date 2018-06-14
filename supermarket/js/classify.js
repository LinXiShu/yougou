require(["config"], function(){
        require(['jquery','common','zoom'],function($,c,z){
            // 这里的代码在所有的模块加载完成后执行
            // 但不保证模块的顺序
            
            // tab标签切换
            $(function(){
                var lis=$('.tab')[0].children; //console.log(lis);
                lis[0].className="tabcss";
                for(let i=0;i<lis.length;i++){
                    
                    lis[i].onclick=function(){
                        var idx;
                        for(let j=0;j<lis.length;j++){
                                    
                                    if(lis[j]===this){
                                        idx=j;
                                    }
                                   
                                   lis[j].className='';
                                  
                        }
                             
                        this.className = 'tabcss';


             
                               
                    }

                }
            });


            //点击分页
            $(function(){

               
                $('#li1').on('click', function(){
                    console.log(666)
                    $('.main_r').html('');
                    $('.main_r').html(`
                        <div class="pic"><img src="https://i1.ygimg.cn/pics/mobile/homepage/2018/06/1527848018672.jpg" /></div>
                    <div class="thesame">
                       <h2>热门品牌</h2>
                       <div>
                           <ul class="clearfix">
                               <li><a href="list.html?classes=1"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210024516.jpg" alt="" />百丽</a></li>
                               <li><a href="list.html?classes=2"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210037675.jpg" alt="" />天意美</a></li>
                               <li><a href="list.html?classes=3"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210051044.jpg" alt="" />他她</a></li>
                               <li><a href="list.html?classes=4"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210065265.jpg" alt="" />拔佳</a></li>
                               <li><a href="list.html?classes=5"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210079180.jpg" alt="" />思加图</a></li>
                               <li><a href="list.html?classes=6"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487211113920.jpg" alt="" />百思图</a></li>
                               <li><a href="list.html?classes=7"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210113052.jpg" alt="" />森达</a></li>
                               <li><a href="list.html?classes=1"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210133902.jpg" alt="" />妙丽</a></li>
                               <li><a href="list.html?"><img src="//i1.ygimg.cn/pics/mobile/homepage/2016/09/1473813826304.jpg" alt="" />全部品牌</a></li>
                           </ul>
                       </div>
                    </div>

                    <div class="thesame">
                       <h2>极简实穿</h2>
                       <div>
                           <ul class="clearfix">
                               <li><a href="list.js"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129073387.pg" alt="" />小白鞋</a></li>
                               <li><a href="list.js"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129082817.jpg" alt="" />乐福鞋</a></li>
                               <li><a href="list.js"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129095507.jpg" alt="" />休闲鞋</a></li>
                               <li><a href="list.js"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129108367.jpg" alt="" />松糕鞋</a></li>
                               <li><a href="list.js"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129118137.jpg" alt="" />内增高</a></li>
                               <li><a href="list.js"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129127736.jpg" alt="" />帆布鞋</a></li>
                               <li><a href="list.js"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129136547.jpg" alt="" />运动风</a></li>
                               <li><a href="list.js"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129146686.jpg" alt="" />布洛克鞋</a></li>
                               <li><a href="list.js"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129157276.jpg" alt="" />豆豆鞋</a></li>
                               <li><a href="list.js"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129166666.jpg" alt="" />婚鞋</a></li>
                           </ul>
                       </div>
                    </div>




                        `)
                });
                
                $('#li2').on('click',function(){
                    console.log(666)
                    $('.main_r')[0].innerHTML="";
                    $('.main_r').html(`
                        <div class="pic"><img src="https://i1.ygimg.cn/pics/mobile/homepage/2018/06/1527847997244.jpg" /></div>
                        <div class="thesame">
                           <h2>热门品牌</h2>
                           <div>
                               <ul class="clearfix">
                                   <li><a href="list.html?classes=2"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210024516.jpg" alt="" />百丽男鞋</a></li>
                                   <li><a href="list.html?classes=2"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487211272216.jpg" alt="" />天意美</a></li>
                                   <li><a href="list.html?classes=2"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/148?classes=27210051044.jpg" alt="" />他她</a></li>
                                   <li><a href="list.html"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210065265.jpg" alt="" />拔佳</a></li>
                                   <li><a href="list.html?classes=2"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487211348065.jpg" alt="" />暇步士</a></li>
                                   <li><a href="list.html?classes=2"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487211373655.jpg" alt="" />爱乐</a></li>
                                   <li><a href="list.html?classes=2"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210113052.jpg" alt="" />森达</a></li>
                                   <li><a href="list.html?classes=2"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487211386044.jpg" alt="" />花花公子</a></li>
                                   <li><a href="list.html?classes=2"><img src="//i1.ygimg.cn/pics/mobile/homepage/2016/09/1473813826304.jpg" alt="" />全部品牌</a></li>
                               </ul>
                           </div>
                        </div>

                        <div class="thesame">
                           <h2>男士单鞋</h2>
                           <div>
                               <ul class="clearfix">
                                   <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129302255.jpg" alt="" />满帮鞋</a></li>
                                   <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129364894.jpg" alt="" />休闲鞋</a></li>
                                   <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129381604.jpg" alt="" />乐福鞋</a></li>
                                   <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129394105.jpg" alt="" />正装鞋</a></li>
                                   <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129394105.jpg" alt="" />商务鞋</a></li>
                                   <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129426434.jpg" alt="" />豆豆鞋</a></li>
                                   <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129416384.jpg" alt="" />牛津鞋</a></li>
                                   <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129451034.jpg" alt="" />运动休闲</a></li>
                                   <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129461775.jpg" alt="" />德比鞋</a></li>
                                   <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129475383.jpg" alt="" />系带鞋</a></li>
                                   <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129487564.jpg" alt="" />工装鞋</a></li>
                               </ul>
                           </div>
                        </div>






                        `)
                });
                    
                $('#li3').on('click',function(){
                   
                    $('.main_r')[0].innerHTML="";
                    $('.main_r').html(`
                        <div class="pic"><img src="https://i1.ygimg.cn/pics/mobile/homepage/2018/06/1527848010832.jpg" /></div>
                        <div class="thesame">
                           <h2>热门品牌</h2>
                           <div>
                               <ul class="clearfix">
                                   <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487211293586.jpg" alt="" />阿迪达斯</a></li>
                                   <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487211431522.jpg" alt="" />耐克</a></li>
                                   <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487211456109.jpg" alt="" />彪马</a></li>
                                   <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487211495524.jpg" alt="" />new balance</a></li>
                                   <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487217358572.jpg" alt="" />三叶草</a></li>
                                   <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487211552014.jpg" alt="" />阿迪NEO</a></li>
                                   <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487211577254.jpg" alt="" />鬼冢虎</a></li>
                                   <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487211604334.jpg" alt="" />匡威</a></li>
                                    <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487211621744.jpg" alt="" />亚瑟士</a></li>
                                    <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487211680264.jpg" alt="" />锐步</a></li>
                                    <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487213989005.jpg" alt="" />万斯</a></li>
                                    <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487211661324.jpg" alt="" />Paul frank</a></li>
                                    <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487211638848.jpg" alt="" />Lacoste</a></li>


                                   <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2016/09/1473813826304.jpg" alt="" />全部品牌</a></li>
                               </ul>
                           </div>
                        </div>

                        <div class="thesame">
                           <h2>运动鞋</h2>
                           <div>
                               <ul class="clearfix">
                                   <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487212094310.jpg" alt="" />跑步鞋</a></li>
                                   <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487212212739.jpg" alt="" />篮球鞋</a></li>
                                   <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487212246369.jpg" alt="" />网球鞋</a></li>
                                   <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487212282769.jpg" alt="" />综训鞋</a></li>
                                   <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487212319788.jpg" alt="" />户外鞋</a></li>
                                   <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487212362618.jpg" alt="" />足球鞋</a></li>
                                   <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487212405798.jpg" alt="" />羽毛球鞋</a></li>
                                   <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487212469838.jpg" alt="" />赛车鞋</a></li>
                                   <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/02/1487212522197.jpg" alt="" />乒乓球鞋</a></li>
                                 
                               </ul>
                           </div>
                        </div>






                        `)
                });
                
                $('#li4').on('click', function(){
                    console.log(666)
                    $('.main_r').html('');
                    $('.main_r').html(`
                        <div class="pic"><img src="https://i1.ygimg.cn/pics/mobile/homepage/2018/06/1527850971728.jpg" /></div>
                    <div class="thesame">
                       <h2>户外服装</h2>
                       <div>
                           <ul class="clearfix">
                               <li><a href="list.html"><img src="https://i1.ygimg.cn/pics/mobile/homepage/2018/06/1528093928284.jpg" alt="" />T恤</a></li>
                               <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/11/1509958047188.jpg" alt="" />休闲裤</a></li>
                               <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/11/1509958004058.jpg" alt="" />软壳衣裤</a></li>
                               <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/11/1509958015398.jpg" alt="" />抓绒衣裤</a></li>
                               <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/11/1509957991906.jpg" alt="" />冲锋衣裤</a></li>
                              
                           </ul>
                       </div>
                    </div>

                    <div class="thesame">
                       <h2>户外鞋靴</h2>
                       <div>
                           <ul class="clearfix">
                               <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/11/1509957664095.jpg" alt="" />徒步鞋</a></li>
                               <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/11/1509957680591.jpg" alt="" />越野鞋</a></li>
                               <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/11/1509957806471.jpg" alt="" />休闲鞋</a></li>
                               <li><a href="list.html"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2017/11/1509957834366.jpg" alt="" />工装靴</a></li>
                              
                           </ul>
                       </div>
                    </div>




                        `)
                });
                
                $('#li5').on('click', function(){
                    console.log(666)
                    $('.main_r').html('');
                    $('.main_r').html(`
                        <div class="pic"><img src="https://i1.ygimg.cn/pics/mobile/homepage/2018/06/1527835789607.jpg" /></div>
                    <div class="thesame">
                       <h2>热门品牌</h2>
                       <div>
                           <ul class="clearfix">
                               <li><a href="list.html"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210024516.jpg" alt="" />百丽</a></li>
                               <li><a href="list.html"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210037675.jpg" alt="" />天意美</a></li>
                               <li><a href="list.html"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210051044.jpg" alt="" />他她</a></li>
                               <li><a href="list.html"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210065265.jpg" alt="" />拔佳</a></li>
                               <li><a href="list.html"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210079180.jpg" alt="" />思加图</a></li>
                               <li><a href="list.html"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487211113920.jpg" alt="" />百思图</a></li>
                               <li><a href="list.html"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210113052.jpg" alt="" />森达</a></li>
                               <li><a href="list.html"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210133902.jpg" alt="" />妙丽</a></li>
                               <li><a href="list.html"><img src="//i1.ygimg.cn/pics/mobile/homepage/2016/09/1473813826304.jpg" alt="" />全部品牌</a></li>
                           </ul>
                       </div>
                    </div>

                    <div class="thesame">
                       <h2>极简实穿</h2>
                       <div>
                           <ul class="clearfix">
                               <li><a href="list.html"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129073387.jpg" alt="" />小白鞋</a></li>
                               <li><a href="list.html"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129082817.jpg" alt="" />乐福鞋</a></li>
                               <li><a href="list.html"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129095507.jpg" alt="" />休闲鞋</a></li>
                               <li><a href="list.html"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129108367.jpg" alt="" />松糕鞋</a></li>
                               <li><a href="list.html"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129118137.jpg" alt="" />内增高</a></li>
                               <li><a href="list.html"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129127736.jpg" alt="" />帆布鞋</a></li>
                               <li><a href="list.html"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129136547.jpg" alt="" />运动风</a></li>
                               <li><a href="list.html"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129146686.jpg" alt="" />布洛克鞋</a></li>
                               <li><a href="list.html"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129157276.jpg" alt="" />豆豆鞋</a></li>
                               <li><a href="list.html"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129166666.jpg" alt="" />婚鞋</a></li>
                           </ul>
                       </div>
                    </div>




                        `)
                });
                
                $('#li6').on('click', function(){
                    console.log(666)
                    $('.main_r').html('');
                    $('.main_r').html(`
                        <div class="pic"><img src="https://i1.ygimg.cn/pics/mobile/homepage/2018/06/1527848018672.jpg" /></div>
                    <div class="thesame">
                       <h2>热门品牌</h2>
                       <div>
                           <ul class="clearfix">
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210024516.jpg" alt="" />百丽</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210037675.jpg" alt="" />天意美</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210051044.jpg" alt="" />他她</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210065265.jpg" alt="" />拔佳</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210079180.jpg" alt="" />思加图</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487211113920.jpg" alt="" />百思图</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210113052.jpg" alt="" />森达</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210133902.jpg" alt="" />妙丽</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2016/09/1473813826304.jpg" alt="" />全部品牌</a></li>
                           </ul>
                       </div>
                    </div>

                    <div class="thesame">
                       <h2>极简实穿</h2>
                       <div>
                           <ul class="clearfix">
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129073387.jpg" alt="" />小白鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129082817.jpg" alt="" />乐福鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129095507.jpg" alt="" />休闲鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129108367.jpg" alt="" />松糕鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129118137.jpg" alt="" />内增高</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129127736.jpg" alt="" />帆布鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129136547.jpg" alt="" />运动风</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129146686.jpg" alt="" />布洛克鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129157276.jpg" alt="" />豆豆鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129166666.jpg" alt="" />婚鞋</a></li>
                           </ul>
                       </div>
                    </div>




                        `)
                });
                
                $('#li7').on('click', function(){
                    console.log(666)
                    $('.main_r').html('');
                    $('.main_r').html(`
                        <div class="pic"><img src="http://i1.ygimg.cn/pics/mobile/homepage/2016/10/1476249988728.jpg" /></div>
                    <div class="thesame">
                       <h2>热门品牌</h2>
                       <div>
                           <ul class="clearfix">
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210024516.jpg" alt="" />百丽</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210037675.jpg" alt="" />天意美</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210051044.jpg" alt="" />他她</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210065265.jpg" alt="" />拔佳</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210079180.jpg" alt="" />思加图</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487211113920.jpg" alt="" />百思图</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210113052.jpg" alt="" />森达</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210133902.jpg" alt="" />妙丽</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2016/09/1473813826304.jpg" alt="" />全部品牌</a></li>
                           </ul>
                       </div>
                    </div>

                    <div class="thesame">
                       <h2>极简实穿</h2>
                       <div>
                           <ul class="clearfix">
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129073387.jpg" alt="" />小白鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129082817.jpg" alt="" />乐福鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129095507.jpg" alt="" />休闲鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129108367.jpg" alt="" />松糕鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129118137.jpg" alt="" />内增高</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129127736.jpg" alt="" />帆布鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129136547.jpg" alt="" />运动风</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129146686.jpg" alt="" />布洛克鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129157276.jpg" alt="" />豆豆鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129166666.jpg" alt="" />婚鞋</a></li>
                           </ul>
                       </div>
                    </div>




                        `)
                });
                
                $('#li8').on('click', function(){
                    console.log(666)
                    $('.main_r').html('');
                    $('.main_r').html(`
                        <div class="pic"><img src="https://i1.ygimg.cn/pics/mobile/homepage/2018/06/1527848018672.jpg" /></div>
                    <div class="thesame">
                       <h2>热门品牌</h2>
                       <div>
                           <ul class="clearfix">
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210024516.jpg" alt="" />百丽</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210037675.jpg" alt="" />天意美</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210051044.jpg" alt="" />他她</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210065265.jpg" alt="" />拔佳</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210079180.jpg" alt="" />思加图</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487211113920.jpg" alt="" />百思图</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210113052.jpg" alt="" />森达</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210133902.jpg" alt="" />妙丽</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2016/09/1473813826304.jpg" alt="" />全部品牌</a></li>
                           </ul>
                       </div>
                    </div>

                    <div class="thesame">
                       <h2>极简实穿</h2>
                       <div>
                           <ul class="clearfix">
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129073387.jpg" alt="" />小白鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129082817.jpg" alt="" />乐福鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129095507.jpg" alt="" />休闲鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129108367.jpg" alt="" />松糕鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129118137.jpg" alt="" />内增高</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129127736.jpg" alt="" />帆布鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129136547.jpg" alt="" />运动风</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129146686.jpg" alt="" />布洛克鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129157276.jpg" alt="" />豆豆鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129166666.jpg" alt="" />婚鞋</a></li>
                           </ul>
                       </div>
                    </div>




                        `)
                });

                $('#li9').on('click', function(){
                    console.log(666)
                    $('.main_r').html('');
                    $('.main_r').html(`
                        <div class="pic"><img src="https://i1.ygimg.cn/pics/mobile/homepage/2018/06/1527848018672.jpg" /></div>
                    <div class="thesame">
                       <h2>热门品牌</h2>
                       <div>
                           <ul class="clearfix">
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210024516.jpg" alt="" />百丽</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210037675.jpg" alt="" />天意美</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210051044.jpg" alt="" />他她</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210065265.jpg" alt="" />拔佳</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210079180.jpg" alt="" />思加图</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487211113920.jpg" alt="" />百思图</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210113052.jpg" alt="" />森达</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210133902.jpg" alt="" />妙丽</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2016/09/1473813826304.jpg" alt="" />全部品牌</a></li>
                           </ul>
                       </div>
                    </div>

                    <div class="thesame">
                       <h2>极简实穿</h2>
                       <div>
                           <ul class="clearfix">
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129073387.jpg" alt="" />小白鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129082817.jpg" alt="" />乐福鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129095507.jpg" alt="" />休闲鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129108367.jpg" alt="" />松糕鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129118137.jpg" alt="" />内增高</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129127736.jpg" alt="" />帆布鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129136547.jpg" alt="" />运动风</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129146686.jpg" alt="" />布洛克鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129157276.jpg" alt="" />豆豆鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129166666.jpg" alt="" />婚鞋</a></li>
                           </ul>
                       </div>
                    </div>




                        `)
                });

                $('#li10').on('click', function(){
                    console.log(666)
                    $('.main_r').html('');
                    $('.main_r').html(`
                        <div class="pic"><img src="https://i1.ygimg.cn/pics/mobile/homepage/2018/06/1527848018672.jpg" /></div>
                    <div class="thesame">
                       <h2>热门品牌</h2>
                       <div>
                           <ul class="clearfix">
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210024516.jpg" alt="" />百丽</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210037675.jpg" alt="" />天意美</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210051044.jpg" alt="" />他她</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210065265.jpg" alt="" />拔佳</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210079180.jpg" alt="" />思加图</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487211113920.jpg" alt="" />百思图</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210113052.jpg" alt="" />森达</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210133902.jpg" alt="" />妙丽</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2016/09/1473813826304.jpg" alt="" />全部品牌</a></li>
                           </ul>
                       </div>
                    </div>

                    <div class="thesame">
                       <h2>极简实穿</h2>
                       <div>
                           <ul class="clearfix">
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129073387.jpg" alt="" />小白鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129082817.jpg" alt="" />乐福鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129095507.jpg" alt="" />休闲鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129108367.jpg" alt="" />松糕鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129118137.jpg" alt="" />内增高</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129127736.jpg" alt="" />帆布鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129136547.jpg" alt="" />运动风</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129146686.jpg" alt="" />布洛克鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129157276.jpg" alt="" />豆豆鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129166666.jpg" alt="" />婚鞋</a></li>
                           </ul>
                       </div>
                    </div>




                        `)
                });

                $('#li11').on('click', function(){
                    console.log(666)
                    $('.main_r').html('');
                    $('.main_r').html(`
                        <div class="pic"><img src="https://i1.ygimg.cn/pics/mobile/homepage/2018/06/1527848018672.jpg" /></div>
                    <div class="thesame">
                       <h2>热门品牌</h2>
                       <div>
                           <ul class="clearfix">
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210024516.jpg" alt="" />百丽</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210037675.jpg" alt="" />天意美</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210051044.jpg" alt="" />他她</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210065265.jpg" alt="" />拔佳</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210079180.jpg" alt="" />思加图</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487211113920.jpg" alt="" />百思图</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210113052.jpg" alt="" />森达</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210133902.jpg" alt="" />妙丽</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2016/09/1473813826304.jpg" alt="" />全部品牌</a></li>
                           </ul>
                       </div>
                    </div>

                    <div class="thesame">
                       <h2>极简实穿</h2>
                       <div>
                           <ul class="clearfix">
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129073387.jpg" alt="" />小白鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129082817.jpg" alt="" />乐福鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129095507.jpg" alt="" />休闲鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129108367.jpg" alt="" />松糕鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129118137.jpg" alt="" />内增高</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129127736.jpg" alt="" />帆布鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129136547.jpg" alt="" />运动风</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129146686.jpg" alt="" />布洛克鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129157276.jpg" alt="" />豆豆鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129166666.jpg" alt="" />婚鞋</a></li>
                           </ul>
                       </div>
                    </div>




                        `)
                });
                
                $('#li12').on('click', function(){
                    console.log(666)
                    $('.main_r').html('');
                    $('.main_r').html(`
                        <div class="pic"><img src="https://i1.ygimg.cn/pics/mobile/homepage/2018/06/1527848018672.jpg" /></div>
                    <div class="thesame">
                       <h2>热门品牌</h2>
                       <div>
                           <ul class="clearfix">
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210024516.jpg" alt="" />百丽</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210037675.jpg" alt="" />天意美</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210051044.jpg" alt="" />他她</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210065265.jpg" alt="" />拔佳</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210079180.jpg" alt="" />思加图</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487211113920.jpg" alt="" />百思图</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210113052.jpg" alt="" />森达</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210133902.jpg" alt="" />妙丽</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2016/09/1473813826304.jpg" alt="" />全部品牌</a></li>
                           </ul>
                       </div>
                    </div>

                    <div class="thesame">
                       <h2>极简实穿</h2>
                       <div>
                           <ul class="clearfix">
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129073387.jpg" alt="" />小白鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129082817.jpg" alt="" />乐福鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129095507.jpg" alt="" />休闲鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129108367.jpg" alt="" />松糕鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129118137.jpg" alt="" />内增高</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129127736.jpg" alt="" />帆布鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129136547.jpg" alt="" />运动风</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129146686.jpg" alt="" />布洛克鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129157276.jpg" alt="" />豆豆鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129166666.jpg" alt="" />婚鞋</a></li>
                           </ul>
                       </div>
                    </div>




                        `)
                });
                
                $('#li13').on('click', function(){
                    console.log(666)
                    $('.main_r').html('');
                    $('.main_r').html(`
                        <div class="pic"><img src="https://i1.ygimg.cn/pics/mobile/homepage/2018/06/1527848018672.jpg" /></div>
                    <div class="thesame">
                       <h2>热门品牌</h2>
                       <div>
                           <ul class="clearfix">
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210024516.jpg" alt="" />百丽</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210037675.jpg" alt="" />天意美</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210051044.jpg" alt="" />他她</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210065265.jpg" alt="" />拔佳</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210079180.jpg" alt="" />思加图</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487211113920.jpg" alt="" />百思图</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210113052.jpg" alt="" />森达</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487210133902.jpg" alt="" />妙丽</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2016/09/1473813826304.jpg" alt="" />全部品牌</a></li>
                           </ul>
                       </div>
                    </div>

                    <div class="thesame">
                       <h2>极简实穿</h2>
                       <div>
                           <ul class="clearfix">
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129073387.jpg" alt="" />小白鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129082817.jpg" alt="" />乐福鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129095507.jpg" alt="" />休闲鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129108367.jpg" alt="" />松糕鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129118137.jpg" alt="" />内增高</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129127736.jpg" alt="" />帆布鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129136547.jpg" alt="" />运动风</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129146686.jpg" alt="" />布洛克鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129157276.jpg" alt="" />豆豆鞋</a></li>
                               <li><a href="#"><img src="//i1.ygimg.cn/pics/mobile/homepage/2017/02/1487129166666.jpg" alt="" />婚鞋</a></li>
                           </ul>
                       </div>
                    </div>




                        `)
                });
            });

           
         
           
            
        })  
})


