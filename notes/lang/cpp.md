---
id: cpp
title: C++
sidebar_label: C++
---

## Overview

<div className="text--center">

![CPP](./images/cpp.svg)

</div>

`C++` is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes".

C++ is a complied language. C++ source files has the `.cpp` extension.
:::info

<center>

![COMPILATION](./images/build.png)

</center>

- [Source: niu.edu](http://faculty.cs.niu.edu/~mcmahon/CS241/Notes/build.html)

:::  
C++ is a case-sensitive language.

- Lets write simple c++ program which will print `Hello World` on the screen.

```cpp title="hello_world.cpp"
#include <iostream>

int main() {
  std::cout << "Hello World" << std::endl;
  return 0;
}
```

In the above code

- `#include` is a preprocessor directive used to include the header files.
- `iostream` is a header file for taking input or printing output.
- `int` is type of data returned by function.
- `main` is the function where execution of code begins in any c++ program.
- `cout` is used for displaying output in quotation marks.
- `;` marks the end of the statement.
- `return 0` Exit status of the function.
- `{}` define the start and end of the code block (main function here).

:::info
In `C++` execution of code begins from `main` function.
:::

## Comments

- Comments are lines that exist in computer programs that are ignored by compilers and interpreters.
- Including comments in programs makes code more readable for users as it provides some information or explanation about what each part of a program is doing.

- There are two types of comments in C++
  - Single-line comments `//` anything after these `//` is comment
  - Multi-line comments `/* */` anything in-between `/* */` those asterisks is comment

## Variables

Variable is an arbitrary name given to the memory location which is used to store some data (value) in computer program. The value stored in a variable can be changed.Variables are given unique names to differentiate between different memory locations.

Creating a variable is known as **variable declaration** and assigning some value to the variable is known as **initialization**.

### Rules for declaring a variable name

- Variable hold a single type of data hence we've to define the type of variable.
- Variable name must begin with a letter of alphabet or underscore.
- Variable name should not contain space or special characters.
- Variable name cannot be started with number but variable name can have number in between or end of the name.
- C++ keywords cannot be used as variable names.

:::warning
Variable names are case-sensitive.
:::

```cpp
// lets declare a variable named a of type integer
int a;

// initialize the variable a with value 10
a = 10;

// declare and initialize a variable in one step
int b = 20;
```

## Data Types

There are three types of data types.

![Data Types](./images/dt.svg)

### Primitive Data types

These are the built-in data types. These are the basic data types which are used to represent the single value. Integer, Character, Float, Boolean.

#### Type Modifiers

Type Modifiers modify the size occupied by the given data type in memory or it can be used to increase the range by excluding negative values. They are `long` (8 bytes), `short` (2 bytes), `signed` (4 bytes), `unsigned` (4 bytes).

:::tip
Range of any N-bit signed integers was from $-(2^{N-1})$ to $+(2^{N-1}-1)$

1 Byte = 8 bits
:::

| Data Type              | Size (Bytes) |                    Range                     |
| ---------------------- | :----------: | :------------------------------------------: |
| char                   |      1       |                 -128 to +127                 |
| short char             |      1       |                 -128 to +127                 |
| unsigned char          |      1       |                   0 to 255                   |
| short int              |      2       |               -32768 to +32767               |
| unsigned short int     |      2       |                  0 to 65535                  |
| int                    |      4       |          -2147483648 to +2147483647          |
| unsigned int           |      4       |               0 to 4294967295                |
| long int               |      8       | -9223372036854775808 to +9223372036854775807 |
| unsigned long int      |      8       |          0 to 18446744073709551615           |
| long long int          |      8       | -9223372036854775808 to +9223372036854775807 |
| unsigned long long int |      8       |          0 to 18446744073709551615           |
| float                  |      4       |          1.17549e-38 to 3.40282e+38          |
| float(negative)        |      4       |         -1.17549e-38 to -3.40282e+38         |
| double                 |      8       |         2.22507e-308 to 1.79769e+308         |
| double(negative)       |      8       |        -2.22507e-308 to -1.79769e+308        |

:::danger
Above values may vary from compiler to compiler. In the above example, we have considered GCC 32 bit.

For More Information [Refer Here](https://en.cppreference.com/w/cpp/language/types)
:::

```cpp title="data_types.cpp"
// print the sizes of the primitive data types and along with type modifiers
#include <iostream>

using namespace std;

int main()
{
  bool b;
  cout << "Size of boolean: " << sizeof(b) << endl;

  char c;
  cout << "Size of character: " << sizeof(c) << endl;

  int i;
  cout << "Size of int: " << sizeof(i) << endl;

  long int li;
  cout << "Size of long int: " << sizeof(li) << endl;

  float f;
  cout << "Size of float: " << sizeof(f) << endl;

  double d;
  cout << "Size of double: " << sizeof(d) << endl;

  long double ld;
  cout << "Size of long double: " << sizeof(ld) << endl;
}
```

```bash
# output of the above program
$ ./data_types
Size of boolean: 1
Size of character: 1
Size of int: 4
Size of long int: 8
Size of float: 4
Size of double: 8
Size of long double: 16
```

### Derived Data types

These are derived from Primitive(built-in) data types. Like `Array`, `Function`, `Pointer` and `Reference`.

### User-Defined Data types

These are defined by users. Like, defining a class in C++ or a structure. `Class`, `Structure`, `Union`, `Enum`

## Basic Input Output

`iostream` header file is used for taking input and printing output.

`cout` is used to display on screen.
`<<` is an insertion operator used along with `cout`.
`cin` is used to take input from the user.
`>>` is an extraction operator used along with `cin`.

```cpp title="basic_io.cpp"
#include <iostream>

using namespace std;

int main() {
  cout << "Hello World\n";
  return 0;
}
```

```bash title="output"
$ ./basic_io
Hello World
```

```cpp title="input_sum.cpp"
// Take two numbers from user and print sum of the given numbers
#include <iostream>

using namespace std;

int main() {
  int a;
  cout << "Enter a number: ";
  cin >> a;

  int b;
  cout << "Enter another number: ";
  cin >> b;

  int total = a + b;
  cout << "Sum of given numbers " << a << " and " << b << " is " << total << endl;

  return 0;
}
```

```bash title="output"
$ ./input_sum
Enter a number: 5
Enter another number: 8
Sum of given numbers 5 and 8 is 13
```

## Operators

Operators are nothing but symbols that tell the compiler to perform some specific operations on the given operands.

### Arithmetic Operators

Arithmetic operators perform some arithmetic operation on one or two operands.

**Unary Operators** are the operators that operate only on the one operand. `++` and `--` unary operators.

**Binary Operators** operate onn two operands. `+`, `-`, `*`, `/`, `%` are binary operators.

Lets assume `x = 7`, `y = 10`

| Operator | Operation                              | Example     |
| :------: | -------------------------------------- | ----------- |
|    +     | Addition of two operands               | x + y = 17  |
|    -     | Subtract second operand from first     | y - x = 3   |
|    \*    | Multiplies two operands                | x \* y = 70 |
|    /     | Divides first operand by second        | y / x = 1   |
|    %     | Gives remainder after integer division | y % x = 3   |
|    ++    | Increments value by one                | x++ = 8     |
|    --    | Decrements value by one                | x-- = 6     |

:::danger
**Pre** Increment/decrement (`++x`) changes the values instantly where as **Post** Increment/decrement (`x++`) changes the value only after completing the execution of current statement and before execution of next statement.
:::

Simple example on arithmetic operators

```cpp title="arithmetic_example.cpp"
#include <iostream>

using namespace std;

int main()
{
  int x = 10, y = 7;

  cout << "Addition of " << x << " and " << y << " is " << x + y << endl;
  cout << "Subtraction of " << x << " and " << y << " is " << x - y << endl;
  cout << "Multiplication of " << x << " and " << y << " is " << x * y << endl;
  cout << "Division of " << x << " and " << y << " is " << x / y << endl;
  cout << "Remainder of " << x << " and " << y << " is " << x % y << endl;

  // Observe these two lines
  cout << "Pre-Increment of " << x << " is " << ++x << endl;
  cout << "Post-Increment of " << y << " is " << y++ << endl;
}
```

```bash title="output"
$ ./arithmetic_example
Addition of 10 and 7 is 17
Subtraction of 10 and 7 is 3
Multiplication of 10 and 7 is 70
Division of 10 and 7 is 1
Remainder of 10 and 7 is 3
Pre-Increment of 10 is 11
Post-Increment of 7 is 7
```

### Relational Operators

Relational operators defines relation(comparision) between two operands and it returns boolean value.

Lets assume `x = 7`, `y = 10`

| Operator | Operation                                                                      | Example       |
| :------: | ------------------------------------------------------------------------------ | ------------- |
|    ==    | returns true if two operands are equal                                         | x==y is false |
|    !=    | returns true if two operands are not equal                                     | x!=y is true  |
|    >     | returns true if left operand operand is greater than right operand             | x==y is false |
|    <     | returns true if left operand operand is less than right operand                | x==y is false |
|    >=    | returns true if left operand operand is greater than or equal to right operand | x==y is false |
|    <=    | returns true if left operand operand is less than or equal to right operand    | x==y is false |

Example on Relational Operators

```cpp title="relational_example.cpp
#include <iostream>

using namespace std;

int main() {
  int age = 15;

  if (age >= 18) {
    cout << "You can vote" << endl;
  } else {
    cout << "Sorry, You're too young to vote" << endl;
  }

  return 0;
}

```

```bash title="output"
$ ./relational_example
Sorry, You're too young to vote
```

### Logical Operators

Logical operators are used to combine multiple expressions/conditions together or to negate the logical value.

Lets assume x = 0, y = 1

| Operator | Operation                                      | Example        |
| :------: | ---------------------------------------------- | -------------- |
|    &&    | Return true if both operands are non-zeros     | x && y = false |
|   \|\|   | Return true if any of the operands is non-zero | x && y = false |
|    !     | Negate the logical value of the operand        | !x = true      |

```cpp title="logical_example.cpp"
#include <iostream>

using namespace std;

int main() {
  bool rainy = false;

  if(!rainy) {
    cout << "No need of umbrella" << endl;
  } else {
    cout << "Take an umbrella with you" << endl;
  }
  return 0;
}
```

```bash title="output"
$ ./logical_example
No need of umbrella
```

### Bitwise operators

Bitwise operators perform bit by bit operations.

Lets assume A = 0100 (4), B = 0101 (5)

| Operator | Operation                                                                                                       | Example       |
| :------: | --------------------------------------------------------------------------------------------------------------- | ------------- |
| & (AND)  | The result will contain 1 only if two bits are 1                                                                | A&B = 0100    |
| \| (OR)  | The result will contain 1 if 1 exist in atleast one of the opearnds                                             | A \| B = 0101 |
| ^ (XOR)  | The result will contain one the two bits are different                                                          | A^B = 0001    |
|    ~     | Binary ones complement. Flips the bits                                                                          | ~A = 1011     |
|    <<    | Left shift operator. Left operand bits are moved left by the number of places specified by the right operand.   | A<< 1 = 1000  |
|    >>    | Right shift operator. Left operand bits are moved right by the number of places specified by the right operand. | A>> 1 = 0010  |

:::tip
If shift operators applied on N then `N<<a` will give a result $$N*2^a$$ and `N>>a` will give a result $N/2^a$
:::

### Assignment operators

| Operator | Operation                                                                              | Example                      |
| :------: | -------------------------------------------------------------------------------------- | ---------------------------- |
|    =     | Assigns value of right operand to left operand                                         | A=B will put value of B in A |
|    +=    | Adds right operand to the left operand and assigns the result to left operand.         | A+=B $\equiv$ A = A+B        |
|    -=    | Subtracts right operand from the left operand and assigns the result to left operand.  | A-=B $\equiv$ A=A-B          |
|   \*=    | Multiplies right operand with the left operand and assigns the result to left operand. | A*=B $\equiv$ A=A*B          |
|    /=    | Divides left operand with the right operand and assigns the result to left operand.    | A/=B $\equiv$ A=A/B          |

### Miscellaneous Operators

|     Operator      | Description                                                                                   | Example                                  |
| :---------------: | --------------------------------------------------------------------------------------------- | ---------------------------------------- |
|    `sizeof()`     | Returns the size of a variable                                                                | `sizeof(x)` will return 4 since x is int |
| condition ? x : y | Conditional operator. If condition is true, then returns value of `x` or else value of `y`    | `2==3? 5 : 8`                            |
|        `,`        | Comma Operator causes a sequence of operations to be performed                                |                                          |
|       Cast        | Cast Operator converts one data type to another                                               | `(int)3.14` would return `3`             |
|         &         | returns the address of a variable.                                                            |                                          |
|        \*         | pointer to a variable.                                                                        | \*x will pointer to variable x           |
|   `->` and `.`    | Member operators are used to reference individual members of classes, structures, and unions. |                                          |

### Precedence of Operators

| Category       |              Operator              | Associativity |
| -------------- | :--------------------------------: | ------------- |
| Postfix        |         () [] -> . ++ - -          | Left to right |
| Unary          |  + - ! ~ ++ - - (type)\* & sizeof  | Right to left |
| Multiplicative |               \* / %               | Left to right |
| Additive       |                + -                 | Left to right |
| Shift          |               << >>                | Left to right |
| Relational     |             < <= > >=              | Left to right |
| Equality       |               == !=                | Left to right |
| Bitwise AND    |                 &                  | Left to right |
| Bitwise XOR    |                 ^                  | Left to right |
| Bitwise OR     |                 \|                 | Left to right |
| Logical AND    |                 &&                 | Left to right |
| Logical OR     |                \|\|                | Left to right |
| Conditional    |                 ?:                 | Right to left |
| Assignment     | = += -= \*= /= %=>>= <<= &= ^= \|= | Right to left |
| Comma          |                 ,                  | Left to right |

:::info
Unary, Conditional and Assignment operators have **Right to Left** associativity
:::

## Control Flow

The statements inside our source files are generally executed from top to bottom, in the order that they appear. Control flow statements, however, break up the flow of execution by employing decision making, looping, and branching, enabling your program to conditionally execute particular blocks of code

![Control Flow](./images/ControlFlow.svg)

### If statements

If we want to execute some code if and only if some condition is true then we use if statements.

```cpp title="if.cpp"
// If given number is even print even
#include <iostream>

using namespace std;

int main() {
  int n;
  cin >> n;

  if (n % 2 == 0) {
    // Here this will be executed only if n is even
    cout << n <<" is even" << endl;
  }

  return 0;
}
```

### If-Else statements

If we want to execute the specific code block if the condition is true or else it'll execute the else code block. Above in examples of [relational operators](cpp.md#relational-operators) and [logical operators](cpp.md#logical-operators) we've already used if-else statements.

```cpp title="if_else.cpp"
// Print even for even number and odd for odd number
#include <iostream>

using namespace std;

int main() {
  int n;
  cin >> n;

  if (n % 2 == 0) {
    // Here this will be executed only if n is even
    cout << n <<" is even" << endl;
  } else {
    // this block will execute only if the if condition is false`
    cout << n <<" is odd" << endl;
  }

  return 0;
}
```

### if-else-if ladder

If we've more than two alternatives to check and execute only one among them then we use if-else-if ladder

```cpp title="if_else_if.cpp"
// Print positive if n >= 1 or negative if n<=1 or zero if n ==0
#include <iostream>

