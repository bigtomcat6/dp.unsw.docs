## Week 9 Algebra 

>课程：[数学课程](/DPST1014/) &nbsp; [数学作业](/homework/DPST1014/)

?> mobius: [Week 9 Algebra![logo](../../../../../../logosvg01.svg)](https://unsw.mobius.cloud/1520?gid=5454)

---

### Alg1231W9T1 - Eigenvectors and Eigenvalues

##### Question 1

 _video_

##### Question 2

?>_随机题！需要补全题目才可出答案！_

<div id="t1q2">

<div class="how_qb">

The **eigenvectors** of a square matrix $A$ are all <select><option> non-zero </option></select> vectors  $v$ such that $$A\mathbf{v}=\lambda\mathbf{v},$$ for some scalar  $λ$ , called the **eigenvalue**.

<div height="100px" style="display: flex;align-items: center;">For example, if &nbsp; $A =$ &nbsp; <div><input style="width: 30px" v-model="i1" v-on:input="calsq1()"> <input style="width: 30px" v-model="i2" v-on:input="calsq1()"> <input style="width: 30px" v-model="i3" v-on:input="calsq1()"><br><input style="width: 30px" v-model="i4" v-on:input="calsq1()"> <input style="width: 30px" v-model="i5" v-on:input="calsq1()"> <input style="width: 30px" v-model="i6" v-on:input="calsq1()"><br><input style="width: 30px" v-model="i7" v-on:input="calsq1()"> <input style="width: 30px" v-model="i8" v-on:input="calsq1()"> <input style="width: 30px" v-model="i9" v-on:input="calsq1()">
</div> &nbsp; then we can directly calculate that</div>

<div style="text-align: center">

<math xmlns="http://www.w3.org/1998/Math/MathML"><mfenced><mtable><mtr><mtd><mn>{{i1}}</mn></mtd><mtd><mn>{{i2}}</mn></mtd><mtd><mn>{{i3}}</mn></mtd></mtr><mtr><mtd><mn>{{i4}}</mn></mtd><mtd><mn>{{i5}}</mn></mtd><mtd><mn>{{i6}}</mn></mtd></mtr><mtr><mtd><mn>{{i7}}</mn></mtd><mtd><mn>{{i8}}</mn></mtd><mtd><mn>{{i9}}</mn></mtd></mtr></mtable></mfenced></math> $\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}=$ <code> <{{parseInt(i1)+parseInt(i3)}},{{parseInt(i4)+parseInt(i6)}},{{parseInt(i7)+parseInt(i9)}}> </code>  .


</div>

So we have demonstrated that $\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$ is an eigenvector with eigenvalue <code> {{parseInt(i1)+parseInt(i3)}} </code>

<div style="background-color: rgb(230, 230, 250);">

**Note**: the Maple notation for the vector $\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$ is **< 1 , 2 , 3 >**.

</div>

Similarly we can check that
 - $\begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$ is an eigenvector with eigenvalue <code> {{parseInt(i5)+parseInt(i6)}} </code>

 - $\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$ is an eigenvector with eigenvalue <code> {{parseInt(i1)+parseInt(i2)}} </code> .


</div>

</div>

##### Question 3

<div class="how_qb">

<!--iframe height="398px" scrolling="no" src="https://www.geogebra.org/material/iframe/id/bcnjFS7U/width/511/height/398/border/888888/rc/false/ai/false/sdz/false/smb/false/stb/false/stbh/true/ld/false/sri/true/at/auto" style="border:0px;" width="511px"></iframe-->

Consider the matrix $$A=\begin{pmatrix} 3 & 1 \\ 0 & 2 \end{pmatrix}$$ This matrix has eigenvalues  $2$ and  $3$ with respective eigenvectors

<div style="text-align: center">

 $\mathbf{v}_1=$ ` <1,-1> `  , $\mathbf{v}_2=$ ` <1,0> ` .

</div>

<div style="background-color: rgb(230, 230, 250);">

**Note**:
 - the Maple notation for the vector $\begin{pmatrix} 0.12 \\ 0.34  \end{pmatrix}$ is **< 0.12 , 0.34 >**.
 - make sure $\mathbf{v}_1$ corresponds to the eigenvalue  $2$ , and $\mathbf{v}_2$ corresponds to the eigenvalue  $3$.

</div>

<!--iframe height="398px" scrolling="no" src="https://www.geogebra.org/material/iframe/id/PbGYDRtZ/width/511/height/398/border/888888/rc/false/ai/false/sdz/false/smb/false/stb/false/stbh/true/ld/false/sri/true/at/auto" style="border:0px;" width="511px"></iframe-->

Consider the matrix $$B=\begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$$ This matrix has eigenvalues  $−1$ and $ 3$ with respective eigenvectors

<div style="text-align: center">

 $\mathbf{u}_1=$ ` <1,-1> `   $\mathbf{u}_2=$ ` <1,1> ` .

</div>

</div>


##### Question 4

<div class="how_qb">

For a square matrix  $A$, the statement

<div style="text-align: center">

 "$A$ has an eigenvalue $λ$"

</div>

is equivalent to the statement

