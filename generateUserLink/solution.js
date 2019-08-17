//passing
function generateLink(user) {
  const urlLink = 'http://www.codewars.com/users/';
  const encodeUser = encodeURIComponent(user);

  return urlLink + encodeUser;
};

//refactored
function generateLink(user) {
  return `http://www.codewars.com/users/${encodeURIComponent(user)}`;
}

//sample tests
console.log(generateLink('matt c') ==='http://www.codewars.com/users/matt%20c');
console.log(generateLink('g964') ==='http://www.codewars.com/users/g964');
console.log(generateLink('GiacomoSorbi') ==='http://www.codewars.com/users/GiacomoSorbi');
console.log(generateLink('ZozoFouchtra') ==='http://www.codewars.com/users/ZozoFouchtra');
console.log(generateLink('colbydauph') ==='http://www.codewars.com/users/colbydauph');