using namespace std;

int main() {
  int n;
  cin >> n;

  if (n > 0) {
    cout << n << " is positive" << endl;
  } else if (n < 0) {
    cout << n << " is negative" << endl;
  } else {
    cout << n << " is zero" << endl;
  }

  return 0;
}
```

### Nested-If-Else statements

Here we'll have the if-else statements within another if-else statement hence they're known as nested if-else statements.

```cpp title="nested_if_else.cpp"
#include <iostream>

using namespace std;

int main() {
  // even odd and zero is neither even nor odd
  int n;
  cin >> n;

  if (n != 0) {

    if (n % 2 == 0) {
      cout << n <<" is even" << endl;
    } else {
      cout << n <<" is odd" << endl;
    }
  } else {
    cout << n <<" is neither odd nor even." << endl;
  }
  return 0;
}
```

### Switch Statement

Switch statement is an alternative for the if-else-if ladder where it compares(equality) a variable with list of values. It looks much cleaner than the if-else-if ladder. If a choice must be made from one of several or more options, and the switch statement can be used, then the switch statement will likely be faster than the corresponding if-else ladder.

```cpp title="switch_statement.cpp"
#include <iostream>

using namespace std;

int main() {
  int x;
  cout << "Enter a single digit number" << endl;
  cin >> x;

  switch(x) {
    case 1: // it checks for x== 1
      cout << "Choice 1" << endl;
      break;

    case 2: //
      cout << "Choice 2" << endl;
      break;

    case 3:
      cout << "Choice 3" << endl;
      break;

    default:
      cout << "Your option is out of range choose between 1 and 3" << endl;
  }

  return 0;
}
```

```cpp title="switch_statement_2.cpp"
#include <iostream>

