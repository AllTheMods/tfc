onEvent("lootjs", (event) => {
    event
    .addLootTypeModifier(LootType.CHEST)
    .removeLoot(Item.of("minecraft:bucket"));
     event
     .addEntityLootModifier("minecraft:zombie")
     .removeLoot(Item.of("minecraft:iron_ingot"));
     });
