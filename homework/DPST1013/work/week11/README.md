!>请以unsw学校官网为准，这里只提供参考！ 

>如信息有问题，请立即[与我联系](/help/?id=关于我)！

# Week 11

>数学一共需要做11个Week的作业，且取8个Week作为总成绩的12%（取分数最高的8个Week，这个指的是一个week中的总成绩，并不是某个week的其中一个课题(是所有课题哦！！！！)。所以我建议最好做满分吧！）

>课程：[数学课程](/DPST1013/) &nbsp; [数学作业](/homework/DPST1013/)

## 一、题目在哪？

  * [mobius - Week 11 ![logo](../../../../../logosvg01.svg)](https://unsw.mobius.cloud/1179?gid=4501)


## 二、如果你实在不会，可能这些能帮助到你：

### Alg1131W11T1 - Matrix arithmetic

##### Question 1

?>_随机题！需要补全题目才可出答案！_

<div id="t1q2">

 - <select disabled><option selected > 3 × 4 </option></select>  <select disabled><option selected > 3 × 4 </option></select>
 - * [x] $4 \times 3$
   * [x] $4 \times 8$
 - <select disabled><option selected > m × p </option></select>
 - If $\begin{pmatrix} x & A & x \\ x & B & C \end{pmatrix}+\begin{pmatrix} x & x & x \\ x & x & D \end{pmatrix}=\begin{pmatrix} x & a & x \\ x & x & b \end{pmatrix}$<br>【补全：$A=$ <input style="width: 30px" v-model="i1" v-on:input="calsq1()"> , $B=$ <input style="width: 30px" v-model="i2" v-on:input="calsq1()"> , $C=$ <input style="width: 30px" v-model="i3" v-on:input="calsq1()"> , $D=$ <input style="width: 30px" v-model="i4" v-on:input="calsq1()">】<br> then  $a=$ <code>{{a1}}</code>  and $b=$ <code>{{a2}}</code>

 - If $\begin{pmatrix}x & C \\ x & x \\ A & x \end{pmatrix}+\begin{pmatrix}x & D \\ x & x \\ c & x\end{pmatrix}=\begin{pmatrix}x & d \\ x & x \\ B & x\end{pmatrix}$<br>【补全：$A=$ <input style="width: 30px" v-model="i5" v-on:input="calsq1()"> , $B=$ <input style="width: 30px" v-model="i6" v-on:input="calsq1()"> , $C=$ <input style="width: 30px" v-model="i7" v-on:input="calsq1()"> , $D=$ <input style="width: 30px" v-model="i8" v-on:input="calsq1()">】<br> then  $c=$ <code>{{a3}}</code>  and $d=$ <code>{{a4}}</code>

 - If $\begin{pmatrix} A & B & C\end{pmatrix}\begin{pmatrix}D \\ E \\ F\end{pmatrix}=\begin{pmatrix} e \end{pmatrix}$<br> 【补全：$A=$ <input style="width: 30px"> , $B=$ <input style="width: 30px" v-model="i9" v-on:input="calsq1()"> , $C=$ <input style="width: 30px" v-model="i10" v-on:input="calsq1()"> , $D=$ <input style="width: 30px"> , $E=$ <input style="width: 30px" v-model="i11" v-on:input="calsq1()"> , $F=$ <input style="width: 30px" v-model="i12" v-on:input="calsq1()">】<br> $e =$ <code>{{a5}}</code>

 - If $\begin{pmatrix}A_1 & A_2 & A_3 \\ A_4 & A_5 & A_6 \end{pmatrix}\begin{pmatrix} B_1 & g \\ B_3 & B_4 \\ B_5 & B_6 \end{pmatrix}=\begin{pmatrix} C_1 & C_2 \\ f & C_4 \end{pmatrix}$<br> 【补全： $A_4=$ <input style="width: 30px" v-model="i16" v-on:input="calsq1()"> , $A_5=$ <input style="width: 30px" v-model="i17" v-on:input="calsq1()"> , $A_6=$ <input style="width: 30px" v-model="i18" v-on:input="calsq1()">, $B_1=$ <input style="width: 30px" v-model="i19" v-on:input="calsq1()">, $B_3=$ <input style="width: 30px" v-model="i20" v-on:input="calsq1()">, $B_4=$ <input style="width: 30px" v-model="i21" v-on:input="calsq1()">, $B_5=$ <input style="width: 30px" v-model="i22" v-on:input="calsq1()">, $B_6=$ <input style="width: 30px" v-model="i23" v-on:input="calsq1()">, $C_4=$ <input style="width: 30px" v-model="i24" v-on:input="calsq1()">】<br> $f =$ <code>{{a6}}</code> and $g=$ <code>{{a7}}</code>

  - <select disabled><option selected > identity matrix </option></select>


</div>

##### Question 2

Consider the matrices $A=\begin{pmatrix} 0 & 3 & -4 \\ -4 & -4 & -3 \end{pmatrix} B=\begin{pmatrix} 3 & -4 \\ 3 & -2 \\ -1 & 4 \end{pmatrix} C=\begin{pmatrix} 4 & -12 & 2\\ 1 & 3 & 8 \end{pmatrix}$ and $D=\begin{pmatrix} 6 & 4 & 2\\ -1 & -1 & 0\\ 2 & 0 & 4 \end{pmatrix}$


 - * [x] A + C
   * [x] C - A

 - * [x] AB
   * [x] DB
   * [x] CD
   * [x] D(2B)

 - In the previous collection of product matrices, exactly one product is a $2 \times 2$ matrix. That product is explicitly the matrix `<<-6|-2>,<10|8>>` . _$( A \times B )$_


##### Question 3

If $A=\begin{pmatrix} -2 & -2 \\ 2 & -1 \end{pmatrix}$ then 

 - $A^2 =$ `<<0|6>,<-6|-3>>`
 - $A^3 =$ `<<12|-6>,<6|15>>`

##### Question 4

 - <select disabled><option selected > a Tesla </option></select>

##### Question 5

Consider $B=\begin{pmatrix} 1 & 4 \\ 1 & 0 \\ -3 & -4 \end{pmatrix} C=\begin{pmatrix} 0 & -4 & 1 \\ 2 & 1 & -3 \end{pmatrix}$ and $ D=\begin{pmatrix} 4 & -2 & 3\\ 3 & 3 & -3 \\ 0 & 2 & 4 \end{pmatrix}$

Then we can compute that

 - $BC-D^2={}$ `<<-2|8|-41>,<-21|-1|13>,<-14|-6|-1>>`

---

### Alg1131W11T2 - A quadratic matrix identity

##### Question 1

 - $\begin{pmatrix} a & 0 \\ 0 & d \end{pmatrix}\begin{pmatrix}x & 0 \\ 0 & w\end{pmatrix}={}$ `<<a*x|0>,<0|d*w>>`
 - $\begin{pmatrix} a & 0 \\ 0 & a \end{pmatrix}\begin{pmatrix}x & 0 \\ 0 & x\end{pmatrix}={}$ `<<a*x|0>,<0|a*x>>`
 - $I={}$ `<<1|0>,<0|1>>`

##### Question 2

For the matrix $\begin{pmatrix} -1 & 4 \\ -4 & -2 \end{pmatrix}$ , we compute that

 - $A^2={}$ `<<0|-40>,<40|-16>>`

Hence we can write $A^2$ in terms of  $A$  and $I=\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ as: <br> $A^2=r_1 A + s_1 I$

where $r_1={}$ `-8` and $s_1={}$ `40`

This formula allows us to write  $A^4$  in terms of as  $A$  and  $I$  as: <br> $A^4=r_2 A + s_2 I$

where $r_2={}$ `128` and $s_2={}$ `-960`

##### Question 3

 - [x] $B^3 = -I$
 - [x] $B^4 = -B$
 - [x] $B^6 = I$

##### Question 4

Consider the matricies $A=\begin{pmatrix}0 & 1 \\ 1 & 0 \end{pmatrix}$ , and $B=\begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$ and $I=\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ . Then: 

 - the smallest positive integer  $n$  such that $A^n=I$ is `2`
 - the smallest positive integer  $n$  such that $B^n=I$ is `4`

Geometrically the transformation $\begin{pmatrix} x \\ y \end{pmatrix}\mapsto A\begin{pmatrix} x \\ y \end{pmatrix} $ is

 - <input type="radio" disabled checked> a reflection in the line  $y=x$

Geometrically the transformation $\begin{pmatrix} x \\ y \end{pmatrix}\mapsto B\begin{pmatrix} x \\ y \end{pmatrix} $ is

 - <input type="radio" disabled checked> a rotation by  $-90^\circ $ .

We can also compute:

 - $AB={}$ `<<-1|0>,<0|1>>` and
 - $BA={}$ `<<1|0>,<0|-1>>` .

Hence we are reminded that matrix multiplication is <select disabled><option selected > not commutative </option></select>

##### Question 5

 - In general $F_n$ is the <select disabled><option selected > top right </option></select>

 - where $r={}$ `1` and $s={}$ `1`

 - $A^4={}$ `<<5|3>,<3|2>>`
 - $A^8={}$ `<<34|21>,<21|13>>`
 - From $A^8={}$ , we see $F_8$ is `21`. Similarly we can find $F_{32}={}$ `2178309`

---

### Alg1131W11T3 - Matrix commutation identity

##### Question 1

$A=\begin{pmatrix} 1 & 2 \\ -3 & -1 \end{pmatrix}$ and $B=\begin{pmatrix} 5 & -3 \\ 1 & 2 \end{pmatrix}$

 - then $AB={}$ `<<7|1>,<-16|7>>` and $BA={}$ `<<14|13>,<-5|0>>` showing that indeed <select disabled><option selected > AB doesn't always equal BA </option></select>

And what about associativity? This does hold for addition of matrices, but what about multiplication? If

$C=\begin{pmatrix} 0 & -1 \\ 2 & 5 \end{pmatrix}$

 - then $(AB)C=$ `<<2|-2>,<14|51>>` . In addition $BC=\begin{pmatrix} -6 & -20 \\ 4 & 9 \end{pmatrix}$ , and so $A(BC)=$ `<<2|-2>,<14|51>>`

 - This supports our understanding that <br> <input type="radio" disabled checked> yes, associativity of matrix multiplication does hold

##### Question 2

<div id="t3q2">

?>_随机题！需要补全题目才可出答案！_

Consider the $ 2\times 2$ matrices

$I=\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ and $J=\begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$

They satisfy the properties that

 - $I^2={}$ <select disabled><option selected > I </option></select>
 - $J^2={}$ <select disabled><option selected > -I </option></select>
 - $IJ={}$ <select disabled><option selected > J </option></select>
 - $JI={}$ <select disabled><option selected > J </option></select>

Do these relations look familiar? They sure do: they are exactly the same relations satisfied by

 - <input type="radio" disabled checked> the complex numbers  $1$  and  $i$

It follows that the  $2\times 2$  matrices contain the arithmetic of complex numbers!

So for example the complex number  <input style="width: 30px" v-model="i1" v-on:input="calsq1()"> $+$ <input style="width: 30px" v-model="i2" v-on:input="calsq1()"> $i$  would correspond to the matrix <code> <<{{i1}}|{{i2}}>,<{{i2*-1}}|{{i1}}>> </code> .

##### Question 3

?>_随机题！需要补全题目才可出答案！_

Consider the $ 2\times 2$ matrices

$I=\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ and $K=\begin{pmatrix} 0 & 1 \\ 2 & 0 \end{pmatrix}$ 

They satisfy the properties that

 - $I^2={}$ <select disabled><option selected > I </option></select>
 - $K^2={}$ <select disabled><option selected > 2I </option></select>
 - $IK={}$ <select disabled><option selected > K </option></select>
 - $KI={}$ <select disabled><option selected > K </option></select>

Do these relations look familiar? They sure do: they are exactly the same relations satisfied by

 - <input type="radio" disabled checked> the real numbers $1$ and  $\sqrt{2}$

It follows that the  $2\times 2$  matrices contain the arithmetic of certain kinds of irrational numbers!

So for example the number  <input style="width: 30px" v-model="i3" v-on:input="calsq1()"> $+$ <input style="width: 30px" v-model="i4" v-on:input="calsq1()"> $\sqrt{2}$  would correspond to the matrix <code> <<{{i3}}|{{i4}}>,<{{i4*2}}|{{i3}}>> </code> .

</div>

##### Question 4

Suppose that $A=\begin{pmatrix} a  & b \\ c & d \end{pmatrix}$ is a $2 \times 2$  matrix with the property that $AX=XA$ for any $2\times 2$ matrix $X$ . We say that $A$ **commutes** with any other matrix $X$ .

Looking at the special case $X=\begin{pmatrix}1 & 0 \\ 0 & 0 \end{pmatrix}$ , we can deduce that <select disabled><option selected > b=0 </option></select> as well as <select disabled><option selected > c=0 </option></select>

Looking at another special case $X=\begin{pmatrix}0 & 1 \\ 0 & 0 \end{pmatrix}$, we can conclude (again) that <select disabled><option selected > c = 0 </option></select> as well as <select disabled><option selected > a = d </option></select>

Putting these two facts together, we deduce that  $A$  must have a rather special form. Give a non-zero example of such a matrix  $A$ , whose elements are chosen from the set  $\{0,3,7\}$

 - $A={}$ `<<3|0>,<0|3>>`

##### Question 5

 - In quantum mechanics,  $2 \times 2$   matrices play a big role. In particular the theory of electron spin uses the **Pauli matrices**

 $X=\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, Y=\begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}, Z=\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}, $

