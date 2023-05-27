import { resolve } from 'node:path/win32'
import { PluginOption } from 'vite'
import fs from 'fs'

const root = process.cwd()
const map: Record<string, string> = {
	'index.html': 'Home/index.cshtml'
}
export function copyCsHtmlPlugin(): PluginOption {
	const closeBundle = () => {
		const src = resolve(root, '../')
		for (const key in map) {
			const fileIn = resolve(src, 'wwwroot', key)
			const fileOut = resolve(src, 'views', map[key])
			if (fs.existsSync(fileIn)) {
				fs.rename(fileIn, fileOut, (error) => {
					if (error) {
						throw error
					} else {
						console.log(`\n\x1b[33m[Moved]\x1b[0m\n${fileIn}   =>   ${fileOut}`)
					}
				})
			}
		}
	}
	return {
		name: 'my-plugin',
		apply: 'build',
		enforce: 'post',
		closeBundle
	}
}
