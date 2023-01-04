onEvent('item.tags', e => {

    e.add('forge:electron_tube',['immersiveengineering:electron_tube', 'create:electron_tube'])

    e.add('forge:glue', 'tfc:glue')
    e.add('forge:kelp', ['tfc:plant/winged_kelp', 'tfc:plant/leafy_kelp', 'tfc:plant/giant_kelp_flower'])

    e.add('forge:white_dye_material', ['tfc:plant/spanish_moss', 'tfc:plant/houstonia', 'tfc:plant/oxeye_daisy', 'tfc:plant/primrose', 'tfc:plant/trillium', 'tfc:plant/snapdragon_white','tfc:plant/tulip_white'])
    e.add('forge:green_dye_material', ['tfc:plant/reindeer_lichen', 'tfc:plant/barrel_cactus'])
    e.add('forge:orange_dye_material', ['tfc:plant/canna', 'tfc:plant/butterfly_milkweed', 'tfc:plant/strelitzia', 'tfc:plant/nasturtium', 'tfc:plant/water_canna'])
    e.add('forge:magenta_dye_material', ['tfc:plant/morning_glory', 'tfc:plant/pulsatilla', 'tfc:plant/athyrium_fern'])
    e.add('forge:light_blue_dye_material', ['tfc:plant/labrador_tea', 'tfc:plant/sapphire_tower'])
    e.add('forge:yellow_dye_material', ['tfc:plant/goldenrod', 'tfc:plant/snapdragon_yellow', 'tfc:plant/dandelion', 'tfc:plant/meads_milkweed', 'tfc:plant/calendula'])
    e.add('forge:lime_dye_material', ['tfc:plant/moss'])
    e.add('forge:pink_dye_material', ['tfc:plant/sacred_datura','tfc:plant/foxglove', 'tfc:plant/tulip_pink', 'tfc:plant/snapdragon_pink'])
    e.add('forge:light_gray_dye_material', ['tfc:plant/yucca'])
    e.add('forge:purple_dye_material', ['tfc:plant/black_orchid', 'tfc:plant/perovskia', 'tfc:plant/allium'])
    e.add('forge:blue_dye_material', ['tfc:plant/grape_hyacinth', 'tfc:plant/blue_orchid'])
    e.add('forge:brown_dye_material', ['tfc:plant/field_horsetail', 'tfc:plant/sargassum'])
    e.add('forge:red_dye_material', ['tfc:plant/tropical_milkweed', 'tfc:plant/snapdragon_red', 'tfc:plant/poppy', 'tfc:plant/guzmania', 'tfc:plant/tulip_red', 'tfc:plant/vriesea', 'tfc:plant/rose'])

    e.add('forge:copper_ore_r', ['tfc:ore/rich_native_copper','tfc:ore/rich_tetrahedrite','tfc:ore/rich_malachite'])
    e.add('forge:copper_ore_n', ['tfc:ore/normal_native_copper','tfc:ore/normal_tetrahedrite','tfc:ore/normal_malachite'])
    e.add('forge:copper_ore_p', ['tfc:ore/poor_native_copper','tfc:ore/poor_tetrahedrite','tfc:ore/poor_malachite'])

    e.add('forge:iron_ore_r', ['tfc:ore/rich_hematite','tfc:ore/rich_magnetite','tfc:ore/rich_limonite'])
    e.add('forge:iron_ore_n', ['tfc:ore/normal_hematite','tfc:ore/normal_magnetite','tfc:ore/normal_limonite'])
    e.add('forge:iron_ore_p', ['tfc:ore/poor_hematite','tfc:ore/poor_magnetite','tfc:ore/poor_limonite'])
    e.add('forge:honey', ['minecraft:honey_bottle', 'firmalife:honey_jar'])
    e.add('forge:honeycombs', ['minecraft:honeycomb', 'firmalife:raw_honey'])
    e.add('forge:apples', ['minecraft:apple', 'tfc:food/red_apple'])
    e.add('forge:bitumen', ['thermal:bitumen', 'tfc:ore/bituminous_coal'])
})
onEvent('fluid.tags', e => {
e.add('forge:refined_fuel', ['thermal:refined_fuel'])
})