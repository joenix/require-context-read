/**
 * Require Context Read
 * -------- -------- --------
 * @param context { context }
 * @param namespace { boolean }
 * @return { object }
 * ======== ======== ========
 */

// Name
function name(dir) {
  // Get Matcher
  const matcher = dir.match(/\/?([\w\-]+)\.[a-z]{2,4}$/);

  // Return
  return matcher ? matcher[1] : "";
}

// Grab
function grab(item) {
  return item.default || item;
}

// Each
function each(context, callback) {
  // Get Keys
  const keys = context.keys();

  // Handler
  keys.forEach(key => callback(grab(context(key)), key));
}

// Read
function read(context, space) {
  // Set Json
  const json = {};

  // Loop
  each(context, (item, key) => (json[space ? name(key) : item.name] = item));

  // Result
  return json;
}

// Export
export default read;
