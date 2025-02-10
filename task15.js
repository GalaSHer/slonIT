function createLogger() {
  let logMessagesArr = [];
  return {
    log(message) {
      logMessagesArr.push(message);
    },
    getLogs() {
      return [...logMessagesArr];
    }
  };
}

function createRandomGenerator(min, max) {
  return function() {
    return Math.random() * (max - min) + min; 
  };
}