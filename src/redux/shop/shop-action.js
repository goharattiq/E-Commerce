import {firestore,convertCollectionsSnapshotToMap} from '../../Firebase/firebase';

export const fetchCollectionStart = ()=>({
    type: 'FETCH_COLLECTIONS_START'
});

export const fetchCollectionSuccess = collectionsMap =>({
    type:'FETCH_COLLECTIONS_SUCCESS',
    payload:collectionsMap
})

export const fetchCollectionFailure = errorMessage =>({
    type:'FETCH_COLLECTIONS_FAILURE',
    payload:errorMessage
})

export const fetchCollectionStartAsync = ()=>{
 return dispatch =>{
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionStart())
    collectionRef.get().then(snapshot=>{
       const collectionMap = convertCollectionsSnapshotToMap(snapshot);
       dispatch(fetchCollectionSuccess(collectionMap));
    }).catch(error=>dispatch(fetchCollectionFailure(error.message)))
 }
}


