LootJS.modifiers(loots => {
	const All = Ingredient.all
	// 砂砾掉小燧石
	loots.addBlockLootModifier('minecraft:gravel')
		.removeLoot(All)
		.addAlternativesLoot(LootEntry.of('new_create:flint_knapp')
			.when(c => c.randomChance(0.3)),
			LootEntry.of('minecraft:gravel')
				.when(c => c.randomChance(1)))

	// 草丛掉杂草
	loots.addBlockLootModifier('minecraft:grass')
		.addAlternativesLoot(LootEntry.of('new_create:grass_fiber')
			.when(c => c.randomChance(0.55)))

	// 纯净石英
	loots.addBlockLootModifier('#forge:sand')
		.addAlternativesLoot(LootEntry.of('new_create:pure_quartz')
			.when(c => c.randomChance(0.01)))

	// 铁矿掉粉碎铁矿石
	loots.addBlockLootModifier('#forge:ores/iron')
		.removeLoot(All)
		.addLoot('2x create:crushed_raw_iron')

	// 所有矿石掉落矿渣
	loots.addBlockLootModifier('#forge:ores')
		.addAlternativesLoot(LootEntry.of('immersiveengineering:slag')
			.when(c => c.randomChance(0.45)),
			LootEntry.of('2x immersiveengineering:slag')
				.when(c => c.randomChance(0.3)))

	// 锌矿掉落粉碎锌矿石
	loots.addBlockLootModifier('#forge:ores/zinc')
		.removeLoot('create:raw_zinc')
		.addLoot('2x create:crushed_raw_zinc')

	// 篝火掉本体
	loots.addBlockLootModifier('minecraft:campfire')
		.removeLoot(All)
		.addAlternativesLoot(LootEntry.of('minecraft:campfire')
			.when(c => c.randomChance(0.25)))
		.addAlternativesLoot(LootEntry.of('minecraft:charcoal')
			.when(c => c.randomChance(0.75)))

	// 土豆
	loots.addBlockLootModifier('minecraft:potato')
		.removeLoot('minecraft:poisonous_potato')
})