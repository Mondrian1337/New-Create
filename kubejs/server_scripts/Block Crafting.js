// 高炉多方块合成
BlockCrafting.addMultiblockStructure(
	MultiblockStructureBuilder.create('minecraft:blast_furnace')
		.pattern('aaa', 'bbb', 'bbb')
		.pattern('aaa', 'bcb', 'bbb')
		.pattern('aaa', 'bdb', 'bbb')
		.where('a', 'minecraft:smooth_stone')
		.where('b', 'kubejs:cast_iron_block')
		.where('c', 'kubejs:furnace_core')
		.center('d', 'minecraft:glass')
		.craftingItem('immersiveengineering:hammer')
		.resultItem('minecraft:blast_furnace')
		.build()
)

// 熔炉核心
BlockCrafting.addMultiblockStructure(
	MultiblockStructureBuilder.create('kubejs:furnace_core')
		.pattern('aaa', 'aaa', 'aaa')
		.pattern('aaa', 'aba', 'aaa')
		.pattern('aaa', 'aAa', 'aaa')
		.where('a', 'minecraft:cobblestone')
		.where('b', 'minecraft:redstone_block')
		.center('A', 'minecraft:cobblestone')
		.craftingItem('immersiveengineering:hammer')
		.resultItem('kubejs:furnace_core')
		.build()
)