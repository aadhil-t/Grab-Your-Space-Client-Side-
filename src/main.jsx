import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Store,persistor } from "./Redux/Store.jsx";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import { GoogleOAuthProvider } from "@react-oauth/google";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="885688387139-1e0caf1lan36atphmq3ujiohujh5vqhq.apps.googleusercontent.com">
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
           <App />
        </QueryClientProvider>
        </React.StrictMode>
      </PersistGate>
    </Provider>
    </GoogleOAuthProvider>
);
