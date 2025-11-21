import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Form from "../components/Form";
export default function MainPage() {
    return (
        <div className="MainPage">
        <Nav />
        
        <Header />
        <p>Welcome to the Main Page!</p>
        <Form />
        <Footer />
        </div>
    );
}