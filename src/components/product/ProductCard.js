import React, { useContext } from 'react';
import { IoMdStar } from 'react-icons/io';
import { Link } from 'react-router-dom';
// import { displayMoney } from '../../helpers/utils';
import cartContext from '../../contexts/cart/cartContext';
import useActive from '../../hooks/useActive';


const ProductCard = (props) => {

    const { id, images, title, info, finalPrice, originalPrice, rateCount} = props;

    const { addItem } = useContext(cartContext);
    const { active, handleActive, activeClass } = useActive(false);


    // handling Add-to-cart
    const handleAddItem = () => {
        const item = { ...props };
        addItem(item);

        handleActive(id);

        setTimeout(() => {
            handleActive(false);
        }, 3000);
    };

    // const newPrice = displayMoney(finalPrice);
    // const oldPrice = displayMoney(originalPrice);


    return (
        <>
            <div className="card products_card">
                <figure className="products_img">
                    <Link to='#'>
                        <img src={images[0]} alt="product-img" />
                    </Link>
                </figure>
                <div className="products_details">
                    <span className="rating_star">
                        {
                            [...Array(rateCount)].map((_, i) => <IoMdStar key={i} />)
                        }
                    </span>
                    <h3 className="products_title">
                        <Link to='#'>{title}</Link>
                    </h3>
                    <h5 className="products_info">{info}</h5>
                    <div className="separator"></div>
                    <h5 className="products_price">
                      Pleas Your Product Purchase
                    </h5>
                    <button
                        type="button"
                        className={`btn products_btn ${activeClass(id)}`}
                        onClick={handleAddItem}
                    >
                        {active ? 'Added' : 'Purchase'}
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProductCard;