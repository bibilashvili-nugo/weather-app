import ContentContainerShape from "./ContentContainerShape";

export default function Sensitivity() {
  const sensitivityData = {
    label: { label: "Sensitivity", text: "24px", font: "400" },
    tempricha: { tempricha: "31°", text: "55px", font: "400" },
    paddingX: "33px",
    paddingY: "50px",
  };

  return (
    <div className="w-full  p-2">
      <ContentContainerShape data={sensitivityData} />
    </div>
  );
}
