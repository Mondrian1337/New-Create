ServerEvents.recipes(e => {
	// 物品管道
	e.replaceInput('pipez:item_pipe', 'minecraft:iron_ingot', 'kubejs:cast_iron_ingot')
	// 流体管道
	e.replaceInput('pipez:fluid_pipe', 'minecraft:iron_ingot', 'kubejs:cast_iron_ingot')
	// 能量管道
	e.replaceInput('pipez:energy_pipe', 'minecraft:iron_ingot', 'kubejs:cast_iron_ingot')
	// 通用管道
	e.replaceInput('pipez:universal_pipe', 'minecraft:iron_ingot', 'kubejs:cast_iron_ingot')
	// 气体管道
	e.replaceInput('pipez:gas_pipe', 'minecraft:iron_ingot', 'kubejs:cast_iron_ingot')
	// 等离子高炉
	e.replaceInput('ad_astra:etrionic_blast_furnace', '#forge:plates/iron', 'kubejs:cast_iron_sheet')
	// 钢锭替换
	e.replaceOutput({}, 'immersiveengineering:ingot_steel', 'ad_astra:steel_ingot')
})