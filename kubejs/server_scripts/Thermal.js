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
		splashing
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

	// 橡胶
	compacting('2x thermal:rubber', [
		Fluid.of('thermal:latex', 200)
	])

	// 植物乳胶
	e.custom({
		"type": "caupona:aspic_melt",
		"amount": 100,
		"aspic": {
			"item": "thermal:rubber"
		},
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
		Z: 'kubejs:cast_iron_block'
	}).id('thermal:device_tree_extractor')

	// 樱花
	e.custom({
		"type": "thermal:tree_extractor",
		"trunk": 'minecraft:cherry_log',
		"leaves": 'minecraft:cherry_leaves',
		"result": {
			"fluid": "thermal:latex",
			"amount": 250
		}
	}).id('thermal:devices/tree_extractor/tree_extractor_cherry')
	//金合欢
	e.custom({
		"type": "thermal:tree_extractor",
		"trunk": 'minecraft:acacia_log',
		"leaves": 'minecraft:acacia_leaves',
		"result": {
			"fluid": "thermal:latex",
			"amount": 250
		}
	}).id('thermal:devices/tree_extractor/tree_extractor_acacia')
	// 白桦
	e.custom({
		"type": "thermal:tree_extractor",
		"trunk": 'minecraft:birch_log',
		"leaves": 'minecraft:birch_leaves',
		"result": {
			"fluid": "thermal:latex",
			"amount": 2250
		}
	}).id('thermal:devices/tree_extractor/tree_extractor_birch')
	// 橡树
	e.custom({
		"type": "thermal:tree_extractor",
		"trunk": 'minecraft:oak_log',
		"leaves": 'minecraft:oak_leaves',
		"result": {
			"fluid": "thermal:latex",
			"amount": 250
		}
	}).id('thermal:devices/tree_extractor/tree_extractor_oak')
	// 云杉
	e.custom({
		"type": "thermal:tree_extractor",
		"trunk": 'minecraft:spruce_log',
		"leaves": 'minecraft:spruce_leaves',
		"result": {
			"fluid": "thermal:latex",
			"amount": 250
		}
	}).id('thermal:devices/tree_extractor/tree_extractor_spruce')
	//丛林
	e.custom({
		"type": "thermal:tree_extractor",
		"trunk": "minecraft:jungle_log",
		"leaves": "minecraft:jungle_leaves",
		"result": {
			"fluid": "thermal:latex",
			"amount": 250
		}
	})
	//深色
	e.custom({
		"type": "thermal:tree_extractor",
		"trunk": "minecraft:dark_oak_log",
		"leaves": "minecraft:dark_oak_leaves",
		"result": {
			"fluid": "thermal:latex",
			"amount": 250
		}
	})

	// 塑料片
	e.recipes.thermal.chiller('2x kubejs:plastic_sheet',[
		Fluid.of('kubejs:mixed_gasoline',150)
	]).energy(250)
})