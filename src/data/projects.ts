import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'chanda-mohana-irrigation',
    title: 'Chanda Mohana Irrigation Project',
    description:
      'Assessment and analysis of the Chanda Mohana irrigation system, focusing on water resource management, canal efficiency, and agricultural productivity in the region. The study evaluated existing irrigation infrastructure and proposed improvements for sustainable water distribution to farmlands.',
    details: [
      'Field-based assessment of irrigation canal system and water flow measurements',
      'Analysis of water availability and demand for agricultural lands',
      'Evaluation of canal efficiency and seepage losses',
      'Proposed sustainable water management strategies for local farmers',
    ],
    tags: ['Irrigation', 'Water Resources', 'Field Study', 'Agricultural Engineering'],
    images: ['/images/CMIP.jpg'],
    links: [],
  },
  {
    id: 'gis-watershed-delineation',
    title: 'GIS-Based Watershed Delineation and Hydrological Analysis',
    description:
      'Utilized Geographic Information System (GIS) tools and remote sensing data for watershed delineation and comprehensive hydrological analysis. The project involved processing DEM data, deriving stream networks, and analyzing catchment characteristics for water resource planning.',
    details: [
      'Watershed delineation using DEM and ArcGIS/QGIS tools',
      'Stream network extraction and drainage analysis',
      'Morphometric analysis of catchment area parameters',
      'Hydrological modeling and runoff estimation',
    ],
    tags: ['GIS', 'Remote Sensing', 'Hydrology', 'Watershed Management'],
    images: ['/images/WatershedDelineationandHydrologicalAnalysis.jpg'],
    links: [],
  },
  {
    id: 'temperature-bias-correction',
    title: 'Temperature Bias Correction of GCM Outputs',
    description:
      'Statistical bias correction of General Circulation Model (GCM) temperature outputs using various downscaling techniques. The study compared multiple GCMs and bias correction methods to improve the accuracy of future temperature projections for climate change impact assessment.',
    details: [
      'Comparison of temperature outputs from multiple GCMs',
      'Application of statistical bias correction methods (e.g., Delta method, QM)',
      'Analysis of historical vs. corrected future temperature projections',
      'Evaluation of correction performance using statistical metrics',
    ],
    tags: ['Climate Change', 'GCM', 'Bias Correction', 'Statistical Downscaling'],
    images: ['/images/BiasCorrection.jpg'],
    links: [],
  },
];