---
slug: number-system
title: Number System Conversions
author: Rashik Ansar
author_title: Rashik Notes
author_url: https://github.com/rashikansar
author_image_url: https://raw.githubusercontent.com/RashikAnsar/notes/main/static/img/logo.svg
tags: [numbers, coding, cpp]
---

Convert a number from one number system to another number system. 

<!--truncate-->

## Number System
In computer science we might have come across various number systems like binary, octal, decimal and hexadecimal. Everything in the memory is stored in binary form whenever we print address of a variable the compiler will print address in hexadecimal format.

### Conversion between two number systems

Given a number in `x` number system (input number sytem or given number system) and want them it in `y` number system (output number sytem or expected number system). The more generalized algorithm but **it'll work only for those number systems whose base that is less than or equal to the decimal number system** (example: It'll not work hexadecimal system since it has characters in it and it'is greater than 10).

```cpp title="algo.cpp"
void numConversion(int num,int inputNumSystem, int outputNumSystem) {
    int power = 1, ans = 0, rem = 0;

    while(num) {
        rem = num % outputNumSystem;
        ans += rem * power;
        power *= inputNumSystem;
        num /= outputNumSystem;
    }
    cout << ans << endl;
}
```

### Examples
Binary to Decimal number conversion using the same algorithm but with in the main function itself. We can try with various number systems where we just have to change the `GIVEN_NUMBER_SYSTEM ` and `EXPECTED_NUMBER_SYSTEM` values. 

```cpp {12,13} title="binaryToDecimal.cpp" 
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int power = 1, ans = 0, rem = 0;

    // BINARY TO DECIMAL
    int GIVEN_NUMBER_SYSTEM = 2;
    int EXPECTED_NUMBER_SYSTEM = 10;

    while(n) {
        rem = n % EXPECTED_NUMBER_SYSTEM;
        ans += rem * power;
        power *= GIVEN_NUMBER_SYSTEM;
        n /= EXPECTED_NUMBER_SYSTEM;
    }
    cout << ans << endl;
    return 0;
}
```

Another example with Decimal to Octal
```cpp {12,13} title="decimalToOctal.cpp" 
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int power = 1, ans = 0, rem = 0;

    // DECIMAL TO OCTAL
    int GIVEN_NUMBER_SYSTEM = 10;
    int EXPECTED_NUMBER_SYSTEM = 8;

    while(n) {
        rem = n % EXPECTED_NUMBER_SYSTEM;
        ans += rem * power;
        power *= GIVEN_NUMBER_SYSTEM;
        n /= EXPECTED_NUMBER_SYSTEM;
    }
    cout << ans << endl;
    return 0;
}
```