!>请以unsw学校官网为准，这里只提供参考！ 

>如信息有问题，请立即[与我联系](/help/?id=关于我)！

# Maple Test vip冲刺包

>课程：[数学课程](/DPST1013/) &nbsp; [数学作业](/homework/DPST1013/)

## 一、题目在哪？

 - Question Bank (包含所有题): [Online Tutorial Lab Test questions ![logo](../../../../../logosvg01.svg)](https://unsw.mobius.cloud/1179/4489/assignments/23509)
 - 模拟考：[Online Tutorial Lab Test (practice version) ![logo](../../../../../logosvg01.svg)](https://unsw.mobius.cloud/1179/4489/assignments/23481)

 - Maple Lab Test (正式考试 _周四OTH开启_)：[Maple Lab Test ![logo](../../../../../logosvg01.svg)](https://unsw.mobius.cloud/1179/4489/assignments/26398)


---

## 二、考前须知


!> **声明：** <br>1. 本页链接我并未公开，**请不要将这个链接发给任何人！！！** 如果别人需要这个请让本人直接联系我，谢谢！若违反被我发现，我会锁小黑屋的！<br>2. **请不要宣传！**若被学校发现并受到的不良影响将由你自行承担！<br>3. 本页只是一个辅助工具，我不保证本页的内容及答案完全正确，请自行辨别！

 - 请考前完成以下步骤，如有问题微信联系我：
   * ① 至少完整完成一遍[Online Tutorial Lab Test questions ![logo](../../../../../logosvg01.svg)](https://unsw.mobius.cloud/1179/4489/assignments/23509)，熟悉所有题型。
   * ② 至少完成2到3遍[Online Tutorial Lab Test (practice version) ![logo](../../../../../logosvg01.svg)](https://unsw.mobius.cloud/1179/4489/assignments/23481)，练习找题和刷题速度。
 
 - 请在考试前把问题都解决了，考试的时候我不一定有空回信息。
 - 写完后如果还有时间，建议从头再检验一下！

如果继续阅读本页以下内容，则表示你已经知晓并同意上述内容。

---

## 三、题目

##### Question 1

<div id="t1q2">

<!-- panels:start -->
<!-- div:left-panel -->



**题目：**

<div class="qu">

Find a decimal approximation to

 <input style="width: 30px" v-model="i1" v-on:input="calsq1()"> <input style="width: 30px" v-model="i2" v-on:input="calsq1()"> $($ <input style="width: 30px" v-model="i3" v-on:input="calsq1()"> $)$

correct to  <input style="width: 30px" v-model="i4" v-on:input="calsq1()">  significant figures and enter your answer in the box below.

</div>

_这题需要Maple_

**橙色区域完整复制到Maple出答案：**

<div class="AnMaple">

 {{a1}}


</div>


<!-- div:right-panel -->

**例题：**

![logo](./file/q1.png ':size=500')

![logo](./file/q1m.png ':size=500')

<!-- panels:end -->

---

##### Question 2 ~ 3

<!-- panels:start -->
<!-- div:left-panel -->


**题目：**

<div class="qu">

Find, to 10 significant figures, the unique turning point  $x_0$  of

$f(x) = $ <input style="width: 80%" v-model="i5" v-on:input="calsq2()">

in the interval [ <input style="width: 30px" v-model="i6" v-on:input="calsq2()"> , <input style="width: 30px" v-model="i7" v-on:input="calsq2()"> ] and enter it in the box below.


</div>

_这题需要Maple_

**橙色区域完整复制到Maple出答案：**

<div class="AnMaple">

 {{a2}}


</div>

<!-- div:right-panel -->

**例题：**

![logo](./file/q2.png ':size=500')

![logo](./file/q2m.png ':size=500')

<!-- panels:end -->

---

##### Question 4

<!-- panels:start -->
<!-- div:left-panel -->


**题目：**

<div class="qu">

Suppose

$ x^4 + x^2 (y - 1)^2 + y^4 = 4 $ 

determines $ y$  as a function of $ x$ .  Assuming that the Maple command

eqn := x^4 + x^2*(y-1)^2 + y^4 = 4;

has been executed, which of the following Maple expressions would find $ \frac{dy}{dx}$ ?

</div>

**答案：**

 <input type="radio" checked disabled> implicitdiff(eqn,y,x);

<!-- div:right-panel -->

**例题：**

![logo](./file/q4.png ':size=500')


<!-- panels:end -->

---

##### Question 5 ~ 8

<!-- panels:start -->
<!-- div:left-panel -->

**题目：**

 - The Maple expression for the $e^x$ is `exp(x)`
 - The Maple expression for the constant $ \pi $ is `Pi`
 - The Maple expression for $ \infty $ is `infinity`
 - The Maple expression for the inverse tan of x is `arctan(x)`
 - The Maple expression for the imaginary unit (square root of -1) is `I`
 - The Maple expression for cosec(x) is `csc(x)`
 - The Maple expression for the inverse cot of x is `arccot(x)`

<div class="qu">

 Evaluate, to 10 significant figures,

 $ \displaystyle\int_{B}^A \frac{  C  }{  D  } dx $<br>【补全：$A=$ <input style="width: 60px" v-model="i8" v-on:input="calsq3()"> , $B=$ <input style="width: 60px" v-model="i9" v-on:input="calsq3()"> ,<br> $C=$ <input style="width: 80%" v-model="i10" v-on:input="calsq3()"> ,<br> $D=$ <input style="width: 80%" v-model="i11" v-on:input="calsq3()"> 】

and enter your answer in the box below.

</div>

_这题需要Maple_

**橙色区域完整复制到Maple出答案：**

<div class="AnMaple">

 {{a3}}


</div>


 
<!-- div:right-panel -->

**例题：**

![logo](./file/q5.png ':size=500')

![logo](./file/q5m.png ':size=500')


<!-- panels:end -->

---

##### Question 9

<!-- panels:start -->
<!-- div:left-panel -->

**题目：**

<div class="qu">

 Find

 $\displaystyle\lim_{n\to\infty} ( n^{A}\prod_{k=B}^n \frac{C}{D} ) $<br>【补全：$A=$ <input style="width: 60px" v-model="i12" v-on:input="calsq4()"> , $B=$ <input style="width: 60px" v-model="i13" v-on:input="calsq4()"> ,<br> $C=$ <input style="width: 80%" v-model="i14" v-on:input="calsq4()"> ,<br> $D=$ <input style="width: 80%" v-model="i15" v-on:input="calsq4()"> 】

 _若上方方程显示错位可参考此图_<br>![logo](./file/q9e.png ':size=200')

and enter your answer in the box below.  You must enter the exact result in Maple syntax.

</div>

_这题需要Maple_

**橙色区域完整复制到Maple出答案：**

<div class="AnMaple">

 {{a4}}


</div>


 
<!-- div:right-panel -->

**例题：**

![logo](./file/q9.png ':size=500')

![logo](./file/q9m.png ':size=500')


<!-- panels:end -->

---

##### Question 10

<!-- panels:start -->
<!-- div:left-panel -->

**题目：**

<div class="qu">

 Find

 $ \displaystyle\lim_{k\to\infty}\left(\sum_{n=A}^{k} \frac{B}{C}\right) $<br>【补全：$A=$ <input style="width: 60px" v-model="i16" v-on:input="calsq5()"> ,<br> $B=$ <input style="width: 80%" v-model="i17" v-on:input="calsq5()"> ,<br> $C=$ <input style="width: 80%" v-model="i18" v-on:input="calsq5()"> 】

 _若上方方程显示错位可参考此图_<br>![logo](./file/q10e.png ':size=200')

 and enter your answer in the box below.  You must enter the exact result in Maple syntax.

</div>

_这题需要Maple_

**橙色区域完整复制到Maple出答案：**

<div class="AnMaple">

 {{a5}}


</div>


 
<!-- div:right-panel -->

**例题：**

![logo](./file/q10.png ':size=500')

![logo](./file/q10m.png ':size=500')


<!-- panels:end -->


</div>

---

##### Question 11

<div id="t1q3">

<!-- panels:start -->
<!-- div:left-panel -->

**题目：**

<div class="qu">

 Find approximations to all 5 roots of the polynomial

 $ p(z) = $ <input style="width: 80%" v-model="i1" v-on:input="calsq1()"> 】

and enter them in the box below.   Your approximations should be correct to 10 significant figures.

You must enter the roots as a Maple list, that is, enclosed in square brackets.  For example, a typical answer would be similar to:

[-.8724241534, -.1573479856-.7588819850\*I, -.1573479856+.7588819850\*I, .7991119175, 2.388008207]

_(注意审题！！！)_

</div>

_这题需要Maple_

**橙色区域完整复制到Maple出答案：**

<div class="AnMaple">

 {{a1}}


</div>


 
<!-- div:right-panel -->

**例题：**

![logo](./file/q11.png ':size=500')

![logo](./file/q11m.png ':size=500')


<!-- panels:end -->


---

##### Question 12


<!-- panels:start -->
<!-- div:left-panel -->

**题目：**

<div class="qu">

 Find approximations to all 5 roots of the polynomial

 $ p(z) = $ <input style="width: 80%" v-model="i2" v-on:input="calsq2()"> 】

and enter a decimal approximation to the `largest principal argument`_(注意审题)_ in the box below.  Your approximation should be correct to 10 significant figures. 

</div>

_这题需要Maple_

**橙色区域完整复制到Maple出答案：**

<div class="AnMaple">

 {{a2}}


</div>


 
<!-- div:right-panel -->

**例题：**

![logo](./file/q12.png ':size=500')

![logo](./file/q12m.png ':size=500')


<!-- panels:end -->

---

##### Question 13


<!-- panels:start -->
<!-- div:left-panel -->

**题目：**

<div class="qu">

 Find approximations to all 5 roots of the polynomial

 $ p(z) = $ <input style="width: 80%" v-model="i3" v-on:input="calsq3()"> 】

and enter a decimal approximation to the `largest modulus` _(注意审题)_ in the box below.  Your approximation should be correct to 10 significant figures.

</div>

_这题需要Maple_

**橙色区域完整复制到Maple出答案：**

<div class="AnMaple">

 {{a3}}


</div>


 
<!-- div:right-panel -->

**例题：**

![logo](./file/q13.png ':size=500')

![logo](./file/q13m.png ':size=500')


<!-- panels:end -->

---

##### Question 14


<!-- panels:start -->
<!-- div:left-panel -->

**题目：**

<div class="qu">

To answer this question you need to create a Maple function using Maple's arrow (->) notation.

Your function should take a Maple list of complex numbers as its input and return the `largest modulus` _(注意审题)_ from that list.

Enter your function in the box below.

</div>

**答案：**

 - `x->(max(map(abs,x)))`


 
<!-- div:right-panel -->

**例题：**

![logo](./file/q14.png ':size=500')


<!-- panels:end -->

---

##### Question 15


<!-- panels:start -->
<!-- div:left-panel -->

**题目：**

<div class="qu">

To answer this question you need to create a Maple function using Maple's arrow (->) notation.

Your function should take a Maple list of real numbers as its input and return the `smallest cosine` _(注意审题)_ from that list.

Enter your function in the box below.

</div>

**答案：**

 - `x->(min(map(cos,x)))`


 
<!-- div:right-panel -->

**例题：**

![logo](./file/q15.png ':size=500')


<!-- panels:end -->

---

##### Question 16


<!-- panels:start -->
<!-- div:left-panel -->

**题目：**

<!-- tabs:start -->

#### **题目**

<div class="qu">

Plot the graph y = f(x) for

$f(x) = \frac{2240 x^8+10240 x^7-15120 x^6-129024 x^5-91560 x^4+387800 x^3+728875 x^2+428750 x}{17920 x^2+17920}$

How many many stationary points does f have in the interval [-10,10]?  Enter your answer in the box below.

To avoid typing errors you can copy and paste the following Maple command.

<input style="width: 80%" v-model="i4" v-on:input="calsq4()">

_粘贴类似这样的内容：<br>f := (2240*x^8+10240*x^7-15120*x^6-129024*x^5-91560*x^4+387800*x^3+728875*x^2+428750*x)/(17920*x^2+17920);_

</div>

_这题需要Maple_

**橙色区域完整复制到Maple出答案：**

<div class="AnMaple">

 {{a4}}


</div>

#### **解析**

 - 这题需要看有几个转折点:
   * 图一答案为3。<br>![logo](./file/q16a1.png ':size=300')
   * 图二答案为5。<br>![logo](./file/q16a2.png ':size=300')

 

<!-- tabs:end -->




 
<!-- div:right-panel -->

**例题：**

![logo](./file/q16.png ':size=500')

![logo](./file/q16m.png ':size=500')


<!-- panels:end -->

---

##### Question 17 ~ 21


<!-- panels:start -->
<!-- div:left-panel -->

**题目：**

<div class="qu">

Select the option below which is the plot of the polar curve

$r = $ <input style="width: 80%" v-model="i5" v-on:input="calsq5()">

</div>

_这题需要Maple_

**橙色区域完整复制到Maple出答案：**

<div class="AnMaple">

 {{a5}}


</div>


 
<!-- div:right-panel -->

**例题：**

![logo](./file/q17.png ':size=500')

![logo](./file/q17m.png ':size=500')


<!-- panels:end -->

---

##### Question 22


<!-- panels:start -->
<!-- div:left-panel -->

**题目：**

<!-- tabs:start -->

#### **题目**

<div class="qu">

Plot the two curves defined by

<input style="width: 80%" v-model="i6" v-on:input="calsq6()">

and

<input style="width: 80%" v-model="i7" v-on:input="calsq6()">

and find the number of intersections of these curves in the square

$-10 ≤ x ≤ 10$ ,  $-10 ≤ y ≤ 10$

Enter the number of intersections in the box below.

</div>

_这题需要Maple_

**橙色区域完整复制到Maple出答案：**

<div class="AnMaple">

 {{a6}}


</div>

#### **解析**

 - 这题需要看两个函数的相交点，比如说图一就是1个相交点（答案：1），比如说图二是2个相交点（答案：2），比如说图三4个相交点（答案：4）
   * 此图答案为1。<br>![logo](./file/q22a1.png ':size=300')
   * 此图答案为2。<br>![logo](./file/q22a2.png ':size=300')
   * 此图答案为4。<br>![logo](./file/q22a3.png ':size=300')

 

<!-- tabs:end -->


 
<!-- div:right-panel -->

**例题：**

![logo](./file/q22.png ':size=500')

![logo](./file/q22m.png ':size=500')


<!-- panels:end -->

---

##### Question 23


<!-- panels:start -->
<!-- div:left-panel -->

**题目：**

<div class="qu">

Use Maple's piecewise function to create the expression


$\displaystyle\begin{cases}
   A & x < A_1  \\
   B & x < B_1 \\
   C & otherwise
\end{cases}$

【补充：$A=$ <input style="width: 60px" v-model="i8" v-on:input="calsq7()"> , $A_1=$ <input style="width: 60px" v-model="i9" v-on:input="calsq7()">,<br>$B=$ <input style="width: 60px" v-model="i10" v-on:input="calsq7()"> ,$B_1=$ <input style="width: 60px" v-model="i11" v-on:input="calsq7()">,<br>$C=$ <input style="width: 60px" v-model="i12" v-on:input="calsq7()">   】

and enter your Maple expression in the box below.

</div>

 - <code>{{a7}}</code>


 
<!-- div:right-panel -->

**例题：**

![logo](./file/q23.png ':size=500')


<!-- panels:end -->

</div>

---

##### Question 24

<div id="t5q3">

<!-- panels:start -->
<!-- div:left-panel -->

**题目：**

<div class="qu">

Let $ \mathbf u = \ \begin{pmatrix} u_1 \\ u_2 \\ u_3  \end{pmatrix}$ and $ \mathbf v = \ \begin{pmatrix} v_1 \\ v_2 \\ v_3  \end{pmatrix}$ <br> 【补齐：$u_1=$ <input style="width: 30px" v-model="i1" v-on:input="calsq1()"> , $u_2=$ <input style="width: 30px" v-model="i2" v-on:input="calsq1()"> , $u_3=$ <input style="width: 30px" v-model="i3" v-on:input="calsq1()"> , $v_1=$ <input style="width: 30px" v-model="i4" v-on:input="calsq1()"> , $v_2=$ <input style="width: 30px" v-model="i5" v-on:input="calsq1()"> , $v_3=$ <input style="width: 30px" v-model="i6" v-on:input="calsq1()">  】

</div>

 - (a) $\mathbf u \cdot \mathbf v = $ <code>{{a1}}</code>
 - (b) The area of the parallelogram spanned by   $ u $   and  $ v $  is <code>{{a2}}</code>


 
<!-- div:right-panel -->

**例题：**

![logo](./file/q24.png ':size=500')


<!-- panels:end -->

---

##### Question 25

<!-- panels:start -->
<!-- div:left-panel -->

**题目：**

<div class="qu">

**The Mean Value Theorem**. Suppose that  $f $ is continuous on  $[a,b]$   and differentiable on  $(a,b)$  . Then there is at least one real number  $c$    in  $(a,b)$  such that

$\dfrac{f(b)-f(a)}{b-a}=f'(c).$

Find the **real** number  $c$  which satisfies the conclusion of the Mean Value Theorem for

$f(x) =$ ....

on the interval $[$ <input style="width: 30px" v-model="i8" v-on:input="calsq2()">  $,$ <input style="width: 30px" v-model="i9" v-on:input="calsq2()"> $]$.


You may copy and paste

<input style="width: 80%" v-model="i7" v-on:input="calsq2()"> 

into your Maple window for calculation. Copy the answer you got from Maple and paste it in the answer area. Use preview to make sure that you have copied the answer correctly.

</div>

_这题需要Maple_

**橙色区域完整复制到Maple出答案：**

<div class="AnMaple">

 {{a3}}


</div>



 
<!-- div:right-panel -->

**例题：**

![logo](./file/q25.png ':size=500')

![logo](./file/q25m.png ':size=500')


<!-- panels:end -->

</div>


---

##### Question 26

<div id="t5q4">

<!-- panels:start -->
<!-- div:left-panel -->

**题目：**

<div class="qu">

 Let $ \mathbf a = \ \begin{pmatrix} a_1 \\ a_2 \\ a_3  \end{pmatrix}$ and $ \mathbf v = \ \begin{pmatrix} v_1 \\ v_2 \\ v_3  \end{pmatrix}$ <br> 【补齐：$a_1=$ <input style="width: 30px" v-model="i4" v-on:input="calsq1()"> , $a_2=$ <input style="width: 30px" v-model="i5" v-on:input="calsq1()"> , $a_3=$ <input style="width: 30px" v-model="i6" v-on:input="calsq1()"> , $v_1=$ <input style="width: 30px" v-model="i1" v-on:input="calsq1()"> , $v_2=$ <input style="width: 30px" v-model="i2" v-on:input="calsq1()"> , $v_3=$ <input style="width: 30px" v-model="i3" v-on:input="calsq1()">  】

</div>

 - $\text{proj}_{\mathbf v} \mathbf a = \ $ <code>{{a1}}</code>

 - <code>{{a2}}</code>


 
<!-- div:right-panel -->

**例题：**

![logo](./file/q26.png ':size=500')


<!-- panels:end -->

---

##### Question 27


<!-- panels:start -->
<!-- div:left-panel -->

**题目：**

<div class="qu">

 <br> **1.粘贴题目里的Maple代码** <br> <input style="width: 80%" v-model="i9" v-on:input="calsq2()"><br> _粘贴类似这样的内容：<br>A := Matrix([[3, 3, 7, 6, 1, 8, 5, 3, 4, 4, 7], [2, 9, 9, 2, 8, 7, 1, 2, 4, 2, 5], [7, 9, 9, 8, 3, 9, 4, 9, 8, 1, 4], [3, 5, 3, 5, 8, 2, 8, 9, 9, 9, 1], [6, 4, 6, 2, 7, 9, 9, 6, 9, 2, 5], [5, 8, 9, 3, 3, 6, 3, 6, 8, 5, 9], [8, 7, 8, 5, 7, 6, 4, 5, 2, 9, 4], [5, 6, 7, 4, 9, 7, 5, 4, 4, 6, 1], [7, 6, 5, 6, 1, 6, 2, 2, 3, 1, 1], [1, 6, 7, 3, 5, 9, 4, 9, 3, 1, 8]]);_<br><br> **2.补全题目：** Use Maple to create the vector $b$ that is column <input style="width: 30px" v-model="i10" v-on:input="calsq2()"> from A and the matrix C that is made from columns <input style="width: 30px" v-model="i11" v-on:input="calsq2()"> to <input style="width: 30px" v-model="i12" v-on:input="calsq2()"> and <input style="width: 30px" v-model="i13" v-on:input="calsq2()"> to <input style="width: 30px" v-model="i14" v-on:input="calsq2()"> of A (in the same order as the columns of A).<br><br>and enter the <input style="width: 30px" v-model="i15" v-on:input="calsq2()"> th component of the unique vector solution for $x$ in the box below.  (Your answer should be an exact fraction, not a decimal.)

</div>

_这题需要Maple_

**橙色区域完整复制到Maple出答案：**

<div class="AnMaple">

 {{a3}}


</div>


 
<!-- div:right-panel -->

**例题：**

![logo](./file/q27.png ':size=500')

![logo](./file/q27m.png ':size=500')


<!-- panels:end -->


</div>

 - 写完后如果还有时间，建议从头再检验一下！

<details>
  <summary>(　o=^•ェ•)o <em>我这个东西怎么样呀~ 嘿嘿嘿嘿 </em></summary>
  <img src="/homework/DPST1013/work/work04/../../../../../file/wxzsqr.jpg" data-origin="../../../../../file/wxzsqr.jpg" alt="logo" width="400">
</details>

<style>
.qu {
  background: rgba(66,185,131,0.1);
  border-radius: 2px;
  padding: 1rem;
}
.AnMaple {
  background: rgba(255 135 12 / 10%);
  border-radius: 2px;
  padding: 1rem;
}
</style>

<script>

  new Vue({
    el: '#t5q4',
    // Options...
    data () {
      return {
        i1:17,
        i2:94,
        i3:26,
        i4:131,
        i5:439,
        i6:212,
        i7:0,
        i8:0,
        i9:0,
        i10:3,
        i11:1,
        i12:2,
        i13:4,
        i14:11,
        i15:8,
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

        var va = this.i1*this.i4+this.i2*this.i5+this.i3*this.i6;
        var v = Math.sqrt(this.i1*this.i1+this.i2*this.i2+this.i3*this.i3);
        var rate = va/Math.pow(v,2);
        this.a1 = "<"+ rate*this.i1+","+ rate*this.i2+","+ rate*this.i3+">";
        var xv = Math.sqrt(Math.pow(this.i2*this.i6-this.i3*this.i5,2)+Math.pow(this.i3*this.i4-this.i1*this.i6,2)+Math.pow(this.i1*this.i5-this.i2*this.i4,2));
        this.a2 = xv/v;

      },
      calsq2() {
        var text = this.i9.replaceAll(" ","").replaceAll("例如：","").replaceAll("=","").replaceAll(":","").replaceAll(";","").replaceAll("A","");

        this.a3 = "with(LinearAlgebra);`&darr; &darr; &darr;答案在此 - (￣&dtri;￣)~*&darr; &darr; &darr;`;Matrix((MatrixInverse("+text+"[1 .. 10, ["+this.i11+" .. "+this.i12+", "+this.i13+" .. "+this.i14+"]]) . ("+text+")[1 .. 10, "+this.i10+"]))["+this.i15+"];`&uarr; &uarr; &uarr; 答案在此 - (￣&dtri;￣)~* &uarr; &uarr; &uarr;`;";
      }
    }
  }); 


  new Vue({
    el: '#t5q3',
    // Options...
    data () {
      return {
        i1:3,
        i2:24,
        i3:16,
        i4:54,
        i5:-3,
        i6:520,
        i7:'x^4-12*x^3+56*x^2-120*x+81',
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
        this.a1 = this.i1*this.i4+this.i2*this.i5+this.i3*this.i6;
        this.a2 = Math.sqrt(Math.pow(this.i2*this.i6-this.i3*this.i5,2)+Math.pow(this.i3*this.i4-this.i1*this.i6,2)+Math.pow(this.i1*this.i5-this.i2*this.i4,2))
      },
      calsq2() {
        var ap = this.i7.replaceAll("x",this.i8);
        var bp = this.i7.replaceAll("x",this.i9);
        this.a3 = "with(RealDomain);solve(diff("+this.i7+", x) = (("+bp+") - ("+ap+"))/("+this.i9+" - "+this.i8+"));";
      }
    }
  }); 

  new Vue({
    el: '#t1q3',
    // Options...
    data () {
      return {
        i1:'z^5 - 5*z^3 + 3*z + 4',
        i2:'z^5 + 2*z^4 + 5*z^3 - 2',
        i3:'z^5 + 4*z^4 - z + 4',
        i4:'f := (2240x^8+10240x^7-15120x^6-129024x^5-91560x^4+387800x^3+728875x^2+428750x)/(17920*x^2+17920);',
        i5:'3*sin(theta) - cos(4*theta)',
        i6:'-x*y^2 + 4*x = 5',
        i7:'1/3*x^3 + y^2 = 1',
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
        this.a1 = "[fsolve("+this.i1+", complex)];";
      },
      calsq2() {
        this.a2 = "max(argument~([fsolve("+this.i2+", complex)]));"
      },
      calsq3() {
        this.a3 = "max(abs~([fsolve("+this.i3+", complex)]));"
      },
      calsq4() {
        var text = this.i4.replaceAll(" ","").replaceAll("例如：","").replaceAll("=","").replaceAll(":","").replaceAll(";","").replaceAll("A","").replaceAll("f","");
        this.a4 = "plot("+text+", x = -10 .. 10, y = -50 .. 50);";
      },
      calsq5() {
        this.a5 = "with(plots);polarplot("+this.i5+");";
      },
      calsq6() {
        this.a6 = "with(plots);implicitplot(["+this.i6+","+this.i7+"], x = -10 .. 10, y = -10 .. 10, scaling = constrained, color = [blue, green]);";
      },
      calsq7() {
        this.a7 = "piecewise(x < "+this.i9+","+this.i8+",x < "+this.i11+","+this.i10+","+this.i12+")";
      }
    }
  });

  new Vue({
    el: '#t1q2',
    // Options...
    data () {
      return {
        i1:100,
        i2:'sin',
        i3:45,
        i4:38,
        i5:'5*sin(1/2*x^2) - sin(x)^2',
        i6:1,
        i7:2,
        i8:'infinity',
        i9:0,
        i10:'exp(-x)*cos(x^2/2)',
        i11:'3 + x',
        i12:'13/2',
        i13:1,
        i14:'2*k',
        i15:'2*k + 13',
        i16:1,
        i17:1,
        i18:'3*n + k/5',

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
        this.a1 = "evalf("+this.i1+"*"+this.i2+"("+this.i3+"), "+this.i4+");";
      },
      calsq2() {
        this.a2 = "x[0] := fsolve(diff("+this.i5+", x), x, "+this.i6+" .. "+this.i7+");evalf(subs(x = x[0], diff("+this.i5+", x, x)));";
      },
      calsq3() {
        this.a3 = "evalf(int(("+this.i10+")/("+this.i11+"), x = "+this.i9+" .. "+this.i8+"));";
      },
      calsq4() {
        this.a4 = "limit(n^("+this.i12+")*product(("+this.i14+")/("+this.i15+"), k = "+this.i13+" .. n), n = infinity);";
      },
      calsq5() {
        this.a5 = "evalf(limit(sum(("+this.i17+")/("+this.i18+"), n = "+this.i16+" .. k), k = infinity));";
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