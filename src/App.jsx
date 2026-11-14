import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import theme from './theme'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import{
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient= new QueryClient()

export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    </QueryClientProvider>
    <ToastContainer />
    </ThemeProvider>
  )
}
