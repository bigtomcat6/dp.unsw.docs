
!>请以unsw学校官网为准，这里只提供参考！ 

>如信息有问题，请立即[与我联系](/help/?id=关于我)！

# Laboratory skills


>需要在Week3实验室课前完成`你需要在此测验中至少获得 9/12 分才能参加实验室练习`

>课程官网：https://moodle.telt.unsw.edu.au/mod/lti/view.php?id=4559123

### 一、题目在哪？

在这： https://moodle.telt.unsw.edu.au/mod/quiz/view.php?id=4558266

### 二、如果你实在不会，可能这些能帮助到你：

?>先自己做，不要直接抄！如果需要帮助可以找我哦（微信:`1249602929`）

!>由于学校的题目极为奇葩，我已经将算法调整与学校的基本吻合了（某些题小数后面两三位不知道学校是怎么算出来的，所以某些答案可能会有一点小小的误差，请知晓！）

##### Page 1
* Question 1

  - [x] **Random uncertainty**
------
##### Page 2
* Question 2
  - [x] **Dependent**

* Question 3

<div id="q511">
</div>

  <div id="q3">



?>_在输入框中填题目中的数据(将题目补充完整)_<br>**题目：** A chemistry student is performing a titration using a burette. At the commencement of the experiment the burette reading is <input v-model="q1i1" v-on:input="calMonths()" placeholder="输入题目中的数据"> ± <input v-model="q1i2" v-on:input="calMonths()" placeholder="输入题目中的数据"> mL, and at the finish <input v-model="q1i3" v-on:input="calMonths()" placeholder="输入题目中的数据"> ± <input v-model="q1i4" v-on:input="calMonths()" placeholder="输入题目中的数据"> mL.

  <!--V = ( <input v-model="q1i5" placeholder="答案"> ±  <input v-model="q1i6" placeholder="答案"> ) mL-->
   V = ( <code>{{q1i5}}</code> ± <code>{{q1i6}}</code> ) mL 
  </div>

------
##### Page 3
* Question 4

<div id="q4">

?>_在输入框中填题目中的数据(将题目补充完整)_<br>**题目：** Wind speed is measured at 15 minute intervals over a two hour period on a windy day. Readings (in $ms^{-1}$) are: <input v-model="q4i1" v-on:input="calMonths()" placeholder="输入题目中的数据">

  v = <code>{{q4i2}}</code> m/s

  Δv =<code>{{q4i3}}</code> m/s
</div>


------
##### Page 4
* Question 5

1. `2`



<!--div>

||Value|Percentage uncertainty∗|Absolute uncertainty|Symbol for unit|
|:-:|:-:|:-:|:-:|:-:|
|Potential difference, V|<input v-model="q5i1" v-on:input="calMonths()" placeholder="输入题目中的数据">|<input v-model="q5i2" v-on:input="calMonths()" placeholder="输入题目中的数据" >|<input v-model="q5i5" v-on:input="calMonths() "> | |
|$$V^2$$|<input v-model="q5i6" v-on:input="calMonths()"> |<input v-model="q5i7" v-on:input="calMonths()"> |<input v-model="q5i8" v-on:input="calMonths()">| |
|Resistance, R|<input v-model="q5i3" v-on:input="calMonths()" placeholder="输入题目中的数据">|<input v-model="q5i9" v-on:input="calMonths()" > |<input v-model="q5i4" v-on:input="calMonths()" placeholder="输入题目中的数据">| |
|Power = $\frac{V^2}{R}$|<input v-model="q5i10" v-on:input="calMonths()">|<input v-model="q5i11" v-on:input="calMonths()"> |<input v-model="q5i12" v-on:input="calMonths()"> |`W` |

</div-->

?>_在输入框中填题目中的数据(将题目补充完整)_
<div id="q5">

||Value|Percentage uncertainty∗|Absolute uncertainty|Symbol for unit|
|:-:|:-:|:-:|:-:|:-:|
|Potential difference, V|<input v-model="q5i1" v-on:input="calMonths()" placeholder="输入题目中的数据">|<input v-model="q5i2" v-on:input="calMonths()" placeholder="输入题目中的数据" >|<code>{{q5i5}}</code> |V |
|$V^2$|<code>{{q5i6}}</code>  |<code>{{q5i7}}</code>  |<code>{{q5i8}}</code> |$V^2$ |
|Resistance, R|<input v-model="q5i3" v-on:input="calMonths()" placeholder="输入题目中的数据">|<code>{{q5i9}}</code>  |<input v-model="q5i4" v-on:input="calMonths()" placeholder="输入题目中的数据">|Ω |
|Power = $\frac{V^2}{R}$|<code>{{q5i10}}</code> |<code>{{q5i11}}</code> |<code>{{q5i12}}</code>  |`W` |

</div>

------
##### Page 5
* Question 6

1. `3`

<!--div>
||Value|Percentage uncertainty∗|Absolute uncertainty|Symbol for unit|
|:-:|:-:|:-:|:-:|:-:|
|Potential difference, V|<input v-model="q5i1" v-on:input="calMonths()" placeholder="输入题目中的数据">|<input v-model="q5i2" v-on:input="calMonths()">|<input v-model="q5i5" v-on:input="calMonths()" placeholder="输入题目中的数据"> | |
| $V^2$ |<input v-model="q5i6" v-on:input="calMonths()" placeholder="输入题目中的数据"> |<input v-model="q5i7" v-on:input="calMonths()"> |<input v-model="q5i8" v-on:input="calMonths()" placeholder="输入题目中的数据">| |
|Resistance, R|<input v-model="q5i3" v-on:input="calMonths()">|<input v-model="q5i9" v-on:input="calMonths()"> |<input v-model="q5i4" v-on:input="calMonths()">| |
|Power = $\frac{V^2}{R}$ |<input v-model="q5i10" v-on:input="calMonths()">|<input v-model="q5i11" v-on:input="calMonths()"> |<input v-model="q5i12" v-on:input="calMonths()"> |`W` |
</div-->

