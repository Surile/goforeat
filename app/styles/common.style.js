import GLOBAL_PARAMS, { em } from "../utils/global_params";
const common = {
  btn: {
    height: em(45),
    width: GLOBAL_PARAMS._winWidth * 0.9,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 50,
    shadowColor: "#FA9285",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    backgroundColor: "#FA9285"
  },
  common_btn_container: {
    marginTop: em(20),
    marginBottom: em(20),
    // justifyContent: "center",
    // alignItems: "center"
  },
  common_row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  common_info_text: {
    color: "#666666",
    fontSize: em(14)
  },
  common_title_text: {
    color: "#111111",
    fontSize: em(18)
  },
  common_important_text: {
    color: "#ff3348",
    fontSize: em(18)
  },
  common_icon_back: {
    fontSize: em(20),
    paddingLeft: em(10),
    paddingRight: em(20)
  },
  //_renderBottomView
  BottomView: {
    width: GLOBAL_PARAMS._winWidth * 0.75,
    height: GLOBAL_PARAMS._winHeight * 0.15,
    position: "absolute",
    bottom: GLOBAL_PARAMS.isIphoneX() ? GLOBAL_PARAMS.iPhoneXBottom : 0
  },
  BottomViewInner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: GLOBAL_PARAMS._winHeight * 0.11
  },
  BottomViewInnerImage: {
    width: GLOBAL_PARAMS.widthAuto(40),
    height: GLOBAL_PARAMS.widthAuto(40),
    marginLeft: GLOBAL_PARAMS.widthAuto(30),
    marginRight: GLOBAL_PARAMS.widthAuto(30)
  },
  //renderDividerView
  DividerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  Divider: {
    width: GLOBAL_PARAMS._winWidth * 0.2,
    marginLeft: em(10),
    marginRight: em(10),
    height: 1,
    backgroundColor: "#EBEBEB"
  },
  DividerText: {
    fontSize: em(16),
    color: "#666666",
    flex: 1,
    textAlign: "center"
  }
};

export default common;