using namespace std;

int main() {

  char grade;
  cout << "Enter your grade in last exams: ";
  cin >> grade;

  switch(grade) {
    // user might enter lower-case letters as well so check both cases (A and a)
    case 'A':
    case 'a':
      cout << "Excellent" << endl;
      break;
    case 'B':
    case 'b':
      cout << "Good" << endl;
      break;
    case 'C':
    case 'c':
      cout << "Passed" << endl;
      break;
    case 'D':
    case 'd':
      cout << "Failed... Try again next time" << endl;
      break;
    default:
      cout << "Invalid Grade" << endl;
  }

  return 0;
}
```

:::caution

The `break` statement after switch `cases` is used **to avoid fallthrough** in switch statement i.e. it will not executes all the remaining cases that exist after the true case.

:::

### While Loop

> Loop statements are used to execute the block of code repeatedly for a specified number of times (or) until it meets a specified condition. Loop statement are very useful to iterate over collection/list of items or to perform a task for multiple times.

While loop is used to iterate a block of code as long as test expression (condition) is true. For each iteration the test expression will be evaluated. While loop comes handy when number of iterations is unknown.

```cpp title="while.cpp"
// print numbers from 1 to 10 seperated by ,
#include <iostream>

using namespace std;

int main() {
  int n = 1;
  while (n <= 10) {
    cout << n << ", ";
    n++;
  }
  return 0;
}
```

### do-while loop

do-while loop is similar to the while loop but do-while loop **will execute atleast once** even the test expression (condition) is false. First it will execute the code block then evaluates the test expression.

```cpp title="do_while.cpp"
// print numbers from 1 to 10 seperated by ,
#include <iostream>

