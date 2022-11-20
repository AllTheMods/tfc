// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
})

onEvent('item.tooltip', tooltip => {
	tooltip.add('immersiveengineering:wire_copper', [
		Text.of('Made in iron or better anvils.').green()])
})