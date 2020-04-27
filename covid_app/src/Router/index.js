import WelcomePage from "../Components/WelcomePage/WelcomePage";
import News from "../Components/News/News";
import Counts from "../Components/Counts/Counts";
import Pratice_one from "../Components/Pratice/Pratice_one";

export default [
  { path: "/", component: WelcomePage, exact: true },
  { path: "/news", component: News, exact: true },
  { path: "/counts", component: Counts, exact: true },
  { path: "/p", component: Pratice_one, exact: true },
];
