onEvent('item.tooltip', tooltip => {
	tooltip.add('immersiveengineering:wire_copper', [
		Text.of('Made in iron or better anvils.').green()])
	tooltip.add('thermal:device_fisher', [
		Text.of('Only works in stationary fresh water').red()])
})
