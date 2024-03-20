StartupEvents.registry('fluid', e => {
	let Fluid = [
		// 安山合金溶液
		['andesite_compound_fluid', 0x808080],
		// 防腐液
		['embalming_fluid', 0x8B4513],
		// 加工液
		['working_fluid', 0xF5F5F5],
		// 锌溶液
		['zinc_fluid', 0xB9E9C1],
		// 铸铁溶液
		['cast_fluid', 0x3E3E3E],
		// 煤油
		['kerosene', 0xFFD700],
		// 工业燃油
		['industrial_fuel', 0xF4A460],
		// 混合汽油
		['mixed_gasoline', 0xF0E68C],
		// 玫瑰石英溶液
		['rose_quartz_fluid', 0xFF1493]
	]
	Fluid.forEach(([Name, Color]) => {
		e.create(Name)
			.thickTexture(Color)
			.bucketColor(Color)
			.flowingTexture('kubejs:block/flowing')
			.stillTexture('kubejs:block/still')
	})

	// 特殊注册(这里用于注册特殊的Fluid,例如独立贴图,没有桶之类的)
	// 液态灵魂
	e.create('soul')
		.noBucket()
		.noBlock()
		.flowingTexture('kubejs:block/soul_flowing')
		.stillTexture('kubejs:block/soul_still')
})