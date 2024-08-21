## Week 5 Calculus

>课程：[数学课程](/DPST1014/) &nbsp; [数学作业](/homework/DPST1014/)

?> mobius: [Week 3 Calculus![logo](../../../../../../logosvg01.svg)](https://unsw.mobius.cloud/1520?gid=5448)

---

### Calc1231W5T1 - Population growth

##### Question 1

 _video_

##### Question 2

?>_随机题！需要补全题目才可出答案！_

<div id="t1q2">



<div class="how_qb">

In 1859 Thomas Austin released 24 rabbits on his property in Victoria, Australia.

<div style="text-align: center">

 ![logo](./file/CSIRO_ScienceImage_4376_The_European_rabbit_IOryctolagus_cuniculusI.jpg ':size=400')

</div>


Let $r(t)$ be the Australian rabbit population years  t
  after the initial release of rabbits. Then suppose the population increases according to the differential equation: $$\frac{dr}{dt} =  0.1872
 \times r$$ Then

<div style="text-align: center">

 $r(0) = $ ` 24 ` .

</div>

With this initial condition, the solution to this differential equation is

<div style="text-align: center">

$r(t) = $ ` 24*exp(0.1872*t) ` .

</div>

Hence, we can estimate (to the nearest rabbit):

<div style="text-align: center">

the rabbit population in <input style="width: 50px" v-model="i1" v-on:input="calsq1()"> to be <code> {{a1}} </code> .

</div>

</div>


 

##### Question 3

?>_随机题！需要补全题目才可出答案！_

<div class="how_qb">

After 1859, the Australian rabbit population spread quickly throughout the southern states. Queensland and Western Australia responded by constructing rabbit proof fences to protect their agricultural interests. The fences were not very effective.

<div style="text-align: center">

![logo](./file/StateLibQld_1_197791_Stevenson's_wire_fence.jpg ':size=400')

</div>

Suppose the Australian rabbit population is contained within a circle centred at Thomas Austin's house in Victoria with radius $R(t)$ ,  where  t is the number of years after 1859. Let's suppose also that the radius of this rabbit circle grows at a constant rate of

<div style="text-align: center">

$\frac{dR}{dt} = 40 $ kilometers per year.

</div>

Initially $R(0) = 0$ , so with this information we can solve the differential equation to find

<div style="text-align: center">

$R=R(t) = $ ` 40t `

</div>

We can also express  $t$ as a function of  $R$:

<div style="text-align: center">

$t = $ ` R/40 `

</div>

Using the last equation, the rabbit population

 * reaches Queensland, <input style="width: 50px" v-model="i2" v-on:input="calsq1()"> kilometers away from Thomas Austin's house, after <code> {{ i2/40 }} </code> years.

</div>

##### Question 4

?>_随机题！需要补全题目才可出答案！_

<div class="how_qb">

The Australian rabbit population grew exponentially so long as resources were plentiful. But resources such as food and water place an environmental limit on the maximum population. As the population approaches this environmental limit, a different kind of growth is exhibited. This was first identified in 1845 by Pierre-François Verhulst.

<div style="text-align: center">

![logo](./file/512px-Rabbits_MyxomatosisTrial_WardangIsland_1938.jpg ':size=400')

</div>

Taking into consideration the environmental constraints, the rabbit population  $P$ (in millions now!!) is better described by the differential equation

$$\frac{dP}{dt} = \frac{1}{C}P\left(1 - \frac{P}{B}\right)$$


This is a separable differential equation that can be solved by integrating

$$\displaystyle B \int\frac{1}{P\left(B - P\right)} dP = \frac{1}{C} \int dt .$$

The solution to this equation is given by

<div style="text-align: center">

$P(t) = \frac{B}{1 + Ae^{-t/C}}$
<br> 【$B=$ <input style="width: 50px" v-model="ia1" v-on:input="calsq2()"> $,C=$ <input style="width: 50px" v-model="ia2" v-on:input="calsq2()"> 】

</div>

where  $A$ is a constant determined by the initial conditions. If we let $t$ be the number of years since 1950, then our initial condition becomes $P(0) = 600$ . From this we determine that

<div style="text-align: center">

$A = $ <input style="width: 50px" v-model="ia3" v-on:input="calsq2()">

</div>

Furthermore if the environmental conditions were to remain unchanged, then (to the nearest million rabbits) the rabbit population in $ 1980 $ would be <code> {{a2}} </code> million.

Interestingly the rabbit population will approach the maximum sustainable population of

<div style="text-align: center">

$\lim\limits_{t \to\infty} P(t) = $ <code> {{ia1}} </code> million.

</div>


</div>




##### Question 5

?>_随机题！需要补全题目才可出答案！_

<div class="how_qb">

> **I optimized this graph slightly，maybe it will work better ↓** <br>  你们可以用我调整过的这个版本，应该更好用些~

<!-- panels:start -->
<!-- div:left-panel -->

<iframe scrolling="no" title="Calc1231W5T1 - Population growth Q5" src="https://www.geogebra.org/material/iframe/id/nqpvazvq/width/647/height/379/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/true/sdz/true/ctl/false" width="300px" height="500px" style="border:0px;"> </iframe>


<!-- div:right-panel -->

Consider the logistic differential equation

<div style="text-align: center">

$$\frac{dP}{dt} = rP\left( 1 - \frac{P}{K}\right)$$

</div>

This is the equation used to describe population growth in the presence of constraints first proposed in 1845 by Pierre-François Verhulst, and it has remained the standard model for such population growth ever since.

A key question faced by ecologists is: how to fit the logistic equation to population data? This essentially comes down to finding the best value for the constants $K,r$

Here is an example. Suppose an ecologist takes four measurements of an endangered penguin population $P$ (in thousands) and the rate of change in population $\frac{dP}{dt}:$

|$P$|1|2|3|4|
|:--|:--|:--|:--|:--|
|$\frac{dP}{dt}$| <input style="width: 50px" v-model="i3" v-on:input="calsq1()"> | <input style="width: 50px" v-model="i4" v-on:input="calsq1()"> | <input style="width: 50px" v-model="ia4" v-on:input="calsq1()"> | <input style="width: 50px" v-model="ia5" v-on:input="calsq1()"> |

We cannot immediately find a curve of best fit, as $\frac{dP}{dt}$ is quadratic in $P$ . So we instead consider $$\frac{1}{P} \frac{dP}{dt} = r - \frac{r}{K}P$$ This quantity is linear in  $P$ . The data points are

|$P$|1|2|3|4|
|:--|:--|:--|:--|:--|
|$\frac{1}{P}\frac{dP}{dt}$| <code> {{(i3/1).toFixed(2)}} </code> | <code> {{(i4/2).toFixed(2)}} </code> | <code> {{(ia4/3).toFixed(2)}} </code> | <code> {{(ia5/4).toFixed(2)}} </code> |

<div style="text-align: center">

$r=$

$K=$

> *move the points, $r$ & $K$ will auto calculate in the graph<br>移动图中红点，$r$和$K$的值会在图中自动计算


</div>

<!-- panels:end -->


</div>


##### Question 6

?>_随机题！需要补全题目才可出答案！_

<div class="how_qb">

Let's use the logistic equation (which describes any population be it people, penguins or rabbits) to estimate the future human population of the world. Consider the following table of world population milestones, sourced from the [World Population Clock![logo](../../../../../../logosvg01.svg)](http://www.worldometers.info/world-population/#growthrate): 

|**Year**|1804|1927|1960|1974|1987|1999|2012|
|:--|:--|:--|:--|:--|:--|:--|:--|
|**Population<br>$P$<br>(Billions)**|1|2|3|4|5|6|7|
|$\frac{dP}{dt}$|-|-|0.0186|0.0194|0.0186|0.0129|0.0123|

In order to estimate the values of $r$ and $K$ in the expression $$\frac{dP}{dt} = rP\left(1 - \frac{P}{K}\right) $$ we use the same technique from the previous question, and obtain $$\frac{1}{P} \frac{dP}{dt} = r- \frac{r}{K}P \approx  0.0259 -  0.0019 P. $$ From this we deduce that


<div style="text-align: center">

$r = $ ` 0.0259 ` and<br>
$K = $ ` 13.63 ` (to two decimal places).

</div>

The solution to the logistic equation is then $$P(t) = \frac{K}{1 + Ae^{-rt}}$$ where the constant $A$ is determined by the initial conditions. If we let  $t$ be the number of years after 1999 then

<div style="text-align: center">

$P(0) = $ ` 6 ` .

</div>

Hence, to two decimal places,

<div style="text-align: center">

$A = $ ` 1.27 ` .

</div>

From this we can predict that the world population in  <input style="width: 50px" v-model="ia6" v-on:input="calsq1()">  will be (to two decimal places)


<div style="text-align: center">

 <code> {{(13.63/(1+1.27\*Math.exp(-0.0259\*(ia6-1999)))).toFixed(2)}} </code> billion.

</div>


</div>



---

### Calc1231W5T2 - Brine and related topics

##### Question 1

 _video_

##### Question 2


?>_随机题！需要补全题目才可出答案！_

<div class="how_qb">

A tank holds  <input style="width: 50px" v-model="i5" v-on:input="calsq1()">  litres of water in which  <input style="width: 50px" v-model="i6" v-on:input="calsq1()">  grams of salt has been dissolved. Brine which contains  <input style="width: 50px" v-model="i7" v-on:input="calsq1()">  grams of salt per litre is run in at a rate of  <input style="width: 50px" v-model="i8" v-on:input="calsq1()">  litres per minute. (See below for a picture of the tank).

The solution is thoroughly mixed and is extracted from the tank at the same rate. Let  $x$  be the number of grams of salt in the tank after  $t$  minutes.

Based on the information given

 * Initially there are <code> {{i6}} </code> grams of salt in the tank.
 * salt is being added to the tank at a rate of <code> {{i7\*i8}} </code> grams per minute
 * the number of litres in the tank at time  $t$ is <code> {{i5}} </code>
 * The salt is evenly distributed in the tank by mixing. Hence if there are  $x$ grams of salt in the tank, then one litre taken from this tank contains <code> x/{{i5}} </code> grams of salt, and {{i8}} litres contains $\displaystyle \frac{x}{100}$ grams of salt. The change in salt with respect to time is described by the differential equation $$  \displaystyle \frac{{\rm d}x}{{\rm d}t} = \text{inflow} - \text{outflow} = 150 - \frac{x}{100}.$$

  ![logo](./file/Mixing.png ':size=300')


</div>



##### Question 3

?>_随机题！需要补全题目才可出答案！_

<div class="how_qb">

The previous question showed how to setup an initial value problem, such as

<div style="text-align: center">

 $\displaystyle \frac{{\rm d}x}{{\rm d}t} = $ <input style="width: 50px" v-model="i9" v-on:input="calsq1()"> $- \frac{x}{100} $

</div>

 with the initial condition that   $x=$ <input style="width: 50px" v-model="i10" v-on:input="calsq1()">  when  $t=0$  . Now we can solve this equation for  $x$ .

This differential equation is (select all that are true)

 * [x] separable
 * [x] linear
 * [ ] exact
 * [ ] unsolvable.

Hence, we compute that $x = $ <code> {{i9\*100}}-{{i9\*100-i10}}/exp(t/100) </code>

</div>


##### Question 4

?>_随机题！需要补全题目才可出答案！_



<div class="how_qb">

One method to solve

<div style="text-align: center">

 $ \displaystyle \frac{{\rm d}x}{{\rm d}t} = $ <input style="width: 50px" v-model="i11" v-on:input="calsq1()"> $ - $ <input style="width: 50px" v-model="i12" v-on:input="calsq1()"> $/$ <input style="width: 50px" v-model="i13" v-on:input="calsq1()"> $ x$

</div>

 Multiplying by the integrating factor <code> exp({{i12}}/{{i13}}\*t) </code> ， we can write the left hand side as $$\displaystyle \frac{{d}}{{d}t}\left( x e^{...}\right)$$ and the right hand side as
 
<div style="text-align: center">

  <code> {{i11}}\*exp({{i12}}/{{i13}}\*t) </code>

</div>

Then we integrate both sides of this expression with respect to  $t$ . The absence of initial conditions means a constant of integration remains in our answer. How do you prefer to write this? (both answers are correct)
 * [ ] for some constant $ C $ .
 * [x] for some constant $ A $ .

The limiting value of $ x $ as $ t \rightarrow \infty $ is <code> {{i13\*i11}}/{{i12}} </code>

</div>

</div>


##### Question 5

?>_随机题！需要补全题目才可出答案！_

<div id="t2q4">

<div class="how_qb">

An unidentified virus infects a small town.  Each month  <input style="width: 30px" v-model="i1" v-on:input="calsq1()">   new cases are reported, and through recovery or death  <input style="width: 30px" v-model="i2" v-on:input="calsq1()"> %   of the infected population no longer have the disease. Let  V  be the number of people at time  t  who have the virus. Then

<div style="text-align: center">

$\displaystyle \frac{{\rm d}V}{{\rm d}t} = $ {{i1}} $ - $ {{i2}} $/ 100 V $

</div>

Initially, nobody has the disease. The solution to this initial value problem is:

<div style="text-align: center">

$V(t) = $ <code> {{i1\*100}}/{{i2}}(1-exp(-{{i2}}/100\*t)) </code>

</div>

Hence we can predict (to the nearest integer) the number of infected people after

 * <input style="width: 30px" v-model="i3" v-on:input="calsq1()"> months: $V($ {{i3}} $) =$ <code> {{((1-Math.exp(-i2/100\*i3))\*i1\*100/i2).toFixed(0)}} </code>

As time goes on, we expect that the number of infected people tends to <code> {{i1\*100}}/{{i2}} </code>


</div>



##### Question 6

?>_随机题！需要补全题目才可出答案！_

<div class="how_qb">

The effectiveness of a police force may be measured by its clearance rate: the number of charges laid in a month divided by the total number of unsolved crimes.

In Arachnid Boy's home town, new crimes are reported roughly <input style="width: 30px" v-model="i4" v-on:input="calsq1()"> times per month, and while Arachnid boy is in town, the police clearance rate is <input style="width: 30px" v-model="i5" v-on:input="calsq1()"> % .

Arachnid Boy comes back from his holiday and finds there are  <input style="width: 30px" v-model="i6" v-on:input="calsq1()">  unsolved crimes.

Let  $x$ be the number of unsolved crimes at the start of month  $t$ , with  $t=0$ representing the first month that Arachnid Boy is back from his holiday.

We can find an equation for $x$ by solving the initial value problem 



 * $\displaystyle \frac{{\rm d}x}{{\rm d}t} = $ <code> {{i4}}-{{i5/100}}x </code> crimes per month, and
 * initially, $ x = $ <code> {{i6}} </code> .

The solution to this inital value problem is

<div style="text-align: center">

  $x = $ <code> {{(i4/i5\*100).toFixed(0)}}+{{((i6\*i5/100-i4)/i5\*100).toFixed(0)}}\*exp(-{{i5/100}}t) </code>

</div>

As time drags on, the number of unsolved crimes approaches, to the nearest integer

<div style="text-align: center">

  $\lim\limits_{t\to\infty} x = $ <code> {{(i4/i5\*100).toFixed(0)}} </code>

</div>

</div>




### Calc1231W5T3 - Velocity of a falling object

##### Question 1

 _video_

##### Question 2

<div class="how_qb">

Suppose that  $v(t)$ is the velocity of a falling body depending on time  $t$ . The following differential equation $$ \displaystyle \frac{{\rm d}v}{{\rm d}t} = g - kv, \tag{1}$$ (where $ k$ and $ g$ are constants) can be solved using an integrating factor. To do this, rearrange equation $ (1)$ into the shape $$\displaystyle \frac{{\rm d}v}{{\rm d}t} + kv = g. \tag{2} $$ Then multiply both sides of this equation by the integrating factor $$e^{\int k dt} = e^{kt} $$ Note that the constant of integration is typically omitted in this step. This results in an equivalent differential equation: $$ \displaystyle\left(\frac{{\rm d}v}{{\rm d}t} + kv\right) e^{kt} = ge^{kt} \tag{3} $$ Equation $ (3)$ can be rewritten in the form

<div style="text-align: center">

  $\displaystyle \frac{ \rm d }{ \rm d t} \left(v e^{kt}\right) = $ ` g*exp(kt) `

</div>

(you can check this, by using the product rule on the left hand side).

Integrating with respect to $ t$ we get:

<div style="text-align: center">

  $ v e^{kt} = $ ` g*exp(k*t)/k ` $ + \, C$

</div>

for some constant  $C$ , and so the solution to equation  $(1)$ is

<div style="text-align: center">

  $v = $ ` g/k+C*exp(-k*t) `

</div>

</div>

##### Question 3

<div class="how_qb">

The equation $\displaystyle \frac{{\rm d}v}{{\rm d}t} = g - kv $ has a solution which was computed in the previous question as $$\displaystyle v = \frac{g}{k} + Ce^{-kt}$$ This represents the velocity of a falling object, subject to gravity and air resistance. As for the constants  $C,g,k$ :

 * <select><option selected> g </option></select> depends on the gravity (which near the Earth is -9.8 m/sec), 
 * <select><option selected> k </option></select> depends on the air resistance, and
 * <select><option selected> C </option></select> depends on initial conditions.

If the particle is initially at rest, meaning that when $ t = 0$ , $v =$ ` 0 ` .

then we can deduce that

<div style="text-align: center">

  $C = $ ` -g/k `

</div>

and so purely in terms of  $g$ and  $k$ ,

<div style="text-align: center">

  $ v = $ ` g/k(1-exp(-kt)) `

</div>

</div>


##### Question 4

?>_随机题！需要补全题目才可出答案！_

<div class="how_qb">

Suppose that the velocity  $v$ of a falling body, in some unit system, satisfies

<div style="text-align: center">

  $\displaystyle \frac{{\rm d}v}{{\rm d}t} = $  <input style="width: 30px" v-model="i7" v-on:input="calsq1()"> $-$  <input style="width: 30px" v-model="i8" v-on:input="calsq1()"> $\,v$

</div>

and when $t=$ <input style="width: 30px" v-model="i9" v-on:input="calsq1()">  , $v=$ <input style="width: 30px" v-model="i10" v-on:input="calsq1()">  . Then we can solve that


<div style="text-align: center">

 $ v = $ <code> {{i7}}/{{i8}}+({{i10}}-{{i7}}/{{i8}})\*exp(-{{i8}}t) </code>

</div>

We can also solve for the terminal velocity. Notice that as  $t$ grows large,  $v$ approaches some limit, this limit is the terminal velocity. Calculate

<div style="text-align: center">

 $ \lim\limits_{t\to\infty} v = $ <code> {{i7}}/{{i8}} </code>

</div>

</div>

</div>

##### Question 5

<div class="how_qb">

We usually use Newton's laws and integration to determine position  $x$ as a function of time  $t$ . Suppose the falling body starts at a height  $h$ off the ground at  $t=0$ , and has velocity  $v$ given by the differential equation $$\displaystyle \frac{{\rm d}v}{{\rm d}t} = g - kv$$ We have already seen how to derive $$\displaystyle v = \frac{g}{k}\left(1 - e^{-kt}\right)$$ Now let's integrate once more, to find the actual position as a function of time:

<div style="text-align: center">

 $ x = $ ` g/k*(t+exp(-kt)/k) ` $ + \,K$

</div>

Now using the initial conditions, we find

<div style="text-align: center">

 $ K = $ ` h-g/k^2 ` 

</div>

So altogether $$\displaystyle x = h + \frac{g}{k^2} \left( kt + e^{-kt} - 1\right)$$

</div>


##### Question 6

<div class="how_qb">

In the 17th century it was widely believed that the velocity of a falling object was proportional to distance travelled.  Galileo discovered that this cannot be the case.
 
Let's begin by supposing that velocity is proportional to the distance travelled from an initial resting point $h$ meters from the ground.
Then $$ \displaystyle \frac{{\rm d}x}{{\rm d}t} = k (h-x) $$
 
This differential equation is

 * [x] linear
 * [x] separable

and has solution
 
 * [ ] $x = h - e^{kt+C} $
 * [ ] $x = h + e^{kt+C} $
 * [ ] $x = h + e^{-kt+C} $
 * [x] $x = h - e^{-kt+C} $

<div style="background-color: rgb(230, 230, 250);">

**Challenge:** Have a look at the general formula for $v$ that you calculated in the previous question, and determine if (or how) the terminal velocity depends on the constants $g, k$ and $C.$

</div>

If the object is initially at height $h$ , then when $t = 0$, $x = h$ so

<div style="text-align: center">

 $ e^C = $ ` 0 ` .

</div>

Which is a contradiction! Hence velocity cannot be proportional to distance travelled.

</div>

---

### Calc1231W5T4 - Simple and compound and continuous compound interest

##### Question 1

 _video_

##### Question 2


<div class="how_qb">

Suppose that Jethro deposits  $\$2000$ into an account which pays simple interest of  $4\%$ per annum, which we express as the rate  $r=0.04.$  Simple interest means Jethro only earns interest on the principle $\$2000$ investment. After one year the total in the account is $\$$ ` 2080 ` .After  $5$ years the total in the account is  $\$$ ` 2400 ` .

Suppose that his friend Marlene deposits  $\$1000$ into an account which pays an interest rate of  $3\%$ per annum, which we express as the rate $ r=0.03$, but compounded monthly. Note that this $ 3\%$ per annum translates into the rate $ 0.25\%$ per month. After 1 month Marlene's account contains  $\$$ ` 1002.5 `, and after 12 months (1 year) it would contain  $\$$ ` 1030.41 ` . After three years it would contain  $\$$ ` 1094.05 ` .

<div style="background-color: rgb(230, 230, 250);">

**Note**: you can leave complicated expressions like $2000\times\left(1+\frac{13}{35}\right)^{35}$ for MapleTA to evaluate.

</div>

If you invest an amount  $A$ at an annual interest rate of $ r$ per annum, compounded $ n$ times per year, how much do you have at the end of the year? Let's derive this important formula.

In first compounding period of $\frac{1}{n}$ of a year, you earn $\frac{r}n A $ in interest. So after the first period, you would have a total of $A(1+\frac{r}{n})$. In the second period you also earn interest on your interest, so you would now have a total of $A(1+\frac{r}{n})^2$ . And so after one year (i.e. after all  $n$ periods) you would have a total of

 * [ ] $A(\frac{r}{n})^n$
 * [ ] $A(1+r)^n$
 * [x] $A(1+\frac{r}{n})^n$
 * [ ] $A(1+r)^{r/n}.$

</div>

##### Question 3

<div class="how_qb">

Obviously having your interest compounded is preferable to having just a fixed interest. But how much better? In the last question you hopefully deduced that an amount <select><option selected> A </option></select> , invested at an annual rate <select><option selected> r </option></select> (which is a number between  $0$ and  $1$ , with  $1$ representing  $100\%$ interest), but compounded <select><option selected> n </option></select> times a year would yield after one year $$\displaystyle A\left(1+\frac{r}{n}\right)^n.$$ Suppose we invest  $\$1000$ for $5$ years. Using a calculator, Maple, or the GeoGebra App at the bottom of the page, determine what is better:
 * [ ] Simple interest of $20\%$ for 5 years
 * [x] Compound interest of  $16\%$ for 5 years (compounded monthly).

<div style="background-color: rgb(230, 230, 250);">

**Note:** this amounts to finding what is bigger $1000(1+0.2\times5)$ or $1000\left(1+\frac{0.16}{12}\right)^{12\times5}$

</div>

Which is better?
 * [x] Simple interest of  $10\%$ for 5 years
 * [ ] Compound interest of  $6\%$ for 5 years (compounded monthly).

Which is better (note: since these numbers are so small the geogebra app might not be helpful here)
 * [ ] Simple interest of  $3\%$ for 5 years
 * [x] Compound interest of $ 2.9\%$ for 5 years (compounded monthly).

</div>

##### Question 4

<div class="how_qb">

We have seen that if we invest an amount  $A$ at an annual interest rate  $r$ compounded  $n$ times in a year then after one year we would have $A\left( 1+\frac{r}{n}\right) ^{n}.$ What is the approximate rate of change of our money? If we consider the first  $1/n$ period of a year in which our money goes from  $A$ to $A\left( 1+\frac{r}{n}\right) $  then the change in money is

<div style="text-align: center">

 $\Delta A = A\left( 1+\frac{r}{n}\right) -A= $ ` Ar/n `

</div>

while the length of the time period (in years) is

<div style="text-align: center">

 $\Delta t=$ ` 1/n `

</div>



So the rate of change of money per time is the quotient of these two, which is

<div style="text-align: center">

 $\displaystyle\frac{\Delta A}{\Delta t}=$ ` Ar `

</div>

We conclude that if the time interval is small, then approximately $$ \frac{dA}{dt}\simeq rA. $$ This is a familiar differential equation, with solution

 * [x] $A(t)=Ce^{rt}$
 * [ ] $A(t)=Ce^{rt/n}$
 * [ ] $A(t)=e^{Crt}$
 * [ ] $A(t)=Cre^{t}$

for some constant  $C.$ In fact this would correspond to the interest being compounded continuously!! In this case  $C$ represents <select><option selected> the initial amount </option></select> .

</div>

##### Question 5


<div class="how_qb">

Suppose a young graduate is depositing money into a bank account continuously at the rate of about  $\$5,000$ per year, and the account earns interest of  $4\%$ annually (compounded continuously). To start with let's say they have $\$18,000$ in the account. Assuming they don't make any withdrawals, how much money is in the account after six years?

In this case the change in money has two contributions:
 * [ ] tax refunds
 * [x] the interest earned
 * [x] the savings that are added
 * [ ] donations to charity.

Since the interest is being compounded continuously at a annual rate of $r=$ ` 1/25 `  the change in money per unit time (a year) is defined by the equation $$ \frac{dA}{dt}=0.04A+5000. $$ This will determine  $A\left( t\right) $, the amount in the account, as a function of time  $t.$ Happily this is <select><option selected> a first order linear ODE </option></select> which we know how to solve. The key is rearrange the equation into the form $$\frac{dA}{dt}-0.04A=5000$$ and then multiply both sides by an integrating factor, which is

<div style="text-align: center">

 $h(t)=$ ` exp(-0.04*t) `

</div>

and integrating, not forgetting a constant of integration. Then use the initial condition $A\left( 0\right) =$ ` 18000 `  to find that constant of integration. Motoring through this, we get the answer

<div style="text-align: center">

 $ A\left( t\right) = $ ` -125000+143000*exp(0.04*t) `

</div>

so that after 4 years they ought to have, to the nearest dollar,  ` 42812 ` dollars in the account.

</div>


##### Question 6

<div class="how_qb">

Suppose that you took out a college loan totalling  $\$40,000$ with interest of  $7.5\%$ that kicks in once you start work. At that point you set up an online payment plan which continuously deducts money from your pay at a rate which comes out to  $\$9,000$ per year. How much will you owe after four years?

This also involves a first-order linear differential equation, with the balance of the loan  $L(t)$ going up as interest is accumulated, and going down as payments are made. So the rate of change of $ L(t)$ will involve a positive contribution for the interest, and a negative contribution for the payments: it will be

<div style="text-align: center">

 $ \frac{dL}{dt}=$ ` 0.075 ` $L-$ ` 9000 ` .

</div>

Using our deep knowledge of solving first order linear ODEs, we find that

<div style="text-align: center">

 $L(t)=$ ` 120000 - 80000*exp((3*t)/40) `.

</div>

So after four years you will owe, to the nearest dollar,  ` 12011 ` dollars.

</div>

---

### Maple1231W5T5 - Further Linear Algebra II

##### Question 1

<div id="t5q1">

<div class="how_qb">

Suppose that $S=\{\mathbf u_1, \mathbf u_2, \mathbf u_3, \mathbf u_4, \mathbf u_5, \mathbf u_6\} \subset \mathbb R^4$ where $$\mathbf u_1 = () ,\qquad \mathbf u_2 = () ,\qquad \mathbf u_3 = () ,\qquad \mathbf u_4 = () ,\qquad \mathbf u_5 = ()\qquad and\qquad \mathbf u_6 = ()$$

 To avoid typing errors, you can copy and past the following sequences to your Maple worksheet.

> **输入题目中提供的六行Maple**

 第一行: <input style="width: 80%" v-model="i1" v-on:input="calsq1()">

 第二行: <input style="width: 80%" v-model="i2" v-on:input="calsq1()">

 第三行: <input style="width: 80%" v-model="i3" v-on:input="calsq1()">

 第四行: <input style="width: 80%" v-model="i4" v-on:input="calsq1()">

 第五行: <input style="width: 80%" v-model="i5" v-on:input="calsq1()">

 第六行: <input style="width: 80%" v-model="i6" v-on:input="calsq1()">


Let $A$ be the $4 \times 6$ matrix whose columns are vectors of  $S$ in order.

The rank of  $A $ is <select><option selected> the dimension of span(S) </option></select>

If the rank of  $A$ is equal to dim $(\mathbb R^4)$ , then $S$ <select><option selected> is </option></select> a spanning set for $\mathbb R^4$

If the rank of $ A $ is less to dim $(\mathbb R^4)$ , then $ S $ <select><option selected> is not </option></select> a spanning set for $\mathbb R^4$

Use Maple to find the rank of  $ A $ and enter your answer in the box below .

> **将下方的内容复制到Maple出答案**

<code> {{a1}} </code>

Hence,  $S$ <select><option selected> is not </option></select>  a spanning set for $\mathbb R^4$


</div>





##### Question 2


<div class="how_qb">


<!-- panels:start -->
<!-- div:left-panel -->

Suppose that  $S=\{\mathbf v_1, \ \dots,\ \mathbf v_n\} \subset \mathbb R^m$ . Let  $A$ be the $m \times n$ matrix whose columns are vectors in  $S$ in order.

The rank of $ A$ is <select><option selected> the dimension of span(S) </option></select> .

If the rank of  $A$ is equal to the number of vectors in  $S$ , then  $S$ <select><option selected> is </option></select> linearly independent .

If the rank of  $A$ is less than the number of vectors in $S$ , then  $S$ <select><option selected> is not </option></select>  linearly independent .

<!-- div:right-panel -->

Select all the matrices having the property that the columns are linearly independent.

![logo](./file/w5t5q2s2.png ':size=500')


<!-- panels:end -->


</div>

##### Question 3

<div class="how_qb">

(a) Suppose that $ A$ is an $m \times n$ real matrix. The function $T_A: \mathbb R^n \rightarrow \mathbb R^m$ defined by

<div style="text-align: center">

  $T_A(\mathbf x) = A\mathbf x, $ for all $\mathbb x \in \mathbb R^n$

</div>

 is a linear transformation.

 Let $A=()$ and  $x=()$ .

> **输入题目中提供的六列Maple**

 $A$第一列: <input style="width: 80%" v-model="i7" v-on:input="calsq2()">

 $A$第二列: <input style="width: 80%" v-model="i8" v-on:input="calsq2()">

 $A$第三列: <input style="width: 80%" v-model="i9" v-on:input="calsq2()">

 $A$第四列: <input style="width: 80%" v-model="i10" v-on:input="calsq2()">

 $A$第五列: <input style="width: 80%" v-model="i11" v-on:input="calsq2()">

 $x$第一列: <input style="width: 80%" v-model="i12" v-on:input="calsq2()">



Then $T_A(\mathbf x) =$

> **将下方的内容复制到Maple出答案**

 <code> {{a2}} </code>


<div style="background-color: rgb(230, 230, 250);">

**Recall**: the Maple notation for a vector $\begin{pmatrix} a \\ b \\ c \end{pmatrix}$ is **< a,b,c >**.

</div>

 Alternatively, you can copy your answer from your Maple worksheet and paste it to the answer box.

 (b) Suppose now that the linear map $T: \mathbb R^2 \rightarrow \mathbb R^3$ is defined by, for all $\mathbb x = \begin{pmatrix} x_1\\ x_2 \end{pmatrix} \in \mathbb R^2$ $$T(\mathbf x)= \begin{pmatrix} -8 x_1 + 4 x_2 \\ 6 x_1 + 10 x_2 \\ 5 x_1 - 10 x_2 \end{pmatrix}$$ Enter the matrix $ M$
  , in Maple syntax, in the box below such that  $T(\mathbf x) = M\mathbf x$ for all  $\mathbf x \in \mathbb R^2$ , 

<div style="text-align: center">

  $M=$ ` <<-8,6,5>|<4,10,-10>> `

</div>

<div style="background-color: rgb(230, 230, 250);">

**Recall**: the Maple notation for a matrix $\begin{pmatrix} a & b & c \\ d & e & f \end{pmatrix}$ is  **<< a,d >|< b,e >|< c,f >>**.

</div>

</div>

</div>


##### Question 4

<div id="t5q4">

<div class="how_qb">


<!-- panels:start -->
<!-- div:left-panel -->

Let $A$ be an $m \times n$ matrix. The kernel of  $A$ is the set of vectors $$(A)=\{\mathbf x: A\mathbf x = \mathbf 0\}$$ which is a vector space.

The dimension of ker $(A)$ is called the nullity of $A$ , denoted by nullity $(A)$ .

(a)  Find the nullity of the matrix 


<div style="text-align: center">

$$A=()$$

</div>

and enter in the box below.

> **输入题目中提供的五列Maple**

 第一列: <input style="width: 80%" v-model="i1" v-on:input="calsq1()">

 第二列: <input style="width: 80%" v-model="i2" v-on:input="calsq1()">

 第三列: <input style="width: 80%" v-model="i3" v-on:input="calsq1()">

 第四列: <input style="width: 80%" v-model="i4" v-on:input="calsq1()">

 第五列: <input style="width: 80%" v-model="i5" v-on:input="calsq1()">


<div style="text-align: center">

 $nullity (A) =$

</div>

> **将下方的内容复制到Maple出答案**

  <code> {{a1}} </code>


<!-- div:right-panel -->

![logo](./file/w5t5q4s1.png ':size=500')

<!-- panels:end -->



</div>

</div>


##### Question 5

<div id="t5q5">

<div class="how_qb">


<!-- panels:start -->
<!-- div:left-panel -->


Let $ A$ be an  $m \times n$ matrix. The image of $ A$  is the set of vectors

<div style="text-align: center">

$(A)=\{\mathbf y: \mathbf y = A\mathbf x \text{ for some } \mathbf x \in \mathbb R^n\}$

</div>

which is a vector space.

The dimension of im $(A)$ is called the rank of  $A$, denoted by rank $(A)$ .

(a)  Find the rank of the matrix 

<div style="text-align: center">

$A=()$

</div>

> **输入题目中提供的五列Maple**

 第一列: <input style="width: 80%" v-model="i1" v-on:input="calsq1()">

 第二列: <input style="width: 80%" v-model="i2" v-on:input="calsq1()">

 第三列: <input style="width: 80%" v-model="i3" v-on:input="calsq1()">

 第四列: <input style="width: 80%" v-model="i4" v-on:input="calsq1()">

 第五列: <input style="width: 80%" v-model="i5" v-on:input="calsq1()">

  and enter in the box below.

<div style="text-align: center">

$rank (A) =$

</div>

> **将下方的内容复制到Maple出答案**

   <code> {{a1}} </code>

Note: The Maple command for find the rank of  $A$ is Rank(A), upper case R.




<!-- div:right-panel -->

![logo](./file/w5t5q5s1.png ':size=500')

<!-- panels:end -->

 
</div>

</div>



<script>

  new Vue({
    el: '#t5q5',
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
        this.a1 = "with(LinearAlgebra):Rank(<<"+this.i1+">|<"+this.i2+">|<"+this.i3+">|<"+this.i4+">|<"+this.i5+">>);";
      },
      calsq2() {

      }
    }
  }); 


  new Vue({
    el: '#t5q4',
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
        this.a1 = "nops(NullSpace(<<"+this.i1+">|<"+this.i2+">|<"+this.i3+">|<"+this.i4+">|<"+this.i5+">>));";
      },
      calsq2() {

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
        this.a1 = "with(LinearAlgebra):Rank(<<"+this.i1+">|<"+this.i2+">|<"+this.i3+">|<"+this.i4+">|<"+this.i5+">|<"+this.i6+">>);"
      },
      calsq2() {
        this.a2 = "<<"+this.i7+">|<"+this.i8+">|<"+this.i9+">|<"+this.i10+">|<"+this.i11+">>.<"+this.i12+">;"
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
    el: '#t1q2',
    // Options...
    data () {
      return {
        i1:0,
        i2:1160,
        i3:0.5,
        i4:0.7,
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
        ia2:0,
        ia3:'1/2',
        ia4:0.51,
        ia5:0.6,
        ia6:2034,

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
        this.a1 = (24*Math.exp(0.1872*(this.i1 - 1859))).toFixed(0);
      },
      calsq2() {
        this.a2 = (this.ia1/(1+eval(this.ia3)*Math.exp(-30/this.ia2))).toFixed(0);

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

