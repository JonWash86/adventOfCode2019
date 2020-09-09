function fuelCalc(object){
  return Math.floor(object / 3) - 2;
}

function fuelForFuel(fuelWeight){
  var fuelNeeded = 0;
  while(fuelCalc(fuelWeight) > 0){
    fuelWeight = fuelCalc(fuelWeight);
      fuelNeeded += fuelWeight;
  }
  return fuelNeeded;
}

function findModule(mass){
  var module = 0;
  var fuelMass = 0;
  for (i = 0; i < mass.length; i++){
    fuelForMass = (fuelCalc(mass[i]));
    fuelMass += fuelForMass;
    module += fuelForMass;
    module += fuelForFuel(fuelForMass);
  }
  return module;
}
