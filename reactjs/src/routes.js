
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from '././components/pages/login'
import MonkChat from '././components/pages/monkchat'



export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Login} />
                <Route path="/chat" exact={true} component={MonkChat} />
            </Switch>
        </BrowserRouter>
    )
}
