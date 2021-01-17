---
id: questions
title: Practice Questions
sidebar_label: C++ Work Sheet
---

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
