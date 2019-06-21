import React, { PureComponent } from "react";
import { View, TouchableOpacity, Image, Alert } from "react-native";
import {
  Content,
  Footer,
} from "native-base";
import LinearGradient from "react-native-linear-gradient";
//styles
import CommonStyles from "../styles/common.style";
import ManageCreditCardStyles from "../styles/managecreditcard.style";
//components
import CommonItem from "../components/CommonItem";
import BlankPage from "../components/BlankPage";
import CommonBottomBtn from "../components/CommonBottomBtn";
import Text from "../components/UnScalingText";
import CustomizeContainer from "../components/CustomizeContainer";
//utils
import { em, SET_PAY_TYPE } from "../utils/global_params";
import ToastUtil from "../utils/ToastUtil";
//api
import { getCreditCard, removeCreditCard } from "../api/request";
import CommonHeader from "../components/CommonHeader";

const STATUS_IMAGE = {
  open_eye: require("../asset/openeye.png"),
  close_eye: require("../asset/closeeye.png")
};

export default class ManageCreditCardView extends PureComponent {
  constructor(props) {
    super(props);
    this.i18n = props.i18n;
    this.state = {
      isCardNumberShow: false,
      creditCardInfo: null
    };
  }

  componentDidMount() {
    this._timer = setTimeout(() => {
      this._getCreditCard();
      clearTimeout(this._timer);
    }, 500);
  }

  componentWillUnmount() {
    this._timer && clearTimeout(this._timer);
  }

  //api
  _getCreditCard() {
    this.props.showLoading && this.props.showLoading();
    getCreditCard().then(data => {
      this.props.hideLoading && this.props.hideLoading();
      this.setState({
        creditCardInfo: data
      });
    });
  }

  _generate_text(val) {
    return (
      <Text style={{ fontSize: 16, color: "#333", marginRight: 33 / 2 - 10 }}>
        {val}
      </Text>
    );
  }

  _unbindCard() {
    Alert.alert(
      this.i18n.tips,
      this.i18n.manage_card_tips.alert_cancel,
      [
        {
          text: this.i18n.cancel,
          onPress: () => {
            return null;
          },
          style: "cancel"
        },
        {
          text: this.i18n.confirm,
          onPress: () => {
            this.props.showLoadingModal();
            removeCreditCard().then(
              data => {
                const { callback } = this.props.navigation.state.params;
                callback && callback();
                this.props.navigation.goBack();
              }
            );
          }
        }
      ],
      { cancelable: false }
    );
  }

  _renderContentView(_creditCardInfo) {
    let _list_arr = [
      {
        content: this.i18n.cardType,
        rightIcon: this._generate_text(this.i18n.card)
      },
      {
        content: this.i18n.date,
        rightIcon: this._generate_text(_creditCardInfo.time)
      }
    ];
    return (
      <View>
        <View style={ManageCreditCardStyles.CardImageContainer}>
          <Image
            style={ManageCreditCardStyles.CardImage}
            source={require("../asset/card_bg.png")}
            resizeMode="cover"
          />
          <View style={ManageCreditCardStyles.CardInfo}>
            <Text style={ManageCreditCardStyles.CardType}>
              {this.i18n.card}
            </Text>
            <Text style={ManageCreditCardStyles.CardNumber}>{`**** **** **** ${
              _creditCardInfo.tailNum
            }`}</Text>
          </View>
          {/*<TouchableOpacity onPress={() => this.setState({isCardNumberShow:!this.state.isCardNumberShow})} style={ManageCreditCardStyles.EyeBtn}>
            <Image style={ManageCreditCardStyles.EyeImage} source={this.state.isCardNumberShow?STATUS_IMAGE.open_eye:STATUS_IMAGE.close_eye} resizeMode="contain"/>
          </TouchableOpacity>*/}
        </View>
        {_list_arr.map((v, i) => (
          <CommonItem
            key={i}
            content={v.content}
            rightIcon={v.rightIcon}
            disabled={true}
            contentStyle={{ marginLeft: 33 / 2 - 10 }}
          />
        ))}
        <CommonBottomBtn
          clickFunc={() =>
            this.props.navigation.navigate("Credit", {
              callback: () => {
                const { callback } = this.props.navigation.state.params;
                callback && callback();
                this._getCreditCard();
              }
            })
          }
        >
          {this.i18n.changeCard}
        </CommonBottomBtn>
        <Text style={ManageCreditCardStyles.BottomInfo}>
          {this.i18n.bindCardOnce}
        </Text>
      </View>
    );
  }

  render() {
    let { creditCardInfo } = this.state;
    return (
      <CustomizeContainer.SafeView mode="linear">
        <CommonHeader canBack title={this.i18n.manageCardTitle}/>
        <Content>
          {creditCardInfo == null
            ? null
            : this._renderContentView(creditCardInfo)}
        </Content>
        <Footer style={ManageCreditCardStyles.Footer}>
          <TouchableOpacity
            style={ManageCreditCardStyles.FooterBtn}
            onPress={() => this._unbindCard()}
          >
            <Text style={ManageCreditCardStyles.BottomInfo}>
              {this.i18n.cancelBind}
            </Text>
          </TouchableOpacity>
        </Footer>
      </CustomizeContainer.SafeView>
    );
  }
}