using namespace std;

int main() {
  int n = 1;
  do {
    cout << n << ", ";
    n++;
  } while (n <= 10);

  return 0;
}
```

### for loop

for-loop is used when the number of iterations is known. It takes **initialization expression**, **test expression** and **update expression**. The initialization expression will be executed only once as it will act as the iterator, test expression and update expression will be evaluated or executed for each iteration once the test expression evaluates to false the loop will be terminated.

```cpp title="for_loop.cpp"
// print numbers from 1 to 10 seperated by ,
#include <iostream>

using namespace std;

int main() {
  // for(initialization expression, test expression, update expression)
  for(int n = 1; n <= 10; n++) {
    cout << n << ", ";
  }

  return 0;
}
```

### Break statement

Break statement inside any loop will terminate the execution of the loop contiaining it. If nested loop has the break statement then it will break only inner loop but not the outer loop

:::info
break statement is also used in switch statement to avoid fallthrough
:::

### Continue statement

Continue satement inside any loop will skip the current iteration. When a continue statement will not terminate the loop rather it continues with next iteration.

### Goto statement

goto statement is used to alter the normal execution of a program and transfer control (unconditionally) to a labeled statement in the same program. In a C++ program we can have multiple goto and label statements, the goto statement is followed by a label name.

:::info
Label is an identifier, which can be any plain text and can be set anywhere in a C++ program above or below to goto statement. When a goto statement is encountered, compiler transfers the control to a label: specified with goto statement and begin execution from there.
:::

## Functions

In computer language, a function is a block of code that performs a particular task, and it is given a name.

Functions in programming is similar to the mathematical functions. They take something as input, perform some operation on it, and return the output. Functions are reusable (define the code once and use it many times). Functions make the code modular.

:::info
In C++ the execution of code begins at **`main` function**.
:::

There are two types of functions

1. Library functions: these are predefined
2. User-defined functions: created by users

![Function Types](./images/func_types.svg)

In C++ function creation consist of two steps. They are

1. Function Declaration
2. Function Definition

### Function Declaration

Function declaration informs the compiler about:

- The return type of function
- The function name
- The number of parameters and their data types.

Basic syntax of declaring a function is

```cpp
return_type function_name(parameters);
```

#### Return Type

Return Type specifies the type of data a function returns in output to the calling point after performing its task. Few functions doesn't return nothing in ouput such functions have **`void`** return type.

#### Function Parameters

Parameters are nothing but the inputs we are passing to the function to perform some task using them. The parameters passed to function are called **actual parameters** or **arguments**. The parameters received by function are called formal parameters. Passing parameters in a function is optional.

While declaring the function it's not necessary to give parameter names but we've to mention the data type of parameter.

```cpp title="func_declaration.cpp"
#include <iostream>

