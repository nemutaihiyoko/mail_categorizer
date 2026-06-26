import type { RouteObject } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SamplePage from './pages/sample/SamplePage'
import SampleDetailPage from './pages/sample/detail/SampleDetailPage'
import NotFoundPage from './pages/NotFoundPage'
import ApiPage from './pages/api/ApiPage'

export const routeConfig: RouteObject[] = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/sample',
        element: <SamplePage />,
        children: [
            {
                path: 'detail',
                element: <SampleDetailPage />,
            },
        ],
    },
    {
        path: '/api',
        element: <ApiPage />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
]
