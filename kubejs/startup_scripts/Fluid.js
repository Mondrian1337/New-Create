StartupEvents.registry('fluid', e => {
	let Fluid = [
		['andesite_compound_fluid', 0x808080],
		['embalming_fluid', 0x8B4513],
		['working_fluid', 0xF5F5F5],
		['zinc_fluid', 0xB9E9C1],
		['cast_fluid', 0x3E3E3E],
		['kerosene', 0xFFD700],
		['industrial_fuel', 0xF4A460],
		['mixed_gasoline', 0xF0E68C],
		['rose_quartz_fluid', 0xFF1493],
	]
	Fluid.forEach(([Name, Color]) => {
		e.create(Name)
			.thinTexture(Color)
			.thickTexture(Color)
			.bucketColor(Color)
			.flowingTexture('kubejs:block/flowing')
			.stillTexture('kubejs:block/still')
	})
})