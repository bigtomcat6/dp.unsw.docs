## Week 4 Algebra

>课程：[数学课程](/DPST1014/) &nbsp; [数学作业](/homework/DPST1014/)

?> mobius: [Week 4 Algebra![logo](../../../../../../logosvg01.svg)](https://unsw.mobius.cloud/1520?gid=5449)

---

### Alg1231W4T1 - Linear independence

##### Question 1

 _video_


##### Question 2

<div class="how_qb">

A set of vectors  $\{\mathbf{v}_1,\mathbf{v}_2,\cdots,\mathbf{v}_n\}$ is defined to be linearly independent if the <u>only</u> solution to $$\quad\quad r_1\mathbf{v}_1+r_2\mathbf{v}_2+\cdots+r_n\mathbf{v}_n=\mathbf{0}\quad\quad(1)$$ is given by $$\quad\quad\quad r_1=r_2=\cdots =r_n=0.\quad\quad\quad (2)$$ It's worth noting that $(2)$is always a solution to equation $(1)$, so in fact all we need to do is prove that $(1)$ has a unique solution. This gives us a clear method for determining linear independence.

Let's determine whether the set $\left\{\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix},\begin{pmatrix} 4 \\ 5 \\ 6 \end{pmatrix},\begin{pmatrix} 7 \\ 8 \\ 9\end{pmatrix}\right\}$ is a linearly independent set. From the discussion above, we know we need to consider the solutions of the equation $$r_1\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}+r_2\begin{pmatrix} 4 \\ 5 \\ 6 \end{pmatrix}+r_3\begin{pmatrix} 7 \\ 8 \\ 9 \end{pmatrix}=\begin{pmatrix} 0 \\ 0 \\ 0\end{pmatrix}$$ As we all remember from Mathematics 1A, we can find the general solution by considering the augmented matrix [select all that apply]

 - [x] $\left(\begin{matrix} 1 & 4 & 7 \\ 2 & 5 & 8 \\ 3 & 6 & 9 \end{matrix}\right|\left.\,\begin{matrix} 0 \\ 0 \\ 0 \end{matrix}\right)$

 - [ ] $\left(\begin{matrix} r_1 & 4r_2 & 7r_3 \\ 2r_1 & 5r_2 & 8r_3 \\ 3r_1 & 6r_2 & 9r_3 \end{matrix}\right|\left.\,\begin{matrix} \vphantom{r_1}0 \\ \vphantom{r_1}0 \\ \vphantom{r_1}0 \end{matrix}\right)$

 - [ ] $\left(\begin{matrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{matrix}\right|\left.\,\begin{matrix} 0 \\ 0 \\ 0 \end{matrix}\right).$

If we row reduce this we get $$\left(\begin{matrix} 1 & 4 & 7 \\ 0 & -3 & -6 \\ 0 & 0 & 0 \end{matrix}\right|\left.\,\begin{matrix} 0 \\ 0 \\ 0 \end{matrix}\right).$$ We already know this system has some solutions (ruling out the 'no solution' option), and since <select><option selected> the third column is non-leading </option></select> we can conclude that this system of equations actually has <select><option selected> infinitely many solutions </option></select>

Thus:

- [ ] the only solution is $r_1=r_2=r_3=0$ , and so the set is linearly independent
- [x] there will be non-zero solutions, and so the set is not linearly independent.

</div>


##### Question 3

<div class="how_qb">

Jessica wants to figure out if the set $S=\left\{\mathbf v_1, \mathbf v_2,\mathbf v_3\right\}$ is linearly independent. Naturally she writes the three vectors as the columns of a matrix $A$ , and then row reduces $A$ to get $U.$


 **i)** If $U = \left(\begin{matrix} 1 & 2 & 6 \\ 0 & 7 & -1 \\ 0 & 0 & 0 \end{matrix}\right)$ ,  then Jessica deduces that $S$ is a linearly <select><option selected> dependent </option></select> set. This is because she sees that the equation $$\alpha \mathbf v_1+\beta \mathbf v_2+\gamma \mathbf v_3=\mathbf 0$$ has <select><option selected> a non-zero </option></select> solution, for example $[\alpha,\beta,\gamma]=$ ` [-44,1,7] ` .

 ---

 **ii)** If $U = \left(\begin{matrix} 1 & 2 & 1 \\ 0 & 1 & -5 \\ 0 & 0 & 1 \end{matrix}\right)$ ,  then Jessica deduces that $S$ is a linearly <select><option selected> independent </option></select> set. This is because she sees that the equation $$\alpha \mathbf v_1+\beta \mathbf v_2+\gamma \mathbf v_3=\mathbf 0$$ has <select><option selected> only the zero </option></select> solution, for example $[\alpha,\beta,\gamma]=$ ` [0,0,0] ` .

 ---

 **iii)** If $U = \left(\begin{matrix} 0 & 1 & 4 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{matrix}\right)$ ,  then Jessica deduces that $S$ is a linearly <select><option selected> independent </option></select> set. This is because she sees that the equation $$\alpha \mathbf v_1+\beta \mathbf v_2+\gamma \mathbf v_3=\mathbf 0$$ has <select><option selected> a non-zero </option></select> solution, for example $[\alpha,\beta,\gamma]=$ ` [1,0,0] ` .



</div>


##### Question 4

<div class="how_qb">

 **i)** Is the set of vectors $\left\{\begin{pmatrix} 1\\ 1 \end{pmatrix},\begin{pmatrix} 1\\ -1 \end{pmatrix} \right\}$ linearly independent? If not, enter a non-zero solution to the equation $$\alpha \begin{pmatrix} 1 \\ 1 \end{pmatrix}+\beta\begin{pmatrix} 1 \\ -1 \end{pmatrix} = \mathbf 0 $$ Otherwise enter the zero solution (i.e. [0,0]).

  $[\alpha,\beta]=$ ` [0,0] `

---

 **ii)** Is the set of vectors $\left\{\begin{pmatrix} 1\\ -1 \\ 0 \end{pmatrix},\begin{pmatrix} 0\\ 1 \\ -1 \end{pmatrix},\begin{pmatrix} 1\\ 0 \\ -1 \end{pmatrix} \right\}$ linearly independent? If not, enter a non-zero solution to the equation $$\alpha \begin{pmatrix} 1 \\ -1\\0 \end{pmatrix}+\beta\begin{pmatrix} 0 \\ 1\\ -1 \end{pmatrix}+\gamma\begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix} = \mathbf 0 $$ Otherwise enter the zero solution (i.e. [0,0,0]).

  $[\alpha,\beta,\gamma]=$ ` [1,1,-1] `

