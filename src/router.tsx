import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/Home";
import AboutOverview from "./components/AboutOverview";
import AcademicTeam from "./components/AcademicTeam";
import ChairmansMessage from "./components/ChairmansMessage";
import PrincipalsMessage from "./components/PrincipalsMessage";
import EarlyYears from "./components/EarlyYears";
import PrimaryYears from "./components/PrimaryYears";
import LowerSecondary from "./components/LowerSecondary";
import UpperSecondary from "./components/UpperSecondary";
import AdvanceYears from "./components/AdvanceYears";
import CampusLife from "./components/CampusLife";
import Admissions from "./components/Admissions";
import BoardingPage from "./components/BoardingPage";
import ContactUs from "./components/ContactUs";
import Careers from "./components/Careers";
import CurriculumPage from "./components/CurriculumPage";
import NotFound from "./components/NotFound";
import GetInTouch from "./components/GetinTounch";
import Blog from "./components/Blog";
import ArticlePage from "./components/ArticlePage";
import Newsletter from "./components/Newsletter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/about-overview",
    element: (
      <Layout>
        <AboutOverview />
      </Layout>
    ),
  },
  {
    path: "/academic-team",
    element: (
      <Layout>
        <AcademicTeam />
      </Layout>
    ),
  },
  {
    path: "/chairmans-message",
    element: (
      <Layout>
        <ChairmansMessage />
      </Layout>
    ),
  },
  {
    path: "/principals-message",
    element: (
      <Layout>
        <PrincipalsMessage />
      </Layout>
    ),
  },
  {
    path: "/curriculum",
    element: (
      <Layout>
        <CurriculumPage />
      </Layout>
    ),
  },
  {
    path: "/early-years",
    element: (
      <Layout>
        <EarlyYears />
      </Layout>
    ),
  },
  {
    path: "/primary",
    element: (
      <Layout>
        <PrimaryYears />
      </Layout>
    ),
  },
  {
    path: "/lower-secondary",
    element: (
      <Layout>
        <LowerSecondary />
      </Layout>
    ),
  },
  {
    path: "/upper-secondary",
    element: (
      <Layout>
        <UpperSecondary />
      </Layout>
    ),
  },
  {
    path: "/advance-as-a-level",
    element: (
      <Layout>
        <AdvanceYears />
      </Layout>
    ),
  },
  {
    path: "/campus-life",
    element: (
      <Layout>
        <CampusLife />
      </Layout>
    ),
  },
  {
    path: "/admissions",
    element: (
      <Layout>
        <Admissions />
      </Layout>
    ),
  },
  {
    path: "/boarding",
    element: (
      <Layout>
        <BoardingPage />
      </Layout>
    ),
  },
  {
    path: "/careers",
    element: (
      <Layout>
        <Careers />
      </Layout>
    ),
  },
  {
    path: "/blog",
    element: (
      <Layout>
        <Blog />
      </Layout>
    ),
  },
  {
    path: "/newsletter",
    element: (
      <Layout>
        <Newsletter />
      </Layout>
    ),
  },
  {
    path: "/get-in-touch",
    element: (
      <Layout>
        <GetInTouch />
      </Layout>
    ),
  },
  {
    path: "/contact-us",
    element: (
      <Layout>
        <ContactUs />
      </Layout>
    ),
  },
  {
    path: "/lets-talk",
    element: (
      <Layout>
        <ContactUs />
      </Layout>
    ),
  },
  {
    path: "/blog/:id",
    element: (
      <Layout>
        <ArticlePage />
      </Layout>
    ),
  },
  {
    path: "*",
    element: (
      <Layout>
        <NotFound />
      </Layout>
    ),
  },
]);
