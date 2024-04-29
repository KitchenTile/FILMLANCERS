import React, { useState, useEffect } from 'react';
import "./Rentalcomp.css";

const PlaceDetailsComponent = ({ placeId }) => {
    const [placeDetails, setPlaceDetails] = useState(null);

    console.log(placeId);

    useEffect(() => {

        const service = new window.google.maps.places.PlacesService(document.createElement('div'));
        const request = {
            placeId: placeId,
            fields: ['name', 'rating', 'reviews'],

        };


        service.getDetails(request, (place, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                setPlaceDetails(place);
                console.log(place);
            } else {
                console.error('Failed to fetch place details:', status);
            }
        });
    }, []);

    return (
        <div>
            {placeDetails ? (
                <div className='reviews2'>
                    <h2>{placeDetails.name}</h2>
                    <p>Rating: {placeDetails.rating} ★</p>
                    {placeDetails.reviews && placeDetails.reviews.length > 0 ? (
                        <div>
                            <h3>Reviews:</h3>
                            <ul>
                                {placeDetails.reviews.map((review, index) => (
                                    <li key={index} >
                                        <strong style={{color:"orange"}}>{review.author_name}</strong>: {review.text.length !== 0 ?
                                          <p>{review.text} - {review.rating} ★</p> : <p>No text - {review.rating} ★</p>}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <p>No reviews available</p>
                    )}
                </div>
            ) : (
                <p>Loading reviews...</p>
            )}
        </div>
    );
};

export default PlaceDetailsComponent;
