<template>
    <div class="app">
    <div class="container-fluid pb-5">
        <!-- 轮播 -->
       <div id="demo" class="carousel slide" data-ride="carousel" data-interval="2500">
                <!-- 指示符 -->
                <ul class="carousel-indicators">
                  <li data-target="#demo" data-slide-to="0" class="active"></li>
                  <li data-target="#demo" data-slide-to="1"></li>
                  <li data-target="#demo" data-slide-to="2"></li>
                  <li data-target="#demo" data-slide-to="3"></li>
                </ul>
               
                <!-- 轮播图片 -->
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="../../public/img/slide1.jpg">
                  </div>
                  <div class="carousel-item">
                    <img src="../../public/img/slide2.jpg">
                  </div>
                  <div class="carousel-item">
                    <img src="../../public/img/slide3.jpg">
                  </div>
                  <div class="carousel-item">
                    <img src="../../public/img/slide4.jpg">
                 </div>
                </div>
               
                <!-- 左右切换按钮 -->
                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                  <!-- <span class="carousel-control-prev-icon"></span> -->
                  <img src="../../public/img/jt.png" alt="">
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                  <!-- <span class="carousel-control-next-icon"></span> -->
                  <img src="../../public/img/jt1.png" alt="">                  
                </a>
               
         </div>

    </div>
        <!-- 装修流程 -->
        <div class="container">
            <div class="row ">
                <div class="col-12">
                    <h3>装修流程</h3>
                    <p>业主权益第一，我们始终保障着业主装修每一步</p> 
                </div>
                <!-- 1 -->
                <div class="col-lg-2 col-md-4 " id="lcnav">
                    <div class="lc-nav">
                        <img src="../../public/img/fk.png" alt="">
                        <div>
                            <span>收房量房</span>
                        </div>
                    </div>
                </div>
                <!-- 2 -->
                 <div class="col-lg-2 col-md-4">
                    <div class="lc-nav">
                        <img src="../../public/img/fk.png" alt="">
                        <div>
                            <span>设计阶段</span>
                        </div>
                    </div>
                </div>
                <!-- 3 -->
                 <div class="col-lg-2 col-md-4">
                    <div class="lc-nav">
                        <img src="../../public/img/fk.png" alt="">
                        <div>
                            <span>材料选购</span>
                        </div>
                    </div>
                </div>
                <!-- 4 -->
                 <div class="col-lg-2 col-md-4">
                    <div class="lc-nav">
                        <img src="../../public/img/fk.png" alt="">
                        <div>
                            <span>施工阶段</span>
                        </div>
                    </div>
                </div>
                <!-- 5 -->
                 <div class="col-lg-2 col-md-4">
                    <div class="lc-nav">
                        <img src="../../public/img/fk.png" alt="">
                        <div>
                            <span>竣工收验</span>
                        </div>
                    </div>
                </div>
                <!-- 6 -->
                 <div class="col-lg-2 col-md-4">
                    <div class="lc-nav">
                        <img src="../../public/img/fk.png" alt="">
                        <div>
                            <span>软装配饰</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <!-- 装修案例 -->
        <div class="container pt-5">
            <div class="row ">
                 <div class="col-12 pb-3">
                    <h3>装修案例</h3>
                    <p>我们累计共为10000位业主提供一站式的装修服务</p> 
                </div>
                <!-- 1 -->                             
                <div class="jumbotron col-lg-5 col-md-5">
                    <div class="col-12 p-0">
                        <img src="../../public/img/34.jpg" alt="">
                    </div>
                    <div class="pt-2">
                       <router-link class="nav-link" to="/case8">案例展示#8</router-link>           
                        <div class="pt-2">
                            <p>【北欧家装】180㎡北欧家装｜某某小区</p>
                            <p>项目地址： 	江苏苏州</p>
                            <p>项目面积： 	1...</p>
                        </div>
                    </div>
                </div>
                <div class="col-2"></div>
                <!-- 2 -->
                <div class="jumbotron col-lg-5 col-md-5">
                    <div class="col-12 p-0">
                        <img src="../../public/img/37.jpg" alt="">
                    </div>
                    <div class="pt-2">
                        <router-link class="nav-link" to="/case7">案例展示#7</router-link>           
                        <div class="pt-2">
                            <p>【北欧家装】180㎡北欧家装｜某某小区</p>
                            <p>项目地址： 	江苏苏州</p>
                            <p>项目面积： 	1...</p>
                        </div>
                    </div>
                </div>
                <!-- 3 -->
                 <div class="jumbotron col-lg-5 col-md-5">
                    <div class="col-12 p-0">
                        <img src="../../public/img/29.jpg" alt="">
                    </div>
                    <div class="pt-2">
                        <router-link class="nav-link" to="/case6">案例展示#6</router-link>           
                        <div class="pt-2">
                            <p>【北欧家装】180㎡北欧家装｜某某小区</p>
                            <p>项目地址： 	江苏苏州</p>
                            <p>项目面积： 	1...</p>
                        </div>
                    </div>
                </div>
                <div class="col-2"></div>
                <!-- 4 -->
                 <div class="jumbotron col-lg-5 col-md-5">
                    <div class="col-12 p-0">
                        <img src="../../public/img/24.jpg" alt="">
                    </div>
                    <div class="pt-2">
                       <router-link class="nav-link" to="/case5">案例展示#5</router-link>                                   
                         <div class="pt-2">
                            <p>【北欧家装】180㎡北欧家装｜某某小区</p>
                            <p>项目地址： 	江苏苏州</p>
                            <p>项目面积： 	1...</p>
                        </div>
                    </div>
                </div>
                <!-- 5 -->
                <div class="col-2"></div>
                <div class="jumbotron col-lg-8 ">
                    <div class="col-12 p-0">
                        <img src="../../public/img/39.jpg" alt="">
                    </div>
                    <div class="pt-2">
                       <router-link class="nav-link" to="/case4">案例展示#4</router-link>                                   
                         <div class="pt-2">
                            <p>【北欧家装】180㎡北欧家装｜某某小区</p>
                            <p>项目地址： 	江苏苏州</p>
                            <p>项目面积： 	1...</p>
                        </div>
                    </div>
                </div>
            </div>
                <div class="col-12 pb-3">
                 <router-link class="nav-link" to="/products"> 了解更多装修案例 <img src="../../public/img/yjt.png" alt=""></router-link>  
                </div>
        </div>
        <!-- 装修资讯 -->
        <div class="container pt-5">
            <div class="row">
                <div class="col-12 pb-3">
                    <h3>装修效果图</h3>
                    <p>海量效果图为业主提供更多灵感</p> 
                </div>
            </div>
            <!-- 1 -->
                <div class="row ">
                    <div class="col-lg-3 col-md-6 col-sm-12 nav-row p-1 "><img src="../../public/img/37.jpg" alt=""></div>
                    <div class="col-lg-3 col-md-6 col-sm-12 nav-row p-1 "><img src="../../public/img/76.jpg" alt=""></div>
                    <div class="col-lg-3 col-md-6 col-sm-12 nav-row p-1 "><img src="../../public/img/22.jpg" alt=""></div>
                    <div class="col-lg-3 col-md-6 col-sm-12 nav-row p-1 "><img src="../../public/img/34.jpg" alt=""></div>
                </div>
            <!-- 2 -->
                <div class="row ">
                    <div class="col-lg-3 col-md-6 col-sm-12 nav-row p-1 "><img src="../../public/img/37.jpg" alt=""></div>
                    <div class="col-lg-3 col-md-6 col-sm-12 nav-row p-1 "><img src="../../public/img/76.jpg" alt=""></div>
                    <div class="col-lg-3 col-md-6 col-sm-12 nav-row p-1 "><img src="../../public/img/22.jpg" alt=""></div>
                    <div class="col-lg-3 col-md-6 col-sm-12 nav-row p-1 "><img src="../../public/img/34.jpg" alt=""></div>
                </div>
                 <div class="col-12 pb-3 pt-5">
                   <router-link class="nav-link" to="/details"> 浏览更多效果图 <img src="../../public/img/yjt.png" alt=""></router-link> 
                </div>
        </div>
        <!-- 设计师 -->
        <div class="container-fluid nav-con">
        <div class="container pt-5  pb-5">
              <div class="row">
                <div class="col-12 pb-3">
                    <h3>设计师团队</h3>
                    <p>我们累计共为10000位业主提供一站式的装修服务</p> 
                </div>
            </div>
            <div class="row ">
                <!-- 1 -->
                <div class="col-lg-2 col-md-6 col-sm-12 nav-img p-1">
                    <img src="../../public/img/14.jpg" alt="">
                    <!-- 文字 -->
                <div>
                    <span class="span1 pr-1">张媛</span>
                    <span class="span2 pl-1">首席设计师</span>
                </div>
                <div class="nav-span pt-1">
                    <span>经验：</span>
                    <span style="color:#3EC9AD;">8年</span>
                    <span class="pl-2 pr-2">/</span>
                    <span>代表作:3件</span>
                </div>
                <div>
                    <span class="span-link"> <router-link  to="/case8">查看TA的案例</router-link></span>                            
                </div>
                </div>
                <!-- 2 -->
                <div class="col-lg-2 col-md-6 col-sm-12 nav-img p-1">
                    <img src="../../public/img/5.jpg" alt="">
                    <!-- 文字 -->
                <div>
                    <span class="span1 pr-1">张媛</span>
                    <span class="span2 pl-1">首席设计师</span>
                </div>
                <div class="nav-span pt-1">
                    <span>经验：</span>
                    <span style="color:#3EC9AD;">8年</span>
                    <span class="pl-2 pr-2">/</span>
                    <span>代表作:3件</span>
                </div>
                <div>
                    <span class="span-link"> <router-link  to="/case7">查看TA的案例</router-link></span>                            
                </div>
                </div>
                <!-- 3 -->
                <div class="col-lg-2 col-md-6 col-sm-12 nav-img p-1">
                    <img src="../../public/img/18.jpg" alt="">
                                  <!-- 文字 -->
                <div>
                    <span class="span1 pr-1">张媛</span>
                    <span class="span2 pl-1">首席设计师</span>
                </div>
                <div class="nav-span pt-1">
                    <span>经验：</span>
                    <span style="color:#3EC9AD;">8年</span>
                    <span class="pl-2 pr-2">/</span>
                    <span>代表作:3件</span>
                </div>
                <div>
                    <span class="span-link"> <router-link  to="/case6">查看TA的案例</router-link></span>                            
                </div>
                </div> 
                <!-- 4 -->
                <div class="col-lg-2 col-md-6 col-sm-12 nav-img p-1">
                    <img src="../../public/img/15.jpg" alt="">
                                  <!-- 文字 -->
                <div>
                    <span class="span1 pr-1">张媛</span>
                    <span class="span2 pl-1">首席设计师</span>
                </div>
                <div class="nav-span pt-1">
                    <span>经验：</span>
                    <span style="color:#3EC9AD;">8年</span>
                    <span class="pl-2 pr-2">/</span>
                    <span>代表作:3件</span>
                </div>
                <div>
                    <span class="span-link"> <router-link  to="/case5">查看TA的案例</router-link></span>                            
                </div>
                </div>
                <!-- 5 -->
                <div class="col-lg-2 col-md-6 col-sm-12 nav-img p-1">
                    <img src="../../public/img/19.jpg" alt="">
                                  <!-- 文字 -->
                <div>
                    <span class="span1 pr-1">张媛</span>
                    <span class="span2 pl-1">首席设计师</span>
                </div>
                <div class="nav-span pt-1">
                    <span>经验：</span>
                    <span style="color:#3EC9AD;">8年</span>
                    <span class="pl-2 pr-2">/</span>
                    <span>代表作:3件</span>
                </div>
                <div>
                    <span class="span-link"> <router-link  to="/case4">查看TA的案例</router-link></span>                            
                </div>
                </div>
                <!-- 6 -->
                <div class="col-lg-2 col-md-6 col-sm-12 nav-img p-1">
                    <img src="../../public/img/21.jpg" alt="">
                                  <!-- 文字 -->
                <div>
                    <span class="span1 pr-1">张媛</span>
                    <span class="span2 pl-1">首席设计师</span>
                </div>
                <div class="nav-span pt-1">
                    <span>经验：</span>
                    <span style="color:#3EC9AD;">8年</span>
                    <span class="pl-2 pr-2">/</span>
                    <span>代表作:3件</span>
                </div>
                <div>
                    <span class="span-link"> <router-link  to="/case8">查看TA的案例</router-link></span>                            
                </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 合作品牌 -->
     <div class="container-fluid nav-con pt-5">
    <div class="container">
        <div class="row">
                <div class="col-12 pb-3">
                    <h3>合作品牌</h3>
                    <p>众多优质品牌为业主提供高品质建材支持</p> 
                </div>
        </div>
        <div class="row ">
            <div class="col-lg-2 col-md-2 col-sm-6 nav-hz"><img src="../../public/img/3.jpg" alt=""></div>
            <div class="col-lg-2 col-md-2 col-sm-6 nav-hz"><img src="../../public/img/4.jpg" alt=""></div>
            <div class="col-lg-2 col-md-2 col-sm-6 nav-hz"><img src="../../public/img/6.jpg" alt=""></div>
            <div class="col-lg-2 col-md-2 col-sm-6 nav-hz"><img src="../../public/img/7.jpg" alt=""></div>
            <div class="col-lg-2 col-md-2 col-sm-6 nav-hz"><img src="../../public/img/8.jpg" alt=""></div>
            <div class="col-lg-2 col-md-2 col-sm-6 nav-hz"><img src="../../public/img/9.jpg" alt=""></div>
            <div class="col-lg-2 col-md-2 col-sm-6 nav-hz"><img src="../../public/img/10.jpg" alt=""></div>
            <div class="col-lg-2 col-md-2 col-sm-6 nav-hz"><img src="../../public/img/11.jpg" alt=""></div>
            <div class="col-lg-2 col-md-2 col-sm-6 nav-hz"><img src="../../public/img/20.jpg" alt=""></div>
            <div class="col-lg-2 col-md-2 col-sm-6 nav-hz"><img src="../../public/img/13.jpg" alt=""></div>
            <div class="col-lg-2 col-md-2 col-sm-6 nav-hz"><img src="../../public/img/16.jpg" alt=""></div>
            <div class="col-lg-2 col-md-2 col-sm-6 nav-hz"><img src="../../public/img/17.jpg" alt=""></div>
        </div>
    </div>
