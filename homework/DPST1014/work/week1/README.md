
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


<div class="how_qb">

Let  $\ell(x)$  be the tangent line to the function

<div style="text-align: center">

 $y=p(x)=$ <input style="width: 30px" v-model="i1" v-on:input="calsq1()"> $x^2+$ <input style="width: 30px" v-model="i2" v-on:input="calsq1()"> $x+$ <input style="width: 30px" v-model="ia1" v-on:input="calsq1()">

</div>

 at the point $[$ <input style="width: 30px" v-model="i3" v-on:input="calsq1()"> $,$ <input style="width: 30px" v-model="i4" v-on:input="calsq1()"> $]$. The equation of this tangent is

<div style="text-align: center">

   $y = \ell(x) = \,$ <code>{{a1}}</code>

</div>

Now evaluate

<div style="text-align: center">

  * $p($ <input style="width: 30px" v-model="i5" v-on:input="calsq1()"> $) =$ <code>{{a2}}</code>
  * $\ell($ <input style="width: 30px" v-model="i5" v-on:input="calsq1()"> $) = \,$ <code>{{a3}}</code>

</div>

The closeness between these values matches our expectation that the tangent line is close to the parabola for points near $ [1, 11 ] $. Below, the graph of  $p(x)$ is plotted in red, and the tangent $ \ell(x) $ is plotted in blue dots.

<div style="text-align: center">

 ![logo](./file/lddbekahaecndkkijdgagbjpnb.gif ':size=300')

</div>

</div>

##### Question 3

?>_随机题！需要补全题目才可出答案！_

<div class="how_qb">

Evaluating integrals can be difficult. So let's instead use the total differential approximation to approximate the [Sine Integral![logo](../../../../../logosvg01.svg)](https://en.wikipedia.org/wiki/Trigonometric_integral#Sine_integral)

 $$\operatorname{Si}(x) = {\displaystyle\int\limits_0^x \frac{\sin(t)}{t}\, dt }$$

 near the point $A=[$ <input style="width: 30px" v-model="iq3a1" v-on:input="calsq1()"> $,\operatorname{Si}($ <input style="width: 30px" v-model="iq3a1" v-on:input="calsq1()"> $)] \approx [$ <input style="width: 30px" v-model="iq3a1" v-on:input="calsq1()"> $,$ <input style="width: 60px" v-model="iq3a2" v-on:input="calsq1()"> $].$

The differential approximation to  $Si$ near {{iq3a1}} is given by the formula

<div style="text-align: center">

 $\operatorname{Si}(x) \approx $ {{iq3a2}} $ + \operatorname{Si}^\prime($ {{iq3a1}} $)(x-$ {{iq3a1}} $) $

</div>

 Since $\operatorname{Si}^\prime($ {{iq3a1}} $) =\,$ <code> sin({{iq3a1}})/{{iq3a1}} </code> , we have the linear approximation to $\operatorname{Si}(x)$ near $x = $ {{iq3a1}}

<div style="text-align: center">

 $ \operatorname{Si}(x) \approx \,$ <code> {{iq3a2}}+sin({{iq3a1}})/{{iq3a1}}*(x-{{iq3a1}}) </code>

</div>

 * Use the linear approximation to evaluate (to 3 decimal places) 

<div style="text-align: center">

 $\operatorname{Si}($ <input style="width: 40px" v-model="iq3a3" v-on:input="calsq1()"> $) \approx \,$ <code> {{aq3a1}} </code>

</div>

 * Use the plot below (drag the slider to the appropriate value) to evaluate (to 3 decimal places)

<div style="text-align: center">

<iframe scrolling="no" title="Calc1231W1T1 - Total Differential Approximation Q3" src="https://www.geogebra.org/material/iframe/id/qk2vm3mh/width/300/height/300/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/true/ctl/false" width="300px" height="300px" style="border:0px;"> </iframe>

</div>



</div>


##### Question 4

?>_随机题！需要补全题目才可出答案！_


<div class="how_qb">

The total differential approximation works in three-dimensional space, too. For example, consider the paraboloid

<div style="text-align: center">

$z = F(x,y) = \frac{x^2}{A^2} + \frac{y^2}{B^2}$<br>
 【补充：$A=$ <input style="width: 30px" v-model="i9" v-on:input="calsq2()"> $, B=$ <input style="width: 30px" v-model="i10" v-on:input="calsq2()">  】

