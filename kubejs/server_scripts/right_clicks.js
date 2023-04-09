//priority: 894

const rightClickEvent = clickEvent => {
    const { item, hand, player } = clickEvent
    if (item != 'firmalife:empty_jar' || hand != 'main_hand') return;
    let result = player.rayTrace(clickEvent.player.reachDistance)
    if (result.type == 'block') {
        if (['minecraft:water', 'tfc:fluid/spring_water', 'tfc:fluid/river_water', 'tfc:fluid/salt_water'].includes(result.block.id)) {
            item.count--
            player.give(Item.of('minecraft:potion', { Potion: 'minecraft:water' }))
        }
    }
}