import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx,
      ],
      imports: [
        'react',
        {
          react: ['cloneElement', 'createContext', 'StrictMode', 'Suspense'],
        },
        {
          from: 'react',
          imports: [
            'createRoot',
            'FunctionComponent',
            'ReactNode',
            'ReactElement',
            'Key',
            ['MouseEvent', 'ReactMouseEvent'],
            ['KeyboardEvent', 'ReactKeyboardEvent'],
            'ComponentType',
            'ComponentProps',
            'ChangeEvent',
            'Ref',
            'RefObject',
            'Dispatch',
            'SetStateAction',
            'CSSProperties',
          ],
          type: true,
        },
        {
          'react-router-dom': [
            'createBrowserRouter',
            'RouterProvider',
            'Link',
            'useNavigate',
            'NavLink',
            'useParams',
            'Outlet',
            'useLocation',
            'useSearchParams',
            'useBeforeUnload',
            'useMatch',
          ],
        },
      ],
      // Enable auto import by filename for default module exports under directories
      defaultExportByFilename: false,
    
      // Auto import for module exports under directories
      // by default it only scan one level of modules under the directory
      dirs: [
        // './hooks',
        // './composables' // only root modules
        // './composables/**', // all nested modules
        // ...
      ],
    
      // Filepath to generate corresponding .d.ts file.
      // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
      // Set `false` to disable.
      dts: './src/types/auto-imports.d.ts',
    
      // Auto import inside Vue template
      // see https://github.com/unjs/unimport/pull/15 and https://github.com/unjs/unimport/pull/72
      vueTemplate: false,
    
      // Custom resolvers, compatible with `unplugin-vue-components`
      // see https://github.com/antfu/unplugin-auto-import/pull/23/
      resolvers: [
        /* ... */
      ],
    
      // Inject the imports at the end of other imports
      injectAtEnd: true,
    
      // Generate corresponding .eslintrc-auto-import.json file.
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      eslintrc: {
        enabled: false, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    })
  ],
})
