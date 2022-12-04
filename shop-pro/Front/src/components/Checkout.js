import React from 'react'
import Subtotal from './Subtotal';
import "./Checkout.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Checkout_Product from './Checkout_Product';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from "react-router-dom";


function Checkout() {

    const checkout_pro = [
        {
          id: "p1",
          title: "Makeup",
          price: 69.99,
          image: [
            "https://sdcdn.io/mac/il/mac_sku_M6JC17_1x1_1.png?width=1080&height=1080",
            "https://sdcdn.io/mac/il/mac_sku_M6JC17_1x1_0.png?width=1080&height=1080",
          ],
          store: ["Holon mall", "Ramat Aviv"],
          description:
            "Light make-up, with a natural matte finish with an advanced formula, neutralizing unnecessary shine. Suitable for medium to full coverage with durability up to 24 hours. Has a wide shade range, with over 60 comprehensive shades for all skin tones. Pump sold separately.",
        },
        {
          id: "p2",
          title: "High Lighter",
          price: 59.99,
          image: [
            "https://sdcdn.io/mac/il/mac_sku_MT1329_1x1_1.png?width=1080&height=1080",
            "https://sdcdn.io/mac/il/mac_sku_MT1329_1x1_0.png?width=1080&height=1080",
            "https://sdcdn.io/mac/il/mac_sku_MT1329_1x1_3.png?width=1080&height=1080",
          ],
          store: ["Gindi mall", "TLV Mall"],
          description:
            "Shimmer highlighter in the form of baked powder Yoni Itai, with a luxurious texture. To give a metallic and powerful glow.",
        },
        {
          id: "p3",
          title: "Bronzing Powder",
          price: 65.99,
          image: [
            "https://sdcdn.io/mac/il/mac_sku_M51504_1x1_1.png?width=1080&height=1080",
            "https://sdcdn.io/mac/il/mac_sku_M51504_1x1_0.png?width=1080&height=1080",
            "https://sdcdn.io/mac/il/mac_sku_M51504_1x1_3.png?width=1080&height=1080",
            "https://sdcdn.io/mac/il/mac_sku_M51504_1x1_5.png?width=1080&height=1080",
          ],
          store: ["Hazahav Mall", "Ramat Aviv"],
          description:
            "A powder bronzer that gives the skin a radiant and natural tan",
        },
        {
          id: "p4",
          title: "Mascara",
          price: 29.99,
          image: [
            "https://sdcdn.io/mac/us/mac_sku_SN4P01_1x1_0.png?width=1080&height=1080",
            "https://sdcdn.io/mac/us/mac_sku_SN4P01_1x1_2.png?width=1080&height=1080",
            "https://sdcdn.io/mac/us/mac_sku_SN4P01_1x1_1.png?width=1080&height=1080",
            "https://sdcdn.io/mac/il/mac_sku_SLEH01_1x1_5.png?width=1080&height=1080",
          ],
          store: ["Rehovot mall", "Ramat Aviv", "Mamilla Mall"],
          description:
            "An endlessly buildable, clump-resistant mascara that stacks on infinite layers of volume and length",
        },
        {
          id: "p5",
          title: "MATTE LIPSTICK",
          price: 39.99,
          image: [
            "https://sdcdn.io/mac/il/mac_sku_M2LP37_1x1_1.png?width=1080&height=1080",
            "https://sdcdn.io/mac/il/mac_sku_M2LP37_1x1_0.png?width=1080&height=1080",
            "https://sdcdn.io/mac/il/mac_sku_M2LP37_1x1_3.png?width=1080&height=1080",
            "https://sdcdn.io/mac/il/mac_sku_M2LP37_1x1_6.png?width=1080&height=1080",
          ],
          store: ["Hazahav mall", "Ramat Aviv", "Holon Mall"],
          description:
            "A lipstick with a rich and creamy formula. Glides easily on the lips and has a powerful shade, full matte color coverage.",
        },
      ];
  return (
    <div className="checkout">
      <Link to="/" >
        <button className="toHome_btn">
            <ArrowBackIosIcon/> To the home page
          </button>
          </Link>
    
    <div className='checkout__main'>
        
        
        <div className="checkout__products">
            <h2 className="checkout__title">
                Your Shopping Basket
            </h2>
            {checkout_pro.map(item=>
                <Checkout_Product
                    title = {item.title}
                    image = {item.image[0]}
                    price = {item.price}
                    />)}
        </div>

        <div className="checkout__subtotal">
            <Subtotal/>
        </div>
    </div>
  </div>
  )
}

export default Checkout