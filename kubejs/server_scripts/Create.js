ServerEvents.recipes(e => {
	// Create
	let {
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
	let {
		shaped,
		shapeless
	} = e.recipes.kubejs
	// Minecraft
	let {
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
		A: 'kubejs:stone_hammer',
		B: '#minecraft:planks',
		C: 'minecraft:flint',
		D: 'minecraft:smooth_stone'
	}).damageIngredient('kubejs:stone_hammer')

	//石磨
	shaped('create:millstone', [
		'AEA',
		'CBC',
		'DDD'
	], {
		A: '#minecraft:planks',
		B: 'create:cogwheel',
		D: 'minecraft:smooth_stone',
		C: '#minecraft:logs',
		E: '#forge:hammer'
	}).damageIngredient('#forge:hammer')

	// 小齿轮(半成品)
	stonecutting('kubejs:in_cogwheel', [
		'#forge:treated_wood_slab'
	])
	cutting([
		Item.of('kubejs:in_cogwheel').withChance(1.0),
		Item.of('kubejs:in_cogwheel').withChance(0.3)
	], '#forge:treated_wood_slab')

	// 大齿轮(半成品)
	stonecutting('kubejs:in_large_cogwheel', [
		'#forge:treated_wood'
	])
	cutting([
		Item.of('kubejs:in_large_cogwheel').withChance(1.0),
		Item.of('kubejs:in_large_cogwheel').withChance(0.3)
	], '#forge:treated_wood')

	// 小齿轮
	shapeless('create:cogwheel', [
		'kubejs:in_cogwheel',
		'kubejs:primary_bearing',
		'#forge:hammer'
	]).damageIngredient('#forge:hammer')
	deploying('create:cogwheel', [
		'kubejs:in_cogwheel',
		'create:shaft'
	])

	// 大齿轮
	shapeless('create:large_cogwheel', [
		'kubejs:in_large_cogwheel',
		'kubejs:primary_bearing',
		'#forge:hammer'
	]).damageIngredient('#forge:hammer')
	deploying('create:large_cogwheel', [
		'kubejs:in_large_cogwheel',
		'create:shaft'
	])

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
		S: 'kubejs:charred_cobblestone',
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
		Fluid.of('kubejs:working_fluid', 250)
	])

	//煤粉
	milling([
		Item.of('mekanism:dust_coal', 2).withChance(0.6),
		Item.of('mekanism:dust_coal', 3).withChance(0.3),
	], '#minecraft:coals')

	//加工液
	mixing(Fluid.of('kubejs:working_fluid', 500), [
		'2x immersiveengineering:slag',
		Fluid.of('minecraft:water', 500)
	])

	//扇叶
	shaped('create:propeller', [
		' A ',
		'ABA',
		' A '
	], {
		A: "kubejs:cast_iron_sheet",
		B: '#create:shaft_add'
	})

	//烈焰人燃烧室
	shaped('create:empty_blaze_burner', [
		' A ',
		'ABA',
		' A '
	], {
		A: "kubejs:cast_iron_sheet",
		B: "minecraft:netherrack"
	})

	// 安山混合物
	shaped('kubejs:andesite_compound', [
		'AAA',
		'AWC',
		'CCC'
	], {
		A: '#forge:andesite/nuggets',
		C: '#forge:clay',
		W: 'minecraft:water_bucket'
	}).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')

	//安山混合液
	mixing(Fluid.of('kubejs:andesite_compound_fluid', 1000), [
		'kubejs:andesite_compound',
		Fluid.of('minecraft:water', 1000)
	]).heated()

	//注液器
	shaped('create:spout', [
		'BAB',
		'BCB',
		'BDB'
	], {
		A: "minecraft:copper_ingot",
		B: "kubejs:cast_iron_sheet",
		C: 'create:fluid_tank',
		D: '#forge:plates/copper'
	})

	//安山合金
	filling('create:andesite_alloy', [
		'minecraft:andesite',
		Fluid.of('kubejs:andesite_compound_fluid', 50)
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
		'FFF'
	], {
		D: "kubejs:cast_iron_sheet",
		E: "kubejs:cast_iron_ingot",
		F: "create:andesite_casing"
	})

	//黄铜锭
	mixing('2x create:brass_ingot', [
		'2x thermal:bronze_ingot',
		Fluid.of('kubejs:andesite_compound_fluid', 50)
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
		D: "kubejs:charred_cobblestone"
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
	sequenced_assembly('create:brass_casing', 'create:andesite_casing', [
		deploying('create:andesite_casing', ['create:andesite_casing', 'create:brass_sheet']),
		deploying('create:andesite_casing', ['create:andesite_casing', 'minecraft:redstone']),
		deploying('create:andesite_casing', ['create:andesite_casing', 'create:electron_tube']),
		pressing('create:andesite_casing', 'create:andesite_casing')
	]).loops(1).transitionalItem('create:andesite_casing')

	// 精密部件
	sequenced_assembly([
		Item.of('create:precision_mechanism').withChance(0.75),
		Item.of('create:cogwheel').withChance(0.1),
		Item.of('create:shaft').withChance(0.1),
		Item.of('create:electron_tube').withChance(0.05)
	], '#forge:plates/gold', [
		deploying('#forge:plates/gold', ['create:electron_tube', 'create:electron_tube']),
		deploying('#forge:plates/gold', ['#forge:nuggets/brass', '#forge:nuggets/brass']),
		deploying('#forge:plates/gold', ['minecraft:redstone', 'minecraft:redstone']),
		pressing('#forge:plates/gold', '#forge:plates/gold')
	]).loops(3).transitionalItem('#forge:plates/gold')

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
		'#minecraft:logs',
		'create:andesite_casing'
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
		D: 'kubejs:kinetic_mechanism'
	})

	// 碳板
	compacting('2x kubejs:carbon_plate', [
		'8x #forge:dusts/coal',
		Fluid.of('kubejs:working_fluid', 100)
	]).heated()

	// 碳棒
	mixing('2x kubejs:carbon_rod', [
		'8x kubejs:carbon_plate',
		'2x kubejs:coking_coal_rod',
		Fluid.of('kubejs:working_fluid', 200)
	]).heated()

	// 焦炭
	crushing([
		Item.of('immersiveengineering:dust_coke', 2).withChance(0.8),
		Item.of('immersiveengineering:dust_coke', 4).withChance(0.2)
	], 'thermal:coal_coke')

	// 焦炭棒
	compacting('kubejs:coking_coal_rod', [
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
		A: 'kubejs:carbon_plate',
		B: 'immersiveengineering:coil_lv',
		C: 'kubejs:carbon_rod',
		D: 'kubejs:inductive_mechanism'
	})

	// 空线轴
	shaped('createaddition:spool', [
		' A ',
		'DBC',
		' A '
	], {
		A: 'kubejs:cast_iron_sheet',
		B: '#forge:nuggets/iron',
		C: '#forge:hammer',
		D: '#forge:saw'
	}).damageIngredient('#forge:saw').damageIngredient('#forge:hammer')

	// 工业铁锭
	compacting('2x create_dd:industrial_iron_ingot', [
		'2x kubejs:cast_iron_ingot',
		Fluid.of('kubejs:working_fluid', 100)
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
		'kubejs:inductive_mechanism'
	], 'immersiveengineering:coil_lv', [
		pressing('immersiveengineering:coil_lv', 'immersiveengineering:coil_lv'),
		deploying('immersiveengineering:coil_lv', ['kubejs:carbon_plate', 'kubejs:carbon_plate']),
		deploying('immersiveengineering:coil_lv', ['create:electron_tube', 'create:electron_tube']),
		deploying('immersiveengineering:coil_lv', ['#forge:ingots/zinc', '#forge:ingots/zinc'])
	]).loops(1).transitionalItem('kubejs:in_inductive_mechanism')

	// 动力构件
	sequenced_assembly([
		'kubejs:kinetic_mechanism'
	], '#minecraft:logs', [
		cutting('#minecraft:logs', '#minecraft:logs'),
		pressing('#minecraft:logs', '#minecraft:logs'),
		deploying('#minecraft:logs', ['create:cogwheel', 'create:cogwheel']),
		deploying('#minecraft:logs', ['#create:shaft_add', '#create:shaft_add']),
		deploying('#minecraft:logs', ['create:andesite_alloy', 'create:andesite_alloy'])
	]).loops(1).transitionalItem('kubejs:in_kinetic_mechanism')

	// 交流发电机
	mechanical_crafting('createaddition:alternator', [
		' AAA ',
		'ABFBA',
		'BCDCB',
		'EBCBE'
	], {
		A: 'kubejs:carbon_plate',
		B: 'kubejs:cast_iron_sheet',
		C: 'immersiveengineering:coil_lv',
		D: 'create:shaft',
		E: '#forge:plates/brass',
		F: 'kubejs:inductive_mechanism'
	})

	// 碳刷
	shaped('create_new_age:carbon_brushes', [
		'AAA',
		'BCB',
		'AAA'
	], {
		A: 'kubejs:cast_iron_sheet',
		B: 'kubejs:carbon_plate',
		C: 'kubejs:carbon_rod'
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
		E: 'kubejs:inductive_mechanism',
		F: 'kubejs:zinc_electron_tube'
	})

	// 电镀锌
	e.custom({
		"type": "create_new_age:energising",
		"energy_needed": 1200,
		"ingredients": [
			{ "tag": "forge:ingots/zinc" }
		],
		"results": [
			{ "item": "kubejs:plating_zinc_ingot" }
		]
	})

	// 锌加工液
	compacting(Fluid.of('kubejs:zinc_fluid', 500), [
		Item.of('kubejs:plating_zinc_ingot', 2),
		Fluid.of('kubejs:working_fluid', 250)
	]).heated()

	// 锌电子管
	filling('kubejs:zinc_electron_tube', [
		'#forge:plates/zinc',
		Fluid.of('kubejs:zinc_fluid', 100)
	])

	// 康铜粉
	mixing('4x immersiveengineering:dust_constantan', [
		'2x immersiveengineering:dust_copper',
		'2x immersiveengineering:dust_nickel',
		Fluid.of('kubejs:working_fluid', 50)
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
		deploying('immersiveengineering:circuit_board', ['kubejs:inductive_mechanism', 'kubejs:inductive_mechanism']),
		deploying('immersiveengineering:circuit_board', ['kubejs:zinc_electron_tube', 'kubejs:zinc_electron_tube'])
	]).transitionalItem('immersiveengineering:circuit_board').loops(1).damageIngredient('immersiveengineering:wirecutter')

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
		D: 'kubejs:cast_electron_tube',
		E: 'createaddition:electric_motor',
		F: 'create_things_and_misc:vibration_mechanism',
		G: 'create:brass_casing'
	})

	// 铸铁量产
	compacting(Fluid.of('kubejs:cast_fluid', 400), [
		'2x minecraft:iron_ingot',
		'mekanism:dust_coal'
	]).heated()

	filling('kubejs:cast_iron_ingot', [
		'#forge:plates/iron',
		Fluid.of('kubejs:cast_fluid', 100)
	])

	// 铸铁电子管
	filling('kubejs:cast_electron_tube', [
		'kubejs:zinc_electron_tube',
		Fluid.of('kubejs:cast_fluid', 100)
	])

	// 钢粉
	mixing('2x immersiveengineering:dust_steel', [
		'2x immersiveengineering:dust_iron',
		'2x mekanism:dust_coal',
		Fluid.of('kubejs:working_fluid', 100)
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
		A: 'kubejs:cast_iron_sheet',
		B: 'kubejs:carbon_plate',
		C: '#forge:ingots/zinc',
		D: 'minecraft:lead'
	}).id('createdieselgenerators:crafting/pumpjack_head')

	// 金属梁
	shaped('4x create:metal_girder', [
		'AAA',
		'BBB'
	], {
		A: 'kubejs:cast_iron_sheet',
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
	shaped('4x createdieselgenerators:distillation_controller',[
		'ABA',
		'CDC'
	],{
		A: 'create:fluid_pipe',
		B: 'minecraft:compass',
		C: '#forge:plates/andesite_alloy',
		D: '#forge:gears/invar'
	}).id('createdieselgenerators:crafting/distillation_controller')

	// 红石通量线圈
	sequenced_assembly(
		'thermal:rf_coil',
		'create_things_and_misc:rose_quartz_sheet',[
		deploying('create_things_and_misc:rose_quartz_sheet',['minecraft:redstone','minecraft:redstone']),
		deploying('create_things_and_misc:rose_quartz_sheet',['#forge:wires/gold','#forge:wires/gold']),
		deploying('create_things_and_misc:rose_quartz_sheet',['#forge:nuggets/gold','#forge:nuggets/gold']),
		deploying('create_things_and_misc:rose_quartz_sheet',['immersiveengineering:wirecutter','immersiveengineering:wirecutter'])
	]).loops(1).transitionalItem('create_things_and_misc:rose_quartz_sheet').damageIngredient('immersiveengineering:wirecutter')

	// 玫瑰石英量产产线
	mixing(
		Fluid.of('kubejs:rose_quartz_fluid',200),[
			'4x minecraft:redstone',
			'4x minecraft:quartz'
		]).heated()

	filling(
		'create:polished_rose_quartz',[
			'minecraft:quartz',
			Fluid.of('kubejs:rose_quartz_fluid',100)
		])

	// 机器框架
	item_application(
		'thermal:machine_frame',[
			'create_dd:steel_casing',
			'thermal:rf_coil'
		])

	// 智能构建
	sequenced_assembly(
		[
			Item.of('create_dd:calculation_mechanism').withChance(0.6),
			Item.of('create:cogwheel').withChance(0.2),
  			Item.of('ad_astra:steel_ingot').withChance(0.1),
			Item.of('minecraft:oak_button').withChance(0.1)],
			'#forge:plates/steel',[
			pressing('#forge:plates/steel','#forge:plates/steel'),
			deploying('#forge:plates/steel',['immersiveengineering:plate_duroplast','immersiveengineering:plate_duroplast']),
			deploying('#forge:plates/steel',['create:cogwheel','create:cogwheel']),
			deploying('#forge:plates/steel',['#forge:nuggets/brass','#forge:nuggets/brass']),
			pressing('#forge:plates/steel','#forge:plates/steel')
		]).loops(2).transitionalItem('#forge:plates/steel')

	// 粘液球量产
	mixing('minecraft:slime_ball',[
		'create:dough',
		'minecraft:lime_dye',
		Fluid.water(200)
	])
})