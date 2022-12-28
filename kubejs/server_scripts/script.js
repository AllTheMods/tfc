// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')
let removeRecipeByID = (event, recipes) => {
  recipes.forEach(recipe => {
    event.remove({ id: recipe })
  })
}
let modifyShaped = (event, result, count, pattern, ingredients) => {
  event.remove({ output: result, type: 'minecraft:crafting_shaped' })
  event.shaped(Item.of(result, count), pattern, ingredients).id(`kubejs:shaped/${result.replace(':', '/')}`)
}
onEvent('recipes', event => {

const types = ["oak", "birch", "dark_oak", "spruce", "acacia", "jungle", "andesite", "granite", "diorite"]
const things = ["roof", "attic_roof", "top_roof", "lower_roof", "steep_roof", "upper_lower_roof", "upper_steep_roof"]
for (const piece in types) {
    for (const thing in things) {
        event.remove({id:`mcwroofs:${piece}_${thing}`})
    }
}
function cloche(output, amount, seed, soil, render, time) {
    event.custom({
        type: "immersiveengineering:cloche",
        results: [
          {
            item: output,
            count: amount
          }
        ],
        input: Ingredient.of(seed),
        soil: Ingredient.of(soil),
        time: time,
        render: {
          type: "generic",
          block: render
        }
      }).id(`kubejs:cloche/${seed.replace(':', '/')}`)
  }

cloche('tfc:food/carrot','2', 'tfc:seeds/carrot', '#tfc:dirt','tfc:wild_crop/carrot',800)
cloche('tfc:food/onion','2', 'tfc:seeds/onion', '#tfc:dirt','tfc:wild_crop/onion',800)
cloche('tfc:food/squash','2', 'tfc:seeds/squash', '#tfc:dirt','tfc:wild_crop/squash',800)
cloche('tfc:food/garlic','2', 'tfc:seeds/garlic', '#tfc:dirt','tfc:wild_crop/garlic',800)
cloche('tfc:food/maize','2', 'tfc:seeds/maize', '#tfc:dirt','tfc:wild_crop/maize',800)
cloche('tfc:food/cabbage','2', 'tfc:seeds/cabbage', '#tfc:dirt','tfc:wild_crop/cabbage',800)
cloche('tfc:food/potato','2', 'tfc:seeds/potato', '#tfc:dirt','tfc:wild_crop/potato',600)
cloche('tfc:food/tomato','2', 'tfc:seeds/tomato', '#tfc:dirt','tfc:wild_crop/tomato',800)
cloche('tfc:food/beet','2', 'tfc:seeds/beet', '#tfc:dirt','tfc:wild_crop/beet',800)
cloche('tfc:food/soybean','2', 'tfc:seeds/soybean', '#tfc:dirt','tfc:wild_crop/soybean',800)
cloche('tfc:food/green_bean','2', 'tfc:seeds/green_bean', '#tfc:dirt','tfc:wild_crop/green_bean',800)
cloche('tfc:food/sugarcane','2', 'tfc:seeds/sugarcane', '#tfc:dirt','tfc:wild_crop/sugarcane',800)
cloche('tfc:food/barley','2', 'tfc:seeds/barley', '#tfc:dirt','tfc:wild_crop/barley',800)
cloche('tfc:food/oat','2', 'tfc:seeds/oat', '#tfc:dirt','tfc:wild_crop/oat',800)
cloche('tfc:food/rye','2', 'tfc:seeds/rye', '#tfc:dirt','tfc:wild_crop/rye',800)
cloche('tfc:food/wheat','2', 'tfc:seeds/wheat', '#tfc:dirt','tfc:wild_crop/wheat',800)
cloche('tfc:food/rice','2', 'tfc:seeds/rice', '#tfc:dirt','tfc:wild_crop/rice',800)

cloche('tfc:melon','2', 'tfc:seeds/melon', '#tfc:dirt','tfc:wild_crop/melon',800)
cloche('tfc:pumpkin','2', 'tfc:seeds/pumpkin', '#tfc:dirt','tfc:wild_crop/pumpkin',800)

event.remove({id: 'minecraft:smoker'})
event.remove({id: 'minecraft:blast_furnace'})
event.remove({id: 'minecraft:furnace_minecart'})
event.remove({id: 'beyond_earth:coal_generator'})
event.remove({id: 'beyond_earth:compressor'})

event.remove({id: 'beyond_earth:compressing/compressed_desh'})
event.remove({id: 'beyond_earth:compressing/compressed_ostrum'})
event.remove({id: 'beyond_earth:compressing/compressed_calorite'})

event.remove({id: 'beyond_earth:steel_ingot_blasting'})
event.remove({id: 'immersiveengineering:smelting/ingot_steel_from_dust_from_blasting'})
event.remove({id: 'immersiveengineering:smelting/ingot_steel_from_dust'})
event.remove({id: 'minecraft:honey_bottle'})
event.remove({id: 'create:honey_bucket'})
event.remove({id: 'create:honeyed_apple'})
event.remove({id: 'minecraft:honeycomb_block'})
event.remove({id: 'minecraft:honey_block'})



event.remove({id: 'minecraft:minecart'})

event.remove({id: 'immersiveengineering:jei_bucket_fuel'})
event.remove({id: 'immersiveengineering:jei_bucket_sea_water'})
event.remove({id: 'create:crafting/materials/andesite_alloy'})

event.remove({id: 'create:mixing/andesite_alloy_from_zinc'})

event.remove({id: 'create:mixing/andesite_alloy'})

modifyShaped(event, 'beyond_earth:rover', 1, ['L C', 'PEB', 'WSW'], {
    S: '#forge:ingots/steel',
    L: '#forge:gems/lapis',
    P: '#forge:plates/iron',
    C: '#forge:chests/wooden',
    W: 'beyond_earth:wheel',
    E: 'immersiveengineering:light_engineering',
    B: 'minecraft:bucket'
  })

modifyShaped(event, 'bloodmagic:alchemicalreactionchamber', 1, ['SSS', 'IOI', 'BFB'], {
    S: '#forge:stone',
    I: 'bloodmagic:infusedslate',
    O: 'bloodmagic:weakbloodorb',
    F: 'tfc:crucible',
    B: 'minecraft:iron_block'
  })

modifyShaped(event, 'immersiveengineering:alloybrick', 2, ['SI ', 'IS ', '   '], {
    S: '#forge:sandstone',
    I: 'tfc:ceramic/fire_brick'
  })
modifyShaped(event, 'immersiveengineering:cokebrick', 3, ['CBC', 'BSB', 'CBC'], {
    S: '#forge:sandstone',
    B: 'tfc:ceramic/fire_brick',
    C: 'tfc:mortar'
  })
  modifyShaped(event, 'immersiveengineering:blastbrick', 3, ['CBC', 'BMB', 'CSC'], {
      S: '#forge:ingots/steel',
      C: 'tfc:fire_clay',
      B: 'tfc:ceramic/fire_brick',
      M: '#forge:magma'
    })

modifyShaped(event, 'beyond_earth:fuel_refinery', 1, ['SIS', 'BFB', 'SOS'], {
    S: '#forge:ingots/steel',
    I: '#forge:ingots/iron',
    O: 'minecraft:redstone',
    F: 'tfc:crucible',
    B: 'minecraft:bucket'
  })

modifyShaped(event, 'beyond_earth:oxygen_loader', 1, ['ISI', 'SFS', 'ITI'], {
  S: '#forge:plates/iron',
  I: '#forge:ingots/iron',
  T: 'beyond_earth:oxygen_tank',
  F: 'tfc:crucible'
})
modifyShaped(event, 'bloodmagic:altar', 1, ['S S', 'SFS', 'GGG'], {
    S: '#forge:stone',
    F: 'tfc:crucible',
    G: '#forge:ingots/gold'
  })
modifyShaped(event, 'beyond_earth:oxygen_mask', 1, ['   ', 'SFS', 'SGS'], {
    S: '#forge:plates/iron',
    F: 'tfc:metal/helmet/steel',
    G: '#forge:glass'
  })
modifyShaped(event, 'create:andesite_alloy', 1, ['SZ ', 'ZS ', '   '], {
    S: '#tfc:igneous_extrusive_rock',
    Z: '#forge:nuggets/zinc'

  })



})




onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')



    event.get('forge:crops/potato').add('tfc:food/potato')
    event.get('forge:crops/carrot').add('tfc:food/carrot')
    event.get('forge:crops/beetroot').add('tfc:food/beet')
    event.get('forge:crops/wheat').add('tfc:food/wheat')

    event.get('forge:ingots/graphite').add('immersiveengineering:ingot_hop_graphite')
    event.get('forge:ingots/iron').add('tfc:metal/ingot/wrought_iron')
    event.get('forge:raw_materials/aluminum').add('tfc:ore/cryolite')
    event.get('forge:plates/steel').add('beyond_earth:compressed_steel')
    event.get('beyond_earth:compresseds').add('immersiveengineering:plate_steel')
    event.get('beyond_earth:compresseds/steel').add('immersiveengineering:plate_steel')
    event.get('forge:magma').add('tfc:rock/magma/basalt')
    event.get('forge:magma').add('tfc:rock/magma/granite')
    event.get('forge:magma').add('tfc:rock/magma/diorite')
    event.get('forge:magma').add('tfc:rock/magma/gabbro')
    event.get('forge:magma').add('tfc:rock/magma/rhyolite')
    event.get('forge:magma').add('tfc:rock/magma/andesite')
    event.get('forge:magma').add('tfc:rock/magma/dacite')
    event.get('forge:treated_lumber').add('firmalife:treated_lumber')
    event.get('forge:treated_lumber').add('#forge:treated_wood')

    event.get('forge:dusts/saltpeter').add('tfc:powder/saltpeter')

    event.get('forge:sandstone').add('tfc:raw_sandstone/brown')
    event.get('forge:sandstone').add('tfc:raw_sandstone/white')
    event.get('forge:sandstone').add('tfc:raw_sandstone/black')
    event.get('forge:sandstone').add('tfc:raw_sandstone/red')
    event.get('forge:sandstone').add('tfc:raw_sandstone/yellow')
    event.get('forge:sandstone').add('tfc:raw_sandstone/green')
    event.get('forge:sandstone').add('tfc:raw_sandstone/pink')


	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})
