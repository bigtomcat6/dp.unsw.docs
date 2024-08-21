
## DPST1071 Marks Calculator


[TOUCH ME to Find out your Marks![logo](../../../../../logosvg01.svg)](https://moodle.telt.unsw.edu.au/grade/report/user/index.php?id=68981)


<div id="q1">

**Table of Assessments**

|Assessment|Grade|Range|Weight|Final Weight|
|:--|--|--|--|--|
|Impromptu Design Writing| <input style="width: 50px" v-model="i1" v-on:input="calsq1()">|0-50|5%|{{a1}}%|
|Problem statement presentations (Final Marks)|<input style="width: 50px" v-model="i2" v-on:input="calsq1()">|0-5|5%|{{a2}}%|
|Concept Generation Presentations (Final Marks)|<input style="width: 50px" v-model="i3" v-on:input="calsq1()">|0-5|5%|{{a3}}%|
|Concept generation writing|<input style="width: 50px" v-model="i13" v-on:input="calsq1()">|0-50|5%|{{a13}}%|
|Design Proposal (Final marks)|<input style="width: 50px" v-model="i4" v-on:input="calsq1()">|0-100|10%|{{a4}}%|
|Compliance testing (Final marks)|<input style="width: 50px" v-model="i5" v-on:input="calsq1()">|0-10|10%|{{a5}}%|
|Final Testing|<input style="width: 50px" v-model="i6" v-on:input="calsq1()">|0-30|20%|{{a6}}%|
|Final Design Report (Group)|<input style="width: 50px" v-model="i7" v-on:input="calsq1()">|0-100|25.5%|{{a7}}%|
|Reflection (Individual)|<input style="width: 50px" v-model="i8" v-on:input="calsq1()">|0-100|4.5%|{{a8}}%|
|Design Journal (Phase 1)| <input style="width: 50px" v-model="i9" v-on:input="calsq1()">|0-5|5%|{{a9}}%|
|Design Journal (Phase 2)|<input style="width: 50px" v-model="i10" v-on:input="calsq1()">|0-5|5%|{{a10}}%|
|**Total Marks:**|||**100%**|<strong>{{TM}}%</strong>|
||
|Team Evaluation(Phase 1)|<input style="width: 50px" v-model="i11" v-on:input="calsq1()">|0-5|up to 13.75%|{{a11}}%|
|Team Evaluation(Phase 2)|<input style="width: 50px" v-model="i12" v-on:input="calsq1()">|0-5|up to 13.75%|{{a12}}%|
|**Total Marks ± Team Evaluation:**|||**100% ± 27.5%**|<strong>{{TMT}}%</strong>|

</div>


<script>

  new Vue({
    el: '#q1',
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
        a11:0,
        a12:0,
        TM:0,
        TMT:0,

        a13:0,
      }
    },
    methods: {
      calsq1() {
        this.a1 = (this.i1*0.1).toFixed(2);
        this.a2 = (this.i2*1).toFixed(2);
        this.a3 = (this.i3*1).toFixed(2);
        this.a13 = (this.i13*0.1).toFixed(2);
        this.a4 = (this.i4*0.1).toFixed(2);
        this.a5 = (this.i5*1).toFixed(2);
        this.a6 = (this.i6*2/3).toFixed(2);
        this.a7 = (this.i7*0.255).toFixed(2);
        this.a8 = (this.i8*0.045).toFixed(2);
        this.a9 = (this.i9*1).toFixed(2);
        this.a10 = (this.i10*1).toFixed(2);

        this.TM = (parseFloat(this.a1)+parseFloat(this.a2)+parseFloat(this.a3)+parseFloat(this.a4)+parseFloat(this.a5)+parseFloat(this.a6)+parseFloat(this.a7)+parseFloat(this.a8)+parseFloat(this.a9)+parseFloat(this.a10)).toFixed(2);

        this.a11 = (this.i11*13.75/5).toFixed(2);
        this.a12 = (this.i12*13.75/5).toFixed(2);

        this.TMT = (parseFloat(this.TM)+parseFloat(this.a11)+parseFloat(this.a12)).toFixed(2);

      }
    }
  });


</script>