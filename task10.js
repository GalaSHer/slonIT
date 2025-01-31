//получить сумму всех числовых значений объекта
function getSumOfObjectValues(obj) {
  return Object.values(obj).reduce((acc, value) => {
    typeof value === "number" ? (acc += value) : acc;
    return acc;
  }, 0);
}

//эта же задача как метод объекта
const exampleObj = {
  name: "Vasya",
  friends: 5,
  likes: 19,
  projects: 7,
  getSumOfValues() {
    return Object.values(this).reduce((acc, value) => {
      typeof value === "number" ? (acc += value) : acc;
      return acc;
    }, 0);
  },
};

//получить массив ключей объекта, отсортированных по убыванию числовых значений
function getKeysSortedByValue(obj) {
  return Object.entries(obj)
    .filter(([, value]) => typeof value === "number")
    .sort((a, b) => b[1] - a[1])
    .map(([key]) => key)
}

//эта же задача как метод объекта
const exampleObj2 = {
  name: "Vasya",
  friends: 5,
  likes: 19,
  projects: 7,
  getKeysSortedByValue() {
    return Object.entries(this)
    .filter(([, value]) => typeof value === "number")
    .sort((a, b) => b[1] - a[1])
    .map(([key]) => key)
  },
};
