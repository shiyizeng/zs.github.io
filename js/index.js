  //banner图二级菜单  
     $('.category-info').on('mouseover', function () {
        $.ajax({
            url: './js/banner.json',
            method: 'get',
            dataType: 'json',
            success: function (data) {

                data.forEach(function (item) {

                    $(`<li class="subcate-item">
                       <a href="" class="nb">
                        <img src="${item.img}"
                            alt="">
                        <p>
                            <span>${item.series}</span>
                        </p>
                    </a>
                  </li>`).appendTo($('.subcate-list'))
                })
                $('.category-info').on('mouseover', $('.category-panels'), function () {
                    $(this).children()[2].style.display = "block";
                })
                $('.category-info').on('mouseout', $('.category-panels'), function () {
                    $(this).children()[2].style.display = "none";
                })

            }

        })
    })
    //mask
    $.ajax({
        url: './js/mask.json',
        method: 'get',
        dataType: 'json',
        success: function (data) {
            data.forEach(function (item) {
                $(`<li>
                    <a href="">
                        <div class="p-img"><img src="${item.img}" class="${item.class}"></div>
                        <div class="p-dec">${item.text}</div>
                    </a>
                </li>`).appendTo($('.ear'))
            })
        }
    })
    /*  main-sku */
    $.ajax({
        url: './js/main-sku.json',
        method: 'get',
        dataType: 'json',
        success: function (data) {

            data.forEach(function (item) {
                $(` <li class="grid-items pord">
                    <a href="#">
                        <p class="grid-img"><img src="${item.img}" alt=""></p>
                        <div class="grid-title">${item.model}</div>
                        <p class="grid-desc">${item.discounts} </p>
                        <p class="grid-price">${item.price}</p>
                    </a>
                </li>`).appendTo($('.grid-right'))
            })
        }
    })
    /*     recommend精品推荐 */
    $.ajax({
        url: './js/main-recommend.json',
        method: 'get',
        dataType: 'json',
        success: function (data) {
            data.forEach(function (item) {
                $(`
                <li>
                    <a href="">
                        <div class="recommend-info">
                            <p class="grid-img">
                                <img src="${item.img}" alt="">
                            </p>
                            <p class="recommend-desc">${item.discounts}</p>
                        </div>
                        <div class="grid-title">${item.model}</div>
                        <p class="grid-price">${item.price}</p>
                    </a>
                </li>
                `).appendTo($('.recommend-list'))
            })
        }
    })

    //footer服务
    $.ajax({
        url:'./js/footer-service.json',
        method:'get',
        dataType:'json',
        success:function(data){
            data.forEach(function(item){
                $(`
                <dl class="service-m">
                    <dt>
                        <p>${item.title}</p>
                    </dt>
                    <dd>
                        <ol>
                            <li><a href="#">${item.text1}</a></li>
                            <li><a href="#">${item.text2}</a></li>
                            <li><a href="#">${item.text3}</a></li>
                            <li><a href="#">${item.text4}</a></li>
                            <li><a href="#">${item.text5}</a></li>
                        </ol>
                    </dd>
                </dl>
                `).appendTo($('.service-l'))
            })
        }
    })
   //phone
   $.ajax({
        url:'./js/phone.json',
        method:'get',
        dataType:'json',
        success:function(data){
            data.forEach(function(item){
                $(`
                <li class="mou-gen">
                     <a href="#" class="af">
                         <p class="grid-img">
                         <img src="${item.img}" alt="">
                        </p>
                        <div class="grid-title">${item.title}</div>
                        <p class="grid-desc">${item.desc} </p>
                        <p class="grid-price">${item.price}</p>
                     </a>
                 </li>
                `).appendTo($('.mou-phone'))
            })
        }
    })
    //笔记本
    $.ajax({
        url:'./js/notebook.json',
        method:'get',
        dataType:'json',
        success:function(data){
            data.forEach(function(item){
                $(`
                <li class="mou-gen">
                     <a href="#" class="af">
                         <p class="grid-img">
                         <img src="${item.img}" alt="">
                        </p>
                        <div class="grid-title">${item.title}</div>
                        <p class="grid-desc">${item.desc} </p>
                        <p class="grid-price">${item.price}</p>
                     </a>
                 </li>
                `).appendTo($('.mou-notebook'))
            })
        }
    })
    //mian-smart智能穿搭
    $.ajax({
        url:'./js/smart.json',
        method:'get',
        dataType:'json',
        success:function(data){
            data.forEach(function(item){
                $(`
                <li class="mou-gen">
                     <a href="#" class="af">
                         <p class="grid-img">
                         <img src="${item.img}" alt="">
                        </p>
                        <div class="grid-title">${item.title}</div>
                        <p class="grid-desc">${item.desc} </p>
                        <p class="grid-price">${item.price}</p>
                     </a>
                 </li>
                `).appendTo($('.mou-smart'))
            })
        }
    })
      //智慧屏wisdom 
      $.ajax({
        url:'./js/main-wisdom.json',
        method:'get',
        dataType:'json',
        success:function(data){
            data.forEach(function(item){
                $(`
                <li class="mou-gen">
                     <a href="#" class="af">
                         <p class="grid-img">
                         <img src="${item.img}" alt="">
                        </p>
                        <div class="grid-title">${item.title}</div>
                        <p class="grid-desc">${item.desc} </p>
                        <p class="grid-price">${item.price}</p>
                     </a>
                 </li>
                `).appendTo($('.mou-wisdom'))
            })
        }
    })
    /* 智能家居house */
    $.ajax({
        url:'./js/main-house.json',
        method:'get',
        dataType:'json',
        success:function(data){
            data.forEach(function(item){
                $(`
                <li class="mou-gen">
                     <a href="#" class="af">
                         <p class="grid-img">
                         <img src="${item.img}" alt="">
                        </p>
                        <div class="grid-title">${item.title}</div>
                        <p class="grid-desc">${item.desc} </p>
                        <p class="grid-price">${item.price}</p>
                     </a>
                 </li>
                `).appendTo($('.mou-house'))
            })
        }
    })
    /* 热销配件accessories */
    $.ajax({
        url:'./js/main-accessories.json',
        method:'get',
        dataType:'json',
        success:function(data){
            data.forEach(function(item){
                $(`
                <li class="mou-gen">
                     <a href="#" class="af">
                         <p class="grid-img">
                         <img src="${item.img}" alt="">
                        </p>
                        <div class="grid-title">${item.model}</div>
                        <p class="grid-desc">${item.discounts} </p>
                        <p class="grid-price">${item.price}</p>
                     </a>
                 </li>
                `).appendTo($('.mou-accessories'))
            })
        }
    })