<div style="text-align: center">

 "$(A-\lambda I)\mathbf{v}=\mathbf{0}$ has a non-zero solution  $v$ ".

</div>

Say your friend claims that the matrix $A=
\left(\begin{matrix}
   5 & 2 & -2  \\
   1 & 6 & -1  \\
   -1 & 1 & 4  \\
\end{matrix}\right)$ has eigenvalue $\lambda=4$ and wants our help finding the eigenvector. We proceed by attempting to solve the system of linear equations $$\big(A-4 I\,\big) \mathbf{v}=\mathbf{0}.$$ That is, we try to solve the system represented by the augmented matrix $$\left(\begin{matrix} 1 & 2 & -2 \\ 1 & 2 & -1 \\ -1 & 1 & 0 \end{matrix}\right|\left.\begin{matrix} 0 \\ 0 \\ 0 \end{matrix}\right).$$ This matrix can be row-reduced to $$\left(\begin{matrix} 1 & 2 & -2 \\ 0 & 3 & -2 \\ 0 & 0 & 1 \end{matrix}\right|\left.\begin{matrix} 0 \\ 0 \\ 0 \end{matrix}\right).$$ Recalling our experience in Math1131, we can see this has a unique solution, namely $\mathbf{v} = $ ` <0,0,0> ` .

<div style="background-color: rgb(230, 230, 250);">

**Note**: the Maple notation for the vector $\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$ is **< 1 , 2 , 3 >**.

</div>

Since <select><option> an eigenvector MUST be non-zero </option></select> , we conclude that [select all that apply]
 * [ ] the eigenvector is $\begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$
 * [x] our friend should double check their work
 * [x] that $4$ is not an eigenvalue of the matrix $A$.

</div>


##### Question 5

<div class="how_qb">

Your friend from the last question claims that the matrix  $B=\left( \begin{matrix}
   8 & 2 & -2  \\
   1 & 9 & -1  \\
   -1 & 1 & 7  \\
\end{matrix} \right)$ has eigenvalue $\lambda=6$  (your friend swears they double-checked this time). We can check this claim by attempting to solve the system of linear equations represented by the augmented matrix $$\left(\begin{matrix} 2 & 2 & -2 \\ 1 & 3 & -1 \\ -1 & 1 & 1 \end{matrix}\right|\left.\begin{matrix} 0 \\ 0 \\ 0 \end{matrix}\right).$$ This can be row-reduced to the matrix $$\left(\begin{matrix} 2 & 2 & -2 \\ 0 & 2 & 0 \\ 0 & 0 & 0 \end{matrix}\right|\left.\begin{matrix} 0 \\ 0 \\ 0 \end{matrix}\right),$$ and so we can find a non-zero solution $\mathbf{v} = $ ` <1,0,1> `

<div style="background-color: rgb(230, 230, 250);">

**Note**: the Maple notation for the vector $\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$ is **< 1 , 2 , 3 >**.

</div>

From this we can conclude that [select all that apply]
 * [x] $6$ really is an eigenvalue of the matrix
 * [x] our friend might just pass this course
 * [ ] $6$ is not an eigenvalue of the matrix.


</div>

##### Question 6

?>_随机题！需要补全题目才可出答案！_

<div id="t1q5">

<div class="how_qb">

For a square matrix  $A$, the statement

<div style="text-align: center">

 "$(A-\lambda I)\mathbf{v}=\mathbf{0}$ has a non-zero solution  $v$ ".

</div>

is equivalent to the statement 

<div style="text-align: center">

 "$$\det(A-\lambda I)=0$$".

</div>

The quantity $\det(A-\lambda I)$ is a polynomial in $ λ$, known as the **characteristic polynomial** of  $A$, and its roots are the eigenvalues of  $A$. This gives us a technique for finding the eigenvalues of $ A$.

Let's check our understanding.

**i)** The characteristic polynomial of $A=\begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$ is 

<div style="text-align: center">

$\det(A-tI)=\det\begin{pmatrix} 1 -t & 2 \\ 2 & 1-t \end{pmatrix}=$ ` t^2-2t-3 ` .

</div>

Ordered $t_1 < t_2$ ,  the roots of this roots are $t_1=$ ` -1 ` and $t_2=$ ` 3 ` .Ordered the same way, the associated eigenvectors are

<div style="text-align: center">

&nbsp; $\mathbf{v}_1=$ ` <1,-1> `

and $\mathbf{v}_2=$ ` <-1,-1> ` .

</div>

<div style="background-color: rgb(230, 230, 250);">

**Note**: the Maple notation for the vector $\begin{pmatrix} 1 \\ 2 \end{pmatrix}$ is **< 1 , 2 >**.

</div>

<div height="100px" style="display: flex;align-items: center;"> <strong>ii)</strong> The characteristic polynomial of  &nbsp; $B =$ &nbsp; <div><input style="width: 30px" v-model="i1" v-on:input="calsq1()"> <input style="width: 30px" v-model="i2" v-on:input="calsq1()"> <input style="width: 30px" v-model="i3" v-on:input="calsq1()"><br><input style="width: 30px" v-model="i4" v-on:input="calsq1()"> <input style="width: 30px" v-model="i5" v-on:input="calsq1()"> <input style="width: 30px" v-model="i6" v-on:input="calsq1()"><br><input style="width: 30px" v-model="i7" v-on:input="calsq1()"> <input style="width: 30px" v-model="i8" v-on:input="calsq1()"> <input style="width: 30px" v-model="i9" v-on:input="calsq1()">
</div> &nbsp; is the cubic</div>

