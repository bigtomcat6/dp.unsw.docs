

## STACK Orientation Quiz

>课程：[物理手册](/DPST1022/) &nbsp; [物理作业](/homework/DPST1022/)


?> Quiz在这: [STACK Orientation Quiz![logo](../../../../../../logosvg01.svg)](https://moodle.telt.unsw.edu.au/mod/quiz/view.php?id=5194558)



---

### 题目


##### Question 1

<div style="background-color:#f3f7f9">
<div style="margin: 10px 10px 10px 10px">

<div style="height: 10px"></div>

 Welcome to the wonderful world of STACK!

 Entering your   answers into STACK isn't particularly hard, however there are a few nuances to the way that STACK accepts your answers, so lets dive right in!

 If you are familiar with entering mathematical expressions or formulas into a spreadsheet, you will find that entering them into STACK is very similar. In the box below, enter the equation $y = 5x + 2.$ (Remember to use an asterisk, i.e. *, to denote multiplication!)

 ` y=5*x+2 `

Notice that if you forgot to enter the multiplication sign, STACK provides you with a helpful reminder. Additionally, STACK will tell you what variables you have used in your answer. (Which is helpful if you accidentally forget a multiplication operator * somewhere.)

Also, take note that STACK will tell you what variables it sees in your answer. You can use this to further ensure you have typed in the expression correctly.

Division and subtraction is done in a very similar fashion with different symbols. For example, if you wish to enter $y = \frac{x}{4} - 3
$, you would simply use / (forward  slash) to represent division and the hyphen or minus key for subtraction.

Try entering $m = \frac{n}{5} - 6$ in the answer box below.

  ` m=n/5-6 `

Note: STACK is clever enough to recognise a lot of similar but equivalent expressions. In the above example, if you entered $m = \frac{1}{5} \times n - 6$ or $m = -6 + \frac{n}{5}$, STACK won't penalise you for it because it is mathematically equivalent.

</div>

</div>

---

##### Question 2

<div style="background-color:#f3f7f9">
<div style="margin: 10px 10px 10px 10px">

If we wish to exponentiate a number, we use the ^ (index) symbol. For example, if we wish to type an expression like $x^{-2},$ we can do so by typing x^(-2) into the answer box.

Additionally, there are a number of Greek letters whose use is commonplace in physics, such as $\alpha, \mu, \pi, \theta.$ In a question where you are required to use the variables in your answer, you type the English spelling for the Greek letter. The names of the Greek letters are listed on your formula sheet. For example, to use $\mu$ you would type mu. Try and enter the expression below into the answer box.

$$\frac{\mu \alpha^2}{ 2 \theta}.$$

  ` (mu*(alpha^2))/(2*theta) `

In the box below, enter the expression for the volume of a cylinder with radius 𝑟, and height ℎ.

  $V =$ ` Pi*h*r^2 `

One thing you may notice is that 𝜋 doesn't display as a 'variable found in your answer', whereas the other Greek letters do. This is due to the fact that 𝜋 is usually given its canonical value of $3.14159265\ldots .$

You should not copy variables from the question text, instead type them into the answer box using your keyboard.

</div>

</div>

---

##### Question 3

<div style="background-color:#f3f7f9">
<div style="margin: 10px 10px 10px 10px">

Perhaps our answer requires the use of a standard function such as log(𝑥) or cos(𝑥). In this case, we can use log or cos in the obvious way. Note: STACK assumes that log has base 𝑒; if you need log base 10 use log10(x). ln(x) is also recognised as log base 𝑒. Additionally, if you wish to use 𝑒𝑥 in an expression, the preferred syntax is exp(x).

In the box below, enter the following expression:

$$\frac{ \log(x+1) }{ \tan(x^2)} + \cos( e^{\frac{x^2}{4}} ).$$

  $\text{answer} =$ ` log(x+1)/tan(x^2)+cos(exp(x^2/4)) `

Remember that division is denoted with a / (forward slash), and that the use of brackets () is helpful to avoid issues with the orders of operations.

Now consider an equation involving a quantity such as d𝑥. To enter d𝑥 simply type dx. If you don't include a multiplication sign, STACK won't confuse d𝑥 for $d \times x.$

An example would by something such as $\mathrm{d} m = (2x + 5) \ \mathrm{d} x .$

The question may ask you to enter the above equation, but be careful as to what expressions you do or do not need to enter, depending on what is written to the left and right of the answer box.

Assuming the relation $\mathrm{d} m = (2x + 5) \ \mathrm{d} x ,$ enter the correct expression below.

 $\mathrm{d} m =$ ` (2*x+5) ` $\mathrm{d} x .$

Now, assuming the same relation, i.e. d𝑚=(2𝑥+5) d𝑥, enter the correct expression below.

 $\mathrm{d} m =$ ` (2*x+5)*dx `

Notice this time, the $\mathrm{d} x$ isn't present, so you must enter it. And remember, $\mathrm{d} x$ applies to the entire right-hand side of the equation.

</div>

</div>

---

##### Question 4

<div style="background-color:#f3f7f9">
<div style="margin: 10px 10px 10px 10px">

Now for the very important physics calculations you will inevitably perform. STACK is great at recognising what a particular number is (how many significant figures, size, etc), however it is not particularly great at displaying them in your answer.

**Part 1)**

