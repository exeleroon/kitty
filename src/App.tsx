import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import CatsContainer from "./pages/home/CatsContainer";

function App() {
    return (
        <Suspense fallback={'404'}>
            <Routes>
                <Route path={'/'} element={<CatsContainer/>}/>
            </Routes>
        </Suspense>
    );
}

export default App;
