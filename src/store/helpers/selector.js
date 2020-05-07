import { createSelector } from "reselect";
import parseData from "@utils/Parser";

// generates selector for parsing report results
function generateResultSelector(scope) {
  console.log(generateResultSelector.name, "scope: ", scope);
  // get result
  const getResult = (state) => state[scope].result;
  console.log(generateResultSelector.name, "getResult: ", getResult);
  // prase result
  const parsedResultSelector = createSelector([getResult], (result) => {
    console.log(parsedResultSelector.name, "\nresult: ",
     result, "\nscope: ", scope, "\ngetResult: ", getResult);
    const parsedResult = parseData(result);
    return parsedResult;
  });

  return parsedResultSelector;
}

export { generateResultSelector };
