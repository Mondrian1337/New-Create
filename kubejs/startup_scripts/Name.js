let displayName = [
	['new_create', 'New Create'],
	['New_create', 'New Create'],
	['kubejs', 'New Create']
]
displayName.forEach(([Mod_id, DisplayName]) => {
	Platform.getInfo(Mod_id).name = DisplayName
})