<div style="text-align: center">

$\det(B-tI)=$ <code> -t^3+{{parseInt(i1)+parseInt(i5)+parseInt(i9)}}\*t^2+{{-i1\*i5-i9\*(parseInt(i1)+parseInt(i5))+i2\*i4}}\*t+{{i9\*i1\*i5-i9\*i2\*i4}} </code>

</div>

<div style="background-color: rgb(230, 230, 250);">

**Hint**: try expanding the determinant along the last row or last column.

</div>

Ordered $ t_1 < t_2 < t_3$ this has roots (and hence  $B$ has eigenvalues)

<div style="text-align: center">

 $t_1=$ {{i9}} , &emsp; $t_2=$ <code>{{parseInt(i1)+parseInt(i2)}}</code> , &emsp; $t_3=$ <code> {{i1-i2}} </code>

</div>


</div>

</div>

---

### Alg1231W9T2 - Eigenvectors and Eigenvalues of a reflection

##### Question 1

 _video_

##### Question 2

<div class="how_qb">

<div style="text-align: center">

 ![logo](./file/Week_8_Reflection_in_y_equals_x.png ':size=300')

</div>

Let's recall that a linear transformation  $T$ has an **eigenvector**  $\mathbf{v}\neq\mathbf{0}$ precisely when $T(\mathbf{v})=\lambda\mathbf{v}$ for some scalar  $λ$, which is called its **eigenvalue**.

We have seen that $$T(\begin{pmatrix} x \\ y \end{pmatrix})=\begin{pmatrix} y \\ x \end{pmatrix}=\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix}$$ is the reflection in the line $y=x$ . This has eigenvalues $\lambda_1=1$ and $\lambda_2=$ ` -1 ` with respective eigenvectors

<div style="text-align: center">

$\mathbf v_1=$ ` <1,1> ` and $\mathbf v_2=$ ` <1,-1> `

</div>

<div style="background-color: rgb(230, 230, 250);">

**Recall**: the Maple notation for the vector $\begin{pmatrix} 1 \\ 2 \end{pmatrix}$ is  **<1,2>**.

</div>

We say that $\lambda_1$ and $\lambda_2$ are the eigenvalues of the matrix $A=\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}.$

Let's note that the sum of the eigenvalues is $\lambda_1+\lambda_2=$ ` 0 ` and the product of the eigenvalues is $\lambda_1 \lambda_2=$ ` -1 ` . These two numbers, known as the trace and the determinant of  A
 , play an interesting role in transformations of the plane.


</div>

##### Question 3

<div class="how_qb">

<div style="text-align: center">

 ![logo](./file/Week_8_Reflection_in_y_equals_minus_x.png ':size=300')

</div>

Let $R$ be the linear map which reflects in $\mathbb R^2$ about the line $y=-x$. Geometrically we can see that an eigenvector of  $R$ associated to the eigenvalue $\lambda_1=1$ is the vector

<div style="text-align: center">

 $\mathbf v_1=$ ` <-1,1> ` .

</div>

The other eigenvalue is $\lambda_2=$ ` -1 ` , with associated eigenvector

<div style="text-align: center">

$\mathbf v_2=$ ` <1,1> ` .

</div>

The matrix that represents $ T$ is

<div style="text-align: center">

$B=$ ` <<0,-1>|<-1,0>> ` .

</div>

The characteristic polynomial for $ B$ is

<div style="text-align: center">

$p(t)={det}(B-tI)=$ ` t^2-1 `

</div>

<div style="background-color: rgb(230, 230, 250);">

**Recall**:
 - the Maple notation for the matrix $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ is **<<1 | 2>,<3 | 4>>**
 - the Maple notation for the vector $\begin{pmatrix} 1 \\ 2 \end{pmatrix}$ is **<1,2>** .

</div>


</div>

##### Question 4

<div class="how_qb">

<div style="text-align: center">

 ![logo](./file/Week_8_Reflection_in_origin.png ':size=300')

</div>

Consider the transformation  $S:\mathbb R^2\rightarrow \mathbb R^2$ which is reflection in the origin. Then  $S$ has matrix representation $S(\mathbf v) = C\mathbf v$ where

<div style="text-align: center">

$C=$ ` <<-1,0>|<0,-1>> `

</div>

The characteristic polynomial of $ C$ is

<div style="text-align: center">

$p(t)={det}(C-tI)=$ ` (1+t)^2 `

</div>

One could say this has zeros $\lambda_1=$ ` -1 ` and $\lambda_2=$ ` -1 ` , but in such a case we prefer to say that $ C$ has a single eigenvalue $\lambda= $ ` -1 `  with multiplicity ` 2 ` .

