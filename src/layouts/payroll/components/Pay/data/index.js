// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";
import SuiProgress from "components/SuiProgress";

// Images
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";

import ReceiptIcon from '@mui/icons-material/Receipt';
import DownloadIcon from '@mui/icons-material/Download';

export default function data() {
 
  return {
    columns: [
      { name: "EmployeeName", align: "left", label: "Employee Name" },
      { name: "Type", align: "center", label: "Type" },
      { name: "TotalHours", align: "center", label: "Total Hours" },
      { name: "GrossPay", align: "center" },
      { name: "Taxes", align: "center" },
      { name: "Deductions", align: "center" },
      { name: "NetPay", align: "center" },
      { name: "EmployerTaxes", align: "center" },
    ],

    rows: [
      {
        EmployeeName: (
          <SuiBox py={1} display="flex" ml={1}>
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            Jake Richards
          </SuiTypography>
        </SuiBox>
        ),
        Type: (
          <SuiBox py={1}>
            <SuiTypography variant="caption" color="text" fontWeight="medium">
              regular
            </SuiTypography>
          </SuiBox>
        ),
        TotalHours: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            40.00
          </SuiTypography>
        ),
        GrossPay: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            530.00
          </SuiTypography>
        ),
        Taxes: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            232.00
          </SuiTypography>
        ),
        Deductions: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            40.00
          </SuiTypography>
        ),
        NetPay: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            14,000.00
          </SuiTypography>
        ),
        EmployerTaxes: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            412.00
          </SuiTypography>
        ),
      },
      {
        EmployeeName: (
          <SuiBox py={1} display="flex" ml={1}>
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            Jake Richards
          </SuiTypography>
        </SuiBox>
        ),
        Type: (
          <SuiBox py={1}>
            <SuiTypography variant="caption" color="text" fontWeight="medium">
              regular
            </SuiTypography>
          </SuiBox>
        ),
        TotalHours: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            40.00
          </SuiTypography>
        ),
        GrossPay: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            530.00
          </SuiTypography>
        ),
        Taxes: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            232.00
          </SuiTypography>
        ),
        Deductions: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            40.00
          </SuiTypography>
        ),
        NetPay: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            14,000.00
          </SuiTypography>
        ),
        EmployerTaxes: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            412.00
          </SuiTypography>
        ),
      },
      {
        EmployeeName: (
          <SuiBox py={1} display="flex" ml={1}>
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            Jake Richards
          </SuiTypography>
        </SuiBox>
        ),
        Type: (
          <SuiBox py={1}>
            <SuiTypography variant="caption" color="text" fontWeight="medium">
              regular
            </SuiTypography>
          </SuiBox>
        ),
        TotalHours: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            40.00
          </SuiTypography>
        ),
        GrossPay: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            530.00
          </SuiTypography>
        ),
        Taxes: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            232.00
          </SuiTypography>
        ),
        Deductions: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            40.00
          </SuiTypography>
        ),
        NetPay: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            14,000.00
          </SuiTypography>
        ),
        EmployerTaxes: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            412.00
          </SuiTypography>
        ),
      },
      {
        EmployeeName: (
          <SuiBox py={1} display="flex" ml={1}>
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            Jake Richards
          </SuiTypography>
        </SuiBox>
        ),
        Type: (
          <SuiBox py={1}>
            <SuiTypography variant="caption" color="text" fontWeight="medium">
              regular
            </SuiTypography>
          </SuiBox>
        ),
        TotalHours: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            40.00
          </SuiTypography>
        ),
        GrossPay: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            530.00
          </SuiTypography>
        ),
        Taxes: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            232.00
          </SuiTypography>
        ),
        Deductions: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            40.00
          </SuiTypography>
        ),
        NetPay: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            14,000.00
          </SuiTypography>
        ),
        EmployerTaxes: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            412.00
          </SuiTypography>
        ),
      },
      {
        EmployeeName: (
          <SuiBox py={1} display="flex" ml={1}>
          <SuiTypography variant="h6" color="gray" fontWeight="medium">
            Totals
          </SuiTypography>
        </SuiBox>
        ),
        Type: (
          <SuiBox py={1}>
            <SuiTypography variant="caption" color="text" fontWeight="medium">
            </SuiTypography>
          </SuiBox>
        ),
        TotalHours: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            40.00
          </SuiTypography>
        ),
        GrossPay: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            530.00
          </SuiTypography>
        ),
        Taxes: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            232.00
          </SuiTypography>
        ),
        Deductions: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            40.00
          </SuiTypography>
        ),
        NetPay: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            14,000.00
          </SuiTypography>
        ),
        EmployerTaxes: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            412.00
          </SuiTypography>
        ),
      },

      {
        companies: [logoInvesion, "Aug 02 - Aug 05, 2020"],
        members: (
          <SuiBox display="flex" py={1}>
             Total
          </SuiBox>
        ),
        budget: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
          </SuiTypography>
        ),
        completion: (
          <SuiBox width="8rem" textAlign="left">
          </SuiBox>
        ),
      },
    ],
  };
}
