// priority: 897
/**
 *
 * @param {Internal.EntitySpawnedEventJS} spawnedEntityEvent
 */
const spawnedEntity = (spawnedEntityEvent) => {
  const { level, entity } = spawnedEntityEvent
  if (entity.type == "minecraft:item" && entity.item == "minecraft:chest") {
    console.log("Spawn")
    entity.setItem("tfc:wood/chest/oak")
  }
  if (entity.type == "minecraft:item" && entity.item == "minecraft:barrel") {
    console.log("Spawn")
    entity.setItem("tfcbarrels:wood/barrel/oak")
  }
  let dimension = level.getDimension()
  if (dimension == "beyond_earth:mercury") {
    if (entity.isLiving() && !entity.isPlayer()) {
      entity.setHeadArmorItem("beyond_earth:netherite_oxygen_mask")
      entity.setChestArmorItem(
        Item.of("beyond_earth:netherite_space_suit", "{Damage:0,Energy:48000}")
      )
      entity.setLegsArmorItem("beyond_earth:netherite_space_pants")
      entity.setFeetArmorItem("beyond_earth:netherite_space_boots")
    }
  }
}