using namespace std;

// Function declaration (both of them correct we need only one)
int multiply(int num_1, int num_2);
// int multiply(int , int);

int main() {
  // code;
  return 0;
}
```

There are two ways to pass parameters. They are

1. **Pass by value:** values of actual parameters are copied to function’s formal parameters and the two types of parameters are stored in different memory locations. So any changes made inside functions are not reflected in actual parameters of caller.
2. **Pass by reference:** Both actual and formal parameters refer to same locations, so any changes made inside the function are actually reflected in actual parameters of caller.

### Function definition

Function definition contains the group of statements which will do specific task when the function is called.

In C/C++ function declaration and definition can be done at same place but it must be before the main function. Or else we declare the function before main function then we can define the defintion anywhere in the file or in any other module which was included in the program.

```cpp title="func_definition.cpp"
#include <iostream>

using namespace std;

// declare and define at same place
int multiply(int num_1, int num_2) {
  return num_1 * num_2;
}

int main() {
  // code;
  return 0;
}
```

### Calling a function

The functions created in a program are not executed until we call them. When we call the function, control is given to the very first statement inside the called function. To call a function in a program, we have to write a function name followed by values of arguments in the round brackets and the semicolon. We can call a function in any other function in a program.

The basic syntax for calling a function is

```cpp
int main() {
  function_name(values_of_parameters)
  return 0;
}
```

```cpp title="calling_a_func.cpp"
#include <iostream>

using namespace std;

int multiply(int num_1, int num_2) {
  return num_1 * num_2;
}

int main() {
  int a = 5, b = 6;

  // calling a function
  int result = multiply(a, b);
  cout << result;
  return 0;
}
```

Lets write a function which calculates area of the rectangle given length and breadth as input.

```cpp title="area_rect.cpp"
#include <iostream>

using namespace std;

double rect_area(float l, float b) {
  return l * b;
}

int main() {
  float l, b;
  cin >> l >> b;
  double area = rect_area(l, b);
  cout << area << endl;
  return 0;
}
```

Another example where we write multiple functions for creating a simple calcuator

```cpp title="calc.cpp"
#include <iostream>

using namespace std;

double add(double number1, double number2) {
  double result = number1 + number2;
  return result;
}

double subtract(double number1, double number2) {
  double result = number1 - number2;
  return result;
}

double multiply(double number1, double number2) {
  double result = number1 * number2;
  return result;
}

double divide(double number1, double number2) {
  double result = number1 / number2;
  return result;
}

double test(double number1, char operate, double number2) {
  double result;

  switch (operate) {
  case '+':
    result = add(number1, number2);
    break;

  case '-':
    result = subtract(number1, number2);
    break;

  case '*':
    result = multiply(number1, number2);
    break;

  case '/':
    result = divide(number1, number2);
    break;

  default:
    result = -1;
  }

  return result;

}

int main() {
  double number1 = 7;
  char operate = '+';
  double number2 = 8;
  double result;
  cout << number1 << operate << number2 << " = ";

  result = test(number1, operate, number2);
  cout << result;
  return 0;
}
```

## Recursion

If the function calls itself again and again until some condition is met, then such a function is known as a recursive function. This process is known as recursion.

Recursion follows the **_divide and conquer_** strategy. Where the given problem can be divided into sub-problems of itself. It helps us to write shorter code.

A recursive function consist of two cases they are

1. **Base case:** The condition where the function stops calling itself in its body
2. **Recursive case:** Which calls the function again and again until base conditino is met

Write a function to calculate factorial of given number

```cpp title="factorial.cpp" {7-9,12}
#include <iostream>

using namespace std;

int factorial(int n) {
  // base case
  if(n <= 0 || n == 1) {
    return 1;
  }

  // recursive case
  return n * factorial(n-1);
}

int main() {
  int n;
  cin >> n;
  cout << factorial(n) << endl;
  return 0;
}
```

All recursive functions can be written using iteration(loops) which is faster compared to recursion since Recursive functions are expensive (inefficient) as they take up a lot of memory and time. Refer [Recursion vs Iteration](https://www.geeksforgeeks.org/difference-between-recursion-and-iteration/)

## Arrays

An array is a derived data type. An array is a sequential collection of values of the same data type under the same name are stored at contiguous memory locations. We must provide the size of an array while declaring. The values or elements of array can be accessed using index of the element. In C++ array index starts from 0.

Basic syntax of the array declaration

```cpp
// declaration
data_type array_name[size];
```

```cpp title="average.cpp"
// given 5 values find average
#include <iostream>

using namespace std;

int main() {
  int arr[5] = {10, 22, 42, 57, 31};
  float ans, total = 0;

  for(int i = 0; i <5; i++) {
    total += arr[i];
  }

  ans = total / 5;
  cout << ans;
  return 0;
}
```

### 2D arrays

Two Dimensional array represents a matrix. Elements in 2D arrays can be accessed using row-index and column index.

Basic syntax of creating a 2D array

```cpp
data_type arr_name[row_size][col_size];
```

Write a function that will multiply the two matrices.

```cpp title="matrix_mult.cpp"
#include <iostream>

using namespace std;

