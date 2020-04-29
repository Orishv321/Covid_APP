import WelcomePage from "../Components/WelcomePage/WelcomePage";
import Counts from "../Components/Counts/Counts";
import Pratice_one from "../Components/Pratice/Pratice_one";
import SearchPage from "../Components/Search/SearchPage";
import HelpNumbers from "../Components/HeplNo/HelpNumbers";

export default [
  { path: "/", component: WelcomePage, exact: true },
  { path: "/counts", component: Counts, exact: true },
  { path: "/p", component: Pratice_one, exact: true },
  { path: "/search", component: SearchPage, exact: true },
  { path: "/help", component: HelpNumbers, exact: true },
];
