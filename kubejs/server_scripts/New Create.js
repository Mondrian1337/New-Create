ServerEvents.recipes(e => {
	//  Create
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
		splashing
	} = e.recipes.create
	//  new_create
	let {
		shaped,
		shapeless
	} = e.recipes.kubejs
	//  Minecraft
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

	//  木板
	e.forEachRecipe(
		{
			type: 'crafting_shapeless',
			input: '#minecraft:logs',
			output: '#minecraft:planks'
		},
		(recipe) => {
			let {
				originalRecipeIngredients,
				originalRecipeResult
			} = recipe;

			e.shapeless(
				originalRecipeResult.withCount(2),
				originalRecipeIngredients.toArray().concat([
					'farmersdelight:flint_knife'
				])
			).damageIngredient('farmersdelight:flint_knife')
				.id(recipe.getId())
		}
	)
	// 燧石剑
	shaped('new_create:flint_sword', [
		'F',
		'G',
		'R'
	], {
		F: 'minecraft:flint',
		R: '#forge:rods/wooden',
		G: 'new_create:grass_string'
	})

	// 燧石镐
	shaped('new_create:flint_pickaxe', [
		'FGF',
		' R ',
		' R '
	], {
		F: 'minecraft:flint',
		R: '#forge:rods/wooden',
		G: 'new_create:grass_string'
	})

	// 燧石斧
	shaped('new_create:flint_axe', [
		'FG',
		'FR',
		' R'
	], {
		F: 'minecraft:flint',
		R: '#forge:rods/wooden',
		G: 'new_create:grass_string'
	})

	// 燧石短柄斧
	shaped('new_create:flint_handaxe', [
		'FS',
		' R'
	], {
		F: 'new_create:flint_knapp',
		S: '#forge:string',
		R: '#forge:rods/wooden'
	})

	// 燧石锹
	shaped('new_create:flint_shovel', [
		'F',
		'G',
		'R'
	], {
		F: 'minecraft:flint',
		R: '#forge:rods/wooden',
		G: 'new_create:grass_string'
	})

	// 工作台
	shaped('minecraft:crafting_table', [
		'PP',
		'KF'
	], {
		P: '#minecraft:planks',
		K: 'farmersdelight:flint_knife',
		F: 'minecraft:flint'
	}).id('minecraft:crafting_table').damageIngredient('farmersdelight:flint_knife')

	// 燧石小刀
	shaped('farmersdelight:flint_knife', [
		' F',
		'RS'
	], {
		F: 'minecraft:flint',
		R: '#forge:rods/wooden',
		S: '#forge:string'
	}).id('farmersdelight:flint_knife')

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
	campfire_cooking("new_create:charred_cobblestone", [
		'minecraft:stone'
	]).cookingTime(500)

	// 烧焦圆石→熔炉,烧焦圆石→高炉
	blasting('new_create:charred_cobblestone', [
		'#forge:cobblestone'
	]).cookingTime(350).xp(20)

	// 石镐
	shaped('minecraft:stone_pickaxe', [
		'ABA',
		'ECD',
		' C '
	], {
		A: 'new_create:charred_cobblestone',
		B: '#forge:string',
		C: '#forge:rods/wooden',
		D: '#forge:hammer',
		E: 'farmersdelight:flint_knife'
	})
		.damageIngredient('#forge:hammer')
		.damageIngredient('farmersdelight:flint_knife')

	// 石剑
	shaped('minecraft:stone_sword', [
		' A ',
		'BCD',
		' E '
	], {
		A: 'new_create:charred_cobblestone',
		B: 'farmersdelight:flint_knife',
		C: '#forge:string',
		D: '#forge:hammer',
		E: '#forge:rods/wooden'
	})
		.damageIngredient('#forge:hammer')
		.damageIngredient('farmersdelight:flint_knife')

	// 石斧
	shaped('minecraft:stone_axe', [
		'ABD',
		'ACE',
		' C '
	], {
		A: 'new_create:charred_cobblestone',
		B: '#forge:string',
		C: '#forge:rods/wooden',
		D: 'farmersdelight:flint_knife',
		E: '#forge:hammer'
	})
		.damageIngredient('#forge:hammer')
		.damageIngredient('farmersdelight:flint_knife')

	// 石锹
	shaped('minecraft:stone_shovel', [
		'ABA',
		'CDE',
		' D '
	], {
		A: '#forge:string',
		B: 'new_create:charred_cobblestone',
		C: 'farmersdelight:flint_knife',
		D: '#forge:rods/wooden',
		E: '#forge:hammer'
	})
		.damageIngredient('#forge:hammer')
		.damageIngredient('farmersdelight:flint_knife')

	// 石锄
	shaped('minecraft:stone_hoe', [
		'AB ',
		'ECD',
		' C '
	], {
		A: 'new_create:charred_cobblestone',
		B: '#forge:string',
		C: '#forge:rods/wooden',
		D: 'farmersdelight:flint_knife',
		E: '#forge:hammer'
	})
		.damageIngredient('#forge:hammer')
		.damageIngredient('farmersdelight:flint_knife')

	// 营火
	shaped('minecraft:campfire', [
		'SDE',
		'BCB',
		'AAA'
	], {
		A: '#forge:cobblestone',
		B: '#minecraft:logs',
		C: 'minecraft:coal',
		D: '#forge:rods/wooden',
		E: '#forge:hammer',
		S: '#forge:saw'
	}).damageIngredient('new_create:stone_hamemr')

	// 石锤
	shaped('#forge:hammer', [
		'ABA',
		' CD',
		' C '
	], {
		A: '#forge:cobblestone',
		B: '#forge:string',
		C: '#forge:rods/wooden',
		D: 'farmersdelight:flint_knife'
	}).damageIngredient('farmersdelight:flint_knife')

	// 铁锤
	shaped('new_create:iron_hammer', [
		' IS',
		' RI',
		'R  '
	], {
		I: '#forge:ingots/iron',
		R: '#forge:rods/wooden',
		S: '#forge:string'
	})

	// 钻石锤
	shaped('new_create:diamond_hammer', [
		' DS',
		' RD',
		'R  '
	], {
		D: '#forge:gems/diamond',
		R: '#forge:rods/wooden',
		S: '#forge:string'
	})

	// 木棍
	shapeless('4x minecraft:stick', [
		'#minecraft:planks', 'new_create:flint_saw'
	]).damageIngredient('new_create:flint_saw')

	// 燧石锯子
	shaped('new_create:flint_saw', [
		'AB ',
		'A B',
		' CD'
	], {
		A: 'minecraft:flint',
		B: '#minecraft:planks',
		C: '#minecraft:logs',
		D: '#forge:string'
	})

	// 铁锯子
	shaped('new_create:iron_saw', [
		'AB ',
		'A B',
		' CD'
	], {
		A: '#forge:ingots/iron',
		B: '#minecraft:planks',
		C: '#minecraft:logs',
		D: '#forge:string'
	})

	// 钻石锯子
	shaped('new_create:diamond_saw', [
		'AB ',
		'A B',
		' CD'
	], {
		A: '#forge:gems/diamond',
		B: '#minecraft:planks',
		C: '#minecraft:logs',
		D: '#forge:string'
	})

	// 红砖
	campfire_cooking('minecraft:brick', [
		'minecraft:clay_ball'
	]).cookingTime(400)

	// 铸铁帽子
	shaped('minecraft:iron_helmet', [
		'CCC',
		'C C'
	], {
		C: '#forge:ingots/cast_iron'
	}).id('minecraft:iron_helmet')

	// 铸铁胸甲
	shaped('minecraft:iron_chestplate', [
		'C C',
		'CCC',
		'CCC'
	], {
		C: '#forge:ingots/cast_iron'
	}).id('minecraft:iron_chestplate')

	// 铸铁裤腿
	shaped('minecraft:iron_leggings', [
		'CCC',
		'C C',
		'C C'
	], {
		C: '#forge:ingots/cast_iron'
	}).id('minecraft:iron_leggings')

	// 铸铁靴子
	shaped('minecraft:iron_boots', [
		'C C',
		'C C'
	], {
		C: '#forge:ingots/cast_iron'
	}).id('minecraft:iron_boots')

	// 铸铁剑
	shaped('minecraft:iron_sword', [
		'C',
		'C',
		'R'
	], {
		C: '#forge:ingots/cast_iron',
		R: '#forge:rods/wooden'
	}).id('minecraft:iron_sword')

	// 铸铁镐
	shaped('minecraft:iron_pickaxe', [
		'CCC',
		' R ',
		' R '
	], {
		C: '#forge:ingots/cast_iron',
		R: '#forge:rods/wooden'
	}).id('minecraft:iron_pickaxe')

	// 铸铁斧
	shaped('minecraft:iron_axe', [
		'CC',
		'CR',
		' R'
	], {
		C: '#forge:ingots/cast_iron',
		R: '#forge:rods/wooden'
	}).id('minecraft:iron_axe')

	// 铸铁锹
	shaped('minecraft:iron_shovel', [
		'C',
		'R',
		'R'
	], {
		C: '#forge:ingots/cast_iron',
		R: '#forge:rods/wooden'
	}).id('minecraft:iron_shovel')

	// 铸铁锄
	shaped('minecraft:iron_hoe', [
		'CC',
		' R',
		' R'
	], {
		C: '#forge:ingots/cast_iron',
		R: '#forge:rods/wooden'
	}).id('minecraft:iron_hoe')

	// 铸铁块<=>铸铁锭
	shapeless('new_create:cast_iron_block', [
		'9x new_create:cast_iron_ingot'
	])
	shapeless('9x new_create:cast_iron_ingot', [
		'new_create:cast_iron_block'
	])

	// 切石机
	shaped('minecraft:stonecutter', [
		'HCA',
		'LBL',
		'SSS'
	], {
		H: '#forge:hammer',
		A: '#forge:saw',
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

	// 防腐液 
	e.custom({
		"type": "caupona:boiling",
		"from": "thermal:latex",
		"time": 200,
		"to": "new_create:embalming_fluid"
	})

	// 粘土缸→烧制粘土缸
	campfire_cooking('caupona:stew_pot', [
		'caupona:clay_cistern'
	]).cookingTime(200)

	// 二阶高级工作台
	shaped('extendedcrafting:advanced_table', [
		'APA',
		'BCD',
		'EFE'
	], {
		A: '#forge:ingots/bronze',
		B: "#forge:hammer",
		D: "#forge:saw",
		C: "minecraft:crafting_table",
		E: "new_create:charred_cobblestone",
		F: "minecraft:smooth_stone",
		P: '#forge:plates/bronze'
	})

	// 青铜板
	shapeless('thermal:bronze_plate', [
		'#forge:ingots/bronze',
		'#forge:hammer'
	]).damageIngredient('#forge:hammer')

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
	mixing(Fluid.of('minecraft:lava', 100), [
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
		pressing('minecraft:gold_ingot', 'minecraft:gold_ingot'),
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

	compacting('3x new_create:cast_iron_sheet', [
		'2x #forge:ingots/cast_iron'
	])

	// 液态灵魂
	mixing(Fluid.of('new_create:soul', 50), [
		'4x minecraft:weeping_vines',
		'4x minecraft:twisting_vines'
	]).heated()

	// 锌锭获取
	shapeless('create:zinc_ingot', [
		'9x create:zinc_nugget'
	])

	// 青铜镐
	shaped('new_create:bronze_pickaxe', [
		'BBB',
		' R ',
		' R '
	], {
		B: '#forge:ingots/bronze',
		R: '#forge:rods/wooden'
	})
})