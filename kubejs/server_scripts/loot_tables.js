onEvent("lootjs", (event) => {
    event
    .addLootTypeModifier(LootType.CHEST)
    .removeLoot(Item.of("minecraft:bucket"));
     event
    .addLootTypeModifier(LootType.CHEST)
    .removeLoot(Item.of("minecraft:bread"));
     event
    .addLootTypeModifier(LootType.CHEST)
    .removeLoot(/allthemodium.*/);
     event
    .addLootTypeModifier(LootType.CHEST)
    .removeLoot(/vibranium.*/);
     event
    .addLootTypeModifier(LootType.CHEST)
    .removeLoot(/unobtainium.*/);
    event
    .addLootTypeModifier(LootType.CHEST)
    .removeLoot(Item.of("minecraft:fishing_rod"));
    event
    .addLootTypeModifier(LootType.CHEST)
    .removeLoot(Item.of("minecraft:anvil"));
    event
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:copper_ingot","tfc:metal/ingot/copper");
    event
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:gold_ingot","tfc:metal/ingot/gold");
    event
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:iron_ingot","tfc:metal/ingot/wrought_iron");
    event
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:diamond","tfc:gem/diamond");
    event
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:emerald","tfc:gem/emerald");
    event
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:lapis_lazuli","tfc:gem/lapis_lazuli");
    event
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:enchanting_table","tfc:gem/diamond");
    event
    .addEntityLootModifier("minecraft:zombie")
    .removeLoot(Item.of("minecraft:iron_ingot"));
    event
    .addEntityLootModifier("minecraft:husk")
    .removeLoot(Item.of("minecraft:iron_ingot"));
     });