where  $i$ is the usual complex number satisfying $i^2=-1$ .

Then we can check that:

 - $X^2={}$ `1`
 - $Y^2={}$ `1`
 - $Z^2={}$ `1`

We can also observe that:

 - $XY={}$ <select disabled><option selected > iZ </option></select>
 - $YX={}$ <select disabled><option selected > -iZ </option></select>
 - $YZ={}$ <select disabled><option selected > iX </option></select>
 - $ZY={}$ <select disabled><option selected > -iX </option></select>
 - $ZX={}$ <select disabled><option selected > iY </option></select>
 - $XZ={}$ <select disabled><option selected > -iY </option></select>


---

### Calc1131W11T4 - Improper integrals

##### Question 1

One kind of improper integral occurs when we integrate a function over an infinite region, going to infinity. If the function decays fast enough then the total area under its graph can still be finite.

Consider the function $y=\frac{1}{x^3}$

By experimenting with the slider, the integer value  $Sn$  for which $\displaystyle\int_1^n \frac{1}{x^3}dx$ 

 - is closest to $0.45$ is $n={}$ `3`
 - is closest to $0.487$ is $n={}$ `6`

As  $n$ increases, the value of the integral $\displaystyle\int_1^\infty \frac{1}{x^3}dx$ appears to approach `0.5`

