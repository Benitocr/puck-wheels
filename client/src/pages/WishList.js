import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { REMOVE_CAR } from "../utils/mutations";
import { REMOVE_FROM_WISHLIST } from '../utils/actions';

function WishList() {
  const { data } = useQuery(QUERY_USER);
  const [removeCar, { error }] = useMutation(REMOVE_CAR);
  let user;

  if (data) {
    user = data.user;
  }

  async function removeFromWishList(id) {
    console.log(id);
    const { data } = await removeCar({
      variables: { id: id },
    });
    console.log(data)
  }

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="box">
            <div className="model-container">
              {user.wishList.map((el) => (
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
                      <h1>{el.name}</h1>
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
                          onClick={() => removeFromWishList(el.id)}
                        >
                          Save to Wish List
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default WishList;
