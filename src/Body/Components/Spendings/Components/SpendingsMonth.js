import * as React from 'react';
import {View,Text,TouchableOpacity,StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Icon } from 'react-native-gradient-icon';

export default class SpendingsMonth extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
        activeIndex:0,
        carouselItems:this.props.mounth
    }
    }

    _renderItem({item,index}){
        return (
                <Text style={{alignSelf:'center',fontSize:16}} >{item}</Text>
        )
    }

    render() {
        return (
            <View style={styles.Month}>
                <TouchableOpacity onPress={() =>this.carousel.snapToPrev()}>
                    <Icon
                        name='navigate-before'
                        type='material'
                        color='#8C93A1'
                    />
                </TouchableOpacity>
                <Carousel
                layout={"default"}
                ref={ref => this.carousel = ref}
                data={this.state.carouselItems}
                sliderWidth={280}
                itemWidth={260}
                activeSlideAlignment={'center'}
                renderItem={this._renderItem}
                onSnapToItem = { index => { this.props.setCount(index);this.setState({activeIndex:index})}} />
                <TouchableOpacity onPress={() => this.carousel.snapToNext ()}>
                    <Icon
                        name='navigate-next'
                        type='material'
                        color='#8C93A1'
                    />
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    Month:{
        height:51,
        width:343,
        flexDirection:'row', 
        justifyContent: 'center', 
        alignItems:'center',
        padding:10,
        backgroundColor:'rgba(248, 248, 248, 1)' ,
        borderBottomLeftRadius:8,
        borderBottomRightRadius:8      
    }
});