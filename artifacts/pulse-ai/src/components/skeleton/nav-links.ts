export const skeletonNavLinks = [
  { key: "product", href: "/skeleton/product" },
  { key: "solutions", href: "/skeleton/solutions" },
  { key: "resources", href: "/skeleton/resources" },
  { key: "customers", href: "/skeleton/customers" },
  { key: "platform", href: "/skeleton/platform/source-of-truth" },
  { key: "addProject", href: "/skeleton/add-project/role" },
] as const;

export const skeletonAuthLinks = {
  signIn: "/skeleton/contact",
  signUp: "/skeleton/contact",
  requestDemo: "/skeleton/contact",
  seePlatform: "/skeleton/platform/source-of-truth",
} as const;

export const skeletonPlatformViews = [
  { key: "sourceOfTruth", href: "/skeleton/platform/source-of-truth" },
  { key: "consultant", href: "/skeleton/platform/consultant" },
  { key: "contractor", href: "/skeleton/platform/contractor" },
  { key: "owner", href: "/skeleton/platform/owner" },
] as const;
