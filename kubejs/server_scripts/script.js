// priority: 0

settings.logAddedRecipes = false
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

let material =["oak", "birch", "dark_oak", "spruce", "acacia", "jungle", "andesite", "granite", "diorite"]
let type = ["roof", "attic_roof", "top_roof", "lower_roof", "steep_roof", "upper_lower_roof", "upper_steep_roof"]
    material.forEach(material=>{
      type.forEach(type =>{
        event.remove({id: `mcwroofs:${material}_${type}`})
        event.remove({id: `create:cutting/${material}_wood`})
        event.remove({id: `create:cutting/stripped_${material}_wood`})
        event.remove({id: `create:cutting/stripped_${material}_log`})
        event.remove({id: `immersiveengineering:sawmill/${material}_log`})
        event.remove({id: `immersiveengineering:sawmill/${material}_stairs`})
        event.remove({id: `immersiveengineering:sawmill/${material}_door`})
        event.remove({id: `immersiveengineering:sawmill/stripped_${material}_log`})
      })
    })


function cloche(output, amount, seed, soil, render, time) {
    event.custom({
        type: "immersiveengineering:cloche",
        results: [
          {
            item: output,
            count: amount
          },
          {
            item: seed,
            count: 1
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

cloche('tfc:food/carrot','2','tfc:seeds/carrot', '#tfc:dirt','tfc:wild_crop/carrot',800)
cloche('tfc:food/onion','2', 'tfc:seeds/onion', '#tfc:dirt','tfc:wild_crop/onion',800)
cloche('tfc:food/squash','2', 'tfc:seeds/squash', '#tfc:dirt','tfc:wild_crop/squash',800)
cloche('tfc:food/garlic','2', 'tfc:seeds/garlic', '#tfc:dirt','tfc:wild_crop/garlic',800)
cloche('tfc:food/maize','2', 'tfc:seeds/maize', '#tfc:dirt','tfc:wild_crop/maize',1550)
cloche('tfc:food/cabbage','2', 'tfc:seeds/cabbage', '#tfc:dirt','tfc:wild_crop/cabbage',1500)
cloche('tfc:food/potato','2', 'tfc:seeds/potato', '#tfc:dirt','tfc:wild_crop/potato',1450)
cloche('tfc:food/tomato','2', 'tfc:seeds/tomato', '#tfc:dirt','tfc:wild_crop/tomato',1400)
cloche('tfc:food/beet','2', 'tfc:seeds/beet', '#tfc:dirt','tfc:wild_crop/beet',1350)
cloche('tfc:food/soybean','2', 'tfc:seeds/soybean', '#tfc:dirt','tfc:wild_crop/soybean',1300)
cloche('tfc:food/green_bean','2', 'tfc:seeds/green_bean', '#tfc:dirt','tfc:wild_crop/green_bean',1250)
cloche('tfc:jute','2', 'tfc:seeds/jute', '#tfc:dirt','tfc:wild_crop/jute',1800)
cloche('tfc:food/sugarcane','2', 'tfc:seeds/sugarcane', '#tfc:dirt','tfc:wild_crop/sugarcane',1800)
cloche('tfc:food/barley','2', 'tfc:seeds/barley', '#tfc:dirt','tfc:wild_crop/barley',1650)
cloche('tfc:food/oat','2', 'tfc:seeds/oat', '#tfc:dirt','tfc:wild_crop/oat',1700)
cloche('tfc:food/rye','2', 'tfc:seeds/rye', '#tfc:dirt','tfc:wild_crop/rye',1700)
cloche('tfc:food/wheat','2', 'tfc:seeds/wheat', '#tfc:dirt','tfc:wild_crop/wheat',1700)
cloche('tfc:food/rice','2', 'tfc:seeds/rice', '#tfc:dirt','tfc:wild_crop/rice',1750)

cloche('tfc:melon','2', 'tfc:seeds/melon', '#tfc:dirt','tfc:wild_crop/melon',1600)
cloche('tfc:pumpkin','2', 'tfc:seeds/pumpkin', '#tfc:dirt','tfc:wild_crop/pumpkin',1600)

let windows =["oak", "birch", "spruce", "acacia"]
windows.forEach(wood => {
event.replaceInput({id: `create:${wood}_window`}, `minecraft:${wood}_planks` , `tfc:wood/planks/${wood}`)
})
event.replaceInput({id: 'create:jungle_window'}, 'minecraft:jungle_planks' , 'tfc:wood/planks/palm')
event.replaceInput({id: 'create:dark_oak_window'}, 'minecraft:dark_oak_planks' , 'tfc:wood/planks/hickory')

event.replaceInput({type: 'minecraft:crafting_shaped', mod: 'create'}, 'minecraft:oak_planks', '#minecraft:planks')
event.replaceInput({input: 'minecraft:cobblestone', mod: 'create'}, 'minecraft:cobblestone', '#forge:cobblestone/normal')
event.replaceInput({input: 'minecraft:smooth_stone', mod: 'create'}, 'minecraft:smooth_stone', '#tfc:rock/smooth')

event.recipes.thermal.insolator(['tfc:jute',Item.of('tfc:seeds/jute').withChance(1)], 'tfc:seeds/jute').water(900)
event.recipes.thermal.insolator(['tfc:melon',Item.of('tfc:seeds/melon').withChance(1.5)], 'tfc:seeds/melon').water(750)
event.recipes.thermal.insolator(['tfc:pumpkin',Item.of('tfc:seeds/pumpkin').withChance(1.5)],'tfc:seeds/pumpkin').water(750)
let seeds =[
"carrot",
"onion",
"squash",
"garlic",
"maize",
"cabbage",
"potato",
"tomato",
"beet",
"soybean",
"green_bean",
"sugarcane",
"barley",
"oat",
"rye",
"rice",
"wheat"
]

seeds.forEach(seed => {
     event.recipes.thermal.insolator([Item.of(`tfc:food/${seed}`),Item.of( `tfc:seeds/${seed}`).withChance(1.2) ], Item.of(`tfc:seeds/${seed}`)).water(850)
})
event.remove({id: /ae2:tools\/.*/})
event.remove({id: /allthemodium.*/})
event.remove({id: /vibranium.*/})
event.remove({id: /unobtainium.*/})

event.remove({id: 'create:honey_bucket'})
event.remove({id: 'minecraft:smoker'})
event.remove({id: 'minecraft:blast_furnace'})
event.remove({id: 'minecraft:furnace_minecart'})
event.remove({id: 'beyond_earth:coal_generator'})
event.remove({id: 'beyond_earth:compressor'})

event.remove({id: 'minecraft:stone_brick_wall'})
event.remove({id: 'minecraft:stone_brick_slab'})
event.remove({id: 'minecraft:stone_brick_stairs'})

event.remove({id: 'beyond_earth:compressing/compressed_desh'})
event.remove({id: 'beyond_earth:compressing/compressed_ostrum'})
event.remove({id: 'beyond_earth:compressing/compressed_calorite'})

event.remove({id: 'beyond_earth:steel_ingot_blasting'})
event.remove({id: 'immersiveengineering:smelting/ingot_steel_from_dust_from_blasting'})
event.remove({id: 'immersiveengineering:smelting/ingot_steel_from_dust'})
event.remove({id: 'minecraft:honey_bottle'})
event.remove({id: 'minecraft:honeycomb_block'})
event.remove({id: 'minecraft:honey_block'})
event.remove({id: 'tombstone:white_marble'})
event.remove({output: Item.of('tombstone:fishing_rod_of_misadventure').ignoreNBT()})
event.remove({id: 'comforts:rope_and_nail_shapeless'})

event.remove({id: 'thermal:machines/insolator/insolator_potato'})
event.remove({id: 'thermal:machines/insolator/insolator_pumpkin'})
event.remove({id: 'thermal:machines/insolator/insolator_melon'})
event.remove({id: 'thermal:machines/insolator/insolator_carrot'})

event.remove({id: 'immersiveengineering:cloche/melon'})
event.remove({id: 'immersiveengineering:cloche/pumpkin'})
event.remove({id: 'immersiveengineering:cloche/potato'})

event.remove({id: /thermal:storage\/.*_from_block$/})

let gemStones =[
"amethyst",
"diamond",
"emerald",
"lapis_lazuli",
"opal",
"pyrite",
"ruby",
"sapphire",
"topaz"
]
gemStones.forEach(gem => {
    event.shapeless(`tfc:gem/${gem}`,[Ingredient.of(`tfc:ore/${gem}`), Ingredient.of(`create:sand_paper`)])
})
let ferns =[
"king",
"lady",
"licorice",
"ostrich",
"sword",
"tree"
]
ferns.forEach(fern => {
event.custom({
    type: 'create:crushing',
    ingredients: [
      Ingredient.of(`tfc:plant/${fern}_fern`).toJson()
    ],
    results: [
      Item.of('2x minecraft:green_dye').toResultJson(),
      Item.of('minecraft:green_dye').withChance(0.5).toResultJson()
    ],
    processingTime: 100
  })
})

let logs = ["acacia", "ash", "aspen", "birch", "blackwood", "chestnut", "douglas_fir", "hickory", "kapok", "maple", "oak", "palm", "pine", "rosewood", "sequoia", "spruce", "sycamore", "white_cedar", "willow"]

logs.forEach(log => {
    let output = `6x tfc:wood/planks/${log}`
    let secondary = [
        { "output": { "tag": "forge:dusts/wood" }, "stripping": false },
        { "output": { "tag": "forge:dusts/wood" }, "stripping": true }
    ]

    event.recipes.immersiveengineeringSawmill(output, Item.of(`tfc:wood/log/${log}`),secondary , Item.of(`tfc:wood/stripped_log/${log}`))
    event.recipes.immersiveengineeringSawmill(output, Item.of(`tfc:wood/stripped_log/${log}`),secondary)
    event.recipes.immersiveengineeringSawmill(output, Item.of(`tfc:wood/wood/${log}`),secondary , Item.of(`tfc:wood/stripped_wood/${log}`))

    event.recipes.createCutting(Item.of(`tfc:wood/stripped_log/${log}`), Item.of(`tfc:wood/log/${log}`) )
    event.recipes.createCutting(output, Item.of(`tfc:wood/stripped_log/${log}`))
})

let outputs = []
outputs.push({ item: 'apotheosis:gem_dust'})
event.custom({
      "type": "create:crushing",
      "ingredients": [
        Ingredient.of('apotheosis:gem')
      ],
      "results": outputs,
      "processingTime": 400
    }).id(`kubejs:crushing/gem_dust`)

let ingotz =[
"copper",
"silver",
"sterling_silver",
"nickel",
"steel",
"gold"
]

let others =[
"red_steel",
"blue_steel",
"black_steel",
"wrought_iron",
"zinc",
"tin",
"rose_gold",
"bronze",
"bismuth",
"bismuth_bronze",
"black_bronze"
]
event.remove({id:'immersiveposts:has_copper_rod'})
event.remove({id:'immersiveposts:has_lead_rod'})
event.remove({id:'immersiveposts:has_gold_rod'})
event.remove({id:'immersiveposts:has_electrum_rod'})
event.remove({id:'immersiveposts:has_constantan_rod'})
event.remove({id:'immersiveposts:has_uranium_rod'})
event.remove({id:'immersiveposts:has_silver_rod'})
event.remove({id:'immersiveposts:has_nickel_rod'})

let mold = "immersiveengineering:mold_plate"

ingotz.forEach(ingot =>{
event.recipes.immersiveengineeringMetalPress(Ingredient.of(`tfc:metal/sheet/${ingot}`).ignoreNBT(), Ingredient.of(`tfc:metal/double_ingot/${ingot}`).ignoreNBT(), mold)
event.recipes.immersiveengineeringArcFurnace(Ingredient.of(`tfc:metal/double_sheet/${ingot}`).ignoreNBT(), Ingredient.of(`tfc:metal/sheet/${ingot}`).ignoreNBT(), Ingredient.of(`tfc:metal/sheet/${ingot}`).ignoreNBT())
event.recipes.immersiveengineeringArcFurnace(Ingredient.of(`tfc:metal/double_ingot/${ingot}`).ignoreNBT(), Ingredient.of(`tfc:metal/ingot/${ingot}`).ignoreNBT(), Ingredient.of(`tfc:metal/ingot/${ingot}`).ignoreNBT())

})
others.forEach(ingot =>{
event.recipes.immersiveengineeringMetalPress(`tfc:metal/sheet/${ingot}`, Ingredient.of(`tfc:metal/double_ingot/${ingot}`).ignoreNBT(), mold)
event.recipes.immersiveengineeringArcFurnace(`tfc:metal/double_sheet/${ingot}`, Ingredient.of(`tfc:metal/sheet/${ingot}`).ignoreNBT(), Ingredient.of(`tfc:metal/sheet/${ingot}`).ignoreNBT())
event.recipes.immersiveengineeringArcFurnace(Ingredient.of(`tfc:metal/double_ingot/${ingot}`).ignoreNBT(), Ingredient.of(`tfc:metal/ingot/${ingot}`).ignoreNBT(), Ingredient.of(`tfc:metal/ingot/${ingot}`).ignoreNBT())

})
event.recipes.createPressing('tfc:refined_iron_bloom', Ingredient.of('tfc:raw_iron_bloom').ignoreNBT())
event.recipes.createPressing('tfc:metal/ingot/wrought_iron', Ingredient.of('tfc:refined_iron_bloom').ignoreNBT())

event.recipes.immersiveengineeringMetalPress(`firmalife:metal/sheet/chromium`, Ingredient.of(`firmalife:metal/double_ingot/chromium`).ignoreNBT(), mold)
event.recipes.immersiveengineeringArcFurnace(`firmalife:metal/double_sheet/chromium`, Ingredient.of(`firmalife:metal/sheet/chromium`).ignoreNBT(), Ingredient.of(`firmalife:metal/sheet/chromium`).ignoreNBT())
event.recipes.immersiveengineeringMetalPress(`firmalife:metal/sheet/stainless_steel`, Ingredient.of(`firmalife:metal/double_ingot/stainless_steel`).ignoreNBT(), mold)
event.recipes.immersiveengineeringArcFurnace(`firmalife:metal/double_sheet/stainless_steel`, Ingredient.of(`firmalife:metal/sheet/stainless_steel`).ignoreNBT(), Ingredient.of(`firmalife:metal/sheet/stainless_steel`).ignoreNBT())
event.recipes.immersiveengineeringArcFurnace(`firmalife:metal/double_ingot/stainless_steel`, Ingredient.of(`firmalife:metal/ingot/stainless_steel`).ignoreNBT(), Ingredient.of(`firmalife:metal/ingot/stainless_steel`).ignoreNBT())

let mold2 = "immersiveengineering:mold_rod"
let ingotz2 = [
  "bismuth",
  "bismuth_bronze",
  "black_bronze",
  "sterling_silver",
  "cast_iron",
  "black_steel",
  "blue_steel",
  "red_steel"
]
ingotz2.forEach(ingot =>{
event.recipes.immersiveengineeringMetalPress(`2x tfc:metal/rod/${ingot}`, Ingredient.of(`tfc:metal/ingot/${ingot}`).ignoreNBT(), mold2).id(`kubejs:immersivemetalpress/rod/${ingot}`)
})

event.recipes.immersiveengineeringMetalPress(`2x firmalife:metal/rod/chromium`, Ingredient.of(`firmalife:metal/ingot/chromium`).ignoreNBT(), mold2)
event.recipes.immersiveengineeringMetalPress(`2x firmalife:metal/rod/stainless_steel`, Ingredient.of(`firmalife:metal/ingot/stainless_steel`).ignoreNBT(), mold2)

let ca_ingotz = [
  "aluminum",
  "lead",
  "silver",
  "nickel",
  "uranium",
  "constantan",
  "electrum",
  "steel"
]
ca_ingotz.forEach(ingot =>{
  event.remove({id: `createaddition:pressing/${ingot}_ingot`})
})

let imm_ingotz = [
  "aluminum",
  "uranium",
  "steel"
]
imm_ingotz.forEach(ingot =>{
  event.recipes.thermal.press(`immersiveengineering:plate_${ingot}`,Ingredient.of(`#forge:ingots/${ingot}`)).id(`kubejs:thermal/press/plate/${ingot}`)
})
event.recipes.thermal.press('beyond_earth:desh_plate',Ingredient.of('beyond_earth:desh_ingot')).id(`kubejs:thermal/press/plate/desh`)
event.recipes.thermal.press('create:brass_sheet',Ingredient.of('#forge:ingots/brass')).id(`kubejs:thermal/press/plate/brass`)
event.recipes.thermal.press('createaddition:zinc_sheet',Ingredient.of('#forge:ingots/zinc')).id(`kubejs:thermal/press/plate/zinc`)

let thermal_ingots = [
  "tin",
  "bronze",
  "invar"
]
thermal_ingots.forEach(ingot =>{
  event.recipes.createPressing(`thermal:${ingot}_plate`,Ingredient.of(`#forge:ingots/${ingot}`)).id(`kubejs:create/press/plate/${ingot}`)
})

event.recipes.thermal.crucible(Fluid.of('minecraft:lava', 1000), '#forge:magma').id(`kubejs:thermal/machines/crucible/tfc_magma_to_lava`)

let woods =["oak", "birch", "spruce", "acacia", "dark_oak", "jungle"]

woods.forEach(logz => {
    event.remove({id: `minecraft:${logz}_sign`})
})
event.remove({id: 'immersivepetroleum:candle'})
event.remove({id: 'minecraft:candle'})
event.remove({id: 'firmalife:crafting/bee_candle'})

modifyShaped(event, 'tfc:candle', 4, [' S ', ' I ', '   '], {
    S: '#forge:string',
    I: '#forge:wax'
  })



event.remove({id: 'minecraft:minecart'})
event.remove({id: 'minecraft:ens_ancient_debris'})
event.remove({id: 'immersiveengineering:jei_bucket_fuel'})
event.remove({id: 'immersiveengineering:jei_bucket_sea_water'})
event.remove({id: 'create:crafting/materials/andesite_alloy'})


event.remove({id: 'create:mixing/andesite_alloy_from_zinc'})
event.remove({id: 'create:filling/sweet_roll'})
event.remove({id: 'create:mixing/andesite_alloy'})
event.remove({id: 'thermal:machines/press/unpacking/press_wheat_unpacking'})
event.remove({id: 'thermal:storage/cured_rubber_block'})
event.remove({id: 'minecraft:sugar_from_honey_bottle'})

event.remove({id: 'minecraft:stone_bricks'})
event.remove({id: 'bloodmagic:teleposer'})
event.remove({id: 'create:mixing/chocolate_melting'})

event.replaceInput({type: 'minecraft:crafting_shaped', mod: 'immersiveengineering'}, '#forge:ingots/steel', '#forge:plates/steel')
event.replaceInput({type: 'minecraft:crafting_shaped', mod: 'immersiveengineering'}, '#forge:ingots/iron', '#forge:sheets/wrought_iron')
event.replaceInput({type: 'minecraft:crafting_shaped', mod: 'immersiveengineering'}, '#forge:ingots/bronze', '#forge:plates/bronze')
event.replaceInput({type: 'minecraft:crafting_shaped', mod: 'immersiveengineering'}, '#forge:ingots/copper', '#forge:sheets/copper')

event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:stone_bricks', '#forge:stone_bricks')
event.replaceInput({type: 'minecraft:crafting_shaped', mod: 'thermal'}, '#forge:ingots/steel', '#forge:sheets/steel')
event.replaceInput({type: 'minecraft:crafting_shaped', mod: 'thermal'}, '#forge:ingots/bronze', '#forge:sheets/bronze')
event.replaceInput({type: 'minecraft:crafting_shaped', mod: 'thermal'}, '#forge:ingots/iron', '#forge:sheets/wrought_iron')
event.replaceInput({type: 'minecraft:crafting_shaped', mod: 'thermal'}, '#forge:ingots/copper', '#forge:sheets/copper')
event.replaceInput({type: 'minecraft:crafting_shaped', mod: 'thermal'}, '#forge:ingots/nickel', '#forge:sheets/nickel')
event.replaceInput({type: 'minecraft:crafting_shaped', mod: 'thermal'}, '#forge:ingots/tin', '#forge:sheets/tin')
event.replaceInput({type: 'minecraft:crafting_shaped', mod: 'thermal'}, '#forge:ingots/gold', '#forge:sheets/gold')
event.replaceInput({type: 'minecraft:crafting_shaped', mod: 'thermal'}, '#forge:ingots/iron', '#forge:ingots/stainless_steel')
event.replaceInput({type: 'minecraft:crafting_shaped', mod: 'thermal'}, 'thermal:tin_gear', 'thermal:lead_gear')
event.replaceInput({type: 'minecraft:crafting_shaped', mod: 'thermal'}, '#forge:ingots/silver', '#forge:sheets/sterling_silver')
event.replaceInput({type: 'minecraft:crafting_shaped', mod: 'thermal'}, '#forge:ingots/bronze', '#forge:sheets/bronze')

event.replaceInput({id: 'createaddition:mixing/biomass_from_saplings'}, '#minecraft:saplings', '#forge:saplings')

let gear_ingotz = [
  "copper",
  "tin",
  "nickel",
  "bronze",
  "gold"
]
gear_ingotz.forEach(ingot => {
  event.replaceInput({type: 'minecraft:crafting_shaped', id: `thermal:parts/${ingot}_gear`}, `#forge:sheets/${ingot}`, `#forge:ingots/${ingot}`)
})
event.replaceInput({type: 'minecraft:crafting_shaped', id: `thermal:parts/iron_gear`}, `#forge:sheets/wrought_iron`, `#forge:ingots/wrought_iron`)
event.replaceInput({type: 'minecraft:crafting_shaped', id: `thermal:parts/silver_gear`}, `#forge:sheets/sterling_silver`, `#forge:ingots/sterling_silver`)

event.replaceInput({type: 'minecraft:crafting_shaped'}, 'immersiveengineering:hemp_fiber', 'tfc:jute_fiber')

event.replaceInput({type: 'minecraft:crafting_shaped', mod: 'thermal'}, 'minecraft:blast_furnace', 'tfc:crucible')

event.replaceInput({type: 'create:mixing', mod: 'create'}, 'create:wheat_flour', '#tfc:foods/flour')

event.replaceInput({type: 'minecraft:crafting_shaped', mod: 'thermal'}, 'minecraft:dirt', '#tfc:dirt')
event.replaceInput({type: 'minecraft:crafting_shaped', mod: 'thermal'}, 'thermal:cured_rubber', 'immersiveengineering:plate_duroplast')
event.replaceInput({type: 'minecraft:crafting_shaped', mod: 'waystones'}, 'minecraft:emerald', 'tfc:gem/emerald')

event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:stone', '#forge:stone')

event.replaceInput({type: 'immersiveengineering:cloche'}, 'minecraft:dirt', '#tfc:dirt')


modifyShaped(event, 'ae2:certus_quartz_wrench', 1, ['Q Q', ' I ', ' I '], {
    Q: 'ae2:certus_quartz_crystal',
    I: '#forge:rods/wrought_iron'
  })
  modifyShaped(event, 'tombstone:white_marble', 1, ['QQQ', 'QDQ', 'QQQ'], {
      Q: 'tfc:rock/loose/marble',
      D: 'tombstone:grave_dust'
    })
modifyShaped(event, 'apotheosis:ender_lead', 1, ['PL ', 'G  ', '   '], {
      P: 'minecraft:ender_pearl',
      L: 'minecraft:lead',
      G: 'tfc:metal/ingot/gold'
    })
modifyShaped(event, 'thermal:energy_duct', 3, ['LOL', 'BRB', 'LOL'], {
        B: '#forge:sheets/bronze',
        R: 'minecraft:redstone_block',
        O: '#forge:glass_panes',
        L: '#forge:plates/lead'
      })
modifyShaped(event, 'thermal:fluid_duct', 3, ['LBL', 'B B', 'LBL'], {
    B: '#forge:sheets/bronze',
    L: '#forge:plates/lead'
  })
modifyShaped(event, 'thermal:fluid_duct_windowed', 3, ['LBL', 'BWB', 'LBL'], {
    B: '#forge:sheets/bronze',
    W: '#forge:glass_panes',
    L: '#forge:plates/lead'
  })
modifyShaped(event, 'enderstorage:ender_chest',1, ["BWB", "OCO", "BPB"], {
       P: '#forge:ender_pearls',
	   O: '#forge:obsidian',
	   C: '#forge:chests/wooden',
	   B: 'minecraft:blaze_rod',
	   W: '#thermal:rockwool'
})
modifyShaped(event, 'enderstorage:ender_pouch',1, ["BLB", "LPL", "BWB"], {
       P: '#forge:ender_pearls',
	   L: '#forge:leather',
	   B: 'minecraft:blaze_rod',
	   W: '#thermal:rockwool'
})
modifyShaped(event, 'enderstorage:ender_tank',1, ["BWB", "OCO", "BPB"], {
       P: '#forge:ender_pearls',
	   O: '#forge:obsidian',
	   C: 'minecraft:bucket',
	   B: 'minecraft:blaze_rod',
	   W: '#thermal:rockwool'
})
event.remove({type: 'enderstorage:recolour_recipe'})
event.custom({
    "type": "enderstorage:recolour_recipe",
    "result": {
      "item": "enderstorage:ender_chest"
  }}).id('kubejs:ender_chest_recolour_manual_only')
event.custom({
    "type": "enderstorage:recolour_recipe",
	  "result": {
		  "item": "enderstorage:ender_pouch"
	}}).id('kubejs:ender_pouch_recolour_manual_only')
event.custom({
    "type": "enderstorage:recolour_recipe",
	  "result": {
		  "item": "enderstorage:ender_tank"
	}}).id('kubejs:ender_tank_recolour_manual_only')
modifyShaped(event, 'ae2:nether_quartz_wrench', 1, ['Q Q', ' I ', ' I '], {
    Q: 'minecraft:quartz',
    I: '#forge:rods/wrought_iron'
})
modifyShaped(event, 'ae2:certus_quartz_cutting_knife', 1, ['Q  ', ' I ', '   '], {
     Q: 'ae2:certus_quartz_crystal',
     I: '#forge:rods/wrought_iron'
})

modifyShaped(event, 'ae2:nether_quartz_cutting_knife', 1, ['Q  ', ' I ', '   '], {
     Q: 'minecraft:quartz',
     I: '#forge:rods/wrought_iron'
})

modifyShaped(event, 'exmachinis:flux_hammer', 1, ['PHP', 'PTP', 'CSU'], {
    H: 'minecraft:hopper',
    T: 'thermal:machine_pulverizer',
    P: '#forge:glass_panes',
    C: 'thermal:rf_coil',
    U: 'thermal:upgrade_augment_3',
    S: '#forge:sheets/stainless_steel'
  })

modifyShaped(event, 'exmachinis:flux_sieve', 1, ['SGS', 'PTP', 'CHU'], {
    H: 'minecraft:hopper',
    T: 'create:smart_chute',
    P: '#forge:glass_panes',
    C: 'thermal:rf_coil',
    G: 'beyond_earth:desh_plate',
    U: 'thermal:upgrade_augment_3',
    S: '#forge:sheets/stainless_steel'
  })

modifyShaped(event, 'exmachinis:gold_upgrade', 1, ['GGG', 'RPR', 'GMG'], {
    G: '#forge:sheets/rose_gold',
    M: '#ae2:memory_cards',
    P: 'ae2:logic_processor',
    R: 'minecraft:redstone'
  })
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
event.remove({id: 'biggerreactors:smelting/graphite_ingot'})
modifyShaped(event, 'immersiveengineering:alloybrick', 2, ['SI ', 'IS ', '   '], {
    S: '#forge:sandstone',
    I: 'tfc:ceramic/fire_brick'
  })
modifyShaped(event, 'biggerreactors:graphite_dust', 1, ['DDD', 'DDD', 'DDD'], {
    D: 'tfc:powder/graphite'
  })
  modifyShaped(event, 'immersiveengineering:hemp_fabric', 3, ['CYC', 'SYS', 'YCY'], {
      S: '#forge:rods/wooden',
      C: 'tfc:wool_cloth',
      Y: 'tfc:wool_yarn'
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
modifyShaped(event, 'beyond_earth:rocket_nose_cone', 1, [' T ', ' S ', 'SPS'], {
  T: 'minecraft:redstone_torch',
  S: '#forge:ingots/stainless_steel',
  P: '#forge:sheets/red_steel'
})
modifyShaped(event, 'beyond_earth:rocket_fin', 2, [' S ', 'TST', 'PSP'], {
  T: '#forge:sheets/stainless_steel',
  S: '#forge:ingots/red_steel',
  P: '#forge:sheets/red_steel'
})
modifyShaped(event, 'beyond_earth:engine_frame', 1, ['ISI', 'S S', 'ISI'], {
  I: '#forge:ingots/stainless_steel',
  S: '#forge:sheets/stainless_steel'
})
modifyShaped(event, 'beyond_earth:engine_fan', 1, ['I I', ' D ', 'I I'], {
  D: '#forge:ingots/red_steel',
  I: '#forge:sheets/stainless_steel'
})
modifyShaped(event, 'beyond_earth:steel_tank', 1, ['STS', 'T T', 'STS'], {
  T: '#forge:sheets/stainless_steel',
  S: '#forge:double_sheets/stainless_steel'
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
modifyShaped(event, 'apotheosis:melonshelf', 1, ['MMM', 'SBS', 'MMM'], {
    M: '#forge:melon',
    B: '#forge:bookshelves',
    S: 'minecraft:glistering_melon_slice'
  })

modifyShaped(event, 'apotheosis:beeshelf', 1, ['CVC', 'HBH', 'CVC'], {
    C: 'firmalife:raw_honey',
    V: 'firmalife:beehive',
    H: 'minecraft:honey_block',
    B: '#forge:bookshelves'
  })
  modifyShaped(event, 'apotheosis:salvaging_table', 1, ['CCC', 'PSA', 'DBD'], {
    C: 'tfc:metal/ingot/copper',
    P: Ingredient.of('tfc:metal/pickaxe/blue_steel').ignoreNBT().toJson(),
    A: Ingredient.of('tfc:metal/axe/blue_steel').ignoreNBT().toJson(),
    S: 'minecraft:smithing_table',
    D: 'apotheosis:gem_dust',
    B: 'minecraft:lava_bucket'
  })
modifyShaped(event, 'apotheosis:library', 1, ['CVC', 'VBV', 'CVC'], {
    C: 'minecraft:ender_chest',
    V: 'apotheosis:infused_hellshelf',
    B: 'minecraft:enchanted_book'
  })
  modifyShaped(event, 'apotheosis:reforging_table', 1, [' N ', 'DED', 'BBB'], {
      N: 'minecraft:netherite_ingot',
      D: 'apotheosis:gem_dust',
      E: 'minecraft:enchanted_book',
      B: 'minecraft:nether_bricks'
    })
modifyShaped(event, 'apotheosis:scrap_tome', 8, ['BBB', 'BAB', 'BBB'], {
    A: 'tfc:metal/anvil/steel',
    B: 'minecraft:book'
  })
 modifyShaped(event, 'minecraft:lodestone', 1, ['BBB', 'BAB', 'BBB'], {
      A: 'minecraft:netherite_ingot',
      B: '#tfc:rock/bricks'
    })
  modifyShaped(event, 'ae2:memory_card', 1, ['AAA', 'CFE', 'BBB'], {
      A: '#forge:sheets/nickel',
      B: '#forge:nuggets/gold',
      C: 'ae2:cell_component_1k',
      E: 'ae2:engineering_processor',
      F: 'minecraft:redstone'
    })
    modifyShaped(event, 'create:belt_connector', 1, ['AAA', 'RLR', 'AAA'], {
      A: 'tfc:food/dried_kelp',
      R: '#forge:rods/wrought_iron',
      L: '#forge:treated_lumber'
    })
    modifyShaped(event, 'immersiveengineering:conveyor_basic', 4, ['AAA', 'RLR', 'AAA'], {
          A: 'create:belt_connector',
          R: '#forge:rods/nickel',
          L: '#forge:rods/wrought_iron'
        })
    modifyShaped(event, 'immersiveengineering:crate', 1, ['ABA', 'B B', 'ABA'], {
          A: 'thermal:tar',
          B: '#forge:treated_wood'
        })


function tfcbuckets(output, fluid, amount, input, multiplier) {
  event.remove({output: output})
  event.shapeless(`${multiplier}x ${output}`,[
    {
      type: 'tfc:fluid_item',
      "fluid_ingredient": {
      "ingredient": fluid,
      "amount": amount}
    },
    input
  ]).id(`kubejs:${output.replace(`:`,`/`)}_1_manual_only`)
  event.shapeless(`${multiplier * 2}x ${output}`,[
    {
      type: 'tfc:fluid_item',
      "fluid_ingredient": {
      "ingredient": fluid,
      "amount": amount}
    },
    input,
    input
  ]).id(`kubejs:${output.replace(`:`,`/`)}_2_manual_only`)
  event.shapeless(`${multiplier * 3}x ${output}`,[
    {
      type: 'tfc:fluid_item',
      "fluid_ingredient": {
      "ingredient": fluid,
      "amount": amount}
    },
    input,
    input,
    input
  ]).id(`kubejs:${output.replace(`:`,`/`)}_3_manual_only`)
  event.shapeless(`${multiplier *4}x ${output}`,[
    {
      type: 'tfc:fluid_item',
      "fluid_ingredient": {
      "ingredient": fluid,
      "amount": amount}
    },
    input,
    input,
    input,
    input
  ]).id(`kubejs:${output.replace(`:`,`/`)}_4_manual_only`)
  event.shapeless(`${multiplier * 5}x ${output}`,[
    {
      type: 'tfc:fluid_item',
      "fluid_ingredient": {
      "ingredient": fluid,
      "amount": amount}
    },
    input,
    input,
    input,
    input,
    input
  ]).id(`kubejs:${output.replace(`:`,`/`)}_5_manual_only`)
  event.shapeless(`${multiplier * 6}x ${output}`,[
    {
      type: 'tfc:fluid_item',
      "fluid_ingredient": {
      "ingredient": fluid,
      "amount": amount}
    },
    input,
    input,
    input,
    input,
    input,
    input
  ]).id(`kubejs:${output.replace(`:`,`/`)}_6_manual_only`)
  event.shapeless(`${multiplier * 7}x ${output}`,[
    {
      type: 'tfc:fluid_item',
      "fluid_ingredient": {
      "ingredient": fluid,
      "amount": amount}
    },
    input,
    input,
    input,
    input,
    input,
    input,
    input
  ]).id(`kubejs:${output.replace(`:`,`/`)}_7_manual_only`)
  event.shapeless(`${multiplier * 8}x ${output}`,[
    {
      type: 'tfc:fluid_item',
      "fluid_ingredient": {
      "ingredient": fluid,
      "amount": amount}
    },
    input,
    input,
    input,
    input,
    input,
    input,
    input,
    input
  ]).id(`kubejs:${output.replace(`:`,`/`)}_8_manual_only`)
  event.recipes.createMixing(`${multiplier}x ${output}`,[
    Fluid.of(fluid, amount),
    input
  ]).id(`kubejs:${output.replace(':','/')}_mixer`)
}

  let grains = [
      "barley",
      "maize",
      "oat",
      "rye",
      "rice",
      "wheat"
    ]

  grains.forEach (grain => {
      event.remove({output: `firmalife:food/${grain}_dough`})
      event.shapeless(`4x firmalife:food/${grain}_dough`,[
        {
          type: 'tfc:fluid_item',
          "fluid_ingredient": {
          "ingredient": "firmalife:yeast_starter",
          "amount": 100}
        },
        {
          type: "tfc:not_rotten",
          "ingredient": {
          "item": `tfc:food/${grain}_flour`}
        },
        "#firmalife:sweetener"
        ])
        .id(`kubejs:food/${grain}_dough_manual_only`)
      event.recipes.createMixing(`4x firmalife:food/${grain}_dough`,[
          Fluid.of('firmalife:yeast_starter',100),
          {
            type: "tfc:not_rotten",
            "ingredient": {
            "item": `tfc:food/${grain}_flour`
          }},
          "#firmalife:sweetener"
        ])
        .id(`kubejs:food/${grain}_dough_mixer`)
      tfcbuckets(`tfc:food/${grain}_dough`,'minecraft:water', 100, {
        type: "tfc:not_rotten",
        "ingredient": {
        "item": `tfc:food/${grain}_flour`
      }},2)
    })

  tfcbuckets(`firmalife:food/masa`, `minecraft:water`, 100, {
    type: "tfc:not_rotten",
    "ingredient": {
    "item": `firmalife:food/masa_flour`
  }},2)
  
  let dirts = [
    "silt",
    "loam",
    "sandy_loam",
    "silty_loam"
  ]
  dirts.forEach(dirt => {
    tfcbuckets(`tfc:mud/${dirt}`, 'minecraft:water', 100, `tfc:dirt/${dirt}`, 1)
  })
  event.remove({output: 'firmalife:watering_can'})
  event.shapeless('firmalife:watering_can',[
    {
      "type": "tfc:fluid_item",
      "fluid_ingredient": {
        "ingredient": "minecraft:water",
        "amount": 1000
      }
    },
    'tfc:wooden_bucket','#tfc:lumber'
  ]).id('kubejs:firmalife_watering_can_manual_only')
  event.recipes.createMixing(`firmalife:watering_can`,[
    Fluid.of('minecraft:water',1000),'tfc:wooden_bucket','#tfc:lumber'])
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')
let candles =[
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
    event.get('forge:seeds').removeAll().add('#tfc:seeds')
    event.get('minecraft:candles').removeAll()
    event.get('minecraft:candles').add('tfc:candle')
    candles.forEach(candle =>{
    event.get('minecraft:candles').add(`tfc:candle/${candle}`)
    })
    event.get('forge:wax').add('firmalife:beeswax')
    event.get('apotheosis:boon_drops').removeAll().add('#tfc:ore_pieces').add('#forge:nuggets/lead')
    event.get('minecraft:fishes').remove(['minecraft:cod', 'minecraft:salmon', 'minecraft:tropical_fish', 'minecraft:pufferfish','minecraft:cooked_cod', 'minecraft:cooked_salmon'])

    event.get('forge:fishing_rods').remove('minecraft:fishing_rod')

    event.get('forge:ingots/iron').add('tfc:metal/ingot/wrought_iron')
    event.get('forge:raw_materials/aluminum').add('tfc:ore/cryolite')
    event.get('forge:magma').add('tfc:rock/magma/basalt')
    event.get('forge:magma').add('tfc:rock/magma/granite')
    event.get('forge:magma').add('tfc:rock/magma/diorite')
    event.get('forge:magma').add('tfc:rock/magma/gabbro')
    event.get('forge:magma').add('tfc:rock/magma/gabbro')
    event.get('forge:magma').add('tfc:rock/magma/rhyolite')
    event.get('forge:magma').add('tfc:rock/magma/andesite')
    event.get('forge:magma').add('tfc:rock/magma/dacite')
    event.get('forge:treated_lumber').add('firmalife:treated_lumber')
    event.get('forge:treated_lumber').add('#forge:treated_wood')
    event.get('forge:rods/iron').add('#forge:rods/wrought_iron')
    event.get('forge:cinnabar').add(['tfc:ore/cinnabar', 'thermal:cinnabar'])
    event.get('forge:dusts/saltpeter').add('tfc:powder/saltpeter')

    event.get('forge:cokesourcez').add(['minecraft:coal', 'tfc:ore/lignite', 'tfc:ore/bituminous_coal'])

    event.get('forge:cokesource').add(['tfc:ore/lignite', 'tfc:ore/bituminous_coal'])
    event.get('tfc:axes').add('bloodmagic:soulaxe')



    event.get('forge:slimeballs').add('tfc:glue')
    event.get('forge:melon').add('minecraft:melon')
    event.get('forge:melon').add('tfc:melon')

    event.get('forge:bottle').add("minecraft:glass_bottle")
    event.get('forge:bottle').add("firmalife:empty_jar")

    event.get('forge:poppies').add(['minecraft:poppy', 'tfc:plant/poppy'])
    event.get('forge:dandelions').add(['minecraft:dandelion', 'tfc:plant/dandelion'])
    event.get('forge:blue_orchids').add(['minecraft:blue_orchid', 'tfc:plant/blue_orchid'])
    event.get('forge:allium').add(['minecraft:allium', 'tfc:plant/allium'])
    event.get('forge:oxeye_daisy').add(['minecraft:oxeye_daisy', 'tfc:plant/oxeye_daisy'])
    event.get('forge:orange_tulip').add(['minecraft:orange_tulip', 'tfc:plant/tulip_orange'])
    event.get('forge:pink_tulip').add(['minecraft:pink_tulip', 'tfc:plant/tulip_pink'])
    event.get('forge:white_tulip').add(['minecraft:white_tulip', 'tfc:plant/tulip_white'])
    event.get('forge:red_tulip').add(['minecraft:red_tulip', 'tfc:plant/tulip_red'])


    event.get('forge:sandstone').add('tfc:raw_sandstone/brown')
    event.get('forge:sandstone').add('tfc:raw_sandstone/white')
    event.get('forge:sandstone').add('tfc:raw_sandstone/black')
    event.get('forge:sandstone').add('tfc:raw_sandstone/red')
    event.get('forge:sandstone').add('tfc:raw_sandstone/yellow')
    event.get('forge:sandstone').add('tfc:raw_sandstone/green')
    event.get('forge:sandstone').add('tfc:raw_sandstone/pink')
    event.get('forge:ores').add('#tfc:ore_pieces')
    event.get('forge:gems/amethyst').add('tfc:gem/amethyst')
    event.get('forge:cocoa_beans').add('minecraft:cocoa_beans')
    event.get('forge:cocoa_beans').add('firmalife:food/roasted_cocoa_beans')
    event.get('forge:carrots').add(['tfc:food/carrot', 'minecraft:carrot'])


    event.get('forge:cake').add(['minecraft:cake', 'tfc:cake'])

    let corals =[
    "tube",
    "brain",
    "bubble",
    "fire",
    "horn"
    ]

    corals.forEach(coral => {
        event.get('tfc:corals').add(`tfc:coral/${coral}_coral`)
    })

    let woodTypes =[
    "ash",
    "aspen",
    "blackwood",
    "chestnut",
    "douglas_fir",
    "hickory",
    "kapok",
    "maple",
    "palm",
    "pine",
    "rosewood",
    "sequoia",
    "sycamore",
    "white_cedar",
    "willow"
    ]

    let vanwoodTypes =[
    "acacia",
    "birch",
    "oak",
    "spruce"
    ]

    vanwoodTypes.forEach(wood => {
    event.get('forge:bookshelves').add(`tfc:wood/planks/${wood}_bookshelf`)
    event.get('forge:bookshelves').add(`mcwfurnitures:${wood}_bookshelf`)
    event.get('forge:bookshelves').add(`mcwfurnitures:${wood}_bookshelf_cupboard`)
    event.get('forge:bookshelves').add(`mcwfurnitures:${wood}_bookshelf_drawer`)
    event.get('forge:bookshelves').add(`mcwfurnitures:${wood}_lower_bookshelf_drawer`)
    })

    woodTypes.forEach(wood => {
    event.get('forge:bookshelves').add(`tfc:wood/planks/${wood}_bookshelf`)
    event.get('forge:bookshelves').add(`mcw_tfc_furn:${wood}_bookshelf`)
    event.get('forge:bookshelves').add(`mcw_tfc_furn:${wood}_bookshelf_cupboard`)
    event.get('forge:bookshelves').add(`mcw_tfc_furn:${wood}_bookshelf_drawer`)
    event.get('forge:bookshelves').add(`mcw_tfc_furn:${wood}_lower_bookshelf_drawer`)
    })

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
    event.get('minecraft:anvil').add('#tfc:anvils')

    event.get('minecraft:mineable/axe').add(['craftingstation:crafting_station_slab', 'craftingstation:crafting_station'])
})
onEvent('fluid.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')


   event.get('minecraft:water').removeAll().add([/^(minecraft|tfc):.*water$/])


    event.get('forge:crude_oil').add('beyond_earth:oil')
    event.get('beyond_earth:vehicle_fuel').add('thermal:refined_fuel')
    event.get('tfc:usable_in_barrel').add('immersiveengineering:creosote')
    event.get('forge:chocolate').add('firmalife:chocolate')
    event.get('forge:milk').removeAll().add(["firmalife:yak_milk", "firmalife:goat_milk", "firmalife:coconut_milk"])
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
  const {level, entity} = event
  if (entity.type == "minecraft:item" && entity.item == "minecraft:chest") {
    console.log("Spawn")
    entity.setItem("tfc:wood/chest/oak")
  }
  if (entity.type == "minecraft:item" && entity.item == "minecraft:barrel") {
    console.log("Spawn")
    entity.setItem("tfcbarrels:wood/barrel/oak")
  }
  let dimension = level.getDimension()
  if (dimension == "beyond_earth:mercury") {
    if (entity.isLiving() && !entity.isPlayer()) {
      entity.setHeadArmorItem('beyond_earth:netherite_oxygen_mask')
      entity.setChestArmorItem(Item.of('beyond_earth:netherite_space_suit', '{Damage:0,Energy:48000}'))
      entity.setLegsArmorItem('beyond_earth:netherite_space_pants')
      entity.setFeetArmorItem('beyond_earth:netherite_space_boots')
    }
  }
})

const WaterBottleSources = ['minecraft:water', 'tfc:fluid/spring_water', 'tfc:fluid/river_water', 'tfc:fluid/salt_water']

onEvent('item.right_click', event => {
    const { item, hand, player } = event
    if (item != 'firmalife:empty_jar' || hand != 'main_hand') return;
    let result = player.rayTrace(event.player.reachDistance)
    if (result.type == 'block') {
        if (WaterBottleSources.includes(result.block.id)) {
            item.count--
            player.give(Item.of('minecraft:potion', { Potion: 'minecraft:water' }))
        }
    }
})