onEvent('block.tags', event => {

    event.get('tfc:can_trigger_collapse').add('beyond_earth:mars_stone')
    event.get('tfc:can_trigger_collapse').add('beyond_earth:moon_stone')
    event.get('tfc:can_trigger_collapse').add('beyond_earth:mercury_stone')
    event.get('tfc:can_trigger_collapse').add('beyond_earth:infernal_spire_block')
    event.get('tfc:can_trigger_collapse').add('beyond_earth:venus_stone')
    event.get('tfc:can_trigger_collapse').add('beyond_earth:venus_sandstone')

    event.get('tfc:can_start_collapse').add('beyond_earth:mars_stone')
    event.get('tfc:can_start_collapse').add('beyond_earth:moon_stone')
    event.get('tfc:can_start_collapse').add('beyond_earth:mercury_stone')
    event.get('tfc:can_start_collapse').add('beyond_earth:infernal_spire_block')
    event.get('tfc:can_start_collapse').add('beyond_earth:venus_stone')
    event.get('tfc:can_start_collapse').add('beyond_earth:venus_sandstone')

    event.get('tfc:can_trigger_collapse').add('minecraft:basalt')
    event.get('tfc:can_trigger_collapse').add('minecraft:blackstone')
    event.get('tfc:can_trigger_collapse').add('minecraft:magma_block')

    event.get('forge:magma').add('tfc:rock/magma/basalt')
    event.get('forge:magma').add('tfc:rock/magma/granite')
    event.get('forge:magma').add('tfc:rock/magma/diorite')
    event.get('forge:magma').add('tfc:rock/magma/gabbro')
    event.get('forge:magma').add('tfc:rock/magma/rhyolite')
    event.get('forge:magma').add('tfc:rock/magma/andesite')
    event.get('forge:magma').add('tfc:rock/magma/dacite')

    event.get('tfc:can_landslide').add('beyond_earth:mars_sand')
    event.get('tfc:can_landslide').add('beyond_earth:venus_sand')
    event.get('tfc:can_landslide').add('beyond_earth:moon_sand')
    event.get('create:passive_boiler_heaters').add('#forge:magma')
    event.get('forge:farmland').add('#tfc:farmland')
})
onEvent('fluid.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')
    event.get('minecraft:water').remove('beyond_earth:fuel')
    event.get('minecraft:water').remove('beyond_earth:oil')
    event.get('forge:crude_oil').add('beyond_earth:oil')
    event.get('beyond_earth:vehicle_fuel').add('thermal:refined_fuel')
    // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