In this case, an associated eigenvector for  $C$ is (pick all that apply)
 * [x] $\begin{pmatrix} 2 \\ 1\end{pmatrix}$
 * [x] $\begin{pmatrix} -2 \\ 1\end{pmatrix}$
 * [x] $\begin{pmatrix} 1 \\ 1\end{pmatrix}$
 * [x] any non-zero vector in $\mathbb R^2$
 * [ ] any vector in $\mathbb R^2.$

<div style="background-color: rgb(230, 230, 250);">

**Recall**: the Maple notation for the matrix $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ is **<<1 | 2>,<3 | 4>>**

</div>

</div>

##### Question 5

<div class="how_qb">

Consider the vector space  $\mathbb P_1=\left\{ a\,x+b: a,b\in\mathbb R \right\}$  i.e. the space of polynomials of degree at most  $1$. Let $T:\mathbb P_1 \rightarrow\mathbb P_1$ be the map $$T(a\,x+b):= b\,x+a.$$Then

&emsp;&emsp;&emsp; $T(2\,x+1)=$ ` 1x+2 ` ,

&emsp;&emsp;&emsp; $T(-4\,x+2)=$ `2x-4 ` and

&emsp;&emsp;&emsp; $T(7)=$ ` 7x ` .

If we identify these linear polynomials with vectors via $$ax+b \simeq \begin{pmatrix} a \\ b \end{pmatrix},$$ then $ax+b \simeq \begin{pmatrix} a \\ b \end{pmatrix},$ and hence  $T$ has matrix representation $$A=\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$$ This matrix has characteristic polynomial

<div style="text-align: center">

$p(t)={det}(A-tI)=$ ` t^2-1 `

</div>

From this we can determine that the linear transformation $T$ has the set of eigenvalues ` {-1,1} ` and, expressed in polynomial form, an associated set of eigenvectors ` {1-x,1+x} ` .

<div style="background-color: rgb(230, 230, 250);">

**Recall**:
 - to enter a set like  ${1,2}$ in Maple notation use the syntax **{1,2}**
 - multiplication is denoted using an asterisk **\***
 - the vectors in the vector space $\mathbb P_1$ are polynomials, so the vector $2x+1$ would be entered in the form **2\*x+1**.

</div>

</div>


##### Question 6

<div class="how_qb">

Consider the 4-dimensional vector space of  $2\times 2$ matrices $$M_{2,2}(\mathbb R)=\left\{ \begin{pmatrix} a & b \\ c & d \end{pmatrix}: a,b,c,d\in\mathbb R \right\}.$$ Define the transformation $$T(\begin{pmatrix} a & b \\ c & d \end{pmatrix})=\begin{pmatrix} a & c \\ b & d \end{pmatrix}$$ You may remember this matrix transformation is called the transpose: $T(A) = A^T$ . Now

&emsp;&emsp;&emsp; $T(\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix})=$ ` <<1,0>|<0,0>> ` ,

&emsp;&emsp;&emsp; $T(\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix})=$ ` <<0,0>|<0,1>> ` ,

&emsp;&emsp;&emsp; $T(\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix})=$ ` <<0,1>|<1,0>> ` and

&emsp;&emsp;&emsp; $T(\begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix})=$ ` <<0,1>|<-1,0>> ` .

It follows that $T$ has ` 3 ` linearly independent eigenvectors associated to the eigenvalue $\lambda=1$ and ` 1 `  linearly independent eigenvectors associated to the eigenvalue $\lambda=-1.$

<div style="background-color: rgb(230, 230, 250);">

**Recall**: the Maple notation for the matrix $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ is **<<1 | 2>,<3 | 4>>**

</div>


</div>

---


### Alg1231W9T3 - Diagonalisation

##### Question 1

 _video_

##### Question 2

?>_随机题！需要补全题目才可出答案！_

<div id="t3q1">

<div class="how_qb">

If we have a matrix  $A$ and we construct a matrix  $M$, whose columns are just eigenvectors of  $A$ , then we always have $$AM=MD$$ for some diagonal matrix $ D$. However, if we wish to use this matrix to write down a nice factored form for $ A$, we must take care when constructing $ M$ to ensure that $ M$ is an invertible matrix.

<div height="100px" style="display: flex;align-items: center;"> Consider the matrix &nbsp; $A=$  &nbsp; <div><input style="width: 30px" v-model="i1" v-on:input="calsq1()"> <input style="width: 30px" v-model="i2" v-on:input="calsq1()"><br><input style="width: 30px" v-model="i3" v-on:input="calsq1()"> <input style="width: 30px" v-model="i4" v-on:input="calsq1()">
</div> &nbsp; .This has eigenvectors $\mathbf{v}_1=$ &nbsp; <div><input style="width: 30px" v-model="i5" v-on:input="calsq1()"><br><input style="width: 30px" v-model="i6" v-on:input="calsq1()"></div> &nbsp;and$\mathbf{v}_2=$&nbsp;<div><input style="width: 30px" v-model="i7" v-on:input="calsq1()"><br><input style="width: 30px" v-model="i8" v-on:input="calsq1()"></div>&nbsp;,where</div>

<div style="text-align: center">

