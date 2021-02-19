let a = { p: 10, q: 20 }

let b = Object.create(a)

console.log(a)
console.log(b.q)
a.q++
console.log(b.q)

let obj1 = { a: 10 }
let obj2 = { a: 10 }
let obj3 = obj1

console.log(obj1 == obj3)

console.log(b.__proto__ === a)

let c = Object.create(b)

console.log(c.__proto__ === b)
console.log(c.__proto__.__proto__ === a)

console.log(c.p)

b.p = 976
console.log(c)
console.log(c.p)

// prototypes

let o1 = { k: 10 }
let o2 = { k: 20 }

console.log(o1.__proto__ == o2.__proto__)

let a1 = [1, 2, 3]
let a2 = [3, 4, 5]
console.log(typeof a1)

console.log(a1.__proto__ == a2.__proto__)

console.log('a1 o1')
console.log(a1.__proto__.__proto__ == o1.__proto__)

let s1 = "sfhsh"
let s2 = "rhshr"

console.log(s1.__proto__ == s2.__proto__)

console.log('s1 o1')
console.log(s1.__proto__.__proto__ == o1.__proto__)

console.log(s1.__proto__.__proto__.__proto__)

let f = function () {
}
let n = 10
let b1 = true

console.log(n.__proto__ == Number.prototype)
console.log(b1.__proto__ == Boolean.prototype)
console.log(a1.__proto__ == Array.prototype)
console.log(s1.__proto__ == String.prototype)
console.log(f.__proto__ == Function.prototype)

let n2 = Object.create(Number.prototype)
n2.x = 346
n.x = 356

let n3 = new Number(456)

console.log(n2.__proto__ == n.__proto__)
console.log(n.x)
console.log(n2)
console.log(n3)