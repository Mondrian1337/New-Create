LootJS.modifiers(loots => {
	// 删除战利品箱子里面对应的物品
	let ChestLoots = [
		'minecraft:iron_ingot',
		'minecraft:gold_ingot',
		'minecraft:diamond',
		'minecraft:iron_nugget',
		'minecraft:gold_nugget',
		'minecraft:netherite_scrap',
		'minecraft:netherite_ingot',
		'minecraft:flint_and_steel',
		'minecraft:fire_charge',
		'minecraft:obsidian',
		'#minecraft:logs',
		'#forge:tools',
		'minecraft:blast_furnace',
		'minecraft:furnace',
		'minecraft:smoker'
	]
	ChestLoots.forEach(([Name]) => {
		loots.addLootTypeModifier(LootType.CHEST)
			.removeLoot(Name)
	})
})