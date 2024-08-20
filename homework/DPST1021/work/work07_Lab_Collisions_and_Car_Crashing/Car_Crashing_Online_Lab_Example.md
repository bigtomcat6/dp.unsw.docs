!>请以unsw学校官网为准，这里只提供参考！ 

>如信息有问题，请立即[与我联系](/help/?id=关于我)！

# Car Crashing Online Lab Example

>只有 **一次** 机会，每次check会扣33%，请谨慎check! 一次性一定要拿到22/31！(Grade to pass: 70.00 out of 100.00)

>课程：[物理手册](/DPST1021/)

### 一、题目在哪？

 * [Collisions and Car Crashing Online Lab![logo](../../../../../logosvg01.svg)](https://moodle.telt.unsw.edu.au/mod/quiz/view.php?id=4558493)


### 二、如果你实在不会，可能这些能帮助到你：

?>先自己做，不要直接抄！如果需要帮助可以找我哦（微信:`1249602929`）

!>免责声明：物理题我**不保证正确率**！你们最好还是再**自己验算一下**！出事我不负责 (基本都能在95%以上，保过倒是莫问题)


##### Question 1

  - [x] A collision in which all of the kinetic energy is conserved.

##### Question 2

  - [x] $\frac{1}{2}m_1u_1^2 + \frac{1}{2} m_2 u_2^2 = \frac{1}{2} m_1v_1^2 + \frac{1}{2} m_2 v_2^2 $

  - [x] $m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$

##### Question 3

  - [x] An inelastic collision is one where the total kinetic energy is not conserved, but the final kinetic energy is above the minimum possible value.

##### Question 4

  - [x] $m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$

##### Question 5

  - [x] A perfectly inelastic collision is one for which the kinetic energy after the collision is the minimum possible value.

##### Question 6

  - [x] $m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$

  - [x] $v_1 = v_2$

##### Question 7

<div id="q7">

?>_随机题！需要补全题目才可出答案！_<br> **题目：** Here, the mass of ball 1 is <input style="width: 40px" v-model="i1" v-on:input="calsq1()"> kg, the mass of ball 2 is <input style="width: 40px" v-model="i2" v-on:input="calsq1()"> kg, the initial velocity of ball 1 is <input style="width: 40px" v-model="i3" v-on:input="calsq1()"> m/s and the initial velocity of ball 2 is <input style="width: 40px" v-model="i4" v-on:input="calsq1()"> m/s.

 * What is the initial momentum of ball 1?<br><code>{{a1}}</code>

 * What is the initial momentum of ball 2?<br><code>{{a2}}</code>

 * What is the total momentum of the system?<br><code>{{a3}}</code>

?>_随机题！需要补全题目才可出答案！_<br> **题目：** After the collision, ball 1 has a velocity of <input style="width: 60px" v-model="i5" v-on:input="calsq1()"> m/s.

 * What is the final momentum of ball 1?<br><code>{{a4}}</code>
 
 * What is the final momentum of ball 2?<br><code>{{a5}}</code>
 
 * What is the final velocity of ball 2?<br><code>{{a6}}</code>
 
 * What is the **total initial kinetic energy** ?<br><code>{{a7}}</code>

 * What is the **total final kinetic energy** ?<br><code>{{a8}}</code>

 * What is the **ratio of final to initial kinetic energy?** <br><code>{{a9}}</code>


</div>


##### Question 8

**Part 1 - Same Mass, One Ball Stationary - Elastic Collision**

<div id="q8">

?>_随机题！需要补全题目才可出答案！_

  * Before Collision:

  ||Mass (kg)|Velocity(m/s)|Momentum (kg m/s)|Kinetic Energy (J)|
  |--|--|--|--|--|
  |Ball 1 (Blue)|<input style="width: 40px" v-model="i1" v-on:input="calsq1()">|<input style="width: 40px" v-model="i2" v-on:input="calsq1()">|<code>{{a1}}</code>|<code>{{a2}}</code>|
  |Ball 2 (Magenta)|{{i1}}|0|<code>0</code>|<code>0</code>|

  * After Collision:

  ||Mass (kg)|Velocity(m/s)|Momentum (kg m/s)|Kinetic Energy (J)|
  |--|--|--|--|--|
  |Ball 1 (Blue)|{{i1}}|<code>0</code>|<code>0</code>|<code>0</code>|
  |Ball 2 (Magenta)|{{i1}}|<code>{{i2}}</code>|<code>{{a1}}</code>|<code>{{a2}}</code>|
  


  * <select><option>Momentum AND Kinetic Energy</option></select>

**Part 2 - Same Mass, One Ball Stationary - Perfectly Inelastic Collision**

  * Before Collision:

  ||Mass (kg)|Velocity(m/s)|Momentum (kg m/s)|Kinetic Energy (J)|
  |--|--|--|--|--|
  |Ball 1 (Blue)|<input style="width: 40px" v-model="i1" v-on:input="calsq1()">|<input style="width: 40px" v-model="i2" v-on:input="calsq1()">|<code>{{a1}}</code>|<code>{{a2}}</code>|
  |Ball 2 (Magenta)|{{i1}}|0|<code>0</code>|<code>0</code>|

  * After Collision:

  ||Mass (kg)|Velocity(m/s)|Momentum (kg m/s)|Kinetic Energy (J)|
  |--|--|--|--|--|
  |Ball 1 (Blue)|{{i1}}|<code>{{a3}}</code>|<code>{{a4}}</code>|<code>{{a5}}</code>|
  |Ball 2 (Magenta)|{{i1}}|<code>{{a3}}</code>|<code>{{a4}}</code>|<code>{{a5}}</code>|


  * <select><option>Just Momentum</option></select>

</div>

> _本页编写不易, 如果对你有帮助的话请我喝杯_ 🥤 _叭_ o(TヘTo)<br>![logo](../../../../../file/wxzsqr.jpg ':size=400')


##### Question 9

**Part 3 - Single Ball - Coefficient of Restitution.**

<div id="q9">

?>_随机题！需要补全题目才可出答案！_<br> **题目：** Set the 'Elasticity' of the system to <input style="width: 40px" v-model="i1" v-on:input="calsq1()"> %. Set mass of the ball to be <input style="width: 40px" v-model="i2" v-on:input="calsq1()"> kg, and the initial velocity of the ball to be <input style="width: 40px" v-model="i3" v-on:input="calsq1()">  m/s. 

  * Before Collision:

  ||Mass (kg)|Velocity(m/s)|Momentum (kg m/s)|Kinetic Energy (J)|
  |--|--|--|--|--|
  |Ball 1 (Blue)|{{i2}}|{{i3}}|<code>{{a1}}</code>|<code>{{a2}}</code>|
  |Ball 2 (Magenta)|{{i2}}|<code>{{a3}}</code>|<code>{{a4}}</code>|<code>{{a5}}</code>|

  * What is the coefficient of restitution for this system? This is the ratio of final velocity to initial velocity.<br><code>{{a6}}</code>

  * <select><option>Because we are not considering the change in momentum of the wall</option></select>

  |Row #|Mass (kg)|Initial Velocity (m/s)|Initial KE (J)|Final Velocity (m/s)|Final KE (J)|
  |--|--|--|--|--|--|
  |1|{{i2}}|0.1|<code>{{at1a1}}</code>|<code>{{at1a2}}</code>|<code>{{at1a3}}</code>|
  |2|{{i2}}|0.2|<code>{{at2a1}}</code>|<code>{{at2a2}}</code>|<code>{{at2a3}}</code>|
  |3|{{i2}}|0.5|<code>{{at3a1}}</code>|<code>{{at3a2}}</code>|<code>{{at3a3}}</code>|
  |4|{{i2}}|1.0|<code>{{at4a1}}</code>|<code>{{at4a2}}</code>|<code>{{at4a3}}</code>|
  |5|{{i2}}|1.25|<code>{{at5a1}}</code>|<code>{{at5a2}}</code>|<code>{{at5a3}}</code>|
  |6|{{i2}}|1.5|<code>{{at6a1}}</code>|<code>{{at6a2}}</code>|<code>{{at6a3}}</code>|
  |7|{{i2}}|2.0|<code>{{at7a1}}</code>|<code>{{at7a2}}</code>|<code>{{at7a3}}</code>|
  |8|{{i2}}|2.4|<code>{{at8a1}}</code>|<code>{{at8a2}}</code>|<code>{{at8a3}}</code>|
  |9|{{i2}}|2.8|<code>{{at9a1}}</code>|<code>{{at9a2}}</code>|<code>{{at9a3}}</code>|
  |10|{{i2}}|3|<code>{{at10a1}}</code>|<code>{{at10a2}}</code>|<code>{{at10a3}}</code>|

  * You should get a straight line - what is the value of the gradient? <br><code>{{a7}}</code>

  * gradient = `e^2`

</div>








<script>

  new Vue({
    el: '#q9',
    // Options...
    data () {
      return {
        i1:60,
        i2:1.38,
        i3:0.83,

        a1:0,
        a2:0,
        a3:0,
        a4:0,
        a5:0,
        a6:0,
        at1a1:0,at1a2:0,at1a3:0,
        at2a1:0,at2a2:0,at2a3:0,
        at3a1:0,at3a2:0,at3a3:0,
        at4a1:0,at4a2:0,at4a3:0,
        at5a1:0,at5a2:0,at5a3:0,
        at6a1:0,at6a2:0,at6a3:0,
        at7a1:0,at7a2:0,at7a3:0,
        at8a1:0,at8a2:0,at8a3:0,
        at9a1:0,at9a2:0,at9a3:0,
        at10a1:0,at10a2:0,at10a3:0,
        a7:0,

      }
    },
    methods: {
      calsq1() {
        this.a1 = (this.i2*this.i3).toPrecision(3);
        this.a2 = (this.i2*this.i3*this.i3*0.5).toPrecision(3);
        var af = this.i3*this.i1*(-0.01);
        this.a3 = (af-0.000000001).toFixed(2);
        this.a4 = (this.i2*af).toPrecision(3);
        this.a5 = ((this.i2)*(af*af)*0.5).toPrecision(3);
        this.a6 = Math.abs(af/this.i3).toPrecision(3);
        this.at1a1 = (this.i2*Math.pow(0.1,2)*0.5).toPrecision(3);this.at1a2 = (0.1*this.i1*(-0.01)-0.000000001).toFixed(2);this.at1a3 = (this.i2*Math.pow(0.1*this.i1*(-0.01),2)*0.5).toPrecision(3);
        this.at2a1 = (this.i2*Math.pow(0.2,2)*0.5).toPrecision(3);this.at2a2 = (0.2*this.i1*(-0.01)-0.000000001).toFixed(2);this.at2a3 = (this.i2*Math.pow(0.2*this.i1*(-0.01),2)*0.5).toPrecision(3);
        this.at3a1 = (this.i2*Math.pow(0.5,2)*0.5).toPrecision(3);this.at3a2 = (0.5*this.i1*(-0.01)-0.000000001).toFixed(2);this.at3a3 = (this.i2*Math.pow(0.5*this.i1*(-0.01),2)*0.5).toPrecision(3);
        this.at4a1 = (this.i2*Math.pow(1.0,2)*0.5).toPrecision(3);this.at4a2 = (1.0*this.i1*(-0.01)-0.000000001).toFixed(2);this.at4a3 = (this.i2*Math.pow(1.0*this.i1*(-0.01),2)*0.5).toPrecision(3);
        this.at5a1 = (this.i2*Math.pow(1.25,2)*0.5).toPrecision(3);this.at5a2 = (1.25*this.i1*(-0.01)-0.000000001).toFixed(2);this.at5a3 = (this.i2*Math.pow(1.25*this.i1*(-0.01),2)*0.5).toPrecision(3);
        this.at6a1 = (this.i2*Math.pow(1.5,2)*0.5).toPrecision(3);this.at6a2 = (1.5*this.i1*(-0.01)-0.000000001).toFixed(2);this.at6a3 = (this.i2*Math.pow(1.5*this.i1*(-0.01),2)*0.5).toPrecision(3);
        this.at7a1 = (this.i2*Math.pow(2.0,2)*0.5).toPrecision(3);this.at7a2 = (2.0*this.i1*(-0.01)-0.000000001).toFixed(2);this.at7a3 = (this.i2*Math.pow(2.0*this.i1*(-0.01),2)*0.5).toPrecision(3);
        this.at8a1 = (this.i2*Math.pow(2.4,2)*0.5).toPrecision(3);this.at8a2 = (2.4*this.i1*(-0.01)-0.000000001).toFixed(2);this.at8a3 = (this.i2*Math.pow(2.4*this.i1*(-0.01),2)*0.5).toPrecision(3);
        this.at9a1 = (this.i2*Math.pow(2.8,2)*0.5).toPrecision(3);this.at9a2 = (2.8*this.i1*(-0.01)-0.000000001).toFixed(2);this.at9a3 = (this.i2*Math.pow(2.8*this.i1*(-0.01),2)*0.5).toPrecision(3);
        this.at10a1 = (this.i2*Math.pow(3,2)*0.5).toPrecision(3);this.at10a2 = (3*this.i1*(-0.01)-0.000000001).toFixed(2);this.at10a3 = (this.i2*Math.pow(3*this.i1*(-0.01),2)*0.5).toPrecision(3);

        this.a7 = Math.pow((af/this.i3),2).toPrecision(3);

      },
    }
  });

  new Vue({
    el: '#q8',
    // Options...
    data () {
      return {
        i1:1.29,
        i2:2.47,
        i3:0.99,
        i4:-1.82,
        i5:-0.7227,

        a1:0,
        a2:0,
        a3:0,
        a4:0,
        a5:0,
        a6:0,
        a7:0,
        a8:0,
        a9:0,
        a10:0,
        a11:0,
        a12:0,
        a13:0,
      }
    },
    methods: {
      calsq1() {
        
        this.a1 = (this.i1*this.i2).toPrecision(3);
        this.a2 = (this.i1*this.i2*this.i2*0.5).toPrecision(3);
        this.a3 = (this.i2*0.5).toPrecision(3);
        this.a4 = (this.i1*this.i2*0.5).toPrecision(3);
        this.a5 = ((this.i1)*(Math.pow(this.i2*0.5,2))*0.5).toPrecision(3);
      },
    }
  });



  new Vue({
    el: '#q7',
    // Options...
    data () {
      return {
        i1:1.37,
        i2:2.11,
        i3:0.99,
        i4:-1.82,
        i5:-0.7227,

        a1:0,
        a2:0,
        a3:0,
        a4:0,
        a5:0,
        a6:0,
        a7:0,
        a8:0,
        a9:0,
        a10:0,
        a11:0,
        a12:0,
        a13:0,
      }
    },
    methods: {
      calsq1() {
        
        var inim1 = this.i1*this.i3;
        this.a1 = inim1.toPrecision(3);
        var inim2 = this.i2*this.i4;
        this.a2 = inim2.toPrecision(3);
        var inimtotal = parseFloat(inim1)+parseFloat(inim2);
        this.a3 = inimtotal.toPrecision(3);
        var finm1 = this.i1*this.i5;
        this.a4 = finm1.toPrecision(3);
        var finm2 = parseFloat(inimtotal) - parseFloat(finm1);
        this.a5 = finm2.toPrecision(3);
        var finv2 = finm2/this.i2;
        this.a6 = finv2.toPrecision(3);
        var totiniKE = 0.5*((this.i1*this.i3*this.i3)+(this.i2*this.i4*this.i4));
        this.a7 = totiniKE.toPrecision(3);
        var totfinKE = 0.5*((this.i1*this.i5*this.i5)+(this.i2*finv2*finv2));
        this.a8 = totfinKE.toPrecision(3);
        var ratio = totfinKE/totiniKE;
        this.a9 = ratio.toPrecision(3);
        

      },
    }
  });


</script>