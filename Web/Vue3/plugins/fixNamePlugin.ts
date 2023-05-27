import { resolve } from 'node:path/win32'
import { PluginOption } from 'vite'

const root = process.cwd()
const pages: Record<string, string> = {
	index: resolve(root, 'index.html')
}

export function fixNamePlugin(
	o: {
		hash?: boolean
		outDir?: string
	} = {
		hash: true,
		outDir: resolve(root, '../wwwroot')
	}
): PluginOption {
	const v = {
		hash: o.hash ? '-[hash]' : '',
		outDir: o.outDir
	}
	return {
		name: 'my-plugin1',
		apply: 'build',
		enforce: 'pre',
		config(c, env) {
			function fixName(assetInfo: { name?: string }): string {
				let name = assetInfo.name || ''
				// console.log(`{str}--${name}`);
				if (name === '' || /.vue/i.test(name)) {
					return name
				}
				if (/CPIcoMoon/i.test(name)) {
					return `font/[name]${v.hash}[extname]`
				}
				if (/.css/i.test(name)) {
					return `css/[name]${v.hash}[extname]`
				}
				if (/.png|.jpe?g|.svg|.gif|.tiff|.bmp|.ico/i.test(name)) {
					return `img/[name]${v.hash}[extname]`
				}
				if (/.html/i.test(name)) {
					return `htm/[name][extname]`
				}
				return `js/[name]${v.hash}.js`
			}
			let build = (c.build ??= {})
			build.outDir ??= v.outDir
			build.emptyOutDir = true
			build.ssrEmitAssets = undefined
			let rollupOptions = (build.rollupOptions ??= {})
			let input = (rollupOptions.input ??= {})
			let output = (rollupOptions.output ??= {})
			Object.assign(input, pages)
			Object.assign(output, {
				assetFileNames: fixName,
				chunkFileNames: fixName,
				entryFileNames: fixName
			})
		}
	}
}