</div>

 at the poin $[$ <input style="width: 30px" v-model="i6" v-on:input="calsq2()"> $,$ <input style="width: 30px" v-model="i7" v-on:input="calsq2()"> $,$ <input style="width: 50px" v-model="i8" v-on:input="calsq2()"> $]$

 The total differential approximation to  $z=F(x,y)$ near  [{{i6}},{{i7}}] is given by the formula

<div style="text-align: center">

$ F(x,y) \approx $ {{i8}} $ + \frac{\partial F}{\partial x}($ {{i6}} $,$ {{i7}} $) (x-$ {{i6}} $) + \frac{\partial F}{\partial y}($ {{i6}} $,$ {{i7}} $)(y-$ {{i7}} $)$

</div>

In fact, this gives the equation of the tangent plane to the surface at the point  [{{i6}},{{i7}},{{i8}}] . Now

<div style="text-align: center">

 * $\frac{\partial F}{\partial x} = \,$ ({{i6}},{{i7}}) <code> {{a4}} </code>

 * $\frac{\partial F}{\partial y} = \,$ ({{i6}},{{i7}}) <code> {{a5}} </code>

</div>

So we have the linear approximation to $z=F(x,y)$ near  [{{i6}},{{i7}}] :

<div style="text-align: center">

$F(x,y) \approx \, $ <code>{{a6}}</code>

</div>

 * Use this formula to approximate (to 3 decimal places)

<div style="text-align: center">

$ F($ <input style="width: 30px" v-model="i11" v-on:input="calsq2()"> $,$ <input style="width: 30px" v-model="i12" v-on:input="calsq2()"> $) \approx$ <code>{{a7}}</code>

</div>

 * Compute directly from the definition (to 3 decimal places) the value

<div style="text-align: center">

$ F($ <input style="width: 30px" v-model="i11" v-on:input="calsq2()"> $,$ <input style="width: 30px" v-model="i12" v-on:input="calsq2()"> $) \approx$ <code>{{a8}}</code>
</div>

<div style="text-align: center">

 ![logo](./file/dglbeinhgmadmcfgdgmeflglim.gif ':size=300')

</div>


</div>


</div>

##### Question 5

<div id="t1q4">

?>_随机题！需要补全题目才可出答案！_


<div class="how_qb">

In the previous questions, it was possible to calculate the value of the function exactly. But it is also possible to make mathematical deductions without knowing the function (which might be impossible or expensive to obtain), and instead only knowing the partial derivatives.

---

Assume that the approval rating of a Prime Minister is given by the function  $A(d,e)$, where  $d$ is defence spending (in billions) and  $e$ is education spending (in billions). The output of the approval rating  $A(d,e)$ itself is a percentage between  $0$ and  $100$.

It is desirable to predict how changes to defence and education spending impact upon the PM's approval. With current spending at  $d_0$  and  $e_0$ , the rate that approval (in percentage) changes with respect to defence spending (in billions) is measured by Newspoll to be the partial derivative  $ \frac{\partial A}{\partial d}(d_0,e_0) = $ <input style="width: 30px" v-model="i1" v-on:input="calsq1()"> , so an increase in defence spending of  $1$ billion dollars will translate to an increase in approval of <input style="width: 30px" v-model="i1" v-on:input="calsq1()"> $\%$ .

Similarly the rate that approval changes with respect to education spending is measured to be the partial derivative   $ \frac{\partial A}{\partial e}(d_0,e_0) = $ <input style="width: 30px" v-model="i2" v-on:input="calsq1()"> . Hence by the total differential approximation, for  $[d,e]$  in the neighbourhood of $[d_0,e_0]$

$$A(d,e) \approx A(d_0,e_0) + \frac{\partial A}{\partial d}(d_0,e_0) (d-d_0) + \frac{\partial A}{\partial e}(d_0,e_0) (e-e_0)$$

The current approval rating is $ A(d_0, e_0) = $ <input style="width: 30px" v-model="i3" v-on:input="calsq1()"> . If defence spending is decreased by  <input style="width: 30px" v-model="i4" v-on:input="calsq1()">  billion and education spending increased by  <input style="width: 30px" v-model="i5" v-on:input="calsq1()">  billion, then the approval rating approximately changes to <code> {{a1}} </code> $\%$.

