ServerEvents.recipes(e => {
	//  Create
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
	//  KubeJS
	const {
		shaped,
		shapeless
	} = e.recipes.kubejs
	//  Minecraft
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
	// 熔化
	const { melting } = e.recipes.melter

	// 木板
	e.forEachRecipe({
		type: 'crafting_shapeless',
		input: '#minecraft:logs',
		output: '#minecraft:planks'
	}, (Recipes) => {
		let {
			originalRecipeIngredients,
			originalRecipeResult
		} = Recipes;

		e.shapeless(
			originalRecipeResult.withCount(2),
			originalRecipeIngredients.toArray().concat([
				'farmersdelight:flint_knife'
			])
		).damageIngredient('farmersdelight:flint_knife').id(Recipes.getId())
	})

	// 黏土
	splashing(Item.of('minecraft:clay_ball').withChance(0.5), [
		'new_create:dust'
	])

	// 木炭
	campfire_cooking('minecraft:charcoal', [
		'#minecraft:logs'
	]).cookingTime(400)

	// 砂砾
	shapeless('minecraft:gravel', [
		'9x minecraft:dirt'
	])

	// 尘土
	splashing([
		Item.of('new_create:dust').withChance(0.75),
		Item.of('minecraft:clay_ball').withChance(0.25)
	], '#forge:sand').id('create:splashing/sand')

	// 燧石
	shapeless('new_create:flint_knapp', [
		'3x minecraft:gravel'
	])

	shapeless('minecraft:gravel', [
		'9x #forge:sand'
	])

	// 工作台
	shaped('minecraft:crafting_table', [
		'PP',
		'KF'
	], {
		P: '#minecraft:planks',
		K: 'farmersdelight:flint_knife',
		F: 'minecraft:flint'
	}).id('minecraft:crafting_table').damageIngredient('farmersdelight:flint_knife')

	// 燧石
	shaped('minecraft:flint', [
		'FF',
		'FF',
	], {
		F: 'new_create:flint_knapp'
	})

	// 草绳
	shapeless('new_create:grass_string', [
		'3x new_create:grass_fiber'
	])

	// 石头→营火烧
	campfire_cooking('minecraft:stone', [
		'#forge:cobblestone'
	]).cookingTime(500)

	// 石头→烧焦圆石→营火烧
	campfire_cooking('new_create:charred_cobblestone', [
		'minecraft:stone'
	]).cookingTime(500)

	// 陶瓷桶
	campfire_cooking('ceramicbucket:ceramic_bucket', [
		'ceramicbucket:unfired_clay_bucket'
	]).cookingTime(250)

	// 烧焦圆石→熔炉,烧焦圆石→高炉
	blasting('new_create:charred_cobblestone', [
		'#forge:cobblestone'
	]).cookingTime(350).xp(20)

	// 营火
	shaped('minecraft:campfire', [
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
	shapeless('4x minecraft:stick', [
		'#minecraft:planks', '#new_create:saw'
	]).damageIngredient('#new_create:saw')

	// 红砖
	campfire_cooking('minecraft:brick', [
		'minecraft:clay_ball'
	]).cookingTime(400)

	// 铸铁块<=>铸铁锭
	shapeless('new_create:cast_iron_block', [
		'9x new_create:cast_iron_ingot'
	])
	shapeless('9x new_create:cast_iron_ingot', [
		'new_create:cast_iron_block'
	])

	// 粘土桶
	shaped('ceramicbucket:unfired_clay_bucket', [
		'C C',
		' C '
	], {
		C: '#forge:storage_blocks/clay'
	}).id('ceramicbucket:unfired_clay_bucket')

	// 动力矿车
	shaped('minecraft:furnace_minecart', [
		'CCC',
		'CMC',
		'CCC'
	], {
		C: '#forge:cobblestone',
		M: 'minecraft:minecart'
	}).id('minecraft:furnace_minecart')

	// 切石机
	shaped('minecraft:stonecutter', [
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
	shaped('2x new_create:primary_bearing', [
		'C',
		'C'
	], {
		C: 'new_create:charred_cobblestone'
	})

	// 下界砖
	smelting('minecraft:nether_brick', [
		'#forge:netherrack'
	])

	// 防腐液 
	e.custom({
		"type": "caupona:boiling",
		"from": "thermal:latex",
		"time": 200,
		"to": "new_create:embalming_fluid"
	})

	// 熔融玻璃
	melting(Fluid.of('new_create:glass', 50), [
		'#forge:sand'
	]).minimumHeat(2)

	mixing(Fluid.of('new_create:glass', 100), [
		'#forge:sand'
	]).heated()

	// 玻璃
	mixing('minecraft:glass', [
		Fluid.of('new_create:glass', 50)
	])

	// 粘土缸→烧制粘土缸
	campfire_cooking('caupona:stew_pot', [
		'caupona:clay_cistern'
	]).cookingTime(200)

	// 红砖
	smoking('minecraft:brick', [
		'#forge:clay'
	])

	// 二阶高级工作台
	shaped('extendedcrafting:advanced_table', [
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
	shapeless('thermal:bronze_plate', [
		'#forge:ingots/bronze',
		'#new_create:hammer'
	]).damageIngredient('#new_create:hammer')

	// 流体漏斗
	shaped('flopper:flopper', [
		'C C',
		'C C',
		' C '
	], {
		C: '#forge:plates/copper'
	}).id('flopper:recipes/flopper')

	// #原木=>石磨
	milling([
		Item.of('minecraft:stick').withChance(0.7),
		Item.of('thermal:rubber').withChance(0.4)
	], '#minecraft:logs')

	// 平滑石头
	shapeless('minecraft:smooth_stone', [
		'new_create:charred_cobblestone',
		'#forge:clay'
	])

	// 熔岩
	compacting(Fluid.of('minecraft:lava', 100), [
		'16x #forge:cobblestone'
	])

	// 烈焰粉
	crushing([
		Item.of('minecraft:blaze_powder', 2).withChance(0.7),
		Item.of('minecraft:blaze_powder', 3).withChance(0.3)
	], 'minecraft:blaze_rod')

	// 铜线圈
	shaped('immersiveengineering:coil_lv', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'createaddition:copper_spool',
		B: '#forge:rods/iron'
	})

	// 没啥卵用的钟
	sequenced_assembly('minecraft:clock', '#forge:ingots/gold', [
		deploying('minecraft:gold_ingot', ['create:precision_mechanism', 'create:precision_mechanism']),
		deploying('minecraft:gold_ingot', ['minecraft:gold_ingot', 'minecraft:gold_ingot']),
		deploying('minecraft:gold_ingot', ['create:electron_tube', 'create:electron_tube']),
		deploying('minecraft:gold_ingot', ['minecraft:redstone', 'minecraft:redstone']),
		pressing('minecraft:gold_ingot', 'minecraft:gold_ingot')
	]).loops(64).transitionalItem('minecraft:gold_ingot')

	// 充电铁块<=>充电铁锭
	shapeless('new_create:charge_iron_block', [
		'9x create_new_age:overcharged_iron'
	])
	shapeless('9x create_new_age:overcharged_iron', [
		'new_create:charge_iron_block'
	])

	// 铜锭量产
	mixing('2x minecraft:copper_ingot', [
		'2x minecraft:raw_copper',
		Fluid.of('new_create:working_fluid', 100)
	]).heated()

	// 铸铁板
	pressing('new_create:cast_iron_sheet', [
		'#forge:ingots/cast_iron'
	])

	// 液态灵魂
	mixing(Fluid.of('new_create:soul', 50), [
		'4x minecraft:weeping_vines',
		'4x minecraft:twisting_vines',
		'2x #forge:dusts/soul_sand'
	]).heated()

	// 锌锭获取
	shapeless('create:zinc_ingot', [
		'9x create:zinc_nugget'
	])

	// 纯净石英
	e.custom({
		"type": "vintageimprovements:centrifugation",
		"ingredients": [{ "tag": "forge:sand" },],
		"results": [
			{ "item": "new_create:pure_quartz", "chance": 0.175 },
			{ "item": "minecraft:stick", "chance": 0.4 },
			{ "item": "minecraft:dead_bush", "chance": 0.3 },
			{ "item": 'minecraft:gold_nugget', "chance": 0.3 },
			{ "item": 'createaddition:electrum_nugget', "chance": 0.3 },
			{ "item": 'new_create:saw_silicon', "chance": 0.03 }
		], "processingTime": 250
	})

	// 铁桶
	shaped('minecraft:bucket', [
		'C C',
		' C '
	], {
		C: 'new_create:cast_iron_sheet'
	}).id('minecraft:bucket')

	// Fix Thermal tin_block <=> tin_ingot crafting
	shapeless('9x thermal:tin_ingot', 'thermal:tin_block')

	// Fix nuggets <=> ingots crafting
	FixRecipes1('crafting_shapeless', '#forge:nuggets')

	// Fix ingots <=> block crafting
	FixRecipes2('crafting_shapeless', '#forge:ingots', '#forge:storage_blocks')

	function FixRecipes1(type, output) {
		e.forEachRecipe({
			type: type,
			output: output
		}, recipe => {
			var Output = recipe.getOriginalRecipeResult().getId()
			var Input = recipe.getOriginalRecipeIngredients()[0].getItemIds()[0]
			e.shapeless(Input, [`9x ${Output}`])
		})
	}
	function FixRecipes2(type, output, input) {
		e.forEachRecipe({
			type: type,
			output: output,
			input: input
		}, recipe => {
			var Output = recipe.getOriginalRecipeResult().getId()
			var Input = recipe.getOriginalRecipeIngredients()[0].getItemIds()[0]
			e.shapeless(`9x ${Output}`, [`${Input}`])
		})
	}

	// Fix trracotta crafting
	campfire_cooking('minecraft:terracotta', [
		'minecraft:clay'
	]).cookingTime(180)
})