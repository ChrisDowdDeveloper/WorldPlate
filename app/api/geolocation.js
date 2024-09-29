export async function fetchUserCountry(latitude, longitude) {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    );
    const location = await response.json();
    return location.countryName;
  }
  