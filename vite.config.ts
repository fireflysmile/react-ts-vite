import { defineConfig, loadEnv } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite';
import type { UserConfig } from 'vite';

export default defineConfig(({ mode }): UserConfig => {
  const env = loadEnv(mode, process.cwd(), '');
  const port = env.PORT || 8001;

  return {
    mode: env.NODE_ENV,
    server: {
      host: '0.0.0.0',
      port: port as number,
    },
    define: {
      API_URL: JSON.stringify(env.API_URL),
      APP_URL: JSON.stringify(env.APP_URL),
      NODE_ENV: JSON.stringify(env.NODE_ENV),
      PORT: JSON.stringify(env.PORT),
    },
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src'),
        assets: path.resolve(__dirname, 'assets'),
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
  }
})
