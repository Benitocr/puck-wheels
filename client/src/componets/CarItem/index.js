import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_WISHLIST } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function CarItem(item) {
//   const [state, dispatch] = useStoreContext();

//   const {
//     image,
//     name,
//     _id,
//     price,
//     quantity
//   } = item;

//   const { wishlist } = state

//   const addTowishlist = () => {
//     const itemInWishlist = wishlist.find((wishlistItem) => wishlistItem._id === _id)
//     if (itemInWishlist) {
//       dispatch({
//         type: UPDATE_wishlist_QUANTITY,
//         _id: _id,
//         purchaseQuantity: parseInt(itemInWishlist.purchaseQuantity) + 1
//       });
//       idbPromise('wishlist', 'put', {
//         ...itemInWishlist,
//         purchaseQuantity: parseInt(itemInWishlist.purchaseQuantity) + 1
//       });
//     } else {
//       dispatch({
//         type: ADD_TO_WISHLIST,
//         car: { ...item, purchaseQuantity: 1 }
//       });
//       idbPromise('wishlist', 'put', { ...item, purchaseQuantity: 1 });
//     }
//   }

//   return (
//     <div className="card px-1 py-1">
//       <Link to={`/cars/${_id}`}>
//         <img
//           alt={name}
//           src={`/images/${image}`}
//         />
//         <p>{name}</p>
//       </Link>
//       <div>
//         <div>{quantity} {pluralize("item", quantity)} in stock</div>
//         <span>${price}</span>
//       </div>
//       <button onClick={addTowishlist}>Add to wishlist</button>
//     </div>
//   );
};

export default CarItem;
