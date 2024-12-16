import { Route, Routes } from "react-router-dom"
import Blog from "../../pages/blog/Blog"



const menu = [
  
    {
        name: "Blog",
        path: "/",
        component:Blog
    },
   
   
]


const AppRoutes = () => {
    return (
        <Routes>
            {menu.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.component />} />
            )
            )}
        </Routes>
    )
}

export default AppRoutes
