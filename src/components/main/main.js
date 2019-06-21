import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ListI from '../list/list'
import PersonalList from '../personalList/personalList';

const Main = () => (
    <Switch>
        <Route exact path='/' component={ListI} />
        <Route exact path='/personal-list/:pokemon' component={PersonalList} />
    </Switch>
)

export default Main;