For example, enter the number $28.0$ in the box below (correct to three significant figures).

  $\text{answer} =$ ` 28.0 `

Now, try entering the number $28.00$ (correct to four significant figures) in the same box above and see what happens.

You will notice that the answer DISPLAYED is the same as that displayed for $28.0$. However when STACK marks your answer, it will realise that you have entered the answer to four significant figures.

**Part 2)**

Now in the box below, enter the number $28.00145$ correct to FOUR significant figures.

  $\text{answer} =$ ` 28.00 `

**Part 3)**

STACK has an interesting way of determining the number of significant figures in integers. For example, enter $106$ below, correct to two significant figures:

  $\text{answer} =$ ` 110 `

Notice that when you type $110$ and press 'Check', STACK recognises that the answer you provided has two significant figures. That is because we have programmed it to first check that the answer provided has two significant figures. If the integer has any zeroes to the right, STACK ignores them. However, if you include a decimal point and zeroes to the right the point, STACK recognises that the number has an incorrect number of significant figures.

**Part 4)**

Now try and enter $110$ correct to three significant figures:

  $\text{answer} =$ ` 110 `

Notice that STACK also treats $110$ as a number with three significant figures! But it will mark you as incorrect if you write, for example, $110.000.$


**Part 5)**

If you find that confusing, we suggest that you use scientific notation or, more specifically, that you use 'E-notation'. E-notation (not to be confused with the mathematical constant $e = 2.718\ldots$ or the exponential function $e^{x})$ is a shorthand way of writing $\times 10^M,$ where $M$ is the order of magnitude. This can be entered into STACK using E, followed by the order of magnitude. For example, $3\times 10^{-5}$ can be entered as 3E-5.

Try entering $106$ correct to three significant figures using E-notation:

  $\text{answer} =$ ` 1.06E2 `

Notice that you can use either E-notation (1.06E2) or simply type 106. STACK recognises that both are correct.

Note: When one of your quizzes closes and you are informed as to what the correct answer for a particular question is, STACK often displays it using an incorrect number of significant figures. You should only use this as a guide for understanding what the overall value of the answer is.

</div>

</div>

---

##### Question 5

<div style="background-color:#f3f7f9">
<div style="margin: 10px 10px 10px 10px">

When working with unknown quantities it is often convenient to use subscripts in variables. For example, consider two circles with radius $r_1
$ and $r_2$ respectively. If you are required to answer a question using a subscript, simply type the answer into the answer box using an underscore before the subscript. For example, an expression such as $r_2$ would be entered with the command r_2.

Try typing $r_f$ into the box below.

  $\text{answer} =$ ` r_f `

