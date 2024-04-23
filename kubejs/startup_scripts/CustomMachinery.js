StartupEvents.registry('block', e => {
	const ModID = 'new_create:'
	const cm = 'custommachinery:'
	e.create(ModID + 'machine_core', 'custommachinery')
		.renderType('solid')
		.machine(cm + 'machine_core')
})