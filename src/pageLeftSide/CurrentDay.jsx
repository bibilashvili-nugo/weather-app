import ContentContainerShape from "./ContentContainerShape";

export default function CurrentDay() {
  const currentDayData = {
    label: { label: "Batumi", text: "40px", font: "510" },
    currentDay: { currentDay: "14 sec, Monday", text: "24px", font: "400" },
    humidity: { humidity: "Sunny", text: "24px", font: "400" },
    tempricha: { tempricha: "31°", text: "72px", font: "400" },
    paddingX: "52px",
    paddingY: "35px",
  };

  return (
    <div>
      <ContentContainerShape data={currentDayData} size="full" layout="row" />
    </div>
  );
}
