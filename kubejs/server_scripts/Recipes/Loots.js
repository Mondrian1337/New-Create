LootJS.modifiers(loots => {
	const ALL = Ingredient.all
	// 砂砾掉小燧石
	loots.addBlockLootModifier('minecraft:gravel')
		.removeLoot(ALL)
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
		.removeLoot(ALL)
		.addLoot('2x create:crushed_raw_iron')

	// 删除战利品箱子里面对应的物品
	loots.addLootTypeModifier(LootType.CHEST)
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
	loots.addEntityLootModifier('minecraft:iron_golem')
		.removeLoot(ALL)
		.addLoot('2x minecraft:apple')

	// 删除实体掉落铁锭和铜锭
	loots.addLootTypeModifier(LootType.ENTITY)
		.removeLoot('minecraft:iron_ingot')
		.removeLoot('minecraft:copper_ingot')

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
		.removeLoot(ALL)
		.addAlternativesLoot(LootEntry.of('minecraft:campfire')
			.when(c => c.randomChance(0.25)))
		.addAlternativesLoot(LootEntry.of('minecraft:charcoal')
			.when(c => c.randomChance(0.75)))

	// 土豆
	loots.addBlockLootModifier('minecraft:potato')
		.removeLoot('minecraft:poisonous_potato')

	// 工具
	let HandLoots = [
		// 圆石=>砂砾
		['#forge:cobblestone', '#new_create:hammer', 'minecraft:gravel'],
		// 砂砾=>沙子
		['#forge:gravel', '#new_create:hammer', 'minecraft:sand'],
		// 砂石=>沙子
		['#forge:sandstone', '#new_create:hammer', 'minecraft:sand'],
		// 沙子=>尘土
		['#forge:sand', '#new_create:hammer', 'new_create:dust']
	]
	HandLoots.forEach(([Block, Tools, Loots]) => {
		loots.addBlockLootModifier(Block)
			.matchMainHand(Tools)
			.addAlternativesLoot(LootEntry.of(Loots)
				.when(c => c.randomChance(0.5)))
	})
})