ServerEvents.tags('item', e => {
	// 木质工具
	e.add('forge:tools/wooden', [
		'minecraft:wooden_shovel',
		'minecraft:wooden_pickaxe',
		'minecraft:wooden_axe',
		'minecraft:wooden_hoe',
		'minecraft:wooden_sword',
		'mekanismtools:wood_paxel'
	])

	// 线
	e.add('forge:string', [
		'kubejs:grass_string'
	])

	//烧焦圆石
	e.add("forge:cobblestone", [
		'kubejs:charred_cobblestone'
	])

	// 草
	e.add('forge:grass', [
		'minecraft:grass',
		'minecraft:fern',
		'minecraft:tall_grass',
		'minecraft:large_fern',
		'minecraft:large_fern',
		'minecraft:seagrass'
	])

	// 锯子
	e.add('forge:saw', [
		'kubejs:flint_saw',
		'kubejs:iron_saw',
		'kubejs:diamond_saw'
	])

	// 锤子
	e.add('forge:hammer', [
		'kubejs:stone_hammer',
		'kubejs:iron_hammer',
		'kubejs:diamond_hammer'
	])

	// 工具
	e.add('kuebjs:tools', [
		'#forge:hammer',
		'#forge:saw'
	])

	//合成轴承
	e.add('create:shaft_add', [
		'kubejs:primary_bearing',
		'create:shaft'
	])

	// 铜工具
	e.add('forge:tools/copper', [
		'create_sa:copper_sword',
		'create_sa:copper_pickaxe',
		'create_sa:copper_axe',
		'create_sa:copper_shovel',
		'create_sa:copper_hoe'
	])

	// 燧石工具
	e.add('forge:tools/flint', [
		'kubejs:flint_sword',
		'kubejs:flint_pickaxe',
		'kubejs:flint_axe',
		'kubejs:flint_handaxe',
		'kubejs:flint_shovel'
	])

	// 安山金属粒
	e.add('forge:andesite/nuggets', [
		'#forge:nuggets/iron',
		'#forge:nuggets/zinc'
	])

	// 橡胶
	e.add('forge:cured_rubber', [
		'thermal:cured_rubber',
		'create_dd:rubber'
	])

	// 光辉石
	e.add('forge:ingots/refined_radiance', [
		'create:refined_radiance'
	])

	// 冲压模具
	e.add('immersiveengineering:mold', [
		'immersiveengineering:mold_unpacking',
		'immersiveengineering:mold_plate',
		'immersiveengineering:mold_gear',
		'immersiveengineering:mold_rod',
		'immersiveengineering:mold_bullet_casing',
		'immersiveengineering:mold_wire',
		'immersiveengineering:mold_packing_4',
		'immersiveengineering:mold_packing_9',
		'kubejs:mold_block'
	])

	// 铸铁锭
	e.add('forge:ingots/cast_iron', [
		'kubejs:cast_iron_ingot'
	])

	// 铸铁块
	e.add('forge:storage_blocks/cast_iron', [
		'kubejs:cast_iron_block'
	])
})