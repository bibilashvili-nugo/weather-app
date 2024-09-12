// import ContentContainerShape from "./ContentContainerShape";

export default function CurrentDay() {
  // const currentDayData = {
  //   label: { label: "Batumi", text: "40px", font: "510" },
  //   currentDay: { currentDay: "14 sec, Monday", text: "24px", font: "400" },
  //   humidity: { humidity: "Sunny", text: "24px", font: "400" },
  //   tempricha: { tempricha: "31°", text: "72px", font: "400" },
  //   paddingX: "52px",
  //   paddingY: "35px",
  // };

  return (
    <div className="bg-[#B5B5B566] text-[#FFFFFF] px-[52px] py-[35px] rounded-[8px] ">
      <div>
        <div className="flex justify-between">
          <span className="text-[40px] font-[510]">ბათუმი</span>
          <span className="text-[24px] font-[400]">მზიანი</span>
        </div>
        <div className="flex items-center h-[70px] justify-between">
          <span className="text-[24px]  font-[400]">
            14 სექტემბერი,ორშაბათი
          </span>
          <span className="text-[72px] font-[400]">31°</span>
        </div>
      </div>
    </div>
  );
}
