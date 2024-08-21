## Week 6 Algebra

>课程：[数学课程](/DPST1014/) &nbsp; [数学作业](/homework/DPST1014/)

?> mobius: [Week 6 Algebra![logo](../../../../../../logosvg01.svg)](https://unsw.mobius.cloud/1520?gid=5451)

---

### Alg1231W6T1 - Introduction to linear maps

##### Question 1

 _video_

##### Question 2


<div class="how_qb">

Not every function is linear. However, the special class of linear functions turn out to be so useful in practice that it is worth spending an entire chapter studying them (or even [an entire course![logo](../../../../../../logosvg01.svg)](https://www.maths.unsw.edu.au/courses/math2501-linear-algebra)).

Consider two vector space  $V$ and $ W$ , both over the scalar field $ F$ . A function, or map, or transformation $T:V\rightarrow W$ between these vectors spaces is linear if it satisfies both the

<u>**Addition Condition:**</u>

<div style="text-align: center">

$T(\mathbf{v}_1+\mathbf{v}_2)=T(\mathbf{v}_1)+T(\mathbf{v}_2) $ for all $\mathbf{v}_1,\mathbf{v}_2\in V,$

</div>

and the

<u>**Scalar Multiplication Condition:**</u>

<div style="text-align: center">

$T(\lambda\mathbf{v})=\lambda T(\mathbf{v})$ for all $\mathbf{v}\in V$ and all scalars $\lambda\in F$

</div>

Below is a list of equations of the form $$S(u+v)=S(u)+S(v)$$

ranging over quite a few different contexts. Which of these equations are valid? In these cases  $S$ is said to satisfy the addition condition.


|||
|:--|:--|
|<input type="checkbox" disabled checked> $\displaystyle\int_0^1 \big(f(x)+g(x)\big) dx = \displaystyle\int_0^1 f(x)\,dx +\displaystyle\int_0^1g(x)\,dx$<br><input type="checkbox" disabled> $\vert \mathbf{x}+\mathbf{y}\|=\vert \mathbf{x}\vert+\vert\mathbf{y}\|$<br><input type="checkbox" disabled checked> $\mathbf{a}\cdot (\mathbf{y}+\mathbf{z})=\mathbf{a}\cdot \mathbf{y}+\mathbf{a}\cdot\mathbf{z} $<br><input type="checkbox" disabled> $\sqrt{x+y}=\sqrt{x}+\sqrt{y}$<br><input type="checkbox" disabled checked> $\mathbf{a}\times (\mathbf{y}+\mathbf{z})=\mathbf{a}\times \mathbf{y}+\mathbf{a}\times\mathbf{z} $|<input type="checkbox" disabled>$e^{x+y}=e^{x}+e^{y}$<br><input type="checkbox" disabled>$\ln(x+y)=\ln(x)+\ln(y)$<br><input type="checkbox" disabled>$\sin(x+y)=\sin(x)+\sin(y)$<br><input type="checkbox" disabled>$(x+y)^2=x^2+y^2$<br><input type="checkbox" disabled checked> $\displaystyle\frac{d}{dx}\big(f(x)+g(x)\big)=\frac{df(x)}{dx} +\frac{dg(x)}{dx}.$|

<div style="background-color: rgb(230, 230, 250);">

**Note:** $\mathbf{a}\cdot\mathbf{x}$ above refers to the dot product and  $\mathbf{a}\times\mathbf{x}$ refers to the cross product.

</div>

Below is a list of equations of the form $$S(\lambda u)=\lambda S(u).$$

Which of these equations are valid? In these cases $S$ is said to satisfy the scalar multiplication condition.

|||
|:--|:--|
|<input type="checkbox" disabled checked>$\displaystyle\int_0^1 \lambda f(x)\,dx = \lambda \int_0^1f(x)\,dx$<br><input type="checkbox" disabled>$\sin(\lambda x)=\lambda \sin(x)$<br><input type="checkbox" disabled>$\|\lambda\mathbf{x}\|=\lambda\|\mathbf{x}\|$|<input type="checkbox" disabled checked>$\frac{d(\lambda f)}{dx}=\lambda \frac{df}{dx}$ <br><input type="checkbox" disabled checked> $\mathbf{a}\cdot(\lambda\mathbf{x}) =\lambda(\mathbf{a}\cdot\mathbf{x}).$<br><input type="checkbox" disabled>$e^{\lambda x}=\lambda e^x$|

</div>

 ![logo](./file/w6t1q1s1.png ':size=400')
 
##### Question 3

 ![logo](./file/w6t1q2s1.png ':size=400')

 ![logo](./file/w6t1q2s2.png ':size=400')


##### Question 4

?>_随机题！需要补全题目才可出答案！_

<div id="t1q3">

<div class="how_qb">

One of the lovely properties of a linear map  $T$ on a vector space like $\mathbb{R}^n$ (distinguishing it from other arbitrary functions) is that we only need to know what  $T$ does to a small number of linearly independent vectors to define the entire map.

For example, consider a linear map  $T$ from $\mathbb{R}^2$ to $\mathbb{R}^3$ , where we know

<div style="text-align: center">

$T(\begin{pmatrix} 1 \\ 0 \end{pmatrix}) =  <$ <input style="width: 30px" v-model="i1" v-on:input="calsq1()"> , <input style="width: 30px" v-model="i2" v-on:input="calsq1()"> , <input style="width: 30px" v-model="i3" v-on:input="calsq1()"> $>$ and $T(\begin{pmatrix} 0 \\ 1 \end{pmatrix}) =  <$ <input style="width: 30px" v-model="i4" v-on:input="calsq1()"> , <input style="width: 30px" v-model="i5" v-on:input="calsq1()"> , <input style="width: 30px" v-model="i6" v-on:input="calsq1()"> $>$

</div>

Then it would be easy to work out the value of  $T(<$ <input style="width: 30px" v-model="i7" v-on:input="calsq1()"> , <input style="width: 30px" v-model="i8" v-on:input="calsq1()"> $>)$  since this must be equal to the linear combination

<div style="text-align: center">

<code> {{i7}} </code> $T(\begin{pmatrix} 1 \\ 0 \end{pmatrix})+$ <code> {{i8}} </code> $T(\begin{pmatrix} 0 \\ 1 \end{pmatrix}).$

</div>

Using this idea we calculate that

<div style="text-align: center">

$T(<$ {{i7}} , {{i8}} $>) =$ <code> {{a1}} </code>

</div>

</div>


</div>

##### Question 5

?>_随机题！需要补全题目才可出答案！_

<div id="t1q4">

<div class="how_qb">

Let $\{\mathbf{v}_1,\mathbf{v}_2\}$  be linearly independent vectors in a real vector space  $V$  and let $\mathbf{v}_3=2\mathbf{v}_1+\mathbf{v}_2$ . Consider a map  $T$  where we know

<div style="text-align: center">

$T(\mathbf{v}_1)=  <$ <input style="width: 30px" v-model="i1" v-on:input="calsq1()"> , <input style="width: 30px" v-model="i2" v-on:input="calsq1()"> $>$ and $T(\mathbf{v}_2)=  <$ <input style="width: 30px" v-model="i4" v-on:input="calsq1()"> , <input style="width: 30px" v-model="i5" v-on:input="calsq1()"> $>$

</div>

**i)** If we assume  $T$ is a linear map, then we can calculate

<div style="text-align: center">

 $T(\mathbf{v}_3)=$ <code> {{a1}} </code>

</div>

<div style="background-color: rgb(230, 230, 250);">

**Note:** the Maple notation for the vector $\begin{pmatrix} 1 \\ 2 \end{pmatrix}$ is  **< 1,2 >**.

</div>

**ii)** Subsequently we are told that $T(\mathbf{v}_3)=\begin{pmatrix} 0 \\ 8 \end{pmatrix}$ ? Is this consistent with our assumption that  $T$ was a linear map? <select><option> No. </option></select>


</div>



##### Question 6

<div class="how_qb">

Let  $F(t)$ be a function of $t \gt 0$ . The Laplace Transform of $ F$ is a new function in the variable $ s:$ $$\mathcal{L}(F) = f(s) = \displaystyle\int\limits_0^\infty e^{-st} F(t)\,dt$$

The Laplace transform is a linear map between the vector space of functions in  $t$ to the vector space of functions in  $s$. Let's prove that it satisfies the properties required of a linear transformation.There are two conditions to be satisfied.

Consider $ F(t)$ and  $G(t)$ . We have $$\mathcal{L}(F+G)=\displaystyle\int\limits_0^\infty (F(t)+G(t))e^{-st} dt. $$

Now because <select><option> the integral of a sum of the integrals </option></select> the right hand side can be rewritten as $$\mathcal{L}(F+G)=\displaystyle\int\limits_0^\infty F(t)e^{-st} dt+\displaystyle\int\limits_0^\infty G(t)e^{-st} dt, $$ and by definition of the Laplace Transform this is equivalent to

 - [ ] $\mathcal{L}(F+G)=\mathcal{L}(F)\times\mathcal{L}(G) $
 - [x] $\mathcal{L}(F+G)=\mathcal{L}(F)+\mathcal{L}(G)$
 - [ ] $\mathcal{L}(F+G)=\mathcal{L}(F)-\mathcal{L}(G) $
 - [ ] $\mathcal{L}(F+G)=\mathcal{L}(F\times G). $

Hence the Laplace transform satisfies the <select><option> addition condition </option></select> .

Now consider $F(t)$ and $\lambda\in\mathbb{R}$ . We have $$\mathcal{L}(\lambda F)=\displaystyle\int\limits_0^\infty \lambda F(t)e^{-st}dt.$$

Since <select><option> constant factor out of integrals </option></select> the right hand side can be rearranged as $$\mathcal{L}(\lambda F)=\lambda\displaystyle\int\limits_0^\infty F(t)e^{-st}dt.$$

By the definition of the Laplace Transform this is equivalent to

 * [ ] $\mathcal{L}(\lambda F)= \mathcal{L}(F)+\mathcal{L}(G)$
 * [x] $\mathcal{L}(\lambda F)=\lambda \mathcal{L}(F) $
 * [ ] $\mathcal{L}(\lambda F)= \mathcal{L}(\lambda)+\mathcal{L}(F) $
 * [ ] $\mathcal{L}(\lambda F)= \lambda+\mathcal{L}(F). $

 Hence the Laplace Transform also satisfies the <select><option> scalar multiplication condition </option></select> , and we can conclude that the Laplace Transform is a linear map. So linear transformations also play an important role in calculus.


</div>

---

!>因为这周的时候我事儿有点多所以就没弄完哈哈哈，所以下半部分还是保留原来的版本

### Alg1231W6T2 - Linear maps

##### Question 1

 ![logo](./file/w6t2q1s1.png ':size=400')

##### Question 2

 ![logo](./file/w6t2q2s1.png ':size=400')

##### Question 3

 ![logo](./file/w6t2q3s1.png ':size=400')


##### Question 4

 * $S(\begin{pmatrix} 1 \\0 \end{pmatrix})=$ ` <-2,-1> `
 * $S(\begin{pmatrix} 0 \\1 \end{pmatrix})=$ ` <1,-1> `
 * $S(\begin{pmatrix} 1 \\1 \end{pmatrix})=$ ` <-1,-2> `
 * $S(\begin{pmatrix} \frac12 \\ \frac32 \end{pmatrix} )=$ ` <1/2,-2> `
 * <input type="radio" checked disabled>  3


##### Question 5

?>_随机题！需要补全题目才可出答案！_

<div style="background-color: rgb(245 245 245)">

 $\mathbf n_{OC} = \begin{pmatrix} 240 \\ 75 \\65 \end{pmatrix}, \mathbf n_{VC} = \begin{pmatrix} 260 \\ 60 \\70 \end{pmatrix}, \mathbf n_{P} = \begin{pmatrix} 250 \\ 55 \\ 70 \end{pmatrix} $

</div>

 * $\alpha=$ ` 1/2 ` , $\beta=$ ` 1/3 ` , $\gamma=$ ` 4/15 `

 * $A( $ <input style="width: 70px" v-model="i6" v-on:input="calsq1()">  $ ) =$ **复制到Maple出答案 →** `<<0, 5, 0> | <25, 1, 5> | <25, 20, 38>>.<`<code>{{i6}}</code>`>`

 * $ A^{-1}\mathbf n_{P} = $ ` Vector[column](3, [6.7, 9.4, 0.61]) `
 * $ A^{-1}\mathbf n_{PN} = $ ` Vector[column](3, [19., 3.8, 0.15]) `



</div>


### Alg1231W6T3 - Linear transformations through pictures

##### Question 1 ~ 3

?>_随机题！需要补全题目才可出答案！_


<div id="t3q1">

<div style="background-color: rgb(245 245 245)">

we find that $S(\overrightarrow {OA})=($ <input style="width: 30px" v-model="i1" v-on:input="calsq1()"> $,$ <input style="width: 30px" v-model="i2" v-on:input="calsq1()"> $)$ and $S(\overrightarrow {OB})=($ <input style="width: 30px" v-model="i3" v-on:input="calsq1()"> $,$ <input style="width: 30px" v-model="i4" v-on:input="calsq1()"> $)$ . It follows that

</div>

 * $S(\overrightarrow {OC})=$ <code> {{a1}} </code>
 * $S(\overrightarrow {OD})=$ <code> {{a2}} </code>
 * $S(\overrightarrow {OE})=$ <code> {{a3}} </code>



##### Question 4

?>_随机题！需要补全题目才可出答案！_


 * $K=$ ` <<-2,-1>|<-1,1>> `
 * $v=<$ <input style="width: 30px" v-model="i5" v-on:input="calsq2()"> $,$ <input style="width: 30px" v-model="i6" v-on:input="calsq2()"> $>$ to $U(\mathbf v)=$ <code> {{a4}} </code>

</div>


##### Question 5

 * <select disabled><option> linear </option></select>
 * $R(\begin{pmatrix} 1 \\ 1 \end{pmatrix}) = $ ` <0,3> ` and $R(\begin{pmatrix} 1 \\ -1 \end{pmatrix})=$ ` <2,1> `
 * $a=$ ` 1 ` $, b=$ ` -1 `
 * $c=$ ` 2 ` $, d=$ ` 1 `
 * - [x] $5X^2-2XY+2Y^2=9$
   - [x] $\left(\frac{X}{3}+\frac{Y}{3}\right)^2+\left(\frac{-2X}{3}+\frac{Y}{3}\right)^2=1$


### Alg1231W6T4 - Reflections

##### Question 1

 ![logo](./file/w6t4q1s1.png ':size=400')

##### Question 2

 ![logo](./file/w6t4q2s1.png ':size=400')

##### Question 3

 ![logo](./file/w6t4q3s1.png ':size=400')

##### Question 4

 ![logo](./file/w6t4q4s1.png ':size=400')

##### Question 5

 ![logo](./file/w6t4q5s1.png ':size=400')



### Maple1231W7T5 - 3D Geometry

##### Question 1

?>_随机题！需要补全题目才可出答案！_

<div id="t5q1">

<div style="background-color: rgb(245 245 245)">

 * **输入题目最下面提供的两行Maple**

Note: To avoid typos, you may copy the following to your Maple worksheet and copy the answers from your Maple worksheets to the above answer boxes.

第一行: <input style="width: 80%" v-model="i1" v-on:input="calsq1()">

第二行: <input style="width: 80%" v-model="i2" v-on:input="calsq1()">

</div>

 * 第一题需要Maple出答案：<code> with(LinearAlgebra): CrossProduct({{a1}}); </code>

 * 第二题需要Maple出答案：<code> {{a2}}; </code>

 * 第三题需要Maple出答案：<code> {{a3}}; </code>

 * 第四题需要Maple出答案：<code> Norm({{a4}}, 2); </code>



##### Question 2

 * <input type="radio" checked disabled> sphere(S, [A, r]);

##### Question 3

?>_随机题！需要补全题目才可出答案！_


<div style="background-color: rgb(245 245 245)">

Given the three points A( <input style="width: 50px" v-model="i3" v-on:input="calsq2()"> ), B( <input style="width: 50px" v-model="i4" v-on:input="calsq2()"> ) and C( <input style="width: 50px" v-model="i5" v-on:input="calsq2()"> ) let L1 be the line through A and B and let L2 be the line through C parallel to $($ <input style="width: 50px" v-model="i6" v-on:input="calsq2()"> $)^T$.  Find the distance between L1 and L2.  Exact the exact value of the distance in the box below.

</div>

 * 需要Maple出答案：<code> with(geom3d): distance(line(AB, [point(A, [{{i3}}]), point(B, [{{i4}}])]), line(CD, [point(C, [{{i5}}]), [{{i6}}]])); </code>

##### Question 4

?>_随机题！需要补全题目才可出答案！_


<div style="background-color: rgb(245 245 245)">

Given the three points A( <input style="width: 50px" v-model="i6" v-on:input="calsq3()"> ), B( <input style="width: 50px" v-model="i7" v-on:input="calsq3()"> ), C( <input style="width: 50px" v-model="i8" v-on:input="calsq3()"> ), let:

 * S1 be the sphere with centre A and radius <input style="width: 30px" v-model="i10" v-on:input="calsq3()">,
 * L2 be the line through A parallel to ( <input style="width: 50px" v-model="i9" v-on:input="calsq3()"> )

</div>


 * **(i)** 需要Maple出答案：<code> with(geom3d): detail(intersection(P, sphere(S, [point(A, [{{i6}}]), {{i10}}]), sphere(T, [point(B, [{{i7}}]), point(C, [{{i8}}])]))); </code> 


  **复制coordinates of the center后面的数据**

<div style="background-color: rgb(245 245 245)">

先输入 **(i)** 的答案：<input style="width: 80%" v-model="i11" v-on:input="calsq3()">

</div>

 * **(ii)** 需要Maple出答案：<code> with(geom3d): evalf(FindAngle(line(L1, [point(B, [{{i7}}]), point(E, {{i11}})]), line(L2, [point(A, [{{i6}}]), [{{i9}}]]))); </code>

 * **(iii)** 需要Maple出答案：<code> with(geom3d): distance(line(L1, [point(B, [{{i7}}]), point(E, {{i11}})]), line(L2, [point(A, [{{i6}}]), [{{i9}}]])); </code>

##### Question 5

?>_随机题！需要补全题目才可出答案！_


<div style="background-color: rgb(245 245 245)">

Given the three points A( <input style="width: 50px" v-model="i12" v-on:input="calsq4()"> ), B( <input style="width: 50px" v-model="i13" v-on:input="calsq4()"> ), C( <input style="width: 50px" v-model="i14" v-on:input="calsq4()"> ), let:

 * L1 be the line through A parallel to <input style="width: 50px" v-model="i15" v-on:input="calsq4()">,
 * P be the plane through B with normal ( <input style="width: 50px" v-model="i16" v-on:input="calsq4()"> )

</div>


 * **(i)** 需要Maple出答案：<code> with(geom3d): evalf(FindAngle(line(L1, [point(A, [{{i12}}]), [{{i15}}]]), plane(P, [point(B, [{{i13}}]), [{{i16}}]]))); </code>
 * **(ii)** 要Maple出答案：<code> with(geom3d): detail(sphere(S, [point(A, [{{i12}}]), point(B, [{{i13}}]), point(C, [{{i14}}]), intersection(E, line(L1, [point(A, [{{i12}}]), [{{i15}}]]), plane(P, [point(B, [{{i13}}]), [{{i16}}]]))])); </code>


  **复制coordinates of the center后面的数据**

<div style="background-color: rgb(245 245 245)">

先输入 **(ii)** 的答案：<input style="width: 80%" v-model="i17" v-on:input="calsq3()">

</div>

 * **(iii)** 需要Maple出答案：<code> with(geom3d): distance(point(A, [{{i12}}]), line(L2, [point(C, [{{i14}}]), point(F, {{i17}})])); </code>



</div>

<script>


  new Vue({
    el: '#t3q1',
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
        this.a1 = "<"+(parseInt(this.i1)+parseInt(this.i3))+","+(parseInt(this.i2)+parseInt(this.i4))+">";
        this.a2 = "<"+(0.5*parseInt(this.i1)+1.5*parseInt(this.i3))+","+(0.5*this.i2+1.5*parseInt(this.i4))+">";
        this.a3 = "<"+(parseInt(this.i1)*0.875+parseInt(this.i3)*1.5)+","+(this.i2*0.875+parseInt(this.i4)*1.5)+">";
      },
      calsq2() {
        this.a4 = "<"+(parseInt(this.i5*-2)+parseInt(this.i6*-1))+","+(parseInt(this.i5*-1)+parseInt(this.i6*1))+">";
      }
    }
  }); 

  new Vue({
    el: '#t5q1',
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
        this.a1 = "<"+this.i1+">,<"+this.i2+">";
        this.a2 = "<"+this.i1+">.<"+this.i2+">";
        this.a3 = "<"+this.i1+">.<"+this.i1+">";
        this.a4 = "<"+this.i1+">";

      },
      calsq2() {
        
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
        i6:'0,0,0',
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
        this.a1 = "<"+(this.i1*2+parseInt(this.i4))+","+(this.i2*2+parseInt(this.i5))+">";
      },
      calsq2() {

      }
    }
  });


  new Vue({
    el: '#t1q3',
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
        this.a1 = "<"+(this.i7*this.i1+parseInt(this.i8*this.i4))+","+(this.i7*this.i2+parseInt(this.i8*this.i5))+","+(this.i7*this.i3+parseInt(this.i8*this.i6))+">";
      },
      calsq2() {

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

