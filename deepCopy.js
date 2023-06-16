const object1 = {
  name: "엄성준",
  age: 25,
  food: {
    kr: "gukbab",
    jp: "ramen",
    us: "pizza",
  },
  func: function () {
    console.log("함수지롱");
  },
};

// const object2 = object1;

// console.log(object1 === object2);
// object2.food.us = "buger";
// console.log(object1);

const object3 = { ...object1 };

// object3.name = "정우성";
// console.log(object1);
// console.log(object3);

// object3.food.us = "buger";

// console.log(object1);
// console.log(object3);

const lodash = require("lodash");

const object4 = lodash.cloneDeep(object1);

console.log(object1 === object4);
object4.food.us = "buger";
console.log(object1);
console.log(object4);
