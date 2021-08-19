import { NavigationActions } from 'react-navigation';
let _navigator;
function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}
function navigate(routeName, params) {
  getParams({params});
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}
function getParams(params){
  return params;
}

export default {
  navigate,
  setTopLevelNavigator,
};