---

 **iv)** Is the set of vectors $\left\{\begin{pmatrix} -1\\ 5 \\ 0 \end{pmatrix},\begin{pmatrix} -5\\ 1 \\ -3 \end{pmatrix},\begin{pmatrix} -12\\ 12 \\ -6 \end{pmatrix} \right\}$  linearly independent? If not, enter a non-zero solution to the equation $$\alpha \begin{pmatrix} -1 \\ 5 \\ 0 \end{pmatrix}+\beta\begin{pmatrix} -5 \\ 1 \\ -3 \end{pmatrix}+\gamma\begin{pmatrix} -12 \\ 12 \\ -6 \end{pmatrix} = \mathbf 0 $$ Otherwise enter the zero solution (i.e. [0,0,0]).

  $[\alpha,\beta,\gamma]=$ ` [-2,-2,1] `

</div>

##### Question 5

<div class="how_qb">

 The vectors $ v_1 = \begin{pmatrix} -12\\ 15 \\ 15 \\ -12 \end{pmatrix} , v_2 = \begin{pmatrix} 0\\ -9 \\ 0 \\ 15 \end{pmatrix} , v_3 = \begin{pmatrix} 8\\ -16 \\ -10 \\ 18 \end{pmatrix} $  in $\mathbb R^4$ are not linearly independent (i.e. they are linearly dependent). Use row reduction to find constants $c_1,c_2,c_3$ , not all zero, so that $ c_1\mathbf v_1 + c_2 \mathbf v_2 + c_3\mathbf v_3=\mathbf 0$ 
 
 An example of such is

<div style="text-align: center">

  $[c_1,c_2,c_3]=$ ` [2,-2,3] ` .

</div>

We can convert such a linear relation into forms that express one of the vectors in terms of the others. Examples of such relationships between the vectors are:

 * $v_1 =$ ` 1 `    $v_2 +$ ` -12/8 ` $v_3$
 * $v_1 =$ ` 1 `    $v_2 +$ ` 24/16 ` $v_3$
 * $v_1 =$ ` -2/3 ` $v_2 +$ ` 2/3 `   $v_3$


</div>

##### Question 6


<div class="how_qb">

<div style="text-align: center">

 ![logo](./file/AdditiveColor.svg.png)

</div>

In the RGB colour scheme based on [additive colours![logo](../../../../../../logosvg01.svg)](https://en.wikipedia.org/wiki/Additive_color) Red, Green and Blue, we define $$R=(255,0,0),\quad G=(0,255,0),\quad B=(0,0,255).$$ Other colours are then linear combinations of these, for example:
 * $C=(0,255,255)$ (Cyan)
 * $M=(255,0,255)$ (Magenta)
 * $Y=(255,255,0)$ (Yellow).

In 3-dimensional colour space, $\{R,G,B\}$ is a linearly <select><option selected> independent </select></select> set, and $\{C,M,Y\}$ is a linearly <select><option selected> independent </option></select> set.

Which of the following are linearly independent sets?

 - [x] $\{C,Y,B\}$
 - [ ] $\{C,R,{Dark slate grey}(47,79,79)\}$
 - [x] $\{ Lavender(230,230,250),M,R\}$
 - [ ] $\{G,B,C\}$
 - [ ] $\{ White (255,255,255),{Black}(0,0,0)\}$



</div>

---

### Alg1231W4T2 - Linear dependence

##### Question 1

 _video_


##### Question 2

<div class="how_qb">

A set of vectors $\left\{ \mathbf{v}_{1},\mathbf{v}_{2} ,\cdots,\mathbf{v}_{n}\right\} $ in a vector space $V$ is called **linearly dependent** if we can find scalars $r_{1},r_{2},\cdots,r_{n}$ not all zero, such that $$ r_{1}\mathbf{v}_{1}+r_{2}\mathbf{v}_{2}+\cdots+r_{n}\mathbf{v}_{n}=\mathbf{0} $$ where the right hand side is the zero vector.

To demonstrate that a given set of vectors is linearly dependent, it is a good idea to use the definition and row-reduction to explicitly find scalars that demonstrate the linear relation.

If our investigation leads us to conclude that the only way to arrange a linear relation with right hand side being  $0$ is to use $$r_{1}=r_{2} =\cdots=r_{n}=0,$$ then the set cannot be linearly dependent (i.e. the set is a linearly independent set).

Let's show that $$ \left\{ \mathbf{u}= \begin{pmatrix} 2\\ 6\\ 3 \end{pmatrix} ,\mathbf{v}= \begin{pmatrix} -6\\ -5\\ 2 \end{pmatrix} ,\mathbf{w}= \begin{pmatrix} 8 \\ 11 \\ 1 \end{pmatrix} \right\} $$ is actually a linearly dependent set by finding scalars  $r,s$ and  $t$ (not all zero) such that $$r\mathbf{u}+s\mathbf{v}+t\mathbf{w}=\mathbf{0}.$$ For example

<div style="text-align: center">

   $[r,s,t]=$ ` [-1,1,1] `

</div>

Using this we can express one of the vectors as a linear combination of the others, for example

<div style="text-align: center">

  ` u=1*v+1*w `

</div>


</div>

##### Question 3


<div class="how_qb">

> **I optimized this graph slightly，maybe it will work better ↓** <br>  你们可以用我调整过的这个版本，应该更好用些~

<!-- panels:start -->
<!-- div:left-panel -->

<iframe scrolling="no" title="" src="https://www.geogebra.org/material/iframe/id/hmmfbtky/width/700/height/500/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/true/ctl/false" width="700px" height="500px" style="border:0px;"> </iframe>


<!-- div:right-panel -->

Using the app above and experimenting with the sliders, find integers $r$ and $s$ such that $$ r\mathbf{u}+s\mathbf{v}=\mathbf{w} $$ in each of the cases below:

 **i)** $\mathbf{u}= \begin{pmatrix} 3\\ -2 \end{pmatrix} $ and $\mathbf{v}= \begin{pmatrix} -3 \\ 3 \end{pmatrix} $ and $\mathbf{w}= \begin{pmatrix} 12 \\ -7 \end{pmatrix} $ In this case we need

<div style="text-align: center">

  $r=$ ` 5 ` and $s=$ ` 1 `

