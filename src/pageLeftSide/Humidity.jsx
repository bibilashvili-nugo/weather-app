import ContentContainerShape from "./ContentContainerShape";

export default function Humidity() {
  const humidityData = {
    label: { label: "Humidity", text: "24px", font: "400" },

    percentage: { percentage: "36%", text: "55px", font: "400" },
    paddingX: "33px",
    paddingY: "50px",
  };

  return (
    <div>
      <ContentContainerShape data={humidityData} layout="col" size="362px" />
    </div>
  );
}
