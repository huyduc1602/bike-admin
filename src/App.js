import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '~/components/Layout';
import { publicRoutes } from './routes/route.';

function App() {
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
        const fetchData = async () => {
            if (sessionStorage.getItem('currentUser') != 'undefined') {
                setCurrentUser(
                    JSON.parse(sessionStorage.getItem('currentUser')),
                );
            }
        };
        fetchData();
    }, []);
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        const Page = route.component;
                        if (Page.name != 'SignIn') {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout user={currentUser}>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        } else {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={<Page />}
                                />
                            );
                        }
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
