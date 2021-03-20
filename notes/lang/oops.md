---
id: oops
title: Object-Oriented Programming
sidebar_label: Object-Oriented Programming
---

## Introduction

C++ is a combination of a procedural and an object-oriented language. Object-Oriented programming is a programming paradigm that relies on the concept of classes and objects. OOP is based on the notion that you should divide your program not into tasks, but into models of physical objects. While this seems abstract at first, it becomes clearer when you consider physical objects in terms of their classes, components, properties, and behaviors.

![OOPs](./images/OOPs.svg)

## Advantages of OOP

1. OOPs is closer to real world model.
2. Hierarchical relationship among objects can be well-represented through inheritance.
3. Data can be made hidden or public as per the need. Only the necessary data is exposed enhancing the data security.
4. Increased modularity adds ease to program development.
5. Private data is accessible only through designed interface in a way suited to the program.

## Class

:::info
The main difference between a `class` and a `struct` is that a struct's member variables and methods are **`public`**, while a class's member variables and methods are **`private`**.
:::

Class is a blueprint from which objects are created. In C++, new types are mostly created using a class. To write object-oriented programs, we need to create a class, as a type, and then instantiate objects as instances of that type.

:::info
classes dont consume any space.
:::

A class in C++ contains

1. Data memebers: are the properties/attributes of class
2. Methods: are the behaviours of the class
3. Constructor: It's used to create instances of class (Object)


### Data Members

Data members are the properties that are present in a class. The type of these properties can be modified by the use of special keywords called modifiers. Let us build our own student class and learn about them.

#### Static and Non Static Properties :

Static properties are those that are common to all objects and belong to the class rather each specific object. So each object that we create doesn’t have their copy. They are shared by all the objects of the class. We need to write the static keyword before it in order
to make it static.

An important point to note is that whenever we create a new object only the non static data member copies are created and the static properties are stored within the class only! This could be considered a very memory efficient practice as static members of a class are made only once.

```cpp title="static_non_static_props.cpp"
// create a class named Student
class Student{
  // Static property num of students in class
  static int numStudents;
  //  Non-static properties
  char name[10];
  int rollNo;
};
```

#### Access Modifiers

:::info
When there is no access modifier for a data member, it is private by default.

The instance member functions(methods) of a class are normally set to public.
:::

1. **Private:** If we make any data member as private it is visible only within the class i.e. it can be accessed by and through the methods of the same class. So we can provide setters and getters function through which they can be accessed outside the class
2. **Protected:** It is only accesible within the class and sub-class
3. **Public:** It is accesible everywhere

:::tip
It is better to make a variable private and then provide getters and setters in case we wish to allow others to view and change it than making the variable public. Because by providing setter we can actually add constraints to the function and update value only if
they are satisfied
:::

### Methods :

The second part of the class definition declares the member functions of the class; that is, it declares all functions that are used to simulate the behavior of the class. The methods are called on the object name by using the dot operator.

#### Static v/s Non Static Methods

Like data members, methods of a class can also be static which means those methods belong to the class rather than the objects for the class. These methods are directly called by the class name.

As the static methods belong to a class we don’t need any instance of a class to access them. An important implication of this point is that the non static properties thus can’t be accessed by the static methods as there is no specific instance of the class associated with them (the non static properties are specific to each object). So, non static members and the ‘this’ keyword can’t be used with the static functions. Thus these methods are generally used for the static properties of the class only!

The non static methods on the other hand are called on an instance of a class or an object and can thus access both static and non static properties present in the object. The access modifiers work the same with the methods as they do with the data members. The public methods can be accessed anywhere whereas the private methods are available only within the same class. Thus private methods can be used to work with the data members that we don’t wish to expose to the clients.

### Constructor and Destructor

A constructor is a member function that creates an object when it is called and initializes the data members of an object when it is executed. The declaration of the data members in the class definition does not initialize the data members; the declaration just gives the names and the types of the data members