</div>

 **ii)** $\mathbf{u}= \begin{pmatrix} -2\\ 4 \end{pmatrix} $ and $\mathbf{v}= \begin{pmatrix} 5 \\ 4 \end{pmatrix} $ and $\mathbf{w}= \begin{pmatrix} 1 \\ -16 \end{pmatrix} .$ In this case we need

<div style="text-align: center">

  $r=$ ` -3 ` and $s=$ ` -1 `

</div>

Now, find scalars $r,s$ and $t$ (not all zero) such that $$ r\mathbf{u}+s\mathbf{v}+t\mathbf{w}=\mathbf{0} $$

if $\mathbf{u}= \begin{pmatrix} 2\\ -1 \end{pmatrix} $ and $\mathbf{v}= \begin{pmatrix} 4\\ 3 \end{pmatrix} $ and $\mathbf{w}= \begin{pmatrix} 32\\ 14 \end{pmatrix} .$  In this case we could use

<div style="text-align: center">

  $[r,s,t]=$ ` [4,6,-1] `

</div>

<!-- panels:end -->

</div>



##### Question 4


<div class="how_qb">

You have been asked to find out if the set $B=\left\{ \mathbf{v}_{1},\mathbf{v}_{2},\mathbf{v}_{3} \right\} $  of vectors is linearly independent, where $$ \mathbf{v}_{1}= \begin{pmatrix} 1\\ 0\\ -1 \end{pmatrix}, \quad \mathbf{v}_{2}= \begin{pmatrix} 2\\ 1\\ 1 \end{pmatrix}, \quad \mathbf{v}_{3}= \begin{pmatrix} 1\\ -1\\ -4 \end{pmatrix}$$ and if not, find a linear relation between them. Recall that this really amounts to seeing if you can find solutions to the system $$ x \begin{pmatrix} 1\\ 0\\ -1 \end{pmatrix} +y \begin{pmatrix} 2\\ 1\\ 1 \end{pmatrix} +z \begin{pmatrix} 1\\ -1\\ -4 \end{pmatrix} = \begin{pmatrix} 0\\ 0\\ 0 \end{pmatrix} $$ which are not all zero. Of course $x=y=z=0$ <select><option selected> is a solution, but it doesn't count </option></select>.

Fortunately, you have mastered the delicate art of row reduction from MATH1131, so you can readily deduce that a solution in fact does exist, namely

<div style="text-align: center">

  $ [ x , y , z ] = $ ` [-3,1,1] `

</div>

<div style="background-color: rgb(230, 230, 250);">

**Note:** enter you answer using the syntax **[1,2,3]**.

</div>

This means the set $B=\left\{ \mathbf{v}_{1},\mathbf{v}_{2},\mathbf{v}_{3}\right\} $ is <select><option selected> a linearly dependent set </option></select>

An example of a linear relation between these vectors is

<div style="text-align: center">

  $ \mathbf{v}_{3}=$ ` 3 ` $\mathbf{v}_1+$ ` -1 ` $\mathbf{v}_2.$

</div>

</div>


##### Question 5


<div class="how_qb">

The set $C=\left\{ \mathbf{v}_{1},\mathbf{v}_{2},\mathbf{v}_{3} ,\mathbf{v}_{4}\right\} $ , where $$  \mathbf{v}_{1}= \begin{pmatrix} -1\\ 0\\ -1 \\ 2 \end{pmatrix}, \quad \mathbf{v}_{2}= \begin{pmatrix} 3\\ -2\\ 1 \\ -2 \end{pmatrix}, \quad \mathbf{v}_{3}=\begin{pmatrix} 3\\ -2\\ 4 \\ 1 \end{pmatrix}, \quad \mathbf{v}_{4}= \begin{pmatrix} -6 \\ 2\\ -4 \\ 8 \end{pmatrix} $$ is a linearly dependent set. We can show this by using row reduction to find a non-zero solution to the system $$ x \begin{pmatrix} -1\\ 0\\ -1 \\ 2 \end{pmatrix}+y \begin{pmatrix} 3\\ -2\\ 1 \\ -2 \end{pmatrix}+z \begin{pmatrix} 3\\ -2\\ 4 \\ 1 \end{pmatrix} +w \begin{pmatrix} -6 \\ 2\\ -4 \\ 8 \end{pmatrix}=\begin{pmatrix} 0 \\ 0 \\0 \\ 0\end{pmatrix} .$$ For example

<div style="text-align: center">

  $ [ x , y , z , w ] = $ <select><option selected> [-3,1,0,1] </option></select>

</div>

And, in this case, all non-zero solutions are just scalar multiples of this one.

Interestingly [select all that apply]:

   * [x] we can write $\mathbf{v}_1$ as a linear combination of $\mathbf{v}_2,\mathbf{v}_3$ and $\mathbf{v}_4$
   * [x] we can write $\mathbf{v}_2$ as a linear combination of $\mathbf{v}_1,\mathbf{v}_3$ and $\mathbf{v}_4$
   * [ ] we can write $\mathbf{v}_3$ as a linear combination of $\mathbf{v}_1,\mathbf{v}_2$ and $\mathbf{v}_4$
   * [x] we can write $\mathbf{v}_4$ as a linear combination of $\mathbf{v}_1,\mathbf{v}_2$ and $\mathbf{v}_3$

When considering the span of a set of vectors, a vector in the set which can be expressed as a linear combination of the others in the set can be considered redundant, in the sense that removing it will not affect the span. 

From the our working above we can conclude that [select all that apply]:

   * [x] $\mathrm{span}\{\mathbf{v}_1,\mathbf{v}_2,\mathbf{v}_3,\mathbf{v}_4\}=\mathrm{span}\{\mathbf{v}_2,\mathbf{v}_3,\mathbf{v}_4\} $
   * [x] $\mathrm{span}\{\mathbf{v}_1,\mathbf{v}_2,\mathbf{v}_3,\mathbf{v}_4\}=\mathrm{span}\{\mathbf{v}_1,\mathbf{v}_3,\mathbf{v}_4\} $
   * [ ] $\mathrm{span}\{\mathbf{v}_1,\mathbf{v}_2,\mathbf{v}_3,\mathbf{v}_4\}=\mathrm{span}\{\mathbf{v}_1,\mathbf{v}_2,\mathbf{v}_4\}. $
   * [x] $\mathrm{span}\{\mathbf{v}_1,\mathbf{v}_2,\mathbf{v}_3,\mathbf{v}_4\}=\mathrm{span}\{\mathbf{v}_1,\mathbf{v}_2,\mathbf{v}_3\}. $
 

</div>

##### Question 6

