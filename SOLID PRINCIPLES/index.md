## What is SOLID principle?

This is a philosophy and approach to creating a more robust, flexible, testable, and scalable software systems that maintain integrity over time.

- Single responsiblity principle
- Open-closed principle
- Liskov substitution principle
- Interface segregation principle
- Dependency inversion principle

### Single Responsibilty Principle (SRP)

- This principle mandates that a class should have one, and only one, reason to change.
- This princile makes it easier to test and maintain code.
- To ensure that you're following this principle in development, consider using an automated check when building to limit class scope.

### Open-Closed Principle

- This principle states that you should be able to extend a class's behaviour without modifying it.
- It requires wrting code that is:
  - Open for extension, meaning you can add to the class's behaviour.
  - Closed for modification, meaning that the source code is set and cannot be changed.

### Liskov Substitution Principle

- This principle requires that every derived class should be substitutable for its parent class.
- This also means that every derived classes is able to extend the base class without changing their behaviour.

### Interface Segregation Principle

- This principle states that it is better to have many smaller interfaces than have few big ones.

### Dependency Inversion Principle

- This principle states that you should "depend on abstractions not concretions" when developing software.
