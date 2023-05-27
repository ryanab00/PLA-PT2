import { resolve } from 'node:path/win32'
import vue from '@vitejs/plugin-vue'
import { UserConfigExport, splitVendorChunkPlugin } from 'vite'
import { fixNamePlugin } from './plugins/fixNamePlugin'
import { copyCsHtmlPlugin } from './plugins/copyCsHtmlPlugin'
import viteCompression from 'vite-plugin-compression';

const _src = resolve(__dirname, "src")

const configOptions: UserConfigExport = {
		plugins: [vue(), splitVendorChunkPlugin(), fixNamePlugin(), copyCsHtmlPlugin(), viteCompression()],
		resolve: {
				alias: {
						'@': _src
				}
		},
		server: {
				// https: true,
				port: 4000,
				proxy: {
						'/Home': 'http://localhost:5000'
				}
		}
};

// https://vitejs.dev/config/
export default configOptions