<!--iframe scrolling="no" src="https://www.geogebra.org/material/iframe/id/rGgfkyBg/width/650/height/372/border/888888/rc/false/ai/false/sdz/true/smb/false/stb/false/stbh/true/ld/false/sri/true/at/auto" style="border:0px;" height="372px" width="650px"></iframe-->


<div class="how_qb">

Forget about face recognition, James. The latest SPECTRE internet password requires you to combine functions in the infinite dimensional vector space of functions to obtain a " $0$ -key" to crack into their evil web-portal. The pass key app here shows the functions $e^{x}$, $e^{-x},\cosh x,$ and $\sinh x$ together with the linear key combination $$f\left( x\right) =ae^{x}+be^{-x}+c\cosh x+d\sinh x.$$ Your mission, if you choose to accept it, is to find some combination of coefficients that will:

 **i)** ensure that the function $$f\left( x\right) =ae^{x}+be^{-x}+c\cosh x+d\sinh x$$ is the zero function (or at least very close to it), and

 **ii)** at least one of $a,b,c,d$ is exactly equal to $1$ .

Your solution James? Clearly the answer, or at least one answer, M, is given by the vector


<div style="text-align: center">

  $\begin{pmatrix}a \\ b \\ c \\ d \end{pmatrix}=$ ` <1,2,-3,1> `

</div>

<div style="background-color: rgb(230, 230, 250);">

**Recall:** the Maple notation for the vector $\begin{pmatrix} 1 \\ 2 \\ 3 \\ 4 \end{pmatrix}$ is **< 1,2,3,4 >**.

</div>

</div>

---


### Alg1231W4T3 - Linear Independence of Polynomials

##### Question 1

 _video_


##### Question 2


<div class="how_qb">

Consider $\mathbb{P}^2$ the polynomials of degree at most 2, with real coefficients. Since this space is <select><option selected> three-dimensional </option></select>  , it is useful to think about this the same way we think about $\mathbb{R}^3$ .

In $\mathbb{R}^3$ we like to write out our geometric vectors as combinations of the standard basis vectors $\mathbf{e}_1,\mathbf{e}_2,\mathbf{e}_3.$ For example $$ \begin{pmatrix} 6 \\ 5 \\ 3 \end{pmatrix} = 6\mathbf{e}_1 + 5\mathbf{e}_2 + 3\mathbf{e}_3 $$ The same is true for $ \mathbb{P}^2$ where we typically write out our quadratics in terms of the standard basis vectors $1,x,x^2.$

For example $$ 9 - 6x + x^2 $$ As an element of a three-dimensional vector space is helpful to think of this polynomials as behaving like the geometric vector $$\begin{pmatrix} 9 \\ -6 \\ 1 \end{pmatrix}$$ Doing this allows us to use our understanding of $\mathbb{R}^3$ to reinforce our understanding of $\mathbb{P}^2$ .

Let's examine this connection is by following these two arguments in parallel:

|||
|:--|:--|
|Are the polynomials $$1-2x,\quad 3x-4x^2,\quad 5-6x^2 $$ linearly dependent in $\mathbb{P}^2$ ?| Are the vectors $$\begin{pmatrix} 1 \\ -2 \\ 0 \end{pmatrix},\begin{pmatrix} 0 \\ 3 \\ -4 \end{pmatrix},\begin{pmatrix} 5 \\ 0 \\ -6 \end{pmatrix} $$ linearly dependent in $\mathbb{R}^3$ ?|
|If we compare the coefficients of the powers of  $x$ in the linear combination $$\, r_1(1-2x)+r_2( 3x-4x^2) + r_3(5-6x^2)=0\, $$ we get the equations $$r_1+5r_3=0,$$$$-2r_1+3r_2=0,$$$$-4r_2+6r_3=0,$$ which can be written in terms of the augmented matrix $$\left(\begin{matrix} 1 & 0 & 5 \\ -2 & 3 & 0 \\ 0 & -4 & -6 \end{matrix}\right\|\,\left.\begin{matrix} 0 \\ 0 \\ 0 \end{matrix}\right).$$|If we compare the components of the vectors in the linear combination $$r_1\begin{pmatrix} 1 \\ -2 \\ 0 \end{pmatrix}+r_2\begin{pmatrix} 0 \\ 3 \\ -4 \end{pmatrix}+r_3\begin{pmatrix} 5 \\ 0 \\ -6 \end{pmatrix}=\begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix} $$ we get the equations $$r_1+5r_3=0,$$$$-2r_1+3r_2=0,$$$$-4r_2+6r_3=0,$$ which can be written in terms of the augmented matrix $$\left(\begin{matrix} 1 & 0 & 5 \\ -2 & 3 & 0 \\ 0 & -4 & -6 \end{matrix}\right\|\,\left.\begin{matrix} 0 \\ 0 \\ 0 \end{matrix}\right).$$

In either case, row-reducing this matrix gives $$\left(\begin{matrix} 1 & 0 & 5 \\ 0 & 3 & 10 \\ 0 & 0 & 22 \end{matrix}\right|\,\left.\begin{matrix} 0 \\ 0 \\ 0 \end{matrix}\right)$$ Since all the columns on the left-hand side are leading, we can conclude the only solution is given by

<div style="text-align: center">

  $r_1=r_2=r_3=$ ` 0 `

</div>

|||
|:--|:--|
|Hence $1-2x,\; 3x-4x^2,\; 5-6x^2 $ are <select><option selected> linearly independent </option></select> .|Hence $\begin{pmatrix} 1 \\ -2 \\ 0 \end{pmatrix},\begin{pmatrix} 0 \\ 3 \\ -4 \end{pmatrix},\begin{pmatrix} 5 \\ 0 \\ -6 \end{pmatrix} $ are <select><option selected> linearly independent </option></select> .|

</div>

##### Question 3

<div class="how_qb">

**i)** The set $\left\{{x}^{2}-x+1,4\,{x}^{2}-3\,x+4,6\,{x}^{2}-5\,x+5\right\}$ of polynomials is a linearly <select><option selected> independent </option></select> subset of $\mathbb P_2$ . This is because the equation $$\alpha \left({x}^{2}-x+1\right)+\beta \left(4\,{x}^{2}-3\,x+4\right)+\gamma \left(6\,{x}^{2}-5\,x+5\right)=0$$ has <select><option selected> only the zero </option></select> solution given by $[\alpha,\beta,\gamma]=$ ` [0,0,0] ` .

