

<div id="q1">

<h3><strong>{{nosupport}}</strong></h3>

</div>

### 这个浏览器不受支持<br>Your browser is not supported

由于功能受限，我已经阻止你使用这个浏览器访问！<br>
Due to limited functionality, I have blocked your access with this browser!

* Please Use:  Google Chrome, Microsoft Edge, Apple Safari, Firefox.




<script>

  new Vue({
    el: '#q1',
    // Options...
    data () {
      return {
        nosupport: "",
      }
    },
    created(){

      var useragent = navigator.userAgent;

      if (useragent.match(/MicroMessenger/i) == 'MicroMessenger') {
        this.nosupport = "我猜你是直接从微信点开的？ 哈哈被我抓到了吧！";
      }
      else if (useragent.indexOf("Chrome") > -1)
        {if (useragent.split('Chrome/')[1].split('.')[0] > 84) window.location.href = "/#/homework/DPST1014/work/mapleTest/2023YEARTYPE3/vip";}
      else if (useragent.indexOf("QQ") == -1 && useragent.indexOf("2345") == -1 && useragent.indexOf("uc") == -1 && useragent.indexOf("se") == -1)
       window.location.href = "/#/homework/DPST1014/work/mapleTest/2023YEARTYPE3/vip";


    },
  });

</script>

