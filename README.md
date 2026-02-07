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


🎯 Goal

- My goal is to become a Full Stack MERN Developer by:

- Practicing daily

- Writing clean & structured code

- Building real-world mini projects

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

🧠 JavaScript Operators, Conditions & Loops
(Lecture 4 – Operators, Conditional Statements & Loops)

In Lecture 4, I learned how to perform calculations, apply logic, make decisions, and repeat tasks using operators, conditional statements, and loops in JavaScript.
This lecture forms the core foundation of programming logic.

🔹 Arithmetic Operators

Used to perform mathematical operations:

+ Addition

- Subtraction

* Multiplication

/ Division

% Modulus

** Exponentiation

++ Increment

-- Decrement

let a = 10;
let b = 3;
a + b; // 13

🔹 Assignment Operators

Used to assign and update values efficiently:

=

+=

-=

*=

/=

%=

let x = 10;
x += 5; // 15

🔹 Logical Operators

Used to combine multiple conditions:

&& → AND

|| → OR

! → NOT

age > 18 && age < 30;

🔹 Conditional Statements

Used to execute code based on conditions.

✅ if Statement
if (age > 18) {
  console.log("Adult");
}

✅ if–else Statement
if (age >= 18) {
  console.log("Eligible");
} else {
  console.log("Not Eligible");
}

✅ else–if Ladder
if (marks > 90) {
  grade = "A";
} else if (marks > 75) {
  grade = "B";
} else {
  grade = "C";
}

🔹 Loops

Used to repeat a block of code multiple times.

✅ for Loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

✅ while Loop
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

✅ do–while Loop
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);


📌 Learned when to use each loop based on condition checking.

📂 Location:
JavaScript/Lec 4/

✅ Outcome (After Lecture 4)

Strong understanding of operators and expressions

Ability to make decisions using conditions

Ability to repeat tasks using loops

Solid foundation for arrays, functions, and DOM manipulation

🔢 JavaScript Built-in Objects & Functions
(Lecture 5 – Number, Math Object & Random Number Generation)

In Lecture 5, I learned how to work with numbers, built-in Math utilities, and random number generation in JavaScript.
This lecture focuses on performing calculations, rounding values, and building logic using JavaScript’s built-in functions.

🔹 Number Data Type

Working with numeric values

Integer and floating-point numbers

Type conversion using:

Number()

parseInt()

parseFloat()

📌 Example:

let num = "10.5";
Number(num);     // 10.5
parseInt(num);   // 10
parseFloat(num); // 10.5

🔹 Math Object

Used for performing mathematical operations.

Common Math methods learned:

Math.round()

Math.floor()

Math.ceil()

Math.abs()

Math.sqrt()

Math.pow()

Math.min()

Math.max()

📌 Example:

Math.floor(4.7); // 4
Math.ceil(4.2);  // 5
Math.max(10, 20, 5); // 20

🔹 Random Number Generation

Using Math.random()

Generating random numbers within a range

📌 Example:

// Random number between 1 and 10
Math.floor(Math.random() * 10) + 1;

🔹 Functions (Introduction)

Creating reusable blocks of code

Function declaration and calling

Passing parameters and returning values

📌 Example:

function add(a, b) {
  return a + b;
}


📂 Location:
JavaScript/Lec 5/

✅ Outcome (After Lecture 5)

- Strong understanding of numeric operations

- Ability to use Math object methods

- Generate random numbers for logic building

- Write reusable code using functions

- Better preparation for arrays, strings, and real-world logic

⏰ JavaScript Date & Time
(Lecture 6 – Date Object & Real-World Usage)

In Lecture 6, I learned how to work with date and time in JavaScript using the built-in Date object.
This concept is widely used in real-world applications such as timers, clocks, logs, bookings, and event tracking.

🔹 Date Object Basics

- Creating a new date using new Date()

- Understanding date and time formats

- Working with timestamps

📌 Example:

let currentDate = new Date();
console.log(currentDate);

🔹 Getting Date & Time Values

getFullYear()

getMonth()

getDate()

getDay()

getHours()

getMinutes()

getSeconds()

getTime()

📌 Example:

let date = new Date();
date.getFullYear(); // current year
date.getHours();    // current hour

🔹 Setting Date & Time Values

setFullYear()

setMonth()

setDate()

setHours()

setMinutes()

📌 Example:

let date = new Date();
date.setFullYear(2026);

🔹 Real-World Use Cases

- Displaying current date & time

Digital clocks

Countdown timers

Logging user activity

Scheduling events

📂 Location:
JavaScript/Lec 6/

✅ Outcome (After Lecture 6)

- Strong understanding of JavaScript Date object

- Ability to work with real-time data

- Practical knowledge for real-world applications

- Improved confidence in using built-in objects

🧑‍💻 Tech Stack Used

- HTML5

- CSS3

- JavaScript (In Progress)

- VS Code


🙌 Acknowledgement

Thanks to online learning platforms, mentors, and developer communities for providing structured guidance and learning resources.

⭐ If you find this repository useful, feel free to star it and follow my learning journey!
