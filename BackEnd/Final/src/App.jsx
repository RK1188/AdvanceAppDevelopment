import React, {lazy,Suspense} from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from './pages/user/loading'
import LazyLayout from "./pages/lazyLayout";
const LazyLogin = lazy(() => import("./pages/user/login"));
const LazyRegister = lazy(() => import("./pages/user/register"));
const LazyHome = lazy(() => import("./pages/user/home"));
const LazyAbout = lazy(() => import("./pages/user/about"));
const UserLayout = lazy(() => import("./pages/user/userLayout"));
const LazyProfile = lazy(() => import("./pages/user/profile"));
const LazyCoursePage = lazy(() => import("./pages/user/coursePage"));
const LazyForgotPassword = lazy(() => import("./pages/user/forgotPassword"));
const LazyQueries = lazy(() => import("./pages/user/studentenquire"));
const LazyViewEnQueries = lazy(() => import("./pages/user/studentViewEnquries"));
const LazyAdminReplay = lazy(() => import("./pages/user/adminanswerQueries"));
const LazyCourseAdd = lazy(() => import("./pages/user/courseAdd"));
const LazyPaymentAdd = lazy(() => import("./pages/user/payment"));
const LazyAdminReplayView = lazy(() => import("./pages/user/exampleTable"));
const UserRoutes = () => {
  return (
    <UserLayout>
      <Routes>
        <Route path="/home" element={<LazyLayout component={LazyHome} />} />
        <Route path="/course" element={<LazyLayout component={LazyCoursePage} />} />
        <Route path="/about" element={<LazyLayout component={LazyAbout} />} />
        <Route path="/profile" element={<LazyLayout component={LazyProfile} />} />
        <Route path="/enqueries" element={<LazyLayout component={LazyQueries}/>} />
        <Route path="/viewenqueries" element={<LazyLayout component={LazyViewEnQueries}/>} />
        <Route path="/admin-replay" element={<LazyLayout component={LazyAdminReplay} />} />
        <Route path="/course-add" element={<LazyLayout component={LazyCourseAdd} />} />
        <Route path="/payment" element={<LazyLayout component={LazyPaymentAdd} />} /> 
        <Route path="/Adminreplay" element={<LazyLayout component={LazyAdminReplayView} />} /> 

        </Routes>
        </UserLayout>
        );
      };
      const App = () => {
        return (
          <div className="App">
          <Suspense fallback={<Loading />}>
          <ToastContainer />
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