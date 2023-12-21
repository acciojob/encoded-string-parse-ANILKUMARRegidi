 const parseCode = (str) => {
  const res = { 
    firstName: "",
    lastName: "",
    id: ""
  };
  
  let currentProp = 'firstName';

  for (let item of str) {
    if (item === '0') {
      if (currentProp === 'firstName') {
        currentProp = 'lastName';
      } else if (currentProp === 'lastName') {
        currentProp = 'id';
      }
    } else {
      res[currentProp] += item;
    }
  }

  return res;
};

// Example usage.
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
