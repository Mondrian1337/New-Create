let DisplayName = [
	['new_create', 'New Create'],
	['New_create', 'New Create'],
	['kubejs', 'New Create'],
	['KubeJS', 'New Create'],
	['create: things and misc', 'Create: Things And Misc']
]
DisplayName.forEach(([Mod_id, DisplayName]) => {
	Platform.getInfo(Mod_id).name = DisplayName
})