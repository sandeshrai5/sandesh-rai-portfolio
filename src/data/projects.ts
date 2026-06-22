import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "climate-water-irrigation",
    title:
      "Assessment of Climate Change Impact on Future Water Availability and Irrigation Water Demand: Chanda Mohana Irrigation Project, Nepal",
    description:
      "Comprehensive assessment of climate change impacts on water availability and irrigation demand under future climate scenarios.",
    tags: ["Climate Projections", "SSP245", "SSP585", "River Flow", "Irrigation"],
    details: [
      "Climate projections generated under SSP245 and SSP585 scenarios using downscaled GCM data",
      "Assessed future river flow availability in the Chanda Mohana Irrigation command area",
      "Analyzed irrigation water demand under changing climatic conditions",
      "Evaluated the gap between future water supply and irrigation demand",
    ],
    image: "/images/project-1.jpg", // Replace with actual image
  },
  {
    id: "tamor-irrigation",
    title:
      "Climate Change Impact on Irrigation in the Tamor River Basin",
    description:
      "Study examining the implications of climate change on irrigation systems and food security in the Tamor River Basin.",
    tags: ["Food Security", "Agroecosystem", "Climate Adaptation", "Tamor Basin"],
    details: [
      "Analyzed food security implications under changing climate scenarios",
      "Explored sustainable agroecosystem practices for climate adaptation",
      "Assessed irrigation water availability and demand projections",
    ],
    image: "/images/project-2.jpg",
  },
  {
    id: "gis-watershed",
    title:
      "GIS-Based Watershed Delineation and Hydrological Analysis",
    description:
      "Application of ArcGIS for watershed delineation, stream network analysis, and hydrological characterization.",
    tags: ["ArcGIS", "Watershed", "Hydrology", "Spatial Analysis"],
    details: [
      "Performed watershed delineation using DEM data in ArcGIS",
      "Analyzed stream network and drainage characteristics",
      "Conducted spatial data analysis for hydrological modeling",
    ],
    image: "/images/project-3.jpg",
  },
  {
    id: "temperature-bias-correction",
    title:
      "Temperature Bias Correction Using R",
    description:
      "Application of the qmap package in R for bias correction of historical and future temperature data.",
    tags: ["R Programming", "Bias Correction", "qmap", "Climate Data"],
    details: [
      "Applied qmap package for statistical bias correction of temperature data",
      "Corrected historical and future climate scenario data",
      "Validated corrected outputs against observed station data",
    ],
    image: "/images/project-4.jpg",
  },
];