# Closures

## Points to remember

- Closure is the combination of a function bundled together within in the lexical environment.

- Other words, a closure gives you access to an outer function's scope from an inner function

- Lexical Scoping => a variable defined outside a function can be accessible inside another function defined after the variable declaration.

## Pros of Closure

- Function nested function
- because they let you access the data of lexical environment.
- or bind a variable to an execution context.

## Cons of Closure

- Closure prevent variables inside functions from being released by memory.

- These variables inside functions from being released by memory which may lead to memory leakage.

- Solution is to delete all unnecessary local variables in time these variables are not used.
