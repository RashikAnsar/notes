---
id: questions
title: Practice Questions
sidebar_label: C++ Work Sheet
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

<details>

  <summary>Print your name</summary>

```cpp title="my_name.cpp"
#include <iostream>

int main() {
  // Change string "YOUR NAME HERE" to your name
  std::cout << "YOUR NAME HERE" << std::endl;
  return 0;
}
```

</details>

<details>

  <summary>Print your name, age, hobbies </summary>

```cpp title="bio.cpp"
#include <iostream>

int main() {
  std::cout << "C++\n"; // \n is new line
  std::cout << 25 << std::endl;
  std::cout << "Coding" << std::endl;

  return 0;
}
```

</details>

## Variables

<details>
<summary>Create a variable to store your favourite number and print it</summary>

```cpp title="fav_num.cpp"
#include <iostream>

using namespace std;

int main() {
  // declare and initialize a variable
  int favNum = 3;
  // printing the variable value
  cout << favNum << endl;

  return 0;
}
```

</details>

<details>
<summary>Create variables to store your name, favourite number and print it</summary>

```cpp title="fav_num.cpp"
#include <iostream>

using namespace std;

int main() {
  // declare and initialize variables
  string myName = "C++";
  int favNum = 3;
  // printing the variable value
  cout << myName << endl;
  cout << favNum << endl;

  return 0;
}
```

</details>

<details>
<summary>Swap values of two variables</summary>

```cpp title="swap_values.cpp"
#include <iostream>

using namespace std;

int main() {
  int a = 10, b = 20;

  cout << "Before Swapping... A: " << a  << " B: " <<b << endl;

  // swapping values using third variable temp
  int temp = a;
  a = b;
  b = temp;

  cout << "After Swapping... A: " << a  << " B: " <<b << endl;
}
```

:::tip

<details>
<summary>Swap the values of two variables without using third variable</summary>

```cpp title="swap_values2.cpp"
#include <iostream>

using namespace std;

int main() {
  int a = 10, b = 20;

  cout << "Before Swapping... A: " << a  << " B: " <<b << endl;

  // swapping values wihtout using third variable
  a = a + b;
  b = a - b;
  a = a - b;

  cout << "After Swapping... A: " << a  << " B: " <<b << endl;
}
```

</details>
:::
</details>

## Input/Output

<details>
<summary>Take input of favourite number and print it on screen</summary>

```cpp title="numInput.cpp"
#include <iostream>

using namespace std;

int main() {
  int favNum;
  cout << "Enter yout fav.number: ";
  cin >> favNum;
  cout << favNum << endl;
  return 0;
}
```

</details>

<details>
<summary>Take full name of user and age of user as inputs and print them </summary>

```cpp title="stringInput.cpp"
#include <iostream>

using namespace std;

int main() {
  string name;
  cout << "Enter your name : ";
  // using getline since cin considers space as termination of input
  getline(cin, name);

  int age;
  cout << "Enter your age: ";
  cin >> age;

  cout << "Name: " << name << endl;
  cout << "Age: " << age << endl;

  return 0;
}

```

</details>

## Conditionals

<details>
<summary>Check the given number is odd or even and print</summary>

```cpp title="odd_even.cpp"
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

</details>

<details>
<summary>Largest among three numbers</summary>

```cpp title="largest3.cpp"
#include <iostream>

using namespace std;

int main() {
  float a, b, c;
  cout << "Enter three numbers: ";
  cin >> a >> b >> c;

  if (a >= b) {
    if (a >= c) {
      cout << a <<" is the largest number." << endl;
    } else {
      cout << c <<" is the largest number." << endl;
    }
  } else {
    if (b >= c) {
      cout << b <<" is the largest number." << endl;
    } else {
      cout << c <<" is the largest number." << endl;
    }
  }

  /** // using logical operators in conditions
  if (a >= b && a >= c) {
    cout << a <<" is the largest number." << endl;
  }
  else if (b >= a && b >= c) {
    cout << b <<" is the largest number." << endl;
  }
  else {
    cout << c <<" is the largest number." << endl;
  }
  **/
}

```

</details>

<details>
<summary>check whether the triangle formed by the given sides(inputs) is equilateral, isosceles, or scalene.</summary>

```cpp title="triangle.cpp"
#include <iostream>

using namespace std;

