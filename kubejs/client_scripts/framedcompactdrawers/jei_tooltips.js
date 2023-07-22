onEvent("item.tooltip", (tooltip) => {
  tooltip.addAdvanced(
    /framedcompactdrawers:framed_/,
    (item, advanced, text) => {
      // shift, alt and ctrl are all keys you can check!
      if (!tooltip.shift) {
        text.add(1, [
          Text.of("Hold ").gold(),
          Text.of("Shift ").yellow(),
          Text.of("to see how to craft a drawer.").gold()
        ])
      } else {
        text.add(
          1,
          Text.lightPurple(
            "Use the following items on a 2x2 grid to craft a drawer"
          )
        )
        text.add(2, Text.aqua("- *Top Left: Any block to use as side texture"))
        text.add(3, Text.aqua("- Top Right: Any block to use as trim texture"))
        text.add(
          4,
          Text.aqua(
            "- Bottom Left: Any block/item/glass to use as face texture"
          )
        )
        text.add(5, Text.aqua("- *Bottom Right: This framed item"))
        text.add(6, Text.red("*Required"))
      }
    }
  )
})
