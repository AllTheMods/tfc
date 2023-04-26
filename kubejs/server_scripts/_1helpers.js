// priority: 950

const tfcFoodSeeds = [
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
const tfcNonFoodSeeds = [
		"pumpkin",
		"melon",
		"jute",
		"papyrus"
]
const vanillaWoodTypes = [
		"acacia",
		"birch",
		"oak",
		"spruce"
]
const tfcWoodTypes = [
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
const grains = [
		"barley",
		"maize",
		"oat",
		"rye",
		"rice",
		"wheat"
]
const dirtTypes = [
		"silt",
		"loam",
		"sandy_loam",
		"silty_loam"
]
const tfcStoneTypes = [
		"granite",
		"diorite",
		"gabbro",
		"shale",
		"claystone",
		"limestone",
		"conglomerate",
		"dolomite",
		"chert",
		"chalk",
		"rhyolite",
		"basalt",
		"andesite",
		"dacite",
		"quartzite",
		"slate",
		"phyllite",
		"schist",
		"gneiss",
		"marble"
]
const tfcMetalOreTypes = [
		"bismuth",
		"copper",
		"gold",
		"iron",
		"nickel",
		"silver",
		"tin",
		"zinc"
]
const tfcGemOreTypes = [
    	"kaolinite",
    	"gypsum",
    	"graphite",
    	"sulfur",
    	"saltpeter",
    	"sylvite",
    	"borax",
    	"halite",
    	"amethyst",
    	"opal",
    	"pyrite",
    	"ruby",
    	"sapphire",
    	"topaz",
		"diamond"
]
const tfcOreTypes = [
		"native_copper",
		"native_gold",
		"native_silver",
		"hematite",
		"cassiterite",
		"bismuthinite",
		"garnierite",
		"malachite",
		"magnetite",
		"limonite",
		"sphalerite",
		"tetrahedrite"
]
const stoneToolTypes = [
        "igneous_extrusive",
        "igneous_intrusive",
        "metamorphic",
        "sedimentary"

]

const removeRecipeByID = (recipesEvent, recipes) => {
		for (const recipe of recipes) {
				recipesEvent.remove({id: recipe})
		}
}
const modifyShaped = (recipeEvent, result, count, pattern, ingredients) => {
		recipeEvent.remove({output: result, type: "minecraft:crafting_shaped"})
		recipeEvent.shaped(Item.of(result, count), pattern, ingredients).id(`kubejs:shaped/${result.replace(":", "/")}`)
}

const addClocheRecipe = (recipesEvent, output, amount, seed, soil, render, time) => {
		recipesEvent.custom({
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



const tfcBucketRecipes = (recipesEvent, output, fluid, amount, input, multiplier) => {
		recipesEvent.remove({output: output})
		for (let i = 1; i <= 8; i++) {
				recipesEvent
						.shapeless(
								`${i * multiplier}x ${output}`,
								[
										{
												type: "tfc:fluid_item",
												"fluid_ingredient": {
														"ingredient": fluid,
														"amount": amount
												}
										}
								].concat(
										Array.from(new Array(i)).map(i => input)
								)
						)
						.id(`kubejs:${output.replace(`:`, `/`)}_${i}_manual_only`)
		}
		recipesEvent
				.recipes
				.createMixing(
						`${multiplier}x ${output}`,
						[
								Fluid.of(fluid, amount),
								input
						]
				)
				.id(`kubejs:${output.replace(":", "/")}_mixer`)
}
