// const obj = { a: 1, b:2};
// console.log(Symbol.iterator in obj);    // false

// for(const p of obj) {
//     console.log(p);     //TypeError: obj is not iterable
// }

// //배열은 이터러블 프로토콜을 준수한 이터러블이다.
// const array = [1,2,3];
// //Symbol.iterator 메소드는 이터레이터를 반환한다.
// const arratyIterator = array[Symbol.iterator]();
// //이터레이터 프로토콜을 준수한 이터레이터는 next 메소드를 갖는다.
// console.log('next' in arratyIterator);      //true
// //이터레이터의 next 메소드를 호출하면 이터러블을 순회하며 value, done 프로퍼티를 갖는 이터레이터 리저트 객체를 반환한다.
// console.log(arratyIterator.next());     //{ value: 1, done: false }
// console.log(arratyIterator.next());     //{ value: 2, done: false }
// console.log(arratyIterator.next());     //{ value: 3, done: false }
// console.log(arratyIterator.next());     //{ value: undefined, done: true }

const someString = "hi";
console.log(typeof someString[Symbol.iterator]);        //function

const iterator = someString[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

