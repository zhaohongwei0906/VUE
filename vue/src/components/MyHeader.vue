<template>
    <header>
    <div class="container">
        <div class="row">
        <div class="navbar navbar-expand-md bg-light navbar-light">
        <!-- 1.最前面不隐藏的菜单项-->
        <div class="col-2">
        <a href="#" class="navbar-brand pr-5">
            <img src="../../public/img/27.png" width="126px;" height="57px" alt="">
        </a>
        </div>
        <!-- 2.在小屏幕下出现的按钮，按钮上有三条线，折叠的激发按钮-->
        <button data-toggle="collapse" data-target="#content" class="navbar-toggler">
            <span class="navbar-toggler-icon"></span>
        </button>
        <!-- 3.导航栏里的菜单项，小屏幕以上横向，小屏幕以下纵向显示-->
        <div class="collapse navbar-collapse col-10" id="content" >
            <ul class="list-unstyled navbar-nav">
                <li class="nav-item">
                    <!-- <a class="nav-link" href="#">首页推荐</a> -->
                    <router-link class="nav-link" to="/">首页推荐</router-link>
                </li>
                <li class="nav-item">
                    <!-- <a class="nav-link" href="#">效果视图</a> -->
                    <router-link class="nav-link" to="/details">效果视图</router-link>                    
                </li>
                <li class="nav-item">
                    <!-- <a class="nav-link" href="#">模板案例</a> -->
                    <router-link class="nav-link" to="/products">模板案例</router-link>                                        
                </li>
                <li class="nav-item">
                    <!-- <a class="nav-link" href="#">装修知识</a> -->
                    <router-link class="nav-link" to="/cart">装修知识</router-link>                                                     
                </li>
                <li class="nav-item">
                    <!-- <a class="nav-link" href="#">关于我们</a> -->
                    <router-link class="nav-link" to="/team">设计团队</router-link>                                                      
                </li>
                <li class="nav-item">
                    <!-- <a class="nav-link" href="#">联系我们</a> -->
                    <router-link class="nav-link" to="/contact">关于我们</router-link>                                                       
                </li>
            </ul>
            </div>
        </div>
    </div>
</div>
</header>
</template>
<script>
export default {
    data(){
        return {}
    }
}
</script>

<style scoped>
.bg-light{
    background: #ffffff !important;
    width: 100% !important;
}
ul>li{
    padding-left: 36px;
    padding-top: 20px;
}
a{
    font-size: 14px;
    color: #bcbcbc;
}

@media (max-width: 992px) {
   .span-nav{
       display: none !important;
       margin: 0 !important;
       padding: 0  !important;
   }
   ul>li{
       margin-left: -18px;
   }
}
@media screen and  (max-width:767px){
    ul>li{
        text-align: left;
    }	
    .bg-light,header{
        background: #c9c9c9 !important;
        width: 100% !important;
    }
    	
}
</style>
