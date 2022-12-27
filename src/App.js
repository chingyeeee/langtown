// import logo from "./favicon.svg";
import "./scss/App.scss";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import AdoptedStoriesList from "./pages/AdoptedStoriesList";
import AdoptedStories from "./components/story/AdoptedStories";
import AdoptionInformations from "./components/AdoptionInformations";
import Reservation from "./pages/Reservation";
import AdoptionNotices from "./pages/AdoptionNotices";
import Navigation from "./components/Navigation";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import AdoptNotice from "./components/AdoptNotice";
import AdoptNoticeAttitude from "./components/category/AdoptNoticeAttitude.jsx";
import AdoptNoticeWealth from "./components/category/AdoptNoticesWealth";
import AdoptNoticeTime from "./components/category/AdoptNoticeTime";
import AdoptNoticeKnowledge from "./components/category/AdoptNoticeKnowledge";
import AdoptedStoryDetail from "./components/story/AdoptedStoryDetail";
import AdoptionInformationsList from "./pages/AdoptionInformationsList";
import AdoptionProfile from "./components/AdoptionProfile";
import KnowledgeTest from "./pages/KnowledgeTest";
import { AdoptorInvestigation } from "./pages/AdoptorInvestigation";
import ScrollTop from "./helpers/ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollTop>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/adoptionnotices" element={<AdoptionNotices />}>
              <Route index element={<AdoptNotice />} />
              <Route
                path="/adoptionnotices/attitude"
                element={<AdoptNoticeAttitude />}
              />
              <Route
                path="/adoptionnotices/wealth"
                element={<AdoptNoticeWealth />}
              />
              <Route
                path="/adoptionnotices/time"
                element={<AdoptNoticeTime />}
              />
              <Route
                path="/adoptionnotices/knowledge"
                element={<AdoptNoticeKnowledge />}
              />
            </Route>
            <Route path="/adoptedstories" element={<AdoptedStoriesList />}>
              <Route index element={<AdoptedStories />} />
              <Route path=":catName" element={<AdoptedStoryDetail />} />
            </Route>
            <Route
              path="/adoptioninformations"
              element={<AdoptionInformationsList />}
            >
              <Route index element={<AdoptionInformations />} />
              <Route path=":Id" element={<AdoptionProfile />} />
            </Route>
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/knowledgetest" element={<KnowledgeTest />} />
            <Route
              path="/adoptorInvestigation"
              element={<AdoptorInvestigation />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ScrollTop>
      <Footer />
    </div>
  );
}

export default App;
