🚀 MERN Stack Web Development Practice

This repository contains my hands-on practice code while learning Full Stack MERN Web Development.
I follow structured video lectures and practice side-by-side coding to build strong fundamentals before moving to advanced concepts.

This repo reflects my consistent learning, practical implementation, and gradual improvement in web development.

📚 Course Structure & Progress
✅ HTML (Completed)

I have completed HTML fundamentals and practiced all core concepts required to build structured web pages.

Topics Covered:

- HTML boilerplate structure

- Headings & paragraphs

- Lists (ordered & unordered)

- Tables

- Forms & input fields

Media tags (image, audio, video)

Semantic HTML

Mini tasks & practice files

📂 Folder Structure:

Boiler

Form

List

Media tag

Table

Mini Task Project

first.html

✅ CSS (Completed)

I have successfully completed CSS from basics to advanced concepts, focusing on layout building, responsiveness, and UI enhancements.

🎨 CSS Fundamentals

- CSS syntax & selectors

- Colors & backgrounds

- Box model

- Margin, padding & borders

Box-sizing (content-box & border-box)

🛠 CSS Mini Projects (Lecture 3)

📂 CSS/Lec 3/

Project 1: Basic layout design

Project 2: Box model & box-sizing

Project 3: Combined HTML + CSS practice

Key Learnings:

Layout structuring using containers

Spacing and alignment

Writing clean and maintainable CSS

🔄 CSS Flexbox (Lecture 4)

📂 CSS/Lec 4/

Topics Covered:

display: flex

Flex container vs flex items

flex-direction

justify-content

align-items

align-content

flex-wrap

gap

flex-grow, flex-shrink, flex-basis

🛠 Mini Project:
📂 CSS/Lec 4/Section-1-Mini-Project/

Outcome:
Strong understanding of 1D layout systems and flexible alignment techniques.

🟦 CSS Grid (Lecture 5)

📂 CSS/Lec 5/

Topics Covered:

display: grid

Grid rows & columns

grid-template-rows & grid-template-columns

fr unit

gap

grid-row & grid-column

🛠 Mini Projects:

Project 1: Basic grid layout

Project 2: Structured & scalable grid layout

Project 3: Real-world grid-based UI design

Outcome:
Clear understanding of 2D layouts and when to use Grid vs Flexbox.

📱 Responsive Design & UI Enhancements (Lecture 6)

📂 CSS/Lec 6/

Topics Covered:

CSS media queries

Mobile, tablet & desktop breakpoints

min-width & max-width

box-shadow

overflow (hidden, scroll, auto, visible)

🛠 Mini Projects:

Project 1: Responsive layout using media queries

Project 2: Overflow handling & UI styling

🎞 CSS Animations (Lecture 7)

📂 CSS/Lec 7/

Topics Covered:

CSS animations

@keyframes

Animation properties

CSS transitions

Hover-based animation effects

🛠 Mini Project:

Project 1: Basic animations & hover effects

🔄 CSS Transitions & Transforms (Lecture 8)

📂 CSS/Lec 8/

Topics Covered:

CSS transitions

CSS transforms (translate, scale, rotate, skew)

Smooth hover interactions

2D transformations

🛠 Mini Project:

Project 1: Hover effects using transitions & transforms

🚀 JavaScript (In Progress)

- I have now started learning JavaScript to add logic, interactivity, and dynamic behavior to    web pages.

Current Focus:

- JavaScript basics & syntax

- Variables & data types

- Operators & control statements

- DOM manipulation (upcoming)

- Event handling (upcoming)

📂 Folder:
JavaScript/

🧑‍💻 Tech Stack Used

HTML5

CSS3

JavaScript (In Progress)

VS Code

🎯 Goal

My goal is to become a Full Stack MERN Developer by:

Practicing daily

Writing clean & structured code

Building real-world mini projects

Strengthening fundamentals before moving to React & Backend

Following a step-by-step learning approach

