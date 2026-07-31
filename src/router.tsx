import { Suspense, lazy, type ComponentType } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/layout";

const Home = lazy(() => import("./pages/Home"));
const AboutOverview = lazy(() => import("./components/AboutOverview"));
const AcademicTeam = lazy(() => import("./components/AcademicTeam"));
const ChairmansMessage = lazy(() => import("./components/ChairmansMessage"));
const PrincipalsMessage = lazy(() => import("./components/PrincipalsMessage"));
const EarlyYears = lazy(() => import("./components/EarlyYears"));
const PrimaryYears = lazy(() => import("./components/PrimaryYears"));
const LowerSecondary = lazy(() => import("./components/LowerSecondary"));
const UpperSecondary = lazy(() => import("./components/UpperSecondary"));
const AdvanceYears = lazy(() => import("./components/AdvanceYears"));
const CampusLife = lazy(() => import("./components/CampusLife"));
const Admissions = lazy(() => import("./components/Admissions"));
const BoardingPage = lazy(() => import("./components/BoardingPage"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Careers = lazy(() => import("./components/Careers"));
const CurriculumPage = lazy(() => import("./components/CurriculumPage"));
const NotFound = lazy(() => import("./components/NotFound"));
const GetInTouch = lazy(() => import("./components/GetinTounch"));
const Blog = lazy(() => import("./components/Blog"));
const ArticlePage = lazy(() => import("./components/ArticlePage"));
const Newsletter = lazy(() => import("./components/Newsletter"));

const RouteLoader = () => (
  <div className="min-h-[50vh] w-full bg-[#FDFCFB]" aria-hidden="true" />
);

const withLayout = (Component: ComponentType) => (
  <Layout>
    <Suspense fallback={<RouteLoader />}>
      <Component />
    </Suspense>
  </Layout>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: withLayout(Home),
  },
  {
    path: "/about-overview",
    element: withLayout(AboutOverview),
  },
  {
    path: "/academic-team",
    element: withLayout(AcademicTeam),
  },
  {
    path: "/chairmans-message",
    element: withLayout(ChairmansMessage),
  },
  {
    path: "/principals-message",
    element: withLayout(PrincipalsMessage),
  },
  {
    path: "/curriculum",
    element: withLayout(CurriculumPage),
  },
  {
    path: "/early-years",
    element: withLayout(EarlyYears),
  },
  {
    path: "/primary",
    element: withLayout(PrimaryYears),
  },
  {
    path: "/lower-secondary",
    element: withLayout(LowerSecondary),
  },
  {
    path: "/upper-secondary",
    element: withLayout(UpperSecondary),
  },
  {
    path: "/advance-as-a-level",
    element: withLayout(AdvanceYears),
  },
  {
    path: "/campus-life",
    element: withLayout(CampusLife),
  },
  {
    path: "/admissions",
    element: withLayout(Admissions),
  },
  {
    path: "/boarding",
    element: withLayout(BoardingPage),
  },
  {
    path: "/careers",
    element: withLayout(Careers),
  },
  {
    path: "/blog",
    element: withLayout(Blog),
  },
  {
    path: "/newsletter",
    element: withLayout(Newsletter),
  },
  {
    path: "/get-in-touch",
    element: withLayout(GetInTouch),
  },
  {
    path: "/contact-us",
    element: withLayout(ContactUs),
  },
  {
    path: "/lets-talk",
    element: withLayout(ContactUs),
  },
  {
    path: "/blog/:id",
    element: withLayout(ArticlePage),
  },
  {
    path: "*",
    element: withLayout(NotFound),
  },
]);
