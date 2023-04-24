import Header from "./Header";
import SearchSection from "./SearchSection";
import Footer from "./Footer";
import "./GoogleApp.css"

const GoogleApp = () => {
    return (
        <>
            <div className="googleapp">
                <Header />
                <SearchSection />
                <Footer />                
            </div>

        </>
    )
}

export default GoogleApp;