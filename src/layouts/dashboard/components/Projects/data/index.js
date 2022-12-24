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
      { name: "payperiod", align: "left" },
      { name: "paidon", align: "center" },
      { name: "netpay", align: "center" },
      { name: "download", align: "center" },
    ],

    rows: [
      {
        payperiod: (
        <SuiBox py={1} display="flex" ml={1}>
          <ReceiptIcon fontSize="large" color="info"/>
          <SuiBox ml={1} mt={0.8}>
        <SuiTypography variant="h6" color="gray" fontWeight="medium">
         Aug 02 - Aug 05, 2020
        </SuiTypography>
        </ SuiBox>
      </SuiBox>
        ),
        paidon: (
          <SuiBox py={1}>
            <SuiTypography variant="caption" color="text" fontWeight="medium">
              August 22, 2020
            </SuiTypography>
          </SuiBox>
        ),
        netpay: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            $14,000
          </SuiTypography>
        ),
        download: (
          <SuiBox >
            <DownloadIcon color="inherit"/>
          </SuiBox>
        ),
      },
      {
        payperiod: (
          <SuiBox py={1} display="flex" ml={1}>
            <ReceiptIcon fontSize="large" color="info"/>
            <SuiBox ml={1} mt={0.8}>
          <SuiTypography variant="h6" color="gray" fontWeight="medium">
           Aug 02 - Aug 05, 2020
          </SuiTypography>
          </ SuiBox>
        </SuiBox>
          ),
        paidon: (
          <SuiBox py={1}>
            <SuiTypography variant="caption" color="text" fontWeight="medium">
              June 13, 2022
            </SuiTypography>
          </SuiBox>
        ),
        netpay: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            $3,000
          </SuiTypography>
        ),
        download: (
          <SuiBox width="8rem">
            <DownloadIcon color="inherit"/>
          </SuiBox>
        ),
      },
      {
        payperiod: (
          <SuiBox py={1} display="flex" ml={1}>
            <ReceiptIcon fontSize="large" color="info"/>
            <SuiBox ml={1} mt={0.8}>
          <SuiTypography variant="h6" color="gray" fontWeight="medium">
           Aug 02 - Aug 05, 2020
          </SuiTypography>
          </ SuiBox>
        </SuiBox>
          ),
        paidon: (
          <SuiBox py={1}>
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            March 15, 2019
          </SuiTypography>
        </SuiBox>
        ),
        netpay: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            $1,000
          </SuiTypography>
        ),
        download: (
          <SuiBox width="8rem">
            <DownloadIcon color="inherit"/>
          </SuiBox>
        ),
      },
      {
        payperiod: (
          <SuiBox py={1} display="flex" ml={1}>
            <ReceiptIcon fontSize="large" color="info"/>
            <SuiBox ml={1} mt={0.8}>
          <SuiTypography variant="h6" color="gray" fontWeight="medium">
           Aug 02 - Aug 05, 2020
          </SuiTypography>
          </ SuiBox>
        </SuiBox>
          ),
        paidon: (
          <SuiBox py={1}>
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            October 2, 2021
          </SuiTypography>
        </SuiBox>
        ),
        netpay: (
          <SuiTypography variant="caption" color="text" fontWeight="medium">
            $20,500
          </SuiTypography>
        ),
        download: (
          <SuiBox width="8rem">
            <DownloadIcon color="inherit"/>
          </SuiBox>
        ),
      },
      
      {
        companies: [logoInvesion, "Aug 02 - Aug 05, 2020"],
        members: (
          <SuiBox display="flex" py={1}>
            
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
