import {createStructuredSelector} from 'reselect';
import { connect } from 'react-redux';
import {compose} from 'redux';

import Spinner from '../Spinner/Spinner';
import CollecionOverview from './CollectionOverview';
import {selectIsCollectionFetching} from '../redux/shop/shop-selector';


const mapStateToProps = createStructuredSelector({
    isLoading : selectIsCollectionFetching
  })
const CollecionOverviewContaier = compose(connect(mapStateToProps),Spinner)(CollecionOverview);

export default CollecionOverviewContaier;