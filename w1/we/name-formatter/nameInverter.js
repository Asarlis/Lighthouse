const nameInverter = function(name) {
  const honorific = ['Mr.', "Mrs.", "Ms.", "Dr."]

  if(name === "") {
    return "";
  }
  
  if (name === undefined) {
    return Error('Error')
  }
  const trimmed = name.trim();
  if (!trimmed.includes(" ")) {
    return trimmed;
  }
for (const hon of name) {
  if (honorific.includes(hon)) {
    const honorificSlice = name.replace(hon, "")
    const reversed = honorificSlice.split(" ").reverse().join(", ");
      return reversed;
  }
}
  const reversed = trimmed.split(" ").reverse().join(", ");
  return reversed;
}
module.exports = nameInverter;