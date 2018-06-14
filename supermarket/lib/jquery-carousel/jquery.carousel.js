;(function($){
    $.fn.carousel=function(options){
        //console.log(this) this指向div.box
        let defaults={
            width:800,
            height:320,
            index:0,
            duration:3000,
            autoPlay:true,//是否自动
            type:'vertical',//垂直
            seamless:false,//是否无缝
            page:true,
        }
    return this.each(function(){
        //console.log(this) 指向DOM节点=> <div class="box"></div>
        let $self=$(this)
        let opt=$.extend(true,{},defaults,options);//深复制
        //console.log(opt) //opt是一个对象
        opt.len=opt.imgs.length;
        let $ul;
        let lastIndex=opt.index;//上一张图处索引值

        let init=()=>{
            $self.addClass('carousel');
            $self.width(opt.width);
            $self.height(opt.height);

            $ul=$('<ul/>');
            let $res=$.map(opt.imgs,function(url){
                let $li=$('<li/>');
                let $img=$('<img/>');console.log($img)
                $img.attr('src',url).appendTo($li);
                return $li;

            });
            $ul.append($res);
            $ul.appendTo($self);

            if(opt.type==='horizontal'){
                $ul.width(opt.width*opt.len);
                $ul.addClass('horizontal');
            }

            else if(opt.type==='fade'){
                $ul.addClass('fade');
                $ul.css({
                    width:opt.width,
                    height:opt.height
                });
                $ul.children('li').eq(opt.index).siblings('li').css('opacity',0);
            }

            //移入移出
            $self.on('mouseenter',()=>{clearInterval($self.timer);}).on('mouseleave',()=>{
                move();
            })
            .on('click','.page span',function(){

            });
            move();
        }
        //运动
        let move=()=>{
            $self.timer=setInterval(()=>{
                opt.index++;
                show();
            },opt.duration);

        };
        let show =function(){
            if(opt.index>=opt.len){
                opt.index=0;
            }else if(opt.index<0){
                opt.index=opt.len-1
            }

            let obj={};
            if(opt.type==='vertical'){
                obj.top=-opt.height*opt.index;
                $ul.animate(obj)
            }else if(opt.type==='horizontal'){
                obj.left=-opt.width*opt.index;
                 $ul.animate(obj)
            }else if(opt.type==='fade'){
                $ul.children('li').eq(opt.index).animate({opacity:1},function(){
                        lastIndex = opt.index;
                    });
                $ul.children('li').eq(lastIndex).animate({opacity:0},function(){
                        lastIndex = opt.index;
                    });

                }
            }
            init();
        
        });

    }
   
})(jQuery)