</div>
</div>
</template>
<script>
// var lcnav=document.querySelector("#lcnav");
// lcnav.onmouseenter=function(){
//     lcnav.style.backgroundColor="blue";
// }

</script>
<script>
export default {
    name:'MainPage',
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
@import '../../public/css/swiper.min.css';
a {
    color: #9ba89b7c;
    font-size: 15px;
    font-family: 微软雅黑;
    line-height: 21px;
    text-decoration: none;
}
p{
    font-size: 13px;
    color: #c1c1c1;
    /* margin: 0; */
}
/*装修流程*/

.col-12>p{
    font-family: 微软雅黑;
    font-size: 13px;
    color: #bababa;
    padding: 2px;
}
.lc-nav{
    border: 1px solid #c1c1c1;
    padding: 10px;
    font-size: 14px;
        color: #808080;
}
/*装修案例*/
.zxal{
        border-bottom: 1px solid transparent;
}
 .a-nav{
    display: block;
    padding-top: 15px;
    padding-bottom: 15px;
    line-height: 15px;
    width: 100%;
 }
 .jumbotron{
     /* margin: 0; */
     padding: 0;
     background: #6a6a6b;
 }
 .col-12>img{
     width: 100%;
 }
 .col-12>a{
     display: block;
     padding: 10px;
     border: 1px solid rgb(209, 209, 209);
     
 }
.nav-row>img{
    width: 275px;
    height: 210px;
}

.nav-con{
    background-color: #f7f7f7;
}
.nav-img>img{
    width: 180px;
    height: 260px;
}

.span1{
        font-size: 18px;
}
.span2{
    font-size: 12px;
}
.nav-span{
    font-size: 12px;    
}
.nav-hz>img{
    width: 114px;
    height: 56px;
}
.span-link{
    display: block;
    padding: 10px !important;margin-top: 5px !important;
    width: 100%;
    height: 100%;
    font-size: 15px;
    color: #ffffff48 ;
    background: #423939;
    border-radius: 2px;
    border-color: rgb(62, 201, 173);
}

@media screen and (max-width: 992px){
    #demo{
        display: none;
    }
}
@media screen and (max-width: 1200px){
    .nav-row>img{
        padding: 20px;
    }
    .nav-img>img{
        padding: 20px;
    }
}
</style>
