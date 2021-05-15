import * as React from 'react';
import {View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { SaleItem } from './Components/SaleItem';

export default class Discounts extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
        activeIndex:0,
        carouselItems: [
        {
            title:"re: Store",
            text: "Electronics",
            Percent:15,
            img:require('./Components/img/reStore.jpg')
        },
        {
            title:"McDonald’s",
            text: "Food",
            Percent:20,
            img:require('./Components/img/makdonalds.jpg')
        }
    ]
    }
    }

    _renderItem({item,index}){
        return (
            <SaleItem item={item}></SaleItem>

        )
    }

    render() {
        return (
            <View style={{ flexDirection:'row', justifyContent: 'center' }}>
                <Carousel
                layout={"default"}
                ref={ref => this.carousel = ref}
                data={this.state.carouselItems}
                sliderWidth={360}
                itemWidth={317}
                activeSlideAlignment={'start'}
                inactiveSlideOpacity={10}
                inactiveSlideScale={100}
                renderItem={this._renderItem}
                onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
        );
    }
}