import { forwardRef } from "react";
import PropTypes from "prop-types";
import SuiTypography from "components/SuiTypography";
import SuiProgressRoot from "components/SuiProgress/SuiProgressRoot";

const SuiProgress = forwardRef(({ variant, color, value, label, ...rest }, ref) => (
  <>
    {label && (
      <SuiTypography variant="button" fontWeight="medium" color="text">
        {value}%
      </SuiTypography>
    )}
    <SuiProgressRoot
      {...rest}
      ref={ref}
      variant="determinate"
      value={value}
      ownerState={{ color, value, variant }}
    />
  </>
));

// Setting default values for the props of SuiProgress
SuiProgress.defaultProps = {
  variant: "contained",
  color: "info",
  value: 0,
  label: false,
};

// Typechecking props for the SuiProgress
SuiProgress.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  value: PropTypes.number,
  label: PropTypes.bool,
};

export default SuiProgress;
