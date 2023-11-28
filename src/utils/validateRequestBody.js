const AppError = require("./AppError");

function validateRequestBody(request, requestedParams) {
  if (!Array.isArray(requestedParams)) {
    throw new Error("requestedParams should be an array");
  }

  const missingParams = [];
  requestedParams.forEach((param) => {
    const paramIsIncluded = Object.keys(request.body).includes(param);
    if (!paramIsIncluded) {
      missingParams.push(param);
    }
  });

  if (missingParams.length > 0) {
    throw new AppError(`Request is missing: ${missingParams.join(", ")}`);
  }

  return request.body;
}

module.exports = validateRequestBody;
