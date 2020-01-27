import React from 'react';
import './carousel.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import boysOutside from '../../../../../assets/boys-group-outside.jpg';
import girlDiorama from '../../../../../assets/girls-holding-diorama.jpg';
import girlsLine from '../../../../../assets/girls-in-a-line.jpg';
import groupSong from '../../../../../assets/group-singsong.jpg';
import cardGame from '../../../../../assets/kids-playing-card-match-game.jpg';
import prevArrow from '../../../../../assets/prev-arrow.png';
import nextArrow from '../../../../../assets/next-arrow.png';
import gallery from '../../../../../assets/gallery-carousel-placeholder.png';

// Assets

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            src={nextArrow}
            className={className}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            src={prevArrow}
            className={className}
            onClick={onClick}
        />
    );
}


function Carousel() {
    const settings = {
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        centerMode: true,
        className: "center",
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <section className="carousel">
            <div className="wrap">
                <h2>Gallery</h2>
                <Slider {...settings}>
                    <div>
                        <img src={boysOutside} />
                    </div>
                    <div>
                        <img src={girlDiorama} />
                    </div>
                    <div>
                        <img src={girlsLine} />
                    </div>
                    <div>
                        <img src={groupSong} />
                    </div>
                    <div>
                        <img src={cardGame} />
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default Carousel;