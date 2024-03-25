ServerEvents.tags('fluid', e => {
	// 工业燃油
	e.add('forge:industrial_fuel', [
		'kubejs:industrial_fuel'
	])

	// 煤油
	e.add('forge:kerosene', [
		'kubejs:kerosene'
	])

	// 汽油
	e.add('forge:gasoline', [
		'createdieselgenerators:gasoline'
	])

	// 柴油
	e.add('forge:diesel', [
		'createdieselgenerators:diesel'
	])

	// 混合汽油
	e.add('forge:mixed_gasoline', [
		'kubejs:mixed_gasoline'
	])
	
	// 精炼油
	e.add('thermal:refined_fuel',[
		'thermal:refined_fuel'
	])
})