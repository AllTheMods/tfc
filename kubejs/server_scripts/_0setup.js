// priority: 1000

settings.logAddedRecipes = false
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

const arraymap = function (array, callbackFn) {
  for (let i = 0; i < array.length; i++) {
    array[i] = callbackFn(this[i], i, array)
  }
  return array
}
// Kubejs' Rhino has a bug with array map functionality where it won't use the returned callback. Replacing the function in its array prototype
Array.prototype.map = function (callbackfn) {
  return arraymap(this, callbackfn)
}

console.info("Setup loaded...")
