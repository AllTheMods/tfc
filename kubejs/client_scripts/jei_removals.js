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
	event.hide('minecraft:soul_lantern')

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

    event.hide(/dark_oak/)


	event.hide('beyond_earth:coal_torch')
	event.hide('beyond_earth:coal_lantern')
})
onEvent('jei.remove.categories', event => {

  console.log(event.getCategoryIds())
})