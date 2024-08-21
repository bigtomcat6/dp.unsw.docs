!>请以unsw学校官网为准，这里只提供参考！ 

>如信息有问题，请立即[与我联系](https://www.unsw.vip/#/help/?id=关于我)！

### **Week 02 Laboratory Exercises**

>课程：[编程手册](/DPST1091/) &nbsp; [编程作业](/homework/DPST1091/)


* 题目在这：[Week 02 Laboratory Exercises![logo](../../../../../logosvg01.svg)](https://cgi.cse.unsw.edu.au/~dp1091/22T3/lab/02/questions)

* **Due: Week 3 Monday 20:00**

* 终端快捷键：`Ctrl` + `alt` + `T` (Apple: ` ⌃⌘T `)

!> **严禁抄袭 后果自负**

#### 任务一：Addition


**示例：addition.c**

```c

#include<stdio.h>

int main(void) {

    int add_number_a;
    int add_number_b;

    printf("Please enter two integers: ");
    scanf("%d %d", &add_number_a, &add_number_b);

    int sum = add_number_a + add_number_b;

    printf("%d + %d = %d", add_number_a, add_number_b, sum);

    printf("\n");

    return 0;
}



```

#### 任务二：Don't Be So Negative!


**示例：negative.c**

```c

#include<stdio.h>

int main(void) {

    int negative_number;

    scanf("%d", &negative_number);

    if (negative_number > 0)
    {
        printf("You have entered a positive number.");
    }
    else if (negative_number < 0)
    {
        printf("Don't be so negative!");
    }
    else if (negative_number == 0)
    {
        printf("You have entered zero.");
    }

    printf("\n");

    return 0;
}



```


#### 任务三：Print Letters, Given Their Numbers


**示例：get_letter.c**

```c

#include<stdio.h>

int main(void) {

    char y_or_n;

    printf("Uppercase: ");
    scanf("%c", &y_or_n);

    if (y_or_n == 'y')
    {
        printf("Index: ");

        int index;
        scanf("%d", &index);
        
        if (index >= 1 && index <= 26)
        {
            printf("The letter is %c", index + 'A' - 1);
        }
        else
        {
            printf("You need to enter a number between 1 and 26 inclusive\n");
            printf("Exiting the program with error code 2");
        }
        
    }
    else if (y_or_n == 'n')
    {
        printf("Index: ");

        int index;
        scanf("%d", &index);
        
        if (index >= 1 && index <= 26)
        {
            printf("The letter is %c", index + 'a' - 1);
        }
        else
        {
            printf("You need to enter a number between 1 and 26 inclusive\n");
            printf("Exiting the program with error code 2");
        }        
    }
    else
    {
        printf("You need to enter 'y' or 'n'\n");
        printf("Exiting the program with error code 1");
    }

    printf("\n");

    return 0;
}

```


#### 任务四：Leap Year Calculator


**示例：is_leap_year.c**

```c

#include <stdio.h>

int main(void) {
    int year;
    printf("Enter year: ");
    scanf("%d", &year);
    
    if (year % 4 == 0) {
        if (year % 100 != 0) {
            printf("%d is a leap year.\n", year);
        }
        else if (year % 400 == 0) {
            printf("%d is a leap year.\n", year);
        } 
        else {
            printf("%d is not a leap year.\n", year);
        }
    }
    else {
        printf("%d is not a leap year.\n", year);
    }

    return 0;
}

```

#### 任务五：Dice Range


**示例：dice_range.c**

```c

#include <stdio.h>

int main(void)
{
    double dice_sides;
    double dice_num;
    double dice_range;
    double dice_average;

    printf("Enter the number of sides on your dice: ");
    scanf("%lf", &dice_sides);
    printf("Enter the number of dice being rolled: ");
    scanf("%lf", &dice_num);

    dice_range = dice_sides * dice_num;
    dice_average = (dice_num + dice_range) / 2;

    if (dice_range <= 0 || dice_num <= 0) {
        printf("These dice will not produce a range.\n");
    }
    else {
        printf("Your dice range is %.0lf to %.0lf.\n", dice_num, dice_range);
        printf("The average value is %lf\n", dice_average);
    }

    return 0;
}


```


#### 任务六：Word Addition


**示例：wordAddition.c**

```c


#include <stdio.h>

int main(void) {
    int integer_a;
    int integer_b;
    int integer_sum;

    printf("Please enter two integers: ");
    scanf("%d %d", & integer_a, & integer_b);

    integer_sum = integer_a + integer_b;

    //First Integer - Integer A Number to Word + minus statement
    if (integer_a >= -10 && integer_a < 0) {

        printf("negative ");
        integer_a = -1 * integer_a;
    }
    if (integer_a >= 0 && integer_a <= 10) {

        if (integer_a == 0) {
            printf("zero ");
        } else if (integer_a == 1) {
            printf("one ");
        } else if (integer_a == 2) {
            printf("two ");
        } else if (integer_a == 3) {
            printf("three ");
        } else if (integer_a == 4) {
            printf("four ");
        } else if (integer_a == 5) {
            printf("five ");
        } else if (integer_a == 6) {
            printf("six ");
        } else if (integer_a == 7) {
            printf("seven ");
        } else if (integer_a == 8) {
            printf("eight ");
        } else if (integer_a == 9) {
            printf("nine ");
        } else if (integer_a == 10) {
            printf("ten ");
        }
    } else {
        printf("%d ", integer_a);
    }

    //Add plus sign
    printf("+ ");

    //Second Integer - Integer B Number to Word + minus statement
    if (integer_b >= -10 && integer_b < 0) {

        printf("negative ");
        integer_b = -1 * integer_b;
    }
    if (integer_b >= 0 && integer_b <= 10) {

        if (integer_b == 0) {
            printf("zero ");
        } else if (integer_b == 1) {
            printf("one ");
        } else if (integer_b == 2) {
            printf("two ");
        } else if (integer_b == 3) {
            printf("three ");
        } else if (integer_b == 4) {
            printf("four ");
        } else if (integer_b == 5) {
            printf("five ");
        } else if (integer_b == 6) {
            printf("six ");
        } else if (integer_b == 7) {
            printf("seven ");
        } else if (integer_b == 8) {
            printf("eight ");
        } else if (integer_b == 9) {
            printf("nine ");
        } else if (integer_b == 10) {
            printf("ten ");
        }
    } else {
        printf("%d ", integer_b);
    }

    //Add equal sign
    printf("= ");

    //Resulting Integer | If minus do the same like the one above
    if (integer_sum >= -10 && integer_sum < 0) {

        printf("negative ");
        integer_sum = -1 * integer_sum;
    }
    if (integer_sum >= 0 && integer_sum <= 10) {

        if (integer_sum == 0) {
            printf("zero \n");
        } else if (integer_sum == 1) {
            printf("one \n");
        } else if (integer_sum == 2) {
            printf("two \n");
        } else if (integer_sum == 3) {
            printf("three \n");
        } else if (integer_sum == 4) {
            printf("four \n");
        } else if (integer_sum == 5) {
            printf("five \n");
        } else if (integer_sum == 6) {
            printf("six \n");
        } else if (integer_sum == 7) {
            printf("seven \n");
        } else if (integer_sum == 8) {
            printf("eight \n");
        } else if (integer_sum == 9) {
            printf("nine \n");
        } else if (integer_sum == 10) {
            printf("ten \n");
        }
    } else {
        printf("%d\n", integer_sum);
    }

    return 0;

}




```