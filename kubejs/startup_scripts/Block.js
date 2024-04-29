StartupEvents.registry('block', e => {
	const ModID = 'new_create:'
	// 工具类型
	const Tool_Type = {
		pickaxe: 'minecraft:mineable/pickaxe',
		shovel: 'minecraft:mineable/shovel',
		axe: 'minecraft:mineable/axe',
		sword: 'minecraft:mineable/sword',
		hoe: 'minecraft:mineable/hoe'
	}
	// 挖掘等级
	const Minin_Glevel = {
		wooden: 'minecraft:needs_wooden_tool',
		stone: 'minecraft:needs_stone_tool',
		iron: 'minecraft:needs_iron_tool',
		golded: 'minecraft:needs_gold_tool',
		nether: 'forge:needs_netherite_tool'
	}

	// 定义方块
	let Block = [
		// 烧焦圆石
		['charred_cobblestone', 'stone', 3, 3, 'pickaxe', 'wooden'],
		// 铸铁块
		['cast_iron_block', 'metal', 5, 5, 'pickaxe', 'stone'],
		// 熔炉核心
		['furnace_core', 'stone', 3, 3, 'pickaxe', 'stone'],
		// 充电铁块
		['charge_iron_block', 'metal', 5, 5, 'pickaxe', 'stone'],
		// 铸铁机壳
		['cast_iron_casing', 'wood', 5, 5, 'pickaxe', 'wooden'],
		// 尘土
		['dust', 'sand', 2, 2, 'sword', 'wooden']
	]
	Block.forEach(([Name, SoundType, Hardness, ResisTance, Tool, Grade]) => {
		e.create(ModID + Name)
			.soundType(SoundType)
			.hardness(Hardness)
			.resistance(ResisTance)
			.tagBlock(Tool_Type[Tool])
			.tagBlock(Minin_Glevel[Grade])
			.tagItem(ModID + 'items')
			.tagItem(ModID + 'blocks')
			.requiresTool(true)
	})
})