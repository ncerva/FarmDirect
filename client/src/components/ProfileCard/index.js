import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { MdAddShoppingCart } from "react-icons/md";
import "./style.css";
import ProfileProductBlock from "../ProfileProductBlock"
import API from "../../utils/API";

function ProfileCard(props) {
  const [products, setProducts] = useState([]);
  const { farmerid } = useParams();
  const resultsArr = [];

  const [farmInfo, setFarmInfo] = useState({
    farm_name: "",
    street_address: "",
    city: "",
    state: "",
    zipcode: "",
    description: "",
    bio: "",
    image: "",
    owner: ""
  })

  useEffect(() => {
    API.getFarmProfile(farmerid)
      .then(res => {
        setFarmInfo({
        farm_name: res.data.farm_name,
        street_address: res.data.street_address,
        city: res.data.city,
        state: res.data.state,
        zipcode: res.data.zipcode,
        image: res.data.image,
        description: res.data.description,
        bio: res.data.bio,
        owner: res.data.owner
        })
        fetchProducts(res.data.owner)
    })
  }, [])

  const fetchProducts = (owner) => {
    API.getProductsForProfile(owner)
    .then(res => setProducts(res.data))

  } 
 

  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          
            <figure className="media-left">
              <img src={farmInfo.image} width="200" alt="Placeholder image" />
            </figure>
          

          <div className="media-content">
            <p className="title">{farmInfo.farm_name}</p>
            <p className="subtitle">{farmInfo.bio}</p>
          </div>
        </div>
        <div className="content">
          <div className="columns">
            <div className="column">
              <p className="title is-4">What I grow </p>
              <ul>
                {products.map(product => (
                  <ProfileProductBlock key={product._id} id={product._id} title={product.title} price={product.price} packsize={product.packsize} />
                )
                )}


              </ul>
            </div>
          </div>

        </div>
      </div>
      <footer className="card-footer">
        <a href="/results" className="card-footer-item">Back</a>
      </footer>
    </div>
  )
}
export default ProfileCard;