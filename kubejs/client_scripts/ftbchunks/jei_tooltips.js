onEvent("item.tooltip", (tooltip) => {
  const playerSimItems = [
    "integratedtunnels:part_player_simulator",
    "create:deployer"
  ]
  playerSimItems.forEach((item) => {
    tooltip.addAdvanced(item, (itemAdv, advanced, text) => {
      if (!tooltip.shift) {
        text.add(1, [
          Text.of("Hold ").gold(),
          Text.of("Shift ").yellow(),
          Text.of("to see instructions.").gold()
        ])
      } else {
        text.add(
          1,
          Text.lightPurple(
            "To be able to make this item interact with the world you need to:"
          )
        )
        text.add(
          2,
          Text.aqua(
            '(Single) Click "Server Settings" on bottom right corner on FTB Chunk Map'
          )
        )
        text.add(
          3,
          Text.aqua('- Set "Allow Fake Players" to "Allow" or "Check"')
        )
        text.add(
          4,
          Text.aqua(
            '(Single/Multi) If you set to "Check", click on "My Team" icon on Inventory Interface'
          )
        )
        text.add(
          5,
          Text.aqua(
            '- Click "Settings" and set "Allow All Fake Players" to "True"'
          )
        )
      }
    })
  })
})
