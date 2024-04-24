// export async function getReviews() {
//     const key = process.env.GOOGLE_MAPS_API_KEY;
//     let res = null;
  
    // try {
    //   const response = await fetch(
    //     `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJg9BODxx2X0YRr_Kv0d6GzXk&fields=reviews%2Crating%2Cname&key=AIzaSyBmclYZIWcPFUVgd1W02LB3iPD8-y5_oAA`
    //   );

//       res = await response.json();

//       console.log(res)
//     } catch (error) {
//       console.log(error);
//     }
  
//     return {
//       props: {
//         res,
//       },
//     };
//   }