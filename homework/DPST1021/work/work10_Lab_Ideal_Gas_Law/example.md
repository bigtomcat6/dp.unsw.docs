!>请以unsw学校官网为准，这里只提供参考！ 

>如信息有问题，请立即[与我联系](/help/?id=关于我)！

# Ideal Gas Law Online Lab

[返回 Week10 Lab页](/homework/DPST1021/work/work10_Lab_Ideal_Gas_Law/)


### Question 1

<div id="q1">

Calculate the cross-sectional area of the syringe. This is the area over which the syringe is applying pressure on the gas inside the cylinder. You can assume that the height of the syringe is <input style="width: 50px" v-model="i1" v-on:input="calsq1()"> cm when the volume is <input style="width: 30px" v-model="i2" v-on:input="calsq1()"> mL. Use this volume with the height to calculate the cross-sectional area.

 - $A =$ <code>{{a1}}</code> $m^2$

Now calculate the change in pressure you would expect if you were to place a mass of <input style="width: 30px" v-model="i3" v-on:input="calsq1()"> kg on the syringe

 - $ΔP  =$  <code>{{a2}}</code> Pa

 - $V_f$ <code>{{a3}}</code> mL


### Question 2

 - [x] b. Because the temperature sensor needs to come into thermal equilibrium with the air inside the syringe.

### Question 3

 - [x] c. To allow the gas inside the syringe to reach thermal equilibrium with the air outside of the syringe.


### Question 4

 - [x] a. To ensure that the process is isothermal - that the temperature remains constant.

</div>

### Question 5

**Part 1:**

|Mass added (kg)|Pressure (kPa)|Temperature (°C)|Volume (mL)|
|:--|:--|:--|:--|
|0|`102.326`|`26.82`|`60.0`|
|1.50|`125.177`|`27.30`|`49.0`|
|2.00|`134.266`|`27.10`|`46.0`|
|2.50|`144.103`|`26.94`|`42.5`|
|3.00|`152.559`|`27.46`|`40.0`|
|3.50|`161.489`|`26.89`|`37.5`|
|4.00|`169.042`|`28.16`|`36.0`|

**Part 2:**

 - The thermodynamic process described above is: <select disabled><option selected > isothermal </option></select>
 - Which variable should be on the x axis? (note: the x-axis should be the variable that the experimenter is most directly changing): <select disabled><option selected >P</option></select>
 - Which variable should be on the y axis? <select disabled><option selected>1/V</option></select>
 - `https://moodle.telt.unsw.edu.au/pluginfile.php/7922899/mod_resource/content/12/Files/Quick%20Graphing%20Program%204.0.html?xaxistitle=Pressure%20(kPa)&yaxistitle=Volume%20(mL)&x1=102.326&y1=16.7&x2=125.177&y2=20.4&x3=134.266&y3=21.7&x4=144.103&y4=23.5&x5=152.559&y5=25.0&x6=161.489&y6=26.7&x7=169.042&y7=27.8`<br> _(这个空如果出现红框不用理会)_
 - Algebraically, what does the gradient of this graph represent? `1/(n*R*T)`
 - Using the 'Curve Fit' tool on your graph, what is the value for the gradient? `0.1673`
 - You can assume that $T$ = 300 Kelvin, and recall that $R$ is **8.314** J/mol·K `0.00240`

### Question 6

 - Given that 1 mol of an ideal gas has a volume of 24.5 L at room temperature and pressure, how many mols should be found in the 60mL of air in the syringe?<br>$n_{theory} =$ `0.00245`  mols

### Question 7

|||	Pressure (kPa)|	Volume (mL)|Temperature (°C)|	Temperature (K)|
|:--|:--|:--|:--|:--|:--|
|1|Initial|`102.474`|40|`27.33`|`300.01`|
|2|Maximum pressure and temperature|`209.847`|21|`41.85`|`317.21`|
|3|Equilibrium with surrounds|`190.373`|21|`29.11`|`300.88`|
|4|Final|`103.462`|39.5|`27.38`|`300.31`|

|Path|1->2|	2->3|3->4|
|:--|:--|:--|:--|
|Process name|<select disabled><option selected>adiabatic compression</option></select>|<select disabled><option selected>isovolumetric process</option></select>|<select disabled><option selected>isothermal expansion</option></select>|

 - constant = `P*V`

 - constant = `P*V^1.4`

_(分应该已经够了吧....所以最后这个表为什么没做完嘞？因为啊.我懒得做了 `(●'◡'●)` )_

|Path|1->2|	2->3|3->4|
|:--|:--|:--|:--|
|Q (J)|0|
|W (J)|`-0.0201`|`0`|
|$ΔE_{int}$ (J)|`0.0201`||`0`|


[返回 Week10 Lab页](/homework/DPST1021/work/work10_Lab_Ideal_Gas_Law/)

<script>

 new Vue({
    el: '#q1',
    // Options...
    data () {
      return {
        i1:10.8,
        i2:60,
        i3:2.0,
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
        this.a1 = (this.i2*(0.0001)/this.i1).toPrecision(3);
        this.a2 = (this.i3*9.8/this.a1).toFixed(0);
        this.a3 = (101000*this.i2/(101000+parseFloat(this.a2))).toFixed(0);
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