**ii)** If $6\,{x}^{2}-5\,x+5$ is replaced by $-15\,{x}^{2}+11\,x-15,$ then the set above is now a linearly  <select><option selected> dependent </option></select> subset of $\mathbb P_2$ . This is because the equation  $$\alpha \left({x}^{2}-x+1 \right) +\beta \left(4\,{x}^{2}-3\,x+4\right)+\gamma \left(-15\,{x}^{2}+11\,x-15\right)= 0$$ has <select><option selected> a non-zero </option></select> solution given by $[\alpha,\beta,\gamma]=$ 

</div>

##### Question 4



<div class="how_qb">

A common example of linearly independent polynomials is given by polynomials of different degrees. For example in $\mathbb P_3$ the set $$c_1\cdot 1 + c_2(x-4) + c_3  \left( x-4 \right) ^{2} + c_4  \left( x-4 \right) ^{3} = 0.$$ is a linearly <select><option selected> independent </option></select> set.  Let's see why.


Suppose that $$c_1\cdot 1 + c_2(x-4) + c_3  \left( x-4 \right) ^{2} + c_4  \left( x-4 \right) ^{3} = 0.$$ Here the zero on the right-hand side of the equation means the zero polynomial in $ \mathbb P_3 $ ,  namely $$0\cdot 1 + 0\cdot x + 0\cdot x^2 + 0\cdot x^3.$$ Expanding the powers and comparing the coefficients of $x^3$ on both sides we deduce that we must have $c_4=$ ` 0 ` .

 Using this fact and comparing the coefficients of $x^3$
  on both sides we further deduce that $c_3=$ ` 0 ` .

Using both of these facts and comparing the coefficients of  x
  on both sides, we get $c_2 =$ ` 0 ` .

Finally, using all three facts above and comparing the remaining constant terms allows us to deduce that $c_1 =$ ` 0 ` .

Hence <select><option selected> the only solution </option></select> is given by $c_1=c_2=c_3=c_4=$ ` 0 ` . and so we have proven that  $\left\{1 , (x-4),  \left( x-4 \right) ^{2},  \left( x-4 \right) ^{3}\right\}$ is a linearly independent set.


</div>

##### Question 5

<div class="how_qb">


In this problem we are working in the vector space $\mathbb P_2$ of polynomials of degree two or less.

**i)** We can show that $\left\{1,(x+1), \left( x+1 \right) ^{2},x^2\right\}$ is a linearly dependent set by writing

<div style="text-align: center">

  $x^2=$ ` 1 ` $1 +$ ` -2 ` $(x+1)+$ ` 1 ` $ \left( x+1 \right) ^{2} .$

</div>

**i)** We can show that $\left\{1,(x+2), \left( x+2 \right) ^{2},x^2\right\}$ is a linearly dependent set by writing

<div style="text-align: center">

  $x^2=$ ` 4 ` $1 +$ ` -4 ` $(x+2)+$ ` 1 ` $ \left( x+2 \right) ^{2} .$

</div>

---

**ii)** Let's also show that $\left\{1,(x-2), \left( x-2 \right) ^{2},x^2\right\}$ is linearly dependent by writing

<div style="text-align: center">

  $x^2=$ ` 4 ` $1 +$ ` 4 ` $(x-2)+$ ` 1 ` $ \left( x-2 \right) ^{2}.$

</div>

</div>




##### Question 6

<div class="how_qb">

Answer the following 'True or False' questions (**note:** even without the magic 'how did I do' button, these questions should not require any calculation).

**i)** The set $\left\{ \begin{pmatrix}0 \\ 0 \\ 0\end{pmatrix} \right\}$ is  linearly independent.



---

**ii)** The set $\left\{ \begin{pmatrix}-8 \\ -1 \end{pmatrix} , \begin{pmatrix}5 \\ -3 \end{pmatrix} , \begin{pmatrix}7 \\ 9 \end{pmatrix} \right\}$ is linearly independent.

 - [ ] True
 - [x] False

---

**iii)** The set $\left\{ \begin{pmatrix}0 \\ 0 \end{pmatrix} , \begin{pmatrix}1 \\ 0 \end{pmatrix}\right\}$ is linearly dependent.

 - [x] True
 - [ ] False

---

**iv)** The set $\{0\}$ is linearly independent.

 - [ ] True
 - [x] False

---

**v)** The set $\{-5+8x,2+3x,4-5x\}$ is linearly independent

 - [ ] True
 - [x] False

---

**vi)** The set $\{0,x\}$ is linearly independent

 - [x] True
 - [ ] False

</div>

---

### Alg1231W4T4 - Linear independence of orthogonal vectors

##### Question 1

 _video_


##### Question 2


<div class="how_qb">

Recall that two vectors $\mathbf{v}_{1}= \begin{pmatrix} x_{1}\\ y_{1} \end{pmatrix} $ and $\mathbf{v}_{2}= \begin{pmatrix} x_{2}\\ y_{2} \end{pmatrix} $ in the plane are **orthogonal**, or **perpendicular**, precisely when their dot product $$\mathbf{v}_{1}\cdot\mathbf{v}_{2}\equiv x_{1} x_{2}+y_{1}y_{2}$$ is zero.

Thus for example  $ \begin{pmatrix} 3\\ 5 \end{pmatrix} $ is orthogonal to [select all that apply]

 <input type="checkbox" disabled> $ \begin{pmatrix} 5\\ -8 \end{pmatrix} $ <input type="checkbox" disabled checked> $ \begin{pmatrix} -10\\ 6 \end{pmatrix} $ <input type="checkbox" disabled> $ \begin{pmatrix} -14\\ 23 \end{pmatrix} $ <input type="checkbox" disabled checked> $ \begin{pmatrix} 35\\ -21 \end{pmatrix} .$

 In general to get a simple vector orthogonal to $\mathbf{v}= \begin{pmatrix} x\\ y \end{pmatrix} $  we could just choose the vector $\begin{pmatrix} y \\ -x \end{pmatrix}$ or any multiple of it.

 Using this definition, the only vector which is orthogonal to itself in $\mathbb{R}^{2}$ is the vector ` <0,0> ` .

<div style="background-color: rgb(230, 230, 250);">

 **Recall:** the Maple notation for the vector $\begin{pmatrix} 1 \\ 2 \end{pmatrix}$ is **< 1,2 >**. 

</div>

---

