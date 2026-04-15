// import datejs
require('datejs');

function combineUsers(...args) {
  // Initialize return object
  const combinedObject = {
    users: []
  };

  // Loop through args and merge arrays
  args.forEach(array => {
    combinedObject.users = [...combinedObject.users, ...array];
  });

  // Get today's date
  const today = new Date();
  combinedObject.merge_date = today.toString('M/d/yyyy');

  // Return object
  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};