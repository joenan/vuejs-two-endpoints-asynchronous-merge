 

const routes = [
    {
        path: "/",
        alias: "/index",
        name: "comments",
        component: () => import("./components/comments/index")
      },
    
];

export default routes;