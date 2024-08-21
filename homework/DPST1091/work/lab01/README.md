!>请以unsw学校官网为准，这里只提供参考！ 

>如信息有问题，请立即[与我联系](https://www.unsw.vip/#/help/?id=关于我)！

### **Week 01 Laboratory Exercises**

>课程：[编程手册](/DPST1091/) &nbsp; [编程作业](/homework/DPST1091/)


* 题目在这：[Week 01 Laboratory Exercises![logo](../../../../../logosvg01.svg)](https://cgi.cse.unsw.edu.au/~dp1091/22T3/lab/01/questions)

* **Due: Week 2 Monday 20:00**

* 此Lab一共需要提交5个任务
* 终端快捷键：`Ctrl` + `alt` + `T` (Apple: ` ⌃⌘T `)

#### 任务一：Your first program

**① 终端输入**
```bash
gedit bad_pun.c &
```
**② 在弹出的窗口输入并点击Save**

**示例：bad_pun.c**

```c

// A simple C program that attempts to be punny
// Written 23/2/2017
// by Angela Finlayson (angf@cse.unsw.edu.au)
// for DPST1091 Lab 01 Exercise 1

#include <stdio.h>

int main(void) {

    printf("Hello, it is good to C you!\n");

    return 0;
}

```


**③ 返回终端继续输入**

```bash
dcc -o bad_pun bad_pun.c
1091 autotest bad_pun
```

**④ 若显示`0 tests failed`可在终端提交**

```bash
give dp1091 lab01_bad_pun bad_pun.c
```

#### 任务二：Creating an ASCII Bird

**① 终端输入**
```bash
gedit bird.c &
```
**② 在弹出的窗口输入并点击Save**

**示例：bird.c**

```c
// C Program to make a drawing of a bird
// Written 02/09/2021

#include <stdio.h>

int main(void) {

    printf("  ___\n");
    printf(" ('v')\n");
    printf("((___))\n");
    printf(" ^   ^\n");
    
    return 0;
}
```

**③ 返回终端继续输入**

```bash
dcc -o bird bird.c
1091 autotest bird
```

**④ 若显示`0 tests failed`可在终端提交**

```bash
give dp1091 lab01_bird bird.c
```

#### 任务三：Fixing errors in bugs.c

**① 终端输入**
```bash
gedit bugs.c &
```
**② 在弹出的窗口输入并点击Save**

**示例：bugs.c**

```c
// A program that is filled with bugs
// Angela Finlayson A.Finlayson@unswglobal.unsw.edu.au
// 01/01/2019

#include <stdio.h>

int main(void) {

    printf("Stop bugging me!\n");
    printf("I mite get really annoyed\n");
    printf("Shoo!\n");
    
    return 0;
}
```

**③ 返回终端继续输入**

```bash
dcc -o bugs bugs.c
1091 autotest bugs
```

**④ 若显示`0 tests failed`可在终端提交**

```bash
give dp1091 lab01_bugs bugs.c
```

#### 任务四：Fixing errors in an ASCII Kangaroos

**① 终端输入**
```bash
gedit kangaroo.c &
```
**② 在弹出的窗口输入并点击Save**

**示例：kangaroo.c**

```c
// A simple C program that prints an ASCII kangaroo
// Written 7/2/2018
//  by Andrew Taylor (andrewt@unsw.edu.au)
// as a lab example for COMP1511

#include <stdio.h>

int main(void) {

    printf("\n");
    printf("  /\\   ___\n");
    printf(" <__\\_/    \\\n");
    printf("    \\_  /  _\\\n");
    printf("      \\_\\ / \\\\\n");
    printf("        //   \\\\\n");
    printf("      =//     \\==\n");
    printf("\n");

    return 0;
}

```

**③ 返回终端继续输入**

```bash
dcc -o kangaroo kangaroo.c
1091 autotest kangaroo
```

**④ 若显示`0 tests failed`可在终端提交**

```bash
give dp1091 lab01_kangaroo kangaroo.c
```

#### 任务五：Fixing Code Style

**① 终端输入**
```bash
gedit messy.c &
```
**② 在弹出的窗口输入并点击Save**

**示例：bird.c**

`注意：这个文件有需要你自己修改的内容！`

```c
//z55555555 - YOURS NAME
//Messy Program

#include <stdio.h>

int main(void){

    printf("It");
    printf(" i");
    printf("s"); 
    printf(" V");
    printf("E"); 
    printf("R"); 
    printf("Y important");
    printf(" to");
    printf(" progra");
    printf("m with good");
    printf(" st");
    printf("yle!");            
    printf("\n");
    
    return 0;
} 


```

**③ 返回终端继续输入**

```bash
1091 style messy.c
```