We can verify this algebraically by first computing a finite integral, namely

 - $\displaystyle\int_1^R \frac{1}{x^3} dx = $ `1/2(1-1/R^2)`

Now as we take the limit of this expression we get

 - $\displaystyle\int_1^\infty \frac{1}{x^3} dx = \lim_{R\rightarrow\infty}\int_1^R \frac{1}{x^3} dx = $ `0.5`

This is a special case of the  $p$-integral $\displaystyle\int_1^\infty \frac{1}{x^p} dx $ ,  which converges to a finite value precisely when <select disabled><option selected > p > 1 </option></select> .

##### Question 2

 - $\displaystyle\int_0^\infty e^{-5 x} dx= $ `0.2`

 - $\displaystyle\int_1^\infty x e^{-5 x} dx= $ `6/(25*e^5)`

 - $\displaystyle\int_0^\infty \frac{1}{4+x^2} dx= $ `Pi/4`

##### Question 3

Consider the function $y=\frac{1}{x}$

By experimenting with the sliders, we see that an integer value  $n$  for which $\displaystyle\int_1^n \frac{1}{x}dx$

 - is close to $ 6 $ is  $n= $ `401`
 - is close to $ 9 $ is  $n= $ `8001`
 - is close to $ 181 $ is  $n= $ `4*10^78`

 As  $n$  increases, the value of the integral  $\displaystyle\int_1^\infty \frac{1}{x}dx$ appears to be <select disabled><option selected > undfined </option></select>. 

