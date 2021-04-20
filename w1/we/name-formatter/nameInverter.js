const nameInverter = function(name) {
  let tempName = "";
  const result = [];
  const honorific = ["Mr.", "Mrs.", "Ms", "Dr."];

  if (name === undefined) return 'Error';
  if (name === "" )  return "";

  tempName = (name.trim()).split(" ");

  if (honorific.includes(tempName[0])) {
    if(tempName.length === 1) return '';
    if(tempName.length === 2) return name;
        result.push(tempName[0]);
        result.push(" ")
        result.push(tempName[2]);
        result.push(", ")
        result.push(tempName[1]);
        return result.join("").toString();
      };

  if (tempName.length === 1) return tempName;
    result.push(tempName[1]);
    result.push(", ");
    result.push(tempName[0]);

  return result.join("").toString();
};
module.exports = nameInverter;

