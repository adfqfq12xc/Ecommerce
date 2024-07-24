'use client'
import React from 'react'
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PersistGate } from "redux-persist/integration/react";
import { store,persistor } from "../_redux/store";
function Layout({children}:{children:React.ReactNode}) {
  return (
<Provider store={store}>
<PersistGate persistor={persistor}>

<SessionProvider>
{children}
</SessionProvider>
</PersistGate>

</Provider>
  )
}

export default Layout