// priority: 0

console.log("loading main script...")

onEvent("item.tags", setItemTags)
onEvent("block.tags", setBlockTags)
onEvent("fluid.tags", setFluidTags)
onEvent("biome.tags", setBiomeTags)
onEvent("entity.spawned", spawnedEntity)
onEvent("lootjs", setLoot)

onEvent("item.right_click", rightClickEvent)
onEvent("recipes", setRecipes)
onEvent("player.logged_in", loginEvent)

console.log("done loading main script...")
