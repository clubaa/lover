import React,{Component,Fragment} from 'react'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './pages/admin'
class RootRouter extends Component{
    render(){
        return(
        <App>
            <HashRouter>
                <Switch>
                    <Route path="/login" component = {Login}></Route>
                    <Route path="/admin" component = {Admin}></Route>
                </Switch>
            </HashRouter>
        </App>
        )
    }
}
export default RootRouter;