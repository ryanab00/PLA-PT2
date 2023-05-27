let darkMode = ''
async function SwitchColorsStart() {
	darkMode = localStorage.getItem('darkMode') ?? 'dark'
	darkMode = darkMode === 'dark' ? 'dark' : 'light'
	document.body.classList.add(darkMode)
	localStorage.setItem('darkMode', darkMode)
}

function SwitchColors() {
	document.body.classList.remove(darkMode)
	darkMode = darkMode === 'dark' ? 'light' : 'dark'
	document.body.classList.add(darkMode)
	localStorage.setItem('darkMode', darkMode)
}
SwitchColorsStart()

export default SwitchColors
