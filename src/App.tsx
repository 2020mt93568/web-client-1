import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { AppContext } from "./contexts/AppContext";

import { Authentication } from "./routes/authentication/Authentication";
import { Home } from "./routes/home/Home";
import { Profile } from "./routes/profile/Profile";
import { Todo } from "./routes/todo/Todo";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const styles = {
  container: {
    minHeight: "calc(100vh - 96px)"
  }
};

export const App = () => {

  const [token, setToken] = useState("");

  return (
    <AppContext.Provider value={{
      token,
      setToken
    }}>
      <BrowserRouter>
        <Header />
        <div style={styles.container}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/authentication" element={<Authentication />} />
            <Route path="/profile" element={token ?
                <Profile /> :
                <Authentication />
              } />
            <Route path="/todo" element={token ?
                <Todo /> :
                <Authentication />
              } />
            <Route path="/" element={<Navigate to="home" />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AppContext.Provider>
  );
};

