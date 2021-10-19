import React from "react";
import './productDetails.scss'
import { useSelector } from "react-redux";

import './productIntro.scss'

import Desc from './Intro/Desc'
import Material from './Intro/Material'
import Color from './Intro/Color'

export default function ProductIntro() {

	const product = useSelector((state) => state.shop.singleProduct);

    const { intro, options } = product;
    
    return (
        intro ?
            <div className="product-intro">
                
                {
                    intro.desc && <Desc text={intro.desc} />
                }

                {
                    intro.material && <Material items={intro.material} />
                }

                {
                    intro.color && <Color text={intro.color} colors={options.color} />
                }

            </div>
        :
            <>
            </>
    )
}
