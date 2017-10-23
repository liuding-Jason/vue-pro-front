const routers = [
    {
        path: '/',
        meta: {
            title: 'Kuandd Operation'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    } ,
    {
    	path : '/menu' ,
    	meta : {
    		title : '菜单'
    	} ,
    	component : (resolve) => require(['./views/menu.vue'] , resolve) 
    } ,
    {
        path : "/testA/:id" ,
        meta : {
            title : '测试A'
        } ,
        component : (resolve) => require(['./views/testA/index.vue'] , resolve) ,
        props : true
    }
] ;
export default routers ;