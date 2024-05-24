ItemEvents.modification(e => {
	let ToolDamage = [
		['minecraft:iron_sword', 450],
		['minecraft:iron_pickaxe', 450],
		['minecraft:iron_axe', 450],
		['minecraft:iron_shovel', 450],
		['minecraft:iron_hoe', 450],
		['minecraft:iron_helmet', 175],
		['minecraft:iron_chestplate', 175],
		['minecraft:iron_leggings', 175],
		['minecraft:iron_boots', 175]
	]
	ToolDamage.forEach(([Name, MaxDamage]) => {
		e.modify(Name, modify => {
			modify.maxDamage = MaxDamage
		})
	})
})