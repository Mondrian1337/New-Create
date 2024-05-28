ItemEvents.modification(e => {
	let ToolDamage = [
		['minecraft:iron_sword', 450],
		['minecraft:iron_pickaxe', 450],
		['minecraft:iron_axe', 450],
		['minecraft:iron_shovel', 450],
		['minecraft:iron_hoe', 450],
		['minecraft:iron_helmet', 200],
		['minecraft:iron_chestplate', 200],
		['minecraft:iron_leggings', 200],
		['minecraft:iron_boots', 200]
	]
	ToolDamage.forEach(([Name, MaxDamage]) => {
		e.modify(Name, modify => {
			modify.maxDamage = MaxDamage
		})
	})
})