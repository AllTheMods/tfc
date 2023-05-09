//priority: 700

const setLoot = (lootEvent) =>{
    lootEvent.addLootTypeModifier(LootType.CHEST).removeLoot(Item.of("minecraft:bucket"))
    lootEvent.addLootTypeModifier(LootType.CHEST).removeLoot(Item.of("minecraft:bread"))
    lootEvent.addLootTypeModifier(LootType.CHEST).removeLoot(/allthemodium.*/);

    lootEvent.addLootTypeModifier(LootType.CHEST).removeLoot(/vibranium.*/);
    lootEvent.addLootTypeModifier(LootType.CHEST).removeLoot(/unobtainium.*/);
    lootEvent.addLootTypeModifier(LootType.CHEST).removeLoot(Item.of("minecraft:fishing_rod").ignoreNBT());
    lootEvent.addLootTypeModifier(LootType.FISHING).removeLoot(Item.of("minecraft:fishing_rod").ignoreNBT());

    lootEvent.addLootTypeModifier(LootType.CHEST).removeLoot(Item.of("minecraft:anvil"));
    lootEvent.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:copper_ingot","tfc:metal/ingot/copper");
    lootEvent.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:gold_ingot","tfc:metal/ingot/gold");
    lootEvent.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:iron_ingot","tfc:metal/ingot/wrought_iron");
    lootEvent.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:diamond","tfc:gem/diamond");
    lootEvent.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:emerald","tfc:gem/emerald");
    lootEvent.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:lapis_lazuli","tfc:gem/lapis_lazuli");
    lootEvent.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:enchanting_table","tfc:gem/diamond");
    lootEvent.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:carrot","tfc:food/carrot",true);
    lootEvent.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:potato","tfc:food/potato",true);
    lootEvent.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:wheat","tfc:food/wheat",true);
    lootEvent.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:pumpkin","tfc:pumpkin",true);
    lootEvent.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:beetroot_seeds","tfc:seeds/beet",true);
    lootEvent.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:melon_seeds","tfc:seeds/melon",true);
    lootEvent.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:pumpkin_seeds","tfc:seeds/pumpkin",true);
    lootEvent.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:dead_bush","tfc:plant/dead_bush",true);
    
    lootEvent.addEntityLootModifier("minecraft:zombie").replaceLoot(Item.of("minecraft:iron_ingot"), "tfc:metal/shovel/wrought_iron");
    lootEvent.addEntityLootModifier("minecraft:husk").replaceLoot(Item.of("minecraft:iron_ingot"), "tfc:metal/shovel/wrought_iron");
    lootEvent.addEntityLootModifier("minecraft:drowned").replaceLoot(Item.of("minecraft:copper_ingot"), "tfc:metal/shovel/copper");

    lootEvent.addLootTypeModifier(LootType.ENTITY).replaceLoot("minecraft:potato", "tfc:food/potato", true);
    lootEvent.addLootTypeModifier(LootType.ENTITY).replaceLoot("minecraft:carrot", "tfc:food/carrot", true);
    
    lootEvent.addEntityLootModifier("minecraft:evoker").replaceLoot("minecraft:emerald","tfc:gem/emerald");
    lootEvent.addLootTypeModifier(LootType.CHEST).removeLoot(Item.of("minecraft:lava_bucket"));
    lootEvent.addLootTypeModifier(LootType.CHEST).removeLoot(Item.of("minecraft:water_bucket"));
    lootEvent.addLootTypeModifier(LootType.CHEST).removeLoot(Item.of("minecraft:powder_snow_bucket"));
    lootEvent.addLootTypeModifier(LootType.CHEST).removeLoot(Item.of("minecraft:cooked_porkchop"));
    lootEvent.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:porkchop","tfc:food/pork",true);
    lootEvent.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:mutton","tfc:food/muttton",true);
    lootEvent.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:beef","tfc:food/beef",true);
    lootEvent.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:chicken","tfc:food/chicken",true);
    lootEvent.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:rabbit","tfc:food/rabbit",true);
    lootEvent.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:rabbit_hide","tfc:small_raw_hide", true);
    lootEvent.addLootTypeModifier(LootType.CHEST).replaceLoot("minecraft:barrel","tfcbarrels:wood/barrel/oak");
    lootEvent.addEntityLootModifier("minecraft:hoglin").replaceLoot("minecraft:porkchop","tfc:food/pork",true);
    lootEvent.addEntityLootModifier("minecraft:hoglin").replaceLoot("minecraft:cooked_porkchop","tfc:food/cooked_pork",true);
    lootEvent.addEntityLootModifier("minecraft:hoglin").replaceLoot("minecraft:leather","tfc:large_raw_hide");
}
