import ContentContainerShape from "./ContentContainerShape";

export default function Humidity() {
  const humidityData = {
    label: { label: "Humidity", text: "24px", font: "400" },
    humidity: { humidity: "36%", text: "55px", font: "400" },
    paddingX: "33px",
    paddingY: "50px",
  };

  return (
    <div className="w-full  p-2">
      <ContentContainerShape data={humidityData} />
    </div>
  );
}
