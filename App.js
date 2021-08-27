import { StatusBar } from 'expo-status-bar';
import React from 'react';

import AppTab from './src/AppTab';

export default function App() {
  return ( 
    <>
      <AppTab />
      <StatusBar style="light" />
    </>
  );
}
