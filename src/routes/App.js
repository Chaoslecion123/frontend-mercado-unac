// Seguridad
//Layout
import Main from '../layout/Main';

import Home from '../pages/Home';
import Error404 from '../pages/Error404';
import PreviewPase from '../pages/PreviewPase';
import PaseDone from '../pages/PaseDone';
import Example from '../pages/Pdf';
import SignIn from '../pages/SignIn';

const routes = [
    {
        path:"/",
        component:Main,
        exact:false,
        routes:[
            {
                path:"/",
                component:Home,
                exact:true
            },
            {
                path:"/login",
                component:SignIn,
                exact:true
            },
            // {
            //     path:"/registro",
            //     component:Registro,
            //     exact:true
            // },
            // {
            //     path:"/login",
            //     component:Login,
            //     exact:true
            // },
            {
                path:"/previo-pase",
                component:PreviewPase,
                exact:true
            },
            {
                path:"/horarios/:id_mercado",
                component:PaseDone,
                exact:true
            },
            {
                path:"/pdf/:market_pass_request_id",
                component:Example,
                exact:true
            },
            {
                component:Error404
            }
        ]
    }
]

export default routes;