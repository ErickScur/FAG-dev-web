import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Article from "./components/Article";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const postData = {
    title: "Viagem para São Paulo",
    author: "Autor",
    date: "30 de julho de 2025",
    content: [
      "Uma viagem para São Paulo foi incrível! A cidade é cheia de oportunidades!",
      "Tive a oportunidade de visitar a sede da Nestlé",
    ],
  };

  return (
    <div className="app">
      <Header />
      <Navigation />
      <Article
        title={postData.title}
        author={postData.author}
        date={postData.date}
        content={postData.content}
      />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
