ServerEvents.tags('fluid', e => {
	// 工业燃油
	e.add('forge:industrial_fuel',[
		'kubejs:industrial_fuel_bucket'
	])

	// 煤油
	e.add('forge:kerosene',[
		'kubejs:kerosene_bucket'
	])

	// 汽油
	e.add('forge:gasoline',[
		'createdieselgenerators:gasoline_bucket'
	])

	// 柴油
	e.add('forge:diesel',[
		'createdieselgenerators:diesel_bucket'
	])
})