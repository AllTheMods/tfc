onEvent('jei.hide.items', event => {
		// Hide items in JEI here
		// event.hide('minecraft:cobblestone')
		
		event.hide('create:red_sand_paper')
		event.hide('create:dough')
		
		
		event.hide('minecraft:kelp')
		event.hide('minecraft:dried_kelp')
		event.hide('minecraft:dried_kelp_block')
		event.hide('minecraft:torch')
		event.hide('minecraft:soul_torch')
		event.hide('minecraft:lantern')
		// event.hide('minecraft:soul_lantern') useful on Apotheosis and obtainable with Create/Blood Magic
		
		event.hide(/bloodmagic:.*telepos.*/)
		let woods = ["oak", "birch", "spruce", "acacia", "dark_oak", "jungle"]
		
		woods.forEach(logz => {
				event.hide(`minecraft:${logz}_sign`)
		})
		event.hide('exnihilosequentia:acacia_sieve')
		event.hide('exnihilosequentia:birch_sieve')
		event.hide('exnihilosequentia:dark_oak_sieve')
		event.hide('exnihilosequentia:jungle_sieve')
		event.hide('exnihilosequentia:oak_sieve')
		event.hide('exnihilosequentia:spruce_sieve')
		event.hide('exnihilosequentia:crimson_sieve')
		event.hide('exnihilosequentia:warped_sieve')
		
		event.hide('exnihilosequentia:witch_water_bucket')
		
		event.hide('exnihilosequentia:sea_water_bucket')
		event.hide('minecraft:candle')
		let candles = [
				"white",
				"orange",
				"magenta",
				"light_blue",
				"yellow",
				"lime",
				"pink",
				"gray",
				"light_gray",
				"cyan",
				"purple",
				"blue",
				"brown",
				"green",
				"red",
				"black"
		]
		candles.forEach(candle => {
				event.hide(`minecraft:${candle}_candle`)
		})

		const tools = ["hoe", "axe", "shovel", "pickaxe"]
		const materials = ["fluix", "nether_quartz", "certus_quartz"]
		
		materials.forEach(material => {
			tools.forEach(tool =>{
				event.hide(`ae2:${material}_${tool}`)
			})
		})

		event.hide(/ae2:vibration_chamber/)
		event.hide(/allthemodium.*/)
		event.hide(/vibranium.*/)
		event.hide(/unobtainium.*/)
		event.hide(/platinum.*/)
		event.hide('beyond_earth:coal_torch')
		event.hide('beyond_earth:coal_lantern')
		event.hide("#storagedrawers:drawers")
		event.hide('biggerreactors:uranium_ore')
})
onEvent('jei.remove.categories', event => {
		
		console.log(event.getCategoryIds())
})
