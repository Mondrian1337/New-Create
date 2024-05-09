LootJS.modifiers(loots => {
	let All = Ingredient.all
	// 砂砾掉小燧石
	loots.addBlockLootModifier('minecraft:gravel')
		.removeLoot(All)
		.addAlternativesLoot(LootEntry.of('new_create:flint_knapp')
			.when(loots => loots.randomChance(0.3)),
			LootEntry.of('minecraft:gravel')
				.when(loots => loots.randomChance(1)))

	// 草丛掉杂草
	loots.addBlockLootModifier('minecraft:grass')
		.addAlternativesLoot(LootEntry.of('new_create:grass_fiber')
			.when(loots => loots.randomChance(0.6)))

	// 纯净石英
	loots.addBlockLootModifier('#forge:sand')
		.addAlternativesLoot(LootEntry.of('new_create:pure_quartz')
			.when(loots => loots.randomChance(0.01)))

	// 铁矿掉粉碎铁矿石
	loots.addBlockLootModifier('#forge:ores/iron')
		.removeLoot(All)
		.addLoot('2x create:crushed_raw_iron')

	// 所有矿石掉落矿渣
	loots.addBlockLootModifier('#forge:ores')
		.addAlternativesLoot(LootEntry.of('immersiveengineering:slag')
			.when(loots => loots.randomChance(0.45)),
			LootEntry.of('2x immersiveengineering:slag')
				.when(loots => loots.randomChance(0.3)))

	// 锌矿掉落粉碎锌矿石
	loots.addBlockLootModifier('#forge:ores/zinc')
		.removeLoot('create:raw_zinc')
		.addLoot('2x create:crushed_raw_zinc')

	// 篝火掉本体
	loots.addBlockLootModifier('minecraft:campfire')
		.removeLoot(All)
		.addAlternativesLoot(LootEntry.of('minecraft:campfire')
			.when(loots => loots.randomChance(0.25)))
		.addAlternativesLoot(LootEntry.of('minecraft:charcoal')
			.when(loots => loots.randomChance(0.75)))

	// 土豆
	loots.addBlockLootModifier('minecraft:potato')
		.removeLoot('minecraft:poisonous_potato')
})