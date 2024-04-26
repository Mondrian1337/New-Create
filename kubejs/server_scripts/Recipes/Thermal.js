ServerEvents.recipes(e => {
	// Create
	const {
		compacting,
		crushing,
		cutting,
		deploying,
		emptying,
		filling,
		haunting,
		mechanical_crafting,
		milling,
		mixing,
		pressing,
		sandpaper_polishing,
		sequenced_assembly,
		splashing,
		item_application
	} = e.recipes.create
	// KubeJS
	const {
		shaped,
		shapeless
	} = e.recipes.kubejs
	// Minecraft
	const {
		blasting,
		campfire_cooking,
		crafting_shaped,
		crafting_shapeless,
		smelting,
		smithing_transform,
		smoking,
		stonecutting
	} = e.recipes.minecraft
	// Thermal
	const {
		bottler,
		brewer,
		centrifuge,
		chiller,
		compression_fuel,
		crucible,
		crystallizer,
		disenchantment_fuel,
		fisher_boost,
		furnace,
		gourmand_fuel,
		hive_extractor,
		insolator,
		insolator_catalyst,
		lapidary_fuel,
		magmatic_fuel,
		numismatic_fuel,
		potion_diffuser_boost,
		press,
		pulverizer,
		pulverizer_catalyst,
		pulverizer_recycle,
		pyrolyzer,
		refinery,
		rock_gen,
		sawmill,
		smelter,
		smelter_catalyst,
		smelter_recycle,
		stirling_fuel
	} = e.recipes.thermal

	// 橡胶
	compacting('2x thermal:rubber', [
		Fluid.of('thermal:latex', 200)
	])

	// 硫化橡胶
	campfire_cooking('thermal:cured_rubber', [
		'thermal:rubber'
	]).xp(10)

	// 植物乳胶
	e.custom({
		"type": "caupona:aspic_melt",
		"amount": 100,
		"aspic": { "item": "thermal:rubber" },
		"fluid": "thermal:latex",
		"time": 100
	})

	// 树汁提取器
	shaped('thermal:device_tree_extractor', [
		'PZP',
		'CBC',
		'PFP'
	], {
		P: '#minecraft:planks',
		C: '#create:casing',
		F: 'flopper:flopper',
		B: 'minecraft:bucket',
		Z: 'new_create:cast_iron_block'
	}).id('thermal:device_tree_extractor')

	// 樱花
	e.custom({
		"type": "thermal:tree_extractor",
		"trunk": 'minecraft:cherry_log',
		"leaves": 'minecraft:cherry_leaves',
		"result": { "fluid": "thermal:latex", "amount": 50 }
	}).id('thermal:devices/tree_extractor/tree_extractor_cherry')

	//金合欢
	e.custom({
		"type": "thermal:tree_extractor",
		"trunk": 'minecraft:acacia_log',
		"leaves": 'minecraft:acacia_leaves',
		"result": { "fluid": "thermal:latex", "amount": 50 }
	}).id('thermal:devices/tree_extractor/tree_extractor_acacia')

	// 白桦
	e.custom({
		"type": "thermal:tree_extractor",
		"trunk": 'minecraft:birch_log',
		"leaves": 'minecraft:birch_leaves',
		"result": { "fluid": "thermal:latex", "amount": 50 }
	}).id('thermal:devices/tree_extractor/tree_extractor_birch')

	// 橡树
	e.custom({
		"type": "thermal:tree_extractor",
		"trunk": 'minecraft:oak_log',
		"leaves": 'minecraft:oak_leaves',
		"result": { "fluid": "thermal:latex", "amount": 50 }
	}).id('thermal:devices/tree_extractor/tree_extractor_oak')

	// 云杉
	e.custom({
		"type": "thermal:tree_extractor",
		"trunk": 'minecraft:spruce_log',
		"leaves": 'minecraft:spruce_leaves',
		"result": { "fluid": "thermal:latex", "amount": 50 }
	}).id('thermal:devices/tree_extractor/tree_extractor_spruce')

	//丛林
	e.custom({
		"type": "thermal:tree_extractor",
		"trunk": "minecraft:jungle_log",
		"leaves": "minecraft:jungle_leaves",
		"result": { "fluid": "thermal:latex", "amount": 50 }
	})

	//深色
	e.custom({
		"type": "thermal:tree_extractor",
		"trunk": "minecraft:dark_oak_log",
		"leaves": "minecraft:dark_oak_leaves",
		"result": { "fluid": "thermal:latex", "amount": 50 }
	})

	// 塑料片
	chiller('2x new_create:plastic_sheet', [
		Fluid.of('new_create:mixed_gasoline', 150)
	]).energy(250)

	// 极速冷冻机
	shaped('thermal:machine_chiller', [
		'AFA',
		'BCB',
		'DED'
	], {
		A: '#forge:plates/industrial_iron',
		B: '#forge:gears/constantan',
		C: 'thermal:machine_frame',
		D: 'new_create:cast_iron_sheet',
		E: 'immersiveengineering:circuit_board',
		F: 'thermal:rf_coil'
	})

	// 流体精炼机
	shaped('thermal:machine_refinery', [
		'FAF',
		'BCB',
		'DED'
	], {
		A: 'immersiveengineering:circuit_board',
		B: '#forge:plates/invar',
		C: 'thermal:energy_cell_frame',
		D: '#forge:plates/industrial_iron',
		E: 'thermal:rf_coil',
		F: 'minecraft:bucket'
	})

	// 热解炉
	shaped('thermal:machine_pyrolyzer', [
		'ABA',
		'CDC',
		'EEE'
	], {
		A: '#forge:plates/nickel',
		B: 'create_dd:infernal_mechanism',
		C: 'thermal:rf_coil',
		D: 'thermal:energy_cell_frame',
		E: '#forge:plates/industrial_iron'
	})

	// 流体灌装机
	shaped('thermal:machine_bottler', [
		'AAA',
		'BCD',
		'EFE'
	], {
		A: 'thermal:invar_plate',
		B: 'thermal:signalum_glass',
		C: 'thermal:fluid_cell_frame',
		D: '#forge:gears/lumium',
		E: '#forge:plates/lead',
		F: 'create:fluid_tank'
	})

	// 秘银锭
	bottler('create_dd:mithril_ingot', [
		Fluid.of('new_create:mithril_fluid', 500),
		'#forge:ingots/silver'
	]).energy(1000)

	// 造石机
	shaped('thermal:device_rock_gen', [
		'ABA',
		'CDE',
		'FGF'
	], {
		A: 'create_dd:mithril_ingot',
		B: 'thermal:redstone_servo',
		C: 'minecraft:water_bucket',
		D: 'create_dd:mithril_casing',
		E: 'minecraft:lava_bucket',
		F: '#forge:ingots/invar',
		G: '#forge:gears/rose_gold'
	})

	// 玫瑰金粉
	crystallizer('2x thermal:rose_gold_dust', [
		Fluid.of('new_create:rose_gold_fluid', 200),
		'#forge:dusts/iron',
		'#forge:dusts/gold'
	]).energy(800)

	// 玫瑰金溶液
	crucible(Fluid.of('new_create:rose_gold_fluid', 400), [
		'create_things_and_misc:rose_quartz_sheet'
	]).energy(1200)

	//玫瑰金锭
	smelter('thermal:rose_gold_ingot', [
		'thermal:rose_gold_dust',
		'thermal:tar'
	])

	// 流体单元框架
	filling('thermal:fluid_cell_frame', [
		Fluid.of('new_create:high_grade_refined_oil'),
		'thermal:energy_cell_frame'
	])

	// 感应炉
	shaped('thermal:machine_smelter', [
		'AAA',
		'CBD',
		'AEA'
	], {
		A: 'thermal:invar_plate',
		B: 'new_create:infernal_mechanism',
		C: 'thermal:obsidian_glass',
		D: 'thermal:energy_cell_frame',
		E: 'new_create:cast_electron_tube'
	})

	// 灵魂沙粉末
	e.custom({
		"type": "vintageimprovements:vibrating",
		"ingredients": [{ "tag": "minecraft:soul_fire_base_blocks" }],
		"results": [
			{ "item": "thermal_extra:soul_sand_dust", "chance": 0.4 },
			{ "item": "minecraft:soul_sand", "chance": 0.3 },
			{ "item": "minecraft:soul_soil", "chance": 0.3 }
		],
		"processingTime": 100
	})

	// 硬化玻璃
	mixing('4x thermal:obsidian_glass', [
		'minecraft:fire_charge',
		'#minecraft:sand',
		'#forge:gems/quartz',
		'#forge:obsidian'
	]).heated().id('thermal:fire_charge/obsidian_glass_2')

	// 有机灌注机
	shaped('thermal:machine_insolator', [
		'PCP',
		'FGF',
		'IBI'
	], {
		P: 'new_create:cast_iron_sheet',
		C: 'new_create:cast_iron_casing',
		F: 'create:fluid_pipe',
		I: '#forge:ingots/cast_iron',
		B: '#forge:storage_blocks/cast_iron',
		G: '#thermal:glass/hardened'
	})

	// 硅
	smelter([
		'ae2:silicon',
		'thermal:sulfur_dust'
	], 'new_create:saw_silicon')
		.energy(4800).id('ae2:blasting/silicon_from_certus_quartz_dust')
})