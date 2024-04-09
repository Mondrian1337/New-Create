ItemEvents.tooltip(e => {
	const { translate } = Text
	// 草绳
	e.add('new_create:grass_string', [
		translate('tooltip.new_create.grass_string')
	])
	// 杂草
	e.add('new_create:grass_fiber', [
		translate('tooltip.new_create.grass_fiber')
	])

	// 手枪
	e.add('immersiveengineering:toolupgrade_revolver_electro', [
		translate('tooltip.ie.toolupgrade_revolver_electro')
	])

	//
	const flintTools = ['sword', 'pickaxe', 'axe', 'handaxe', 'shovel']

	// 燧石工具
	flintTools.forEach(tools => {
		e.add(`new_create:flint_${tools}`, [
			translate('tooltip.new_create.flint_tools')
		])
	})
})