In three dimensions we define orthogonality also in terms of the dot product. If $\mathbf{v}_{1}= \begin{pmatrix} x_{1}\\ y_{1}\\ z_{1} \end{pmatrix} $ and $\mathbf{v}_{2}= \begin{pmatrix} x_{2}\\ y_{2}\\ z_{2} \end{pmatrix} $ then the dot product is $$\mathbf{v}_{1}\cdot\mathbf{v}_{2}\equiv x_{1}x_{2}+y_{1}y_{2} +z_{1}z_{2},$$ and again $v_1$ is defined to be **orthogonal**, or **perpendicular**, to $v_2$ precisely when $$ \mathbf{v}_{1}\cdot\mathbf{v}_{2}=0. $$

Thus for example $ \begin{pmatrix} 3\\ 4\\ 1 \end{pmatrix} $ is orthogonal to 

 <input type="checkbox" disabled checked> $ \begin{pmatrix} 0\\ 1 \\ -4 \end{pmatrix} $ <input type="checkbox" disabled checked> $ \begin{pmatrix} 4\\ -3\\ 0 \end{pmatrix}$ <input type="checkbox" disabled checked> $ \begin{pmatrix} 5\\ -4\\ 1 \end{pmatrix} $ <input type="checkbox" disabled> $ \begin{pmatrix} -2\\ -4\\ 23 \end{pmatrix} $ <input type="checkbox" disabled> $ \begin{pmatrix} 1\\ -3\\ 4 \end{pmatrix}.$


 Using this definition, the only vector which is orthogonal to itself in $\mathbb{R}^{3}$  is the vector ` <0,0,0> ` .


<div style="background-color: rgb(230, 230, 250);">

 **Recall:** the Maple notation for the vector $\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$ is **< 1,2,3 >**. 

</div>

</div>


##### Question 3


<div class="how_qb">

A set of vectors $S=\left\{ \mathbf{v}_{1},\mathbf{v}_{2},\cdots,\mathbf{v}_{n}\right\} $ in a vector space $V$ is an **orthogonal set** if each $v_k$ is a non-zero vector, and if any two vectors distinct vectors are orthogonal, that is 


<div style="text-align: center">

  $ \mathbf{v}_{i}\cdot \mathbf{v}_{j}=0$ &nbsp;&nbsp;  for &nbsp;&nbsp;  $i\neq j.$

</div>

Which of the following sets of vectors are orthogonal? [select all that apply]

   * [x] $\left\{ \begin{pmatrix} 5\\ -2 \end{pmatrix} , \begin{pmatrix} 4\\ 10 \end{pmatrix} \right\}  $

   * [x] $\left\{ \begin{pmatrix} 2\\ -1\\ 1 \end{pmatrix} , \begin{pmatrix}  4\\ 3\\ -5 \end{pmatrix} \right\}  $

   * [x] $\left\{ \begin{pmatrix} -1\\ 1\\ 1\\ 3 \end{pmatrix} , \begin{pmatrix} 0\\ -3\\ 0\\ 1 \end{pmatrix} , \begin{pmatrix} 6\\ 2\\ -14\\ 6 \end{pmatrix} \right\}.  $




</div>

##### Question 4

<div class="how_qb">

A set of three vectors $\left\{ \mathbf{v}_{1},\mathbf{v}_{2},\mathbf{v}_{3}\right\} $ in a vector space is an **orthogonal set** if each is vector is a non-zero vector, and if every vector is orthogonal with the other two.

This means explicitly that $$ \mathbf{v}_{1}\cdot\mathbf{v}_{2}=\mathbf{v}_{2}\cdot\mathbf{v}_{3} =\mathbf{v}_{3}\cdot\mathbf{v}_{1}=0. $$ So for example $ \left\{ \begin{pmatrix} 3\\ 4\\ 1 \end{pmatrix} , \begin{pmatrix} 5 \\ -2 \\ -7 \end{pmatrix} , \begin{pmatrix} 1\\ -1\\ 1 \end{pmatrix} \right\} $  is an orthogonal set in $\mathbb{R}^{3}$ . Can you find a set of three orthogonal vectors in $\mathbb{R}^{3}$ which includes the vector $ \begin{pmatrix} 4\\ -4\\ -3 \end{pmatrix} ?$ Such a set is ` {<4,-4,-3>,<4,4,0>,<12,-12,32>} ` .

<div style="background-color: rgb(230, 230, 250);">

 **Note:**

 * express your set of vectors using the Maple notation

<div style="text-align: center">

 **{< 4,-4,-3 >,< 1,2,3 >,< 4,5,6 >}**

</div>

 * don't forget to include **< 4,-1,-3 >** in your set.

</div>

 **Hint:** Once you have one vector orthogonal to $\begin{pmatrix} 4 \\ -1 \\ -3 \end{pmatrix}$ you can use the cross product to find a third.




</div>


##### Question 5


<div class="how_qb">

We saw in the previous question that the set $$S=\left\{ \mathbf{v}= \begin{pmatrix} 3\\ 4\\ 1 \end{pmatrix} ,\mathbf{u}= \begin{pmatrix} 5\\ -2\\ -7 \end{pmatrix} ,\mathbf{w}= \begin{pmatrix} 1\\ -1\\ 1 \end{pmatrix} \right\} $$ is an orthogonal set of vectors. Let's illustrate the lesson of the video, that an orthogonal sets of vectors is <select><option selected> always linearly independent </option></select>

---

Please complete the following argument.

We suppose first that we have a combination of the form $$\qquad\qquad\qquad r\mathbf{v}+s\mathbf{u}+t\mathbf{w} = \mathbf{0} \qquad\qquad(1) $$ for some constants $r,s$ and $t.$ To show that $\left\{ \mathbf{v} ,\mathbf{u},\mathbf{w}\right\} $  is a linearly independent set, we want to show that <select><option selected> we must have r = s = t = 0 </option></select>

To show that $r=0,$ we take the dot product of both sides of $(1)$ with the vector $v.$ This gives $$ \mathbf{v}\cdot\left( r\mathbf{v}+s\mathbf{u}+t\mathbf{w}\right) =\mathbf{v}\cdot\mathbf{0} $$ or $$\qquad\qquad r\mathbf{v}\cdot\mathbf{v}+s\mathbf{v}\cdot\mathbf{u}+t\mathbf{v} \cdot\mathbf{w}=0.\qquad\qquad(2) $$ Now, looking at the vectors in $S$ above, we see that

<div style="text-align: center">

  $\mathbf{v}\cdot \mathbf{v}=$ ` 26 ` $, \mathbf{v}\cdot \mathbf{u}= $ ` 0 ` and $\mathbf{v}\cdot \mathbf{w}= $ ` 0 ` .