// multiplication function
void multiplication(int arr1[][2], int row1, int col1, int arr2[][2], int row2, int col2, int result[][2]) {
  // Check if col of first matrix equal to row of second matrix
  if (col1 == row2) {
    // Traverse first array row
    for (int x = 0; x < row1; x++) {
      // Traverse second array columns
      for (int y = 0; y < col2; y++) {
        // Traverse first array columns and second array rows
        for (int z = 0; z < col1; z++) {
          // Multiplication
          result[x][y] = result[x][y] + arr1[x][z] * arr2[z][y];
        }
      }
    }
  }
  else{
  // Traverse first array row
    for (int x = 0; x < row1; x++) {
      // Traverse second array columns
      for (int y = 0; y < col2; y++) {
        // Fill the elements of array by -1
        result[x][y] = -1;
      }
    }
  }

}

// print_array function
void print_array(int arr[3][2], int row, int column) {
  // Outer loop
  for (int i = 0; i < row; i++) {
    // Inner loop
    for (int j = 0; j < column; j++) {
      cout << arr[i][j] << " ";
    }
    cout << endl;
  }
}

// main function
int main() {
  // Initialize arr1
  int arr1[3][2] = {{1,2},{3,4},{5,6}};
  // Initialize arr2
  int arr2[2][2] = {{10,20},{30,40}};
  // Initialize result
  int result[3][2] = {{0,0},{0,0},{0,0}};
  // Call function multiplication
  multiplication(arr1,3,2,arr2,2,2,result);
  // Call function print_array
  print_array(result,3,2);
  return 0;
}
```

## Pointers

Pointers is a variable which stores the address of another variable instead of value. The address of a variable is in the hexa-decimal format which can be obtained using **address-of** operator `&`.

:::info
The number that uniquely identifies the location in the memory is known as the memory address.
:::

Syntax of pointer declaration and initialization.

```cpp
// declaration
data_type *pointer_name;

// intialization
pointer_name = &some_variable_name;
```

It’s a good practice to use **ptr** in a pointer’s variable name. It indicates that a variable is a pointer, and it must be handled differently.

The pointer will have the address of the variable. If we want to access the value present at that address then we'll use **indirection** or **dereference operator** `*`. The dereference operator \* is a unary operator. It gives the value of the variable to which the pointer is pointing. This process is known as dereferencing a pointer.

:::warning
A pointer must be valid before it is dereferenced. Dereferencing a null pointer or an uninitialized pointer causes undefined behavior. Your program might crash, but it might just as well keep running and start giving strange results.
:::

### Null Pointer

If the pointer is pointing to nothing, then it will be initialized to **nullptr**. It is known as a null pointer. The value of the null pointer is 0.

:::caution
Dereferencing a null pointer (`*p`) causes an `STATUS_ACCESS_VIOLATION` exception
:::

Simple pointer program

```cpp title="pointer.cpp"
#include <iostream>

using namespace std;

int main() {
  int number = 75;
  // declared and initialized a pointer
  int *number_ptr = &number;

  // print the number variable
  cout << number << endl;
  // print the address of number variable stored in pointer
  cout << number_ptr << endl;
  // print the value at which pointer is pointing
  cout << *number_ptr << endl;

  // change the value at the number_ptr address to 28
  *number_ptr = 28;

  // print the number variable
  cout << number << endl;
  // print the address of number variable stored in pointer
  cout << number_ptr << endl;
  // print the value at which pointer is pointing
  cout << *number_ptr << endl;

  return 0;
}
```

## Reference Variable

A reference is an alias, or an alternate name to an existing variable. The main use of references is acting as function formal parameters to support pass-by-reference. When an reference variable is passed into a function, the function works on the original copy (instead of a clone copy in pass-by-value). Changes inside the function are reflected outside the function. A reference is similar to a pointer. In many cases, a reference can be used as an alternative to pointer, in particular, for the function parameter.

`&` is known as Reference operator or address-of operator based on the context (expression) it's used. When we declare a reference variable we do not create a new object in memory, we just declare alternate name for an existing variable. The original variable and reference variable are infact same memory location called by different names.

Reference variable syntax

```cpp
type& ref_variable_name = existing_var_name;
```

:::info
After the reference relationship is established, it cannot be changed.
:::

```cpp title="reference.cpp"
#include <iostream>

using namespace std;

int main() {
  int number = 75;
  // reference variable
  int &number_ref = number;

  cout << number << endl;
  cout << number_ref << endl;

  number_ref = 28;
  cout << number << endl;
  cout << number_ref << endl;

  number = 89;
  cout << number << endl;
  cout << number_ref << endl;

  return 0;
}
```

It shall be read as “number_ref is a reference to number, or “number_ref is an alias of number”. You can now refer to the variable as number_ref or number

## References vs Pointer

Pointers and references are equivalent, except:

| Reference                                                                                          | Pointer                                                                 |
| -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| A reference must be initialized when it is declared.                                               | A pointer can be initialized to any value anytime after it is declared. |
| References cannot be NULL.                                                                         | A pointer can be assigned to point to a NULL value.                     |
| References can be used ,simply, by name.                                                           | Pointers need to be dereferenced with a `*`.                            |
| Once a reference is initialized to a variable, it cannot be changed to refer to a variable object. | A pointer can be changed to point to any variable of the same type.     |

```cpp title="reference_vs_pointer.cpp"
/* References vs. Pointers (TestReferenceVsPointer.cpp) */
#include <iostream>

using namespace std;