onEvent('biome.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')
    event.get('forge:is_overworld').add('tfc:badlands')
    event.get('forge:is_overworld').add('tfc:canyons')
    event.get('forge:is_overworld').add('tfc:deep_ocean')
    event.get('forge:is_overworld').add('tfc:deep_ocean_trench')
    event.get('forge:is_overworld').add('tfc:hills')
    event.get('forge:is_overworld').add('tfc:inverted_badlands')
    event.get('forge:is_overworld').add('tfc:lake')
    event.get('forge:is_overworld').add('tfc:lowlands')
    event.get('forge:is_overworld').add('tfc:low_canyons')
    event.get('forge:is_overworld').add('tfc:mountains')
    event.get('forge:is_overworld').add('tfc:mountain_lake')
    event.get('forge:is_overworld').add('tfc:mountain_river')
    event.get('forge:is_overworld').add('tfc:ocean')
    event.get('forge:is_overworld').add('tfc:oceanic_mountains')
    event.get('forge:is_overworld').add('tfc:oceanic_mountain_lake')
    event.get('forge:is_overworld').add('tfc:oceanic_mountain_river')
    event.get('forge:is_overworld').add('tfc:ocean_reef')
    event.get('forge:is_overworld').add('tfc:old_mountains')
    event.get('forge:is_overworld').add('tfc:old_mountain_lake')
    event.get('forge:is_overworld').add('tfc:old_mountain_river')
    event.get('forge:is_overworld').add('tfc:plains')
    event.get('forge:is_overworld').add('tfc:plateau')
    event.get('forge:is_overworld').add('tfc:plateau_lake')
    event.get('forge:is_overworld').add('tfc:river')
    event.get('forge:is_overworld').add('tfc:rolling_hills')
    event.get('forge:is_overworld').add('tfc:shore')
    event.get('forge:is_overworld').add('tfc:volcanic_mountains')
    event.get('forge:is_overworld').add('tfc:volcanic_mountain_lake')
    event.get('forge:is_overworld').add('tfc:volcanic_mountain_river')
    event.get('forge:is_overworld').add('tfc:volcanic_oceanic_mountains')
    event.get('forge:is_overworld').add('tfc:volcanic_oceanic_mountain_lake')
    event.get('forge:is_overworld').add('tfc:volcanic_oceanic_mountain_river')
    // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})


onEvent('entity.spawned', event => {
    let dimension = event.level.getDimension()
    // in the correct dim
    if (dimension == "beyond_earth:mercury") {
        let entity = event.entity
        // have a living entity
        if (entity.isLiving() && !entity.isPlayer()) {
            entity.setHeadArmorItem('beyond_earth:netherite_oxygen_mask')
            entity.setChestArmorItem(Item.of('beyond_earth:netherite_space_suit', '{Damage:0,Energy:48000}'))
            entity.setLegsArmorItem('beyond_earth:netherite_space_pants')
            entity.setFeetArmorItem('beyond_earth:netherite_space_boots')
        }
    }
})