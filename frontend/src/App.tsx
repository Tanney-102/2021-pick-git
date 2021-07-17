import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { PAGE_URL } from "./constants/urls";
import LoginPage from "./pages/LoginPage/LoginPage";
import NavigationHeader from "./components/@layout/NavigationHeader/NavigationHeader";
import HomeFeedPage from "./pages/HomeFeedPage/HomeFeedPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { Page } from "./components/@styled/layout";
import AuthLoginProcessingPage from "./pages/AuthLoginProcessingPage/AuthLoginProcessingPage";
import PostAddStepHeader from "./components/PostAddStepHeader/PostAddStepHeader";
import AddPostPage from "./pages/AddPostPage/AddPostPage";
import { PostAddDataContextProvider } from "./contexts/PostAddDataContext";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={[PAGE_URL.HOME, PAGE_URL.PROFILE, PAGE_URL.MY_PROFILE]}>
          <NavigationHeader />
        </Route>
        <Route path={PAGE_URL.ADD_POST}>
          <PostAddStepHeader />
        </Route>
      </Switch>
      <Page>
        <Switch>
          <Route exact path={[PAGE_URL.HOME, PAGE_URL.HOME_FEED]}>
            <HomeFeedPage />
          </Route>
          <Route exact path={PAGE_URL.USER_FEED("swon3210")}>
            <HomeFeedPage />
          </Route>
          <Route exact path={PAGE_URL.TAG_FEED("Javascript")}>
            <HomeFeedPage />
          </Route>
          <Route exact path={PAGE_URL.LOGIN}>
            <LoginPage />
          </Route>
          <Route exact path={PAGE_URL.AUTH_PROCESSING}>
            <AuthLoginProcessingPage />
          </Route>
          <Route path={PAGE_URL.MY_PROFILE}>
            <ProfilePage isMyProfile={true} />
          </Route>
          <Route path={PAGE_URL.PROFILE}>
            <ProfilePage isMyProfile={false} />
          </Route>
          <Route path={PAGE_URL.ADD_POST}>
            <PostAddDataContextProvider>
              <AddPostPage />
            </PostAddDataContextProvider>
          </Route>
          <Redirect to="/" />
        </Switch>
      </Page>
    </BrowserRouter>
  );
};
export default App;
