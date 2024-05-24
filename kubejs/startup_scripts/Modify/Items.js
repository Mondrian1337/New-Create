ItemEvents.modification(e => {
	let ToolDamage = [
		['minecraft:iron_sword', 650],
		['minecraft:iron_pickaxe', 650],
		['minecraft:iron_axe', 650],
		['minecraft:iron_shovel', 650],
		['minecraft:iron_hoe', 650],
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