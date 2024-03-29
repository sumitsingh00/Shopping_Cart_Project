import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();// jason fromate me covert kr liya

      setPosts(data);
    }
    catch (error) {
      console.log("Error aagya ji");
      setPosts([]);
    }
    setLoading(false);
  }


  // simply one time run
  useEffect(() => {
    fetchProductData();
  }, [])

  return (
    <div>
      {
        loading ? <Spinner /> :
          posts.length > 0 ?
            (<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5
        gap-y-10 max-w-6xl p-6 mx-auto my-7 min-h-[80vh]">
              {
                // two types of brackets are there 
                // ( ) isme no return 
                // { } isme return krna padega

                posts.map((post) => {
                  return <Product key={post.id} post={post} />
                })
              }
            </div>) :
            <div className="w-screen h-screen flex justify-center items-center">
              <p className="font-bold">No Data Found</p>
            </div>
      }
    </div>
  );
};

export default Home;
