<template>
    <Carousel v-model="value2">
        <CarouselItem >
            <div class="t-carousel-item">
                <h1 class="t-topic">Topic：从Vue<span class="t-title-keyword">窥</span>前端</h1>
                <div class="t-teacher"><img src="../images/liuding.jpg">柳丁</div>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="t-carousel-item">
                <h1 class="t-page-title">过去</h1>
                <div class="t-page-content">
                    <p>1、表单验证 </p>
                    <p>2、服务端工程师的页面模版 builder</p>
                    <p>3、粗制 的页面</p>
                    <p>4、简单乏味的 交互 </p>
                    <p>5、深度 基于DOM操作的编程模式</p>
                </div>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="t-carousel-item">
                <p class="t-content-info">H5 + CSS3</p>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="t-carousel-item">
                <p class="t-content-info">硬件设备的配置升高了</p>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="t-carousel-item">
                <h1 class="t-page-title">现在</h1>
                <div class="t-page-content">
                    <p>1、前端框架和库空前繁荣 jquery、bootstrap、angular、react、vue等等</p>
                    <p>2、前端工程化构建 fis3 、grunt、glup、webpack工具</p>
                    <p>3、基于Node的服务端实现方案，以及express、Koa框架</p>
                    <p>4、hybrid应用，以及ionic、cordova框架</p>
                    <p>5、跨三端实现方案 react-native、veex</p>
                    <p>6、基于微信的小程序 和 阿里钉钉小程序 等等小程序</p>
                    <p>7、基于<a target="blank" href="https://electron.atom.io/">Electron</a>的桌面端实现方案</p>
                </div>
            </div>
        </CarouselItem >
        <CarouselItem>
            <div class="t-carousel-item">
                <p class="t-content-info">Google制定了新一代web应用标准 PWA</p>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="t-carousel-item">
                <p class="t-content-info">Google浏览器开放图像、语音识别 等API</p>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="t-carousel-item">
                <h1 class="t-page-title">将来</h1>
                <div class="t-page-content">
                    <p>1、大前端</p>
                    <p>2、全栈工程师</p>
                    <p>3、基于webGL规范的3D展现，数据可视化引擎工程师</p>
                </div>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="t-carousel-item">
                <p class="t-content-info">Thanks</p>
            </div>
        </CarouselItem>
    </Carousel>
</template>
<script>
    export default {
        data () {
            return {
                value2: 0
            }
        }
    }
</script>
<style scoped>
.t-carousel-item{
    height: 500px ;
}
.t-topic{
    font-size: 35px ;
    margin: 50px ;
}

.t-teacher{
    text-align: right ;
    font-size: 20px ;
    position: relative;
    top: 250px;
    right: 100px;
}

.t-teacher img{
    width: 50px ;
    vertical-align: middle;
    margin-right: 15px ;
    border-radius: 10px ;
    border: 1px solid #b1d2cc ;
}

.t-page-title {
    border-bottom: 2px solid #333 ;
    letter-spacing: 3px ;
    padding-left: 15px ;
    color: #333 ;
}

.t-title-keyword{
    color: #ee0000 ;
    margin: 0 5px ;
}

.t-page-content {
    margin: 30px ;
    line-height: 2.5 ;
}

.t-page-content p {
    font-size: 20px ;
    font-weight: 700 ;
    color: #535353 ;
}

.t-content-info {
    height: 500px ;
    line-height: 500px ;
    font-weight: 700 ;
    text-align: center ;
    animation: mymove 2s linear 2s infinite alternate;
    -webkit-animation: mymove 2s linear 2s infinite alternate;
}
@keyframes mymove {
    from {font-size: 20px ;}
    to {font-size: 40px ;}
}
@-webkit-keyframes mymove {
    from {font-size: 20px ;}
    to {font-size: 40px ;}
}
</style>
<!--  
<style scoped lang="less">


</style>
-->