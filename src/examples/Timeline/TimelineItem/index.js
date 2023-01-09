import PropTypes from "prop-types";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiBadge from "components/SuiBadge";
import { useTimeline } from "examples/Timeline/context";
import { timelineItem, timelineItemIcon } from "examples/Timeline/TimelineItem/styles";

function TimelineItem({ color, icon, title, dateTime, description, badges, lastItem }) {
  const isDark = useTimeline();

  const renderBadges =
    badges.length > 0
      ? badges.map((badge, key) => {
          const badgeKey = `badge-${key}`;

          return (
            <SuiBox key={badgeKey} mr={key === badges.length - 1 ? 0 : 0.5}>
              <SuiBadge color={color} size="xs" badgeContent={badge} container />
            </SuiBox>
          );
        })
      : null;

  return (
    <SuiBox position="relative" sx={(theme) => timelineItem(theme, { lastItem })}>
      <SuiBox
        bgColor={isDark ? "dark" : "white"}
        width="1.625rem"
        height="1.625rem"
        borderRadius="50%"
        position="absolute"
        top="3.25%"
        left="2px"
        zIndex={2}
      >
        <Icon sx={(theme) => timelineItemIcon(theme, { color })}>{icon}</Icon>
      </SuiBox>
      <SuiBox ml={5.00} pt={description ? 0.6 : 0.5} lineHeight={0} maxWidth="30rem">
        <SuiTypography variant="button" fontWeight="medium" color={isDark ? "white" : "dark"}>
          {title}
        </SuiTypography>
        <SuiBox mt={0.5}>
          <SuiTypography
            variant="caption"
            fontWeight="medium"
            color={isDark ? "secondary" : "text"}
          >
            {dateTime}
          </SuiTypography>
        </SuiBox>
        <SuiBox mt={1} mb={1} >
          {description ? (
            <SuiTypography variant="button" fontWeight="regular" color="text">
              {description}
            </SuiTypography>
          ) : null}
        </SuiBox>
        {badges.length > 0 ? (
          <SuiBox display="flex" pb={lastItem ? 1 : 2}>
            {renderBadges}
          </SuiBox>
        ) : null}
      </SuiBox>
    </SuiBox>
  );
}

// Setting default values for the props of TimelineItem
TimelineItem.defaultProps = {
  color: "info",
  badges: [],
  lastItem: false,
  description: "",
};

// Typechecking props for the TimelineItem
TimelineItem.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  description: PropTypes.string,
  badges: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  lastItem: PropTypes.bool,
};

export default TimelineItem;
