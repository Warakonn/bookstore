import { Routes, Route} from "react-router-dom";


import Navbar from './Navbar';
import Book from './book';
import Buybook from "./buy"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="buy/:id" element={<Buybook />} />
      </Routes>
    </div>
  );
}

export default App;
