// react imports
import * as React from "react";

// misc imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

// styles
import "./Header.scss";

// data
import { locationInfos } from "../../data";


// #region [colored] process data
const taxonomyATerms: string[] = [];
const taxonomyBTerms: string[] = [];
const taxonomyCTerms: string[] = [];
const taxonomyDTerms: string[] = [];
locationInfos.forEach(locationInfo => {
  locationInfo.taxonomyATerms.forEach(term => {
    if (taxonomyATerms.indexOf(term) === -1) {
      taxonomyATerms.push(term)
    }
  });

  locationInfo.taxonomyBTerms.forEach(term => {
    if (taxonomyBTerms.indexOf(term) === -1) {
      taxonomyBTerms.push(term)
    }
  });

  locationInfo.taxonomyCTerms.forEach(term => {
    if (taxonomyCTerms.indexOf(term) === -1) {
      taxonomyCTerms.push(term)
    }
  });

  locationInfo.taxonomyDTerms.forEach(term => {
    if (taxonomyDTerms.indexOf(term) === -1) {
      taxonomyDTerms.push(term)
    }
  });
});
// #endregion


const Header: React.FC = () => {
  console.log(taxonomyATerms, taxonomyBTerms, taxonomyCTerms, taxonomyDTerms);

  return (
    <header className="top-bar">
      <h1>Locations on Google Maps</h1>

      <div className="top-bar__filters">
        <div className="top-bar__filter noselect">
          <div className="top-bar__filter-title">
            <i className="fas fa-list"></i>
            <span>Taxonomy A Filter</span>
          </div>
          <ul id="taxonomy-a-filter">
            {taxonomyATerms.map((term:string) => (
              <li key={term}>
                <a>
                  {term}
                </a>
              </li>
            ))}
          </ul>
        </div>
  
        <div className="top-bar__filter noselect">
          <div className="top-bar__filter-title">
            <i className="fas fa-list"></i>
            <span>Taxonomy B Filter</span>
          </div>
          <ul id="taxonomy-b-filter">
            {taxonomyBTerms.map((term:string) => (
              <li key={term}>
                <a>
                  {term}
                </a>
              </li>
            ))}
          </ul>
        </div>
  
        <div className="top-bar__filter noselect">
          <div className="top-bar__filter-title">
            <i className="fas fa-list"></i>
            <span>Taxonomy E Filter</span>
          </div>
          <ul id="taxonomy-e-filter">
            {taxonomyCTerms.map((term:string) => (
              <li key={term}>
                <a>
                  {term}
                </a>
              </li>
            ))}
          </ul>
        </div>
  
        <div className="top-bar__filter noselect">
          <div className="top-bar__filter-title">
            <i className="fas fa-list"></i>
            <span>Taxonomy F Filter</span>
          </div>
          <ul id="taxonomy-f-filter">
            {taxonomyDTerms.map((term:string) => (
              <li key={term}>
                <a>
                  {term}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="top-bar__links">
        <a className="top-bar_link__description">
          <FontAwesomeIcon icon={faQuestion} />
        </a>
      </div>
    </header>
  );
};

export default Header;