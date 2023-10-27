import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, 'src/components'),
      styles: path.resolve(__dirname, 'src/styles'),
      pages: path.resolve(__dirname, 'src/pages'),
    },
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  plugins: [
    react(),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
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
        {
          'styled-components': [
            'css',
            'keyframes',
            'createGlobalStyle',
            'ThemeProvider',
            ['default', 'styled'],
          ],
        },
        {
          'styled-components-spacing': [
            'Margin',
            'Padding',
            'my',
            'px'
          ],
        },
        {
          'lodash-es': [
            'get',
            'isString',
            'has',
          ],
        },
        {
          from: 'styled-components',
          imports: ['DefaultTheme'],
          type: true,
        },
      ],
      dirs: ['src/shared'],
      dts: './src/types/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
      },
    })
  ],
})