</div>

Substituting these values into equation $(2)$ gives

<div style="text-align: center">

  ` 26r ` $=0.$

</div>

from which we easily deduce that $r$ must equal $0$ .

Employing exactly the same reasoning, we deduce that we must have $s =$ ` 0 ` and $t =$ ` 0 ` .

So, since $r=0, s=0, t=0$ is <select><option selected> the only solution </option></select> to $r\mathbf{v}+s\mathbf{u}+t\mathbf{w}=0$, we conclude that $\left\{ \mathbf{v} ,\mathbf{u},\mathbf{w}\right\} $  is a <select><option selected> linearly independent set </option></select> .


</div>


##### Question 6


<div class="how_qb">

It is also possible to define functions as being orthogonal if we can find the correct definition to replace the dot product.

If we take two functions $f$ and $g,$ defined over the interval $[0,2\pi]$, then we can define a fancy inner **product** $$\displaystyle \big\langle f,g\big\rangle= \int_0^{2\pi} f(x)g(x)dx. $$ This will play the same role as the dot product, taking two vectors as input and spitting out a number. Using this, we define two functions to be **orthogonal** if $$\displaystyle \big\langle f,g\big\rangle= 0, $$ The same way we do for geometric vectors.

Let's consider the functions $$f(x)=\sin(5 x),\qquad g(x)=\sin(8 x).$$ Using the inner product definition above we can determine

 - $\displaystyle \big\langle f,g\big\rangle= \int_0^{2\pi} \sin(5 x) \sin(8 x) dx= $ ` 0 `
 - $\displaystyle \big\langle f,f\big\rangle= \int_0^{2\pi} \big(\sin(5 x)\big)^2 dx=$ ` Pi `
 - $\displaystyle \big\langle g,g\big\rangle= \int_0^{2\pi}\big(\sin(8 x)\big)^2 dx= $ ` Pi `

Showing that $f(x)=\sin(5 x)$ and $g(x)=\sin(8 x)$ are orthogonal with respect to this cool new product.

<div style="background-color: rgb(230, 230, 250);">

 **Note:** you may need to remember that the Maple notation for $\pi$ is **Pi**.

</div>

<div style="background-color: rgb(230, 230, 250);">

 **Hint:**

  - you might find it easier to evaluate the integrals above if you expand the product $$\displaystyle \sin(5 x) \sin(8 x)= \left(\frac{e^{i5 x}-e^{-i5 x}}{2i}\right)\left(\frac{e^{i8 x}-e^{-i8 x}}{2i}\right).$$
  - this trick also works for $\left(\sin(5 x)\right)^2$ and $\left(\sin(8 x)\right)^2$ , and should yield familiar relations.


</div>


</div>



---

### Maple1231W4T5 - Further Linear Algebra I

##### Question 1

?>_随机题！需要补全题目才可出答案！_

<div id="t5q1">

<div class="how_qb">

Suppose that $$\mathbf u_1 = () \qquad \mathbf u_2 = () \qquad \mathbf u_3 = () \qquad \mathbf u_4 = ()$$ To avoid typing errors, you can copy and past the following sequences to your Maple worksheet to form entries of the vectors.

> **输入题目中提供的四行Maple**

 第一行: <input style="width: 80%" v-model="i1" v-on:input="calsq1()">

 第二行: <input style="width: 80%" v-model="i2" v-on:input="calsq1()">

 第三行: <input style="width: 80%" v-model="i3" v-on:input="calsq1()">

 第四行: <input style="width: 80%" v-model="i4" v-on:input="calsq1()">

(a) Find the dot product of $\mathbf u_1$ and $\mathbf u_2$ . Enter your answer in the box below. $$\mathbf u_1 \cdot \mathbf u_2 = $$

> **将下方的内容复制到Maple出答案**
 
 <code> <{{i1}}>.<{{i2}}>; </code>

(b) Suppose that  $A$ is the matrix whose columns are these four vectors in order, i.e. $$A= (\mathbf u_1 \mid \mathbf u_2 \mid \mathbf u_3 \mid \mathbf u_4)$$ Let $ v $   be the vector $<$ <input style="width: 30px" v-model="i5" v-on:input="calsq1()"> , <input style="width: 30px" v-model="i6" v-on:input="calsq1()"> , <input style="width: 30px" v-model="i7" v-on:input="calsq1()"> , <input style="width: 30px" v-model="i8" v-on:input="calsq1()">$>$ Hence $A\mathbf v$ is a linear combination of the form $$\lambda_1 \mathbf u_1 + \lambda_2\mathbf u_2 + \lambda_3 \mathbf u_3 + \lambda_4\mathbf u_4$$    Enter the values of $$\lambda_1,\ \lambda_2,\ \lambda_3, \ \lambda_4$$ in the boxes below.



<div style="text-align: center">

  $\lambda_1 = $ <code> {{i5}} </code> , $\lambda_2 = $ <code> {{i6}} </code>  ,$\lambda_3 = $ <code> {{i7}} </code>  ,$\lambda_4 = $ <code> {{i8}} </code>

</div>

(c) Suppose that $ A\mathbf v = (b_1 \ \ b_2 \ \ \cdots \ \ b_{6})^T$  

Enter the value of $b$ <input style="width: 30px" v-model="ia1" v-on:input="calsq1()"> in the box below.

  $b$ {{ia1}} $=$

> **将下方的内容复制到Maple出答案**

 <code> {{a1}} </code>
 

</div>

##### Question 2

?>_随机题！需要补全题目才可出答案！_

<div class="how_qb">

Suppose that $S=\{\mathbf u_1, \mathbf u_2, \mathbf u_3, \mathbf u_4\}$ where $$\mathbf u_1 = () ,\qquad \mathbf u_2 = () ,\qquad \mathbf u_3 = () ,\qquad \mathbf u_4 = ()\qquad and\qquad \mathbf v = ()$$

 To avoid typing errors, you can copy and past the following sequences to your Maple worksheet to form entries of the vectors or an augmented matrix.

