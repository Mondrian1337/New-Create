StartupEvents.registry('block', e => {
	let Block = (
		Name, // 命名ID
		SoundType,  // 挖掘声音
		Hardness,  // 硬度
		Resistance,  // 爆炸抗性
		Tool, // 所需工具类型
		Grade,  // 挖掘等级(如木,石,铁等)
		RequiresTool // 是否需要工具挖掘(填true或false)
	) => {
		e.create(Name)
			.soundType(SoundType)
			.hardness(Hardness)
			.resistance(Resistance)
			.tagBlock(Tool)
			.tagBlock(Grade)
			.requiresTool(RequiresTool)
	}
	// 工具类型
	const pickaxe = 'minecraft:mineable/pickaxe'
	const shovel = 'minecraft:mineable/shovel'
	const axe = 'minecraft:mineable/axe'
	const sword = 'minecraft:mineable/swoed'
	const hoe = 'minecrafr:mineable/hoe'
	// 挖掘等级
	const wooden = 'minecraft:needs_wooder_tool'
	const stone = 'minecraft:needs_stone_tool'
	const iron = 'minecraft:needs_iron_tool'
	const gold = 'minecraft:needs_gold_tool'
	const nether = 'forge:needs_netherite_tool'
	
	// 烧焦圆石
	Block('charred_cobblestone', 'stone', 3, 3, pickaxe, wooden, true)
	// 铸铁块
	Block('cast_iron_block', 'metal', 5, 5, pickaxe, stone, true)
	//熔炉核心
	Block('furnace_core', 'stone', 3, 3, pickaxe, stone, true)
	//充电铁块
	Block('charge_iron_block', 'metal', 5, 5, pickaxe, stone, true)
})