import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';
import Home from './app/screen/Home'
import Credit from './app/screen/Credit'
import Login from './app/screen/Login'
import Reservation from './app/screen/reservation'

export default function App() {
  return (
    <NativeRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/credit' component={Credit} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/reservation' component={Reservation} />
      </Switch>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