We can verify this algebraically by first computing a finite integral, namely

 - $\displaystyle\int_1^R \frac{1}{x} dx = $ `ln(R)`

Now as we take the limit of this expression we get

 - $\displaystyle\int_1^\infty \frac{1}{x} dx = \lim_{R\rightarrow\infty}\int_1^R \frac{1}{x} dx = $ <select disabled><option selected > undfined </option></select>.

This is a special case of the  $p$-integral $\displaystyle\int_1^\infty \frac{1}{x^p} dx $ which converges to a finite value precisely when <select disabled><option selected > p > 1 </option></select>

##### Question 4

Evaluate the area of the region under the graph $y=\frac{1}{1+x^2}$ . The area is `Pi`

##### Question 5

The volume contained in  $S$  is given by the integral of the cross-sectional area. Namely

$\displaystyle \mathrm{Volume} = \int_1^\infty \pi\,y^2\;dx= \int_1^\infty \frac{\pi}{x^{2p}}\;dx $

 - Our understanding of the convergence of  p -integrals leads us to conclude that the integral for the volume converges precisely when <select disabled><option selected > 2p > 1 </option></select> , in other words when <select disabled><option selected > p>1/2 </option></select>

The surface area of  $S$  is given by the formula

$\displaystyle Surface Area=\int_1^\infty 2\pi y\sqrt{1+\left(\dfrac{dy}{dx}\right)^2}\;dx=\int_1^\infty 2\pi \frac{1}{x^p}\sqrt{1+\frac{p^2}{x^{2p+2}}}\;dx$

