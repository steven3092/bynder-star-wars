// import { Outlet, useParams } from "react-router-dom";
// import { useGetProduct } from "../../hooks/use-product/use-product";
// import { ProductProvider } from "./context/product";

// const AppRoutes = () => {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <App />,
//       errorElement: <ErrorPage />,
//     },
//     {
//       path: "character/:characterId/planet/:planetId",
//       element: <CharacterDetails />,
//       errorElement: <ErrorPage />,
//     },
//     // {
//     //   path: "resident/:residentId/planet/:planetId",
//     //   element: <ResidentDetails />,
//     //   errorElement: <ErrorPage />,
//     // },
//   ]);

//   const { productId, versionId } = useParams() as {
//     productId: string;
//     versionId: string;
//   };
//   const query = useGetProduct(productId, versionId);
//   if (query.isSuccess) {
//     return (
//       <ProductProvider initialData={query.data}>
//         <Outlet />
//       </ProductProvider>
//     );
//   }

//   return null;
// };

// const ProductCreateRoutes = () => {
//   return (
//     <ProductProvider>
//       <Outlet />
//     </ProductProvider>
//   );
// };

// export { ProductRoutes, ProductCreateRoutes };
