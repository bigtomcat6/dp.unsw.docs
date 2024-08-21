## Week 3 Calculus

>课程：[数学课程](/DPST1014/) &nbsp; [数学作业](/homework/DPST1014/)

?> mobius: [Week 3 Calculus![logo](../../../../../../logosvg01.svg)](https://unsw.mobius.cloud/1520?gid=5448)

---

### Calc1231W3T1 - Integrals with hyperbolic trig substitution

##### Question 1

 _video_


##### Question 2

<div class="how_qb">

Consider the integral

$$I = \displaystyle \int \frac{1}{\sqrt{{2}^2+x^2}} dx.$$

One method of solving this integral is to use the circle trigonometric substitution

$$x = 2 \tan(u).$$

Since $\frac{dx}{du} = $ ` 2sec(u)^2 ` , we can rewrite this integral as:

$$I = \displaystyle \int \frac{\sec^2(u)}{ \sqrt{1+\tan^2(u)}} du .$$

The reason this substitution works so well is because identity

$$\cos^2(u) + \sin^2(u) = 1$$

can be rearranged (by dividing through by $\cos^2(u)$ to simplify the square root. Thereby, the integral can be evaluated first as a function of $ u$ :

$$I = \ln(\left|\sec(u) + \tan(u)\right|) + C$$

Using a right triangle with angle $ u $ and side lengths $x, 2$ and $\sqrt{(2)^2 + x^2}$  we can evaluate $\tan(u)$ and $\sec(u)$ as a function in terms of the original variable $x$ :

  * $\tan(u) = $ ` x/2 `
  * $\sec(u) = $ ` sqrt(4+x^2)/2 `

So the integral can be expressed in terms of the original variable $x$ as

<div style="text-align: center">

  $I = $ `ln(abs((sqrt(4+x^2)+x)/2))` $+C.$

</div>

</div>
 

##### Question 3

<div class="how_qb">

Consider the integral

$$I = \displaystyle \int \frac{1}{\sqrt{{2}^2+x^2}} dx.$$

But now we try the hyperbolic trigonometric substitution

$$x = 2 \sinh(u).$$

Since  $\frac{dx}{du} = $ ` 2cosh(u) ` , we can rewrite this integral as:

$$I = \displaystyle \int \frac{\cosh(u)}{ \sqrt{1+\sinh^2(u)}} du .$$

The reason this substitution works so well is because the identity

$$\cosh^2(u) - \sinh^2(u) = 1$$

can be rearranged to simplify the square root. The integral can be evaluated first as a function of $u$:

<div style="text-align: center">

  $I = $ ` u `  $ + C.$

</div>

Then as a function in terms of the original variable  $x$:

<div style="text-align: center">

  $I = $ ` arcsinh(x/2) `  $ + C.$

</div>

</div>

##### Question 4

<div class="how_qb">

Here is a table of circle trig substitutions and their equivalent hyperbolic trig substitutions.

|Integral|Circle trig substitution|Hyperbolic trig substitution|
|--|--|--|
|$\displaystyle \int \frac{dx}{\sqrt{a^2-x^2}}$|$x=a\sin(u)$|$x=a\tanh(u)$|
|$\displaystyle \int \frac{dx}{\sqrt{a^2+x^2}}$|$x=a\tan(u)$|$x=a\sinh(u)$|
|$\displaystyle \int \frac{dx}{\sqrt{x^2-a^2}}$|$x=a\sec(u)$|$x=a\cosh(u)$|

It is often simpler to use a substitution involving  cos,sin  or their hyperbolic equivalents  cosh,sinh  rather than using a  tan,sec   or  tanh  substitution. For example, to find the integral

$$I = \displaystyle \int \frac{1}{\sqrt{(3)^2 - x^2}} dx.$$

We prefer to use the circle trig substitution

 $x = $ ` 3sin(u) `

Since $\frac{dx}{du} = $ ` 3cos(u) ` , we can simplify this integral in terms of  u :

$$I = \displaystyle \int \frac{\cos(u)}{\sqrt{1-\sin^2(u)}} du$$

Now use the identity $1 - \sin^2(u) = $ ` cos(u)^2 ` to evaluate this integral first in terms of  $u$ :

<div style="text-align: center">

 $ I = $ ` u ` $ + C.$

</div>

Then in terms of the original variable  $x$ :

<div style="text-align: center">

 $ I = $ ` arcsin(x/3) ` $ + C.$

</div>

</div>

##### Question 5

<div class="how_qb">

Let's see what happens if we were to integrate

$$I = \displaystyle \int \frac{1}{\sqrt{(5)^2 - x^2}} dx$$

using the hyperbolic trig substitution (with variable  $u$ )

<div style="text-align: center">

 $x = $ ` 5tanh(u) `

</div>

Then in terms of the variable  $u$

$$\frac{dx}{du} = 5 \operatorname{sech}^2(u)$$

and the integral becomes

$$ I = \displaystyle \int \operatorname{sech}(u) du $$

To evaluate this integral, we can to use the definition

$$\operatorname{sech}(u) = \frac{1}{\cosh(u)} = \frac{2}{e^u+e^{-u}}$$

and a second substitution

$$ t = e^{u}.$$

Then in terms of the variable  $t$ the integral becomes

$$ I = \displaystyle 2\int\frac{1}{1 + t^2} dt $$

This can be evaluated using a table of standard integrals. First in terms of  $t$ :

<div style="text-align: center">

$I = $ `2arctan(t)` $ + C.$

</div>

Then in terms of  $u$ :

<div style="text-align: center">

$I = $ ` 2arctan(e^u) ` $ + C.$

</div>

Finally, in terms of the original variable  $x$ :

<div style="text-align: center">

$I = $ ` 2arctan(exp(arctanh(x/5))) ` $ + C.$

</div>

</div>

##### Question 6

<div class="how_qb">

An alternative way to evaluate

$$I = \displaystyle \int \operatorname{sech}(u) \,du = \int \frac{1}{\cosh(u)} du $$

is to use another hyperbolic trig substitution

$$t = \sinh(u) $$

where

<div style="text-align: center">

$\frac{dt}{du} = $ ` cosh(u) `

</div>

With this substitution the integral becomes

$$ I = \displaystyle \int g(t) dt $$

where $g(t) = $ ` 1/(1+t^2) ` . Hence we can evaluate  $I$ using the table of standard integrals, first as a function of  $t$ :

<div style="text-align: center">

$I = $ ` arctan(t) ` $ + C$

</div>

Then as a function of the variable  $u$ :

<div style="text-align: center">

$I = $ ` arctan(sinh(u)) ` $ + C$

</div>

</div>

---

### Calc1231W3T2 - Integrals of rational functions

##### Question 1

 _video_


##### Question 2

<div class="how_qb">

The integral of a function of the form

$$I = \displaystyle \int \frac{f^\prime(x)}{f(x)} dx $$

is

$$I = \ln(\left|f(x)\right|)+C.$$

Hence

* $\displaystyle \int \frac{2}{2\,x+3} dx = $ ` ln(abs(2x+3)) ` $ + C$
* $\displaystyle \int \frac{6\,x+5}{3\,{x}^{2}+5\,x+2} dx = $ ` ln(abs(3x^2+5x+2)) ` $ + C$
* $\displaystyle \int \tanh(x) dx = $ ` ln(abs(cosh(x))) ` $ + C$
* $\displaystyle \int \tan(x) dx = $ ` -ln(abs(cos(x))) ` $ + C$

</div>


##### Question 3

<div class="how_qb">

The integral

$$I =\displaystyle \int \frac{1}{(x-2)(x-3)} dx. $$

is not in the form $\displaystyle \int \frac{f^\prime(x)}{f(x)} dx$ , as in the previous questions. But with a bit of algebraic manipulation we can make it into two integrals of this form. This is because $$ \frac{A}{x-2} + \frac{B}{x-3} = \frac{1}{(x-2)(x-3)}. $$

for some constants $A$ and $B$ . Let's find the value of these constants. First multiply both sides of this equation by $(x-2)(x-3)$ . This gives 

<div style="text-align: center">

$A(x-3) + B(x-2) = $ ` 1 `

</div>

 * Setting  $x=2$   in this equation means that  $A = $ ` -1 `
 * Setting  $x=3$   in this equation means that  $B = $ ` 1 `

Now the functions $\frac{A}{x-2}, \frac{B}{x-3}$ are in the required form $\frac{f^\prime(x)}{f(x)}$ . This makes the original integral $I$ easy to calculate as the sum of

 * $\displaystyle A \int \frac{1}{x-2} dx = $ ` -1*ln(abs(x-2)) ` and
 * $ \displaystyle B \int \frac{1}{x-3} dx = $ ` 1*ln(abs(x-3)) `

</div>

##### Question 4


<div class="how_qb">

What about an integral of the form $$I = \displaystyle \int \frac{1}{(x-4)(x-1)^2} dx$$

The plan is the same, but the execution is slightly different. We split up the integrand into three functions that we can integrate individually: $$ \displaystyle\frac{A}{x-4} + \frac{B}{x-1} + \frac{C}{(x-1)^2} = \frac{1}{(x-4)(x-1)^2} $$

where  $A,B$ and  $C$ are constants. If we multiply this equation by  $(x−4)(x−1)2$ then

<div style="text-align: center">

$ A(x-1)^2 + B (x-4)(x-1) + C(x-4) = $ ` 1 `

</div>

Now let's find the values of these constants:

 * Setting  $x=4$  gives $ A=$ ` 1/9 `
 * Setting  $x=1$  gives $ C=$ ` -1/3 `


We have to work a little harder to find  $B$ . Comparing coefficients of  $x^2$  is probably the easiest way of finding  $B$ , since we only have to solve

<div style="text-align: center">

$ A + B =  $ ` 0 `

</div>

so  $B=$ ` -1/9 ` .

Hence our original integral  $I$ is the sum of the three integrals:

 * $A \displaystyle \int \frac{1}{x-4} dx = $ ` 1/9*ln(abs(x-4)) `
 * $B \displaystyle \int \frac{1}{x-1} dx = $ ` -1/9*ln(abs(x-1)) `
 * $C \displaystyle \int \frac{1}{(x-1)^2} dx = $ ` 1/3*1/(x-1) `

</div>

##### Question 5

<div id="t2q4">

?>_随机题！需要补全题目才可出答案！_


<div class="how_qb">

It's not always possible to factorize a quadratic into real linear terms. For example

<div style="text-align: center">

$ p(x) = x^2 +$ <input style="width: 30px" v-model="i1" v-on:input="calsq1()"> $x +$ <input style="width: 30px" v-model="i2" v-on:input="calsq1()">

</div>

does not factorize into real linear terms since the discriminant

<div style="text-align: center">

$\Delta = $ <code>{{i1\*i1-4\*i2}}</code>

</div>

is less than zero. In this case we complete the square to write  $p(x)$ as a sum of two squares:

<div style="text-align: center">

$ p(x) = (x +$ {{i1/2}} $)^2 + c^2$ 

</div>

where

<div style="text-align: center">

$c = $ <code>sqrt({{i2-(i1/2)\*(i1/2)}})</code>

</div>

Then using the standard integral formula $$\displaystyle \int \frac{1}{u^2 + a^2} du = \frac{1}{a}\tan^{-1}\left(\frac{u}{a}\right) + C$$

we calculate

<div style="text-align: center">

$ I = $ <code>arctan((x+{{i1/2}})/sqrt({{i2-(i1/2)\*(i1/2)}}))/sqrt({{i2-(i1/2)\*(i1/2)}})</code> $+ C$

</div>

</div>

</div>

##### Question 6

<div class="how_qb">

Using the techniques from this topic, it is possible to evaluate integrals such as

$$\displaystyle \int {\frac {2\,x+4}{{x}^{2}+25}}
 \,dx = ln(x^2+25)+\frac{4 \tan^{-1}(\frac{x}{5})}{5}  + \,C$$

<div style="text-align: center">

( ` ln(x^2+25)+4*arctan(x/5)/5 ` )

</div>

and

$$ \displaystyle \int {\frac {2\,x+4}{{x}^{2}-25}}
\, dx =   \frac{3\,ln(|x+5|)}{5}+ \frac{7\,ln(|x-5|)}{5} + \,C$$

<div style="text-align: center">

( ` 3*ln(abs(x+5))/5+7*ln(abs(x-5))/5 ` )

</div>

</div>

---

### Calc1231W3T3 - Integration by circle trig substitution

##### Question 1

 _video_


##### Question 2

<div class="how_qb">

Let's evaluate the definite integral

$$ I = \displaystyle\int\limits_{5}^{10} \frac{1}{\sqrt{x^2- 25}}\,dx $$

Note that we have to be a little careful here, as this is <select><option checked> an improper integral </option></select>  on account of the denominator  <select><option checked> becoming 0 at one of the end point </option></select> .

We use the circular trig substitution $x = f(u) = \,$ <select><option checked>5*sec(u)</option></select> . As $x$ ranges from $5$ to $10$ , the new variable  $u$ ranges from  $a$ to $ b$, where:

 * the new lower bound $ a$ is the value such that $f(a) = 5$ . This is $ a = $ ` 0 `
 * the new lower bound $ b$ is the value such that $f(b) = 10$ . This is $ a=  $ ` Pi/3 `

 The integral can thus be re-written with respect to  $u$ :$$I =\displaystyle\int\limits_a^b g(u) \, du $$

 where the integrand $g(u) = \,$ ` sec(u) ` . Hence the integral can be evaluated as

<div style="text-align: center">

$I = \,$ ` ln(2+sqrt(3)) `

</div>

</div>


##### Question 3

<div class="how_qb">

Integrate

$$ I = \displaystyle\int\limits^{3}_{0} \sqrt{3^2 - x^2} \,dx $$

using the substitution $x = $ <select><option checked> 3 cos(u) </option></select> . The answer is

<div style="text-align: center">

$ I = \,$ ` 9Pi/4 `

</div>


</div>


##### Question 4

<div class="how_qb">

Evaluate the definite integral

$$ I = \displaystyle\int\limits_0^1 \frac{x^3}{\sqrt{\left(x^2 + 1\right)^5}} \, dx $$

using a suitable substitution. The answer is:

<div style="text-align: center">

$ I = $ ` -5sqrt(2)/12+2/3 `

</div>

</div>


##### Question 5

<div class="how_qb">

The rational function

$$\displaystyle \frac{40\,x-5
}{ \left( 8\,x+5 \right)  \left( 8\,x-5 \right) 
} $$

can be decomposed into partial fractions:

$$\displaystyle \frac{40\,x-5
}{ \left( 8\,x+5 \right)  \left( 8\,x-5 \right) 
} = \frac{A}{8 x + 5} + \frac{B}{8 x - 5} $$

Hence

$$ 40\,x-5
 = A (8 x - 5) + B (8 x  + 5) $$

We can find $ A$ and  $B$ from this equation. One way is to expand this equation and equate coefficients of $x^1$ and  $x^0$ to get two linear equations. Another way is to observe that:

 * when $\displaystyle x = -\frac{5}{8}$ we see that $ A = $ ` 3 `
 * when $\\displaystyle x = \frac{5}{8}$ we see that $ B = $ ` 2 ` .

This partial fraction decomposition allows us to integrate the original function as  $$ I = \displaystyle\int \frac{40\,x-5
}{ \left( 8\,x+5 \right)  \left( 8\,x-5 \right) 
} \, dx = A \int\frac{1}{8 x + 5}\,dx + B\int\frac{1}{8 x - 5}\,dx .$$

So

<div style="text-align: center">

$ I = $ ` 3/8*ln(8*x+5)+2/8*ln(8*x-5) ` $\,+\,C$

</div>


</div>


##### Question 6

<div class="how_qb">

Let's integrate $$ I = \displaystyle\int {\frac {x}{\sqrt {{x}^{2}-4}}}
 \,dx $$

 We can use a substitution to express this integral in the form $$I = {\displaystyle\int g(u) \,du}$$

The integral can then be evaluated as a function of  $u$ . But there are a few possibilities!

Give your answers in terms of the variable  $u$ .

 * With the circle trig substitution $ x = 2 \sec(u)$ the integrand becomes

<div style="text-align: center">

$g(u) = $ ` 2sec(u)^2 ` .

Hence $ I = $ ` 2tan(u) ` $\,+\,C$

</div>

 * With the hyperbolic trig substitution $ x = 2 \cosh(u)$ the integrand becomes

<div style="text-align: center">

$g(u) = $ ` 2cosh(u) `

Hence $ I = $ ` 2sinh(u) ` $\,+\,C$

</div>

 * With the substitution $ u^2 = x^2 - 2^2 $ the integrand becomes

<div style="text-align: center">

$g(u) = $ ` 1 `

Hence $ I = $ ` u ` $\,+\,C$

</div>

 * With the substitution $ u = x^2 - 2^2 $ the integrand becomes

<div style="text-align: center">

$g(u) = $ ` 1/(2sqrt(u)) `

Hence $ I = $ ` sqrt(u) ` $\,+\,C$

</div>

Any of these four answers can be re-expressed in terms of the original variable  $x$ , which leads to the conclusion:

<div style="text-align: center">

$ I = $ ` sqrt(x^2-4) ` $\,+\,C$

</div>

Which substitution did you prefer?

 - [ ] The circle trig substitution $x = 2 \sec(u)$
 - [ ] The hyperbolic trig substitution $x = 2 \cosh(u)$
 - [ ] The substitution $u^2 = x^2 - 2^2$
 - [ ] The substitution $u = x^2 - 2^2$
 - [x] All! These substitutions are great
 - [ ] I prefer Algebra.

</div>


---

### Calc1231W3T4 - Recurrence Relations

##### Question 1

 _video_


##### Question 2

<div class="how_qb">

Consider the definite integral $$ I_n = {\displaystyle\int\limits_0^1 x^n e^{-x}\, dx} $$
 
The integral $I_3 = \int_0^1 x^3e^{-x}dx $ can be evaluated by three successive applications of integration by parts. An elegant way to perform successive applications of integration by parts is to use a reduction formula.

The fist step, much like recusion or induction, is to have a base case. This is typically a simple integral such as:

<div style="text-align: center">

$I_0 = {\displaystyle\int\limits_0^1 e^{-x} \,dx} = \, $ ` (e-1)/e `

</div>

The following reduction formula is a compact way of writing the result of integration by parts for the integral $I_n$ : $$I_n = n I_{n-1} - \frac{1}{e} \text{ for } n \geq 1$$

Using this reduction formula

 * $I_1 = I_0 - \frac{1}{e} = $ ` (e-1)/e-1/e `
 * $I_2 =2I_1 - \frac{1}{e} =$ ` 2*((e-1)/e-1/e)-1/e `
 * $I_3 =3 I_2 - \frac{1}{e} =$ ` 3*(2*((e-1)/e-1/e)-1/e)-1/e `

</div>

##### Question 3

<div class="how_qb">

If $I_n = {\displaystyle\int\limits_0^{\frac\pi 4} \tan^n(x) \, dx}$ , evaluate

 * $I_0 = \, $ ` Pi/4 `
 * $I_1 = \, $ ` ln(2)/2 `

Now use the reduction formula $$I_n = \frac{1}{n-1} - I_{n-2}$$

to evaluate

 * $I_2 = \, $ ` 1-Pi/4 `
 * $I_3 = \, $ ` 1/2-ln(2)/2 `
 * $I_4 = \, $ ` 1/3-1+Pi/4 `
 * $I_5 = \, $ ` 1/4-1/2+ln(2)/2 `
 * $I_6 = \, $ ` 1/5-1/3+1-Pi/4 `
 * $I_7 = \, $ ` 1/6-1/4+1/2-ln(2)/2 `
 * $I_8 = \, $ ` 1/7-1/5+1/3-1+Pi/4 `
 * $I_9 = \, $ ` 1/8-1/6+1/4-1/2+ln(2)/2 `


</div>



##### Question 4

<div class="how_qb">

The Euler Integral of the first kind, also known as the Beta Function, is defined by $$B(m,n) = \displaystyle\int\limits_0^1 t^{(m-1)}(1-t)^{(n-1)}\,dt$$

Its values can be computed recursively as follows. First we find

<div style="text-align: center">

$ B(1,1) = $ ` 1 `

</div>

Then we use the reduction formula:

$$ B(m,n) = \left\{ \begin{array}{cl} B(m-1,n) \frac{m-1}{m+n-1} & \text{ for } m \gt 1 \\B(m,n-1) \frac{n-1}{m+n-1} & \text{ for } n \gt 1 \end{array} \right.$$

to evaluate:

 * $ B(2,1) = $ `1/2`
 * $ B(2,2) = $ `1/6`
 * $ B(3,2) = $ `1/12`



</div>


##### Question 5

<div class="how_qb">

Let's find a recurrence relation for $$\displaystyle I_n = \int_0^1 x^n e^{-x} dx .$$

The base case is

<div style="text-align: center">

$ \displaystyle I_0 = \int_0^1 x^0 e^{-x} dx = $ ` (e-1)/e `

</div>

The recurrence relation is used to relate $I_n$ to the base case  $I_0$ . To achieve this we must successively reduce the value of $ n$ using integration by parts.

Assuming $n \geq 1$: $$\displaystyle I_n = \int_0^1 x^n e^{-x} dx  = \int_0^1 u v^\prime dx$$

where

 * $u = x^n $
 * $u^\prime = $ ` n*x^(n-1) `
 * $v^\prime = e^{-x} $
 * $v = $ ` -e^(-x) `

Note the strategic choice of  $u$ ensures the power $x^{n}$ is reduced. With these choices of $u, v^\prime$ we have $$\displaystyle I_n = [uv]_0^1 - \int_0^1 u^\prime v dx$$

where

 * $[uv]_0^1 = $ ` -1/e `
 * $\displaystyle\int_0^1 uv^\prime dx = n I_{n-1}$

</div>



##### Question 6

<div class="how_qb">

Let's find a reduction formula for the indefinite integral $$ I_n = {\displaystyle\int \sec^n(x) \,dx} $$

If $n \geq 2$ then we can rewrite this integral as $$ I_n =\displaystyle{ \int (1 + \tan^2(x))\sec^{n-2}(x)\, dx = I_{n-2} + \int \tan^2(x)\sec^{n-2}(x)\, dx}$$

Now use integration by parts to get $${\displaystyle\int \tan^2(x)\sec^{n-2}(x) \,dx = \int uv^\prime \,dx = [uv] - \int u^\prime v\, dx}$$

with $u = \tan(x) $ and $v^\prime = \tan(x) \sec^{n-2}(x)$ . This gives

 * $\left[uv\right]$ ` tan(x)*sec(x)^(n-2)/(n-2) ` and
 * $u^\prime v$ ` sec(x)^n/(n-2) `

Hence, without further integration we have the reduction formula $$I_n = \frac{1}{n-1} \sec^{n-2}(x)\tan(x) + g(n) I_{n-2}$$

where $g(n) = \,$ ` (n-2)/(n-1) ` .

Use this to evaluate

<div style="text-align: center">

$I_{4} = \,$ `1/3*sec(x)^2*tan(x)+2/3*tan(x)` $\,+\,C$

</div>


</div>

---

### Maple1231W3T5 - Further Calculus

##### Question 1

<div id="t5q1">

?>_随机题！需要补全题目才可出答案！_

<div class="how_qb">

Find the partial fraction decomposition of $$\frac{p(x)}{q(x)}$$ where

 $p(x) =$

 and

 $q(x) =$

and enter it in the box below.  To prevent typing errors, you can copy and paste

> **请输入题目中提供的两行Maple**

 * p := <input style="width: 80%" v-model="i1" v-on:input="calsq1()">

 * q := <input style="width: 80%" v-model="i2" v-on:input="calsq1()">

> **将下方的内容复制到Maple出答案**

 <code>{{a1}}</code>

</div>

##### Question 2

?>_随机题！需要补全题目才可出答案！_

<div class="how_qb">

Use Maple to find the solution of the differential equation

<div style="text-align: center">

$\frac{d}{dx} y(x) +$  <input style="width: 30px" v-model="i3" v-on:input="calsq2()"> $y(x) = $ <input style="width: 30px" v-model="i4" v-on:input="calsq2()"> $ (x) + $ <input style="width: 30px" v-model="i5" v-on:input="calsq2()"> $x$

</div>

subject to the initial condition $ y(0)=0.$



> **将下方的内容复制到Maple出答案**

 <code>{{a2}}</code>

!> **报错了？** 不要复制答案开头的 y(x) = 哦！



</div>



##### Question 3

?>_随机题！需要补全题目才可出答案！_

<div class="how_qb">

Use Maple to find the solution of the initial value problem

 $y \frac{d^2y}{dx^2} + $ <input style="width: 30px" v-model="i6" v-on:input="calsq3()"> $(\frac{dy}{dx})^2 = 0$ with initial conditions $y(0) =$ <input style="width: 30px" v-model="i7" v-on:input="calsq3()"> and $y^{\prime}(0) =$ <input style="width: 30px" v-model="i8" v-on:input="calsq3()">




> **将下方的内容复制到Maple出答案**


 <code>{{a3}}</code>

!> **报错了？** 不要复制答案开头的 y(x) = 哦！

</div>

##### Question 4

?>_随机题！需要补全题目才可出答案！_

<div class="how_qb">

Consider the sum

<div style="text-align: center">

$\sum_{k=B}^{A}$ <input style="width: 50%" v-model="i11" v-on:input="calsq3()"><br>【补充：$A =$ <input style="width: 50px" v-model="i9" v-on:input="calsq3()"> $B =$ <input style="width: 30px" v-model="i10" v-on:input="calsq3()"> 】


</div>

> 这题不需要maple，下面就是答案


 <code>sum({{i11}}, k = {{i10}} .. {{i9}})</code>

</div>


##### Question 5

?>_随机题！需要补全题目才可出答案！_

<div class="how_qb">

Suppose that a function  $f$ has derivatives of all orders at  $a$ .  The the series $$\displaystyle \sum_{k=0}^\infty \frac{f^{(k)}(a)}{k!}(x-a)^k$$

is called the Taylor series for  $f$ about  $a$ , where $f^{(n)}$ is the $ n$ th order derivative of $f$ .

Suppose that the Taylor series for <input style="width: 100px" v-model="i12" v-on:input="calsq3()"> about 0 is $$ a_0 + a_1 x + a_2 x^2 + \cdots + a_{6} x^{6}+ \cdots$$

Enter the exact value of  a <input style="width: 30px" v-model="i13" v-on:input="calsq3()">   in the box below.


> **将下方的内容复制到Maple出答案** 

 <code>taylor({{i12}}, x = 0, {{parseInt(i13)+1}})</code>

!> **提示：**只需要复制 倒数第二个的分数就可以了 （$e^x =$ ` exp(x) `）

</div>

</div>


<script>

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

        var text = this.i1.replaceAll(" ","").replaceAll("例如：","").replaceAll("=","").replaceAll(":","").replaceAll(";","").replaceAll("A","").replaceAll("f","").replaceAll("q","").replaceAll("p","");


        this.a1 = "convert(("+text+")/(";

        text = this.i2.replaceAll(" ","").replaceAll("例如：","").replaceAll("=","").replaceAll(":","").replaceAll(";","").replaceAll("A","").replaceAll("f","").replaceAll("q","").replaceAll("p","");

        this.a1 += text + "), parfrac);";

      },
      calsq2() {

        this.a2 = "dsolve({diff(y(x), x) + "+this.i3+"*y(x) = "+this.i4+"(x) + "+this.i5+"*x, y(0) = 0}, y(x))";

      
      },
      calsq3() {
        this.a3 = "dsolve({y(x)*diff(y(x), x, x) + ("+this.i6+")*diff(y(x), x)^2 = 0, y(0) = "+this.i7+", D(y)(0) = "+this.i8+"}, y(x));";

      }
    }
  }); 

  new Vue({
    el: '#t2q4',
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


