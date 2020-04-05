import React, { Component, Fragment } from 'react';
import { CardsContainer } from '../../containers/CardsContainer';
import { NavbarContainer } from '../../containers/NavbarContainer';
import { NoResults } from '../../components/NoResults/';
import { fetchImages } from '../../api';
import { debounce } from 'throttle-debounce';

const clientId = process.env.REACT_APP_UNSPLASH_API_ACCESS_KEY;
const getFeaturedUrl = 'https://api.unsplash.com/collections/featured?per_page=15&page=1';
const getByTermUrl = 'https://api.unsplash.com/search/photos?page=1&per_page=15';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.gridRef = React.createRef();
    this.fetchImages = debounce(360, this.fetchImagesDebounced);
    this.state = {
      cards: [],
      term: '',
      reqTook: '',
      reqFrom: '',
      isLoaded: false,
      isFeatured: true,
      isSearchByTerm: false,
    };
  }
  componentDidMount() {
    const url = this.addCredens(getFeaturedUrl);
    const reqStart = Date.now();
    fetchImages(url).then(res => this.onSuccess(res, this.state.term, reqStart, false));
  }
  addCredens(url) {
    return `${url}&client_id=${clientId}`;
  }
  addQuery(url, term) {
    return `${url}&query=${term}`;
  }
  onInputChange = e => {
    const reqStart = Date.now();
    const term = e.currentTarget && e.currentTarget.value;
    let url;
    const isValid = this.isValidTerm(term);
    if (isValid) {
      let cards = this.props.getItem(term);
      if (cards) {
        cards = JSON.parse(cards);
        const reqEnd = Date.now()
        const durationInSec = parseFloat(`${((reqEnd - reqStart) / 1000).toFixed(2)}`);
        const phrase = durationInSec === 1.00 ? ' second' : ' seconds';
        const reqTook = durationInSec + phrase;
        this.setState({ cards, term, reqTook, reqFrom: 'cache', isSearchByTerm: true, isFeatured: false })
      } else {
        url = this.addCredens(getByTermUrl);
        url = this.addQuery(url, term);
        this.fetchImages(url, term, reqStart, true);
      }
    } else {
      const url = this.addCredens(getFeaturedUrl);
      const reqStart = Date.now();
      fetchImages(url).then(res => this.onSuccess(res, term, reqStart, false));
    }
  }
  isValidTerm(term) {
    return term && term.length && term !== this.state.term;
  }
  fetchImagesDebounced = (url, term, reqStart, isSearchByTerm) => {
    fetchImages(url).then(res => this.onSuccess(res, term, reqStart, isSearchByTerm));
  }
  transformByTerm = obj => {
    const { id, user, likes, urls: {regular}, tags, links: {html, download}} = obj;
    const { name, instagram_username, location, portfolio_url, profile_image: { large } } = user;
    const image = regular;
    const transformed = {id, tags, name, image, instagram_username, location, portfolio_url, large, likes, html, download};
    return transformed;
  }
  transformFeatured = obj => {
    const { cover_photo: {likes, urls: {regular}, links: {html, download}}, title, user, id } = obj;
    const { name, instagram_username, location, portfolio_url, profile_image: { large } } = user;
    const image = regular;
    const transformed = {id, name, image, instagram_username, location, portfolio_url, large, likes, title, html, download};
    return transformed;
  }
  onSuccess = (res, term, reqStart, isSearchByTerm) => {
    let cards = [];
    if (!isSearchByTerm) {
      cards = res.data.map(this.transformFeatured);
    } else {
      cards = res.data.results.map(this.transformByTerm);
    }
    this.props.setItem(term, JSON.stringify(cards));
    const reqEnd = Date.now()
    const durationInSec = parseFloat(`${((reqEnd - reqStart) / 1000).toFixed(2)}`);
    const phrase = durationInSec === 1.00 ? ' second' : ' seconds';
    const reqTook = durationInSec + phrase;
    this.setState({
      cards,
      term,
      reqTook,
      isSearchByTerm,
      reqFrom: 'api',
      isLoaded: true,
      isFeatured: !isSearchByTerm,
    });
  }
  render() {
    return (
      <Fragment>
        <NavbarContainer
          {...this.state}
          onInputChange={this.onInputChange}
        />
        {this.state.cards.length > 0 &&
            <CardsContainer
              {...this.state}
              ref={this.gridRef}
              fetchImages={this.fetchImages}
            />
        }
        {this.state.isLoaded && !this.state.cards.length && <NoResults />}
      </Fragment>
    )
  }
}

export { Dashboard };