> **输入题目中提供的五行Maple**

 第一行: <input style="width: 80%" v-model="i9" v-on:input="calsq2()">

 第二行: <input style="width: 80%" v-model="i10" v-on:input="calsq2()">

 第三行: <input style="width: 80%" v-model="i11" v-on:input="calsq2()">

 第四行: <input style="width: 80%" v-model="i12" v-on:input="calsq2()">

 第五行: <input style="width: 80%" v-model="i13" v-on:input="calsq2()">

 The vector $v$ in the span of $S$ written in the form $$\alpha \mathbf u_1 + \beta \mathbf u_2 + \gamma \mathbf u_3 + \delta \mathbf u_4 $$ Find a possible set of values for $\alpha,\ \beta, \ \gamma, \ \delta$ Enter the values of $\alpha,\ \beta, \ \gamma, \ \delta$ as a sequence in the box below $$[\alpha,\beta,\gamma, \delta]=$$


 > **将下方的内容复制到Maple出答案**

 <code> {{a2}} </code>



</div>

##### Question 3

?>_随机题！需要补全题目才可出答案！_

<div class="how_qb">

Suppose that  $S=\{p_1,\ p_2,\ p_3,\ p_4\}$ , where


  $p_1(x) =$<br>$p_2(x) =$<br>$p_3(x) =$<br>$p_4(x) =$<br>$p(x) =$

To avoid typing errors, you can copy and past the following sequences to your Maple worksheet.

> **输入题目中提供的五行Maple**

 第一行: <input style="width: 80%" v-model="i9" v-on:input="calsq2()">

 第二行: <input style="width: 80%" v-model="i10" v-on:input="calsq2()">

 第三行: <input style="width: 80%" v-model="i11" v-on:input="calsq2()">

 第四行: <input style="width: 80%" v-model="i12" v-on:input="calsq2()">

 第五行: <input style="width: 80%" v-model="i13" v-on:input="calsq2()">


The polynomial  $p$ is a linear combination of  $S$ written in the form $$\alpha p_1 + \beta p_2 + \gamma p_3 + \delta p_4 $$ Find a possible set of values for $\alpha,\ \beta, \ \gamma, \ \delta$. Enter the values of $\alpha,\ \beta, \ \gamma, \ \delta$ as a sequence in the box below $$[\alpha,\beta,\gamma, \delta]=$$


 > **将下方的内容复制到Maple出答案**

 <code> {{a2}} </code>



</div>


##### Question 4

?>_随机题！需要补全题目才可出答案！_

<div class="how_qb">

Suppose that $S=\{\mathbf u_1, \mathbf u_2, \mathbf u_3, \mathbf u_4, \mathbf u_5, \mathbf u_6\} \subset \mathbb R$ <input style="width: 30px" v-model="ia2" v-on:input="calsq3()"> where $$\mathbf u_1 = () ,\qquad \mathbf u_2 = () ,\qquad \mathbf u_3 = () ,\qquad \mathbf u_4 = () ,\qquad \mathbf u_5 = () \qquad and\qquad \mathbf u_6 = ()$$

 To avoid typing errors, you can copy and past the following sequences to your Maple worksheet.

> **输入题目中提供的六行Maple**

 第一行: <input style="width: 80%" v-model="i14" v-on:input="calsq3()">

 第二行: <input style="width: 80%" v-model="i15" v-on:input="calsq3()">

 第三行: <input style="width: 80%" v-model="i16" v-on:input="calsq3()">

 第四行: <input style="width: 80%" v-model="i17" v-on:input="calsq3()">

 第五行: <input style="width: 80%" v-model="i18" v-on:input="calsq3()">

 第六行: <input style="width: 80%" v-model="i19" v-on:input="calsq3()">

Since the number of vectors in $S$ is greater that the dimension of $\mathbb R$ <input style="width: 30px" v-model="ia2" v-on:input="calsq3()"> ,  the set $S$ <select><option selected> must be linearly dependent </option></select>

Find a possible set of values for $\lambda_1,\ \lambda_2, \ \lambda_3, \ \lambda_4, \ \lambda_5, \ \lambda_6$ , not all zero, such that $$\lambda_1 \mathbf u_1 + \lambda_2 \mathbf u_2 + \lambda_3 \mathbf u_3 + \lambda_4\mathbf u_4 + \lambda_5\mathbf u_5 + \lambda_6\mathbf u_6 = \mathbf 0$$ Enter the values of   $\lambda_1,\ \lambda_2, \ \lambda_3, \ \lambda_4, \ \lambda_5, \ \lambda_6$ as a sequence in the box below $$[\lambda_1,\ \lambda_2, \ \lambda_3, \ \lambda_4, \ \lambda_5, \ \lambda_6] = $$

> **将下方的内容复制到Maple出答案**

 <code> {{a3}} </code>

</div>


##### Question 5

?>_随机题！需要补全题目才可出答案！_

<div class="how_qb">

The column space of a matrix $A$, $col (A)$ is the span of the columns of $A$. The rank of $A$ is the dimension of $col(A)$ .

Use Maple to find the dimension of the column space of $A$ , where $$A= ()$$ To avoid typing errors, you can copy and past the following sequence of entries of $A$:

> **输入题目中提供的六列Maple**

 第一列: <input style="width: 80%" v-model="i20" v-on:input="calsq4()">

 第二列: <input style="width: 80%" v-model="i21" v-on:input="calsq4()">

 第三列: <input style="width: 80%" v-model="i22" v-on:input="calsq4()">

 第四列: <input style="width: 80%" v-model="i23" v-on:input="calsq4()">

 第五列: <input style="width: 80%" v-model="i24" v-on:input="calsq4()">

and edit it appropriately to make a matrix.  Enter the rank of $A$  in the box below.


> **将下方的内容复制到Maple出答案**

 <code> {{a4}} </code>

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
        i18:0,
        i19:0,
        ia1:0,
        ia2:0,
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
        this.a1 = "Vector(<<"+this.i1+">|<"+this.i2+">|<"+this.i3+">|<"+this.i4+">>.<"+this.i5+","+this.i6+","+this.i7+","+this.i8+">)["+this.ia1+"];";
        
      },
      calsq2() {
        this.a2 = "with(LinearAlgebra):LinearSolve(<<"+this.i9+"> | <"+this.i10+"> | <"+this.i11+"> | <"+this.i12+">>, <"+this.i13+">);";

      },
      calsq3() {

        var text = "0";

        for (var i=1;i<this.ia2&&i<10;i++) text += ",0"



        this.a3 = "with(LinearAlgebra):LinearSolve(<<"+this.i14+"> | <"+this.i15+"> | <"+this.i16+"> | <"+this.i17+">|<"+this.i18+">|<"+this.i19+">>,<"+text+">);";

      },
      calsq4() {
        this.a4 = "with(LinearAlgebra):Rank(<<"+this.i20+"> | <"+this.i21+"> | <"+this.i22+"> | <"+this.i23+">|<"+this.i24+">>);"

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

