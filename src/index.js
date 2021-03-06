import { render } from "react-dom";
import { 
  BrowserRouter,
  Routes,
  Route
   } from "react-router-dom";
import App from "./App";
import Main from "./components/Main";
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Service from './routes/serviceRoute';
import 'fontsource-roboto';

const rootElement = document.getElementById("root");

render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          {/* <Route path="/home" element={<Main />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} >
            <Route path=":serviceId" element={<Service />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route 
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
            />
        </Route>
      </Routes>
    </BrowserRouter>,
    rootElement
      
      );