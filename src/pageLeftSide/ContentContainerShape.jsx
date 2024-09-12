import PropTypes from "prop-types";

function ContentContainerShape({ data, size, layout }) {
  const containerStyle = {
    paddingInline: data.paddingX,
    paddingBlock: data.paddingY,
    width: size,
  };

  const getTextStyle = (field) => ({
    fontSize: field?.text || "16px",
    fontWeight: field?.font || "400",
  });

  return (
    <div
      className="bg-[#B5B5B566] rounded-[8px] text-[#af2525]"
      style={containerStyle}
    >
      {data && (
        <div
          className={`flex w-full justify-between gap-[1rem] ${
            layout === "col" ? "flex-col" : "flex-row"
          }`}
        >
          <div className="flex gap-[1rem] flex-col">
            <h2
              className="text-[#FFFFFF] text-center"
              style={getTextStyle(data.label)}
            >
              {data.label?.label}
            </h2>
            {data.currentDay && (
              <span
                className="text-[#FFFFFF] text-center"
                style={getTextStyle(data.currentDay)}
              >
                {data.currentDay.currentDay}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-[1rem]">
            {data.humidity && (
              <h2
                className="text-[#FFFFFF] text-center"
                style={getTextStyle(data.humidity)}
              >
                {data.humidity.humidity}
              </h2>
            )}
            {data.tempricha && (
              <span
                className="text-[#FFFFFF] text-center"
                style={getTextStyle(data.tempricha)}
              >
                {data.tempricha.tempricha}
              </span>
            )}
            {data.percentage && (
              <span
                className="text-[#FFFFFF] text-center"
                style={getTextStyle(data.percentage)}
              >
                {data.percentage.percentage}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

ContentContainerShape.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.shape({
      label: PropTypes.string.isRequired,
      text: PropTypes.string,
      font: PropTypes.string,
    }).isRequired,
    currentDay: PropTypes.shape({
      currentDay: PropTypes.string,
      text: PropTypes.string,
      font: PropTypes.string,
    }),
    humidity: PropTypes.shape({
      humidity: PropTypes.string,
      text: PropTypes.string,
      font: PropTypes.string,
    }),
    tempricha: PropTypes.shape({
      tempricha: PropTypes.string,
      text: PropTypes.string,
      font: PropTypes.string,
    }),
    percentage: PropTypes.shape({
      percentage: PropTypes.string,
      text: PropTypes.string,
      font: PropTypes.string,
    }),
    paddingX: PropTypes.string,
    paddingY: PropTypes.string,
  }).isRequired,
  size: PropTypes.string,
  layout: PropTypes.oneOf(["row", "col"]),
};

ContentContainerShape.defaultProps = {
  layout: "row",
  size: "100%", // Default width
};

export default ContentContainerShape;
