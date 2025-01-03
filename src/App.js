import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./Pages/About"
import Home from "./Pages/Home"
import Navbar from "./components/Navbar";
import Booklist from "./components/Booklist/Booklist";
import BookDets from "./components/BookDets"
import { AppProvider } from "./context";


function App(){
    return(
        <AppProvider>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Home />}>
                            <Route path="about" element={<About />} />
                            <Route path="book" element={<Booklist />} />
                            <Route path="books/:id" element={<BookDets />} />
                        </Route>
                    </Routes>
                </div>
            </Router>
        </AppProvider>
        
    )
}

export default App

