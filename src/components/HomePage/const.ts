export const ID_LABEL = {
  TOP: "top",
  ABOUT: "about",
  COMPANY_INFO: "company-info",
  RECRUITMENT: "recruitment",
  CONTACT: "contact",
  SERVICES: "services",
} as const;

export type ID_LABEL_TYPE = (typeof ID_LABEL)[keyof typeof ID_LABEL];

export const COMPANY_NAME = "株式会社BEPRIDE";