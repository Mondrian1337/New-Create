ItemEvents.tooltip(e => {
	let { translate } = Text
	// 草绳
	e.add('kubejs:grass_string', [
		translate('tooltip.kubejs.grass_string')
	])
	// 杂草
	e.add('kubejs:grass_fiber', [
		translate('tooltip.kubejs.grass_fiber')
	])

	// 手枪
	e.add('immersiveengineering:toolupgrade_revolver_electro',[
		translate('tooltip.immersiveengineering.toolupgrade_revolver_electro')
	])

	//
	const flintTools = [
		'sword', 'pickaxe', 'axe', 'handaxe', 'shovel'
	]

	// 燧石工具
	flintTools.forEach(tools => {
		e.add(`kubejs:flint_${tools}`, [
			translate('tooltip.kubejs.flint_tools')
		])
	})
})