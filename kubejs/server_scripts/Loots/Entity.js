LootJS.modifiers(loots => {
	const All = Ingredient.all
	// 删除铁傀儡掉落铁锭
	loots.addEntityLootModifier('minecraft:iron_golem')
		.removeLoot(All)
		.addLoot('2x minecraft:apple')

	// 删除实体掉落铁锭和铜锭
	loots.addLootTypeModifier(LootType.ENTITY)
		.removeLoot('minecraft:iron_ingot')
		.removeLoot('minecraft:copper_ingot')
})