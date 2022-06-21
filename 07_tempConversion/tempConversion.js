const ftoc = function(far) {
  let celTemp = (far -32)/1.8;
  console.log("The cel temp is " + celTemp);
  celTemp = Math.round(celTemp * 10) / 10
  return celTemp;


};

const ctof = function(cel) {
  let farTemp = (cel * 1.8)+32;
  console.log("The far temp is " + farTemp);
  farTemp = Math.round(farTemp * 10) / 10
  return farTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
