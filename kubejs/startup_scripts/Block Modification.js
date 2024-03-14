BlockEvents.modification(e => {
	const blockNames = [
		'minecraft:stripped_cherry_log', 'minecraft:stripped_oak_log', 'minecraft:jungle_log',
		'minecraft:stripped_jungle_log', 'minecraft:stripped_birch_log', 'minecraft:birch_log',
		'minecraft:stripped_spruce_log', 'minecraft:spruce_log', 'minecraft:oak_log',
		'biomesoplenty:stripped_mahogany_log', 'minecraft:acacia_log', 'minecraft:stripped_acacia_log',
		'minecraft:dark_oak_log', 'minecraft:stripped_dark_oak_log', 'minecraft:mangrove_log',
		'minecraft:stripped_mangrove_log', 'minecraft:cherry_log', 'biomesoplenty:stripped_dead_log',
		'ad_astra:glacian_log', 'ad_astra:stripped_glacian_log', 'biomesoplenty:fir_log',
		'biomesoplenty:stripped_fir_log', 'biomesoplenty:redwood_log', 'biomesoplenty:stripped_redwood_log',
		'biomesoplenty:mahogany_log', 'thermal:stripped_rubberwood_log', 'biomesoplenty:jacaranda_log',
		'biomesoplenty:stripped_jacaranda_log', 'biomesoplenty:palm_log', 'biomesoplenty:stripped_palm_log',
		'biomesoplenty:willow_log', 'biomesoplenty:stripped_willow_log', 'biomesoplenty:dead_log',
		'biomesoplenty:stripped_magic_log', 'alexscaves:stripped_thornwood_log', 'biomesoplenty:magic_log',
		'biomesoplenty:umbran_log', 'biomesoplenty:stripped_umbran_log', 'biomesoplenty:hellbark_log',
		'biomesoplenty:stripped_hellbark_log', 'thermal:rubberwood_log', 'ecologics:azalea_log',
		'ecologics:stripped_azalea_log', 'caupona:walnut_log', 'caupona:stripped_walnut_log',
		'alexscaves:thornwood_log', 'alexscaves:stripped_pewen_log', 'alexscaves:pewen_log',
		'ecologics:flowering_azalea_log', 'ecologics:stripped_walnut_log', 'ecologics:walnut_log',
		'ecologics:stripped_coconut_log', 'ecologics:coconut_log', 'ecologics:walnut_wood',
		'ecologics:coconut_wood', 'ecologics:azalea_wood', 'ecologics:flowering_azalea_wood',
		'alexscaves:pewen_wood', 'alexscaves:thornwood_wood', 'caupona:walnut_wood',
		'create_dd:rose_wood', 'create_dd:smoked_wood', 'biomesoplenty:redwood_wood',
		'biomesoplenty:mahogany_wood', 'biomesoplenty:jacaranda_wood', 'biomesoplenty:palm_wood',
		'biomesoplenty:willow_wood', 'biomesoplenty:magic_wood', 'biomesoplenty:umbran_wood',
		'biomesoplenty:hellbark_wood', 'thermal:rubberwood_wood', 'biomesoplenty:fir_wood',
		'minecraft:oak_wood', 'minecraft:jungle_wood', 'minecraft:spruce_wood',
		'minecraft:cherry_wood', 'create_dd:spirit_wood', 'minecraft:birch_wood',
		'minecraft:mangrove_wood', 'minecraft:dark_oak_wood', 'minecraft:acacia_wood'
	]
	blockNames.forEach(name => {
		e.modify(name, block => {
			block.requiresTool = true
		})
	})
})