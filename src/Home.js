import React, { useEffect }from 'react'
import Product from './Product'
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider"

function Home() {
  const [{user},dispatch] = useStateValue();

  useEffect(() => {
   const unsubscribe =  auth.onAuthStateChanged((authUser) =>{
      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }else{
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return() => {
      unsubscribe();
    }
  }, [])

  return (
    <div className="home">
        <img className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/July/Onecard/Deals-Unrec-PC-3000._CB598889662_.jpg"
            alt = ""
        />
        <div className="home_row">
                  <Product
                      id ="1" 
                      title = "OnePlus 11R 5G (Sonic Black, 16GB RAM, 256GB Storage) "
                      price ={44999.00}
                      rating ={4}
                      image = "https://images-eu.ssl-images-amazon.com/images/I/71qjUzUt+ML._AC_UL160_SR160,160_.jpg"
                    />

                    <Product
                      id ="2" 
                      title = "MSI Katana 17, Intel 13th Gen. i7-13620H, 44CM FHD 144Hz Gaming Laptop (16GB/1TB NVMe SSD/Windows 11 Home/Nvidia GeForce RTX4050, 6GB GDDR6/Black/2.6Kg), B13VEK-254IN"
                      price ={125990}
                      rating ={3}
                      image = "https://m.media-amazon.com/images/I/71A6g5zzeVL._AC_UL600_FMwebp_QL65_.jpg"
                    />

                    <Product
                        id ="3" 
                        title = "M ART AD Champions Football League Finale Replica Football (Transparent White)"
                        price ={499.00}
                        rating ={3}
                        image = "https://m.media-amazon.com/images/I/51wwYqgdfNL._AC_UL600_FMwebp_QL65_.jpg"
                      />

                </div>
                <div className="home_row">
                
                <div className='home_row'>
                     <Product
                        id ="4" 
                        title = "Samsung Galaxy Watch4 Bluetooth(4.0 cm, Black, Compatible with Android only)"
                        price ={11990.00}
                        rating ={4}
                        image = "https://m.media-amazon.com/images/I/61nBzBREzGL._AC_UY327_FMwebp_QL65_.jpg"
                      />

                    <Product
                        id ="5" 
                        title = "Godrej 564 L Multi Air Flow System, With Advanced Controls Frost Free Side-By-Side Refrigerator(RS EONVELVET 579 RFD GL BK, Glass Black)"
                        price ={59999.00}
                        rating ={4}
                        image = "https://m.media-amazon.com/images/I/61K-RvtfXSL._AC_UL600_FMwebp_QL65_.jpg"
                      />

                      <Product
                        id ="6" 
                        title = "Hercules Street Rider Hybrid Bicycle 26T Carrier Ranger Sports Cycle Single Speed Bike, Black, Men Women Boys, Ideal for 13+Years, 18 Inches Steel Frame"
                        price ={7050.00}
                        rating ={2}
                        image = "https://m.media-amazon.com/images/I/41gMRVHL6JL.jpg"
                      />

                      <Product
                        id ="7" 
                        title = "Terrex Swift R3 Gore-TEX® Hiking Shoes"
                        price ={17541.00}
                        rating ={4}
                        image = "https://m.media-amazon.com/images/I/815eQnPAMRL._AC_UL600_QL65_.jpg"
                      />
                </div>
                    
                </div>
                <div className="home_row">
                  <Product
                      id ="8" 
                      title = "Samsung 34-inch(86.8cm) 3440 x 1440 Pixels Odyssey OLED G8 Ultra WQHD, 175 Hz, 0.1ms, HAS, Curved Gaming Monitor, USB Type -C, Smart TV, Gaming Hub, AMD FreeSync (LS34BG850SWXXL, Black)"
                      price ={12799.00}
                      rating ={5}
                      image = "https://m.media-amazon.com/images/I/81eLDCu76cL._AC_UY327_QL65_.jpg"
                    />
                </div>
                <div className="home_row">
                  <Product
                      id ="9" 
                      title = "Madera Carol Six Seater Solid Wood Dining Table Set (Mahogany Finish, Brown)"
                      price ={42890.00}
                      rating ={4}
                      image = "https://m.media-amazon.com/images/I/816RVbtpaaL._SX522_.jpg"
                    />
                    <Product
                      id ="10" 
                      title = "IFB 6.5 Kg 5 Star Front Load Washing Machine 2X Power Steam (ELENA ZSS 6510, Silver & Black, In-built Heater, 4 years Comprehensive Warranty)"
                      price ={32850.00}
                      rating ={4}
                      image = "https://m.media-amazon.com/images/I/51JRU4wMKUL._AC_UL600_FMwebp_QL65_.jpg"
                    />
                </div>
    </div>
    
  )
}

export default Home
