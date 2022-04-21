import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import { REMOVE_WISH_LIST } from "../utils/mutations";
import {useState} from "react";

const WishList = () => {
  const { data } = useQuery(QUERY_USER);
  const wishListData = data?.user.wishList || [];
console.log(data);
  const [removeWishList] = useMutation(REMOVE_WISH_LIST);
  const [refresh, setRefresh] = useState(false);
  async function removeFromWishList(id) {
    console.log(id);
    const { data } = await removeWishList({
      variables: { car: id },
    });
    setRefresh(!refresh)
    console.log(data);
  }

  
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="box">
            <div className="model-container">
              {wishListData.map((el) => (
                <div className="inner" key={el._id}>
                  <div className="image-bg">
                    <div>
                      <img
                        className="image"
                        src={require(`../assets/img/${el.image}`).default}
                        alt="ModelA-1"
                      />
                    </div>
                    <div className="image-txt">
                      <h1>{el.model}</h1>
                      <h4>UNRIVALED. UNCOMPROMISED.</h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 ">
                      <div className="row text">
                        <div className="col-lg-6 align-flex">
                          <div className="fuel">
                            <p>FUEL CONSUMPTION</p>
                            <h1>{el.fuelConsumption}</h1>
                            <p className="text-small">Lorem costam</p>
                          </div>
                          <div className="horse">
                            <p>HORSEPOWER</p>
                            <h1>{el.horsepower}</h1>
                          </div>
                          <div className="price">
                            <p>STARTING AT</p>
                            <span className="dollar">$</span>
                            <h1>{el.price}</h1>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <p>{el.description}</p>
                        </div>
                        <button
                          className="wish-list"
                          data-id={el._id}
                          onClick={(e) =>
                            removeFromWishList(e.target.dataset.id)
                          }
                        >
                          Remove to Wish List
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {refresh}
          </div>
        </div>
      </div>
    </>
  );
};
export default WishList;
