let adminPermisson = [{
        name: "商品管理",
        children: [{
                name: "商品列表"
            },
            {
                name: "商品添加"
            }
        ]
    },
    {
        name: "订单管理",
        children: [
            {
                name: "订单列表"
            },
            {
                name: "修改订单"
            }
        ]
    },
    {
        name:"财务管理"
    }
];

let vipPermisson = [{
        name: "商品管理",
        children: [
            {
                name: "商品列表"
            },
        ]
    },
    {
        name: "订单管理",
        children: [{
                name: "订单列表"
            }
        ]
    }
];

let allRoutes = [{
        name: "商品管理",
        children: [{
                name: "商品列表",
                path:"/goodslist",
                meta:{
                    icon:"goods",
                    requireAuth:true
                }
            },
            {
                name: "商品添加",
                path: "/add",
                meta: {
                    icon: "add",
                    requireAuth: false
                }
            }
        ]
    },
    {
        name: "订单管理",
        children: [{
                name: "订单列表",
                path: "/order",
                meta: {
                    icon: "order",
                    requireAuth: true
                }
            },
            {
                name: "修改订单",
                path: "/updateOrder",
                meta: {
                    icon: "edit",
                    requireAuth: true
                }
            }
        ]
    },
    {
        name: "财务管理",
        path: "/caiwu",
        meta: {
            icon: "money",
            requireAuth: true
        }
    }
];

// 对比用户的权限， 把 用户权限 和 全部的的路由 进行对比，获取在完整路由中的详细信息（如path、meta）。
function recursionRoute(userRoutes = [],allRoutes =[]){
    let realRoutes = [];
    allRoutes.forEach(v=>{
        userRoutes.forEach(item=>{
            if(item.name === v.name){
                if(item.children && item.children.length > 0){
                    v.children = recursionRoute(item.children,v.children);
                }
                realRoutes.push(v)
            }
        })
    })
    return realRoutes;
}

// 设置嵌套路由的默认重定向
function setDefaultRoute(routes){
    routes.forEach(item=>{
        if(item.children && item.children.length >0 ){
            item.redirect = { name: item.children[0].name}
            setDefaultRoute(item.children);
        }
    })
}

let adminRoutes = recursionRoute(adminPermisson, allRoutes);
setDefaultRoute(adminRoutes)
console.log(adminRoutes)



