import { lazy } from 'react'
import { FeedbackForm } from './components/FeedbackForm'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './components/Home'
import { NotFound } from './components/NotFound'
import { Layout } from './components/Layout'
import { LeaderboardContainer } from './components/LeaderboardContainer'

const Cards = lazy(() => import('./components/Cards'))

export default function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/feedback',
          element: <FeedbackForm />,
        },
        {
          path: '/game',
          element: <Cards />,
        },
        {
          path: '/leaderboard',
          element: <LeaderboardContainer />,
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
