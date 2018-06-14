require(["config"], function(){
        require(['jquery','common','zoom'],function($,c,z){
        
        $(function(){
            let promise = new Promise(function(resolve,rejeact){
                $.ajax({
                    url:'http://10.3.135.105:1898/products',
                    type:'GET',
                    data:{},
                    success:function(data){
                        var res=JSON.parse(data);
                        resolve(res);
                        //console.log(res);
                      
                    },
                    fail:function(){
                        reject('请求失败')
                    }
                });
            
            });


            promise.then(function(res){


              var classes = location.search.split('?')[1].split('=')[1];
              //console.log(classes);

              console.log(res);
              var shuju=res.filter(function(item){
                return item.classes==classes;

              });
              //console.log(shuju);
              $('.mainlist').html(shuju.map(function(n){

                    return `
                    <li>
                        <section>

                            <a href="details.html?id=${n.id}"><img src="${n.photo}" alt="" /></a>
                            <p class="name">${n.name}</p>
                            <p class="price">￥${n.price}</p>
                            <p class="xianshi">限时</p>


                        </section>
                        
                    </li> `
    

              }).join(''))


               
            },function(err){
               
            });
        })

            
        



        })  

})
