import 'react-native-gesture-handler';
import React from 'react';
import { AuthenticationProvider, AlertProvider,ThemeProvider  } from './src/contexts';
import { Navigation } from './src/navigation';




export default function App() {
  return (

    <ThemeProvider>
      <AlertProvider>
        <AuthenticationProvider>
          <Navigation />
        </AuthenticationProvider>
      </AlertProvider>
    </ThemeProvider>



  );
}


