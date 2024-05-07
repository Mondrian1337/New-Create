ServerEvents.recipes(e => {
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

	// 充电金锭
	e.custom({
		"type": "createaddition:charging",
		"input": { "item": "minecraft:gold_ingot", "count": 1 },
		"result": { "item": 'create_new_age:overcharged_gold', "count": 1 },
		"energy": 2000,
		"maxChargeRate": 200
	})

	// 充电铁锭
	e.custom({
		"type": "createaddition:charging",
		"input": { "item": "minecraft:iron_ingot", "count": 1 },
		"result": { "item": 'create_new_age:overcharged_iron', "count": 1 },
		"energy": 2500,
		"maxChargeRate": 200
	})

	// 充电钻石
	e.custom({
		"type": "createaddition:charging",
		"input": { "item": "minecraft:diamond", "count": 1 },
		"result": { "item": 'create_new_age:overcharged_diamond', "count": 1 },
		"energy": 3000,
		"maxChargeRate": 200
	})

	// 充电金板
	e.custom({
		"type": "createaddition:charging",
		"input": { "tag": 'forge:plates/gold', "count": 1 },
		"result": { "item": 'create_new_age:overcharged_golden_sheet', "count": 1 },
		"energy": 1500,
		"maxChargeRate": 200
	})

	// 充电铁板
	e.custom({
		"type": "createaddition:charging",
		"input": { "tag": 'forge:plates/iron', "count": 1 },
		"result": { "item": 'create_new_age:overcharged_iron_sheet', "count": 1 },
		"energy": 1500,
		"maxChargeRate": 200
	})

	// 红石工程块
	e.custom({
		"type": "createaddition:charging",
		"input": { "item": 'immersiveengineering:heavy_engineering', "count": 1 },
		"result": { "item": 'immersiveengineering:rs_engineering', "count": 2 },
		"energy": 800,
		"maxChargeRate": 200
	}).id('immersiveengineering:crafting/rs_engineering')

	// 原油蒸馏
	e.custom({
		"type": "createdieselgenerators:distillation",
		"ingredients": [{ "fluidTag": "forge:crude_oil", "amount": 200 }],
		"heatRequirement": "heated",
		"processingTime": 200,
		"results": [
			{ "fluid": "createdieselgenerators:diesel", "amount": 50 },
			{ "fluid": "createdieselgenerators:gasoline", "amount": 50 },
			{ "fluid": 'new_create:kerosene', "amount": 50 },
			{ "fluid": 'new_create:industrial_fuel', "amount": 50 }
		]
	}).id('createdieselgenerators:distillation/crude_oil')
})