**Note:** do not round your answer, approval rating is too important to be rounded.

</div>



##### Question 6

?>_随机题！需要补全题目才可出答案！_

<div class="how_qb">

How much toilet paper is left on the roll? The volume of a cylinder with length $\ell$ and radius $r$ is given by the formula: $$ \pi \ell r^2 $$ You've got some time on your hands, so you carefully measure your toilet roll and discover its dimensions to the nearest mm:

 * length $\ell = $ <input style="width: 30px" v-model="i6" v-on:input="calsq2()"> mm.
 * radius of the inner cardboard cylinder $r =$ <input style="width: 30px" v-model="i7" v-on:input="calsq2()"> mm, and
 * radius of the outer cylinder $R=$ <input style="width: 30px" v-model="i8" v-on:input="calsq2()">  mm.

<div style="text-align: center">

 ![logo](./file/256px-Toilet_paper_roll_revisited.svg.png ':size=300') The volume of toilet paper on the roll is thus given by the formula:<br>$ V(\ell,r,R) = \pi\ell(R^2 - r^2)$ .

</div>

According to your measurements, the volume of toilet paper is (to the nearest cubic mm):

<div style="text-align: center">

$V($ <input style="width: 30px" v-model="i6" v-on:input="calsq2()">  $,$ <input style="width: 30px" v-model="i7" v-on:input="calsq2()">  $,$ <input style="width: 30px" v-model="i8" v-on:input="calsq2()"> $) = \,$ <code>{{a2}}</code>

</div>

However, since your initial measurements were only accurate to the nearest mm, the true volume of toilet paper may be different.

The total differential approximation can be used to estimate how the measured volume $V(${{i6}},{{i7}},{{i8}}$)$  differs from the true value of $ V(\ell,r,R) $ as:

<div style="text-align: center">

$ V(\ell,r,R) \approx V(${{i6}},{{i7}},{{i8}}$) + \frac{\partial V}{\partial \ell}(${{i6}},{{i7}},{{i8}}$) (\ell-${{i6}}$) + \frac{\partial V}{\partial r}(94,22,54) (r-${{i7}}$) + \frac{\partial V}{\partial R}(${{i6}},{{i7}},{{i8}}$) (R-${{i8}}$)$

</div>

We calculate the partial derivatives (to the nearest integer):

 * $\frac{\partial V}{\partial \ell} (${{i6}},{{i7}},{{i8}}$) = \, $ <code>{{a3}}</code>
 * $\frac{\partial V}{\partial r} (${{i6}},{{i7}},{{i8}}$) = \, $ <code>{{a4}}</code>
 * $\frac{\partial V}{\partial R} (${{i6}},{{i7}},{{i8}}$) = \, $ <code>{{a5}}</code>

Since we measured $\ell, r$ and $R$ to the nearest mm,

<div style="text-align: center">

$| \ell- $ {{i6}} $ | < 0.5,\, | r- $ {{i7}} $ | <0.5 $ differs from the true volume by <br> $|V(\ell,r,R) - V(${{i6}}$,${{i7}}$,${{i8}}$)| \leq$ <code>{{a6}}</code> $mm^3$.

</div>



To two decimal places, this represents an approximate error of no more than

$$ \frac{\left|V(\ell,r,R) - V(x,y,z)\right|}{V(x,y,z)} \leq 3.66 \%$$

Are you satisfied with this level of precision? (this part is not worth marks)

 - [x] No, we need more precise measurements.
 - [ ] Yes, this level of precision is sufficient for my needs.
 - [ ] Better go buy some more toilet paper to account for this potentially significant error.



</div>

---

### Calc1231W1T2 - The Chain Rule

##### Question 1

 _video_

##### Question 2

<div class="how_qb">

The chain rule allows you to take the derivative of the composite function $$ f \circ g(x) = f(g(x)) $$ as $$\frac{d}{dx} f(g(x)) = f^\prime(g(x)) g^\prime(x).$$