$A\mathbf{v}_1=$ {{(i1\*i5+i2\*i6)/i5}} $\mathbf{v}_1$ &emsp;and&emsp; $A\mathbf{v}_2=$ {{(i3\*i7+i4\*i8)/i8}} $\mathbf{v}_2.$

</div>

If we define

<div style="text-align: center">

$L=$ <math>
 <semantics>
  <mrow>
   <mtable equalrows='true' equalcolumns='true'>
    <mtr>
     <mtd>
      <mn>{{i5}}</mn>
     </mtd>
     <mtd>
      <mrow>
       <mn>{{i5\*10}}</mn></mrow>
     </mtd>
    </mtr>
    <mtr>
     <mtd>
      <mrow>
       <mn>{{i6}}</mn></mrow>
     </mtd>
     <mtd>
      <mrow>
       <mn>{{i6\*10}}</mn></mrow>
     </mtd>
    </mtr>
   </mtable></mrow>
 </semantics>
</math>


</div>

(i.e. define  $L$ to be the matrix whose columns are $\mathbf{v}_1$ and $10\mathbf{v}_1$),  then we can calculate

<div style="text-align: center">

$AL=$ <math>
 <semantics>
  <mrow>
   <mfenced>
   <mo>(</mo>
    <mrow>
     <mtable equalrows='true' equalcolumns='true'>
    <mtr>
     <mtd>
      <mn>{{i1}}</mn>
     </mtd>
     <mtd>
      <mrow>
       <mn>{{i2}}</mn></mrow>
     </mtd>
    </mtr>
    <mtr>
     <mtd>
      <mrow>
       <mn>{{i3}}</mn></mrow>
     </mtd>
     <mtd>
      <mrow>
       <mn>{{i4}}</mn></mrow>
     </mtd>
    </mtr>
   </mtable></mrow>
   </mfenced><mfenced>
   <mo>)(</mo>
    <mrow>
     <mtable equalrows='true' equalcolumns='true'>
    <mtr>
     <mtd>
      <mn>{{i5}}</mn>
     </mtd>
     <mtd>
      <mrow>
       <mn>{{i5\*10}}</mn></mrow>
     </mtd>
    </mtr>
    <mtr>
     <mtd>
      <mrow>
       <mn>{{i6}}</mn></mrow>
     </mtd>
     <mtd>
      <mrow>
       <mn>{{i6\*10}}</mn></mrow>
     </mtd>
    </mtr>
   </mtable></mrow>
   <mo>)</mo>
   </mfenced></mrow>
 </semantics>
</math> = <code> <<{{i1\*i5+i2\*i6}},{{i3\*i5+i4\*i6}}>|<{{i1\*i5\*10+i2\*i6\*10}},{{i3\*i5\*10+i4\*i6\*10}}>> </code>

</div>

<div style="background-color: rgb(230, 230, 250);">

**Note**: the Maple notation for the matrix$\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ is **<<1 | 2>,<3 | 4>>**

</div>

Since the columns of  $L$ are linearly dependent, the matrix $L=$ <math>
 <semantics>
  <mrow>
   <mtable equalrows='true' equalcolumns='true'>
    <mtr>
     <mtd>
      <mn>{{i5}}</mn>
     </mtd>
     <mtd>
      <mrow>
       <mn>{{i5\*10}}</mn></mrow>
     </mtd>
    </mtr>
    <mtr>
     <mtd>
      <mrow>
       <mn>{{i6}}</mn></mrow>
     </mtd>
     <mtd>
      <mrow>
       <mn>{{i6\*10}}</mn></mrow>
     </mtd>
    </mtr>
   </mtable></mrow>
 </semantics>
</math> is not invertible! So we cannot use this to diagonalise  $A$.

If we instead define

<div style="text-align: center">

$M=$ <math>
 <semantics>
  <mrow>
   <mtable equalrows='true' equalcolumns='true'>
    <mtr>
     <mtd>
      <mn>{{i5}}</mn>
     </mtd>
     <mtd>
      <mrow>
       <mn>{{i7}}</mn></mrow>
     </mtd>
    </mtr>
    <mtr>
     <mtd>
      <mrow>
       <mn>{{i6}}</mn></mrow>
     </mtd>
     <mtd>
      <mrow>
       <mn>{{i8}}</mn></mrow>
     </mtd>
    </mtr>
   </mtable></mrow>
 </semantics>
</math>

</div>

whose columns are the linearly independent eigenvectors above, then we get

<div style="text-align: center">

$AL=$ <math>
 <semantics>
  <mrow>
   <mfenced>
   <mo>(</mo>
    <mrow>
     <mtable equalrows='true' equalcolumns='true'>
    <mtr>
     <mtd>
      <mn>{{i1}}</mn>
     </mtd>
     <mtd>
      <mrow>
       <mn>{{i2}}</mn></mrow>
     </mtd>
    </mtr>
    <mtr>
     <mtd>
      <mrow>
       <mn>{{i3}}</mn></mrow>
     </mtd>
     <mtd>
      <mrow>
       <mn>{{i4}}</mn></mrow>
     </mtd>
    </mtr>
   </mtable></mrow>
   </mfenced><mfenced>
   <mo>)(</mo>
    <mrow>
     <mtable equalrows='true' equalcolumns='true'>
    <mtr>
     <mtd>
      <mn>{{i5}}</mn>
     </mtd>
     <mtd>
      <mrow>
       <mn>{{i7}}</mn></mrow>
     </mtd>
    </mtr>
    <mtr>
     <mtd>
      <mrow>
       <mn>{{i6}}</mn></mrow>
     </mtd>
     <mtd>
      <mrow>
       <mn>{{i8}}</mn></mrow>
     </mtd>
    </mtr>
   </mtable></mrow>
   <mo>)</mo>
   </mfenced></mrow>
 </semantics>
