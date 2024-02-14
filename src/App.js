import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import { Suspense } from "react";
import appRoutes from "./routes/AppRoutes";
import NoMatch from "./components/NoMatch";

function App() {
  const onLoading = () => "Loading...";
  return (
    <Suspense fallback={onLoading}>
      <Switch>
        {appRoutes.map((route) => {
          const { path, exact, component, name } = route;

          return (
            <Route key={name} {...route} exact={exact} path={path} component={component} />
          );
        })}
        <Route path="*">
          <NoMatch />
        </Route>

        {/* <Route path="/how-it-works">
          <HowItWorks />
        </Route>
        <Route exact path="/careers">
          <CareersPage />
        </Route>
        <Route exact path="/blogs">
          <BlogsPage />
        </Route>
        <Route exact path="/blogs/:fileName">
          <BlogTemplate />
        </Route>

        <Route path="/careers/job-description">
          <JobDescriptionPage />
        </Route>
        <Route exact path="/contact">
          <ContactUsPage />
        </Route>

        <Route exact path="/">
          <Home />
        </Route> */}
      </Switch>
    </Suspense>
  );
}

export default withRouter(App);