Consider our example above with two circles with radius $r_1$ and $r_2$. In the answer box below, enter an expression representing the difference between the two areas of the circles, assuming that $r_1 > r_2$. (Exponentiating works appropriately with subscripts, so to enter $r_1^2$ you would simply enter r_1^2.

  $\text{answer} =$ ` Pi*(r_1^2-r_2^2) `

</div>

</div>

---

##### Question 6

<div style="background-color:#f3f7f9">
<div style="margin: 10px 10px 10px 10px">

In this question we will explore significant figures, and multi-part answers.

Consider variables $𝑥=21.024$ and $𝑦=6.00$. Notice that 𝑥 is known to five significant figures, and 𝑦 is known to three significant figures.

**Part 1)**

Calculate the quantity $z = \frac{x}{y}.$ You should find that this is equal to $3.504$. Given that the maximum number of significant figures common to both 𝑥 and 𝑦 is three, we can only know 𝑧 correctly to three significant figures. So to answer the question, you should enter your answer for 𝑧 correct to three significant figures.

  $z =$ ` 3.50 `

Now, consider if you wish to calculate a quantity involving 𝑧, such as $m = 2z.$ You should use the non-rounded value of 𝑧, before you wrote it correct to three significant figures. Notice that if you don't do this, you will end up with a different answer.

<u>Correct:</u>

$m = 2 \times z = 2 \times 3.504 = 7.008.$ Now, given that 𝑧 is known to three significant figures, you would enter your answer as $𝑚=7.01.$

<u>Incorrect:</u>

$m = 2 \times z = 2 \times 3.50 = 7.00.$

**Part 2)**

Now, if I were to use 𝑚 again, would I use 𝑚=7.008 or 𝑚=7.01?

correct value of 𝑚 to reuse =

 - [ ] (No answer given)
 - [x] 7.008
 - [ ] 7.01

</div>

</div>

---

##### Question 7

<div style="background-color:#f3f7f9">
<div style="margin: 10px 10px 10px 10px">

In this question, we will consider a typical question with vector solutions.

When vector solutions are required, $\mathbf{\hat{i}},\mathbf{\hat{j}}, \text{ and } \mathbf{\hat{k}}$ will represent the unit vectors in the $x,y,z$ direction, respectively. However, in your answer you will only be required to enter the components of the vectors, not the $\mathbf{\hat{i}},\mathbf{\hat{j}}, \text{ and } \mathbf{\hat{k}}$ vectors themselves.

Enter the following force vector below $\mathbf{\vec{v}} = 2t \mathbf{\hat{i}} - t^2 \mathbf{\hat{k}} .$ As with every question, you must always enter something into every box you are provided with. Notice that there is no $\mathbf{\hat{j}}$ component, which means you must enter a 0 in the $\mathbf{\hat{j}}$ answer box.

  $\mathbf{\vec{v}} =$ ` 2*t ` $\mathbf{\hat{i}} +$ ` 0 ` $\mathbf{\hat{j}} +$ ` -t^2 ` $\mathbf{\hat{k}}$

Note also the difference between a normal vector $\mathbf{\vec{v}}$ and a unit vector $\mathbf{\hat{j}}$ . Usually, the unit vectors are $\mathbf{\hat{i}},\mathbf{\hat{j}}, \text{ and } \mathbf{\hat{k}}$. However, we may write

 $\mathbf{\vec{v}}$

meaning that $\mathbf{\vec{v}}$ has magnitude $v$ and is in the $\mathbf{\hat{v}}$ direction. (Here, $\mathbf{\hat{v}}$ is a unit vector.)

</div>

</div>

---

##### Question 8

<div style="background-color:#f3f7f9">
<div style="margin: 10px 10px 10px 10px">

In this question, we will investigate how error carries forward in STACK questions. It is important that you answer the parts in order. Try answering part 2 now, before answering part 1. If you click on "check" nothing will happen.

**Part 1)**

Let $z = 3 \times 1.$

(Obviously 𝑧 is 3, however, let's assume that you've made an arithmetic error along the way and you enter an answer of 2.)

