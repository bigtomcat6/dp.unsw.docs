
## Week 1 Calculus

>课程：[数学课程](/DPST1014/) &nbsp; [数学作业](/homework/DPST1014/)

?> mobius: [Week 1 Calculus![logo](../../../../../../logosvg01.svg)](https://unsw.mobius.cloud/1520?gid=5446)

---

### Calc1231W1T1 - Total Differential Approximation

##### Question 1

 _video_

##### Question 2

<div id="t1q2">

?>_随机题！需要补全题目才可出答案！_


<div style="background-color: rgb(245 245 245)">

Let  $\ell(x)$  be the tangent line to the function

 $y=p(x)=$ <input style="width: 30px" v-model="i1" v-on:input="calsq1()"> $x^2+$ <input style="width: 30px" v-model="i2" v-on:input="calsq1()"> $x+$ <input style="width: 30px" v-model="ia1" v-on:input="calsq1()">

 at the point $[$ <input style="width: 30px" v-model="i3" v-on:input="calsq1()"> $,$ <input style="width: 30px" v-model="i4" v-on:input="calsq1()"> $]$. The equation of this tangent is

</div>

  * $y = \ell(x) = \,$ <code>{{a1}}</code>

  * $p($ <input style="width: 30px" v-model="i5" v-on:input="calsq1()"> $) =$ <code>{{a2}}</code>
  * $\ell($ <input style="width: 30px" v-model="i5" v-on:input="calsq1()"> $) = \,$ <code>{{a3}}</code>


##### Question 3

?>_随机题！需要补全题目才可出答案！_

<div style="background-color: rgb(245 245 245)">

 $$\operatorname{Si}(x) = {\displaystyle\int\limits_0^x \frac{\sin(t)}{t}\, dt }$$

 near the point $A=[$ <input style="width: 30px" v-model="iq3a1" v-on:input="calsq1()"> $,\operatorname{Si}($ <input style="width: 30px" v-model="iq3a1" v-on:input="calsq1()"> $)] \approx [$ <input style="width: 30px" v-model="iq3a1" v-on:input="calsq1()"> $,$ <input style="width: 60px" v-model="iq3a2" v-on:input="calsq1()"> $].$

</div>

 * Since $\operatorname{Si}^\prime($ {{iq3a1}} $) =\,$ <code> sin({{iq3a1}})/{{iq3a1}} </code> , we have the linear approximation to $\operatorname{Si}(x)$ near $x = 2$

 * $ \operatorname{Si}(x) \approx \,$ <code> {{iq3a2}}+sin({{iq3a1}})/{{iq3a1}}*(x-{{iq3a1}}) </code>

 * $\operatorname{Si}($ <input style="width: 40px" v-model="iq3a3" v-on:input="calsq1()"> $) \approx \,$ <code> {{aq3a1}} </code>


##### Question 4

?>_随机题！需要补全题目才可出答案！_


<div style="background-color: rgb(245 245 245)">

 $z = F(x,y) = \frac{x^2}{A^2} + \frac{y^2}{B^2}$
 【补充：$A=$ <input style="width: 30px" v-model="i9" v-on:input="calsq2()"> $, B=$ <input style="width: 30px" v-model="i10" v-on:input="calsq2()">  】

 at the poin $[$ <input style="width: 30px" v-model="i6" v-on:input="calsq2()"> $,$ <input style="width: 30px" v-model="i7" v-on:input="calsq2()"> $,$ <input style="width: 50px" v-model="i8" v-on:input="calsq2()"> $]$

</div>

 * $\frac{\partial F}{\partial x} = \,$ <code>{{a4}}</code>

 * $\frac{\partial F}{\partial y} = \,$ <code>{{a5}}</code>

 * $F(x,y) \approx \, $ <code>{{a6}}</code>

 * $ F($ <input style="width: 30px" v-model="i11" v-on:input="calsq2()"> $,$ <input style="width: 30px" v-model="i12" v-on:input="calsq2()"> $) \approx$ <code>{{a7}}</code>

 * $ F($ <input style="width: 30px" v-model="i11" v-on:input="calsq2()"> $,$ <input style="width: 30px" v-model="i12" v-on:input="calsq2()"> $) \approx$ <code>{{a8}}</code>
</div>

##### Question 5

<div id="t1q4">

?>_随机题！需要补全题目才可出答案！_


<div style="background-color: rgb(245 245 245)">

It is desirable to predict how changes to defence and education spending impact upon the PM's approval. With current spending at  $d_0$  and  $e_0$ , the rate that approval (in percentage) changes with respect to defence spending (in billions) is measured by Newspoll to be the partial derivative  $ \frac{\partial A}{\partial d}(d_0,e_0) = $ <input style="width: 30px" v-model="i1" v-on:input="calsq1()"> , so an increase in defence spending of  $1$ billion dollars will translate to an increase in approval of <input style="width: 30px" v-model="i1" v-on:input="calsq1()"> $\%$ .

Similarly the rate that approval changes with respect to education spending is measured to be the partial derivative   $ \frac{\partial A}{\partial e}(d_0,e_0) = $ <input style="width: 30px" v-model="i2" v-on:input="calsq1()"> . Hence by the total differential approximation, for  $[d,e]$  in the neighbourhood of $[d_0,e_0]$

The current approval rating is $ A(d_0, e_0) = $ <input style="width: 30px" v-model="i3" v-on:input="calsq1()"> . If defence spending is decreased by  <input style="width: 30px" v-model="i4" v-on:input="calsq1()">  billion and education spending increased by  <input style="width: 30px" v-model="i5" v-on:input="calsq1()">  billion, then the approval rating approximately changes to

</div>

 * <code>{{a1}}</code> $\%$.



##### Question 6

?>_随机题！需要补全题目才可出答案！_


 *  $V($ <input style="width: 30px" v-model="i6" v-on:input="calsq2()">  $,$ <input style="width: 30px" v-model="i7" v-on:input="calsq2()">  $,$ <input style="width: 30px" v-model="i8" v-on:input="calsq2()"> $) = \,$ <code>{{a2}}</code>

 * $\frac{\partial V}{\partial \ell} = \, $ <code>{{a3}}</code>
 * $\frac{\partial V}{\partial r} = \, $ <code>{{a4}}</code>
 * $\frac{\partial V}{\partial R} = \, $ <code>{{a5}}</code>
 * $|V(\ell,r,R) - V(${{i6}}$,${{i7}}$,${{i8}}$)| \leq$ <code>{{a6}}</code> $mm^3$.
 * <input type="radio" checked disabled> No, we need more precise measurements.

---

### Calc1231W1T2 - The Chain Rule

##### Question 1

 _video_

##### Question 2

<div style="background-color: rgb(245 245 245)">

For example if $f(x)=$ <input style="width: 30px" v-model="i9" v-on:input="calsq3()"> $x+$ <input style="width: 30px" v-model="i10" v-on:input="calsq3()">  and  $g(x)=$ <input style="width: 30px" v-model="i11" v-on:input="calsq3()"> $x^2+$ <input style="width: 30px" v-model="i12" v-on:input="calsq3()"> $x+$ <input style="width: 30px" v-model="i13" v-on:input="calsq3()"> then

</div>

 * $f^\prime(x) = $ <code>{{a7}}</code>
 * $f^\prime(g(x)) = $ <code>{{a8}}</code>
 * $g^\prime(x) = $ <code>{{a9}}</code>
 * $\frac{d}{dx} f(g(x)) = f^\prime(g(x)) g^\prime(x) = $ <code>{{a10}}</code>


</div>

##### Question 3

 ![logo](./file/w1t2q2s1.png ':size=500')


##### Question 4

<div id="t2q3">

?>_随机题！需要补全题目才可出答案！_


<div style="background-color: rgb(245 245 245)">

$\frac{d}{dx}\sin(e^{ ( A\,{x}^{2}+B\,x+C
 ) })$ 【补全：$A=$ <input style="width: 30px" v-model="i1" v-on:input="calsq1()"> $,B=$ <input style="width: 30px" v-model="i2" v-on:input="calsq1()"> $,C=$ <input style="width: 30px" v-model="i3" v-on:input="calsq1()"> 】

</div>

 * $f^\prime(g(x)) = $ <code>{{a1}}</code>
 * $g^\prime(x) = $ <code>{{a2}}</code> 
 * $\frac{d}{dx}\sin(e^{ ( A\,{x}^{2}+B\,x+C
 ) }) = $ <code>{{a3}}</code>




##### Question 5

?>_随机题！需要补全题目才可出答案！_

<div style="background-color: rgb(245 245 245)">

 * the orange has a mass of  $m=$ <input style="width: 30px" v-model="i4" v-on:input="calsq2()">  kilograms,
 * the acceleration due to gravity is  $\frac{dv}{dt} =$  <input style="width: 30px" v-model="i5" v-on:input="calsq2()">  metres per second per second.

</div>

 * $ \frac{dK}{dt} = $ <code>{{a4}}</code>

<div style="background-color: rgb(245 245 245)">
When the velocity is  <input style="width: 30px" v-model="i6" v-on:input="calsq2()">   metres per second, the rate of change in kinetic energy is
</div>

 * $.\frac{dK}{dt}|_{v} = $ <code>{{a5}}</code>

##### Question 6

?>_随机题！需要补全题目才可出答案！_

<div style="background-color: rgb(245 245 245)">

For example, suppose you drive a car up a steep mountain road at a constant speed of  $v=$ <input style="width: 30px" v-model="i7" v-on:input="calsq3()"> kilometers per hour. The gradient of the mountain is $30$ degrees (I told you it was steep!) If  $g(t)$   represents the altitude (in kilometers) of the car at time  $t$  (in hours) then, using the triangle below, we can calculate the rate of change in altitude as

</div>

 * $g^\prime(t) = $ <code>{{a6}}</code> kilometers per hour.

<div style="background-color: rgb(245 245 245)">

Now let  $f(h)$  represent the temperature at $h$ kilometers above sea level. The temperature drops at a constant rate of <input style="width: 40px" v-model="i8 " v-on:input="calsq3()">  degrees for every kilometer above sea level. Hence

</div>

 * $ f^\prime(h) = $ <code>{{a7}}</code>
 * $\frac{d}{dt} f(g(t)) = f^\prime(g(t)) g^\prime(t) = $ <code>{{a8}}</code>

---

### Calc1231W1T3 - Multivariable Chain Rule

##### Question 1

 _video_

##### Question 2

<div style="background-color: rgb(245 245 245)">

If we let $F(x,y) = x^3 - 3xy  + y^3$, then the equation of the Folium is in the form $$F(x,y) = C$$

</div>

 * where $C = $ `0` is constant. The normal to the curve (shown in red) at the point $[x,y]$ is given by the vector

 $$\nabla F = \begin{pmatrix} \frac{\partial F}{\partial x} \\ \frac{\partial F}{\partial y} \end{pmatrix}$$

Where, as a function of  $x$  and  $y$ :

 * $\frac{\partial F}{\partial x} = $ `3x^2-3y`
 * $\frac{\partial F}{\partial y} = $ `-3x+3y^2`

<div style="background-color: rgb(245 245 245)">

We can think of the parameter  $t$   as time, velocity (shown in blue) is the vector $$\frac{d\mathbf{x}}{dt} = \begin{pmatrix} \frac{dx}{dt} \\ \frac{dy}{dt} \end{pmatrix} $$

</div>

Where, as a function of  $t$ :

 * $\frac{dx}{dt} = $ `(3-6t^3)/(1+t^3)^2`
 * $\frac{dy}{dt} = $ `(6t-3t^4)/(1+t^3)^2`

Geometrically, the **chain rule** states that the derivative is the dot product: $$\frac{dF}{dt} = \nabla F \cdot \frac{d\mathbf{x}}{dt} $$Of course, it's easy to see that this quantity equals zero since

 * - [x] the normal and velocity vectors are perpendicular.
   - [x] the function  $F(x,y)$  equals a constant, so the derivative must be zero.

##### Question 3

 ![logo](./file/w1t3q2s1.png ':size=500')

##### Question 4

 ![logo](./file/w1t3q3s1.png ':size=500')

 ![logo](./file/w1t3q3s2.png ':size=500')

##### Question 5

 ![logo](./file/w1t3q4s1.png ':size=500')

##### Question 6

?>_随机题！需要补全题目才可出答案！_

<div style="background-color: rgb(245 245 245)">

$\frac{dx}{dt} =$ <input style="width: 30px" v-model="i9" v-on:input="calsq4()"> $\quad \frac{dy}{dt} =$ <input style="width: 30px" v-model="i10" v-on:input="calsq4()"> $ \quad \frac{dz}{dt} =$ <input style="width: 30px" v-model="i11" v-on:input="calsq4()">

The GPS measures  $x=$ <input style="width: 30px" v-model="i12" v-on:input="calsq4()">  , but the GPS does not measure $ y$  (to keep costs down). What is the $ y $ co-ordinate? The chain rule can tell us! It's
</div>

 * $y = $ <code>{{a9}}</code>

---

### Calc1231W1T4 - The Wave Equation

##### Question 1

 _video_

##### Question 2

 * $\frac{\partial u}{\partial t} = $ `c*cos(x+ct)` and $\frac{\partial u}{\partial x} = $ `cos(c*t+x)`
 * $\frac{\partial u}{\partial t} - c\frac{\partial u}{\partial x} = $ `0`
 * $\frac{\partial v}{\partial t} = $ `-c*cos(-c*t+x)` and $\frac{\partial v}{\partial x} = $ `cos(-c*t+x)`
 * $\frac{\partial v}{\partial t} + c\frac{\partial v}{\partial x} = $ `0`

##### Question 3

 * $\frac{{\partial}^2 u}{{\partial t}^2} = $ `-c^2*sin(x+ct)`
 * $\frac{{\partial}^2 u}{\partial t \partial x} = $ `-c*sin(x+ct)`
 * $\frac{{\partial}^2 u}{\partial x \partial t} = $ `-c*sin(x+ct)`
 * $\frac{{\partial}^2 u}{{\partial x}^2} = $ `-sin(x+ct)`
 * $\frac{{\partial}^2 u}{{\partial t}^2} - c^2 \frac{{\partial}^2 u}{{\partial x}^2} = $ `0`
 * <select disabled><option>left</option></select> <select disabled><option>right</option></select>

##### Question 4

?>_随机题！需要补全题目才可出答案！_

<div style="background-color: rgb(245 245 245)">

Let's investiage the case when  $c=$ <input style="width: 30px" v-model="i13" v-on:input="calsq4()"> $+$ <input style="width: 30px" v-model="i14" v-on:input="calsq4()"> $i$  .  Then

</div>

 * The real part of  $u$  is <code>exp(-{{i14}}t)*cos(x+{{i13}}t)</code>
 * The imaginary part of  $u$  is <code>exp(-{{i14}}t)*sin(x+{{i13}}t)</code>
 * $ \lim\limits_{t\to\infty} u(x,t) = $ `0`

</div>

##### Question 5

 * $\frac{\partial^2 u}{{\partial t}^2}= $ `-c^2*cos(x+ct)`
 * $\frac{\partial^2 u}{{\partial x}^2}= $ `-cos(x+ct)`
 * $\frac{\partial^2 v}{{\partial t}^2}= $ `-c^2*cos(x-ct)`
 * $\frac{\partial^2 v}{{\partial x}^2}= $ `-cos(x-ct)`

##### Question 6

 * $\displaystyle\int\limits_{x-ct}^{x+ct}g(s) ds = \int\limits_{x-t}^{x+t}\cos(s) ds = $ `sin(x+t)-sin(x-t)`
 * $u(x,t) = $ `sin(x+t)`

---

### Maple1231W1T5 - Maple Revision from Math1131

##### Question 1 & 2

 ![logo](./file/w1t5q1s1.png ':size=500')

##### Question 3 & 4

<div id="t5q3">

?>_随机题！需要补全题目才可出答案！_

<div style="background-color: rgb(245 245 245)">

$f(x)=$ <input style="width: 80%" v-model="i1" v-on:input="calsq1()">

</div>
 * <code>{{a1}}</code>
</div>


 ![logo](./file/w1t5q3s1.png ':size=500')

##### Question 5

 ![logo](./file/w1t5q5s1.png ':size=500')

##### Question 6

 这道题是从上个学期的Maple题中随机抽，所以我也不知道你是哪道题。

 ![logo](./file/w1t5q6s1.png ':size=500')

##### Question 7 & 8

 ![logo](./file/w1t5q7s1.png ':size=500')
 
 ![logo](./file/w1t5q8s1.png ':size=500')

<script>

  new Vue({
    el: '#t5q3',
    // Options...
    data () {
      return {
        i1:0,
        i2:0,
        i3:0,
        i4:0,
        i5:0,
        i6:0,
        i7:0,
        i8:0,
        i9:0,
        i10:0,
        i11:0,
        i12:0,
        i13:0,
        i14:0,
        i15:0,
        i16:0,
        i17:0,

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
      }
    },
    methods: {
      calsq1() {
         var text = this.i1.replaceAll(" ","").replaceAll("例如：","").replaceAll("=","").replaceAll(":","").replaceAll(";","").replaceAll("A","").replaceAll("f","");
        this.a1 = "f := x->"+text;
      },
      calsq2() {

      }
    }
  }); 

  new Vue({
    el: '#t2q3',
    // Options...
    data () {
      return {
        i1:0,
        i2:0,
        i3:0,
        i4:0,
        i5:0,
        i6:0,
        i7:0,
        i8:0,
        i9:0,
        i10:0,
        i11:0,
        i12:0,
        i13:0,
        i14:0,
        i15:0,
        i16:0,
        i17:0,

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
      }
    },
    methods: {
      calsq1() {
        this.a1 = "cos(exp("+this.i1+"x^2+"+this.i2+"x+"+this.i3+"))";
        this.a2 = "("+this.i1*2+"x+"+this.i2+")*exp("+this.i1+"x^2+"+this.i2+"x+"+this.i3+")";
        this.a3 = "2("+this.i1+"x+"+this.i2/2+")*exp("+this.i1+"x^2+"+this.i2+"x+"+this.i3+")"+"*"+this.a1;
      },
      calsq2() {
        this.a4 = this.i4+"*"+this.i5+"*v";
        this.a5 = this.i4+"*"+this.i5+"*"+this.i6;
      },
      calsq3() {
        this.a6 = this.i7/2;
        this.a7 = "-"+this.i8;
        this.a8 = this.a7+"*"+this.a6;
      },
      calsq4() {
        this.a9 = 2*this.i12*this.i9-this.i11+"/"+2*this.i10;
      }
    }
  }); 

  new Vue({
    el: '#t1q4',
    // Options...
    data () {
      return {
        i1:0,
        i2:0,
        i3:0,
        i4:0,
        i5:0,
        i6:0,
        i7:0,
        i8:0,
        i9:0,
        i10:0,
        i11:0,
        i12:0,
        i13:0,
        i14:0,
        i15:0,
        i16:0,
        i17:0,

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
      }
    },
    methods: {
      calsq1() {
        this.a1 = parseInt(this.i3)+this.i1*-this.i4+this.i2*this.i5;
      },
      calsq2() {
        this.a2 = (Math.PI*this.i6*(this.i8*this.i8-this.i7*this.i7)).toFixed(0);
        this.a3 = (Math.PI*(this.i8*this.i8-this.i7*this.i7)).toFixed(0);
        this.a4 = (-Math.PI*this.i6*(2*this.i7)).toFixed(0);
        this.a5 = (Math.PI*this.i6*(2*this.i8)).toFixed(0);
        this.a6 = (this.a3-this.a4+parseInt(this.a5))/2;
      },
      calsq3() {
        this.a7 = this.i9;
        this.a8 = this.i9;
        this.a9 = this.i11*2+"x+"+this.i12;
        this.a10 = this.i9*this.i11*2+"x+"+this.i9*this.i12;

      }
    }
  }); 



  new Vue({
    el: '#t1q2',
    // Options...
    data () {
      return {
        i1:0,
        i2:0,
        i3:0,
        i4:0,
        i5:0,
        i6:0,
        i7:0,
        i8:0,
        i9:0,
        i10:0,
        i11:0,
        i12:0,
        i13:0,
        i14:0,
        i15:0,
        i16:0,
        i17:0,
        ia1:0,

        iq3a1: 0,
        iq3a2: 0,
        iq3a3: 0,

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

        aq3a1: 0,
      }
    },
    methods: {
      calsq1() {
        var m = this.i1*2*this.i3+parseInt(this.i2);
        var d = this.i3*m-this.i4;
        this.a1 = m+"x-"+d;
        this.a2 = this.i1*this.i5*this.i5+this.i2*this.i5+parseFloat(this.ia1);
        this.a3 = m*this.i5-d;

        this.aq3a1 = (parseFloat(this.iq3a2)+Math.sin(this.iq3a1)/this.iq3a1*(this.iq3a3-this.iq3a1)).toFixed(3);


      },
      calsq2() {
        this.a4 = (this.i6*2)/(this.i9*this.i9);
        this.a5 = (this.i7*2)/(this.i10*this.i10);
        this.a6 = this.i8+"+"+this.a4+"*(x-"+this.i6+")+"+this.a5+"*(y-"+this.i7+")";
        this.a7 = (parseFloat(eval(this.i8))+parseFloat(this.a4)*(this.i11-this.i6)+parseFloat(this.a5)*(this.i12-this.i7)).toFixed(3);

        this.a8 = ((this.i11*this.i11)/(this.i9*this.i9)+(this.i12*this.i12)/(this.i10*this.i10)).toFixed(3);
      }
    }
  }); 

  new Vue({
    el: '#t1q1',
    // Options...
    data () {
      return {
        i1:0,
        i2:0,
        i3:0,
        i4:0,
        i5:0,
        i6:0,
        i7:0,
        i8:0,
        i9:0,
        i10:0,
        i11:0,
        i12:0,
        i13:0,
        i14:0,
        i15:0,
        i16:0,
        i17:0,

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
      }
    },
    methods: {
      calsq1() {
        
      },
      calsq2() {

      }
    }
  }); 

</script>
