let DisplayName = {
	kubejs: 'New Create'
}
Object.keys(DisplayName).forEach(key => {
	Platform.mods[key].name = DisplayName[key]
})