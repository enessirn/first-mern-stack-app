import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetList from "./components/GetList";
import CreatePerson from "./components/CreatePerson";
function App() {
  return (
    <BrowserRouter>
      <div className="h-screen w-full p-4">
        <Routes>
          <Route exact path="/" element={<GetList />} />
          <Route exact path="/create-person" element={<CreatePerson />} />
          {/* <Route exact path="/update-person/:id" element={<UpdatePerson />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