?>_在输入框中填题目中的数据(将题目补充完整)_
<div id="q6">

||Value|Percentage uncertainty∗|Absolute uncertainty|Symbol for unit|
|:-:|:-:|:-:|:-:|:-:|
|Mass, m|<input v-model="q5i1" v-on:input="calMonths()" placeholder="输入题目中的数据">|<code>{{q5i2}}</code> |<input v-model="q5i5" v-on:input="calMonths()" placeholder="输入题目中的数据"> |kg|
| Speed, v |<input v-model="q5i6" v-on:input="calMonths()" placeholder="输入题目中的数据"> |<code>{{q5i7}}</code> |<input v-model="q5i8" v-on:input="calMonths()" placeholder="输入题目中的数据">|m/s|
|Speed squared, $V^2$|<code>{{q5i3}}</code> |<code>{{q5i9}}</code> |<code>{{q5i4}}</code> | $m^2s^{−2}$ |
|Kinetic energy |<code>{{q5i10}}</code> |<code>{{q5i11}}</code> |<code>{{q5i12}}</code> |`J` |

</div>

------
##### Page 6
* Question 7

   - [x] x axis: m; y axis $T^2$; gradient is $\frac{4π^2}{k}$
   - [x] x axis: $T^2$; y axis $4π^2m$; gradient is k




<!--div id="example">

|||
|:-:|:-:|
|<input id="J_1" v-model="tack1" v-on:input="calMonths" />|<input id="J_2" v-model="tack2" v-on:input="calMonths" />|
|<span id="J_3">0</span>|{{tack2}}|

</div-->














<script>

  new Vue({
    el: '#q6',
    // Options...
    data () {
      return {
        q5i1:0,
        q5i2:0,
        q5i3:0,
        q5i4:0,
        //
        q5i5:0,
        q5i6:0,
        q5i7:0,
        q5i8:0,
        q5i9:0,
        q5i10:0,
        q5i11:0,
        q5i12:0,
      }
    },
    methods: {
      calMonths() {
        this.q5i2 = ((this.q5i5/this.q5i1)*100).toFixed(3);
        this.q5i7 = ((this.q5i8/this.q5i6)*100).toFixed(2);
        this.q5i3 = (this.q5i6*this.q5i6).toFixed(1);
        this.q5i9 = (((this.q5i8/this.q5i6)*100)*2).toFixed(3);
        this.q5i4 = (this.q5i3*this.q5i9/100).toFixed(2);
        this.q5i10 = (this.q5i1*this.q5i6*this.q5i6/2).toFixed(2);
        var abc =  parseFloat(this.q5i9).toFixed(2);
        this.q5i11 = Math.sqrt((((this.q5i5/this.q5i1)*100)*((this.q5i5/this.q5i1)*100)*((this.q5i5/this.q5i1)*100)*((this.q5i5/this.q5i1)*100))+(abc*abc)).toFixed(3);
        this.q5i12 = (this.q5i10*this.q5i11/100).toFixed(1);

      }, 
    }
  });




  new Vue({
    el: '#q5',
    // Options...
    data () {
      return {
        q5i1:0,
        q5i2:0,
        q5i3:0,
        q5i4:0,
        //
        q5i5:0,
        q5i6:0,
        q5i7:0,
        q5i8:0,
        q5i9:0,
        q5i10:0,
        q5i11:0,
        q5i12:0,
      }
    },
    methods: {
      calMonths() {
        this.q5i5 = (this.q5i1*this.q5i2/100).toFixed(2);
        this.q5i6 = (this.q5i1*this.q5i1).toFixed(1);
        this.q5i7 = this.q5i2*2;
        this.q5i8 = (this.q5i6*this.q5i7/100).toFixed(1);
        this.q5i9 = ((this.q5i4/this.q5i3)*100).toFixed(10);
        this.q5i10 = (this.q5i6/this.q5i3).toFixed(0);
        this.q5i11 = Math.sqrt((this.q5i2*2*this.q5i2*2)+((this.q5i4/this.q5i3)*100*(this.q5i4/this.q5i3)*100)).toFixed(10);
        this.q5i12 = (this.q5i10*this.q5i11/100).toFixed(1);

      }, 
    }
  });

  new Vue({
    el: '#q4',
    // Options...
    data () {
      return {
        q4i1: "",
        q4i1List:[],
        q4i2: 0,
        q4i3: 0,
        
      }
    },
    methods: {
      calMonths() {
        this.q4i1 = this.q4i1.replaceAll(" ","");
        this.q4i1List = this.q4i1.split(",");
        var List = [];
        var total = 0;
        for(var i=0;i< this.q4i1List.length ;i++) {
          total += parseFloat(this.q4i1List[i]);
          List.push(parseFloat(this.q4i1List[i]));
        }
        this.q4i2 = (total/this.q4i1List.length).toFixed(1);
        this.q4i3 = (Math.max.apply(Math,List) - Math.min.apply(Math,List))/2;
      }, 
    }
  });

    new Vue({
    el: '#q3',
    // Options...
    data () {
      return {
        q1i1:0,
        q1i2:0,
        q1i3:0,
        q1i4:0,
        q1i5:0,
        q1i6:0,
      }
    },
    methods: {
      calMonths() {
        
        var h =  parseFloat(this.q1i1);
        var b =  parseFloat(this.q1i3);
        this.q1i5 = (h-b).toFixed(2);
        this.q1i6 = (parseFloat(this.q1i2)*2).toFixed(2);
      }
    }
  });

  
  

</script>