Since the integrand can be bounded by

$2\pi\frac{1}{x^{p}}< 2\pi\frac{1}{x^p}\sqrt{1+\frac{p^2}{x^{2p+2}}}\leq 2\pi \frac{1}{x^p}\sqrt{1+p^2}$

 - The integral for the surfarce area converges precisely when <select disabled><option selected > p > 1 </option></select>
 - So, in the case for  $p=1$  , we note that the volume is <select disabled><option selected > finite </option></select> but the surface area is <select disabled><option selected > infinite </option></select> . This is perhaps surprising!

---

### Calc1131W11T5 - Comparison tests

##### Question 1

One of the realities about integration is that if the function we are integrating is complicated enough, then we are very unlikely to be able to integrate it exactly. But in applied mathematics and engineering applications, that difficulty can often be surmounted by numerical approximation. An example might be

$\displaystyle\int_1^\infty \textstyle\frac{1}{\sqrt{x^4+5}}\,dx$

Using the slider, we evaluate the integral $\displaystyle\int_1^R \textstyle\frac{1}{\sqrt{x^4+5}}\,dx$ to have the following approximate values:

 1. $\displaystyle\int_1^4 \textstyle\frac{1}{\sqrt{x^4+5}}\,dx=$ <select disabled><option selected > 0.551 </option></select>
 2. $\displaystyle\int_1^8 \textstyle\frac{1}{\sqrt{x^4+5}}\,dx=$ <select disabled><option selected > 0.676 </option></select>
 3. $\displaystyle\int_1^{10} \textstyle\frac{1}{\sqrt{x^4+5}}\,dx=$ <select disabled><option selected > 0.701 </option></select>
 4. $\displaystyle\int_1^{12} \textstyle\frac{1}{\sqrt{x^4+5}}\,dx=$ <select disabled><option selected > 0.718 </option></select>

So what is our guess to whether the limit of $\displaystyle \lim_{R\rightarrow\infty}\int_1^R \textstyle\frac{1}{\sqrt{x^4+5}}\,dx$

 - I reckon that <select disabled><option selected > the limit exists and is about 0.80 </option></select>

##### Question 2

$\displaystyle\int_1^\infty \frac{1}{x^p}dx$

It helps to remember that if  $1 < x$  and  $0 < p$ , then the bigger $ p $ gets the <select disabled><option selected > smaller </option></select> $\frac{1}{x^p}$ gets, so that it is <select disabled><option selected > more likely </option></select> that $\displaystyle\int_1^\infty \frac{1}{x^p}dx$ converges. In fact this integral converges precisely when <select disabled><option selected > p > 1 </option></select> .

To show that

$\displaystyle\int_1^\infty \frac{1}{\left(1+x^{5}\right)^{1/2}} \,dx$

 - <select disabled><option selected > coverges </option></select> we will compare it to $\displaystyle\int_1^\infty \frac{1}{x^{5/2}} \,dx$ , which we know <select disabled><option selected > coverges </option></select> since it is a  $p$-integral with $p =$ `5/2` $> 1$.