⚙️ JavaScript Core Concepts (Lecture 3 – Stack & Heap Memory)

In Lecture 3, I learned how JavaScript manages memory using Stack and Heap, which is essential for understanding how data is stored and accessed during program execution.

🔹 Topics Covered
✅ Stack Memory

Used for primitive data types

Number

String

Boolean

Null

Undefined

BigInt

Symbol

Key Characteristics:

Stores a copy of the value

Fast access

Fixed memory size

Changes do not affect the original variable

📌 Example: When assigning one primitive variable to another, a copy is created.

✅ Heap Memory

Used for non-primitive (reference) data types

Objects

Arrays

Functions

Key Characteristics:

Stores data as a reference

Multiple variables can point to the same memory

Changes reflect in all references

📌 Example: When copying an object, both variables refer to the same memory location.

✅ Stack vs Heap (Core Difference)
Stack	Heap
Stores primitive values	Stores reference values
Copy is created	Reference is shared
Faster access	Slightly slower
Fixed size	Dynamic size

📂 Location:
JavaScript/Lec 3/

✅ Outcome (After Lecture 3)

- Strong understanding of JavaScript memory management

- Clear difference between primitive vs reference types

- Better debugging skills

🧠 JavaScript Operators (Lecture 4 – Arithmetic, Assignment & Logical Operators)

In Lecture 4, I learned how to perform calculations, update values, and build logical conditions using arithmetic, assignment, and logical operators in JavaScript.
These operators are essential for decision-making and writing efficient logic.

🔹 Arithmetic Operators

Used to perform mathematical operations:

+ → Addition

- → Subtraction

* → Multiplication

/ → Division

% → Modulus (remainder)

** → Exponentiation

++ → Increment

-- → Decrement

📌 Example:

let a = 10;
let b = 3;

a + b;  // 13
a % b;  // 1
a++;    // 11

🔹 Assignment Operators

Used to assign and update values efficiently:

= → Assign

+= → Add and assign

-= → Subtract and assign

*= → Multiply and assign

/= → Divide and assign

%= → Modulus and assign

📌 Example:

let x = 10;
x += 5;  // 15
x *= 2;  // 30

🔹 Logical Operators

Used to combine multiple conditions and return boolean results:

&& → Logical AND

|| → Logical OR

! → Logical NOT

📌 Example:

let age = 20;

age > 18 && age < 30; // true


📂 Location:
JavaScript/Lec 4/

✅ Outcome (After Lecture 4)

Ability to perform calculations

Write efficient variable updates

Combine conditions using logical operators

Strong foundation for if-else statements and loops

⚖️ JavaScript Operators (Lecture 5 – Comparison Operators)

In Lecture 5, I learned how to use comparison operators in JavaScript to compare values and produce boolean results (true or false).
These operators are fundamental for decision-making and control flow in programming.

🔹 Topics Covered
✅ Equality Operators

== → Equal to (checks value only)

=== → Strict equal to (checks value and data type)

📌 Example:

5 == "5"    // true  
5 === "5"   // false

✅ Inequality Operators

!= → Not equal (value comparison)

!== → Strict not equal (value + type comparison)

✅ Relational Operators

Used to compare numerical values:

> → Greater than

< → Less than

>= → Greater than or equal to

<= → Less than or equal to

📌 Example:

10 > 5   // true
7 <= 7   // true

⭐ Best Practice

✅ Prefer using strict operators (=== and !==) because they prevent unexpected type conversions and make code more predictable.

📂 Location:
JavaScript/Lec 5/

✅ Outcome (After Lecture 5)

- Strong understanding of value comparison

- Ability to write logical conditions

- Better preparation for if-else statements and loops

- Improved coding accuracy using strict comparisons
🙌 Acknowledgement

Thanks to online learning platforms, mentors, and developer communities for providing structured guidance and learning resources.

⭐ If you find this repository useful, feel free to star it and follow my learning journey!
