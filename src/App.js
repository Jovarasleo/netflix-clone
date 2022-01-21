import Home from "./components/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/pages/Login";
import ForgotPassword from "./components/pages/ForgotPassword";
import Layout from "./components/layout";
import BlogPost from "./components/pages/BlogPost";
import Success from "./components/pages/Success";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="success" element={<p>Random SUCC</p>} />
          <Route path="login">
            <Route index element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>
          <Route path="*" element={<h1>404</h1>} />
        </Route>
        <Route path="/blog">
          <Route path=":postId" element={<BlogPost />} />
          <Route path="feature" element={<p>Here will be feature posts</p>} />
          <Route path="success" element={<Success />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
