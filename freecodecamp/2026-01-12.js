const ACRE_IN_SQ_MTRS = 4_046.86;
const HECTARE_IN_SQ_MTRS = 10_000;

function unitToSqMtrs(unit) {
  switch (unit) {
    case "acres": return ACRE_IN_SQ_MTRS;
    case "hectares": return HECTARE_IN_SQ_MTRS;
    default: throw new Error(`Unknown Unit Requested`)
  }
}

function perCropSqMtrs(crop) {
  switch (crop) {
    case "corn": return 1;
    case "wheat": return 0.1;
    case "soybeans": return 0.5;
    case "tomatoes": return 0.25;
    case "lettuce": return 0.2;
    default: throw new Error(`Unknown Crop Requested`);
  }
}

function getNumberOfPlants(fieldSize, unit, crop) {
  const TOTAL_AVAILABLE_SQ_MTRS = fieldSize * unitToSqMtrs(unit);
  
  return Math.floor(TOTAL_AVAILABLE_SQ_MTRS / perCropSqMtrs(crop));
}