int main() {
  int a, b, c;
  cout << "Enter three sides of the triangle: ";
  cin >> a >> b >> c;

// Check for equilateral triangle
  if (a == b && b == c) { //a = b = c
    cout << "Equilateral Triangle";
  }
  // Check for isoceles triangle
  else if (a == b || b == c || c == a) { // a=b or b = c or c = a
    cout << "Isoceles Triangle";
  }
  // Otherwise scalene triangle
  else {
    cout << "Scalene Triangle";
  }

  return 0;
}
```

</details>

<details>
<summary>
Given coefficients of a quadratic equation , you need to print the nature of the roots (Real and Distinct , Real and Equal or Imaginary) and the roots.

If Real and Distinct , print the roots in increasing order.
If Real and Equal , print the same repeating root twice
If Imaginary , no need to print the roots.

Note : Print only the integer part of the roots.

</summary>

```cpp title="quadratic_equation.cpp"
#include <cmath>
#include <iostream>

using namespace std;

int main() {
  int a, b, c, d;
  cin >> a >> b >> c;
  d = (b * b) - (4 * a * c);
  int root1 = (sqrt(d) - b) / (2 * a);
  int root2 = -1 * (sqrt(d) + b) / (2 * a);

  //   when b2 − 4ac is positive, we get two Real solutions
  if (d > 0 && a != 0) {
    cout << "Real and Distinct" << endl;
    cout << root2 << " " << root1 << endl;
  }
  // when it is zero we get just ONE real solution (both answers are the same)
  else if (d == 0 && a != 0) {
    cout << "Real and Equal" << endl;
    cout << root1 << " " << root1 << endl;
  }
  // when it is negative we get a pair of Complex solutions
  else {
    cout << "Imaginary" << endl;
  }

  return 0;
}
```

</details>

## Loops

:::tip
Check out for pattern questions on GeeksForGeeks or [Here](https://codescracker.com/cpp/program/cpp-program-print-star-pyramid-patterns.htm)
:::

<details>
<summary>Read N numbers and print their average. HINT: You would be given first N, and then N integers of the list.</summary>

```cpp title="average.cpp"
#include <iostream>

using namespace std;

int main() {
  int N, num, total= 0;
  cin >> N;
  int count = N;
  while(count--) {
    cin >> num;
    total += num;
  }
  cout << "Average :" << (total/N) << endl;
  return 0;
}
```

</details>

<details>
<summary>Given a number check if it is a member of Fibonacci sequence or not?</summary>

```cpp title="is_Fibonacci.cpp"
#include <iostream>

using namespace std;

int main() {
  int n, a = 0, b = 1, c = a + b;
  cin >> n;

  if(n == a || n == b) {
    cout << "Fibonacci Sequence Number" << endl;
    return 0;
  }

  while(c <= n) {
    if (n == c) {
      cout << "Fibonacci Sequence Number" << endl;
      return 0;
    }
    a = b;
    b = c;
    c = a + b;
  }
  cout << "Not a Fibonacci Sequence Number" << endl;

  return 0;
}
```

</details>

<details>
<summary>Given a number N, find sum of its digits</summary>

```cpp title="sum_of_digits.cpp"
#include <iostream>

using namespace std;

int main() {
  long long n;
  int rem, total = 0;
  cin >> n;

  while (n > 0) {
    rem = n % 10;
    total += rem;
    n /= 10;
  }
  cout << total << endl;

  return 0;
}
```

</details>

### Patterns

<details>
<summary>Print the following pattern (square)</summary>
<Tabs
  className="unique-tabs"
  defaultValue="_out"
  values={[
    {label: 'Input', value: '_in'},
    {label: 'Output', value: '_out'},
  ]}>
  <TabItem value="_in"><code>n = 5</code></TabItem>
  <TabItem value="_out">

  ```cpp
  * * * * *
  * * * * *
  * * * * *
  * * * * *
  * * * * * 
  ```
  </TabItem>
</Tabs>

```cpp title="pattern.cpp"
#include <iostream>

using namespace std;

int main() {
  int n;
  cin >> n;
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n; j++) {
      cout << "* ";
    }
    cout << endl;
  }

  return 0;
}
```
</details>

<details>
<summary>Print the following pattern (Rectangle)</summary>

<Tabs
  className="unique-tabs"
  defaultValue="_out"
  values={[
    {label: 'Input', value: '_in'},
    {label: 'Output', value: '_out'},
  ]}>
  <TabItem value="_in"><code>row = 4 col = 7</code></TabItem>
  <TabItem value="_out">

  ```cpp
  *******
  *******
  *******
  *******
  ```
  </TabItem>
</Tabs>

```cpp title="pattern.cpp"
#include <iostream>

using namespace std;

