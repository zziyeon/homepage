const array = [1,2,3];

//배열은 Symbol.iterator 메소드를 소유한다.
// 따라서 배열은 이터러블 프로토콜을 준수한 이터러블이다.
console.log(Symbol.iterator in array);      //true

// 이터러블 프로토콜을 준수한 배열은 for...of문에서 순회 가능하다.
for (const item of array) {
    console.log(item);          //1     2      3
}

