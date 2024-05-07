LootJS.modifiers(loots => {
	let HandLoots = [
		// 圆石=>砂砾
		['#forge:cobblestone', '#new_create:hammer', 'minecraft:gravel'],
		// 石头=>砂砾
		['minecraft:stone', '#new_create:hammer', 'minecraft:gravel'],
		// 砂砾=>沙子
		['#forge:gravel', '#new_create:hammer', 'minecraft:sand'],
		// 砂石=>沙子
		['#forge:sandstone', '#new_create:hammer', 'minecraft:sand'],
		// 沙子=>尘土
		['#forge:sand', '#new_create:hammer', 'new_create:dust']
	]
	HandLoots.forEach(([Blocks, Tools, Loots]) => {
		loots.addBlockLootModifier(Blocks)
			.matchMainHand(Tools)
			.addAlternativesLoot(LootEntry.of(Loots)
				.when(loots => loots.randomChance(0.5)))
	})
})