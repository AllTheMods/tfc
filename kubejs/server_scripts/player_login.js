//priority: 900
/**
 *
 * @param {Internal.SimplePlayerEventJS} playerLogin
 */
const loginEvent = (playerLogin) => {
  const { player } = playerLogin
  Utils.server.runCommand(
    `attribute ${player} apotheosis:crit_chance base set 1.0`
  )
  Utils.server.runCommand(
    `attribute ${player} apotheosis:crit_damage base set 1.5`
  )
}