A constructor has two characteristics: It does not have a return value, and its name is the same as the name of the class. A constructor cannot have a return value (not even void) because it is not designed to return anything; its purpose is different. It creates an object and initializes the data members. Although we will see that a constructor may also do some other tasks, such as validation of values, these tasks are also considered part of the initialization.

We can have three types of constructors in a class

1. parameter constructors
2. default constructors
3. copy constructors

:::caution
The parameter constructor can be overloaded for a class but not other constructors.
:::

Like a constructor, a destructor has two special characteristics. 
1. the name of the destructor is the name of the class preceded by a tilde symbol (`~`), but the tilde is added to the first name, not the last name (the last name is the same for all member functions). 
2. Like a constructor, a destructor cannot have a return value (not even void) because it returns nothing. 
3. A destructor can take no arguments, which means it cannot be overloaded.

A destructor is guaranteed to be automatically called and executed by the system when the object instantiated from the class goes out of scope. In other words, if we have instantiated five objects from the class, the destructor is automatically called five times to guarantee that all objects are cleaned up. Cleanup is most important if the constructed has called resources such as files. After the program is terminated, the allocated memory is recycled. 

:::info
A constructor is a special member function that creates and initializes an object.

A destructor is a special member function that cleans and destroys an object.
:::

If any memory has been dynamically allocated, then the destructor of an object must free this memory by using delete or delete[], depending on the data type. If a class allocates memory dynamically, an explicit destructor should be created to ensure that this memory is freed correctly.


### Shallow Copy vs Deep Copy
Shallow copy, it runs through each member variable and assigns them the corresponding value of the object currently being copied. A shallow copy of an object copies all the members. This is **usually fine when all the members are values**. But, when a shallow copy is enacted on a pointer to dynamic memory, only the pointer is copied, not the memory it points to. 

The implicit default copy constructor does the shallow copy.

To correctly handle the copy of our dynamically allocated memory, and we know that the compiler-generated copy constructor will not do this for us; we need to write our own.

:::note
When is a shallow copy not enough?

When a class has dynamically allocated memory, a deep copy is usually needed.
:::

If you need to define an **explicit copy constructor**, then you will almost always need to also define an **explicit copy assignment operator**.


## Object

Object is the instance of the class. which will have the copy of the data members and methods that can be applied on the object.

Lets see the example of the class and object

```cpp title="oop.cpp"
#include <iostream>

using namespace std;

// Class Definition
class Circle {
  private:
    double radius;
  public:
    Circle(double radius); // Parameter Constructor
    Circle(); // Default Constructor
    ~Circle(); // Destructor
    Circle(const Circle& circle);

    void set_radius(double radius); // Setter (Mutator)
    double get_radius() const; // Getter (Accessor)
    double get_area() const; // Getter (Accessor)
    double get_perimeter() const; // Getter (Accessor)
};

// Constructors and Member Function (Methods) Definition
Circle::Circle(double rds): radius(rds) {
  cout << "The parameter constructor was called. " << endl;
}

Circle::Circle(): radius(0.0) {
  cout << "The default constructor was called. " << endl;
}

Circle::Circle(const Circle& circle): radius(circle.radius) {
  cout << "The copy constructor was called. " << endl;
}

Circle:: ~Circle() {
  cout << "The destructor was called for circle with radius :" << radius << endl;
}

void Circle:: set_radius(double value) {
  radius = value;
}

double Circle::get_radius() const {
  return radius;
}

double Circle::get_area() const {
  const double PI = 3.14;
  return (PI * radius * radius);
}

double Circle::get_perimeter() const {
  const double PI = 3.14;
  return (2* PI * radius);
}

int main() {
  // Object creation
  Circle circle1(5.2);
  cout << "Radius: " << circle1.get_radius() << endl;
  cout << "Area: " << circle1.get_area() << endl;
  cout << "Perimeter: " << circle1.get_perimeter() << endl;

  Circle circle2(circle1);
  cout << "Radius: " << circle2.get_radius() << endl;
  cout << "Area: " << circle2.get_area() << endl;
  cout << "Perimeter: " << circle2.get_perimeter() << endl;

  Circle circle3;
  cout << "Radius: " << circle3.get_radius() << endl;
  cout << "Area: " << circle3.get_area() << endl;
  cout << "Perimeter: " << circle3.get_perimeter() << endl;

  return 0;
}
```

