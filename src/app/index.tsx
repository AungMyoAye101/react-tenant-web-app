
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from "../routeTree.gen"
// generated automatically in file-based routing setup

const router = createRouter({ routeTree })

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App