# Hoisting

## Points to remember

- Its a process where interpreter moves the declaration of functions, variables or classes to the top of their scope, prior to the execution of code.

- Functions are hoisted

- Variables are hosited - (JavaScript only hoists declarations, not initializations!)
- Variables declared with Var are hosited (and default initialisation is 'undefined')

- Let and Const are hoisted - (but unlike var its not initialised with a default value that is why it gives reference error)

### Var variables

- Var variables are hoisted (can used before define it )
- function scoped

### Let variables

- Let variables are hoisted but it gives reference error
- Because of TDZ
- TDZ is temporal dead zone which is the phase between starting of that block where let is defined till it is used.
- Why TDZ ? because at the time when variables are defined using let , it goes to local memory space.

### Class Hoisting

- class declaration are hoisted.

### Function and Class Expression

- Function and class expressions are not hoisted.
