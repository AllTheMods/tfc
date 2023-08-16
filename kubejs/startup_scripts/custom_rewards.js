//priority: 1
let $MapItem = java("net.minecraft.world.item.MapItem")
let $TFCBiomes = java("net.dries007.tfc.world.biome.TFCBiomes")
let $QuartPos = java("net.minecraft.core.QuartPos")
let $MapItemSavedData = java(
  "net.minecraft.world.level.saveddata.maps.MapItemSavedData"
)
let $MapDecoration = java(
  "net.minecraft.world.level.saveddata.maps.MapDecoration"
)
let $LegacyBiomeSource = java("net.dries007.tfc.world.biome.LegacyBiomeSource")

onEvent("ftbquests.custom_reward", (event) => {
  if (event.reward.tags.isEmpty()) return
  let tag = event.reward.tags.iterator().next()
  if (tag.startsWith("biome_")) {
    global.customRewardBiomeMap(event)
  }
})

/** @param {Internal.CustomRewardEventJS} event*/
global.customRewardBiomeMap = (event) => {
  let {minecraftPlayer, level, player } = event
  /** @type {Internal.ServerLevel} */
  let serverLevel = level.minecraftLevel
  /** @type {Internal.ServerPlayer} */
  let serverPlayer = player.minecraftPlayer
  let biomeString = event.reward.tags.iterator().next().replace("biome_", "")

  let biomeSource = serverLevel
    .getChunkSource()
    .getGenerator()
    .getBiomeSource()

  if (!(biomeSource instanceof $LegacyBiomeSource)) {
      let found = serverLevel.findNearestBiome(
        (currentBiome) => currentBiome.is(biomeString),
        minecraftPlayer.getOnPos(),
        1024,
        4
      )
      if (found) {
        let result = found.getFirst()
        generateAndGiveMap(serverLevel, player, result, biomeString)
        return
      } 
      refundPlayer("Couldn't find this biome nearby!",serverPlayer, event.reward.quest)
      return
    }

  let variants = $TFCBiomes.getById("tfc:" + biomeString)
  if (!variants) {
    refundPlayer("This dimension is not compatible with selected biome!",serverPlayer, event.reward.quest)
    return
  }
  let result = radialSearch(
    $QuartPos.fromBlock(player.getX()),
    $QuartPos.fromBlock(player.getZ()),
    128,
    16,
    (x, z) => {
      let found = biomeSource.getNoiseBiomeVariants(x, z)
      if (found == variants) {
        return new BlockPos(
          $QuartPos.fromSection(x),
          0,
          $QuartPos.fromSection(z)
        )
      }
      return null
    }
  )

  if (!result) {
    refundPlayer("Couldn't find this biome nearby!",serverPlayer, event.reward.quest)
    return
  }
  generateAndGiveMap(serverLevel, player, result, biomeString)
}

/**
* @param {string} message 
* @param {Internal.ServerPlayer} serverPlayer
 * @param {Internal.Quest} quest
 */
function refundPlayer(message, serverPlayer, quest) {
  let tasks = quest.tasks
  let player = serverPlayer.asKJS().player
  let server = serverPlayer.asKJS().server
  let questTitle = quest.title
  player.tell(Text.translate(message).red())
  if (questTitle instanceof String) {
    questTitle = Component.translate(questTitle.replaceAll("[{}]", ""))
    player.tell(Component.green("Refunding quest ").append(questTitle.aqua()))
  }
  let i = 0
  tasks.forEach(
    /** @param {Internal.Task} task */
    task => {
      server.scheduleInTicks(i * 5, () => {
        server.runCommandSilent(
          `/ftbquests change_progress ${player} complete ${task}`
        )
      })
      i++
    }
  )
}

/**
 *
 * @param {Internal.ServerLevel} serverLevel
 * @param {Internal.PlayerJS} player
 * @param {BlockPos} result
 * @param {string} biome
 */
function generateAndGiveMap(serverLevel, player, result, biome) {
  let map = $MapItem.create(serverLevel, result.getX(), result.getZ(), 2, true, true)
  $MapItemSavedData.addTargetDecoration(
    map,
    result,
    "+",
    $MapDecoration.Type.RED_X
  )
  $MapItem.renderBiomePreviewMap(serverLevel, map)
  map.setHoverName(Component.translate("gravitas.shop.map.biome." + biome))
  player.give(map.asKJS())
}

/**
 * 
 * @param {number} x 
 * @param {number} z 
 * @param {number} radius 
 * @param {number} step 
 * @param {Internal.Consumer_<any>} func 
 * @returns {BlockPos|null}
 */
function radialSearch(x, z, radius, step, func) {
  // r = [1, radius)
  // d = [0, 2r)
  // Example at r = 2 (d = [0, 3]):
  // a a a a b  +x ->
  // c . . . b  +z
  // c . x . b   |
  // c . . . b   v
  // c d d d d
  /** @type {number} */
  let d
  /** @type {number} */
  let r
  /** @type {BlockPos|null} */
  let pos = null
  for (r = 1; r < radius; r++) {
    for (d = 0; d < 2 * r; d++) {
      // a, b, c, d
      pos = func(x + step * (d - r), z + step * -r)
      if (pos != null) {
        return pos
      }
      pos = func(x + step * r, z + step * (d - r))
      if (pos != null) {
        return pos
      }
      pos = func(x + step * -r, z + step * (d + 1 - r))
      if (pos != null) {
        return pos
      }
      pos = func(x + step * (d + 1 - r), z + step * r)
      if (pos != null) {
        return pos
      }
    }
  }
  return null
}