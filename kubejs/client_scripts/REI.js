// 添加Item到REI
REIEvents.addItems(e => {
	let Item = [
		'create:shadow_steel',
		'create:shadow_steel_casing',
		'create:refined_radiance',
		'create:refined_radiance_casing'
	]
	Item.forEach(Item => {
		e.add(Item)
	})
})
// 隐藏REI内Item
REIEvents.hideItems(e => {
	let Item = [
		'extendedcrafting:singularity',
		'extendedcrafting:crystaltine_catalyst',
		'extendedcrafting:enhanced_ender_catalyst',
		'extendedcrafting:ender_catalyst',
		'extendedcrafting:enhanced_redstone_catalyst',
		'extendedcrafting:redstone_catalyst',
		'extendedcrafting:ultimate_catalyst',
		'extendedcrafting:elite_catalyst',
		'extendedcrafting:advanced_catalyst',
		'extendedcrafting:basic_catalyst',
		'extendedcrafting:the_ultimate_catalyst',
		'extendedcrafting:basic_component',
		'extendedcrafting:advanced_component',
		'extendedcrafting:elite_component',
		'extendedcrafting:ultimate_component',
		'extendedcrafting:redstone_component',
		'extendedcrafting:enhanced_redstone_component',
		'extendedcrafting:ender_component',
		'extendedcrafting:enhanced_ender_component',
		'extendedcrafting:black_iron_slate',
		'extendedcrafting:crystaltine_component',
		'extendedcrafting:the_ultimate_component'
	]
	Item.forEach(Item => {
		e.hide(Item)
	})
})
// 添加Fluid到REI
REIEvents.addFluids(e => {
	let Fluid = [

	]
	Fluid.forEach(e => {
		e.add(Fluid)
	})
})