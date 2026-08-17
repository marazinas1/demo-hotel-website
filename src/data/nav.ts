import type { LinkProps } from "@tanstack/react-router";

import { common } from "@/content/lt/common";

export type RoutePath = NonNullable<LinkProps["to"]>;
export type NavLink = { label: string; to: RoutePath };
export type NavEntry = NavLink | { label: string; items: NavLink[] };

export const SITE_URL = "https://demo-hotel-website.lovable.app";

export const mainNav: NavEntry[] = [
  { label: common.nav.about, to: "/apie" },
  { label: common.nav.stays, to: "/apartamentai" },
  { label: common.nav.restaurant, to: "/restoranas" },
  { label: common.nav.events, to: "/renginiai" },
  {
    label: common.nav.more,
    items: [
      { label: common.nav.spa, to: "/spa" },
      { label: common.nav.vouchers, to: "/dovanu-kuponai" },
      { label: common.nav.rules, to: "/apie/taisykles" },
    ],
  },
  { label: common.nav.contacts, to: "/kontaktai" },
];

export const footerNav: NavLink[] = [
  { label: common.nav.about, to: "/apie" },
  { label: common.nav.stays, to: "/apartamentai" },
  { label: common.nav.restaurant, to: "/restoranas" },
  { label: common.nav.events, to: "/renginiai" },
  { label: common.nav.spa, to: "/spa" },
  { label: common.nav.vouchers, to: "/dovanu-kuponai" },
  { label: common.nav.rules, to: "/apie/taisykles" },
  { label: common.nav.contacts, to: "/kontaktai" },
];
