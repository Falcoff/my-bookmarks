import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PageContent from "./components/PageContent";
import { BookmarkProvider } from "./utils/context";

function App() {

  return (
    <div className="app">
      <Header />
      <BookmarkProvider>
        <PageContent />
      </BookmarkProvider>

      <Footer />
    </div>
  );
}

export default App;
