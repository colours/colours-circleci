/**
 * Design System
 * The kitchen sink of all design components
 */
import "@babel/polyfill";
import * as values from 'object.values';
import * as breadcrumb from 'atoms/breadcrumb';
import * as button from 'atoms/button';
import * as checkbox from 'atoms/checkbox';
import * as dropdown from 'atoms/dropdown';
import * as picture from 'atoms/picture';
import * as link from 'atoms/link';
import * as grid from 'atoms/grid';
import * as image from 'atoms/image';
import * as icon from 'atoms/icon';
import * as iframe from 'atoms/iframe';
import * as listGroup from 'atoms/list-group';
import * as nav from 'molecules/nav';
import * as card from 'molecules/card';
import * as highlightedItem from 'molecules/highlighted-item';
import * as newsAgendaItem from 'molecules/news-agenda-item';
import * as newsAgendaCompactItem from 'molecules/news-agenda-compact-item';
import * as newsAgendaList from 'molecules/news-agenda-list';
import * as newsAgendaCompactList from 'molecules/news-agenda-compact-list';
import * as pagination from 'molecules/pagination';
import * as linkList from 'molecules/link-list';
import * as textColumn from 'molecules/text-column';
import * as searchForm from 'molecules/search-form';
import * as accordion from 'organisms/accordion';
import * as article from 'organisms/article';
import * as textSidebar from 'organisms/text-sidebar';
import * as textWithMedia from 'organisms/text-with-media';
import * as actionButton from 'organisms/action-button';
import * as linkGrid from 'organisms/link-grid';
import * as tabContent from 'organisms/tab-content';
import * as header from 'organisms/header';
import * as headerSlider from 'organisms/header-slider';
import * as homepageHeader from 'organisms/homepage-header';
import * as slider from 'organisms/slider';
import * as threeColumnGrid from 'organisms/three-column-grid';
import * as twoColumnGrid from 'organisms/two-column-grid';
import * as text from 'organisms/text';
import * as programOverviewIntro from 'organisms/program-overview-intro';
import * as programOverview from 'organisms/program-overview';
import * as newsAgendaOverview from 'organisms/news-agenda-overview';
import * as searchResult from 'organisms/search-result'
import * as footer from 'organisms/footer';
import * as navbar from 'organisms/navbar';
import * as basicPage from 'templates/basic-page';
import * as newsPage from 'templates/news-detail';
import * as newsAgendaOverviewPage from 'templates/news-agenda-overview';
import * as userPage from 'templates/user-page';
import * as homepageTemplate from 'templates/homepage';
import * as trainingDetailPage from 'templates/training-detail';
import * as trainingOverviewPage from 'templates/training-overview';
import * as searchResulPage from 'templates/search-result';
import * as homePage from 'pages/homepage';

const components = {
    breadcrumb,
    button,
    checkbox,
    dropdown,
    picture,
    grid,
    link,
    image,
    icon,
    iframe,
    listGroup,
    nav,
    card,
    highlightedItem,
    newsAgendaItem,
    newsAgendaCompactItem,
    newsAgendaList,
    newsAgendaCompactList,
    pagination,
    linkList,
    textColumn,
    searchForm,
    accordion,
    article,
    actionButton,
    linkGrid,
    tabContent,
    textSidebar,
    textWithMedia,
    header,
    headerSlider,
    homepageHeader,
    slider,
    threeColumnGrid,
    twoColumnGrid,
    text,
    programOverviewIntro,
    programOverview,
    newsAgendaOverview,
    searchResult,
    footer,
    navbar,
    basicPage,
    newsPage,
    userPage,
    newsAgendaOverviewPage,
    homepageTemplate,
    trainingDetailPage,
    trainingOverviewPage,
    searchResulPage,
    homePage,
};

// Fix Object.Values for IE11
if (!Object.values) {
    values.shim();
}

/**
 * Default export of object containing all components
 */
export default components;

/**
 * All component names as an array
 * @returns {Array} List of components name strings
 */
export const componentNames = () => Object.values(components).map(({name}) => name);

/**
 * Enable all components against a piece of DOM with some settings
 */
export const enableAllComponents = ($dom, settings) =>
    Object.values(components).forEach(({enable}) => enable($dom, settings));
