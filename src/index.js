module.exports = function check(str, bracketsConfig) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (bracketsConfig[j][0] === bracketsConfig[j][1]) {
        if (str.charAt(i) == bracketsConfig[j][0]) {
          if (stack.length >= 1) {
            let lastElement = stack.pop();
            if (lastElement != bracketsConfig[j][0]) {
              stack.push(lastElement);
              stack.push(bracketsConfig[j][0])
            }
          } else {
            stack.push(bracketsConfig[j][0])
          }
        }
      } else {
        if (str.charAt(i) == bracketsConfig[j][0]) {
          stack.push(str.charAt(i));
        } else if (str.charAt(i) == bracketsConfig[j][1]) {
          let lastElement = stack.pop();
          if (lastElement != bracketsConfig[j][0]) {
            return false;
          }
        }
      }
    }
  }
  return stack.length == 0 ? true : false;
}
