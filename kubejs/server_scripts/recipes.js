//priority: 850
console.log("recipes functions loading ...");

const removeRecipes = (recipesEvent) => {
		recipesEvent.remove({output: "ae2:vibration_chamber", mod:"ae2"})
		recipesEvent.remove({id: /allthemodium.*/})
		recipesEvent.remove({id: /vibranium.*/})
		recipesEvent.remove({id: /unobtainium.*/})
		
		// Removing vanilla woods so it doesn't duplicate with Macaw TFC Compat
		recipesEvent.remove({id: /[stripped_]*acacia.*/, mod:"mcwfurnitures"})
		recipesEvent.remove({id: /[stripped_]*birch.*/, mod:"mcwfurnitures"})
		recipesEvent.remove({id: /^mcwfurnitures:stripped_oak.*/, mod:"mcwfurnitures"})
		recipesEvent.remove({id: /^mcwfurnitures:oak.*/, mod:"mcwfurnitures"})
		// recipesEvent.remove({id: /[stripped_]*dark_oak.*/, mod:"mcwfurnitures"}) // Easily obtainable at blood magic dungeons
		recipesEvent.remove({id: /[stripped_]*jungle.*/, mod:"mcwfurnitures"})
		recipesEvent.remove({id: /[stripped_]*spruce.*/, mod:"mcwfurnitures"})
		
		// Removing Ex Nihilo Sequentia recipes but emerald + netherite mesh & planet sands
		recipesEvent.remove({type: "exnihilosequentia:compost"})
		recipesEvent.remove({type: "exnihilosequentia:crook"})
		recipesEvent.remove({type: "exnihilosequentia:crucible"})
		recipesEvent.remove({type: "exnihilosequentia:fluid_item"})
		recipesEvent.remove({type: "exnihilosequentia:fluid_on_top"})
		recipesEvent.remove({type: "exnihilosequentia:fluid_transform"})
		recipesEvent.remove({type: "exnihilosequentia:heat"})
		recipesEvent.remove({id: /.*ens_.*/ ,type: "exnihilosequentia:sieve"})
		recipesEvent.remove({id: /.*ens_.*/ ,type: "exnihilosequentia:hammer"})
		recipesEvent.remove({mod: "exnihilosequentia", type: "minecraft:crafting_shapeless"})
		recipesEvent.remove({mod: "exnihilosequentia", type: "minecraft:crafting_shaped", not: {id:/.*ens_emerald_mesh/}})
		recipesEvent.remove({mod: "exnihilosequentia", type: "minecraft:smithing", not: {id:/.*ens_netherite_mesh/}})
		recipesEvent.remove({mod: "exnihilosequentia", type: "minecraft:smelting"})
		recipesEvent.remove({mod: "exnihilosequentia", type: "minecraft:blasting"})
		recipesEvent.remove({mod: "exnihilosequentia", input: "exnihilosequentia:silkworm"})
		recipesEvent.remove({id: /minecraft:ens_.*/})

		recipesEvent.remove({id: "create:honey_bucket"})
		recipesEvent.remove({id: "minecraft:smoker"})
		recipesEvent.remove({id: "minecraft:blast_furnace"})
		recipesEvent.remove({id: "minecraft:furnace_minecart"})
		recipesEvent.remove({id: "beyond_earth:coal_generator"})
		recipesEvent.remove({id: "beyond_earth:compressor"})
		recipesEvent.remove({id: "beyond_earth:fuel_refinery"})
		recipesEvent.remove({id: /beyond_earth:coal_generating.*/})
		recipesEvent.remove({id: /beyond_earth:compressing.*/})
		recipesEvent.remove({id: /beyond_earth:fuel_refining.*/})

		recipesEvent.remove({id: "minecraft:stone_brick_wall"})
		recipesEvent.remove({id: "minecraft:stone_brick_slab"})
		recipesEvent.remove({id: "minecraft:stone_brick_stairs"})
		recipesEvent.remove({id: "minecraft:stone_slab"})

		recipesEvent.remove({id: "beyond_earth:compressing/compressed_desh"})
		recipesEvent.remove({id: "beyond_earth:compressing/compressed_ostrum"})
		recipesEvent.remove({id: "beyond_earth:compressing/compressed_calorite"})
		
		recipesEvent.remove({id: "beyond_earth:steel_ingot_blasting"})
		recipesEvent.remove({id: "immersiveengineering:smelting/ingot_steel_from_dust_from_blasting"})
		recipesEvent.remove({id: "immersiveengineering:smelting/ingot_steel_from_dust"})
		recipesEvent.remove({id: "minecraft:honey_bottle"})
		recipesEvent.remove({id: "minecraft:honeycomb_block"})
		recipesEvent.remove({id: "minecraft:honey_block"})
		recipesEvent.remove({id: "tombstone:white_marble"})
		recipesEvent.remove({output: Item.of("tombstone:fishing_rod_of_misadventure").ignoreNBT()})
		recipesEvent.remove({id: "comforts:rope_and_nail_shapeless"})
		
		recipesEvent.remove({id: "thermal:machines/insolator/insolator_potato"})
		recipesEvent.remove({id: "thermal:machines/insolator/insolator_pumpkin"})
		recipesEvent.remove({id: "thermal:machines/insolator/insolator_melon"})
		recipesEvent.remove({id: "thermal:machines/insolator/insolator_carrot"})
		recipesEvent.remove({type: "thermal:stirling_fuel"})
		recipesEvent.remove({type: "thermal:compression_fuel"})
		recipesEvent.remove({type: "thermal:magmatic_fuel"})
		recipesEvent.remove({type: "thermal:numismatic_fuel"})
		recipesEvent.remove({type: "thermal:lapidary_fuel"})
		recipesEvent.remove({type: "thermal:disenchantment_fuel"})
		recipesEvent.remove({type: "thermal:gourmand_fuel"})

		recipesEvent.remove({id: "thermal:machines/insolator/insolator_dark_oak_sapling"})
		recipesEvent.remove({id: "thermal:machines/insolator/insolator_jungle_sapling"})
		
		recipesEvent.remove({id: "immersiveengineering:cloche/melon"})
		recipesEvent.remove({id: "immersiveengineering:cloche/pumpkin"})
		recipesEvent.remove({id: "immersiveengineering:cloche/potato"})
		
		recipesEvent.remove({id: /thermal:storage\/.*_from_block$/})
		recipesEvent.remove({id: "immersiveposts:has_copper_rod"})
		recipesEvent.remove({id: "immersiveposts:has_lead_rod"})
		recipesEvent.remove({id: "immersiveposts:has_gold_rod"})
		recipesEvent.remove({id: "immersiveposts:has_electrum_rod"})
		recipesEvent.remove({id: "immersiveposts:has_constantan_rod"})
		recipesEvent.remove({id: "immersiveposts:has_uranium_rod"})
		recipesEvent.remove({id: "immersiveposts:has_silver_rod"})
		recipesEvent.remove({id: "immersiveposts:has_nickel_rod"})
		
		recipesEvent.remove({id: "minecraft:minecart"})
		recipesEvent.remove({id: "minecraft:ens_ancient_debris"})
		recipesEvent.remove({id: "immersiveengineering:jei_bucket_fuel"})
		recipesEvent.remove({id: "immersiveengineering:jei_bucket_sea_water"})
		recipesEvent.remove({id: "create:crafting/materials/andesite_alloy"})
		recipesEvent.remove({type: "enderstorage:recolour_recipe"})
		
		recipesEvent.remove({id: "create:mixing/andesite_alloy_from_zinc"})
		recipesEvent.remove({id: "create:mixing/andesite_alloy"})
		recipesEvent.remove({id: "thermal:machines/press/unpacking/press_wheat_unpacking"})
		recipesEvent.remove({id: "thermal:storage/cured_rubber_block"})
		recipesEvent.remove({id: "minecraft:sugar_from_honey_bottle"})
		
		recipesEvent.remove({id: "minecraft:stone_bricks"})
		recipesEvent.remove({id: /bloodmagic:.*telepos.*/})
		recipesEvent.remove({id: "create:mixing/chocolate_melting"})
		recipesEvent.remove({id: "biggerreactors:smelting/graphite_ingot"})

		recipesEvent.remove({input: "#forge:ores/apatite"})


		const materials = ["oak", "birch", "dark_oak", "spruce", "acacia", "jungle"] // andesite, granite and diorite are obtainable
		const roofTypes = ["roof", "attic_roof", "top_roof", "lower_roof", "steep_roof", "upper_lower_roof", "upper_steep_roof"]
		for (const woodType of vanillaWoodTypes) {
				recipesEvent.replaceInput({id: `create:${woodType}_window`}, `minecraft:${woodType}_planks`, `tfc:wood/planks/${woodType}`)
				recipesEvent.remove({id: `thermal:machines/insolator/insolator_${woodType}_sapling`})
		}
		for (const material of materials) {
				recipesEvent.remove({id: `create:cutting/${material}_wood`})
				recipesEvent.remove({id: `create:cutting/stripped_${material}_wood`})
				recipesEvent.remove({id: `create:cutting/stripped_${material}_log`})
				recipesEvent.remove({id: `immersiveengineering:sawmill/${material}_log`})
				recipesEvent.remove({id: `immersiveengineering:sawmill/${material}_stairs`})
				recipesEvent.remove({id: `immersiveengineering:sawmill/${material}_door`})
				recipesEvent.remove({id: `immersiveengineering:sawmill/stripped_${material}_log`})
				for (const roofType of roofTypes) {
						recipesEvent.remove({id: `mcwroofs:${material}_${roofType}`})
						recipesEvent.remove({id: `mcwroofs:${material}_planks_${roofType}`}) // some uses _planks_
				}
		}

		const noCAPressMetals = [
				"aluminum",
				"lead",
				"silver",
				"nickel",
				"uranium",
				"constantan",
				"electrum",
				"steel"
		]

		for (const vanillaWood of vanillaWoodTypes) {
				recipesEvent.remove({id: `minecraft:${vanillaWood}_sign`})
				recipesEvent.remove({id: `thermal:machines/sawmill/sawmill_${vanillaWood}_logs`})
		}
		recipesEvent.remove({id: "immersivepetroleum:candle"})
		recipesEvent.remove({id: "minecraft:candle"})
		recipesEvent.remove({id: "firmalife:crafting/bee_candle"})
		for (const ingot of noCAPressMetals) {
				recipesEvent.remove({id: `createaddition:pressing/${ingot}_ingot`})
		}
		// drawers related
		recipesEvent.remove({output: "#storagedrawers:drawers"})
		for (const woodType of vanillaWoodTypes) {
				console.log(`removing storagedrawers:${woodType}_trim`)
				recipesEvent.remove({output: `storagedrawers:${woodType}_trim`})
		}

		// Removing vanilla kelp
		recipesEvent.remove({input: "minecraft:kelp", not: {id: "integrateddynamics:special/facade"}})
		recipesEvent.remove({id: "integrateddynamics:drying_basin/convenience/minecraft_dried_kelp"})
		recipesEvent.remove({id: "integrateddynamics:mechanical_drying_basin/convenience/minecraft_dried_kelp"})

		// Removing vanilla dye recipes from ID Squeezer and create mill
		recipesEvent.remove({id: /minecraft_dye_.*/, mod:"integrateddynamics"})
		recipesEvent.remove({output: /minecraft:.*_dye/, type:"create:milling"})

		// Removing raw ore recipes from ID
		recipesEvent.remove({id: /raw_.*/, mod:"integrateddynamics"})

		recipesEvent.remove({id: /gem_[diamond|emerald|lapis]/, mod:"integrateddynamics"})
		recipesEvent.remove({id: /.*coal_generator/, mod:"integrateddynamics"})

		// Removing AE2 tools
		const tools = ["hoe", "axe", "shovel", "pickaxe", "spade"]
		const materialsAe2 = ["fluix", "nether_quartz", "certus_quartz"]
		materialsAe2.forEach(materialAe2 => {
			tools.forEach(tool =>{
				recipesEvent.remove({id: `ae2:tools/${materialAe2}_${tool}`})
			})
		})
	}

