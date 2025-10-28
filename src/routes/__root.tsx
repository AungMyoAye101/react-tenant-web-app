import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <React.Fragment>
            <Navbar />
            <Outlet />
            <Footer />
        </React.Fragment>
    )
}
