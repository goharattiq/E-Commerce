import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectShopData=createSelector(
    [selectShop],
    shop=>shop.collections
);

export const selectCollectonsForPreview = createSelector(
    [selectShopData],
    collections =>
    collections ? Object.keys(collections).map(keys=>collections[keys]) : []
)

export const selectCollecton = collectionUrlParam => createSelector(
    [selectShopData],
    collections=> (collections ? collections[collectionUrlParam] : null)
)

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
);