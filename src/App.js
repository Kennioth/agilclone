import "./App.css";
import { LoopCircleLoading   } from "react-loadingg";
import ReCAPTCHA from "react-google-recaptcha";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Appbar from "./component/Appbar/Appbar";
import Homepage from "./component/Pages/Homepage/Homepage";
import About from "./component/Pages/About/About";
import Insight from "./component/Pages/Newsroom/Insight";
import Event from "./component/Pages/Newsroom/Event";
import News from "./component/Pages/Newsroom/News";
import News2 from "./component/Pages/Newsroom/News2";
import Footer from "./component/Footer/Footer";
import PIDS from "./component/Pages/Products/PIDS";
import BIDS from "./component/Pages/Products/BIDS";
import DASS from "./component/Pages/Products/DASS";
import IPAMS from "./component/Pages/Products/IPAMS";
import Contact from "./component/Pages/Contact/Contact";
import Resources from "./component/Pages/Resources/Resources";
import Brochures from "./component/Pages/Resources/Brochures";
import Errorpage from "./component/Pages/Error/Errorpage";
import Scroll from './Scroll'
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  Background: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function App() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <div className={classes.Background}>
      {loading === false ? (
        <>
          <Appbar />
          <Scroll/>
          <CssBaseline />
          <Router>
            <Switch>
              <Route path='/' exact component={Homepage} />
              <Route path='/about' exact component={About} />
              <Route path='/pids' exact component={PIDS} />
              <Route path='/bids' exact component={BIDS} />
              <Route path='/dass' exact component={DASS} />
              <Route path='/ipams' exact component={IPAMS} />
              <Route path='/insights' exact component={Insight} />
              <Route path='/events' exact component={Event} />
              <Route path='/news' exact component={News} />
              <Route path='/news2' exact component={News2} />
              <Route path='/contact' exact component={Contact} />
              <Route path='/resources' exact component={Resources} />
              <Route path='/brochures' exact component={Brochures} />
              <Route component={Errorpage} />
            </Switch>
          </Router>
          <Footer />
          <ReCAPTCHA
            sitekey='6Lf2LkUaAAAAAJEY9vji5IE3J5v9yF9gQg506g4o'
            stoken = '6Lf2LkUaAAAAAGpA0vJInq-Zn1V5aFZL7jxW1CDK'
            size='invisible'
          />
        </>
      ) : (
        <>
          <LoopCircleLoading   color='#404040' />
        </>
      )}
    </div>
  );
}
