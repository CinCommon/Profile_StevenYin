import HomeContainer from "./components/HomeContainer/HomeContainer";
import MainContent from "./components/MainContent/MainContent";
import Sidebar from "./components/Sidebar/Sidebar";

import "./styles/abstracts/app.sass";
import {AppContextProvider} from "./context/AppContext";
import i18n from "./i18n/i18n";
import { I18nextProvider } from "react-i18next";

function App() {
    return (
        <I18nextProvider i18n={i18n}>
            <AppContextProvider>
                <div id="portfolio">
                    <HomeContainer/>
                    <Sidebar/>
                    <MainContent/>
                </div>
            </AppContextProvider>
        </I18nextProvider>
    );
}

export default App;
