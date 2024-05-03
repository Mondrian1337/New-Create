LootJS.modifiers(loots => {
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