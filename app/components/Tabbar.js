// 自定义tabbar
import React, { Component } from "react";
import { Animated, Platform } from "react-native";
import { TabBarBottom } from "react-navigation";
//utils
import GLOBAL_PARAMS from "../utils/global_params";

const TAB_BAR_OFFSET = GLOBAL_PARAMS.isIphoneX() ? -83 : -60;
export default class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: new Animated.Value(0)
    };
  }

  componentWillReceiveProps(props) {
    const oldState = this.props.navigation.state;
    const oldRoute = oldState.routes[oldState.index];
    const oldParams = oldRoute.params;
    const wasVisible = !oldParams || oldParams.visible;

    const newState = props.navigation.state;
    const newRoute = newState.routes[newState.index];
    const newParams = newRoute.params;
    const isVisible = !newParams || newParams.visible;

    if (wasVisible && !isVisible) {
      Animated.timing(this.state.offset, {
        toValue: TAB_BAR_OFFSET,
        duration: 200
      }).start();
    } else if (isVisible && !wasVisible) {
      Animated.timing(this.state.offset, { toValue: 0, duration: 200 }).start();
    }
  }

  render() {
    return (
      <TabBarBottom
        {...this.props}
        activeTintColor="#FF3348"
        style={[styles.container, { bottom: this.state.offset }]}
      />
    );
  }
}

const styles = {
  container: {
    // overflow: 'hidden',
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    elevation: 8,
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
    shadowColor: "#C1C1C1",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: -5 },
    // elevation: -2,
    paddingBottom: Platform.OS == "ios" ? 3 : 0
  }
};
