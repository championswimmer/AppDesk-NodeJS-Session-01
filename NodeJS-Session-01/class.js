

// function Person (name, age) {
//   this.name = name
//   this.age = age
// }

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}
console.log(typeof Person)

let p = new Person('John', 20)
let p2 = { name: 'Jane', age: 30 }
console.log(p)
console.log(p.__proto__ == Person.prototype)
console.log(p2.__proto__ == Object.prototype)