import {Link} from "gatsby";
import React from "react";

export type SiteNavigationProps = {
  links: Array<LinkData>;
}

export type LinkData = {
  text: string;
  to: string;
}

export const SiteNavigation = ({links}:SiteNavigationProps) : JSX.Element => {
  console.log("SiteNavigation links", links)
  return (
    <header>
      {
        links.map(v =>
          <div className={"container drop-shadow-md text-xs"}>
            <Link key={v.to} to={v.to}
                  className={"box-decoration-slice bg-gradient-to-r from-teal-900 to-emerald-500 text-white p-1 m-1 rounded hover:bold"}>{v.text} and all that
            </Link>
          </div>
        )
      }
    </header>
  )
}