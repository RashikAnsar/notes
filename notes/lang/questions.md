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
