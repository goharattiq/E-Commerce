import {createStructuredSelector} from 'reselect';
import { connect } from 'react-redux';
import {compose} from 'redux';

import Spinner from '../Spinner/Spinner';
import Collection from './Collection';
import {selectIsCollectionLoaded} from '../redux/shop/shop-selector';


const mapStateToProps = createStructuredSelector({
    isLoading : state => !selectIsCollectionLoaded(state)
})

const CollecionContaier = compose(connect(mapStateToProps),Spinner)(Collection);

export default CollecionContaier;