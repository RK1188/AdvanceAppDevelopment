import { Suspense } from "react"
import propTypes from "prop-types";
import Loading from "./user/loading"
const LazyLayout=({component:Component,...rest})=>{
    return(
        <Suspense fallback=<Loading/>>
            <Component {...rest} />
        </Suspense>
    )
}

LazyLayout.propTypes ={
    component: propTypes.elementType.isRequired
}

export default LazyLayout;
LazyLayout.js

