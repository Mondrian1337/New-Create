StartupEvents.registry('block', e => {
	const ModID = 'new_create:'
	const CM = 'custommachinery:'
	e.create(ModID + 'machine_core', 'custommachinery')
		.renderType('solid')
		.machine(CM + 'machine_core')
})