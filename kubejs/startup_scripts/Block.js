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
		gold: 'minecraft:needs_gold_tool',
		nether: 'forge:needs_netherite_tool'
	}

	// 定义方块
	let Block = [
		// 烧焦圆石
		['charred_cobblestone', 'stone', 3, 3, 'pickaxe', 'wooden', true],
		// 铸铁块
		['cast_iron_block', 'metal', 5, 5, 'pickaxe', 'stone', true],
		// 熔炉核心
		['furnace_core', 'stone', 3, 3, 'pickaxe', 'stone', true],
		// 充电铁块
		['charge_iron_block', 'metal', 5, 5, 'pickaxe', 'stone', true]
	]

	// 循环
	Block.forEach(([
		Name,
		SoundType,
		Hardness,
		ResisTance,
		Tool,
		Grade,
		RequiresTool
	]) => {
		e.create(ModID + Name)
			.soundType(SoundType)
			.hardness(Hardness)
			.resistance(ResisTance)
			.tagBlock(Tool_Type[Tool])
			.tagBlock(Minin_Glevel[Grade])
			.requiresTool(RequiresTool)
	})
})