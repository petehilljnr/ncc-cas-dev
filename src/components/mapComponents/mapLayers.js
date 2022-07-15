import { material, colorRange } from "./mapSettings";

export const scatterLayer = {
  id: "scatterplot",
  radiusScale: 10,
  radiusMinPixels: 0.25,
  opacity: 0.9,
  visible: true,
  getPosition: (d) => [d.lng, d.lat],
  getFillColor: (d) =>
    d.severity === "Fatal"
      ? [255, 0, 0, 125]
      : d.severity === "Serious"
      ? [255, 165, 0, 125]
      : d.severity === "Minor"
      ? [255, 255, 0, 125]
      : [0, 0, 255, 125],
  getRadius: (d) =>
    d.severity === "Fatal"
      ? 10
      : d.severity === "Serious"
      ? 6
      : d.severity === "Minor"
      ? 4
      : 2,
  pickable: true,
};

export const hexLayer = {
    id: "hexmap",
    colorRange,
    coverage: 0.75,
    elevationScale: 5,
    extruded: true,
    getPosition: (d) => [d.lng, d.lat],
    pickable: true,
    autoHighlight: true,
    highlightColor: [0, 255, 0],
    radius: 500,
    upperPercentile: 100,
    opacity: 0.8,
    visible: false,
    material
  };

  export const heatLayer = {
    id: 'heatmap-layer',
    pickable: false,
    getPosition: d => [d.lng, d.lat],
    getWeight: 1,
    opacity: 0.8,
    visible: false,
    radiusPixels: 10,
    intensity: 1,
    threshold: 0.1,
    debounceTimeout: 1000
  };

export const layerControllers = [
  {
    layer: "scatterLayer",
    title: "Crash Points",
    controllers: [
      {
        property: "opacity",
        title: "Layer Opacity (%)",
        minX: 0,
        maxX: 1,
        stepX: 0.01
      },
      {
        property: "radiusScale",
        title: "Radius Scale",
        minX: 1,
        maxX: 100,
        stepX: 1
      },
    ],
  },
  {
    layer: "hexLayer",
    title: "Hex Layer",
    controllers: [
      {
        property: "opacity",
        title: "Layer Opacity (%)",
        minX: 0,
        maxX: 1,
        stepX: 0.01
      },
      {
        property: "radius",
        title: "Hex Edge Length (m)",
        minX: 10,
        maxX: 10000,
        stepX: 10,
      },
      {
        property: "coverage",
        title: "Coverage (%)",
        minX: 0,
        maxX: 1,
        stepX: 0.05
      },
      {
        property: "elevationScale",
        title: "Column Height",
        minX: 0,
        maxX: 50,
        stepX: 1,
      },
  ]
  },
  {
    layer: "heatLayer",
    title: "Heat Layer (experimental)",
    controllers: [
      {
        property: "opacity",
        title: "Layer Opacity (%)",
        minX: 0,
        maxX: 1,
        stepX: 0.01
      },
      {
        property: "radiusPixels",
        title: "Radius (pixels)",
        minX: 1,
        maxX: 50,
        stepX: 1,
      },
      {
        property: "intensity",
        title: "Intensity",
        minX: 0,
        maxX: 5,
        stepX: 0.1,
      },
      {
        property: "threshold",
        title: "Threshold",
        minX: 0,
        maxX: 10,
        stepX: 0.01,
      },
  ]
  }
];
