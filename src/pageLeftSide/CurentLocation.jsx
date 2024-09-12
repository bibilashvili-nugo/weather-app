import { useState, useEffect } from "react";

export default function CurrentLocation() {
  const [address, setAddress] = useState({
    city: "Loading...",
    region: "Loading...",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocationDetails = async () => {
      try {
        navigator.geolocation.getCurrentPosition(
          async (pos) => {
            const { latitude, longitude } = pos.coords;
            console.log("Latitude:", latitude, "Longitude:", longitude);

            const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
            const response = await fetch(url);

            if (!response.ok) {
              throw new Error("Network response was not ok.");
            }

            const data = await response.json();
            console.log("API Response:", data);

            if (data && data.address) {
              const city =
                data.address.city ||
                data.address.town ||
                data.address.village ||
                "Unknown";
              const region =
                data.address.state || data.address.region || "Unknown";
              setAddress({ city, region });
            } else {
              setAddress({ city: "Unknown", region: "Unknown" });
            }
          },
          (error) => {
            setError("Error fetching location: " + error.message);
          }
        );
      } catch (error) {
        setError("Error fetching location details: " + error.message);
      }
    };

    fetchLocationDetails();
  }, []);

  return (
    <div className="bg-red-500 p-4 rounded-lg">
      {error ? (
        <p className="text-white">{error}</p>
      ) : (
        <div>
          <p className="text-white">{address.city}</p>
        </div>
      )}
    </div>
  );
}
