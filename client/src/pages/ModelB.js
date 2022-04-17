import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ALL_CARS } from "../utils/queries";
import { ADD_WISH_LIST } from "../utils/mutations";

const ModelB = () => {
  const { data, loading } = useQuery(QUERY_ALL_CARS, {
    variables: { category: null, year: 2022 },
  });

  const carData = data?.cars || [];

  const [addWishList, { error }] = useMutation(ADD_WISH_LIST);

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
                  <div class="row">
                    <div class="col-md-12 ">
                      <div class="row text">
                        <div class="col-lg-6 align-flex">
                          <div class="fuel">
                            <p>FUEL CONSUMPTION</p>
                            <h1>22/28</h1>
                            <p class="text-small">Lorem costam</p>
                          </div>
                          <div class="horse">
                            <p>HORSEPOWER</p>
                            <h1>300</h1>
                          </div>
                          <div class="price">
                            <p>STARTING AT</p>
                            <span class="dollar">$</span>
                            <h1>{el.price}</h1>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <p>{el.description}</p>
                        </div>
                        <button onClick={() => saveToWishList(el._id)}>
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

export default ModelB;