</math> = <code> <<{{i1\*i5+i2\*i6}},{{i3\*i5+i4\*i6}}>|<{{i1\*i7+i2\*i8}},{{i3\*i7+i4\*i8}}>> </code>

</div>

Since the columns of  $M$ are linearly independent, the matrix  $M$ is invertible. Namely $ M$ has inverse 

<div style="text-align: center">

$M^{-1}=$ <code> <<{{i8}},{{i6\*(-1)}}>|<{{i7\*(-1)}},{{i5}}>> </code> .

</div>

By multiplying on the right by $M^{-1}$ we get $A=MDM^{-1}$  where

<div style="text-align: center">

 $D=$ <code> <<{{(i1\*i5+i2\*i6)/i5}},0>|<0,{{(i3\*i7+i4\*i8)/i8}}>> </code> .

</div>

In this case $A$ is said to be <select><option> diagonalisable </option></select> .


</div>
</div>



##### Question 3

<div class="how_qb">

Two eigenvectors with different eigenvalues are always linearly independent. To see why, take a matrix  $A$ with eigenvectors $\mathbf{v}_1$ and $\mathbf{v}_2$ such that

<div style="text-align: center">

$A\mathbf{v}_1=s \mathbf{v}_1$ &emsp; $A\mathbf{v}_2= t \mathbf{v}_2$ where $s \neq t$ .

</div>

Recall that $\mathbf{v}_1$ and $\mathbf{v}_2$ must be non-zero vectors, since being non-zero is part of the definition of an eigenvector.

Now consider the equation $$p\mathbf{v}_1+q\mathbf{v}_2=\mathbf{0}.$$

If we can show that the <select><option> only </option></select> solution to $(1)$ is $p=q=0$ , then we will have shown  $\mathbf{v}_1$ and $\mathbf{v}_2$ are linearly independent.

Since $p\mathbf{v}_1=-q\mathbf{v}_2$ we have $$sp \mathbf{v}_1 = A(p\mathbf{v}_1) = A(-q\mathbf{v}_2) = -tq\mathbf{v}_2 = tp\mathbf{v}_1.$$ Then, by rearrangement $$p(s-t)\mathbf{v}_1 = \mathbf{0}.$$ There are three cases to consider:
 - $\mathbf{v}_1 = \mathbf{0}$ , which is impossible since eigenvectors are non-zero by definition,
 - $s = $ ` t ` which is impossible since the eigenvalues were assumed to be different,
 - or $p = 0$.

Only one of these three cases is possible, so we conclude $p = 0$ . Then equation  $(1)$ becomes $$q\mathbf{v}_2=\mathbf{0}.$$ Since $\mathbf{v}_2$ must be a non-zero vector the only way to solve this is to have $ q=0$. Thus we have show that  <select><option> the only solution </option></select> is $p=q=0$ ,  and hence the vectors  $\mathbf{v}_1$ and $\mathbf{v}_2$ must be linearly independent.

</div>


##### Question 4

<div class="how_qb">

The number of linearly independent eigenvectors for the eigenvalue $\lambda$ is equal to $\mathrm{nullity}(A-\lambda I).$ Hence, 
 - if $A=\begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}$ , then there is one eigenvalue $\lambda =2 $ and $\mathrm{nullity}(A-2I)=$ ` 2 ` , and the number of linearly independent eigenvectors for $\lambda = 2$ ` 2 `
 - if $B = \begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}$  then there is only one eigenvalue $\lambda=2$ and $\mathrm{nullity}(B-2 I)=$ ` 1 ` , and the number of linearly independent eigenvectors for $\lambda=2$ is ` 1 ` .

Because the matrix $B$ does not have enough linearly independent eigenvectors, it is called a **defective matrix**, and cannot be diagonalised.


</div>


##### Question 5

<div class="how_qb">

Which of the following matrices are diagonalisable?
 - [x] $\left( \begin{matrix}
   -1 & -4  \\
   2 & 5  \\
\end{matrix} \right)$
 - [x] any $n\times n$ matrix with  $n$ linearly independent eigenvectors
 - [x] any $2\times 2$ matrix with two distinct eigenvalues
 - [x] $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$
 - [ ] $\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$
 - [ ] $\left( \begin{matrix}
   3 & 4  \\
   -1 & -1  \\
\end{matrix} \right)$

</div>

##### Question 6

<div class="how_qb">

