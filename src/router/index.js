/*
   Root, Router 配置
*/
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import App from '../App' 
import Home from '../components/Home'
import About from '../components/About'
import Details from '../components/Details'
const Root = () => (
   <div>
      <Switch>
         <Route
            path="/"
            render={props => (
               <App>
                  <Switch>
                     <Route path="/" exact component={Home} />
                     <Route path="/Home" component={Home} />
                     <Route path="/About" component={About} />
                     <Route path="/Details" component={Details} />
                      {/*路由不正确时，默认跳回home页面*/}
                     <Route render={() => <Redirect to="/" />} />
                  </Switch>
               </App>
            )}
         />
      </Switch>
   </div>
);
 
export default Root;
