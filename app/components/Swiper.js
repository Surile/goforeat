import React from 'react'
import PropTypes from 'prop-types'
import {View,StyleSheet} from 'react-native'
import Image from "react-native-image-progress";
import Swiper from 'react-native-swiper'
import GLOBAL_PARAMS from '../utils/global_params';

const styles = StyleSheet.create({
  wrapper: {
    width: GLOBAL_PARAMS._winWidth,
    height:GLOBAL_PARAMS.heightAuto(250),
  },
  img: {
    width:GLOBAL_PARAMS._winWidth,
    height:250,
    // borderRadius:15,
    // borderWidth: 1,
    // borderColor:Colors.main_gray
  },
  activeDot:{}
})

const GoodsSwiper = (props) => {
  return (<Swiper style={styles.wrapper}
    // autoplay
    loop
    paginationStyle={{position:'absolute',bottom:15,marginLeft:250}}
    dotStyle={{width: 10, height: 10, borderRadius: 5, marginLeft: 10,opacity:0.5}}
    dotColor="#fafafa" activeDotColor="white" activeDotStyle={{width: 25, height: 10, borderRadius: 5, marginLeft: 10,opacity:0.8}}
    showsPagination>
    {props.adDetail.map((item,idx) => (
      <View key={idx}>
        <Image style={styles.img} source={{uri: item}}/>
      </View>
    ))}
    {
      // props.adDetail.length === 0 ? <Text>loading</Text> : null
    }
  </Swiper>
)}

// GoodsSwiper.defaultProps({
//   imgArr:[]
// })

GoodsSwiper.propTypes = {
  adDetail: PropTypes.array,
}

GoodsSwiper.defaultProps = {
  adDetail: []
}

export default GoodsSwiper