We are told that $A=\begin{pmatrix} 7 & 2 \\ -4 & 1 \end{pmatrix}$ has eigenvalues  $5$ and  $3$ with respective eigenvectors $\begin{pmatrix} 1 \\ -1 \end{pmatrix}$ and $\begin{pmatrix} 1 \\ -2 \end{pmatrix}$ . So we can diagonalise  $A$ by finding an invertible matrix $ M$ and diagonal matrix $ D$ such that $$M^{-1}AM=D$$
 **i)** If we wanted $ D $ to be the matrix $D=\begin{pmatrix} 5 & 0 \\ 0 & 3 \end{pmatrix}$ then we should take

<div style="text-align: center">

 $M=$ ` <<1,-1>|<1,-2>> `

</div>

 **ii)** If instead we wanted  $D $ to be the diagonal matrix $D=\begin{pmatrix} 3 & 0 \\ 0 & 5 \end{pmatrix}$ then we should take

<div style="text-align: center">

$M=$ ` <<1,-2>|<1,-1>> `

</div>

**iii)** One of the advantages of having a diagonal matrix is that matrix powers are easy to take, for example

<div style="text-align: center">

$\begin{pmatrix} 5 & 0 \\ 0 & 3 \end{pmatrix}^6=$ ` <<15625, 0> |<0, 729>> `

</div>

The relation for $A^n$ is not nearly as simple.

**iv)** Once we write $A=MDM^{-1}$ we observe that $A^2=MD^2M^{-1}, A^3=MD^3M^{-1},$ and so on. Thus, using parts **(i)** and **(iii)**, we can easily calculate that the top left entry of $A^{6}$ is ` 30521 ` .

<div style="background-color: rgb(230, 230, 250);">

**Recall**: the Maple notation for the matrix $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ is **<<1 | 2>,<3 | 4>>**

</div>

</div>

---

### Alg1231W9T4 - Eigenvalues of some special matrices

##### Question 1

 _video_

##### Question 2

<div class="how_qb">

Consider the matrix $$P=\begin{pmatrix} \frac{1}{2} & \frac{1}{3} & 0 \\ \frac{1}{4} & \frac{2}{3} & 1 \\ \frac{1}{4} & 0 & 0 \end{pmatrix}.$$ This is a special type of matrix called a **transition matrix**, which are use to model simple random processes know as [Markov chains![logo](../../../../../logosvg01.svg)](https://en.wikipedia.org/wiki/Markov_chain). The two properties that define a transition matrix  $P$ are:
 1. Every entry in  $P$ is non-negative (i.e. greater than or equal to zero)
 1. Every column of  $P$ sums up to $1$ .
Being a rather special type of matrix, transition matrices have rather special eigenvalues.

Consider what happens when we multiply the transpose $P^T$ by the vector of all  $1$ 's

<div style="text-align: center">

$P^T\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}=\begin{pmatrix} \frac{1}{2} & \frac{1}{4} & \frac{1}{4} \\ \frac{1}{3} & \frac{2}{3} & 0 \\ 0 & 1 & 0 \end{pmatrix}\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} =$ ` <1,1,1> `

</div>

This proves that $P^T$ has an eigenvector with eigenvalue ` 1 `.Recalling what we learnt in the video, this means $P$ also has the same corresponding eigenvalue.

Let's find the corresponding eigenvector of the matrix $ P$ above. By considering the augmented matrix $$\big(P-I | \mathbf{0}\big)=\left(\begin{matrix} -1/2 & 1/3 & 0 \\ 1/4 & -1/3 & 1 \\ 1/4 & 0 & -1 \end{matrix}\right|\left.\begin{matrix} \vphantom{1/2}0 \\ \vphantom{1/2}0 \\ \vphantom{1/2}0 \end{matrix}\right),$$ we row-reduce and back-substitute to get an eigenvector ` <4,6,1> `

We can see this is quite different from $\begin{pmatrix}  1 \\ 1 \\ 1 \end{pmatrix}$. So while $P$ and $P^T$ have matching eigenvalues, it is hard to guess what (if any) the relationship between their eigenvectors will be.

<div style="background-color: rgb(230, 230, 250);">

**Note**: the Maple notation for the vector $\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$ is **< 1,2,3 >** .

</div>

</div>


##### Question 3

<div class="how_qb">

Consider a matrix  $A$ with the special property that $A^m=I$ for some positive integer  $m$ . Such a matrix is special, as such we might expect it to have special eigenvalues.

Say  $v$ is an eigenvector of  $A$ with eigenvalue  $t$. By left-multiplying  $m$ times by the matrix  $A$ we get $$A^m \mathbf{v} = I \mathbf{v}=\mathbf{v}.$$ Since  $v$ is an eigenvector with eigenvalue  $t$, this implies that $$t^m\mathbf{v}=\mathbf{v}.$$

Since <select><option> eigenvectors are non-zero </option></select> the only way this can be satisfied is if $$t^m=1,$$ implying that the eigenvalues of $ A$ must be <select><option> m th roots of unity </option></select>

An example of such a matrix is $$B=\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}.$$ Here $m=$ ` 4 ` (please enter the smallest possible $ m$) and the eigenvalues are the set ` {I,-I} `

<div style="background-color: rgb(230, 230, 250);">

