onEvent('worldgen.add', event => {
  event.addOre((ore) => {
    ore.id = "kubejs:mining_certus" // optional
    ore.biomes = ['beyond_earth:moon_desert']
    ore.addTarget('beyond_earth:moon_stone', 'ae2:quartz_ore')
    ore.size(7)     // ores per cluster
    ore.count(10,20)   // clusters per chunk, can also be a range eg ore.count(15,20)
    ore.squared()
    ore.triangleHeight(-34, 36)
  })
  event.addSpawn(spawn => { // Create new entity spawn
      spawn.category = 'monster' // Category, can be one of 'creature', 'monster', 'ambient', 'water_creature' or 'water_ambient'
      spawn.entity = 'thermal:blizz' // Entity ID
      spawn.biomes = ['beyond_earth:glacio']
      spawn.weight = 10 // Weight
      spawn.minCount = 4 // Min entities per group
      spawn.maxCount = 4 // Max entities per group
    })
  event.addSpawn(spawn2 => { // Create new entity spawn
      spawn2.category = 'monster' // Category, can be one of 'creature', 'monster', 'ambient', 'water_creature' or 'water_ambient'
      spawn2.entity = 'thermal:basalz' // Entity ID
      spawn2.biomes = ['beyond_earth:mercury']
      spawn2.weight = 10 // Weight
      spawn2.minCount = 4 // Min entities per group
      spawn2.maxCount = 4 // Max entities per group
    })
  event.addSpawn(spawn3 => { // Create new entity spawn
      spawn3.category = 'monster' // Category, can be one of 'creature', 'monster', 'ambient', 'water_creature' or 'water_ambient'
      spawn3.entity = 'thermal:blitz' // Entity ID
      spawn3.biomes = ['beyond_earth:venus']
      spawn3.weight = 10 // Weight
      spawn3.minCount = 4 // Min entities per group
      spawn3.maxCount = 4 // Max entities per group
    })
})

onEvent('worldgen.remove', event => {
  event.removeSpawns(properties => {
    properties.biomes = /tfc:.*/
    properties.mobs = /thermal:b.*/
  })
})