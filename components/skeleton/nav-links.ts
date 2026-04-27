export const skeletonNavLinks = [
  { label: "Product", href: "/skeleton/product" },
  { label: "Solutions", href: "/skeleton/solutions" },
  { label: "Resources", href: "/skeleton/resources" },
  { label: "Customers", href: "/skeleton/customers" },
  { label: "Platform", href: "/skeleton/platform/source-of-truth" },
  { label: "Add Project", href: "/skeleton/add-project/role" },
] as const;

export const skeletonAuthLinks = {
  signIn: "/skeleton/contact",
  signUp: "/skeleton/contact",
  requestDemo: "/skeleton/contact",
  seePlatform: "/skeleton/platform/source-of-truth",
} as const;

export const skeletonPlatformViews = [
  { label: "Source of truth", href: "/skeleton/platform/source-of-truth" },
  { label: "Consultant", href: "/skeleton/platform/consultant" },
  { label: "Contractor", href: "/skeleton/platform/contractor" },
  { label: "Owner", href: "/skeleton/platform/owner" },
] as const;
