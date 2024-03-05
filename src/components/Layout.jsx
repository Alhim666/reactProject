import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { Loading } from './Loading'
import { Header } from './Header'

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <div className="wrapper">
          <Outlet />
        </div>
      </Suspense>
    </>
  )
}
