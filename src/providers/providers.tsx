import { Provider } from "react-redux"
import { appStore } from "../store/store"
import { BrowserRouter as Router } from "react-router-dom"

export const CustomProvider = (props:{children:React.ReactNode})=>{
const {children} = props
    return(
 <Provider store={appStore}>
 <Router>
 {children}
 </Router>
 </Provider>
 )
}