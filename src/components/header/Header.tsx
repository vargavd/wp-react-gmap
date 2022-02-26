// react imports
import * as React from "react";

// misc imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion, faCheck, faList } from "@fortawesome/free-solid-svg-icons";

// state imports
import { useSelector } from "react-redux";
import { store } from "../../store/store";
import { 
  addTaxonomyAFilter, addTaxonomyBFilter, addTaxonomyCFilter, addTaxonomyDFilter,
  removeTaxonomyAFilter, removeTaxonomyBFilter, removeTaxonomyCFilter, removeTaxonomyDFilter
} from "../../store/actions";

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
  // states
  const selectedTaxonomyATerms = useSelector((state:any) => state.taxonomyAFilters);
  const selectedTaxonomyBTerms = useSelector((state:any) => state.taxonomyBFilters);
  const selectedTaxonomyCTerms = useSelector((state:any) => state.taxonomyCFilters);
  const selectedTaxonomyDTerms = useSelector((state:any) => state.taxonomyDFilters);

  // events
  const getClickHandlerOnTaxonomyA = (term: string) => (e:React.MouseEvent) => {
    if (selectedTaxonomyATerms.indexOf(term) !== -1) {
      store.dispatch(removeTaxonomyAFilter(term));
    } else {
      store.dispatch(addTaxonomyAFilter(term));
    }
    
  };
  const getClickHandlerOnTaxonomyB = (term: string) => (e:React.MouseEvent) => {
    if (selectedTaxonomyBTerms.indexOf(term) !== -1) {
      store.dispatch(removeTaxonomyBFilter(term));
    } else {
      store.dispatch(addTaxonomyBFilter(term));
    }
  };
  const getClickHandlerOnTaxonomyC = (term: string) => (e:React.MouseEvent) => {
    if (selectedTaxonomyCTerms.indexOf(term) !== -1) {
      store.dispatch(removeTaxonomyCFilter(term));
    } else {
      store.dispatch(addTaxonomyCFilter(term));
    }
  };
  const getClickHandlerOnTaxonomyD = (term: string) => (e:React.MouseEvent) => {
    if (selectedTaxonomyDTerms.indexOf(term) !== -1) {
      store.dispatch(removeTaxonomyDFilter(term));
    } else {
      store.dispatch(addTaxonomyDFilter(term));
    }
  };

  // helper funcs
  const renderFilter = (selectedFilters:string[], onClickEvent: (term: string) => (e:React.MouseEvent) => void) => (term:string) => {
    const linkClass = (selectedFilters.indexOf(term) !== -1) ? 'selected' : '';

    return (
      <li key={term} onClick={onClickEvent(term)}>
        <a className={linkClass}>
          <FontAwesomeIcon icon={faCheck} />
          {term}
        </a>
      </li>
    );
  };

  return (
    <header className="top-bar">
      <h1>Locations on Google Maps</h1>

      <div className="top-bar__filters">
        <div className="top-bar__filter noselect">
          <div className="top-bar__filter-title">
            <FontAwesomeIcon icon={faList} />
            <span>Taxonomy A Filter</span>
          </div>
          <ul id="taxonomy-a-filter">
            {taxonomyATerms.map(renderFilter(selectedTaxonomyATerms, getClickHandlerOnTaxonomyA))}
          </ul>
        </div>
  
        <div className="top-bar__filter noselect">
          <div className="top-bar__filter-title">
            <FontAwesomeIcon icon={faList} />
            <span>Taxonomy B Filter</span>
          </div>
          <ul id="taxonomy-b-filter">
            {taxonomyBTerms.map(renderFilter(selectedTaxonomyBTerms, getClickHandlerOnTaxonomyB))}
          </ul>
        </div>
  
        <div className="top-bar__filter noselect">
          <div className="top-bar__filter-title">
            <FontAwesomeIcon icon={faList} />
            <span>Taxonomy E Filter</span>
          </div>
          <ul id="taxonomy-e-filter">
            {taxonomyCTerms.map(renderFilter(selectedTaxonomyCTerms, getClickHandlerOnTaxonomyC))}
          </ul>
        </div>
  
        <div className="top-bar__filter noselect">
          <div className="top-bar__filter-title">
            <FontAwesomeIcon icon={faList} />
            <span>Taxonomy F Filter</span>
          </div>
          <ul id="taxonomy-f-filter">
            {taxonomyDTerms.map(renderFilter(selectedTaxonomyDTerms, getClickHandlerOnTaxonomyD))}
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