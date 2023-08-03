//priority: 1

onForgeEvent(
  "net.minecraftforge.event.entity.player.PlayerEvent$Clone",
  (event) => {
    global.onPlayerEventClone(event)
  }
)

onEvent("entity.death", (event) => {
  if (!event.entity.isPlayer() || !event.level.side.isServer()) return
  let { entity } = event
  let player = entity.player
  let pData = player.persistentData
  let latestDeathTime = pData.getInt("timeWhenLatestDeath")
  pData.putInt("timeWhenOldestDeath", latestDeathTime)
  pData.putInt("timeWhenLatestDeath", player.stats.playTime)
})

/** @arg {Internal.PlayerEvent$Clone} event */
global.onPlayerEventClone = (event) => {
  if (event.isWasDeath()) {
    let [server, player] = [
      event.player.server.asKJS(),
      event.player.asKJS().player
    ]

    server.scheduleInTicks(5, () => {
      if (
        player.persistentData.getInt("timeWhenOldestDeath") != 0 &&
        player.persistentData.getInt("timeWhenLatestDeath") -
          player.persistentData.getInt("timeWhenOldestDeath") <
          3 * 60 * 60 * 20 // 3 hours
      ) {
        server.runCommandSilent(`/tfc player ${player} set saturation 0`)
        server.runCommandSilent(`/tfc player ${player} set hunger 4`)
        server.runCommandSilent(`/tfc player ${player} set water 20`)
        player.tell(
          Text.red(
            "You've been dying too often recently and now you feel weak..."
          )
        )
      }
    })
  }
}

