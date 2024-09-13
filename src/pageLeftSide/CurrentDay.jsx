export default function CurrentDay() {
  return (
    <div className="bg-[#00000066] w-[500px] md:w-[600px] xl:w-[755px] text-[#FFFFFF] px-[52px] py-[35px] rounded-[8px] ">
      <div>
        <div className="flex justify-between">
          <span className="md:text-[40px] text-[35px] font-[510]">ბათუმი</span>
          <span className="md:text-[24px] text-[20px] font-[400]">მზიანი</span>
        </div>
        <div className="flex items-center h-[70px] justify-between">
          <span className="md:text-[24px]  text-[20px] font-[400]">
            14 სექტემბერი,ორშაბათი
          </span>
          <span className="text-[72px] font-[400]">31°</span>
        </div>
      </div>
    </div>
  );
}