const setRecipes = (recipesEvent) => {
		console.log("Loading recipes...");
		// first remove unneeded ones....
		removeRecipes(recipesEvent);
		addClocheRecipe(recipesEvent, "tfc:food/carrot", "2", "tfc:seeds/carrot", "#tfc:dirt", "tfc:wild_crop/carrot", 800)
		addClocheRecipe(recipesEvent, "tfc:food/onion", "2", "tfc:seeds/onion", "#tfc:dirt", "tfc:wild_crop/onion", 800)
		addClocheRecipe(recipesEvent, "tfc:food/squash", "2", "tfc:seeds/squash", "#tfc:dirt", "tfc:wild_crop/squash", 800)
		addClocheRecipe(recipesEvent, "tfc:food/garlic", "2", "tfc:seeds/garlic", "#tfc:dirt", "tfc:wild_crop/garlic", 800)
		addClocheRecipe(recipesEvent, "tfc:food/maize", "2", "tfc:seeds/maize", "#tfc:dirt", "tfc:wild_crop/maize", 1550)
		addClocheRecipe(recipesEvent, "tfc:food/cabbage", "2", "tfc:seeds/cabbage", "#tfc:dirt", "tfc:wild_crop/cabbage", 1500)
		addClocheRecipe(recipesEvent, "tfc:food/potato", "2", "tfc:seeds/potato", "#tfc:dirt", "tfc:wild_crop/potato", 1450)
		addClocheRecipe(recipesEvent, "tfc:food/tomato", "2", "tfc:seeds/tomato", "#tfc:dirt", "tfc:wild_crop/tomato", 1400)
		addClocheRecipe(recipesEvent, "tfc:food/beet", "2", "tfc:seeds/beet", "#tfc:dirt", "tfc:wild_crop/beet", 1350)
		addClocheRecipe(recipesEvent, "tfc:food/soybean", "2", "tfc:seeds/soybean", "#tfc:dirt", "tfc:wild_crop/soybean", 1300)
		addClocheRecipe(recipesEvent, "tfc:food/green_bean", "2", "tfc:seeds/green_bean", "#tfc:dirt", "tfc:wild_crop/green_bean", 1250)
		addClocheRecipe(recipesEvent, "tfc:jute", "2", "tfc:seeds/jute", "#tfc:dirt", "tfc:wild_crop/jute", 1800)
		addClocheRecipe(recipesEvent, "tfc:food/sugarcane", "2", "tfc:seeds/sugarcane", "#tfc:dirt", "tfc:wild_crop/sugarcane", 1800)
		addClocheRecipe(recipesEvent, "tfc:food/barley", "2", "tfc:seeds/barley", "#tfc:dirt", "tfc:wild_crop/barley", 1650)
		addClocheRecipe(recipesEvent, "tfc:food/oat", "2", "tfc:seeds/oat", "#tfc:dirt", "tfc:wild_crop/oat", 1700)
		addClocheRecipe(recipesEvent, "tfc:food/rye", "2", "tfc:seeds/rye", "#tfc:dirt", "tfc:wild_crop/rye", 1700)
		addClocheRecipe(recipesEvent, "tfc:food/wheat", "2", "tfc:seeds/wheat", "#tfc:dirt", "tfc:wild_crop/wheat", 1700)
		addClocheRecipe(recipesEvent, "tfc:food/rice", "2", "tfc:seeds/rice", "#tfc:dirt", "tfc:wild_crop/rice", 1750)
		addClocheRecipe(recipesEvent, "tfc:melon", "2", "tfc:seeds/melon", "#tfc:dirt", "tfc:wild_crop/melon", 1600)
		addClocheRecipe(recipesEvent, "tfc:pumpkin", "2", "tfc:seeds/pumpkin", "#tfc:dirt", "tfc:wild_crop/pumpkin", 1600)

		recipesEvent.replaceInput({id: "create:jungle_window"}, "minecraft:jungle_planks", "tfc:wood/planks/palm")
		recipesEvent.replaceInput({id: "create:dark_oak_window"}, "minecraft:dark_oak_planks", "tfc:wood/planks/hickory")

		recipesEvent.replaceInput({type: "minecraft:crafting_shaped", mod: "create"}, "minecraft:oak_planks", "#minecraft:planks")
		recipesEvent.replaceInput({input: "minecraft:cobblestone", mod: "create"}, "minecraft:cobblestone", "#forge:cobblestone/normal")
		recipesEvent.replaceInput({input: "minecraft:smooth_stone", mod: "create"}, "minecraft:smooth_stone", "#tfc:rock/smooth")
		recipesEvent.replaceInput({input: "minecraft:stone_slab"}, "minecraft:stone_slab", "#tfc:raw_rock_slabs")
		recipesEvent.replaceInput({input: "minecraft:deepslate", mod: "supercircuitmaker"}, "minecraft:deepslate", "#tfc:rock/smooth")

		recipesEvent.recipes.thermal.insolator([Item.of("tfc:jute").withChance(2), Item.of("tfc:seeds/jute").withChance(1.1)], "tfc:seeds/jute").water(900)

		const bushes = [
			"snowberry",
			"bunchberry",
			"gooseberry",
			"cloudberry",
			"strawberry",
			"wintergreen_berry",
			"cranberry",
			"blackberry",
			"raspberry",
			"blueberry",
			"elderberry"
		]
		for (const bush of bushes) {
			addClocheRecipe(recipesEvent,`tfc:food/${bush}`, "2", `tfc:plant/${bush}_bush`, "#tfc:dirt", `tfc:food/${bush}_bush`, 1500)
		}

		addClocheRecipe(recipesEvent,"firmalife:food/nightshade_berry", "2", "firmalife:plant/nightshade_bush", "#tfc:dirt", "firmalife:plant/nightshade_bush", 1500)
		addClocheRecipe(recipesEvent,"firmalife:food/pineapple", "2", "firmalife:plant/pineapple_bush", "#tfc:dirt", "firmalife:plant/pineapple_bush", 1500)

		const fruitTrees = [
			"cherry",
			"green_apple",
			"lemon",
			"olive",
			"orange",
			"peach",
			"plum",
			"red_apple",
			"banana"
		]
		for (const fruitTree of fruitTrees) {
			addClocheRecipe(recipesEvent,`tfc:food/${fruitTree}`, "2", `tfc:plant/${fruitTree}_sapling`, "#tfc:dirt", `tfc:food/${fruitTree}_sapling`, 2500)
		}

		addClocheRecipe(recipesEvent,"firmalife:food/cocoa_beans", "2", "firmalife:plant/cocoa_sapling", "#tfc:dirt", "firmalife:plant/cocoa_sapling", 2500)
		addClocheRecipe(recipesEvent,"firmalife:food/fig", "2", "firmalife:plant/fig_sapling", "#tfc:dirt", "firmalife:plant/fig_sapling", 2500)

		const gemStones = [
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
		for (const gem of gemStones) {
				recipesEvent.shapeless(`tfc:gem/${gem}`, [
						Ingredient.of(`tfc:ore/${gem}`),
						Ingredient.of(`create:sand_paper`)
				])
		}

		const ferns = [
				"king",
				"lady",
				"licorice",
				"ostrich",
				"sword",
				"tree"
		]
		for (const fern of ferns) {
				recipesEvent.custom({
						type: "create:crushing",
						ingredients: [
								Ingredient.of(`tfc:plant/${fern}_fern`).toJson()
						],
						results: [
								Item.of('2x minecraft:green_dye').toResultJson(),
								Item.of("minecraft:green_dye").withChance(0.5).toResultJson()
						],
						processingTime: 100
				})
		}

		const logs = vanillaWoodTypes.concat(tfcWoodTypes)

		let plankOutput = ''; // this should be filed as a bug on kubejs because it doesn't allow declaration of block level vars inside for.
		// probably related to their JS engine.
		const secondary = [
				{"output": {"tag": "forge:dusts/wood"}, "stripping": false},
				{"output": {"tag": "forge:dusts/wood"}, "stripping": true}
		]
		for (const log of logs) {
				plankOutput = `6x tfc:wood/planks/${log}`;
				recipesEvent.recipes.immersiveengineeringSawmill(plankOutput, Item.of(`tfc:wood/log/${log}`), secondary, Item.of(`tfc:wood/stripped_log/${log}`))
				recipesEvent.recipes.immersiveengineeringSawmill(plankOutput, Item.of(`tfc:wood/stripped_log/${log}`), secondary)
				recipesEvent.recipes.immersiveengineeringSawmill(plankOutput, Item.of(`tfc:wood/wood/${log}`), secondary, Item.of(`tfc:wood/stripped_wood/${log}`))
				recipesEvent.recipes.immersiveengineeringSawmill(`4x tfc:wood/lumber/${log}`, `tfc:wood/planks/${log}`, );

				recipesEvent.recipes.thermal.sawmill([Item.of('#forge:dusts/wood').withChance(1.25), plankOutput], `tfc:wood/stripped_wood/${log}`)
				recipesEvent.recipes.thermal.sawmill([Item.of('#forge:dusts/wood').withChance(1.25), `tfc:wood/stripped_wood/${log}`], `tfc:wood/wood/${log}`)
				recipesEvent.recipes.thermal.sawmill([Item.of('#forge:dusts/wood').withChance(1.25), `4x tfc:wood/lumber/${log}`], `tfc:wood/planks/${log}`)

				recipesEvent.recipes.createCutting([Item.of(`tfc:wood/stripped_log/${log}`), Item.of('#forge:dusts/wood').withChance(0.25)], Item.of(`tfc:wood/log/${log}`))
				recipesEvent.recipes.createCutting([plankOutput, Item.of('#forge:dusts/wood').withChance(0.25)], Item.of(`tfc:wood/stripped_log/${log}`))
				recipesEvent.recipes.createCutting([`4x tfc:wood/lumber/${log}`, Item.of('#forge:dusts/wood').withChance(0.25)], `tfc:wood/planks/${log}`)

				recipesEvent.recipes.thermal.insolator([Item.of(`tfc:wood/log/${log}`).withChance(4),Item.of(`tfc:wood/sapling/${log}`).withChance(1.1),Item.of(`tfc:wood/twig/${log}`).withChance(2)],`tfc:wood/sapling/${log}`).water(1000)
		}

		recipesEvent
				.custom({
						"type": "create:crushing",
						"ingredients": [
								Ingredient.of("apotheosis:gem")
						],
						"results": [{item: "apotheosis:gem_dust"}],
						"processingTime": 400
				})
				.id(`kubejs:crushing/gem_dust`)

		recipesEvent.recipes.createPressing("tfc:refined_iron_bloom", Ingredient.of("tfc:raw_iron_bloom").ignoreNBT())
		recipesEvent.recipes.createPressing("tfc:metal/ingot/wrought_iron", Ingredient.of("tfc:refined_iron_bloom").ignoreNBT())

		const sheetAndDoubleIngotMetals = [
				"copper",
				"silver",
				"sterling_silver",
				"nickel",
				"steel",
				"gold",
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
		const mold = "immersiveengineering:mold_plate";
		for (const sheetMetal of sheetAndDoubleIngotMetals) {
				console.log(`Setting up ${sheetMetal}`);
				recipesEvent.recipes.immersiveengineeringMetalPress(Ingredient.of(`tfc:metal/sheet/${sheetMetal}`).ignoreNBT(), Ingredient.of(`tfc:metal/double_ingot/${sheetMetal}`).ignoreNBT(), mold)
				recipesEvent.recipes.immersiveengineeringArcFurnace(Ingredient.of(`tfc:metal/double_sheet/${sheetMetal}`).ignoreNBT(), Ingredient.of(`tfc:metal/sheet/${sheetMetal}`).ignoreNBT(), Ingredient.of(`tfc:metal/sheet/${sheetMetal}`).ignoreNBT())
				recipesEvent.recipes.immersiveengineeringArcFurnace(Ingredient.of(`tfc:metal/double_ingot/${sheetMetal}`).ignoreNBT(), Ingredient.of(`tfc:metal/ingot/${sheetMetal}`).ignoreNBT(), Ingredient.of(`tfc:metal/ingot/${sheetMetal}`).ignoreNBT())
		}

		recipesEvent.recipes.immersiveengineeringMetalPress(`firmalife:metal/sheet/chromium`, Ingredient.of(`firmalife:metal/double_ingot/chromium`).ignoreNBT(), "immersiveengineering:mold_plate")
		recipesEvent.recipes.immersiveengineeringArcFurnace(`firmalife:metal/double_sheet/chromium`, Ingredient.of(`firmalife:metal/sheet/chromium`).ignoreNBT(), Ingredient.of(`firmalife:metal/sheet/chromium`).ignoreNBT())
		recipesEvent.recipes.immersiveengineeringMetalPress(`firmalife:metal/sheet/stainless_steel`, Ingredient.of(`firmalife:metal/double_ingot/stainless_steel`).ignoreNBT(), "immersiveengineering:mold_plate")
		recipesEvent.recipes.immersiveengineeringArcFurnace(`firmalife:metal/double_sheet/stainless_steel`, Ingredient.of(`firmalife:metal/sheet/stainless_steel`).ignoreNBT(), Ingredient.of(`firmalife:metal/sheet/stainless_steel`).ignoreNBT())
		recipesEvent.recipes.immersiveengineeringArcFurnace(`firmalife:metal/double_ingot/stainless_steel`, Ingredient.of(`firmalife:metal/ingot/stainless_steel`).ignoreNBT(), Ingredient.of(`firmalife:metal/ingot/stainless_steel`).ignoreNBT())

		const rodMetals = [
				"bismuth",
				"bismuth_bronze",
				"black_bronze",
				"sterling_silver",
				"cast_iron",
				"black_steel",
				"blue_steel",
				"red_steel"
		]
		for (const rodMetal of rodMetals) {
				recipesEvent.recipes.immersiveengineeringMetalPress(`2x tfc:metal/rod/${rodMetal}`, Ingredient.of(`tfc:metal/ingot/${rodMetal}`).ignoreNBT(), "immersiveengineering:mold_rod").id(`kubejs:immersivemetalpress/rod/${rodMetal}`)
		}

		recipesEvent.recipes.immersiveengineeringMetalPress(`2x firmalife:metal/rod/chromium`, Ingredient.of(`firmalife:metal/ingot/chromium`).ignoreNBT(), "immersiveengineering:mold_rod")
		recipesEvent.recipes.immersiveengineeringMetalPress(`2x firmalife:metal/rod/stainless_steel`, Ingredient.of(`firmalife:metal/ingot/stainless_steel`).ignoreNBT(), "immersiveengineering:mold_rod")


		const ie_Metals = [
				"aluminum",
				"uranium",
				"steel"
		]
		ie_Metals.forEach(ingot => {
				recipesEvent.recipes.thermal.press(`immersiveengineering:plate_${ingot}`, Ingredient.of(`#forge:ingots/${ingot}`)).id(`kubejs:thermal/press/plate/${ingot}`)
		})
		recipesEvent.recipes.thermal.press("beyond_earth:desh_plate", Ingredient.of("beyond_earth:desh_ingot")).id(`kubejs:thermal/press/plate/desh`)
		recipesEvent.recipes.thermal.press("create:brass_sheet", Ingredient.of("#forge:ingots/brass")).id(`kubejs:thermal/press/plate/brass`)
		recipesEvent.recipes.thermal.press("createaddition:zinc_sheet", Ingredient.of("#forge:ingots/zinc")).id(`kubejs:thermal/press/plate/zinc`)

		const thermalIngots = [
				"tin",
				"bronze",
				"invar"
		]
		for (const ingot of thermalIngots) {
				recipesEvent.recipes.createPressing(`thermal:${ingot}_plate`, Ingredient.of(`#forge:ingots/${ingot}`)).id(`kubejs:create/press/plate/${ingot}`)
		}

		recipesEvent.recipes.thermal.crucible(Fluid.of("minecraft:lava", 1000), "#forge:magma").id(`kubejs:thermal/machines/crucible/tfc_magma_to_lava`)

        for (const stone of tfcStoneTypes) {
				recipesEvent.custom({
						type: "create:crushing",
						ingredients: [
								Ingredient.of(`tfc:rock/cobble/${stone}`).toJson()
						],
						results: [
								Item.of(`tfc:rock/gravel/${stone}`).toResultJson(),
								Item.of(`tfc:rock/gravel/${stone}`).withChance(0.5).toResultJson()
						],
						processingTime: 100
				})
				recipesEvent.recipes.immersiveengineeringCrusher(Item.of(`tfc:rock/gravel/${stone}`), Ingredient.of(`tfc:rock/cobble/${stone}`)) // Secondary output format: {chance: 0.5, output: 'item:id'}
		}
		modifyShaped(
				recipesEvent,
				"tfc:candle",
				4,
				[' S ', ' I ', '   '],
				{
						S: "#forge:string",
						I: "#forge:wax"
				}
		)

		recipesEvent.replaceInput({type: "minecraft:crafting_shaped", mod: "immersiveengineering"}, "#forge:ingots/steel", "#forge:plates/steel")
		recipesEvent.replaceInput({type: "minecraft:crafting_shaped", mod: "immersiveengineering"}, "#forge:ingots/iron", "#forge:sheets/wrought_iron")
		recipesEvent.replaceInput({type: "minecraft:crafting_shaped", mod: "immersiveengineering"}, "#forge:ingots/bronze", "#forge:plates/bronze")
		recipesEvent.replaceInput({type: "minecraft:crafting_shaped", mod: "immersiveengineering"}, "#forge:ingots/copper", "#forge:sheets/copper")

		recipesEvent.replaceInput({type: "minecraft:crafting_shaped"}, "minecraft:stone_bricks", "#forge:stone_bricks")
		recipesEvent.replaceInput({type: "minecraft:crafting_shaped", mod: "thermal"}, "#forge:ingots/steel", "#forge:sheets/steel")
		recipesEvent.replaceInput({type: "minecraft:crafting_shaped", mod: "thermal"}, "#forge:ingots/bronze", "#forge:sheets/bronze")
		recipesEvent.replaceInput({type: "minecraft:crafting_shaped", mod: "thermal"}, "#forge:ingots/iron", "#forge:sheets/wrought_iron")
		recipesEvent.replaceInput({type: "minecraft:crafting_shaped", mod: "thermal"}, "#forge:ingots/copper", "#forge:sheets/copper")
		recipesEvent.replaceInput({type: "minecraft:crafting_shaped", mod: "thermal"}, "#forge:ingots/nickel", "#forge:sheets/nickel")
		recipesEvent.replaceInput({type: "minecraft:crafting_shaped", mod: "thermal"}, "#forge:ingots/tin", "#forge:sheets/tin")
		recipesEvent.replaceInput({type: "minecraft:crafting_shaped", mod: "thermal"}, "#forge:ingots/gold", "#forge:sheets/gold")
		recipesEvent.replaceInput({type: "minecraft:crafting_shaped", mod: "thermal"}, "#forge:ingots/iron", "#forge:ingots/stainless_steel")
		recipesEvent.replaceInput({type: "minecraft:crafting_shaped", mod: "thermal"}, "thermal:tin_gear", "thermal:lead_gear")
		recipesEvent.replaceInput({type: "minecraft:crafting_shaped", mod: "thermal"}, "#forge:ingots/silver", "#forge:sheets/sterling_silver")
		recipesEvent.replaceInput({type: "minecraft:crafting_shaped", mod: "thermal"}, "#forge:ingots/bronze", "#forge:sheets/bronze")

		recipesEvent.replaceInput({id: "createaddition:mixing/biomass_from_saplings"}, "#minecraft:saplings", "#forge:saplings")

		const gearIngots = [
				"copper",
				"tin",
				"nickel",
				"bronze",
				"gold"
		]
		for (const ingot of gearIngots) {
				recipesEvent.replaceInput({type: "minecraft:crafting_shaped", id: `thermal:parts/${ingot}_gear`}, `#forge:sheets/${ingot}`, `#forge:ingots/${ingot}`)
		}

		recipesEvent.replaceInput({type: "minecraft:crafting_shaped", id: `thermal:parts/iron_gear`}, `#forge:sheets/wrought_iron`, `#forge:ingots/wrought_iron`)
		recipesEvent.replaceInput({type: "minecraft:crafting_shaped", id: `thermal:parts/silver_gear`}, `#forge:sheets/sterling_silver`, `#forge:ingots/sterling_silver`)

		recipesEvent.replaceInput({type: "minecraft:crafting_shaped"}, "immersiveengineering:hemp_fiber", "tfc:jute_fiber")

		recipesEvent.replaceInput({type: "minecraft:crafting_shaped", mod: "thermal"}, "minecraft:blast_furnace", "tfc:crucible")

		recipesEvent.replaceInput({type: "create:mixing", mod: "create"}, "create:wheat_flour", "#tfc:foods/flour")

		recipesEvent.replaceInput({type: "minecraft:crafting_shaped", mod: "thermal"}, "minecraft:dirt", "#tfc:dirt")
		recipesEvent.replaceInput({type: "minecraft:crafting_shaped", mod: "thermal"}, "thermal:cured_rubber", "immersiveengineering:plate_duroplast")
		recipesEvent.replaceInput({type: "minecraft:crafting_shaped", mod: "waystones"}, "minecraft:emerald", "tfc:gem/emerald")

		recipesEvent.replaceInput({type: "minecraft:crafting_shaped"}, "minecraft:stone", "#forge:stone")

		recipesEvent.replaceInput({type: "immersiveengineering:cloche"}, "minecraft:dirt", "#tfc:dirt")
		recipesEvent.replaceInput({id: "immersiveengineering:crafting/balloon"}, "minecraft:torch", "tfc:torch")
		recipesEvent.replaceInput({id: "immersiveengineering:crafting/conveyor_dropper"}, "minecraft:iron_trapdoor", "tfc:metal/trapdoor/wrought_iron")


		modifyShaped(recipesEvent, "ae2:certus_quartz_wrench", 1, ['Q Q', ' I ', ' I '], {
				Q: "ae2:certus_quartz_crystal",
				I: "#forge:rods/wrought_iron"
		})
		modifyShaped(recipesEvent, "tombstone:white_marble", 1, ["QQQ", "QDQ", "QQQ"], {
				Q: "tfc:rock/loose/marble",
				D: "tombstone:grave_dust"
		})
		modifyShaped(recipesEvent, "apotheosis:ender_lead", 1, ['PL ', 'G  ', '   '], {
				P: "minecraft:ender_pearl",
				L: "minecraft:lead",
				G: "tfc:metal/ingot/gold"
		})
		modifyShaped(recipesEvent, "thermal:energy_duct", 3, ["LOL", "BRB", "LOL"], {
				B: "#forge:sheets/bronze",
				R: "minecraft:redstone_block",
				O: "#forge:glass_panes",
				L: "#forge:plates/lead"
		})
		modifyShaped(recipesEvent, "thermal:fluid_duct", 3, ["LBL", 'B B', "LBL"], {
				B: "#forge:sheets/bronze",
				L: "#forge:plates/lead"
		})
		modifyShaped(recipesEvent, "thermal:fluid_duct_windowed", 3, ["LBL", "BWB", "LBL"], {
				B: "#forge:sheets/bronze",
				W: "#forge:glass_panes",
				L: "#forge:plates/lead"
		})
		modifyShaped(recipesEvent, "enderstorage:ender_chest", 1, ["BWB", "OCO", "BPB"], {
				P: "#forge:ender_pearls",
				O: "#forge:obsidian",
				C: "#forge:chests/wooden",
				B: "minecraft:blaze_rod",
				W: "#thermal:rockwool"
		})
		modifyShaped(recipesEvent, "enderstorage:ender_pouch", 1, ["BLB", "LPL", "BWB"], {
				P: "#forge:ender_pearls",
				L: "#forge:leather",
				B: "minecraft:blaze_rod",
				W: "#thermal:rockwool"
		})
		modifyShaped(recipesEvent, "enderstorage:ender_tank", 1, ["BWB", "OCO", "BPB"], {
				P: "#forge:ender_pearls",
				O: "#forge:obsidian",
				C: "minecraft:bucket",
				B: "minecraft:blaze_rod",
				W: "#thermal:rockwool"
		})

		recipesEvent.custom({
				"type": "enderstorage:recolour_recipe",
				"result": {
						"item": "enderstorage:ender_chest"
				}
		}).id("kubejs:ender_chest_recolour_manual_only")

		recipesEvent.custom({
				"type": "enderstorage:recolour_recipe",
				"result": {
						"item": "enderstorage:ender_pouch"
				}
		}).id("kubejs:ender_pouch_recolour_manual_only")

		recipesEvent.custom({
				"type": "enderstorage:recolour_recipe",
				"result": {
						"item": "enderstorage:ender_tank"
				}
		}).id("kubejs:ender_tank_recolour_manual_only")

		modifyShaped(recipesEvent, "ae2:nether_quartz_wrench", 1, ['Q Q', ' I ', ' I '], {
				Q: "minecraft:quartz",
				I: "#forge:rods/wrought_iron"
		})

		modifyShaped(recipesEvent, "ae2:certus_quartz_cutting_knife", 1, ['Q  ', ' I ', '   '], {
				Q: "ae2:certus_quartz_crystal",
				I: "#forge:rods/wrought_iron"
		})

		modifyShaped(recipesEvent, "ae2:nether_quartz_cutting_knife", 1, ['Q  ', ' I ', '   '], {
				Q: "minecraft:quartz",
				I: "#forge:rods/wrought_iron"
		})

		modifyShaped(recipesEvent, "exmachinis:flux_hammer", 1, ["PHP", "PTP", "CSU"], {
				H: "minecraft:hopper",
				T: "thermal:machine_pulverizer",
				P: "#forge:glass_panes",
				C: "thermal:rf_coil",
				U: "thermal:upgrade_augment_3",
				S: "#forge:sheets/stainless_steel"
		})

		modifyShaped(recipesEvent, "exmachinis:flux_sieve", 1, ["SGS", "PTP", "CHU"], {
				H: "minecraft:hopper",
				T: "create:smart_chute",
				P: "#forge:glass_panes",
				C: "thermal:rf_coil",
				G: "beyond_earth:desh_plate",
				U: "thermal:upgrade_augment_3",
				S: "#forge:sheets/stainless_steel"
		})

		modifyShaped(recipesEvent, "exmachinis:gold_upgrade", 1, ["GGG", "RPR", "GMG"], {
				G: "#forge:sheets/rose_gold",
				M: "#ae2:memory_cards",
				P: "ae2:logic_processor",
				R: "minecraft:redstone"
		})
		modifyShaped(recipesEvent, "beyond_earth:rover", 1, ['L C', "PEB", "WSW"], {
				S: "#forge:ingots/steel",
				L: "#forge:gems/lapis",
				P: "#forge:plates/iron",
				C: "#forge:chests/wooden",
				W: "beyond_earth:wheel",
				E: "immersiveengineering:light_engineering",
				B: "minecraft:bucket"
		})

		modifyShaped(recipesEvent, "bloodmagic:alchemicalreactionchamber", 1, ["SSS", "IOI", "BFB"], {
				S: "#forge:stone",
				I: "bloodmagic:infusedslate",
				O: "bloodmagic:weakbloodorb",
				F: "tfc:crucible",
				B: "minecraft:iron_block"
		})
		modifyShaped(recipesEvent, "immersiveengineering:alloybrick", 2, ['SI ', 'IS ', '   '], {
				S: "#forge:sandstone",
				I: "tfc:ceramic/fire_brick"
		})
		modifyShaped(recipesEvent, "biggerreactors:graphite_dust", 1, ["DDD", "DDD", "DDD"], {
				D: "tfc:powder/graphite"
		})
		modifyShaped(recipesEvent, "immersiveengineering:hemp_fabric", 3, ["CYC", "SYS", "YCY"], {
				S: "#forge:rods/wooden",
				C: "tfc:wool_cloth",
				Y: "tfc:wool_yarn"
		})
		modifyShaped(recipesEvent, "immersiveengineering:cokebrick", 3, ["CBC", "BSB", "CBC"], {
				S: "#forge:sandstone",
				B: "tfc:ceramic/fire_brick",
				C: "tfc:mortar"
		})
		modifyShaped(recipesEvent, "immersiveengineering:blastbrick", 3, ["CBC", "BMB", "CSC"], {
				S: "#forge:ingots/steel",
				C: "tfc:fire_clay",
				B: "tfc:ceramic/fire_brick",
				M: "#forge:magma"
		})

		modifyShaped(recipesEvent, "beyond_earth:fuel_refinery", 1, ["SIS", "BFB", "SOS"], {
				S: "#forge:ingots/steel",
				I: "#forge:ingots/iron",
				O: "minecraft:redstone",
				F: "tfc:crucible",
				B: "minecraft:bucket"
		})
		modifyShaped(recipesEvent, "beyond_earth:rocket_nose_cone", 1, [' T ', ' S ', "SPS"], {
				T: "minecraft:redstone_torch",
				S: "#forge:ingots/stainless_steel",
				P: "#forge:sheets/red_steel"
		})
		modifyShaped(recipesEvent, "beyond_earth:rocket_fin", 2, [' S ', "TST", "PSP"], {
				T: "#forge:sheets/stainless_steel",
				S: "#forge:ingots/red_steel",
				P: "#forge:sheets/red_steel"
		})
		modifyShaped(recipesEvent, "beyond_earth:engine_frame", 1, ["ISI", 'S S', "ISI"], {
				I: "#forge:ingots/stainless_steel",
				S: "#forge:sheets/stainless_steel"
		})
		modifyShaped(recipesEvent, "beyond_earth:engine_fan", 1, ['I I', ' D ', 'I I'], {
				D: "#forge:ingots/red_steel",
				I: "#forge:sheets/stainless_steel"
		})
		modifyShaped(recipesEvent, "beyond_earth:steel_tank", 1, ["STS", 'T T', "STS"], {
				T: "#forge:sheets/stainless_steel",
				S: "#forge:double_sheets/stainless_steel"
		})

		modifyShaped(recipesEvent, "beyond_earth:oxygen_loader", 1, ["ISI", "SFS", "ITI"], {
				S: "#forge:plates/iron",
				I: "#forge:ingots/iron",
				T: "beyond_earth:oxygen_tank",
				F: "tfc:crucible"
		})
		modifyShaped(recipesEvent, "bloodmagic:altar", 1, ['S S', "SFS", "GGG"], {
				S: "#forge:stone",
				F: "tfc:crucible",
				G: "#forge:ingots/gold"
		})
		modifyShaped(recipesEvent, "beyond_earth:oxygen_mask", 1, ['   ', "SFS", "SGS"], {
				S: "#forge:plates/iron",
				F: "tfc:metal/helmet/steel",
				G: "#forge:glass"
		})
		modifyShaped(recipesEvent, "create:andesite_alloy", 1, ['SZ ', 'ZS ', '   '], {
				S: "#tfc:igneous_extrusive_rock",
				Z: "#forge:nuggets/zinc"

		})
		modifyShaped(recipesEvent, "apotheosis:melonshelf", 1, ["MMM", "SBS", "MMM"], {
				M: "#forge:melon",
				B: "#forge:bookshelves",
				S: "minecraft:glistering_melon_slice"
		})

		modifyShaped(recipesEvent, "apotheosis:beeshelf", 1, ["CVC", "HBH", "CVC"], {
				C: "firmalife:raw_honey",
				V: "firmalife:beehive",
				H: "minecraft:honey_block",
				B: "#forge:bookshelves"
		})

		modifyShaped(recipesEvent, "apotheosis:salvaging_table", 1, ["CCC", "PSA", "DBD"], {
				C: "tfc:metal/ingot/copper",
				P: Ingredient.of("tfc:metal/pickaxe/blue_steel").ignoreNBT().toJson(),
				A: Ingredient.of("tfc:metal/axe/blue_steel").ignoreNBT().toJson(),
				S: "minecraft:smithing_table",
				D: "apotheosis:gem_dust",
				B: "minecraft:lava_bucket"
		})

		modifyShaped(recipesEvent, "apotheosis:library", 1, ["CVC", "VBV", "CVC"], {
				C: "minecraft:ender_chest",
				V: "apotheosis:infused_hellshelf",
				B: "minecraft:enchanted_book"
		})
		modifyShaped(recipesEvent, "apotheosis:reforging_table", 1, [' N ', "DED", "BBB"], {
				N: "minecraft:netherite_ingot",
				D: "apotheosis:gem_dust",
				E: "minecraft:enchanted_book",
				B: "minecraft:nether_bricks"
		})
		modifyShaped(recipesEvent, "apotheosis:scrap_tome", 8, ["BBB", "BAB", "BBB"], {
				A: "tfc:metal/anvil/steel",
				B: "minecraft:book"
		})
		modifyShaped(recipesEvent, "minecraft:lodestone", 1, ["BBB", "BAB", "BBB"], {
				A: "minecraft:netherite_ingot",
				B: "#tfc:rock/bricks"
		})
		modifyShaped(recipesEvent, "ae2:memory_card", 1, ["AAA", "CFE", "BBB"], {
				A: "#forge:sheets/nickel",
				B: "#forge:nuggets/gold",
				C: "ae2:cell_component_1k",
				E: "ae2:engineering_processor",
				F: "minecraft:redstone"
		})
		modifyShaped(recipesEvent, "create:belt_connector", 1, ["AAA", "RLR", "AAA"], {
				A: "tfc:food/dried_kelp",
				R: "#forge:rods/wrought_iron",
				L: "#forge:treated_lumber"
		})
		modifyShaped(recipesEvent, "immersiveengineering:conveyor_basic", 4, ["AAA", "RLR", "AAA"], {
				A: "create:belt_connector",
				R: "#forge:rods/nickel",
				L: "#forge:rods/wrought_iron"
		})
		modifyShaped(recipesEvent, "immersiveengineering:crate", 1, ["ABA", 'B B', "ABA"], {
				A: "thermal:tar",
				B: "#forge:treated_wood"
		})

		for (const grain of grains) {
				recipesEvent.remove({output: `firmalife:food/${grain}_dough`})
				recipesEvent
						.shapeless(`4x firmalife:food/${grain}_dough`, [
								{
										type: "tfc:fluid_item",
										"fluid_ingredient": {
												"ingredient": "firmalife:yeast_starter",
												"amount": 100
										}
								},
								{
										type: "tfc:not_rotten",
										"ingredient": {
												"item": `tfc:food/${grain}_flour`
										}
								},
								"#firmalife:sweetener"
						])
						.id(`kubejs:food/${grain}_dough_manual_only`)

				recipesEvent
						.recipes
						.createMixing(
								`4x firmalife:food/${grain}_dough`,
								[
										Fluid.of("firmalife:yeast_starter", 100),
										{
												type: "tfc:not_rotten",
												"ingredient": {
														"item": `tfc:food/${grain}_flour`
												}
										},
										"#firmalife:sweetener"
								]
						)
						.id(`kubejs:food/${grain}_dough_mixer`)
				tfcBucketRecipes(recipesEvent, `tfc:food/${grain}_dough`, "minecraft:water", 100, {
						type: "tfc:not_rotten",
						"ingredient": {
								"item": `tfc:food/${grain}_flour`
						}
				}, 2)
		}

		recipesEvent
				.shapeless(`9x minecraft:charcoal`, [
						"#forge:storage_blocks/charcoal"
				])
				.id(`kubejs:charcoal_block_revert`);

		tfcBucketRecipes(recipesEvent, `firmalife:food/masa`, `minecraft:water`, 100, {
				type: "tfc:not_rotten",
				"ingredient": {
						"item": `firmalife:food/masa_flour`
				}
		}, 2)


		for (const dirtType of dirtTypes) {
				tfcBucketRecipes(recipesEvent, `tfc:mud/${dirtType}`, "minecraft:water", 100, `tfc:dirt/${dirtType}`, 1)
		}

		recipesEvent.remove({output: "firmalife:watering_can"})
		recipesEvent
				.shapeless("firmalife:watering_can", [
						{
								"type": "tfc:fluid_item",
								"fluid_ingredient": {
										"ingredient": "minecraft:water",
										"amount": 1000
								}
						},
						"tfc:wooden_bucket", "#tfc:lumber"
				])
				.id("kubejs:firmalife_watering_can_manual_only")
		recipesEvent
				.recipes
				.createMixing(`firmalife:watering_can`, [
								Fluid.of("minecraft:water", 1000), "tfc:wooden_bucket", "#tfc:lumber"
						]
				)

		// drawers related
		recipesEvent.recipes.immersiveengineeringMetalPress("2x tfc:brass_mechanisms", "#forge:ingots/brass", "immersiveengineering:mold_gear" )



		recipesEvent
				.shapeless(
						"9x kubejs:bismuth_bronze_nugget",
						[
								"tfc:metal/ingot/bismuth_bronze"
						]
				)
				.id("kubejs:bismuth_bronze_nugget");

		recipesEvent
				.shapeless(
						"tfc:metal/ingot/bismuth_bronze",
						Array.from(new Array(9)).map(i => "kubejs:bismuth_bronze_nugget")
				)
				.id("kubejs:bismuth_bronze_from_nugget");

		modifyShaped(recipesEvent, "storagedrawers:upgrade_template", 4, [
				"SSS",
				"STS",
				"SSS"
		], {
				"T": "framedcompactdrawers:framed_trim",
				"S": "#balm:wooden_rods"
		})

		modifyShaped(recipesEvent, "framedcompactdrawers:framed_full_one", 1, [
				"SSS",
				"NCN",
				"SSS"
		], {
				"N": "kubejs:bismuth_bronze_nugget",
				"C": "#balm:wooden_chests",
				"S": "#balm:wooden_rods"
		})
		modifyShaped(recipesEvent, "framedcompactdrawers:framed_full_two", 2, [
				"SCS",
				"NSN",
				"SCS"
		], {
				"N": "kubejs:bismuth_bronze_nugget",
				"C": "#balm:wooden_chests",
				"S": "#balm:wooden_rods"
		})
		modifyShaped(recipesEvent, "framedcompactdrawers:framed_full_four", 4, [
				"CSC",
				"NSN",
				"CSC"
		], {
				"N": "kubejs:bismuth_bronze_nugget",
				"C": "#balm:wooden_chests",
				"S": "#balm:wooden_rods"
		})

		modifyShaped(recipesEvent, "framedcompactdrawers:framed_half_one", 1, [
				"S S",
				"NCN",
				"S S"
		], {
				"N": "kubejs:bismuth_bronze_nugget",
				"C": "#balm:wooden_chests",
				"S": "#balm:wooden_rods"
		})
		modifyShaped(recipesEvent, "framedcompactdrawers:framed_half_two", 2, [
				"SCS",
				"N N",
				"SCS"
		], {
				"N": "kubejs:bismuth_bronze_nugget",
				"C": "#balm:wooden_chests",
				"S": "#balm:wooden_rods"
		})
		modifyShaped(recipesEvent, "framedcompactdrawers:framed_half_four", 4, [
				"CSC",
				"N N",
				"CSC"
		], {
				"N": "kubejs:bismuth_bronze_nugget",
				"C": "#balm:wooden_chests",
				"S": "#balm:wooden_rods"
		})
		modifyShaped(recipesEvent, "storagedrawers:compacting_drawers_3", 1, [
				"SSS",
				"PTP",
				"SIS"
		], {
				"S": "#bookshelf:stones",
				"P": "minecraft:piston",
				"I": "#forge:ingots/iron",
				"T": "framedcompactdrawers:framed_trim"
		})

		modifyShaped(recipesEvent, "storagedrawers:controller", 1, [
				"SSS",
				"RTR",
				"SDS"
		], {
				"S": "#bookshelf:stones",
				"R": "minecraft:comparator",
				"D": "#forge:gems/diamond",
				"T": "framedcompactdrawers:framed_trim"
		})

		modifyShaped(recipesEvent, "storagedrawers:controller_slave", 1, [
				"SSS",
				"RTR",
				"SAS"
		], {
				"S": "#bookshelf:stones",
				"R": "minecraft:comparator",
				"A": "#forge:gems/amethyst",
				"T": "framedcompactdrawers:framed_trim"
		})

        // Integrated Dynamics... integration ?
        modifyShaped(recipesEvent, "integrateddynamics:part_machine_reader", 1, [
            " F ",
            "CIC",
            " S "
        ], {
            "F": "thermal:machine_furnace",
            "C": "#forge:ingots/copper",
            "I": "integrateddynamics:variable_transformer_input",
            "S": "craftingstation:crafting_station"
        })


        modifyShaped(recipesEvent, "integrateddynamics:drying_basin", 1, [
            "WDW",
            "I I",
            "WDW"
        ], {
            "W": "integrateddynamics:menril_log",
            "I": "#forge:rods/black_bronze",
            "D": "#balm:black_dyes"
        })

        modifyShaped(recipesEvent, "integrateddynamics:squeezer", 1, [
            "RBR",
            "R R",
            "WPW"
        ], {
            "R": "#forge:rods/iron",
            "B": "#forge:storage_blocks/uranium",
            "W": "integrateddynamics:menril_log",
            "P": "#forge:plates/steel"
        })

        modifyShaped(recipesEvent, "integratedtunnels:part_interface_fluid", 1, [
            "   ",
            "CBC",
            "CCC"
        ], {
            "C": "integrateddynamics:crystalized_menril_chunk",
            "B": "tfc:wooden_bucket"
        })

        modifyShaped(recipesEvent, "integrateddynamics:part_entity_reader", 1, [
            " M ",
            "MVM",
            " M "
        ], {
            "V": "integrateddynamics:variable_transformer_input",
            "M": "#tfc:foods/meats"
        })
	
		recipesEvent.remove({id: "integratedtunnels:crafting/part_importer_world_block"})
		recipesEvent.remove({id: "integratedtunnels:crafting/part_exporter_world_block"})
		
		recipesEvent.shapeless("integratedtunnels:part_importer_world_block", [
			"integratedtunnels:part_importer_item",
			"integrateddynamics:logic_director",
			Item.of('tfc:metal/pickaxe/blue_steel', '{Damage:0,"tfc:forging_bonus":4}'),
			"mininggadgets:upgrade_silk"
		]).id("kubejs:integratedtunnels/part_importer_world_block")
		
		recipesEvent.shapeless("integratedtunnels:part_exporter_world_block", [
			"integratedtunnels:part_exporter_item",
			"integrateddynamics:logic_director",
			Item.of('tfc:metal/pickaxe/red_steel', '{Damage:0,"tfc:forging_bonus":4}'),
			"mininggadgets:upgrade_silk"
		]).id("kubejs:integratedtunnels/part_exporter_world_block")
			
		recipesEvent.shapeless("9x tfc:gem/lapis_lazuli", [
			'#forge:storage_blocks/lapis'
		]).id("kubejs:lapis_block_revert");

		// Tin
		recipesEvent.remove({"output": "thermal:tin_block"});
		
		recipesEvent.shapeless("thermal:tin_block",
			Array.from(new Array(9)).map(i => 'tfc:metal/ingot/tin')
		).id("kubejs:tin_block")

		recipesEvent.shapeless("9x tfc:metal/ingot/tin", [
			'#forge:storage_blocks/tin'
		]).id("kubejs:tin_block_revert");

		// Bronze
		recipesEvent.remove({"output": "thermal:bronze_block"});
		
		recipesEvent.shapeless("thermal:bronze_block",
			Array.from(new Array(9)).map(i => 'tfc:metal/ingot/bronze')
		).id("kubejs:tin_block")

		recipesEvent.shapeless("9x tfc:metal/ingot/bronze", [
			'#forge:storage_blocks/bronze'
		]).id("kubejs:bronze_block_revert");

		recipesEvent.shapeless("9x thermal:invar_ingot", [
			'#forge:storage_blocks/invar'
		]).id("kubejs:invar_block_revert");

		recipesEvent.shapeless("9x thermal:signalum_ingot", [
			'#forge:storage_blocks/signalum'
		]).id("kubejs:signalum_block_revert");

		recipesEvent.shapeless("9x thermal:lumium_ingot", [
			'#forge:storage_blocks/lumium'
		]).id("kubejs:lumium_block_revert");
		
		recipesEvent.shapeless("9x thermal:enderium_ingot", [
			'#forge:storage_blocks/enderium'
		]).id("kubejs:enderium_block_revert");

		
		recipesEvent.shapeless("9x minecraft:gunpowder", [
			'#forge:storage_blocks/gunpowder'
		]).id("kubejs:gunpowder_block_revert");
		
		// Bamboo
		recipesEvent.shapeless("9x minecraft:bamboo", [
			'#forge:storage_blocks/bamboo'
		]).id("kubejs:bamboo_block_revert");

		recipesEvent.shapeless("9x thermal:apatite", [
			'#forge:storage_blocks/apatite'
		]).id("kubejs:apatite_block_revert");

		recipesEvent.shapeless("9x tfc:ore/cinnabar", [
			'#forge:storage_blocks/cinnabar'
		]).id("kubejs:cinnabar_block_revert");

		recipesEvent.shapeless("9x thermal:niter", [
			'#forge:storage_blocks/niter'
		]).id("kubejs:niter_block_revert");

		// bituminous_coal
		recipesEvent.shapeless("9x tfc:ore/bituminous_coal", [
			'#forge:storage_blocks/bitumen'
		]).id("kubejs:bitumen_block_revert");

		recipesEvent.shapeless("9x thermal:tar", [
			'#forge:storage_blocks/tar'
		]).id("kubejs:tar_block_revert");

		recipesEvent.shapeless("9x thermal:tar", [
			'#forge:storage_blocks/tar'
		])

		for (const color of dyes) {
			dyeRecipes(recipesEvent, color)
		}

		recipesEvent.replaceOutput({mod: 'thermal'}, 'minecraft:leather', 'tfc:large_raw_hide')
		recipesEvent.replaceOutput({mod: 'integrateddynamics'}, 'minecraft:leather', 'tfc:small_raw_hide')
		recipesEvent.replaceOutput({mod: 'bloodmagic'},'minecraft:leather', 'tfc:small_raw_hide')

		recipesEvent.replaceInput({mod: 'integrateddynamics', id: /ore\/flint/}, 'minecraft:gravel', '#forge:gravel')
		recipesEvent.replaceInput({id: 'create:milling/gravel'}, 'minecraft:gravel', '#forge:gravel')

		recipesEvent.replaceInput({mod: 'integrateddynamics', id: /ore\/redstone/}, '#forge:ores/redstone', '#forge:cinnabar')
}