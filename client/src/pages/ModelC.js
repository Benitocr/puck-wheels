import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ALL_CARS } from "../utils/queries";
import { ADD_WISH_LIST } from "../utils/mutations";

const ModelC = () => {
  const { data } = useQuery(QUERY_ALL_CARS, {
    variables: { category: null, year: 2021 },
  });

  const carData = data?.cars || [];

  const [addWishList ] = useMutation(ADD_WISH_LIST);

  async function saveToWishList(id) {
    console.log(id);
    const { data } = await addWishList({
      variables: { car: id },
    });
    console.log(data);
  }
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="box">
            <div className="model-container">
              {carData.map((el) => (
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
                          onClick={() => saveToWishList(el._id)}
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

export default ModelC;
