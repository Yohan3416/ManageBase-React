import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login.tsx";
import MyLayout from "../Layout/Layout.tsx";
import Error403 from "../pages/403.tsx";
import Error404 from "../pages/404.tsx";
import LazyComponent from "../components/LazyComponent/LazyComponent.tsx";
import { lazy } from "react";

const routes = [
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/",
    element: <MyLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={"/databoard"} />,
      },
      {
        path: "/databoard",
        element: (
          <LazyComponent
            lazyChildren={lazy(
              () => import("../pages/LayoutPages/DataBoard/DataBoard.tsx"),
            )}
            title="数据看板"
          />
        ),
      },
      {
        path: "/cashier",
        element: (
          <LazyComponent
            lazyChildren={lazy(
              () => import("../pages/LayoutPages/Cashier/Cashier.tsx"),
            )}
            title="收银台"
          />
        ),
      },
      {
        path: "/bookstorage",
        element: (
          <LazyComponent
            lazyChildren={lazy(
              () => import("../pages/LayoutPages/BookStorage/BookStorage.tsx"),
            )}
            title="书籍入库"
          />
        ),
      },
      {
        path: "/storemanage",
        element: (
          <LazyComponent
            lazyChildren={lazy(
              () => import("../pages/LayoutPages/StoreManage/StoreManage.tsx"),
            )}
            title="库存管理"
          />
        ),
      },
      {
        path: "/OrderManage",
        element: (
          <LazyComponent
            lazyChildren={lazy(
              () => import("../pages/LayoutPages/OrderManage/OrderMannage.tsx"),
            )}
            title="订单管理"
          />
        ),
      },
      {
        path: "/department",
        children: [
          {
            index: true,
            element: <Navigate to={"/department/add"} />,
          },
          {
            path: "/department/add",
            element: (
              <LazyComponent
                lazyChildren={lazy(
                  () =>
                    import("../pages/LayoutPages/Department/Department.tsx"),
                )}
                title="部门管理"
              />
            ),
          },
        ],
      },
      {
        path: "/logrecord",
        element: (
          <LazyComponent
            lazyChildren={lazy(
              () => import("../pages/LayoutPages/LogRecord/LogRecord.tsx"),
            )}
            title="日志记录"
          />
        ),
      },
    ],
  },

  {
    path: "/403",
    element: <Error403 />,
  },
  {
    path: "/404",
    element: <Error404 />,
  },
  {
    path: "*",
    element: <Navigate to={"/404"} />,
  },
];

const router = createBrowserRouter(routes) as ReturnType<
  typeof createBrowserRouter
>;

export default router;
