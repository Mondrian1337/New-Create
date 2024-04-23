LootJS.modifiers(e => {
	// 砂砾掉小燧石
	e.addBlockLootModifier('minecraft:gravel')
		.removeLoot(Ingredient.all)
		.addAlternativesLoot(LootEntry.of('new_create:flint_knapp')
			.when(c => c.randomChance(0.3)),
			LootEntry.of('minecraft:gravel')
				.when(c => c.randomChance(1)))

	// 草丛掉杂草
	e.addBlockLootModifier('minecraft:grass')
		.addAlternativesLoot(LootEntry.of('new_create:grass_fiber')
			.when(c => c.randomChance(0.5)))

	// 纯净石英
	e.addBlockLootModifier('#forge:sand')
		.addAlternativesLoot(LootEntry.of('new_create:pure_quartz')
			.when(c => c.randomChance(0.01)))

	// 铁矿掉粉碎铁矿石
	e.addBlockLootModifier('#forge:ores/iron')
		.removeLoot(Ingredient.all)
		.addLoot('2x create:crushed_raw_iron')

	// 删除战利品箱子里面对应的物品
	e.addLootTypeModifier(LootType.CHEST)
		.removeLoot('minecraft:iron_ingot')
		.removeLoot('minecraft:gold_ingot')
		.removeLoot('minecraft:diamond')
		.removeLoot('minecraft:iron_nugget')
		.removeLoot('minecraft:gold_nugget')
		.removeLoot('minecraft:netherite_scrap')
		.removeLoot('minecraft:netherite_ingot')
		.removeLoot('minecraft:flint_and_steel')
		.removeLoot('minecraft:fire_charge')
		.removeLoot('minecraft:obsidian')
		.removeLoot('#minecraft:logs')

	// 删除铁傀儡掉落铁锭
	e.addEntityLootModifier('minecraft:iron_golem')
		.removeLoot(Ingredient.all)
		.addLoot('2x minecraft:apple')

	// 删除实体掉落铁锭和铜锭
	e.addLootTypeModifier(LootType.ENTITY)
		.removeLoot('minecraft:iron_ingot')
		.removeLoot('minecraft:copper_ingot')

	// 所有矿石掉落矿渣
	e.addBlockLootModifier('#forge:ores')
		.addAlternativesLoot(LootEntry.of('immersiveengineering:slag')
			.when(c => c.randomChance(0.7)),
			LootEntry.of('2x immersiveengineering:slag')
				.when(c => c.randomChance(0.3)))

	// 锌矿掉落粉碎锌矿石
	e.addBlockLootModifier('#forge:ores/zinc')
		.removeLoot('create:raw_zinc')
		.addLoot('2x create:crushed_raw_zinc')
})