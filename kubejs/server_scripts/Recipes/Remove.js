/*
 * 我知道你们进来这里的想干什么,或许你只是个很普通的Modpack开发者,想来看看Ban了什么东西
 * 也或许是一个在网上搜到解Ban教程的一个玩家
 * 你们可以随便解,我们也不强求,只希望你们不要在我们这些开发者面前跳脸
 * 我了解你们的心情,但是也希望大家可以理解一下我们这些开发者的心情
 * 我们已经很累了,你们爱咋玩咋玩,只要不要影响到别的玩家,随便你们解开好吧
 *                                  ------2024.05.05 21点11分42秒 柒月留
*/
ServerEvents.recipes(e => {
	// 删除Item
	let Output = [
		'#forge:tools/wooden',
		'minecraft:stone_sword',
		'minecraft:stone_pickaxe',
		'minecraft:stone_axe',
		'minecraft:stone_shovel',
		'minecraft:stone_hoe',
		'minecraft:campfire',
		'minecraft:iron_ingot',
		'create:hand_crank',
		'create:andesite_alloy',
		'create:millstone',
		'minecraft:stick',
		'immersiveengineering:hammer',
		'#forge:ingots/copper',
		'notreepunching:flint_axe',
		'notreepunching:flint_pickaxe',
		'notreepunching:flint_hoe',
		'notreepunching:flint_shovel',
		'notreepunching:macuahuitl',
		'#notreepunching:saws',
		'#notreepunching:knives',
		'#notreepunching:h/mattocks',
		'createendertransmission:energy_transmitter',
		'extendedcrafting:crystaltine_catalyst',
		'extendedcrafting:enhanced_ender_catalyst',
		'extendedcrafting:ender_catalyst',
		'extendedcrafting:enhanced_redstone_catalyst',
		'melter:melter',
		'extendedcrafting:redstone_catalyst',
		'extendedcrafting:ultimate_catalyst',
		'extendedcrafting:elite_catalyst',
		'extendedcrafting:advanced_catalyst',
		'extendedcrafting:basic_catalyst',
		'extendedcrafting:the_ultimate_catalyst',
		'extendedcrafting:basic_component',
		'extendedcrafting:advanced_component',
		'extendedcrafting:elite_component',
		'extendedcrafting:ultimate_component',
		'extendedcrafting:redstone_component',
		'extendedcrafting:enhanced_redstone_component',
		'extendedcrafting:ender_component',
		'extendedcrafting:enhanced_ender_component',
		'extendedcrafting:black_iron_slate',
		'extendedcrafting:crystaltine_component',
		'extendedcrafting:the_ultimate_component',
		'extendedcrafting:compressor',
		'#forge:ingots/bronze',
		'#forge:ingots/tin',
		'#forge:tools/copper',
		'extendedcrafting:advanced_table',
		'create:mechanical_mixer',
		'create:zinc_ingot',
		'create:mechanical_press',
		'create:encased_fan',
		'create:propeller',
		'create:empty_blaze_burner',
		'create:spout',
		'create:electron_tube',
		'create:brass_casing',
		'create:andesite_casing',
		'create:mechanical_saw',
		'create:brass_ingot',
		'create:windmill_bearing',
		'create:deployer',
		'create:mechanical_crafter',
		'extendedcrafting:elite_table',
		'extendedcrafting:ultimate_table',
		'extendedcrafting:basic_table',
		'create:water_wheel',
		'create:large_water_wheel',
		'create:steam_engine',
		'create:crushing_wheel',
		'create_new_age:generator_coil',
		'immersiveengineering:dust_coke',
		'immersiveengineering:coil_lv',
		'createaddition:spool',
		'createaddition:rolling_mill',
		'minecraft:clock',
		'projecte:transmutation_table',
		'torcherino:blocktorcherino',
		'projecte:condenser_mk1',
		'projecte:condenser_mk2',
		'create_dd:bronze_saw',
		'create_dd:bronze_drill',
		'create_dd:furnace_engine',
		'create_dd:industrial_iron_ingot',
		'create_dd:ember_alloy',
		'minecraft:blast_furnace',
		'createaddition:tesla_coil',
		'createaddition:alternator',
		'create_new_age:carbon_brushes',
		'create_new_age:energiser_t1',
		'createaddition:electric_motor',
		'createaddition:capacitor',
		'immersiveengineering:circuit_board',
		'#forge:ingots/constantan',
		'immersiveengineering:dust_constantan',
		'thermal:constantan_dust',
		'immersiveengineering:ingot_electrum',
		'thermal:electrum_ingot',
		'createdieselgenerators:oil_scanner',
		'createdieselgenerators:pumpjack_crank',
		'create_dd:industrial_casing',
		'thermal:rf_coil',
		'create_dd:steel_casing',
		'immersiveengineering:electron_tube',
		'minecraft:slime_ball',
		'create_dd:mithril_ingot',
		'thermal:emerald_dust',
		'thermal:device_rock_gen',
		'thermal:rose_gold_ingot',
		'thermal:fluid_cell_frame',
		'thermal_extra:soul_sand_dust',
		'create:large_cogwheel',
		'minecraft:weeping_vines',
		'minecraft:twisting_vines',
		'ae2:charger'
	]
	Output.forEach(Item => {
		e.remove({ output: Item })
	})

	// Input
	let Input = [

	]
	Input.forEach(Item => {
		e.remove({ input: Item })
	})

	// Thermal Mechines
	let Mechines = [
		'thermal:machine_brewer', 'thermal:machine_crystallizer', 'thermal:machine_crafter',
		'thermal:machine_bottler', 'thermal:machine_pyrolyzer', 'thermal:machine_refinery',
		'thermal:machine_furnace', 'thermal:machine_sawmill', 'thermal:machine_pulverizer',
		'thermal:machine_chiller', 'thermal:machine_crucible', 'thermal:machine_press',
		'thermal:machine_centrifuge', 'thermal:machine_insolator', 'thermal:machine_smelter',
	]
	Mechines.forEach(remove => {
		e.remove({ output: remove })
	})

	// 删除id
	let Remove_ID = [
		'thermal:devices/tree_extractor/tree_extractor_dark_oak',
		'thermal:devices/tree_extractor/tree_extractor_jungle',
		'create:milling/gravel',
		'create_dd:crafting/mechanical_belt_from_rubber',
		'ad_astra:alloying/steel_ingot_from_alloying_iron_ingot_and_coals',
		'immersiveengineering:blastfurnace/steel',
		'create:deploying/cogwheel',
		'immersiveengineering:crafting/raw_hammercrushing_iron',
		'immersiveengineering:crafting/hammercrushing_iron',
		'thermal:machine_frame',
		'melter:melting/cobble',
		'immersiveengineering:crafting/fluid_pipe',
		'thermal:energy_cell_frame',
		'immersiveengineering:blastfurnace/steel_block',
		'ratatouille:salt',
		'createdieselgenerators:crafting/engine_piston',
		'create:crafting/kinetics/cogwheel',
		'kubejs:kjs/create_large_cogwheel',
		'immersiveengineering:crafting/electrum_mix'
	]
	Remove_ID.forEach(ID => {
		e.remove({ id: ID })
	})

	// 删除Type
	let Remove_Type = [
		'createaddition:charging',
		'minecraft:smelting',
		'create_new_age:energising',
	]
	Remove_Type.forEach(Type => {
		e.remove({ type: Type })
	})

	//移除所有工作台合成齿轮配方
	e.remove({ output: '#forge:gears', type: "minecraft:crafting_shaped" })

	//删除Mod合成表
	let Remove_Mods_recipes = [

	]
	Remove_Mods_recipes.forEach(Type => {
		e.remove({ mod: Type })
	})
})