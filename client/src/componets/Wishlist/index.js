import React, { useEffect } from 'react';
import { idbPromise } from '../../utils/helpers';
import WishlistItem from '../WishlistItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';


const WishList = () => {
//     const [state, dispatch] = useStoreContext();     
    
//     useEffect(() => {
//       async function getwishlist() {
//         const wishlist = await idbPromise('wishlist', 'get');
//         dispatch({ type: ADD_MULTIPLE_TO_WISHLIST, products: [...wishlist] });
//       }
  
//       if (!state.wishlist.length) {
//         getwishlist();
//       }
//     }, [state.wishlist.length, dispatch]);
     
   
  
     
//     return (
//       <div className="wishlist">        
//         <h2>Wishlist</h2>
//         {state.wishlist.length ? (
//           <div>
//             {state.wishlist.map((item) => (
//               <WishlistItem key={item._id} item={item} />
//             ))}             
//           </div>
//         ) : (
//           <h3>
//             <span role="img" aria-label="shocked">              
//             </span>
//             You haven't added anything to your wishlist!
//           </h3>
//         )}
//       </div>
//     );
  };

export default WishList;