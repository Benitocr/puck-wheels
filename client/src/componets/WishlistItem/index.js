import React from "react";
import { REMOVE_FROM_WISHLIST} from "../../utils/actions";

import { useStoreContext } from "../../utils/GlobalState";
import { idbPromise } from "../../utils/helpers";


const WishlistItem = ({ item }) => {

    // const [, dispatch] = useStoreContext();
  
    // const removeFromWishlist = item => {
    //   dispatch({
    //     type: REMOVE_FROM_WISHLIST,
    //     _id: item._id
    //   });
    //   idbPromise('wishlist', 'delete', { ...item });
  
    // };
  
    // const onChange = (e) => {
    //   const value = e.target.value;
    //   if (value === '0') {
    //     dispatch({
    //       type: REMOVE_FROM_WISHLIST,
    //       _id: item._id
    //     });
    //     idbPromise('wishlist', 'delete', { ...item });
  
    //   } else {
    //     dispatch({
    //       type: UPDATE_wishlist_QUANTITY,
    //       _id: item._id,
    //       purchaseQuantity: parseInt(value)
    //     });
    //     idbPromise('wishlist', 'put', { ...item, purchaseQuantity: parseInt(value) });
  
    //   }
    // }
  
    // return (
    //   <div className="flex-row">
    //     <div>
    //       <img
    //         src={`/images/${item.image}`}
    //         alt={`"${item.name}"`}
    //       />
    //     </div>
    //     <div>
    //       <div>{item.name}, ${item.price}</div>
    //       <div>           
    //         <span
    //           role="img"
    //           aria-label="trash"
    //           onClick={() => removeFromWishlist(item)}
    //         >
    //           🗑️
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    // );
  };
  
  export default WishlistItem;