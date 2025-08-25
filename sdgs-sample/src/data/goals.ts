export type SubPage = {
  id: number;
  title: string;
};

export type Goal = {
  id: number;
  title: string;
  description: string;
  color: string;
  icon: string; // now using image path
  subPages: SubPage[];
};

export const goals: Goal[] = [
  {
    id: 1,
    title: "No Poverty",
    description: "End poverty in all its forms everywhere.",
    color: "#e5243b",
    icon: "/sdgs/goal1.png",
    subPages: [
      { id: 1, title: "Overview" },
      { id: 2, title: "Challenges" },
      { id: 3, title: "Solutions" },
      { id: 4, title: "Progress" },
    ],
  },
  {
    id: 2,
    title: "Zero Hunger",
    description: "End hunger, achieve food security and improved nutrition.",
    color: "#dda63a",
    icon: "/sdgs/goal2.png",
    subPages: [
      { id: 1, title: "Food Security" },
      { id: 2, title: "Nutrition" },
      { id: 3, title: "Agriculture" },
    ],
  },
  {
    id: 3,
    title: "Good Health and Well-being",
    description: "Ensure healthy lives and promote well-being for all.",
    color: "#4c9f38",
    icon: "/sdgs/goal3.png",
    subPages: [
      { id: 1, title: "Healthcare Access" },
      { id: 2, title: "Diseases" },
      { id: 3, title: "Vaccination" },
    ],
  },
  {
    id: 4,
    title: "Quality Education",
    description: "Ensure inclusive and equitable quality education.",
    color: "#c5192d",
    icon: "/sdgs/goal4.png",
    subPages: [
      { id: 1, title: "Primary Education" },
      { id: 2, title: "Higher Education" },
      { id: 3, title: "Skills Development" },
    ],
  },
  {
    id: 5,
    title: "Gender Equality",
    description: "Achieve gender equality and empower all women and girls.",
    color: "#ff3a21",
    icon: "/sdgs/goal5.png",
    subPages: [
      { id: 1, title: "Women Empowerment" },
      { id: 2, title: "Equal Rights" },
    ],
  },
  {
    id: 6,
    title: "Clean Water and Sanitation",
    description: "Ensure availability and sustainable management of water.",
    color: "#26bde2",
    icon: "/sdgs/goal6.png",
    subPages: [
      { id: 1, title: "Clean Water" },
      { id: 2, title: "Sanitation" },
    ],
  },
  {
    id: 7,
    title: "Affordable and Clean Energy",
    description: "Ensure access to affordable, reliable, sustainable energy.",
    color: "#fcc30b",
    icon: "/sdgs/goal7.png",
    subPages: [
      { id: 1, title: "Renewable Energy" },
      { id: 2, title: "Efficiency" },
    ],
  },
  {
    id: 8,
    title: "Decent Work and Economic Growth",
    description: "Promote sustained, inclusive, sustainable economic growth.",
    color: "#a21942",
    icon: "/sdgs/goal8.png",
    subPages: [
      { id: 1, title: "Jobs" },
      { id: 2, title: "Fair Wages" },
      { id: 3, title: "Innovation" },
    ],
  },
  {
    id: 9,
    title: "Industry, Innovation and Infrastructure",
    description: "Build resilient infrastructure and foster innovation.",
    color: "#fd6925",
    icon: "/sdgs/goal9.png",
    subPages: [
      { id: 1, title: "Technology" },
      { id: 2, title: "Infrastructure" },
      { id: 3, title: "Industry Growth" },
    ],
  },
  {
    id: 10,
    title: "Reduced Inequalities",
    description: "Reduce inequality within and among countries.",
    color: "#dd1367",
    icon: "/sdgs/goal10.png",
    subPages: [
      { id: 1, title: "Equality" },
      { id: 2, title: "Social Justice" },
    ],
  },
  {
    id: 11,
    title: "Sustainable Cities and Communities",
    description: "Make cities inclusive, safe, resilient and sustainable.",
    color: "#fd9d24",
    icon: "/sdgs/goal11.png",
    subPages: [
      { id: 1, title: "Urban Planning" },
      { id: 2, title: "Housing" },
      { id: 3, title: "Transportation" },
    ],
  },
  {
    id: 12,
    title: "Responsible Consumption and Production",
    description: "Ensure sustainable consumption and production patterns.",
    color: "#bf8b2e",
    icon: "/sdgs/goal12.png",
    subPages: [
      { id: 1, title: "Sustainable Products" },
      { id: 2, title: "Waste Reduction" },
    ],
  },
  {
    id: 13,
    title: "Climate Action",
    description: "Take urgent action to combat climate change.",
    color: "#3f7e44",
    icon: "/sdgs/goal13.png",
    subPages: [
      { id: 1, title: "Mitigation" },
      { id: 2, title: "Adaptation" },
    ],
  },
  {
    id: 14,
    title: "Life Below Water",
    description: "Conserve and sustainably use oceans and marine resources.",
    color: "#0a97d9",
    icon: "/sdgs/goal14.png",
    subPages: [
      { id: 1, title: "Marine Life" },
      { id: 2, title: "Pollution" },
    ],
  },
  {
    id: 15,
    title: "Life on Land",
    description: "Protect, restore, and promote sustainable use of ecosystems.",
    color: "#56c02b",
    icon: "/sdgs/goal15.png",
    subPages: [
      { id: 1, title: "Forests" },
      { id: 2, title: "Wildlife" },
      { id: 3, title: "Biodiversity" },
    ],
  },
  {
    id: 16,
    title: "Peace, Justice and Strong Institutions",
    description: "Promote peaceful and inclusive societies for sustainable development.",
    color: "#00689d",
    icon: "/sdgs/goal16.png",
    subPages: [
      { id: 1, title: "Justice" },
      { id: 2, title: "Institutions" },
    ],
  },
  {
    id: 17,
    title: "Partnerships for the Goals",
    description: "Strengthen global partnerships for sustainable development.",
    color: "#19486a",
    icon: "/sdgs/goal17.png",
    subPages: [
      { id: 1, title: "Global Cooperation" },
      { id: 2, title: "Finance" },
      { id: 3, title: "Technology Sharing" },
    ],
  },
  {
    id: 18,
    title: "SDG Wheel Logo",
    description: "Logo",
    color: "#FFFFFF",
    icon: "/sdgs/wheel.png",
    subPages: [],
  },
];
