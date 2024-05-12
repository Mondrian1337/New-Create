BlockEvents.modification(e => {
	// fix
	e.modify('melter:melter', block => {
		block.destroySpeed = 3
	})
})
BlockEvents.modification(e => {
	// 修改
	let Woods = [
		'minecraft:dark_oak_log', 'minecraft:dark_oak_wood', 'minecraft:stripped_dark_oak_log', 'minecraft:stripped_dark_oak_wood',
		'minecraft:oak_log', 'minecraft:oak_wood', 'minecraft:stripped_oak_log', 'minecraft:stripped_oak_wood',
		'minecraft:acacia_log', 'minecraft:acacia_wood', 'minecraft:stripped_acacia_log', 'minecraft:stripped_acacia_wood',
		'minecraft:birch_log', 'minecraft:birch_wood', 'minecraft:stripped_birch_log', 'minecraft:stripped_birch_wood',
		'minecraft:jungle_log', 'minecraft:jungle_wood', 'minecraft:stripped_jungle_log', 'minecraft:stripped_jungle_wood',
		'minecraft:spruce_log', 'minecraft:spruce_wood', 'minecraft:stripped_spruce_log', 'minecraft:stripped_spruce_wood',
		'minecraft:mangrove_log', 'minecraft:mangrove_wood', 'minecraft:stripped_mangrove_log', 'minecraft:stripped_mangrove_wood',
		'minecraft:cherry_log', 'minecraft:cherry_wood', 'minecraft:stripped_cherry_log', 'minecraft:stripped_cherry_wood',
		'ecologics:coconut_log', 'ecologics:stripped_coconut_log', 'ecologics:coconut_wood', 'ecologics:stripped_coconut_wood',
		'ecologics:walnut_log', 'ecologics:stripped_walnut_log', 'ecologics:walnut_wood', 'ecologics:stripped_walnut_wood',
		'ecologics:azalea_log', 'ecologics:azalea_wood', 'ecologics:stripped_azalea_log', 'ecologics:stripped_azalea_wood',
		'ecologics:flowering_azalea_log', 'ecologics:flowering_azalea_wood', 'ad_astra:glacian_log', 'alexscaves:pewen_log',
		'alexscaves:pewen_wood', 'alexscaves:stripped_pewen_log', 'alexscaves:stripped_pewen_wood', 'alexscaves:thornwood_log',
		'alexscaves:thornwood_wood', 'alexscaves:stripped_thornwood_log', 'alexscaves:stripped_thornwood_wood',
		'minecraft:crimson_stem', 'minecraft:stripped_crimson_stem', 'minecraft:crimson_hyphae', 'minecraft:stripped_crimson_hyphae',
		'minecraft:warped_stem', 'minecraft:stripped_warped_stem', 'minecraft:warped_hyphae', 'minecraft:stripped_warped_hyphae',
		'thermal:rubberwood_log', 'thermal:rubberwood_wood', 'thermal:stripped_rubberwood_log', 'thermal:stripped_rubberwood_wood',
		'create_dd:rose_log', 'create_dd:stripped_rose_log', 'create_dd:rose_wood', 'create_dd:stripped_rose_wood',
		'create_dd:smoked_log', 'create_dd:stripped_smoked_log', 'create_dd:smoked_wood', 'create_dd:stripped_smoked_wood',
		'create_dd:spirit_log', 'create_dd:stripped_spirit_log', 'create_dd:spirit_wood', 'create_dd:stripped_spirit_wood',
		'create_dd:rubber_log', 'create_dd:stripped_rubber_log', 'create_dd:rubber_wood', 'create_dd:stripped_rubber_wood',
		'caupona:walnut_wood', 'caupona:walnut_log', 'caupona:stripped_walnut_wood', 'caupona:stripped_walnut_log',
		'caupona:fig_log', 'caupona:wolfberry_log'
	]
	Woods.forEach(([name]) => {
		e.modify(name, block => {
			block.requiresTool = true
		})
	})
})