For example if $f(x)=$ <input style="width: 30px" v-model="i9" v-on:input="calsq3()"> $x+$ <input style="width: 30px" v-model="i10" v-on:input="calsq3()">  and  $g(x)=$ <input style="width: 30px" v-model="i11" v-on:input="calsq3()"> $x^2+$ <input style="width: 30px" v-model="i12" v-on:input="calsq3()"> $x+$ <input style="width: 30px" v-model="i13" v-on:input="calsq3()"> then

 * $f^\prime(x) = $ <code> {{a7}} </code>
 * $f^\prime(g(x)) = $ <code> {{a8}} </code>
 * $g^\prime(x) = $ <code> {{a9}} </code>

Hence by the chain rule

<div style="text-align: center">

$\frac{d}{dx} f(g(x)) = f^\prime(g(x)) g^\prime(x) = $ <code>{{a10}}</code>

</div>

</div>

</div>

##### Question 3

<div class="how_qb">

In the previous question we used the chain rule to calculate the derivative  $f\circ g$ indirectly from the derivatives of  $f$ and  $g$. Of course, in the previous question  $f$ and  $g$ were polynomials, and so a simpler method to find the derivative would be to first evaluate $f\circ g$ and then differentiate.

However, this "simpler" method does not always work. For example, use the chain rule $$\frac{d}{dx} f(g(x)) = f^\prime(g(x))g^\prime(x) $$ to evaluate:

 * $\frac{d}{dx} \sin\left({x}^{3}+1\right) = $ ` 3x^2*cos(x^3+1) `
 * $\frac{d}{dx} e^{( {x}^{3}+1)} = $ ` (3x^2)*e^(x^3+1) `
 * $3x^2*1/(x^3+1)$ ` 3x^2*1/(x^3+1) `
 * $\frac{d}{dx} \tan^{-1}\left({x}^{3}+1\right) = $ ` 3x^2*1/(1+(x^3+1)^2) `

Recall $$\frac{d}{dx}\left(\tan^{-1}(x)\right ) = \frac{1}{1+x^2}$$


</div>

##### Question 4

<div id="t2q3">

?>_随机题！需要补全题目才可出答案！_


<div class="how_qb">

What if you are faced with taking the derivative of a function of a function of a function? A single application of the chain rule is not enough.