Since $x \geq 1$

$x^5 \leq x^5+1$  implies that <br> $ x^{5/2} \leq \sqrt{x^5+1}$ and hence

$0\leq $ `1/sqrt(x^5+1)` $\leq \frac{1}{x^{5/2}}$

Integrating both sides of this inequality over  $[1,\infty)$  completes the argument.

##### Question 3

To show that

$\displaystyle\int_{2}^\infty \frac{1}{(x^{3}-2)^{1/5}}dx$

 - <select disabled><option selected > diverges </option></select> we will compare it to $\displaystyle\int_{2}^\infty \frac{1}{x^{3/5}}dx$ , which we know <select disabled><option selected > diverges </option></select> since it is a  $p$-integral with $p=$ `3/5` $\leq 1 $.

Since $x\geq 2$,

 $x^{3} -2 \leq x^{3} $ implies that

 $(x^{3}-2)^{1/5} \leq x^{3/5} $ and hence

$0 \leq \frac{1}{x^{3/5}}\leq$ `(x^3-2)^(-1/5)`

Integrating both sides of this inequality over $[2,\infty)$ completes the argument.

##### Question 4

Let's use the limit form of the Comparison test to determine the convergence or divergence of the integral

$\displaystyle\int\limits_0^\infty\textstyle\frac{1}{\left(5 + 4 x^{1/8}\right)^{4}}dx$

If $f(x)=\frac{1}{\left(5 + 4 x^{1/8}\right)^{4}}$ then for $g(x)$ we choose a function of the form $\frac{1}{x^p}$ where $p$ is carefully chosen so that $0 < \displaystyle\lim_{x\rightarrow\infty}\textstyle\frac{x^p}{\left(5 + 4 x^{1/8}\right)^{4}} < \infty $.

 - Such a value $p=$ `4/8`
 - Then 
   * $\displaystyle\int_0^\infty \frac{1}{x^p} dx$ <select disabled><option selected > diverges </option></select> by the  $p$-integral test, and
   * $\displaystyle\lim_{x\rightarrow\infty}\textstyle\frac{x^p}{\left(5 + 4 x^{1/8}\right)^{4}}=$ `1/256`
   * So $\displaystyle\int_0^\infty\textstyle\frac{1}{\left(5 + 4 x^{1/8}\right)^{4}}dx$ <select disabled><option selected > diverges </option></select> by the limit form of the Comparison test.

##### Question 5

Using a Comparison test, we find that:

 - $\displaystyle \int_{1}^{\infty }\! \left( 1+x \right) ^{-2/5}\,{\rm d}x$ <input type="radio" disabled checked> diverges
 - $\displaystyle \int_{1}^{\infty }\!{\frac {{x}^{2}}{ \left( 5+x \right) ^{5}}}\,{\rm d}x$  <input type="radio" disabled checked> coverges
 - $\displaystyle \int_{3}^{\infty }\!{\frac { \left( x-5 \right) ^{4/5}}{ \left( x-2 \right) ^{5/6}}}\,{\rm d}x$  <input type="radio" disabled checked> diverges
 - $\displaystyle \int_{1}^{\infty }\!{\frac {\ln  \left( x \right) }{{x}^{2/5}}}\,{\rm d}x$ <input type="radio" disabled checked> diverges



<script>

  new Vue({
    el: '#t3q2',
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

      },
      calsq2() {

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
        i18:0,
        i19:0,
        i20:0,
        i21:0,
        i22:0,
        i23:0,
        i24:0,

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
        this.a1 = parseInt(this.i1)+parseInt(this.i2);
        this.a2 = parseInt(this.i3)+parseInt(this.i4);
        this.a3 = parseInt(this.i6)-parseInt(this.i5);
        this.a4 = parseInt(this.i7)+parseInt(this.i8);
        this.a5 = parseInt(this.i9*this.i11)+parseInt(this.i10*this.i12);
        this.a6 = parseInt(this.i16*this.i19)+parseInt(this.i17*this.i20)+parseInt(this.i18*this.i22);
        this.a7 = (this.i24 - (parseInt(this.i17*this.i21)+parseInt(this.i18*this.i23)))/this.i16;
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