**Recall**:
 - a set in Maple notation is something of the form **{1,1+2\*I,3-2\*I}**
 - remember to use capital i (**I**) to represent $i=\sqrt{-1}$
 - $\sqrt{2}$ can be entered using the Maple syntax **sqrt(2)**

</div>

</div>


##### Question 4

<div class="how_qb">

Consider a matrix $ A$ with the special property that  Am=Z for some integer $ m$. Here $ Z$ is the zero-matrix (i.e. the matrix filled with zeroes). Such a matrix  $A$ is called [nilpotent![logo](../../../../../logosvg01.svg)](https://en.wikipedia.org/wiki/Nilpotent_matrix), and as it is clearly special, it will have special eigenvalues.

Say  $v$ is an eigenvector of  $A$ with eigenvalue  $t$. By left-multiplying  $m$ times by the matrix $A$ we get $$A^m \mathbf{v} = Z \mathbf{v}=\mathbf{0}.$$ Since  $v$ is an eigenvector with eigenvalue  $t$, this implies that $$t^m\mathbf{v}=\mathbf{0}.$$ Since <select><option> eigenvectors are non-zero </option></select> the only way this can be satisfied is if $$t^m=0,$$ implying that the eigenvalues of $A$  must be <select><option> zero </option></select>

An example of a nilpotent matrix is $$B=\begin{pmatrix} 0 & 1 & -1 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}$$ since $B^m=\begin{pmatrix} 0 & 0 & 0\\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$ where $m=$ ` 3 ` .

</div>

##### Question 5

<div class="how_qb">

Consider the matrix $$A=\begin{pmatrix} 4 & 1 & 30 & -5 \\ 0 & -5 & 4 & 120 \\ 0 & 0 & -4 & 1300 \\ 0 & 0 & 0 & 100 \end{pmatrix}$$ This is a special type of matrix known as an **upper triangular** matrix. All the non-zero entries appear either on or above the main diagonal.

The eigenvectors of this matrix may not be particularly obvious, but the eigenvalues are. To see why, let's calculate the characteristic polynomial of $ A$ . $$p(t)=\det(A-tI)=\det\begin{pmatrix} 4-t & 1 & 30 & -5 \\ 0 & -5-t & 4 & 120 \\ 0 & 0 & -4-t & 1300 \\ 0 & 0 & 0 & 100-t \end{pmatrix}.$$ By expanding down the first column we get

<div style="text-align: center">

$p(t)=$ ` 4-t ` $\det\begin{pmatrix} -5-t & 4 & 120 \\ 0 & -4-t & 1300 \\ 0 & 0 & 100-t \end{pmatrix}.$

</div>

Repeating this procedure we get

<div style="text-align: center">

$p(t)=$ ` (4-t)(-5-t) ` $\det\begin{pmatrix} -4-t & 1300 \\ 0 & 100-t \end{pmatrix}.$<br> $=$ ` (4-t)(-5-t)(-4-t) ` $\det\begin{pmatrix} 100-t \end{pmatrix}.$<br> $=(4-t)(-5-t)(-4-t)(100-t).$

</div>

And so we can see the roots of  $p(t)$, and hence the eigenvalues of  $A$ , are the numbers in the set

<div style="text-align: center">

$\{t_1,t_2,t_3,t_4\}=$ ` {4,-5,-4,100} `

</div>

<div style="background-color: rgb(230, 230, 250);">

**Note**: enter your answer as a set (e.g. **{1,2,3,4}**).

</div>

The same argument shows that the eigenvalues of an upper triangular matrix are <select><option> the diagonal entries </option></select> .



</div>


##### Question 6

<div class="how_qb">

Consider a matrix $ A$ with the special property that $A^m=A$ for some positive integer  $m$. Such a matrix is special, and as such we might expect it to have special eigenvalues.

Say  $v$ is an eigenvector of  $A$ with eigenvalue  $t$. By left-multiplying $ m$ times by the matrix  $A$ we get $$A^m \mathbf{v} = A \mathbf{v}$$ Since  $v$ is an eigenvector with eigenvalue $ t$ this translates into $$t^m\mathbf{v}=t\mathbf{v}.$$ Since <select><option> eigenvectors are non-zero </option></select> the only way this can be satisfied is if $$t^m=t,$$ implying that the eigenvalues of $ A$ must be <select><option> either zero, or(m-1)th roots of unity </option></select>

An example of such a matrix is $$B=\begin{pmatrix} -2 & -5 & 3 \\ 1 & 3 & -2 \\ -1 & 0 & -1 \end{pmatrix}.$$ Here $m=5$ and the eigenvalues are the set ` {0,I,-I} `

<div style="background-color: rgb(230, 230, 250);">

**Recall**:
 - a set in Maple notation is something of the form **{1,1+2\*I,3-2\*I}**
 - remember to use capital i (**I**) to represent $i=\sqrt{-1}$
 - $\sqrt{2}$ can be entered using the Maple syntax **sqrt(2)**

</div>



</div>



<script>

  new Vue({
    el: '#t3q1',
    // Options...
    data () {
      return {
        i1:1,
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
    el: '#t1q5',
    // Options...
    data () {
      return {
        i1:1,
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
        i1:1,
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



