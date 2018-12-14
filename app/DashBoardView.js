import React, { PureComponent } from 'react';
import MainView from './MainView';
import {connect} from 'react-redux';
import {
  LOGIN,
  LOGOUT,
  CHANGE_LANGUAGE,
  STOCK_PLACE,
  DELETE_PLACE,
  REFRESH,
  CHANGE_THEME,
  SET_PAY_TYPE,
  SET_CREDIT_CARD,
  REMOVE_CREDIT_CARD,
  SHOW_AD,
  HIDE_AD
} from "./actions";

class DashBoardView extends PureComponent {
  render() {
    return (
        <MainView 
        // navigation={addNavigationHelpers({
        //   dispatch: this.props.dispatch,
        //   state: this.props.nav,
        //   // addListener,
        // })} 
        screenProps={{...this.props}}
        />
        // {this.props.loading? <Loading message="玩命加載中..."/> : null}
    )
  }
}
const dashboardStateToProps = (state) => {
  return({
  nav: state.nav,
  user: state.auth.username,
  showLogin: state.login.showLogin,
  toPage: state.login.toPage,
  userInfo: state.auth,
  sid: state.auth.sid,
  refresh: state.refresh.refreshParams,
  language: state.language.language,
  place: state.placeSetting.place,
  paytype: state.payType.payType,
  creditCardInfo: state.creditCardInfo.creditCardInfo,
  isAdShow: state.toggleAd.isAdvertisementShow
})}

const dashboardmapDispatchToProps = dispatch => ({
  userLogin: (user) => dispatch({type:LOGIN,...user}),
  userLogout: () => dispatch({type:LOGOUT}),
  toggleLogin: (status) => dispatch({type:'CHANGE_LOGIN_STATUS', showLogin: status}),
  setToPageParams: (toPage) => dispatch({type:'SET_LOGIN_TO_PAGE', toPage}),
  refreshReset: (val) => dispatch({type:REFRESH,refresh:val}),
  changeLanguage: (language) => dispatch({type: CHANGE_LANGUAGE,language}),
  stockPlace: (place) => dispatch({type: STOCK_PLACE,place}),
  deletePlace: () => dispatch({type: DELETE_PLACE}),
  setPayType: (paytype,callback) => dispatch({type: SET_PAY_TYPE,paytype,callback}),
  setCreditCardInfo: (creditCardInfo) => dispatch({type: SET_CREDIT_CARD, creditCardInfo}),
  removeCreditCardInfo: () => dispatch({type: REMOVE_CREDIT_CARD}),
  showAd: () => dispatch({type: SHOW_AD}),
  hideAd: () => dispatch({type: HIDE_AD}),
  dispatch: dispatch
})

export default connect(dashboardStateToProps,dashboardmapDispatchToProps)(DashBoardView)