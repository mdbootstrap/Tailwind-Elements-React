import React, { ReactElement } from "react";

//demo pages
import ButtonPage from "./pages/components/button/ButtonPage";
import CollapsePage from "./pages/components/collapse/CollapsePage";

//examples pages
import ButtonExamples from "./pages/components/button/exampleList";
import CollapseExamples from "./pages/components/collapse/exampleList";
import ImagesPage from "./pages/content-styles/images/ImagesPage";
import HeadingsPage from "./pages/content-styles/headings/HeadingsPage";
import IconsPage from "./pages/content-styles/icons/IconsPage";

interface Pages {
  name: string;
  path: string;
  element: ReactElement;
}

interface PagesSection {
  section: string;
  pages: Pages[];
}

const componentsPages: Pages[] = [
  { name: "button", path: "/components/button", element: <ButtonPage /> },
  { name: "collapse", path: "/components/collapse", element: <CollapsePage /> },
  { name: "images", path: "/content-styles/images", element: <ImagesPage /> },
  { name: "icons", path: "/content-styles/icons", element: <IconsPage /> },
  { name: "headings", path: "/content-styles/headings", element: <HeadingsPage /> },
];

const contentStylesPages: Pages[] = [];

const dataPages: Pages[] = [];

const formsPages: Pages[] = [];

const methodsPages: Pages[] = [];

const navigationPages: Pages[] = [];

const designBlocksPages: Pages[] = [];

// list of pages with sections
const demoPages: PagesSection[] = [
  {
    section: "components",
    pages: componentsPages,
  },
  {
    section: "content styles",
    pages: contentStylesPages,
  },
  {
    section: "data",
    pages: dataPages,
  },
  {
    section: "forms",
    pages: formsPages,
  },
  {
    section: "methods",
    pages: methodsPages,
  },
  {
    section: "navigation",
    pages: navigationPages,
  },
  {
    section: "design blocks",
    pages: designBlocksPages,
  },
];

// list of examples
export const examplesPages: Pages[] = [...ButtonExamples, ...CollapseExamples];

export default demoPages;