Enter the number 2 in the box below.

  $z =$ ` 3 `

**Part 2)**

Enter the value for $2z$ in the box below using the incorrect value of 𝑧 that you entered in the box above.

  $2z =$ ` 6 `

**Part 3)**

Enter $3𝑧$ in the box below using the incorrect value for 𝑧 that you entered in Part 1.

  $3z =$ ` 9 `

Now, obviously the correct answers should be $3,6,9$ respectively. However, if you enter the first box INCORRECTLY, but then proceed to calculate $2𝑧$ and $3𝑧$ CORRECTLY, then you will not be penalised for your answers (besides the obvious penalty from getting part 1 incorrect).

HOWEVER,

If you are given an opportunity to re-attempt the question and you RECALCULATE 𝑧 correctly as 3, your original answers for Parts 2 and 3 will now be marked WRONG as your value of 𝑧 has CHANGED, so you must RECALCULATE $2𝑧$ and $3𝑧$.

Note: Feel free to try different values of 𝑧 in the first box, followed by the correct answers of $2𝑧,3𝑧.$ E.g. Answer $1=5$,Answer $2=10$,Answer $3=15$ will be marked as incorrect in Part 1, but marked as correct in Parts 2 and 3. However when you recalculate 𝑧 you must re-calculate Parts 2 and 3 as mentioned above.

</div>

</div>

---

##### Question 9

<div style="background-color:#f3f7f9">
<div style="margin: 10px 10px 10px 10px">

So far you have seen a lot of different answer types, but one of the most important types in Physics (and science in general) is scientific notation.

If you have a number such as $13400000$ there can be some ambiguity in how many significant figures it is correct to. Using scientific notation gives us an unambiguous way to save typing unnecessary 0's and specify significant figures. In STACK, we can use a number of different valid ways to express the same number.

It is clear that ${13400000} = 1.34 \times 10^7$, however you have seen that you can enter the answer as $1.34$ E $7$. Unfortunately, STACK sometimes uses a lowercase e in the same way as an uppercase E, to designate $\times 10^y.$ Alternatively, you could also enter the solution as $13.4 \times 10^6$ (and the corresponding E,e notation) and you would still be marked correct.

In the answer box below, try entering the number $13400000$ in 3 different ways.

1. Using $x \times 10^y.$

2. Using $𝑥$ E $𝑦.$

3. Using $𝑥$ e $𝑦.$

Note: Do not include any spaces in your expression, ie you should literally type xEy.

 ` 1.34E7 `

Notice that you can also just enter the number itself and STACK will still accept it as correct.

</div>

</div>

---

##### Question 10

<div style="background-color:#f3f7f9">
<div style="margin: 10px 10px 10px 10px">

If the weight force of an object is given by $F = mg$, what is the combined weight force of two of these objects with mass $m_1$ and $m_2$?

The solution to this will simply be the sum of the two weight forces $g \times (m_1+m_2).$ Notice that this is an algebraic expression in three variables, the expression can be written expanded as $g m_1 + g m_2.$ In this solution, we want to enter the expression in such a way that it is clear and unambiguous. Notice that if we have a function g evaluated at a point $m_1 + m_2$ this would be expressed as $g(m_1 + m_2).$ How does STACK tell the difference? One is an example of multiplication and the other is a function evaluation. Multiplication requires the use of the star * to tell STACK to multiply the two elements.

Enter the correct answer of $g*(m_1 + m_2)$ in the box below. Notice that STACK sees three variables here, $g, \ m_1 and m_2.$

Now, try and enter g(m_1 + m_2). Notice that this time, STACK sees 2 variables, m_1 and m_2, but it thinks that g is a function, as you have written it using STACK function syntax.

One important thing to note, it doesn't actually matter the order you enter an expression, STACK is smart enough to tell when (most) things are equivalent. For example, our solution is  $g \times (m_1 + m_2)$, but an answer of g\*m_1 + g\*m_2 would also be correct.

 ` g*(m_1 + m_2) `

</div>

</div>