```console title="output"
The parameter constructor was called.
Radius: 5.2
Area: 84.9056
Perimeter: 32.656
The copy constructor was called.
Radius: 5.2
Area: 84.9056
Perimeter: 32.656
The default constructor was called.
Radius: 0
Area: 0
Perimeter: 0
The destructor was called for circle with radius: 0
The destructor was called for circle with radius: 5.2
The destructor was called for circle with radius: 5.2
```

## Encapsulation

Encapsulation combines a class's data and the member functions to act on that data. Operations on data in a class should only be possible through the members that class provides; member data should not be directly accessible. This is also known as **data-hiding**.

We can apply encapsulation design to our class by using `access-modifiers`.

```cpp title="encapsulation.cpp"
#include <iostream>

using namespace std;

class Person {
 private:
  string m_name;
  int m_age;

 public:
  Person(string name, int age) {
    m_name = name;
    m_age = age;
  }

  void print() {
    cout << "My name is: " << m_name << " and I'm " << m_age << " years old."
         << endl;
  }
};

int main() {
  Person p("John Doe", 20);
  p.print();
  return 0;
}
```

In the above example you can see that we cannot directly access the data members but we can access via member functions (methods) like `print` and constructor itself to initialize values.

### Getters and Setters
A common technique for protecting data while still allowing sensible access is to use getters and setters. Unsurprisingly, a getter gets data and a setter sets data. Getters are commonly prefixed with the word `get` and setters with the word `set`.

Setters allow the setting of some data. It is worth noting that a direct setter will essentially break encapsulation as it exposes the variable to be changed again. One thing that a setter allows that a publicly exposed member variable does not is the validation of the data to be set.

```cpp title="settersGetters.cpp"
#include <cmath>
#include <iostream>

class Position {
 public:
  Position(float x, float y) : m_x(x), m_y(y) {}

  float distance(float x, float y) {
    float xDiff = x - m_x;
    float yDiff = y - m_y;
    return std::sqrt(((xDiff * xDiff) + (yDiff * yDiff)));
  }

  float getX() { return m_x; }
  float getY() { return m_y; }
  void setX(float x) { m_x = x; }
  void setY(float y) { m_y = y; }

 private:
  float m_x;
  float m_y;
};

int main() {
  float maxDistance = 500.0f;
  Position pos(10.0f, 20.0f);
  Position pos2(100.0f, 200.0f);
  bool validDistance = true;
  int numberOfTimesMoved = 0;

  while (validDistance) {
    float distance = pos.distance(pos2.getX(), pos2.getY());

    if (distance > maxDistance) {
      validDistance = false;
      break;
    }

    // get direction
    float xDirection = pos2.getX() - pos.getX();
    float yDirection = pos2.getY() - pos.getY();

    // normalize
    float normalizedX = xDirection / distance;
    float normalizedY = yDirection / distance;
    pos.setX(pos.getX() - normalizedX);
    pos.setY(pos.getY() - normalizedY);
    numberOfTimesMoved++;
  }

  std::cout << "Too far apart."
            << " Moved " << numberOfTimesMoved << " times";

  return 0;
}
```

## Abstraction
Abstraction and encapsulation are two sides of the same coin. Encapsulating data inside a class allows functionality on that data to be abstracted away, only exposing the methods the class design needs to make the class functional to a user and hiding all the nitty-gritty implementation details the class performs on its member data.

> Abstraction provides only an essential interface to the user and hides the background details.

## Inheritance
When declaring a class in C++, we have the ability to inherit from another class. In fact, we can inherit from multiple classes at the same time—a feature of C++ that not all object-oriented languages share. When we inherit from another class, we gain all its members that have either public or protected privacy modifiers. Private members remain visible only to the class in which they're defined, not the inheriting class. 

