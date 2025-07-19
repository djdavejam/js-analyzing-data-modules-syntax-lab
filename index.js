function combineUsers(...args) {
  const combinedObject = { users: [] };
  args.forEach(arr => combinedObject.users.push(...arr));
  combinedObject.merge_date = Date.today().toString("M/dd/yyyy");
  return combinedObject;
}


module.exports = { combineUsers };
