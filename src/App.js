import {Outlet, Route, Routes} from "react-router-dom";

import './sass/main.scss'
import FindMe from "./components/FindMe";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Main from "./components/Main";
import BlogPage from "./components/blog/BlogPage";
import BlogList from "./components/blog/BlogList";
import About from "./components/About";
import ForYou from "./components/forYou/ForYou";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import ProjectPage from "./components/projects/ProjectPage";
import ProjectList from "./components/projects/ProjectList";
import Tech from "./components/tech/Tech";

const queryClient = new QueryClient()


function App() {
    return (
        <QueryClientProvider client={queryClient}>

            <Routes>
                <Route path={'/find-me'} element={<FindMe/>}/>
                <Route path={'/'} element={<>
                    <Navigation/>
                    <Main/>
                    <Footer/>
                </>}/>

                <Route path={'/blog'} element={
                    <>
                        <Navigation/>
                        <Outlet/>
                        <Footer/>
                    </>
                }>
                    <Route path={'all'} element={<>
                        <BlogList/>
                    </>}/>
                    <Route path={':id'} element={
                        <>
                            <BlogPage/>
                        </>
                    }/>
                </Route>


                <Route path={'/project'} element={
                    <>
                        <Navigation/>
                        <Outlet/>
                        <Footer/>
                    </>
                }>
                    <Route path={'all'} element={<>
                    <ProjectList/>
                </>}/>
                    <Route path={':id'} element={
                        <>
                            <ProjectPage/>
                        </>
                    }/>

                </Route>


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

                <Route path={'/setup'} element={<Tech/>}/>


                <Route path={'*'} element={<h1 className={'fs-primary-heading'}>404</h1>}/>


            </Routes>
            <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'}/>

        </QueryClientProvider>

    );
}


export default App;
