LootJS.modifiers(e => {
        e
        .addBlockLootModifier('minecraft:dirt')
        .matchMainHand(Item.of('minecraft:tnt'))
        .addLoot("4x minecraft:diamond_block")

})