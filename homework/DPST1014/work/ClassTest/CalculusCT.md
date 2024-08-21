## Calculus Class Test 1

>课程：[数学课程](/DPST1014/) &nbsp; [数学作业](/homework/DPST1014/)

---

##### Question 1

<div class="how_qb">

Consider the integral $$\displaystyle I = \int x^{12} \left(\sqrt{x^2-36} \, \right)^{7} \, dx $$ Assume $x \geq 6$ . For this kind of integral we usually use the substitution $x=6\cosh \theta$   or 

 - [ ] $x=6\sinh \theta$
 - [ ] $x=6\tan \theta$
 - [x] $x=6\sec \theta$
 - [ ] $x=6\cos \theta$
 - [ ] $x=6\sin \theta$

Substituting $x=6\cosh \theta$ , assuming $\theta \geq 0$ , leads to an integral of the form $$\displaystyle I = 6^p \int \cosh^m\theta \cdot \sinh^{n} \theta \, d\theta $$ where

 <div style="text-align: center">

  $p =$ ` 20 `  $, m =$ ` 12 ` and $n =$ ` 8 `

</div>

</div>


##### Question 2

<div class="how_qb">

You are given that $$\displaystyle \int _0^1 (1-x^{4})^{n}\, dx = \frac{4 n}{4 n+1} \int _0^1 (1-x^{4})^{n-1}\, dx$$ for $n \ge 1$ .

Now $$\displaystyle \int _0^1 (1-x^{4})^{5}\, dx = A \int _0^1 (1-x^{4})^{4}\, dx$$ where

<div style="text-align: center">

  $A = $ ` 20/21 ` .

</div>

If we continue in the same manner we will get $$\displaystyle \int _0^1 (1-x^{4})^{5}\, dx = B \int _0^1 (1-x^{4})\, dx$$

where

<div style="text-align: center">

  $B = $ ` 10240/13923 ` .

</div>

Hence

<div style="text-align: center">

  $\displaystyle \int _0^1 (1-x^{4})^{5}\, dx = $ ` 8192/13923 ` .

</div>



</div>

##### Question 3



##### Question 4

<div class="how_qb">

 Find an integrating factor for the differential equation $$ \displaystyle \frac{dy}{dx} -y \tan x = 5 \sin x $$ Simplify your answer and make sure that you use Maple syntax to enter it in the box below.
 
 * Integrating factor = ` cos(x) ` .

 Upon multiplying by the integrating factor the above differential equation becomes $$\displaystyle \frac{d}{dx} \left(yf(x) \right)=g(x)$$ where

 * $f(x) =$ ` cos(x) `   and  $g(x)= $ ` 5*cos(x)*sin(x) ` .

 After integrating it becomes $$\displaystyle yf(x)=G(x)+C$$ where $ C$ is the constant of integration. 

 Hence the general solution has the form $y=P(x)+C\cdot Q(x) $ where

  * $P(x)= $ ` 5/2 * (sin(x))^2/(cos(x)) ` and $Q(x)= $ ` sec(x) ` and $C$ is the above mentioned constant of integration. 

</div>

##### Question 5

<div class="how_qb">

Consider the function $G :\mathbb{R}^2 \to \mathbb{R}$ defined by  

 $$G (x,y)=\dfrac{9 x+27 y}{y+1}$$

Evaluate the following partial derivatives. 

 * $G _x = $ ` 9/(y+1) `
 * $ G _y = $ ` (27-9*x)/(y+1)^2 `

Use total differential approximation to approximate $G (3.05, 0.051 )$ .

 * $G (3.05, 0.051 ) \approx$ ` 27.45 `

Please provide full reasoning for your approximation in the Essay Box below. For  $G _x, G _y, \Delta G , \approx $ you may type $G x, G y, Delta(G ), =:$ respectively, or use the Equation Editor provided within. 


<input style="width: 80%">

</div>


