import React, {lazy,Suspense} from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Loading from './pages/user/loading'
import LazyLayout from "./pages/lazyLayout";
const LazyLogin = lazy(() => import("./pages/user/login"));
const LazyRegister = lazy(() => import("./pages/user/register"));
const LazyHome = lazy(() => import("./pages/user/home"));
const LazyAbout = lazy(() => import("./pages/user/about"));
const UserLayout = lazy(() => import("./pages/user/userLayout"));
const LazyProfile = lazy(() => import("./pages/user/profile"));
const LazyCourse = lazy(() => import("./pages/user/course"));
const LazyForgotPassword = lazy(() => import("./pages/user/forgotPassword"));
const UserRoutes = () => {
  return (
    <UserLayout>
      <Routes>
        <Route path="/home" element={<LazyLayout component={LazyHome} />} />
        <Route path="/course" element={<LazyLayout component={LazyCourse} />} />
        <Route path="/about" element={<LazyLayout component={LazyAbout} />} />
        <Route path="/profile" element={<LazyLayout component={LazyProfile} />} />
        </Routes>
        </UserLayout>
        );
      };
      const App = () => {
        return (
          <div className="App">
          <Suspense fallback={<Loading />}>
          <Routes>
          <Route exact path="/" element={<Navigate to="/routeTo/login" />} />
          <Route path="/routeTo/login"  element={<LazyLayout component={LazyLogin}/>}/>
          <Route path="/routeTo/sign"  element={<LazyLayout component={LazyRegister}/>}/>
          <Route path="/forgotpassword" element={<LazyLayout component={LazyForgotPassword} />}/>
          <Route path="/user/*" element ={<UserRoutes/>}/>
    </Routes>
    </Suspense>
     </div>
  );
};

export default App;