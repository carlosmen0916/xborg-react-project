import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AppRouter, Footer, Navigation, ScrollWrapper } from "./components";
import store from "./store";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles/main.css";

function App() {
  return (
    <div className="font-body bg-[#151d1b] h-screen flex flex-1 flex-col overflow-hidden app-background">
      <BrowserRouter>
        <Provider store={store}>
          <Navigation />
          <ScrollWrapper>{(props) => <AppRouter {...props} />}</ScrollWrapper>
          <Footer />
        </Provider>
      </BrowserRouter>
    </div>
  );
}
export default App;
