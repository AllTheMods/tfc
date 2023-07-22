onEvent("item.tooltip", (tooltip) => {
  const meteorItems = [
    "tfc:metal/double_ingot/wrought_iron",
    "biggerreactors:graphite_ingot",
    "biggerreactors:reactor_casing"
  ]
  meteorItems.forEach((item) => {
    tooltip.add(item, [
      Text.of("Can be used as a sacrifice for").red(),
      Text.of("Mark of the Falling Tower ritual.").red()
    ])
  })
})
