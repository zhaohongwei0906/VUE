<template>
    <div class="app"> 
        <div class="container-fluid pb-2">
            <div class="contain">
            <div class="p-5 text-left">
                <h4>关于我们</h4>
                <span class="pt-3 pb-3">ABOUT</span>
                <p class="p-1">某某家装有限公司是一家大型现代化装饰企业，历经十余年的发展与资源整合，集团已形成由工装、家装双引擎联合驱动的全产业链发展模式，致力为客户带去超高性价比的一站式装饰体验。</p>
                <p class="p-1">作为一家具有社会责任感和企业荣誉感的装饰企业，成立至今集团坚持以人为本、诚信经营，以引领行业发展为己任，多次实现设计领域的创新与工艺方面的突破。集团拥有工程设计与施工二级资质以及一批身经百战经验丰富的服务团队，并通过信息化移动平台对所有施工工程进行实时、实地的监控管理，全程保障工程质量和进 度，从而实现客户利益最大化。</p>
                <p class="p-1">公司以“成就客户、互利共 赢”为经营理念。并以为客户提供高、精、专的装饰装修服务为宗旨。成立至今已为上万个客户提供专业化解决方案，我们始终坚持精品发展战略，走专业化道路。在商业工装领域提出“营销型装饰设计”先进理念，在家装领域着力推出“体验式”服务，受到业内广泛的好评和赞誉。未来我们将进一步整合资源、提升服务，打造中国最具影响力装饰品牌。</p>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
.container-fluid{
    background: url(../../public/img/80.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
    background-position: 0 0%;
         padding: 0 !important;
}
.contain{
    background: rgba(0,0,0,0.4);z-index: 2;
    padding: 0 !important;margin: 0 !important;
}
.text-left{
    color: #ffffff;
}
span,p{
    font-size: 14px;
}
</style>
