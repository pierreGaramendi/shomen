import { useRoutes } from "react-router-dom";
import * as all from './index'
import { Main } from "../scenes/main/main";
import { Product } from "../components/Product/product";


export default function Router() {
    const { ProductDetail, Dashboard, Login } = all
    const routes = useRoutes([
        {
          path: "/",
          element: <Main />,
          children: [
            {
              path: "dashboard",
              element: <Dashboard />
            },
            {
              path: "productos",
              element: <Product />,
              children:[
                {
                  path: ":id",
                  element: <ProductDetail />
                },
              ]
            }
          ]
        },
        {
          path: '/login',
          element: <Login />
      }
      ])
    return routes;
}
