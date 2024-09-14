import PropTypes from "prop-types";

function ContentContainerShape({ data }) {
  const containerStyle = {
    paddingInline: data.paddingX || "1rem",
    paddingBlock: data.paddingY || "1rem",
  };

  const getTextStyle = (field) => ({
    fontSize: field?.text || "16px",
    fontWeight: field?.font || "400",
  });

  return (
    <div
      className="bg-[#00000066] rounded-[8px] text-[#af2525] w-full "
      style={containerStyle}
    >
      {data && (
        <div className="flex flex-col gap-[1rem] items-center justify-between">
          {data.label && (
            <h2
              className="text-[#FFFFFF] text-center text-[18px] sm:text-[20px] lg:text-[24px]"
              style={getTextStyle(data.label)}
            >
              {data.label.label}
            </h2>
          )}

          {data.humidity && (
            <div className="text-center">
              <h3
                className="text-[#FFFFFF] text-[16px] sm:text-[18px] lg:text-[22px]"
                style={getTextStyle(data.humidity)}
              >
                {data.humidity.humidity}
              </h3>
            </div>
          )}

          {data.tempricha && (
            <div className="text-center">
              <h3
                className="text-[#FFFFFF] text-[16px] sm:text-[18px] lg:text-[22px]"
                style={getTextStyle(data.tempricha)}
              >
                {data.tempricha.tempricha}
              </h3>
            </div>
          )}

          {data.percentage && (
            <div className="text-center">
              <h3
                className="text-[#FFFFFF] text-[16px] sm:text-[18px] lg:text-[22px]"
                style={getTextStyle(data.percentage)}
              >
                {data.percentage.percentage}
              </h3>
            </div>
          )}
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
  layout: PropTypes.oneOf(["row", "col"]),
};

ContentContainerShape.defaultProps = {
  layout: "row",
};

export default ContentContainerShape;
