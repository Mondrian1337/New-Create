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
	const { extruding } = e.recipes.create_mechanical_extruder
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

	//手摇曲柄
	shaped('create:hand_crank', [
		'A  ',
		'CBC',
		'  D'
	], {
		A: 'new_create:stone_hammer',
		B: '#minecraft:planks',
		C: 'minecraft:flint',
		D: 'minecraft:smooth_stone'
	}).damageIngredient('new_create:stone_hammer')

	//石磨
	shaped('create:millstone', [
		'A A',
		'CBC',
		'DDD'
	], {
		A: '#minecraft:planks',
		B: '#forge:ingots/copper',
		D: 'minecraft:smooth_stone',
		C: '#minecraft:logs',
	})

	// 安山岩
	extruding('minecraft:andesite', [
		Fluid.of('new_create:andesite_compound_fluid'),
		Fluid.of('minecraft:lava')
	])

	// 小齿轮(半成品)
	stonecutting('new_create:in_cogwheel', [
		'#forge:treated_wood_slab'
	])
	cutting([
		Item.of('new_create:in_cogwheel').withChance(1.0),
		Item.of('new_create:in_cogwheel').withChance(0.15)
	], '#forge:treated_wood_slab')

	// 大齿轮(半成品)
	stonecutting('new_create:in_large_cogwheel', [
		'#forge:treated_wood'
	])
	cutting([
		Item.of('new_create:in_large_cogwheel').withChance(1.0),
		Item.of('new_create:in_large_cogwheel').withChance(0.15)
	], '#forge:treated_wood')

	// 小齿轮
	shapeless('create:cogwheel', [
		'new_create:in_cogwheel',
		'new_create:primary_bearing',
		'#forge:hammer'
	]).damageIngredient('#forge:hammer')
	deploying('create:cogwheel', [
		'new_create:in_cogwheel',
		'create:shaft'
	])

	// 大齿轮
	shapeless('create:large_cogwheel', [
		'new_create:in_large_cogwheel',
		'new_create:primary_bearing',
		'#forge:hammer'
	]).damageIngredient('#forge:hammer')
	deploying('create:large_cogwheel', [
		'new_create:in_large_cogwheel',
		'create:shaft'
	])
	deploying('create:large_cogwheel', [
		'create:cogwheel',
		'#forge:treated_wood'
	]).id('create:deploying/large_cogwheel')

	// 铜板
	shapeless('create:copper_sheet', [
		'#forge:ingots/copper',
		'#forge:hammer'
	]).damageIngredient('#forge:hammer')

	// 早期出矿
	milling([
		Item.of('create:crushed_raw_iron').withChance(0.2),
		Item.of('create:crushed_raw_copper').withChance(0.3),
		Item.of('create:crushed_raw_zinc').withChance(0.1),
		Item.of('create:crushed_raw_tin').withChance(0.25),
		Item.of('create:crushed_raw_silver').withChance(0.05)
	], '#forge:gravel')

	// 粗锡=>粉碎锡
	milling([
		Item.of('2x create:crushed_raw_tin').withCount(1),
		Item.of('create:crushed_raw_tin').withChance(0.15)
	], '#forge:raw_materials/tin')

	//搅拌器
	shaped('create:whisk', [
		' A ',
		'BAB',
		'BBB'
	], {
		A: 'minecraft:flint',
		B: '#forge:plates/bronze'
	}).id('create:crafting/kinetics/whisk')

	// 工作盆
	shaped('create:basin', [
		'S S',
		'SCS',
		'SSS'
	], {
		S: 'new_create:charred_cobblestone',
		C: '#forge:ingots/copper'
	})

	// 流体储罐
	shaped('create:fluid_tank', [
		'C',
		'G',
		'C'
	], {
		C: '#forge:ingots/copper',
		G: '#forge:glass'
	}).id('create:crafting/kinetics/fluid_tank')

	//铁锭
	mixing('minecraft:iron_ingot', [
		Item.of('create:crushed_raw_iron'),
		Item.of('#forge:dusts/coal'),
		Fluid.of('new_create:working_fluid', 250)
	])

	//煤粉
	milling([
		Item.of('mekanism:dust_coal', 2).withChance(0.6),
		Item.of('mekanism:dust_coal', 3).withChance(0.3),
	], '#minecraft:coals')

	//加工液
	mixing(Fluid.of('new_create:working_fluid', 500), [
		'2x #forge:slag',
		Fluid.of('minecraft:water', 500)
	])

	//扇叶
	shaped('create:propeller', [
		' A ',
		'ABA',
		' A '
	], {
		A: "new_create:cast_iron_sheet",
		B: '#create:shaft_add'
	})

	//烈焰人燃烧室
	shaped('create:empty_blaze_burner', [
		' A ',
		'ABA',
		' A '
	], {
		A: "new_create:cast_iron_sheet",
		B: "minecraft:netherrack"
	})

	// 安山混合物
	mixing('new_create:andesite_compound', [
		'4x #forge:andesite/nuggets',
		'4x #forge:clay',
		Fluid.of('minecraft:water', 1000)
	])

	//安山混合液
	mixing(Fluid.of('new_create:andesite_compound_fluid', 500), [
		'new_create:andesite_compound',
		Fluid.of('minecraft:water', 1000)
	]).heated()

	//注液器
	shaped('create:spout', [
		'BAB',
		'BCB',
		' R '
	], {
		A: "minecraft:copper_ingot",
		B: "new_create:cast_iron_sheet",
		C: 'create:fluid_tank',
		R: '#forge:cured_rubber'
	})

	//安山合金
	filling('create:andesite_alloy', [
		'minecraft:andesite',
		Fluid.of('new_create:andesite_compound_fluid', 50)
	])

	//安山机壳
	item_application('create:andesite_casing', [
		'#minecraft:logs',
		'create:andesite_alloy'
	])

	//动力锯
	shaped('create:mechanical_saw', [
		' D ',
		'DED',
		'FSF'
	], {
		D: "new_create:cast_iron_sheet",
		E: "new_create:cast_iron_ingot",
		F: "create:andesite_casing",
		S: '#create:shaft_add'
	})

	//黄铜锭
	mixing('2x create:brass_ingot', [
		'2x thermal:bronze_ingot',
		Fluid.of('new_create:andesite_compound_fluid', 50)
	]).heated()

	// 风车轴承
	shaped('create:windmill_bearing', [
		'AAA',
		'BCB',
		'DDD'
	], {
		A: "#minecraft:planks",
		B: "#minecraft:logs",
		C: "create:andesite_casing",
		D: "new_create:charred_cobblestone"
	})

	// 电子管
	shaped('create:electron_tube', [
		' A ',
		' B ',
		' C '
	], {
		A: 'create:polished_rose_quartz',
		B: 'create:iron_sheet',
		C: 'minecraft:redstone'
	})

	// 传送带
	shaped('2x create:belt_connector', [
		'CCC',
		'DDD'
	], {
		C: '#forge:cured_rubber',
		D: 'minecraft:dried_kelp'
	}).id('create:crafting/kinetics/belt_connector')

	// 黄铜机壳
	shapeless('create:brass_casing', [
		'#forge:plates/brass',
		'create:electron_tube',
		'#forge:dusts/redstone',
		'create:andesite_casing'
	]).id('create:item_application/brass_casing_from_wood')

	// 精密部件
	sequenced_assembly([
		'create:precision_mechanism'
	], '#forge:plates/gold', [
		deploying('#forge:plates/gold', ['create:electron_tube', 'create:electron_tube']),
		deploying('#forge:plates/gold', ['#forge:nuggets/brass', '#forge:nuggets/brass']),
		deploying('#forge:plates/gold', ['minecraft:redstone', 'minecraft:redstone']),
		pressing('#forge:plates/gold', '#forge:plates/gold')
	]).loops(1).transitionalItem('#forge:plates/gold')

	// 动力合成器
	sequenced_assembly('7x create:mechanical_crafter', 'create:brass_casing', [
		cutting('create:brass_casing', 'create:brass_casing'),
		deploying('create:brass_casing', ['create:cogwheel', 'create:cogwheel']),
		deploying('create:brass_casing', ['create:precision_mechanism', 'create:precision_mechanism']),
		deploying('create:brass_casing', ['create:electron_tube', 'create:electron_tube']),
		deploying('create:brass_casing', ['#forge:ingots/brass', '#forge:ingots/brass']),
		pressing('create:brass_casing', 'create:brass_casing')
	]).loops(1).transitionalItem('create:brass_casing')

	// 玫瑰石英
	shaped('8x create:rose_quartz', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'minecraft:quartz',
		B: 'minecraft:redstone_block'
	})

	// 水车
	item_application('create:water_wheel', [
		'create:andesite_casing',
		'#minecraft:logs'
	])

	// 大水车
	shaped('create:large_water_wheel', [
		' A ',
		'ABA',
		' A '
	], {
		B: 'create:water_wheel',
		A: '#minecraft:logs'
	})

	// 蒸汽引擎
	sequenced_assembly('create_sa:steam_engine', '#forge:plates/brass', [
		deploying('#forge:plates/brass', ['minecraft:piston', 'minecraft:piston']),
		deploying('#forge:plates/brass', ['create:fluid_tank', 'create:fluid_tank']),
		deploying('#forge:plates/brass', ['#create:shaft_add', '#create:shaft_add']),
		pressing('#forge:plates/brass', '#forge:plates/brass')
	]).loops(2).transitionalItem('#forge:plates/brass')

	// 粉碎轮
	mechanical_crafting('2x create:crushing_wheel', [
		' AAA ',
		'ABCBA',
		'ACDCA',
		'ABCBA',
		' AAA '
	], {
		A: 'minecraft:smooth_stone',
		B: 'create:andesite_alloy',
		C: '#minecraft:planks',
		D: 'new_create:kinetic_mechanism'
	})

	// 碳板
	compacting('2x new_create:carbon_plate', [
		'8x #forge:dusts/coal',
		Fluid.of('new_create:working_fluid', 100)
	]).heated()

	// 碳棒
	mixing('2x new_create:carbon_rod', [
		'8x new_create:carbon_plate',
		'2x new_create:coking_coal_rod',
		Fluid.of('new_create:working_fluid', 200)
	]).heated()

	// 焦炭
	crushing([
		Item.of('immersiveengineering:dust_coke', 2).withChance(0.8),
		Item.of('immersiveengineering:dust_coke', 4).withChance(0.2)
	], 'thermal:coal_coke')

	// 焦炭棒
	compacting('new_create:coking_coal_rod', [
		'4x immersiveengineering:dust_coke',
		'#create:shaft_add',
		Fluid.of("minecraft:lava", 25)
	]).heated()

	// 发电机线圈
	mechanical_crafting('create_new_age:generator_coil', [
		' ABA ',
		'ABCBA',
		'BCDCB',
		'ABCBA',
		' ABA '
	], {
		A: 'new_create:carbon_plate',
		B: 'immersiveengineering:coil_lv',
		C: 'new_create:carbon_rod',
		D: 'new_create:inductive_mechanism'
	})

	// 空线轴
	shaped('createaddition:spool', [
		' A ',
		'DBC',
		' A '
	], {
		A: 'new_create:cast_iron_sheet',
		B: '#forge:nuggets/iron',
		C: '#forge:hammer',
		D: '#forge:saw'
	}).damageIngredient('#forge:saw').damageIngredient('#forge:hammer')

	// 工业铁锭
	compacting('2x create_dd:industrial_iron_ingot', [
		'2x new_create:cast_iron_ingot',
		Fluid.of('new_create:working_fluid', 100)
	]).heated()

	// 余烬合金
	shaped('create_dd:ember_alloy', [
		'AB',
		'BC'
	], {
		A: 'create:cinder_flour',
		B: 'minecraft:nether_brick',
		C: 'minecraft:blaze_powder'
	})

	// 飞轮引擎
	mechanical_crafting('create_dd:furnace_engine', [
		'AAFB',
		'ACDE',
		'AAFB'
	], {
		A: 'create_dd:industrial_casing',
		B: 'create:copper_casing',
		C: 'create_dd:infernal_mechanism',
		D: 'create:shaft',
		E: 'createdieselgenerators:engine_piston',
		F: '#forge:ingots/zinc'
	})

	// 电磁构件
	sequenced_assembly([
		'new_create:inductive_mechanism'
	], 'immersiveengineering:coil_lv', [
		pressing('immersiveengineering:coil_lv', 'immersiveengineering:coil_lv'),
		deploying('immersiveengineering:coil_lv', ['new_create:carbon_plate', 'new_create:carbon_plate']),
		deploying('immersiveengineering:coil_lv', ['create:electron_tube', 'create:electron_tube']),
		deploying('immersiveengineering:coil_lv', ['#forge:ingots/zinc', '#forge:ingots/zinc'])
	]).loops(1).transitionalItem('new_create:in_inductive_mechanism')

	// 动力构件
	sequenced_assembly([
		'new_create:kinetic_mechanism'
	], '#minecraft:wooden_slabs', [
		deploying('#minecraft:wooden_slabs', ['create:cogwheel', 'create:cogwheel']),
		deploying('#minecraft:wooden_slabs', ['#create:shaft_add', '#create:shaft_add']),
		deploying('#minecraft:wooden_slabs', ['create:andesite_alloy', 'create:andesite_alloy'])
	]).loops(1).transitionalItem('new_create:in_kinetic_mechanism')

	// 密封构件
	sequenced_assembly([
		'new_create:sealed_mechanism'
	], 'new_create:kinetic_mechanism', [
		deploying('new_create:sealed_mechanism', ['new_create:sealed_mechanism', '#forge:cured_rubber']),
		deploying('new_create:sealed_mechanism', ['new_create:sealed_mechanism', '#forge:nuggets/iron'])
	]).loops(8).transitionalItem('new_create:in_sealed_mechanism')

	// 交流发电机
	mechanical_crafting('createaddition:alternator', [
		' AAA ',
		'ABFBA',
		'BCDCB',
		'EBCBE'
	], {
		A: 'new_create:carbon_plate',
		B: 'new_create:cast_iron_sheet',
		C: 'immersiveengineering:coil_lv',
		D: 'create:shaft',
		E: '#forge:plates/brass',
		F: 'new_create:inductive_mechanism'
	})

	// 碳刷
	shaped('create_new_age:carbon_brushes', [
		'AAA',
		'BCB',
		'AAA'
	], {
		A: 'new_create:cast_iron_sheet',
		B: 'new_create:carbon_plate',
		C: 'new_create:carbon_rod'
	})

	// 普通激发器
	item_application('create_new_age:energiser_t1', [
		'create:railway_casing',
		'minecraft:lightning_rod'
	])

	// 黑曜石粉
	crushing([
		Item.of('create:powdered_obsidian', 4).withChance(0.4),
		Item.of('create:powdered_obsidian', 3).withChance(0.3),
		Item.of('create:powdered_obsidian', 2).withChance(0.3)
	], '#forge:obsidian')

	// 电动马达
	mechanical_crafting('createaddition:electric_motor', [
		'  A  ',
		' BCB ',
		'BDEDB',
		' BFB '
	], {
		A: 'createaddition:gold_spool',
		B: '#forge:plates/brass',
		C: 'create:shaft',
		D: 'createaddition:capacitor',
		E: 'new_create:inductive_mechanism',
		F: 'new_create:zinc_electron_tube'
	})

	// 电镀锌
	e.custom({
		"type": "create_new_age:energising",
		"energy_needed": 1200,
		"ingredients": [{ "tag": "forge:ingots/zinc" }],
		"results": [{ "item": "new_create:plating_zinc_ingot" }]
	})

	// 锌加工液
	compacting(Fluid.of('new_create:zinc_fluid', 500), [
		Item.of('new_create:plating_zinc_ingot', 2),
		Fluid.of('new_create:working_fluid', 250)
	]).heated()

	// 锌电子管
	filling('new_create:zinc_electron_tube', [
		'#forge:plates/zinc',
		Fluid.of('new_create:zinc_fluid', 100)
	])

	// 康铜粉
	mixing('4x immersiveengineering:dust_constantan', [
		'2x immersiveengineering:dust_copper',
		'2x immersiveengineering:dust_nickel',
		Fluid.of('new_create:working_fluid', 50)
	]).heated()

	// 康铜锭
	blasting('immersiveengineering:ingot_constantan', [
		'#forge:dusts/constantan'
	])

	// 电路板
	sequenced_assembly('immersiveengineering:circuit_board', 'createaddition:zinc_sheet', [
		deploying('createaddition:zinc_sheet', ['#forge:wires/copper', '#forge:wires/copper']),
		deploying('createaddition:zinc_sheet', ['immersiveengineering:component_electronic', 'immersiveengineering:component_electronic']),
		deploying('createaddition:zinc_sheet', ['#forge:nuggets/copper', '#forge:nuggets/copper']),
		deploying('createaddition:zinc_sheet', ['create:electron_tube', 'create:electron_tube'])
	]).transitionalItem('createaddition:zinc_sheet').loops(1)

	// 逻辑电路板
	sequenced_assembly('immersiveengineering:logic_circuit', 'immersiveengineering:circuit_board', [
		deploying('immersiveengineering:circuit_board', ['immersiveengineering:wirecutter', 'immersiveengineering:wirecutter']),
		deploying('immersiveengineering:circuit_board', ['createaddition:copper_wire', 'createaddition:copper_wire']),
		deploying('immersiveengineering:circuit_board', ['new_create:inductive_mechanism', 'new_create:inductive_mechanism']),
		deploying('immersiveengineering:circuit_board', ['new_create:zinc_electron_tube', 'new_create:zinc_electron_tube'])
	]).transitionalItem('immersiveengineering:circuit_board').loops(1).damageIngredient('immersiveengineering:wirecutter')

	// 坚固板
	sequenced_assembly([
		Item.of('create:sturdy_sheet').withChance(0.75),
		Item.of('minecraft:gravel').withChance(0.25)
	], '#forge:dusts/obsidian', [
		pressing('create:unprocessed_obsidian_sheet', [
			'create:unprocessed_obsidian_sheet'
		])
	]).loops(10).transitionalItem('create:unprocessed_obsidian_sheet')

	// 特斯拉线圈
	mechanical_crafting('createaddition:tesla_coil', [
		' ABA ',
		'ACBCA',
		'ADEDA',
		'ACFCA',
		'GGGGG'
	], {
		A: '#forge:plates/brass',
		B: '#forge:rods/iron',
		C: 'createaddition:capacitor',
		D: 'new_create:cast_electron_tube',
		E: 'createaddition:electric_motor',
		F: 'create_things_and_misc:vibration_mechanism',
		G: 'create:brass_casing'
	})

	// 铸铁量产
	compacting(Fluid.of('new_create:cast_fluid', 400), [
		'2x minecraft:iron_ingot',
		'mekanism:dust_coal'
	]).heated()

	filling('new_create:cast_iron_ingot', [
		'#forge:plates/iron',
		Fluid.of('new_create:cast_fluid', 100)
	])

	// 铸铁电子管
	filling('new_create:cast_electron_tube', [
		'new_create:zinc_electron_tube',
		Fluid.of('new_create:cast_fluid', 100)
	])

	// 钢粉
	mixing('2x immersiveengineering:dust_steel', [
		'2x immersiveengineering:dust_iron',
		'2x mekanism:dust_coal',
		Fluid.of('new_create:working_fluid', 100)
	]).heated()

	// 铁粉
	crushing([
		Item.of('immersiveengineering:dust_iron', 5).withChance(0.1),
		Item.of('immersiveengineering:dust_iron', 3).withChance(0.4),
		Item.of('immersiveengineering:dust_iron', 2).withChance(0.5)
	], '#forge:ores/iron')

	// 原油探测器
	shaped('createdieselgenerators:oil_scanner', [
		'ABA',
		'DCD',
		' C '
	], {
		A: 'create:andesite_alloy',
		B: 'thermal:silver_gear',
		C: '#forge:rods/iron',
		D: '#forge:plates/iron'
	})

	// 抽油机驴头
	shaped('createdieselgenerators:pumpjack_head', [
		'ABA',
		'CDC',
		'ABA'
	], {
		A: 'new_create:cast_iron_sheet',
		B: 'new_create:carbon_plate',
		C: '#forge:ingots/zinc',
		D: 'minecraft:lead'
	}).id('createdieselgenerators:crafting/pumpjack_head')

	// 金属梁
	shaped('4x create:metal_girder', [
		'AAA',
		'BBB'
	], {
		A: 'new_create:cast_iron_sheet',
		B: 'create:andesite_alloy'
	}).id('create:crafting/kinetics/metal_girder')

	// 抽油机曲柄
	mechanical_crafting('createdieselgenerators:pumpjack_crank', [
		'ABA',
		' C ',
		'DAD',
		'EFE'
	], {
		A: 'create:shaft',
		B: '#forge:plates/iron',
		C: 'create_dd:integrated_mechanism',
		D: 'create:andesite_alloy',
		E: '#forge:plates/zinc',
		F: 'create_dd:industrial_casing'
	})

	// 集成构建
	sequenced_assembly(
		'create_dd:integrated_mechanism',
		'create_dd:integrated_circuit', [
		deploying('create_dd:integrated_circuit', ['create_dd:integrated_circuit', 'create:electron_tube']),
		deploying('create_dd:integrated_circuit', ['create_dd:integrated_circuit', '#forge:gears/gold']),
		deploying('create_dd:integrated_circuit', ['create_dd:integrated_circuit', 'minecraft:lapis_lazuli'])
	]).loops(1).transitionalItem('create_dd:integrated_mechanism')

	// 分馏控制器
	shaped('4x createdieselgenerators:distillation_controller', [
		'ABA',
		'CDC'
	], {
		A: 'create:fluid_pipe',
		B: 'minecraft:compass',
		C: '#forge:plates/andesite_alloy',
		D: '#forge:gears/invar'
	}).id('createdieselgenerators:crafting/distillation_controller')

	// 红石通量线圈
	sequenced_assembly(
		'thermal:rf_coil',
		'create_things_and_misc:rose_quartz_sheet', [
		deploying('create_things_and_misc:rose_quartz_sheet', ['minecraft:redstone', 'minecraft:redstone']),
		deploying('create_things_and_misc:rose_quartz_sheet', ['#forge:wires/gold', '#forge:wires/gold']),
		deploying('create_things_and_misc:rose_quartz_sheet', ['#forge:nuggets/gold', '#forge:nuggets/gold']),
		deploying('create_things_and_misc:rose_quartz_sheet', ['immersiveengineering:wirecutter', 'immersiveengineering:wirecutter'])
	]).loops(1).transitionalItem('create_things_and_misc:rose_quartz_sheet').damageIngredient('immersiveengineering:wirecutter')

	// 玫瑰石英量产产线
	mixing(Fluid.of('new_create:rose_quartz_fluid', 200), [
		'4x minecraft:redstone',
		'4x minecraft:quartz'
	]).heated()

	filling('create:polished_rose_quartz', [
		'minecraft:quartz',
		Fluid.of('new_create:rose_quartz_fluid', 100)
	])

	// 机器框架
	item_application('thermal:machine_frame', [
		'create_dd:steel_casing',
		'thermal:rf_coil'
	])

	// 智能构建
	sequenced_assembly([
		'create_dd:calculation_mechanism'
	], '#forge:plates/steel', [
		pressing('#forge:plates/steel', '#forge:plates/steel'),
		deploying('#forge:plates/steel', ['immersiveengineering:plate_duroplast', 'immersiveengineering:plate_duroplast']),
		deploying('#forge:plates/steel', ['create:cogwheel', 'create:cogwheel']),
		deploying('#forge:plates/steel', ['#forge:nuggets/brass', '#forge:nuggets/brass']),
		pressing('#forge:plates/steel', '#forge:plates/steel')
	]).loops(1).transitionalItem('#forge:plates/steel')

	// 粘液球量产
	mixing('minecraft:slime_ball', [
		'create:dough',
		'minecraft:lime_dye',
		Fluid.water(200)
	])

	// 计算构件
	sequenced_assembly('new_create:calculation_mechanism', '#forge:plates/lumium', [
		deploying('#forge:plates/lumium', ['#forge:gears/invar', '#forge:gears/invar']),
		deploying('#forge:plates/lumium', ['createaddition:capacitor', 'createaddition:capacitor']),
		deploying('#forge:plates/lumium', ['#forge:nuggets/lead', '#forge:nuggets/lead']),
		deploying('#forge:plates/lumium', ['immersiveengineering:component_electronic_adv', 'immersiveengineering:component_electronic_adv']),
		deploying('#forge:plates/lumium', ['immersiveengineering:wirecutter', 'immersiveengineering:wirecutter']),
		pressing('#forge:plates/lumium', '#forge:plates/lumium')
	]).loops(1).transitionalItem('#forge:plates/lumium').damageIngredient('immersiveengineering:wirecutter')

	// 下界构件
	sequenced_assembly([
		'new_create:infernal_mechanism'
	], 'create:precision_mechanism', [
		filling('new_create:infernal_mechanism', ['new_create:infernal_mechanism', Fluid.of('minecraft:lava', 100)]),
		deploying('new_create:infernal_mechanism', ['new_create:infernal_mechanism', '#forge:plates/obsidian']),
		filling('new_create:infernal_mechanism', ['new_create:infernal_mechanism', Fluid.of('new_create:soul', 100)])
	]).loops(1).transitionalItem('new_create:in_infernal_mechanism')

	// 加强电子管量产
	filling('2x immersiveengineering:toolupgrade_revolver_electro', [
		'immersiveengineering:circuit_board',
		Fluid.of('new_create:high_grade_refined_oil', 200)
	])

	// 振动台
	mechanical_crafting('vintageimprovements:vibrating_table', [
		'A   A',
		'AWFWA',
		'HSPSH',
		'ASVSA',
		'ACCCA'
	], {
		A: '#forge:andesite_alloy',
		S: '#vintageimprovements:springs',
		C: 'create:andesite_casing',
		P: 'create:piston_extension_pole',
		F: '#minecraft:wooden_pressure_plates',
		H: '#create:shaft_add',
		V: 'create_things_and_misc:vibration_mechanism',
		W: '#minecraft:wooden_slabs'
	}).id('vintageimprovements:craft/vibrating_table')

	// 铸铁机壳
	filling('new_create:cast_iron_casing', [
		Fluid.of('new_create:cast_fluid', 100),
		'#forge:treated_wood'
	])

	// 造石机
	shaped('create_mechanical_extruder:mechanical_extruder', [
		' E ',
		'FCF',
		'JBJ'
	], {
		F: 'flopper:flopper',
		E: 'createdieselgenerators:engine_piston',
		B: '#forge:storage_blocks/cast_iron',
		C: 'create:andesite_funnel',
		J: 'create:brass_casing'
	}).id('create_mechanical_extruder:mechanical_extruder')

	// 硅晶
	e.custom({
		"type": "create:sequenced_assembly",
		"ingredient": { "item": "ae2:silicon" },
		"results": [{ "item": "new_create:silicon_crystal" }],
		"sequence": [{
			"type": "vintageimprovements:polishing",
			"speed_limits": 3,
			"ingredients": [{ "item": "ae2:silicon" }],
			"results": [{ "item": "new_create:silicon_crystal" }],
			"processingTime": 20
		}],
		"loops": 5,
		"transitionalItem": { "item": "ae2:silicon" }
	})

	// 砂带
	shaped('vintageimprovements:grinder_belt', [
		'SSS',
		'SBS',
		'SSS'
	], {
		S: '#create:sandpaper',
		B: 'create:belt_connector'
	}).id('vintageimprovements:craft/grinder_belt')

	// 砂带磨床
	shaped('vintageimprovements:belt_grinder', [
		'GGG',
		'AMA',
		'CSC'
	], {
		G: 'vintageimprovements:grinder_belt',
		A: '#forge:andesite_alloy',
		M: 'create:precision_mechanism',
		C: 'create:andesite_casing',
		S: '#create:shaft_add'
	}).id('vintageimprovements:craft/belt_grinder')
})