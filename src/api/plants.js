const API_KEY = import.meta.env.VITE_PERENUAL_API_KEY;

export async function getPlants() {
    const response = await fetch(
         `https://perenual.com/api/v2/species-list?key=${API_KEY}&indoor=1`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch plants");
    }

    const data = await response.json();

    return data.data.filter(
        (plant) => 
            plant.common_name &&
            plant.default_image?.medium_url
    )
    .slice(0,15);
    
}