StartupEvents.registry('fluid', e => {
	let Fluid = (
		Name,
		Thin,
		Thick,
		Bucket
	) => {
		e.create(Name)
			.thinTexture(Thin)
			.thickTexture(Thick)
			.bucketColor(Bucket)
			.flowingTexture('kubejs:block/flowing')
			.stillTexture('kubejs:block/still')
	}
	// 安山混合液
	Fluid('andesite_compound_fluid', 0x808080, 0x808080, 0x808080)
	// 防腐液
	Fluid('embalming_fluid', 0x8B4513, 0x8B4513, 0x8B4513)
	// 加工液
	Fluid('working_fluid', 0xF5F5F5, 0xF5F5F5, 0xF5F5F5)
	// 锌流体
	Fluid('zinc_fluid', 0xB9E9C1, 0xB9E9C1, 0xB9E9C1)
	// 铸铁溶液
	Fluid('cast_fluid', 0x3E3E3E, 0x3E3E3E, 0x3E3E3E)
	// 煤油
	Fluid('kerosene',0xFFD700,0xFFD700,0xFFD700)
	// 工业燃油
	Fluid('industrial_fuel',0xF4A460,0xF4A460,0xF4A460)
})