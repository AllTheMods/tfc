//priority: 896
/**
 *
 * @param {Internal.TagEventJS} fluidTagsEvent
 */
const setFluidTags = (fluidTagsEvent) => {
  fluidTagsEvent
    .get("minecraft:water")
    .removeAll()
    .add([/^(minecraft|tfc):.*water$/])
  fluidTagsEvent.get("forge:crude_oil").add("beyond_earth:oil")
  fluidTagsEvent.get("beyond_earth:vehicle_fuel").add("thermal:refined_fuel")
  fluidTagsEvent
    .get("tfc:usable_in_barrel")
    .add("immersiveengineering:creosote")
  fluidTagsEvent.get("forge:chocolate").add("firmalife:chocolate")
  fluidTagsEvent
    .get("forge:milk")
    .removeAll()
    .add([
      "firmalife:yak_milk",
      "firmalife:goat_milk",
      "firmalife:coconut_milk"
    ])
  fluidTagsEvent.add("forge:refined_fuel", ["thermal:refined_fuel"])
}
