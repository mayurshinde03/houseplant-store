import React from "react";
import { useCart } from "../CartContext";

const plants = [
  {id: '1', name: "Fiddle Leaf Fig", price: 45, thumbnail: "https://cdn.pixabay.com/photo/2017/02/06/10/19/fiddle-leaf-fig-2049469_1280.jpg", category: "Foliage"},
  {id: '2', name: "Snake Plant", price: 30, thumbnail: "https://cdn.pixabay.com/photo/2016/07/11/12/01/snake-plant-1502140_1280.jpg", category: "Succulents"},
  {id: '3', name: "Rubber Plant", price: 50, thumbnail: "https://cdn.pixabay.com/photo/2017/01/20/19/53/ficus-rubber-plant-1995980_1280.jpg", category: "Foliage"},
  {id: '4', name: "Aloe Vera", price: 25, thumbnail: "https://cdn.pixabay.com/photo/2016/04/20/20/30/aloe-vera-1342365_1280.jpg", category: "Succulents"},
  {id: '5', name: "Peace Lily", price: 35, thumbnail: "https://cdn.pixabay.com/photo/2017/08/10/22/41/peace-lily-2613230_1280.jpg", category: "Flowering"},
  {id: '6', name: "Orchid", price: 55, thumbnail: "https://cdn.pixabay.com/photo/2015/12/01/20/28/orchid-1075337_1280.jpg", category: "Flowering"},
];

const groupedPlants = plants.reduce((group, plant) => {
  group[plant.category] = group[plant.category] || [];
  group[plant.category].push(plant);
  return group;
}, {});

function ProductListing() {
  const { cart, addToCart } = useCart();

  return (
    <div style={{padding: "20px"}}>
      {Object.entries(groupedPlants).map(([category, plants]) => (
        <div key={category} style={{marginBottom: "30px"}}>
          <h2>{category}</h2>
          <div style={{display: "flex", gap: "20px", flexWrap: "wrap"}}>
            {plants.map(plant => {
              const isDisabled = !!cart[plant.id];
              return (
                <div key={plant.id} style={{border: "1px solid #ccc", padding: "10px", width: "180px", borderRadius: "8px", textAlign: "center"}}>
                  <img src={plant.thumbnail} alt={plant.name} style={{width: "100%", height: "120px", objectFit: "cover", borderRadius: "5px"}} />
                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>
                  <button 
                    onClick={() => addToCart(plant)} 
                    disabled={isDisabled}
                    style={{padding: "8px", cursor: isDisabled ? "not-allowed" : "pointer"}}>
                    {isDisabled ? "Added" : "Add to Cart"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductListing;
