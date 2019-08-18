function uniTotal(string) {

  let uniCode = 0;

  for (var i = 0; i < string.length; i++) {
    uniCode += string.charCodeAt(i);
  };

  return uniCode;
};