int main() {
  int number1 = 88, number2 = 22;

  // Create a pointer pointing to number1
  int *pNumber1 = &number1;
  *pNumber1 = 99;
  cout << *pNumber1 << endl;
  cout << &number1 << endl;
  cout << pNumber1 << endl;
  cout << &pNumber1 << endl;
  pNumber1 = &number2;

  // Create a reference (alias) to number1
  int &refNumber1 = number1;
  refNumber1 = 11;
  cout << refNumber1 << endl;
  cout << &refNumber1 << endl;

  refNumber1 = number2;  // refNumber1 is still an alias to number1.

  // Assign value of number2 (22) to refNumber1 (and number1).
  number2++;
  cout << refNumber1 << endl;
  cout << number1 << endl;
  cout << number2 << endl;
}
```

## Pass by reference in function

In C/C++, by default, arguments are passed into functions by value (except arrays which is treated as pointers). That is, a clone copy of the argument is made and passed into the function. Changes to the clone copy inside the function has no effect to the original argument in the caller. In other words, the called function has no access to the variables in the caller.

```cpp title="pass_by_value.cpp"
#include <iostream>
using namespace std;

int square(int);

int main() {
   int number = 8;
   cout <<  "In main(): " << &number << endl;  // 0x22ff1c
   cout << number << endl;         // 8
   cout << square(number) << endl; // 64
   cout << number << endl;         // 8 - no change
}

int square(int n) {  // non-const
   cout <<  "In square(): " << &n << endl;  // 0x22ff00
   n *= n;           // clone modified inside the function
   return n;
}
```

### With pointer arguments

In many situations, we may wish to modify the original copy directly (especially in passing huge object or array) to avoid the overhead of cloning. This can be done by passing a pointer of the object into the function, known as pass-by-reference.

```cpp title="pass_by_ref_pointers.cpp"
#include <iostream>
using namespace std;

void square(int *);

int main() {
   int number = 8;
   cout <<  "In main(): " << &number << endl;  // 0x22ff1c
   cout << number << endl;   // 8
   square(&number);          // Explicit referencing to pass an address
   cout << number << endl;   // 64
}

void square(int * pNumber) {  // Function takes an int pointer (non-const)
   cout <<  "In square(): " << pNumber << endl;  // 0x22ff1c
   *pNumber *= *pNumber;      // Explicit de-referencing to get the value pointed-to
}
```

### with Reference Arguments

Instead of passing pointers into function, you could also pass references into function, to avoid the clumsy syntax of referencing and dereferencing.

```cpp title="pass_by_ref.cpp"
#include <iostream>
using namespace std;

void square(int &);

int main() {
   int number = 8;
   cout <<  "In main(): " << &number << endl;  // 0x22ff1c
   cout << number << endl;  // 8
   square(number);          // Implicit referencing (without '&')
   cout << number << endl;  // 64
}

void square(int & rNumber) {  // Function takes an int reference (non-const)
   cout <<  "In square(): " << &rNumber << endl;  // 0x22ff1c
   rNumber *= rNumber;        // Implicit de-referencing (without '*')
}
```

:::note
Referencing (in the caller) and dereferencing (in the function) are done implicitly. The only coding difference with pass-by-value is in the function's parameter declaration.
:::

Recall that references are to be initialized during declaration. In the case of function formal parameter, the references are initialized when the function is invoked, to the caller's arguments.

References are primarily used in passing reference in/out of functions to allow the called function accesses variables in the caller directly.

## `const` Function Reference/Pointer Parameters

A const function formal parameter cannot be modified inside the function. Use const whenever possible as it protects you from inadvertently modifying the parameter and protects you against many programming errors.

A const function parameter can receive both const and non-const argument. On the other hand, a non-const function reference/pointer parameter can only receive non-const argument.

```cpp title="const_parameters.cpp"
#include <iostream>
using namespace std;

int squareConst(const int);
int squareNonConst(int);
int squareConstRef(const int &);
int squareNonConstRef(int &);

int main() {
   int number = 8;
   const int constNumber = 9;
   cout << squareConst(number) << endl;
   cout << squareConst(constNumber) << endl;
   cout << squareNonConst(number) << endl;
   cout << squareNonConst(constNumber) << endl;

   cout << squareConstRef(number) << endl;
   cout << squareConstRef(constNumber) << endl;
   cout << squareNonConstRef(number) << endl;
   // cout << squareNonConstRef(constNumber) << endl;
       // error: invalid initialization of reference of
       //  type 'int&' from expression of type 'const int'
}

int squareConst(const int number) {
   // number *= number;  // error: assignment of read-only parameter
   return number * number;
}

int squareNonConst(int number) {  // non-const parameter
   number *= number;
   return number;
}

int squareConstRef(const int & number) {  // const reference
   return number * number;
}

int squareNonConstRef(int & number) {  // non-const reference
   return number * number;
}
```

## Passing the Function's Return Value

### Passing the Return-value as Reference

You can also pass the return-value as reference or pointer.

```cpp title="pass_by_ref_return.cpp"
#include <iostream>
using namespace std;

int & squareRef(int &);
int * squarePtr(int *);

int main() {
   int number1 = 8;
   cout <<  "In main() &number1: " << &number1 << endl;  // 0x22ff14
   int & result = squareRef(number1);
   cout <<  "In main() &result: " << &result << endl;  // 0x22ff14
   cout << result << endl;   // 64
   cout << number1 << endl;  // 64

   int number2 = 9;
   cout <<  "In main() &number2: " << &number2 << endl;  // 0x22ff10
   int * pResult = squarePtr(&number2);
   cout <<  "In main() pResult: " << pResult << endl;  // 0x22ff10
   cout << *pResult << endl;   // 81
   cout << number2 << endl;    // 81
}

