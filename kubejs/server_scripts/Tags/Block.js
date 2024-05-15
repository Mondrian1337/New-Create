ServerEvents.tags('block', e => {
	// 扳手可拆卸
	e.add('create:wrench_pickup', [
		'new_create:cast_iron_casing',
		'flopper:flopper',
		'#caupona:stew_pot',
		'#caupona:stoves',
		'melter:melter'
	])
})