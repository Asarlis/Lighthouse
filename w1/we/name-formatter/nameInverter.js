const nameInverter = function(name) {
  const honorific = ['Mr.', "Mrs.", "Ms.", "Dr."]
  if(name === "") {
    return "";
  }

  

  const reversed = name.split(" ").reverse().join(" ");
  console.log(reversed)
  return reversed;
}

nameInverter("sean day")

module.exports = nameInverter;