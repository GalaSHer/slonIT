let secretNumber = Math.floor(Math.random() * 100) + 1;
console.log(`Загадано число: ${secretNumber}`);

function binarySearch() {
  let low = 1;
  let high = 100;

  while (low < high) {
    let middle = Math.floor((low + high) / 2);
    console.log(`Компьютер 2: Пробую число ${middle}.`)

    if (middle === secretNumber) {
      console.log('Компьютер 1: Угадал!\n');
      return middle;
    } else if (middle > secretNumber) {
      console.log('Компьютер 1: Меньше.\n');
      high = middle;
    } else {
      console.log('Компьютер 1: Больше.\n');
      low = middle;
    }
  }
}

binarySearch()