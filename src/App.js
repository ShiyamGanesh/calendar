import React, { Fragment } from "react";
import "./App.css";
import Calendar from "./components/calendar";
import Month from "./components/month";
function App() {
  return (
    <Fragment>
      <section className="hero is-small is-info">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-centered">
              Calendar
              <div className="container">
                <button class="button is-primary is-light">
                  <i class="fas fa-calendar"></i>
                </button>
                <button class="button is-primary is-light">
                  <i class="fas fa-calendar-alt"></i>
                </button>
                <button class="button is-primary is-light">
                  <i class="fas fa-calendar-day"></i>
                </button>
              </div>
            </h1>
          </div>
        </div>
      </section>
      <div className="Container has-text-left">
        <Calendar />
        <div className="has-text-centered">
          <Month />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
