LootJS.modifiers(e => {
	// 砂砾掉小燧石
	e.addBlockLootModifier('minecraft:gravel')
		.removeLoot(Ingredient.all)
		.addAlternativesLoot(
			LootEntry.of('kubejs:flint_knapp').when(c => c.randomChance(0.3)),
			LootEntry.of('minecraft:gravel').when(c => c.randomChance(1))
		)
	// 草丛掉杂草
	e.addBlockLootModifier('minecraft:grass')
		.addAlternativesLoot(
			LootEntry.of('kubejs:grass_fiber').when(c => c.randomChance(0.5))
		)
	//铁矿掉粉碎铁矿石
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
		.addAlternativesLoot(
			LootEntry.of('immersiveengineering:slag').when(c => c.randomChance(0.7)),
			LootEntry.of('2x immersiveengineering:slag').when(c => c.randomChance(0.3))
		)
	// 锌矿掉落粉碎锌矿石
	e.addBlockLootModifier('#forge:ores/zinc')
		.removeLoot('create:raw_zinc')
		.addLoot('2x create:crushed_raw_zinc')
	// 烈焰人掉落头颅（吃抢夺附魔)
	e.addEntityLootModifier("minecraft:blaze")
		.killedByPlayer()
		.randomChanceWithEnchantment("minecraft:looting", [0, 0.1, 0.15, 0.17])// 无抢夺0% 抢夺1-10% 抢夺2-15% 抢夺3-17%
		.addLoot('kubejs:blaze_head')
})