<div style="text-align: center">

 ![logo](./file/a88.jpg ':size=300')<br>From [Know Your Meme![logo](../../../../../../logosvg01.svg)](http://knowyourmeme.com/)

</div>

We need to use the chain rule within the chain rule! For example, to evaluate

<div style="text-align: center">

$\frac{d}{dx}\sin(e^{ ( A\,{x}^{2}+B\,x+C
 ) })$ <br>【补全：$A=$ <input style="width: 30px" v-model="i1" v-on:input="calsq1()"> $,B=$ <input style="width: 30px" v-model="i2" v-on:input="calsq1()"> $,C=$ <input style="width: 30px" v-model="i3" v-on:input="calsq1()"> 】
</div>

Let $f(x) = \sin(x)$ and $g(x) = e^{( A\,{x}^{2}+B\,x+C )}$. Then a first application of the chain rule gives $$\frac{d}{dx}\sin\left(e^{ ( A\,{x}^{2}+B\,x+C ) }\right)\ = f^\prime(g(x))g^\prime(x). $$ It is possible at this stage to find

<div style="text-align: center">

$f^\prime(g(x)) = $ <code> {{a1}} </code>

</div>

However to find $g^\prime(x)$ requires a further use of the chain rule

<div style="text-align: center">

$g^\prime(x) = $ <code> {{a2}} </code> 

</div>

Hence

<div style="text-align: center">

 $\frac{d}{dx}\sin(e^{ ( A\,{x}^{2}+B\,x+C ) }) = $ <code> {{a3}} </code>

</div>

</div>


##### Question 5

?>_随机题！需要补全题目才可出答案！_

<div class="how_qb">

The kinetic energy of a object with mass $ m$ (kilograms) and velocity  $v$ (metres per second) is given by $$K = \frac{1}{2}mv^2.$$

Suppose you drop an orange, where

 * the orange has a mass of  $m=$ <input style="width: 30px" v-model="i4" v-on:input="calsq2()">  kilograms,
 * the acceleration due to gravity is  $\frac{dv}{dt} =$  <input style="width: 30px" v-model="i5" v-on:input="calsq2()">  metres per second per second.

By the chain rule, the change in kinetic energy with respect to time is a function of $ v$ :

<div style="text-align: center">

 $ \frac{dK}{dt} = $ <code>{{a4}}</code>

</div>

When the velocity is  <input style="width: 30px" v-model="i6" v-on:input="calsq2()">   metres per second, the rate of change in kinetic energy is



<div style="text-align: center">

$\frac{dK}{dt}|_{v=...} = $ <code>{{a5}}</code>

</div>
</div>



##### Question 6

?>_随机题！需要补全题目才可出答案！_

<div class="how_qb">

Remarkably, the chain rule allows you to calculate the derivative of the composite function $f\circ g(x) = f(g(x))$ as the product of the derivatives $f^\prime(g(x))$  and $g^\prime(x)$ . It is not actually necessary to know an explicit formula for the functions $ f$ and $ g$, only their derivatives are required.

For example, suppose you drive a car up a steep mountain road at a constant speed of  $v=$ <input style="width: 30px" v-model="i7" v-on:input="calsq3()"> kilometers per hour. The gradient of the mountain is $30$ degrees (I told you it was steep!) If  $g(t)$   represents the altitude (in kilometers) of the car at time  $t$  (in hours) then, using the triangle below, we can calculate the rate of change in altitude as

<div style="text-align: center">

$g^\prime(t) = $ <code> {{a6}} </code> kilometers per hour. <br> ![logo](./file/W3T2Q5_2new.png ':size=300')

</div>

Now let  $f(h)$  represent the temperature at $h$ kilometers above sea level. The temperature drops at a constant rate of <input style="width: 40px" v-model="i8 " v-on:input="calsq3()">  degrees for every kilometer above sea level. Hence


<div style="text-align: center">

$ f^\prime(h) = $ <code> {{a7}} </code>

</div>

The composite function $f(g(t))$ represents the temperature at time  $t$ . By the chain rule the temperature changes with time at a rate of

<div style="text-align: center">

$\frac{d}{dt} f(g(t)) = f^\prime(g(t)) g^\prime(t) = $ <code> {{a8}} </code>

</div>

This calculation was done without knowing the value of $t,h,g(t)$ or $f(h)$.

**Note:** this question was adapted from [this example on Wikipedia![logo](../../../../../../logosvg01.svg)](https://en.wikipedia.org/wiki/Chain_rule#Absence_of_formulas).

</div>

---

### Calc1231W1T3 - Multivariable Chain Rule

##### Question 1

 _video_

##### Question 2

<div class="how_qb">

Recall the Folium of Descartes, which has Cartesian equation $$x^3 - 3xy + y^3 = 0$$ with the rational parameterization $$x(t) = \frac{3t}{1+t^3},\quad y(t) = \frac{3t^2}{1+t^3}$$ The Folium is shown below (in black), along with the normal to the curve (in red). Through this parameterization the Folium can be regarded as a function of  $t$ . Let's find the derivative with respect to $t...$ geometrically.

<!--iframe height="503px" scrolling="no" src="https://www.geogebra.org/material/iframe/id/GufG5v2S/width/589/height/503/border/888888/rc/false/ai/false/sdz/true/smb/false/stb/false/stbh/true/ld/false/sri/true/at/auto" style="border:0px;" width="589px"></iframe-->


If we let $F(x,y) = x^3 - 3xy  + y^3$, then the equation of the Folium is in the form $$F(x,y) = C$$

where $C = $ ` 0 ` is constant. The normal to the curve (shown in red) at the point $[x,y]$ is given by the vector  $$\nabla F = \begin{pmatrix} \frac{\partial F}{\partial x} \\ \frac{\partial F}{\partial y} \end{pmatrix}$$

Where, as a function of  $x$  and  $y$ :

 * $\frac{\partial F}{\partial x} = $ ` 3x^2-3y `
 * $\frac{\partial F}{\partial y} = $ ` -3x+3y^2 `

We can think of the parameter  $t$   as time, velocity (shown in blue) is the vector $$\frac{d\mathbf{x}}{dt} = \begin{pmatrix} \frac{dx}{dt} \\ \frac{dy}{dt} \end{pmatrix} $$

Where, as a function of  $t$ :

 * $\frac{dx}{dt} = $ ` (3-6t^3)/(1+t^3)^2 `
 * $\frac{dy}{dt} = $ ` (6t-3t^4)/(1+t^3)^2 `

Geometrically, the **chain rule** states that the derivative is the dot product: $$\frac{dF}{dt} = \nabla F \cdot \frac{d\mathbf{x}}{dt} $$Of course, it's easy to see that this quantity equals zero since

 - [x] the normal and velocity vectors are perpendicular.
 - [x] the function  $F(x,y)$  equals a constant, so the derivative must be zero.

</div>

##### Question 3

<div class="how_qb">

A plane in $\mathbb R^3$ has Cartesian equation $$2 x + 3 y + 13 z = 20$$ If we let $F(x,y,z) = 2 x + 3 y + 13 z$ then the partial derivatives are

 * $\frac{\partial F}{\partial x} = $ ` 2 `
 * $\frac{\partial F}{\partial y} = $ ` 3 `
 * $\frac{\partial F}{\partial z} = $ ` 13 `

These are the components of the normal to the plane, which is the vector $$\nabla F = \begin{pmatrix}\frac{\partial F}{\partial x}\\\frac{\partial F}{\partial y}\\\frac{\partial F}{\partial z}\end{pmatrix}$$ Now consider a surface in $R^3$ with Cartesian equation $$5\,{x}^{2}+4\,xz+5\,{y}^{2}
 = 20$$ If we let $G(x,y,z) = 5\,{x}^{2}+4\,xz+5\,{y}^{2}$ , the partial derivatives are

  * $\frac{\partial G}{\partial x} = $ ` 10x+4z `
  * $\frac{\partial G}{\partial y} = $ ` 10y `
  * $\frac{\partial G}{\partial z} = $ ` 4x `

These are the components of $\nabla G$, the normal to the surface at the point  $[x,y,z]$. In contrast to the plane, the normal to a general surface need not be constant.
 
</div>

##### Question 4

<div class="how_qb">

Consider a function of three variables, such as $$F(x,y,z) = C$$ Suppose $ x,y$ and $ z$ are functions of $ t$. The chain rule states that $$\frac{dF}{dt} = \nabla F \cdot \frac{d{\mathbf x}}{dt} = \frac{\partial F}{\partial x}\frac{dx}{dt}+\frac{\partial F}{\partial y}\frac{dy}{dt}+\frac{\partial F}{\partial z}\frac{dz}{dt} $$ Of special importance are those functions where  $z$ is a function of the other variables, such as $$z = 4\,{x}^{2}+3\,y+1$$ If we know $x = \cos(t) $ and $y = \sin(t) $ then  $z$ must be function of $ t$ too. We can find the derivative $\frac{dz}{dt}$ by first rewriting our equation in the form $$F(x,y,z) = -1$$ Then take the derivative of both sides with respect to $ t$. The derivative of the right hand side is ` 0 ` . The derivative of the left hand side requires the chain rule.

First, we compute the normal: $$ \nabla F = \begin{pmatrix} \frac{\partial F}{\partial x} \\ \frac{\partial F}{\partial y} \\ \frac{\partial F}{\partial z} \end{pmatrix}$$ where, as a function of  $x$ and $ y$ :

 * $\frac{\partial F}{\partial x} = $ ` 8x `
 * $\frac{\partial F}{\partial y} = $ ` 3 `
 * $\frac{\partial F}{\partial z} = $ ` -1 `

Then we compute the velocity: $$\frac{d {\mathbf x}}{dt} = \begin{pmatrix} \frac{dx}{dt} \\\frac{dy}{dt} \\\frac{dz}{dt} \end{pmatrix}$$ where as a function of $ t$ :

 * $\frac{dx}{dt} = $ ` -sin(t) `
 * $\frac{dy}{dt} = $ ` cos(t) `

The value of $\frac{dz}{dt}$ can be determined because it is the only unknown quantity in the equation $$\frac{dF}{dt} = 0$$ So the answer can be expressed as a function of $ t$ :

<div style="text-align: center">

$\frac{d z}{d t} = $ ` -4sin(2t)+3cos(t) `

</div>

</div>

##### Question 5

<div class="how_qb">

Consider the curve $$z = 4\,{x}^{2}+2\,x+2\,y$$ Using the chain rule, or otherwise (at your peril), calculate $\frac{d z}{d t}$ as a function of $t$ , where $x = \cos(t)$ and $y = \sin(t)$

<div style="text-align: center">

$\frac{dz}{d t} = $ ` -4sin(2t)-2sin(t)+2cos(t) `

</div>
</div>

##### Question 6

?>_随机题！需要补全题目才可出答案！_

<div class="how_qb">

Consider the hyperbolic paraboloid $z=x^2 - y^2 $

<div style="text-align: center">

 ![logo](./file/HyperbolicParaboloid.svg.png)

</div>

A drone is programmed to fly along the surface of the hyperbolic paraboloid. The flight instruments measure the velocity in the $ x,y$ and $ z$ directions as

<div style="text-align: center">

 $\frac{dx}{dt} =$ <input style="width: 30px" v-model="i9" v-on:input="calsq4()"> $\quad \frac{dy}{dt} =$ <input style="width: 30px" v-model="i10" v-on:input="calsq4()"> $ \quad \frac{dz}{dt} =$ <input style="width: 30px" v-model="i11" v-on:input="calsq4()">

</div>

The GPS measures  $x=$ <input style="width: 30px" v-model="i12" v-on:input="calsq4()">  , but the GPS does not measure $ y$  (to keep costs down). What is the $ y $ co-ordinate? The chain rule can tell us! It's


<div style="text-align: center">

 $y = $ <code>{{a9}}</code>

</div>
</div>

---

### Calc1231W1T4 - The Wave Equation

##### Question 1

 _video_

##### Question 2

<div class="how_qb">

Given a function, it is relatively easy to find the partial derivatives. For example suppose $u(x,t)  = \sin(x+ct)$ then

<div style="text-align: center">

$\frac{\partial u}{\partial t} = $ `c*cos(x+ct)` and $\frac{\partial u}{\partial x} = $ ` cos(c*t+x) `

</div>

We say this function $ u$ **satisfies**, or **is a solution to**, the differential equation

<div style="text-align: center">

$\frac{\partial u}{\partial t} - c\frac{\partial u}{\partial x} = $ ` 0 `

</div>

Similarly, if $v(x,t) = \sin(x-ct)$ then

<div style="text-align: center">

$\frac{\partial v}{\partial t} = $ ` -c*cos(-c*t+x) ` and $\frac{\partial v}{\partial x} = $ ` cos(-c*t+x) `

</div>

So this function $ v$ satisfies the differential equation

<div style="text-align: center">

$\frac{\partial v}{\partial t} + c\frac{\partial v}{\partial x} = $ ` 0 `

</div>

</div>


##### Question 3

<div class="how_qb">

Suppose $u(x,t) = \sin(x + ct) $ where $ c$ is a constant. There are four possible derivatives of order two. These are

 * $\frac{{\partial}^2 u}{{\partial t}^2} = $ ` -c^2*sin(x+ct) `
 * $\frac{{\partial}^2 u}{\partial t \partial x} = $ ` -c*sin(x+ct) `
 * $\frac{{\partial}^2 u}{\partial x \partial t} = $ ` -c*sin(x+ct) `
 * $\frac{{\partial}^2 u}{{\partial x}^2} = $ ` -sin(x+ct) `

So this function satisfies a very famous partial differential equation, which originated from the study of a vibrating string on a musical instrument, called the one dimensional wave equation:

<div style="text-align: center">

$\frac{{\partial}^2 u}{{\partial t}^2} - c^2 \frac{{\partial}^2 u}{{\partial x}^2} = $ ` 0 `

</div>

The function $v(x,t) = \sin(x-ct)$  is also a solution to this equation. The functions $u(x,t), v(x,t)$ and $u(x,t) + v(x,t)$ are plotted in red, orange and purple in the picture below with $c = 1$

<div style="text-align: center">

 ![logo](./file/W3T4Q1.gif ':size=300')

</div>

Assuming $c > 0$ then the red function $\sin(x+ct)$ is a wave that moves to the <select><option> left </option></select> over time, while the orange function $\sin(x-ct)$ is a wave that moves to the <select><option> right </option></select> over time. The sum of the left and right moving waves is the standing wave $\sin(x+ct)+\sin(x-ct)$ in purple.


</div>


##### Question 4

?>_随机题！需要补全题目才可出答案！_

<div class="how_qb">

The function $u(x,t) = e^{i(x + ct)}$ is another solution to the wave equation $$\frac{\partial^2 u}{\partial t^2} - c^2 \frac{\partial^2 u}{\partial x^2} = 0$$

Let's investiage the case when  $c=$ <input style="width: 30px" v-model="i13" v-on:input="calsq4()"> $+$ <input style="width: 30px" v-model="i14" v-on:input="calsq4()"> $i$  .  Then

 * The real part of  $u$  is <code> exp(-{{i14}}t)*cos(x+{{i13}}t) </code>
 * The imaginary part of  $u$  is <code> exp(-{{i14}}t)*sin(x+{{i13}}t) </code>

So the function oscillates in the complex plane, but these oscillations are dampened by the exponential term. As time goes on

<div style="text-align: center">

 $ \lim\limits_{t\to\infty} u(x,t) = $ `0`

</div>

</div>

</div>

##### Question 5

<div class="how_qb">

Consider $u(x,t) = \cos(x + ct)$ and $v(x,t) = \cos(x-ct)$ . Then

 * $\frac{\partial^2 u}{{\partial t}^2}= $ ` -c^2*cos(x+ct) `
 * $\frac{\partial^2 u}{{\partial x}^2}= $ ` -cos(x+ct) `
 * $\frac{\partial^2 v}{{\partial t}^2}= $ ` -c^2*cos(x-ct) `
 * $\frac{\partial^2 v}{{\partial x}^2}= $ ` -cos(x-ct) `

These functions are both solutions to the one-dimensional wave equation because $$\frac{\partial^2 u}{\partial t^2} - c^2 \frac{\partial^2 u}{\partial x^2} = 0$$ and $$\frac{\partial^2 v}{\partial t^2} - c^2 \frac{\partial^2 v}{\partial x^2} = 0$$ The functions $u(x,t),v(x,t)$and$u(x,t) + v(x,t)$are plotted in red, orange and purple below with $c=1$

<div style="text-align: center">

 ![logo](./file/W3T4Q4.gif ':size=300')

</div>


</div>

##### Question 6

<div class="how_qb">

We have seen that the one-dimensional wave equation has lots of possible solutions. In fact there is a whole vector subspace of solutions (you may like to prove this). We can narrow down the range of possible solutions by adding extra conditions that the function must satisfy. These are usually called initial conditions.

For example, suppose that $u(x,t)$ satisfies the one-dimensional wave equation: $$\frac{\partial^2 u}{{\partial t}^2} - c^2\frac{\partial^2 u}{{\partial x}^2} = 0$$ In addition, suppose $ u(x,t)$ satisfies the initial conditions:

<div style="text-align: center">

 $u(x,0) = f(x)$ and $\frac{\partial u}{\partial t}(x,0) = g(x)$

</div>

In 1746, [Jean-Baptiste le Rond d'Alembert![logo](../../../../../../logosvg01.svg)](https://en.wikipedia.org/wiki/Jean-Baptiste_le_Rond_d%27Alembert) discovered that there is only one possible solution which satisfies these conditions: $$\displaystyle u(x,t) = \frac{1}{2}\left(f(x-ct) + f(x+ct)\right) + \frac{1}{2c}\int\limits_{x-ct}^{x+ct}g(s) ds. $$

<div style="text-align: center">

 ![logo](./file/Alembert.jpg)<br>Jean-Baptise le Rond d'Alembert (1717 -1783)

</div>

For example, if we have the wave equation with $c=1$: $$\frac{\partial^2 u}{{\partial t}^2} - \frac{\partial^2 u}{{\partial x}^2} = 0$$ and initial conditions $f(x) = \sin(x)$ and $g(x) = \cos(x)$ then

<div style="text-align: center">

  $\displaystyle\int\limits_{x-ct}^{x+ct}g(s) ds = \int\limits_{x-t}^{x+t}\cos(s) ds = $ ` sin(x+t)-sin(x-t) `

</div>

So by d'Alembert's formula, the solution is

<div style="text-align: center">

  $u(x,t) = $ ` sin(x+t) `

</div>

</div>

---

### Maple1231W1T5 - Maple Revision from Math1131

##### Question 1 & 2

 ![logo](./file/w1t5q1s1.png ':size=500')

##### Question 3 & 4

<div id="t5q3">

?>_随机题！需要补全题目才可出答案！_

<div class="how_qb">

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
