onEvent('item.tooltip', tooltip => {
	tooltip.addAdvanced('tfc:powder/flux', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('for more info').gold()])
		} else {
		  text.add(1, Text.gray('Made from shells and crustaceans found in shores'))
		  text.add(2, [Text.aqua('Another source is the '), Text.gold('Borax ore')])
		  text.add(3, [Text.aqua('To find a vein keep an eye out for '), Text.lightPurple('chert rocks')])
		  text.add(4, [Text.aqua('In '), Text.red('Claystone, Limestone and Shale '), Text.aqua('rock regions')])
		}
	})
})