int & squareRef(int & rNumber) {
   cout <<  "In squareRef(): " << &rNumber << endl;  // 0x22ff14
   rNumber *= rNumber;
   return rNumber;
}

int * squarePtr(int * pNumber) {
   cout <<  "In squarePtr(): " << pNumber << endl;  // 0x22ff10
   *pNumber *= *pNumber;
   return pNumber;
}
```

:::danger
You should not pass Function's local variable as return value by reference

```cpp title="pass_local_result.cpp"
#include <iostream>
using namespace std;

int * squarePtr(int);
int & squareRef(int);

int main() {
   int number = 8;
   cout << number << endl;  // 8
   cout << *squarePtr(number) << endl;  // ??
   cout << squareRef(number) << endl;   // ??
}

int * squarePtr(int number) {
   int localResult = number * number;
   return &localResult;
      // warning: address of local variable 'localResult' returned
}

int & squareRef(int number) {
   int localResult = number * number;
   return localResult;
      // warning: reference of local variable 'localResult' returned
}
```

This program has a serious logical error, as local variable of function is passed back as return value by reference. Local variable has local scope within the function, and its value is destroyed after the function exits. The GCC compiler is kind enough to issue a warning (but not error).
:::

It is safe to return a reference that is passed into the function as an argument.

### Passing Dynamically Allocated Memory as Return Value by Reference

Instead, you need to dynamically allocate a variable for the return value, and return it by reference.

```cpp title="return_new.cpp"
#include <iostream>
using namespace std;

int * squarePtr(int);
int & squareRef(int);

int main() {
   int number = 8;
   cout << number << endl;  // 8
   cout << *squarePtr(number) << endl;  // 64
   cout << squareRef(number) << endl;   // 64
}

int * squarePtr(int number) {
   int * dynamicAllocatedResult = new int(number * number);
   return dynamicAllocatedResult;
}

int & squareRef(int number) {
   int * dynamicAllocatedResult = new int(number * number);
   return *dynamicAllocatedResult;
}
```

## Dynamic Memory Allocation

Sometimes we need to create objects in memory during run time. This happens when we do not know the size of the object when we create and compile the program. Heap memory (also called free memory or dynamic memory) is used to store objects created during run time. This situation occurs when an object, or a collection of objects, needs a lot of memory or when the amount of memory cannot be calculated during the compilation. The objects created in heap memory cannot have a name, so to access them, we need a pointer in stack memory that can be pointed to them.

:::info
An object created in heap memory cannot have a name; it can be accessed only through its address, which is reached by a pointer in stack memory.
:::

### `new` and `delete` operators

`new` operator is used to allocate memory dynamically. `new` operation returns a pointer to the memory allocated.

`delete` operator is used to free the memory. The `delete` operator takes a pointer (pointing to the memory allocated via new) as its sole argument.

:::note
Avoid using `malloc()` and `free()` from C. Instead, use `new` and `delete`, or `new[]` and `delete[]`.
:::

```cpp title="dynamic_memory.cpp"
#include <iostream>

using namespace std;

int main() {
  // Static allocation
  int number = 88;
  int * p1 = &number;  // Assign a "valid" address into pointer

  // Dynamic Allocation
  int * p2;            // Not initialize, points to somewhere which is invalid
  cout << p2 << endl; // Print address before allocation
  p2 = new int;       // Dynamically allocate an int and assign its address to pointer
                      // The pointer gets a valid address with memory allocated
  *p2 = 99;
  cout << p2 << endl;  // Print address after allocation
  cout << *p2 << endl; // Print value point-to
  delete p2;           // Remove the dynamically allocated storage
}
```

To initialize the allocated memory, you can use an initializer for fundamental types, or invoke a constructor for an object.

```cpp title="dynamic_memory2.cpp"
#include <iostream>

using namespace std;

int main() {
  // use an initializer to initialize a fundamental type (such as int, double)
  int * p1 = new int(88);
  double * p2 = new double(1.23);

  // C++11 brace initialization syntax
  int * p1 = new int {88};
  double * p2 = new double {1.23};

  // invoke a constructor to initialize an object (such as Date, Time)
  Date * date1 = new Date(1999, 1, 1);
  Time * time1 = new Time(12, 34, 56);
}
```

### `new[]` and `delete[]` Operators

Dynamic array is allocated at runtime rather than compile-time, via the `new[]` operator. To remove the storage, you need to use the `delete[]` operator (instead of simply delete).

```cpp
#include <iostream>
#include <cstdlib>
using namespace std;

int main() {
  const int SIZE = 5;
  int * pArray;

  pArray = new int[SIZE];  // Allocate array via new[] operator

  // Assign random numbers between 0 and 99
  for (int i = 0; i < SIZE; ++i) {
    *(pArray + i) = rand() % 100;
  }
  // Print array
  for (int i = 0; i < SIZE; ++i) {
    cout << *(pArray + i) << " ";
  }
  cout << endl;

  delete[] pArray;  // Deallocate array via delete[] operator


  // C++11
  int * p = new int[5] {1, 2, 3, 4, 5};
  delete[] p

  return 0;
}
```

:::warning
To prevent memory leaks, every call to `new` should be paired with a call to `delete`, and every call to `new[]` should be paired with a call to `delete[]`. Not calling `delete` or `delete[]`, or mismatching calls, results in memory leaks.
:::