This is one of the fundamental concepts in OOP and allows us to build flexible, maintainable objects where common functionality can be declared only once, then implemented and extended where needed.

:::info
If we want to prohibit a class from being inherited from, C++11 provides us with the `final` keyword.

`class ClassName final {};`
:::

```cpp title="inheritance.cpp"

#include <iostream>

class Shape {
 public:
  int area = 10;
  int GetArea() { return area; }
};

class Square : public Shape {};
class Circle : public Shape {};
class Triangle : public Shape {};

int main() {
  Square mySquare;
  Circle myCircle;
  Triangle myTriangle;

  mySquare.area = 5;
  std::cout << "Square Area: " << mySquare.GetArea() << std::endl;

  myCircle.area = 15;
  std::cout << "Circle Area: " << myCircle.GetArea() << std::endl;

  std::cout << "Triangle Area: " << myTriangle.GetArea() << std::endl;
  return 0;
}
```

### Multiple Inheritance
A single derived class can inherit variables and functionality from multiple base classes to create a more complex object.

```cpp title="multipleInheritance.cpp"
#include <iostream>

class Color {
 public:
  std::string color = "";
  std::string GetColor() { return color; }
};

class Shape {
 public:
  int area = 10;
  int GetArea() { return area; }
};

class Square : public Shape, public Color {};

class Circle : public Shape, public Color {};

class Triangle : public Shape, public Color {};

int main() {
  Square mySquare;
  Circle myCircle;
  Triangle myTriangle;
  mySquare.area = 5;
  mySquare.color = "red";
  std::cout << "Square Area: " << mySquare.GetArea() << std::endl;
  std::cout << "Square Color: " << mySquare.GetColor() << std::endl;
  myCircle.area = 10;
  myCircle.color = "blue";
  std::cout << "Circle Area: " << myCircle.GetArea() << std::endl;
  std::cout << "Circle Color: " << myCircle.GetColor() << std::endl;
  myTriangle.area = 15;
  myTriangle.color = "green";
  std::cout << "Triangle Area: " << myTriangle.GetArea() << std::endl;
  std::cout << "Triangle Color: " << myTriangle.GetColor() << std::endl;
}
```

### Diamond Problem
It's named after the shape of its inheritance diagram. Where two classes (B, C) inherit from one Class (A) and a class(D) inherits from both classes (B and C) the resultant class will have two copies of everythin within class(A).

> The result of a class inheriting from two base classes that share a common base themselves.

This can be avoided in two ways:
1. First is to qualify which version of the variable you want to access (`B::DataMember = 1`)
2. Through the use of virtual inheritance. When we use the virtual keyword when inheriting from a class, we ensure that only one copy of our base class's member variables will be inherited by any derived classes

This avoids duplicate properties and mitigates the diamond problem.

### Access modifiers  and inheritance
There are two areas of accessibility we need to be aware of when making use of inheritance. The first is the accessibility of the members in our base class, and the second is the access modifier we define when inheriting from a class. 

| Base Class | Derived access with public inheritance | Derived access with protected inheritance | Derived access with private inheritance |
| ---------- | -------------------------------------- | ----------------------------------------- | --------------------------------------- |
| public     | public                                 | protected                                 | private                                 |
| protected  | protected                              | protected                                 | private                                 |
| private    | private                                | private                                   | private                                 |

> The most restrictive modifier wins.

Whenever two different modifiers are combined (such as a protected base class variable being inherited privately) it's the most restrictive modifier that sticks; in that case, it would be private

Understanding how different access modifiers affect inheritance is important, and often, a cause of confusion.

All variables, regardless of the access modifier, are fully visible to the class in which they are defined. Derived classes (those that inherit from a base class) can access public and protected members. Finally, the access modifier used when inheriting from the base class determines the final visibility of the members, and therefore, how all other classes can access them.

