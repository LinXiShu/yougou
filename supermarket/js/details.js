require(["config"],function(){
    require(['jquery','common','zoom'],function(){

        let promise=new Promise(function(resolve,rejeact){
            $.ajax({
                url:'http://10.3.135.105:1898/products',
                type:'GET',
                data:{},
                success:function(data){
                    var res=JSON.parse(data);
                        resolve(res);

                }
            })

        }).then(function(res){
             var id = location.search.split('?')[1].split('=')[1];
            
            var num=res.filter(function(item){
                return item.id==id;

            });

            $('#main1').html(num.map(function(item){
                return`
                <div class="tu"><img src="${item.photo}"/></div>
                   
                <p class="name">${item.name}</p>
                <p class="price">
                    <span>￥${item.price}</span>
                    <span class="youhui">可用优惠券</span>
                </p>`
                
            }).join(''))

        })


           
       

    })
})
