ServerEvents.recipes(e => {
	const {
		create,
		create_mechanical_extruder,
		immersiveengineering,
		kubejs,
		melter,
		minecraft,
		thermal
	} = e.recipes

	// 木板
	e.forEachRecipe({
		type: 'crafting_shapeless',
		input: '#minecraft:logs',
		output: '#minecraft:planks'
	}, Recipes => {
		let {
			originalRecipeIngredients,
			originalRecipeResult
		} = Recipes
		e.shapeless(
			originalRecipeResult.withCount(2),
			originalRecipeIngredients.toArray().concat([
				'farmersdelight:flint_knife'
			])
		).damageIngredient('farmersdelight:flint_knife').id(Recipes.getId())
	})

	// 黏土
	create.splashing(Item.of('minecraft:clay_ball').withChance(0.5), [
		'new_create:dust'
	])

	// 铅制汤锅
	kubejs.shaped('caupona:lead_stew_pot', [
		'CCC',
		'CRC',
		'CCC'
	], {
		C: '#forge:plates/cast_iron',
		R: '#forge:rods/wooden'
	}).id('caupona:crafting/lead_stew_pot')

	// 铸铁煎锅
	create.filling('caupona:lead_frying_pan', [
		Fluid.of('new_create:cast_iron_fluid', 300),
		'caupona:copper_frying_pan'
	]).id('caupona:crafting/lead_frying_pan')

	// 木炭
	minecraft.campfire_cooking('minecraft:charcoal', [
		'#minecraft:logs'
	]).cookingTime(400)

	// 砂砾
	kubejs.shapeless('minecraft:gravel', [
		'9x minecraft:dirt'
	])

	// 尘土
	create.splashing([
		Item.of('new_create:dust').withChance(0.75),
		Item.of('minecraft:clay_ball').withChance(0.25)
	], '#forge:sand').id('create:create.splashing/sand')

	// 燧石
	kubejs.shapeless('new_create:flint_knapp', [
		'3x minecraft:gravel'
	])

	kubejs.shapeless('minecraft:gravel', [
		'9x #forge:sand'
	])

	// 工作台
	kubejs.shaped('minecraft:crafting_table', [
		'PP',
		'KF'
	], {
		P: '#minecraft:planks',
		K: 'farmersdelight:flint_knife',
		F: 'minecraft:flint'
	}).id('minecraft:crafting_table').damageIngredient('farmersdelight:flint_knife')

	// 燧石
	kubejs.shaped('minecraft:flint', [
		'FF',
		'FF',
	], {
		F: 'new_create:flint_knapp'
	})

	// 陶瓦
	minecraft.campfire_cooking('minecraft:terracotta', [
		'minecraft:clay'
	]).cookingTime(180)

	// 鸡蛋混合液
	create.compacting([
		Fluid.of('new_create:egg_mixture_fluid', 5),
		'ratatouille:egg_shell'
	], '#forge:eggs')

	create.emptying([
		Fluid.of('new_create:egg_mixture_fluid', 5),
		'ratatouille:egg_shell'
	], [
		'#forge:eggs'
	]).id('create:create.emptying/yolk')

	// 白面
	create.milling('new_create:white_flour', [
		'#minecraft:terracotta'
	])
	create.crushing([
		Item.of('new_create:white_flour').withChance(1),
		Item.of('new_create:white_flour').withChance(0.3)
	], '#minecraft:terracotta')

	// 未加工炒祺
	create.mixing([
		Item.of('6x new_create:in_chaochi').withChance(1),
		Item.of('new_create:in_chaochi').withChance(0.3)
	], [
		Fluid.of('new_create:egg_mixture_fluid', 10),
		Fluid.of('minecraft:water', 100),
		'new_create:white_flour',
		'2x #forge:dusts/salt',
		'minecraft:sugar'
	])

	// 炒祺
	create.mixing('new_create:chaochi', [
		'new_create:in_chaochi'
	]).heated()

	// 草绳
	kubejs.shapeless('new_create:grass_string', [
		'3x new_create:grass_fiber'
	])

	// 滴水石锥
	minecraft.stonecutting('2x minecraft:pointed_dripstone', [
		'minecraft:dripstone_block'
	])

	// 蛋壳 => 骨粉
	kubejs.shapeless('minecraft:bone_meal', [
		'2x ratatouille:egg_shell'
	]).id('ratatouille:eggshell')

	// 石头→营火烧
	minecraft.campfire_cooking('minecraft:stone', [
		'#forge:cobblestone'
	]).cookingTime(500)

	// 石头→烧焦圆石→营火烧
	minecraft.campfire_cooking('new_create:charred_cobblestone', [
		'minecraft:stone'
	]).cookingTime(500)

	// 陶瓷桶
	minecraft.campfire_cooking('ceramicbucket:ceramic_bucket', [
		'ceramicbucket:unfired_clay_bucket'
	]).cookingTime(250)

	// 烧焦圆石→熔炉,烧焦圆石→高炉
	minecraft.blasting('new_create:charred_cobblestone', [
		'#forge:cobblestone'
	]).cookingTime(350).xp(20)

	// 营火
	kubejs.shaped('minecraft:campfire', [
		'SDE',
		'BCB',
		'AAA'
	], {
		A: '#forge:cobblestone',
		B: '#minecraft:logs',
		C: '#minecraft:coals',
		D: '#forge:rods/wooden',
		E: '#new_create:hammer',
		S: '#new_create:saw'
	}).damageIngredient('#new_create:tools')

	// 木棍
	kubejs.shapeless('6x minecraft:stick', [
		'#minecraft:planks',
		'#new_create:saw'
	]).damageIngredient('#new_create:saw')

	// 红砖
	minecraft.campfire_cooking('minecraft:brick', [
		'minecraft:clay_ball'
	]).cookingTime(400)

	// 铸铁块<=>铸铁锭
	kubejs.shapeless('new_create:cast_iron_block', [
		'9x new_create:cast_iron_ingot'
	])
	kubejs.shapeless('9x new_create:cast_iron_ingot', [
		'new_create:cast_iron_block'
	])

	// 粘土桶
	kubejs.shaped('ceramicbucket:unfired_clay_bucket', [
		'C C',
		' C '
	], {
		C: '#forge:storage_blocks/clay'
	}).id('ceramicbucket:unfired_clay_bucket')

	// 动力矿车
	kubejs.shaped('minecraft:furnace_minecart', [
		'BBB',
		'BMB',
		'BBB'
	], {
		B: 'minecraft:blackstone',
		M: 'minecraft:minecart'
	}).id('minecraft:furnace_minecart')

	// 切石机
	kubejs.shaped('minecraft:stonecutter', [
		'HCA',
		'LBL',
		'SSS'
	], {
		H: '#new_create:hammer',
		A: '#new_create:saw',
		L: '#minecraft:logs',
		B: '#minecraft:wooden_buttons',
		S: 'minecraft:smooth_stone',
		C: '#forge:plates/copper'
	}).id('minecraft:stonecutter').damageIngredient('#new_create:tools')

	// 轴承
	kubejs.shaped('2x new_create:primary_bearing', [
		'C',
		'C'
	], {
		C: 'new_create:charred_cobblestone'
	})

	// 下界砖
	minecraft.smelting('minecraft:nether_brick', [
		'#forge:netherrack'
	])

	// 熔炉
	kubejs.shaped('minecraft:furnace', [
		'BBB',
		'BCB',
		'BBB'
	], {
		B: 'minecraft:blackstone',
		C: '#minecraft:coals'
	}).id('minecraft:furnace')

	// 防腐液 
	e.custom({
		"type": "caupona:boiling",
		"from": "thermal:latex",
		"time": 200,
		"to": "new_create:embalming_fluid"
	})

	// 熔融玻璃
	melter.melting(Fluid.of('new_create:glass', 50), [
		'#forge:sand'
	]).minimumHeat(2)

	create.mixing(Fluid.of('new_create:glass', 100), [
		'#forge:sand'
	]).heated()

	// 玻璃
	create.mixing('minecraft:glass', [
		Fluid.of('new_create:glass', 50)
	])

	// 粘土缸→烧制粘土缸
	minecraft.campfire_cooking('caupona:stew_pot', [
		'caupona:clay_cistern'
	]).cookingTime(200)

	// 红砖
	minecraft.smoking('minecraft:brick', [
		'#forge:clay'
	])

	// 二阶高级工作台
	kubejs.shaped('extendedcrafting:advanced_table', [
		'APA',
		'BCD',
		'EFE'
	], {
		A: '#forge:ingots/bronze',
		B: "#new_create:hammer",
		D: "#new_create:saw",
		C: "minecraft:crafting_table",
		E: "new_create:charred_cobblestone",
		F: "minecraft:smooth_stone",
		P: '#forge:plates/bronze'
	})

	// 青铜板
	kubejs.shapeless('thermal:bronze_plate', [
		'#forge:ingots/bronze',
		'#new_create:hammer'
	]).damageIngredient('#new_create:hammer')

	// 流体漏斗
	kubejs.shaped('flopper:flopper', [
		'C C',
		'C C',
		' C '
	], {
		C: '#forge:plates/copper'
	}).id('flopper:recipes/flopper')

	// #原木=>石磨
	create.milling([
		Item.of('minecraft:stick', 2).withChance(0.7),
		Item.of('thermal:rubber', 2).withChance(0.4)
	], '#minecraft:logs')

	// 平滑石头
	kubejs.shapeless('minecraft:smooth_stone', [
		'new_create:charred_cobblestone',
		'#forge:clay'
	])

	// 熔岩
	create.compacting(Fluid.of('minecraft:lava', 100), [
		'16x #forge:cobblestone'
	])

	// 烈焰粉
	create.crushing([
		Item.of('minecraft:blaze_powder', 2).withChance(0.7),
		Item.of('minecraft:blaze_powder', 3).withChance(0.3)
	], 'minecraft:blaze_rod')

	// 铜线圈
	kubejs.shaped('immersiveengineering:coil_lv', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'createaddition:copper_spool',
		B: '#forge:rods/iron'
	})

	// 没啥卵用的钟
	create.sequenced_assembly('minecraft:clock', '#forge:ingots/gold', [
		create.deploying('minecraft:gold_ingot', ['create:precision_mechanism', 'create:precision_mechanism']),
		create.deploying('minecraft:gold_ingot', ['minecraft:gold_ingot', 'minecraft:gold_ingot']),
		create.deploying('minecraft:gold_ingot', ['create:electron_tube', 'create:electron_tube']),
		create.deploying('minecraft:gold_ingot', ['minecraft:redstone', 'minecraft:redstone']),
		create.pressing('minecraft:gold_ingot', 'minecraft:gold_ingot')
	]).loops(64).transitionalItem('minecraft:gold_ingot')

	// 充电铁块<=>充电铁锭
	kubejs.shapeless('new_create:charge_iron_block', [
		'9x create_new_age:overcharged_iron'
	])
	kubejs.shapeless('9x create_new_age:overcharged_iron', [
		'new_create:charge_iron_block'
	])

	// 铜锭量产
	create.mixing('2x minecraft:copper_ingot', [
		'2x minecraft:raw_copper',
		Fluid.of('new_create:working_fluid', 100)
	]).heated()

	// 铸铁板
	create.pressing('new_create:cast_iron_sheet', [
		'#forge:ingots/cast_iron'
	])

	// 液态灵魂
	create.mixing(Fluid.of('new_create:soul', 50), [
		'4x minecraft:weeping_vines',
		'4x minecraft:twisting_vines',
		'2x #forge:dusts/soul_sand'
	]).heated()

	// 锌锭获取
	kubejs.shapeless('create:zinc_ingot', [
		'9x create:zinc_nugget'
	])

	// 纯净石英
	e.custom({
		"type": "vintageimprovements:centrifugation",
		"ingredients": [{ "tag": "forge:sand" }],
		"results": [
			{ "item": "new_create:pure_quartz", "chance": 0.18 },
			{ "item": "minecraft:stick", "chance": 0.4 },
			{ "item": "minecraft:dead_bush", "chance": 0.3 },
			{ "item": 'minecraft:gold_nugget', "chance": 0.3 },
			{ "item": 'createaddition:electrum_nugget', "chance": 0.3 },
			{ "item": 'new_create:saw_silicon', "chance": 0.025 }
		], "processingTime": 250
	})

	// 铁桶
	kubejs.shaped('minecraft:bucket', [
		'C C',
		' C '
	], {
		C: '#forge:plates/iron'
	}).id('minecraft:bucket')

	// Fix Thermal tin_block <=> tin_ingot crafting
	kubejs.shapeless('9x thermal:tin_ingot', [
		'thermal:tin_block'
	])

	// Fix nuggets <=> ingots crafting
	FixRecipes1('crafting_shapeless', '#forge:nuggets')

	// Fix ingots <=> block crafting
	FixRecipes2('crafting_shapeless', '#forge:ingots', '#forge:storage_blocks')

	// Fixxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Recipes
	function FixRecipes1(Type, Output) {
		e.forEachRecipe({
			type: Type,
			output: Output
		}, recipe => {
			var Output = recipe.getOriginalRecipeResult().getId()
			var Input = recipe.getOriginalRecipeIngredients()[0].getItemIds()[0]
			e.shapeless(Input, [`9x ${Output}`])
		})
	}
	function FixRecipes2(Type, Output, Input) {
		e.forEachRecipe({
			type: Type,
			output: Output,
			input: Input
		}, recipe => {
			var Output = recipe.getOriginalRecipeResult().getId()
			var Input = recipe.getOriginalRecipeIngredients()[0].getItemIds()[0]
			e.shapeless(`9x ${Output}`, [`${Input}`])
		})
	}
})