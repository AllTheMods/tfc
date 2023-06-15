//priority: 898

const setBlockTags = (blockTagsEvent) => {

    blockTagsEvent.get('tfc:can_trigger_collapse').add('beyond_earth:mars_stone')
    blockTagsEvent.get('tfc:can_trigger_collapse').add('beyond_earth:moon_stone')
    blockTagsEvent.get('tfc:can_trigger_collapse').add('beyond_earth:mercury_stone')
    blockTagsEvent.get('tfc:can_trigger_collapse').add('beyond_earth:infernal_spire_block')
    blockTagsEvent.get('tfc:can_trigger_collapse').add('beyond_earth:venus_stone')
    blockTagsEvent.get('tfc:can_trigger_collapse').add('beyond_earth:venus_sandstone')

    blockTagsEvent.get('tfc:can_start_collapse').add('beyond_earth:mars_stone')
    blockTagsEvent.get('tfc:can_start_collapse').add('beyond_earth:moon_stone')
    blockTagsEvent.get('tfc:can_start_collapse').add('beyond_earth:mercury_stone')
    blockTagsEvent.get('tfc:can_start_collapse').add('beyond_earth:infernal_spire_block')
    blockTagsEvent.get('tfc:can_start_collapse').add('beyond_earth:venus_stone')
    blockTagsEvent.get('tfc:can_start_collapse').add('beyond_earth:venus_sandstone')

    blockTagsEvent.get('tfc:can_trigger_collapse').add('minecraft:basalt')
    blockTagsEvent.get('tfc:can_trigger_collapse').add('minecraft:blackstone')
    blockTagsEvent.get('tfc:can_trigger_collapse').add('minecraft:magma_block')

    blockTagsEvent.get('forge:magma').add('tfc:rock/magma/basalt')
    blockTagsEvent.get('forge:magma').add('tfc:rock/magma/granite')
    blockTagsEvent.get('forge:magma').add('tfc:rock/magma/diorite')
    blockTagsEvent.get('forge:magma').add('tfc:rock/magma/gabbro')
    blockTagsEvent.get('forge:magma').add('tfc:rock/magma/rhyolite')
    blockTagsEvent.get('forge:magma').add('tfc:rock/magma/andesite')
    blockTagsEvent.get('forge:magma').add('tfc:rock/magma/dacite')

    blockTagsEvent.get('tfc:can_landslide').add('beyond_earth:mars_sand')
    blockTagsEvent.get('tfc:can_landslide').add('beyond_earth:venus_sand')
    blockTagsEvent.get('tfc:can_landslide').add('beyond_earth:moon_sand')
    blockTagsEvent.get('create:passive_boiler_heaters').add('#forge:magma')
    blockTagsEvent.get('forge:farmland').add('#tfc:farmland')
    blockTagsEvent.get('minecraft:anvil').add('#tfc:anvils')

    const axeMineable = blockTagsEvent.get('minecraft:mineable/axe')
    const pickaxeMineable = blockTagsEvent.get('minecraft:mineable/pickaxe')

    axeMineable.add(['craftingstation:crafting_station_slab', 'craftingstation:crafting_station'])

    // fix for some roofs taking too long to break, no tool associated
    for (const roofType of mcwRoofTypes) {
        // tfc stripped wood roofs
        for (const tfcWood of tfcWoodTypes) {
            axeMineable.add([`mcw_tfc_roof:stripped_${tfcWood}_${roofType}`])
        }
        // tfc stone roofs
        for (const tfcStone of tfcStoneTypes) {
            pickaxeMineable.add([`mcw_tfc_roof:${tfcStone}_${roofType}`])
        }
    }
}