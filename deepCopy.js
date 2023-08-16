// const object2 = object1;

// console.log(object1 === object2);
// object2.food.us = "buger";
// console.log(object1);

// const object3 = { ...object1 };

// object3.name = "정우성";
// console.log(object1);
// console.log(object3);

// object3.food.us = "buger";

// console.log(object1);
// console.log(object3);

const lodash = require("lodash");

const object1 = {
  name: "노력",
  age: 25,
  food: {
    kr: "gukbab",
    jp: "ramen",
    us: "pizza",
  },
};

const object2 = lodash.cloneDeep(object1);

console.log(object1 === object2); // false 출력
object2.food.kr = "kimbab";
console.log(object1); // object2의 2depth의 프로퍼티 value를 변경해도 변화 없음
