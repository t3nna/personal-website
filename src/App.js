import {Route, Routes} from "react-router-dom";

import './sass/main.scss'
import FindMe from "./components/FindMe";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Main from "./components/Main";
import BlogPage from "./components/blog/BlogPage";
import BlogList from "./components/blog/BlogList";
import About from "./components/About";
import ForYou from "./components/forYou/ForYou";
import ProjectList from "./components/projects/ProjectList";

function App() {
    return (
        <Routes>
            <Route path={'/find-me'} element={<FindMe/>}/>
            <Route path={'/'} element={<>
                <Navigation/>
                <Main/>
                <Footer/>
            </>}/>
            <Route path={'/blog'} element={<>
                <Navigation/>
                <BlogPage/>
                <Footer/>
            </>}/>
            <Route path={'/blogs'} element={<>
                <Navigation/>
                <BlogList/>
                <Footer/>
            </>}/>
            <Route path={'/about'} element={
                <>
                    <Navigation/>
                    <About/>
                    <Footer/>
                </>
            }/>
            <Route path={'/for-you'} element={
                <>
                    <Navigation/>
                    <ForYou/>
                    <Footer/>
                </>
            }/>
            <Route path={'/projects'} element={
                <>
                    <Navigation/>
                    <ProjectList/>
                    <Footer/>
                </>
            }/>

        </Routes>
    );
}

export default App;
