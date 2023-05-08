//priority: 895

const setDyeAndFlowerTags = itemTagsEvent => {
    itemTagsEvent.get('forge:poppies').add(['minecraft:poppy', 'tfc:plant/poppy'])
    itemTagsEvent.get('forge:dandelions').add(['minecraft:dandelion', 'tfc:plant/dandelion'])
    itemTagsEvent.get('forge:blue_orchids').add(['minecraft:blue_orchid', 'tfc:plant/blue_orchid'])
    itemTagsEvent.get('forge:allium').add(['minecraft:allium', 'tfc:plant/allium'])
    itemTagsEvent.get('forge:oxeye_daisy').add(['minecraft:oxeye_daisy', 'tfc:plant/oxeye_daisy'])
    itemTagsEvent.get('forge:orange_tulip').add(['minecraft:orange_tulip', 'tfc:plant/tulip_orange'])
    itemTagsEvent.get('forge:pink_tulip').add(['minecraft:pink_tulip', 'tfc:plant/tulip_pink'])
    itemTagsEvent.get('forge:white_tulip').add(['minecraft:white_tulip', 'tfc:plant/tulip_white'])
    itemTagsEvent.get('forge:red_tulip').add(['minecraft:red_tulip', 'tfc:plant/tulip_red'])

    itemTagsEvent.add('forge:white_dye_material', [
        'tfc:plant/spanish_moss',
        'tfc:plant/houstonia',
        'tfc:plant/oxeye_daisy',
        'tfc:plant/primrose',
        'tfc:plant/trillium',
        'tfc:plant/snapdragon_white',
        'tfc:plant/tulip_white'
    ])
    itemTagsEvent.add('forge:green_dye_material', [
        'tfc:plant/reindeer_lichen',
        'tfc:plant/barrel_cactus'
    ])
    itemTagsEvent.add('forge:orange_dye_material', [
        'tfc:plant/canna',
        'tfc:plant/butterfly_milkweed',
        'tfc:plant/strelitzia',
        'tfc:plant/nasturtium',
        'tfc:plant/water_canna'
    ])
    itemTagsEvent.add('forge:magenta_dye_material', [
        'tfc:plant/morning_glory',
        'tfc:plant/pulsatilla',
        'tfc:plant/athyrium_fern'
    ])
    itemTagsEvent.add('forge:light_blue_dye_material', [
        'tfc:plant/labrador_tea',
        'tfc:plant/sapphire_tower'
    ])
    itemTagsEvent.add('forge:yellow_dye_material', [
        'tfc:plant/goldenrod',
        'tfc:plant/snapdragon_yellow',
        'tfc:plant/dandelion',
        'tfc:plant/meads_milkweed',
        'tfc:plant/calendula'
    ])
    itemTagsEvent.add('forge:lime_dye_material', 'tfc:plant/moss')
    itemTagsEvent.add('forge:pink_dye_material', [
        'tfc:plant/sacred_datura',
        'tfc:plant/foxglove',
        'tfc:plant/tulip_pink',
        'tfc:plant/snapdragon_pink'
    ])
    itemTagsEvent.add('forge:light_gray_dye_material', 'tfc:plant/yucca')
    itemTagsEvent.add('forge:purple_dye_material', [
        'tfc:plant/black_orchid',
        'tfc:plant/perovskia',
        'tfc:plant/allium'
    ])
    itemTagsEvent.add('forge:blue_dye_material', [
        'tfc:plant/grape_hyacinth',
        'tfc:plant/blue_orchid'
    ])
    itemTagsEvent.add('forge:brown_dye_material', [
        'tfc:plant/field_horsetail',
        'tfc:plant/sargassum'
    ])
    itemTagsEvent.add('forge:red_dye_material', [
        'tfc:plant/tropical_milkweed',
        'tfc:plant/snapdragon_red',
        'tfc:plant/poppy',
        'tfc:plant/guzmania',
        'tfc:plant/tulip_red',
        'tfc:plant/vriesea',
        'tfc:plant/rose'
    ])
}
const setItemTags = itemTagsEvent => {

    itemTagsEvent.get('forge:cokesourcez').add(['minecraft:coal', 'tfc:ore/lignite', 'tfc:ore/bituminous_coal'])
    itemTagsEvent.get('forge:cokesource').add(['tfc:ore/lignite', 'tfc:ore/bituminous_coal'])
    itemTagsEvent.get('forge:bottle').add("minecraft:glass_bottle")
    itemTagsEvent.get('forge:bottle').add("firmalife:empty_jar")

    itemTagsEvent.get('forge:melon').add('minecraft:melon')
    itemTagsEvent.get('forge:melon').add('tfc:melon')

    itemTagsEvent.get('forge:sandstone').add('tfc:raw_sandstone/brown')
    itemTagsEvent.get('forge:sandstone').add('tfc:raw_sandstone/white')
    itemTagsEvent.get('forge:sandstone').add('tfc:raw_sandstone/black')
    itemTagsEvent.get('forge:sandstone').add('tfc:raw_sandstone/red')
    itemTagsEvent.get('forge:sandstone').add('tfc:raw_sandstone/yellow')
    itemTagsEvent.get('forge:sandstone').add('tfc:raw_sandstone/green')
    itemTagsEvent.get('forge:sandstone').add('tfc:raw_sandstone/pink')

    itemTagsEvent.get('forge:ores').add('#tfc:ore_pieces')
    itemTagsEvent.get('forge:gems/amethyst').add('tfc:gem/amethyst')
    itemTagsEvent.get('forge:cocoa_beans').add('minecraft:cocoa_beans')
    itemTagsEvent.get('forge:cocoa_beans').add('firmalife:food/roasted_cocoa_beans')
    itemTagsEvent.get('forge:carrots').add(['tfc:food/carrot', 'minecraft:carrot'])
    itemTagsEvent.get('forge:cake').add(['minecraft:cake', 'tfc:cake'])

    itemTagsEvent.add('forge:electron_tube', [
        'immersiveengineering:electron_tube',
        'create:electron_tube'
    ])
    
    itemTagsEvent.get('forge:wax').add('firmalife:beeswax')
    
    itemTagsEvent.get('forge:fishing_rods').remove('minecraft:fishing_rod')
    itemTagsEvent.get('forge:ingots/iron').add('tfc:metal/ingot/wrought_iron')
    itemTagsEvent.get('forge:raw_materials/aluminum').add('tfc:ore/cryolite')

    itemTagsEvent.get('forge:magma').add([
        'tfc:rock/magma/basalt',
        'tfc:rock/magma/granite',
        'tfc:rock/magma/diorite',
        'tfc:rock/magma/gabbro',
        'tfc:rock/magma/gabbro',
        'tfc:rock/magma/rhyolite',
        'tfc:rock/magma/andesite',
        'tfc:rock/magma/dacite'
    ])

    itemTagsEvent.get('forge:treated_lumber').add('firmalife:treated_lumber')
    itemTagsEvent.get('forge:treated_lumber').add('#forge:treated_wood')
    itemTagsEvent.get('forge:rods/iron').add('#forge:rods/wrought_iron')
    itemTagsEvent.get('forge:cinnabar').add([
        'tfc:ore/cinnabar',
        'thermal:cinnabar'
    ])
    itemTagsEvent.get('forge:dusts/saltpeter').add('tfc:powder/saltpeter')

    itemTagsEvent.add('forge:glue', 'tfc:glue')
    itemTagsEvent.get('forge:slimeballs').add('tfc:glue')
    itemTagsEvent.add('forge:kelp', [
        'tfc:plant/winged_kelp',
        'tfc:plant/leafy_kelp',
        'tfc:plant/giant_kelp_flower'
    ])
    setDyeAndFlowerTags(itemTagsEvent);
    

    itemTagsEvent.add('forge:copper_ore_r', [
        'tfc:ore/rich_native_copper',
        'tfc:ore/rich_tetrahedrite',
        'tfc:ore/rich_malachite'
    ])
    itemTagsEvent.add('forge:copper_ore_n', [
        'tfc:ore/normal_native_copper',
        'tfc:ore/normal_tetrahedrite',
        'tfc:ore/normal_malachite'
    ])
    itemTagsEvent.add('forge:copper_ore_p', [
        'tfc:ore/poor_native_copper',
        'tfc:ore/poor_tetrahedrite',
        'tfc:ore/poor_malachite'
    ])

    itemTagsEvent.add('forge:iron_ore_r', [
        'tfc:ore/rich_hematite',
        'tfc:ore/rich_magnetite',
        'tfc:ore/rich_limonite'
    ])
    itemTagsEvent.add('forge:iron_ore_n', [
        'tfc:ore/normal_hematite',
        'tfc:ore/normal_magnetite',
        'tfc:ore/normal_limonite'
    ])
    itemTagsEvent.add('forge:iron_ore_p', [
        'tfc:ore/poor_hematite',
        'tfc:ore/poor_magnetite',
        'tfc:ore/poor_limonite'
    ])
    itemTagsEvent.add('forge:honey', [
        'minecraft:honey_bottle',
        'firmalife:honey_jar'
    ])
    itemTagsEvent.add('forge:honeycombs', [
        'minecraft:honeycomb',
        'firmalife:raw_honey'
    ])
    itemTagsEvent.add('forge:apples', [
        'minecraft:apple',
        'tfc:food/red_apple'
    ])
    itemTagsEvent.add('forge:bitumen', [
        'thermal:bitumen',
        'tfc:ore/bituminous_coal'
    ])

    itemTagsEvent.remove('forge:cobblestone', 'minecraft:cobblestone')
    itemTagsEvent.remove('forge:stone', 'minecraft:stone')
    itemTagsEvent.remove('forge:cobblestone/normal', 'minecraft:cobblestone')

    itemTagsEvent.add('forge:chocolate', 'create:bar_of_chocolate', 'firmalife:food/dark_chocolate')
    itemTagsEvent.add('forge:seapickles', 'minecraft:sea_pickle', 'tfc:sea_pickle')
    
    itemTagsEvent.get('minecraft:fishes').remove([
      'minecraft:cod',
      'minecraft:salmon',
      'minecraft:tropical_fish',
      'minecraft:pufferfish',
      'minecraft:cooked_cod',
      'minecraft:cooked_salmon'
    ])
    
    itemTagsEvent.add('forge:berries', [
        "tfc:food/blackberry",
        "tfc:food/blueberry",
        "tfc:food/bunchberry",
        "tfc:food/cloudberry",
        "tfc:food/cranberry",
        "tfc:food/elderberry",
        "tfc:food/gooseberry",
        "tfc:food/raspberry",
        "tfc:food/snowberry",
        "tfc:food/strawberry",
        "tfc:food/wintergreen_berry"
    ])

    itemTagsEvent.add('forge:saplings', [
            "tfc:wood/sapling/acacia",
            "tfc:wood/sapling/ash",
            "tfc:wood/sapling/aspen",
            "tfc:wood/sapling/birch",
            "tfc:wood/sapling/blackwood",
            "tfc:wood/sapling/chestnut",
            "tfc:wood/sapling/douglas_fir",
            "tfc:wood/sapling/hickory",
            "tfc:wood/sapling/kapok",
            "tfc:wood/sapling/maple",
            "tfc:wood/sapling/oak",
            "tfc:wood/sapling/palm",
            "tfc:wood/sapling/pine",
            "tfc:wood/sapling/rosewood",
            "tfc:wood/sapling/sequoia",
            "tfc:wood/sapling/spruce",
            "tfc:wood/sapling/sycamore",
            "tfc:wood/sapling/white_cedar",
            "tfc:wood/sapling/willow"
    ])
    //stone tool tags for quests
    for(const stone of stoneToolTypes){
        itemTagsEvent.add('tfc:stone_knives', [`tfc:stone/knife/${stone}`])
        itemTagsEvent.add('tfc:stone_axes', [`tfc:stone/axe/${stone}`])
        itemTagsEvent.add('tfc:stone_hammers', [`tfc:stone/hammer/${stone}`])
        itemTagsEvent.add('tfc:stone_shovels', [`tfc:stone/shovel/${stone}`])
        itemTagsEvent.add('tfc:stone_hoes', [`tfc:stone/hoe/${stone}`])
        itemTagsEvent.add('tfc:stone_javelins', [`tfc:stone/javelin/${stone}`])
    }

    // Seeds related
    itemTagsEvent.get('forge:seeds').removeAll().add('#tfc:seeds')
    itemTagsEvent.removeAll('tombstone:seeds')

    for( const seed of tfcFoodSeeds){
        itemTagsEvent.add('tombstone:seeds', [`tfc:seeds/${seed}`])
        itemTagsEvent.add(`forge:crops/${seed}`, [`tfc:food/${seed}`])
        itemTagsEvent.add('forge:crops', [`tfc:food/${seed}`])
    }
    // because tfc doesn't consider certain seeds as food :O
    for (const seed of tfcNonFoodSeeds){
        itemTagsEvent.add('tombstone:seeds', [`tfc:seeds/${seed}`])
        itemTagsEvent.add(`forge:crops/${seed}`, [`tfc:${seed}`])
        itemTagsEvent.add('forge:crops', [`tfc:${seed}`])
    }
    itemTagsEvent.get('apotheosis:boon_drops').removeAll().add('#tfc:ore_pieces').add('#forge:nuggets/lead')
  
    itemTagsEvent.get('tfc:corals').add([
        "tfc:coral/tube_coral",
        "tfc:coral/brain_coral",
        "tfc:coral/bubble_coral",
        "tfc:coral/fire_coral",
        "tfc:coral/horn_coral",
    ])

    for (const tfcWoodType of tfcWoodTypes){
        itemTagsEvent.get('forge:bookshelves').add(`tfc:wood/planks/${tfcWoodType}_bookshelf`)
        itemTagsEvent.get('forge:bookshelves').add(`mcw_tfc_furn:${tfcWoodType}_bookshelf`)
        itemTagsEvent.get('forge:bookshelves').add(`mcw_tfc_furn:${tfcWoodType}_bookshelf_cupboard`)
        itemTagsEvent.get('forge:bookshelves').add(`mcw_tfc_furn:${tfcWoodType}_bookshelf_drawer`)
        itemTagsEvent.get('forge:bookshelves').add(`mcw_tfc_furn:${tfcWoodType}_lower_bookshelf_drawer`)
    }

    for (const vanillaWoodType of vanillaWoodTypes){
        itemTagsEvent.get('forge:bookshelves').add(`tfc:wood/planks/${vanillaWoodType}_bookshelf`)
        itemTagsEvent.get('forge:bookshelves').add(`mcwfurnitures:${vanillaWoodType}_bookshelf`)
        itemTagsEvent.get('forge:bookshelves').add(`mcwfurnitures:${vanillaWoodType}_bookshelf_cupboard`)
        itemTagsEvent.get('forge:bookshelves').add(`mcwfurnitures:${vanillaWoodType}_bookshelf_drawer`)
        itemTagsEvent.get('forge:bookshelves').add(`mcwfurnitures:${vanillaWoodType}_lower_bookshelf_drawer`)
    }

    for (const tfcStoneType of tfcStoneTypes){
        for (const tfcOreType of tfcOreTypes){
            itemTagsEvent.get(`forge:ores_in_ground/${tfcStoneType}`).add(`tfc:ore/rich_${tfcOreType}/${tfcStoneType}`).add(`tfc:ore/normal_${tfcOreType}/${tfcStoneType}`).add(`tfc:ore/poor_${tfcOreType}/${tfcStoneType}`)
        }
        for (const tfcGemOreType of tfcGemOreTypes){
            itemTagsEvent.get(`forge:ores_in_ground/${tfcStoneType}`).add(`tfc:ore/${tfcGemOreType}/${tfcStoneType}`)
        }
    }

    for (const tfcMetalOreType of tfcMetalOreTypes){
        itemTagsEvent.get(`forge:ores/${tfcMetalOreType}`).remove(`#tfc:ores/${tfcMetalOreType}/poor`).remove(`#tfc:ores/${tfcMetalOreType}/normal`)
    }

    itemTagsEvent.get('forge:ores/apatite').removeAll()
    itemTagsEvent.get('forge:ores/aluminum').remove(['exnihilosequentia:raw_aluminum', 'immersiveengineering:deepslate_ore_aluminum', 'immersiveengineering:ore_aluminum'])
    itemTagsEvent.get('forge:ores/coal').remove(['beyond_earth:glacio_coal_ore', 'beyond_earth:venus_coal_ore', 'minecraft:coal_ore', 'minecraft:deepslate_coal_ore'])
    itemTagsEvent.get('forge:ores/copper').remove(['beyond_earth:glacio_copper_ore', 'minecraft:copper_ore', 'minecraft:deepslate_copper_ore'])
    itemTagsEvent.get('forge:ores/diamond').remove(['beyond_earth:glacio_copper_ore', 'minecraft:copper_ore', 'minecraft:deepslate_copper_ore'])
    itemTagsEvent.get('forge:ores/emerald').remove(['minecraft:deepslate_emerald_ore', 'minecraft:emerald_ore'])
    itemTagsEvent.get('forge:ores/gold').remove(['beyond_earth:venus_gold_ore', 'minecraft:deepslate_gold_ore', 'minecraft:gold_ore', 'minecraft:nether_gold_ore'])
    itemTagsEvent.get('forge:ores/iron').remove(['beyond_earth:glacio_iron_ore', 'beyond_earth:mars_iron_ore', 'beyond_earth:mercury_iron_ore', 'beyond_earth:moon_iron_ore', 'minecraft:deepslate_iron_ore', 'minecraft:iron_ore'])
    itemTagsEvent.get('forge:ores/lapis').remove(['beyond_earth:glacio_lapis_ore', 'minecraft:deepslate_lapis_ore', 'minecraft:lapis_ore'])
    itemTagsEvent.get('forge:ores/lead').remove(['exnihilosequentia:raw_lead', 'immersiveengineering:deepslate_ore_lead', 'immersiveengineering:ore_lead', 'thermal:deepslate_lead_ore', 'thermal:lead_ore'])
    itemTagsEvent.get('forge:ores/nickel').remove(['exnihilosequentia:raw_nickel', 'immersiveengineering:deepslate_ore_nickel', 'immersiveengineering:ore_nickel', 'thermal:deepslate_nickel_ore', 'thermal:nickel_ore'])
    itemTagsEvent.get('forge:ores/platinum').removeAll()
    itemTagsEvent.get('forge:ores/ruby').remove(['thermal:deepslate_ruby_ore', 'thermal:ruby_ore'])
    itemTagsEvent.get('forge:ores/sapphire').remove(['thermal:deepslate_sapphire_ore', 'thermal:sapphire_ore'])
    itemTagsEvent.get('forge:ores/silver').remove(['exnihilosequentia:raw_silver', 'immersiveengineering:deepslate_ore_silver', 'immersiveengineering:ore_silver', 'thermal:deepslate_silver_ore', 'thermal:silver_ore'])
    itemTagsEvent.get('forge:ores/sulfur').remove(['thermal:deepslate_sulfur_ore', 'thermal:sulfur_ore'])
    itemTagsEvent.get('forge:ores/tin').remove(['exnihilosequentia:raw_tin', 'thermal:deepslate_tin_ore', 'thermal:tin_ore'])
    itemTagsEvent.get('forge:ores/uranium').remove(['biggerreactors:uranium_ore', 'exnihilosequentia:raw_uranium', 'immersiveengineering:deepslate_ore_uranium', 'immersiveengineering:ore_uranium'])
    itemTagsEvent.get('forge:ores/zinc').remove(['create:deepslate_zinc_ore', 'create:zinc_ore', 'exnihilosequentia:raw_zinc'])

    itemTagsEvent.get('tfc:usable_on_tool_rack').add([
        'mininggadgets:mininggadget',
        'create:wrench',
        'create:hand_crank',
        '#immersiveengineering:toolbox/tools',
        '#forge:swords',
        '#forge:axes',
        '#forge:pickaxes',
        '#forge:shovels',
        '#forge:hoes',
        '#forge:bows',
        'minecraft:trident',
        '#bloodmagic:daggerofsacrifice',
        '#bloodmagic:sacrificialdagger',
        'mcwroofs:roofing_hammer',
        'tfchomestead:walking_cane',
        'tfchomestead:refined_walking_cane',
        'tombstone:ankh_of_pray'
    ])

    itemTagsEvent.get('tfc:deals_slashing_damage').add([
        'bloodmagic:soulscythe'
    ])

    itemTagsEvent.get('tfc:deals_piercing_damage').add([
        'minecraft:trident'
    ])

    itemTagsEvent.get('tfc:axes').add([
        'bloodmagic:soulaxe',
        'immersiveengineering:axe_steel',
        'ae2:certus_quartz_axe',
        'ae2:nether_quartz_axe',
        'ae2:fluix_axe',
        'minecraft:golden_axe',
        'minecraft:diamond_axe',
        'minecraft:netherite_axe',
        'minecraft:iron_axe',
        'minecraft:stone_axe'
    ])

    itemTagsEvent.get('tfc:swords').add([
        'bloodmagic:soulsword',
        'ae2:certus_quartz_sword',
        'ae2:nether_quartz_sword',
        'ae2:fluix_sword',
        'minecraft:golden_sword',
        'minecraft:diamond_sword',
        'minecraft:netherite_sword',
        'minecraft:iron_sword',
        'minecraft:stone_sword'
    ])

    //itemTagsEvent.add('tfc:foods', ['kubejs:chocolate_cake_slice', 'kubejs:honey_cake_slice'])
    const framedDrawerTypes = [
        "full",
        "half"
    ];
    const framedDrawerSizes = [
        "one",
        "two",
        "four"
    ]
}
