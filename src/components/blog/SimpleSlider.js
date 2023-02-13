import React from 'react';
import Slider from "react-slick";

function SimpleSlider(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true,
        accessibility: true,

    };
    return (
        <Slider {...settings}>
            <div>
                <img src="https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt=""/>
                <h3>1</h3>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1676128700626-bcd51a362e67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1812&q=80" alt=""/>
                <h3>2</h3>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt=""/>
                <h3>3</h3>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1676128700626-bcd51a362e67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1812&q=80" alt=""/>
                <h3>4</h3>
            </div>

        </Slider>
    );
}

export default SimpleSlider;