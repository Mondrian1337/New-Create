StartupEvents.registry('block', e => {
	// 工具类型
	const TOOL_TYPE = {
		pickaxe: 'minecraft:mineable/pickaxe',
		shovel: 'minecraft:mineable/shovel',
		axe: 'minecraft:mineable/axe',
		sword: 'minecraft:mineable/sword',
		hoe: 'minecraft:mineable/hoe'
	}
	// 挖掘等级
	const MININ_GLEVEL = {
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
		NAME,
		SOUND_TYPE,
		HARDNESS,
		RESIS_TANCE,
		TOOL,
		GRADE,
		REQUIRESTOOL,
	]) => {
		e.create(NAME)
			.soundType(SOUND_TYPE)
			.hardness(HARDNESS)
			.resistance(RESIS_TANCE)
			.tagBlock(TOOL_TYPE[TOOL])
			.tagBlock(MININ_GLEVEL[GRADE])
			.requiresTool(REQUIRESTOOL)
	})
})