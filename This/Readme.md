# Object

## Object Constructor

- Object created by Object constructor inherits from the constructor's prototype. Additionally, it runs the constructor function as well.

- Object created by Object.create() builds an object that inherits directly from the passed as its first argument.
- There is no constructor inside it.
- It comes with prototype property.

```
const obj = Object.create({
    a:'Object created'
});

```