int main() {
  int row, col;
  cin >> row >> col;
  for (int i = 1; i <= row; i++) {
    for (int j = 1; j <= col; j++) {
      cout << "*";
    }
    cout << endl;
  }

  return 0;
}
```
</details>

<details>
<summary>Print the following pattern (Hollow Rectangle)</summary>

<Tabs
  className="unique-tabs"
  defaultValue="_out"
  values={[
    {label: 'Input', value: '_in'},
    {label: 'Output', value: '_out'},
  ]}>
  <TabItem value="_in"><code>row = 4 col = 8</code></TabItem>
  <TabItem value="_out">

  ```cpp
  ********
  *      *
  *      *
  ********
  ```
  </TabItem>
</Tabs>

```cpp title="pattern.cpp"
#include <iostream>

using namespace std;

int main() {
  int row, col;
  cin >> row >> col;
  for (int i = 1; i <= row; i++) {
    for (int j = 1; j <= col; j++) {
      if (i == 1 || i == row || j == 1 || j == col) {
        cout << "*";
      } else {
        cout << " ";
      }
    }
    cout << endl;
  }

  return 0;
}
```
</details>

<details>
<summary>Print the following pattern </summary>

<Tabs
  className="unique-tabs"
  defaultValue="_out"
  values={[
    {label: 'Input', value: '_in'},
    {label: 'Output', value: '_out'},
  ]}>
  <TabItem value="_in"><code>n = 6</code></TabItem>
  <TabItem value="_out">

  ```cpp
  1
  2 2
  3 3 3
  4 4 4 4
  5 5 5 5 5
  6 6 6 6 6 6
  ```
  </TabItem>
</Tabs>

```cpp title="pattern.cpp"
#include <iostream>

using namespace std;

int main() {
  int n;
  cin >> n;

  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
      cout << i << " ";
    }
    cout << endl;
  }

  return 0;
}
```
</details>

<details>
<summary>Print the following pattern (Floyd's Triangle)</summary>

<Tabs
  className="unique-tabs"
  defaultValue="_out"
  values={[
    {label: 'Input', value: '_in'},
    {label: 'Output', value: '_out'},
  ]}>
  <TabItem value="_in"><code>n = 5</code></TabItem>
  <TabItem value="_out">

  ```cpp
  1 
  2 3 
  4 5 6 
  7 8 9 10 
  11 12 13 14 15
  ```
  </TabItem>
</Tabs>

```cpp title="pattern.cpp"
#include <iostream>

using namespace std;

int main() {
  int n, count = 1;
  cin >> n;
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
      cout << count << " ";
      count++;
    }
    cout << endl;
  }

  return 0;
}
```
</details>

<details>
<summary>Print the following pattern (Half Pyramid after 180&deg;)</summary>

<Tabs
  className="unique-tabs"
  defaultValue="_out"
  values={[
    {label: 'Input', value: '_in'},
    {label: 'Output', value: '_out'},
  ]}>
  <TabItem value="_in"><code>n = 5</code></TabItem>
  <TabItem value="_out">

  ```cpp
      *
     **
    ***
   ****
  *****
  ```
  </TabItem>
</Tabs>

```cpp title="pattern.cpp"
#include <iostream>

using namespace std;

int main() {
  // half pyramid after 180 deree rotation
  int n;
  cin >> n;

  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n; j++) {
      if (j <= n - i) {
        cout << " ";
      } else {
        cout << "*";
      }
    }
    cout << endl;
  }
  return 0;
}
```
</details>

<details>
<summary>Print the following pattern (Inverted Half Pyramid)</summary>

<Tabs
  className="unique-tabs"
  defaultValue="_out"
  values={[
    {label: 'Input', value: '_in'},
    {label: 'Output', value: '_out'},
  ]}>

  <TabItem value="_in">

  ```cpp
  n = 5
  ```
  </TabItem>
  <TabItem value="_out">

  ```cpp
  * * * * * 
  * * * * 
  * * * 
  * * 
  * 
  ```
  </TabItem>
</Tabs>

```cpp title="pattern.cpp"
#include <iostream>

using namespace std;

int main() {
  // Inverted half pyramid
  int n;
  cin >> n;
  for (int i = n; i >= 1; i--) {
    for (int j = 1; j <= i; j++) {
      cout << "* ";
    }
    cout << endl;
  }
  return 0;
}
```
</details>

## Functions

<details>
<summary>Write a function to reverse the given number N as input.</summary>

```cpp title="reverse_num.cpp"
#include <iostream>

using namespace std;

int reverse(int num) {
  int rev_num = 0;
  while (num > 0) {
    rev_num = rev_num * 10 + num % 10;
    num = num / 10;
  }
  return rev_num;
}

int main() {
  int num;
  cin >> num;
  int ans = 0;
  while (num > 0) {
    ans = ans * 10 + num % 10;
    num = num / 10;
  }

  cout << ans << endl;
  return 0;
}
```

</details>
