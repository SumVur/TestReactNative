import * as React from 'react';
import {View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Card } from './Card';
export default class CardCarousel extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
        activeIndex:0,
        carouselItems: [
        {
            type:'Visa',
            lastFourNumbe:4355,
            BankName:'Tinkoff Black',
            amount:84000.54,
            colors:[
            '#1E1E1E',
            '#575757']
            
        },
        {
            type:'MasterCard',
            lastFourNumbe:4355,
            BankName:'Tinkoff Black',
            amount:12000.54,
            colors:[
            '#6A89FD',
            '#50A2FF']
        }
    ]
    }
    }

    _renderItem({item,index}){
        return (
           <Card card={item}></Card> 
        )
    }

    render() {
        return (
            <View style={{ flexDirection:'row', justifyContent: 'flex-start',display:this.props.display?'flex':'none' }}>
                <Carousel
                layout={"default"}
                ref={ref => this.carousel = ref}
                data={this.state.carouselItems}
                sliderWidth={300}
                itemWidth={240}
                activeSlideAlignment={'start'}
                inactiveSlideScale={100}
                renderItem={this._renderItem}
                onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
        );
    }
}