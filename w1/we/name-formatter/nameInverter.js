const nameInverter = function(name) {
  const honorific = ['Mr.', "Mrs.", "Ms.", "Dr."]

  if(name === "") {
    return "";
  }
  
  if (name === undefined) {
    return console.error("Error")
  }
  const trimmed = name.trim();
  if (!trimmed.includes(" ")) {
    return trimmed;
  }

  const reversed = trimmed.split(" ").reverse().join(", ");
  return reversed;
}
module.exports = nameInverter;