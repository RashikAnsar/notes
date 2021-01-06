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

:::info
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
