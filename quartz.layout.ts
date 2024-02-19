import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { SimpleSlug } from "./quartz/util/path"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      RSS: "/courtyard/index.xml",
      Stats: "https://eu.umami.is/share/Q9zwxbCD0wasb41u/Futurelog%20Courtyard",
      Futurelog: "https://futurelog.xyz",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),

    // Component.DesktopOnly(
    //   Component.RecentNotes({
    //     title: "writing-notes",
    //     limit: 5,
    //     filter: (f) =>
    //       f.slug!.startsWith("writing-notes/") && f.slug! !== "writing-notes/index" && !f.frontmatter?.noindex,
    //     linkToMore: "writing-notes/" as SimpleSlug,
    //   }),
    // ),
    // Component.DesktopOnly(
    //   Component.RecentNotes({
    //     title: "reading-notes",
    //     limit: 3,
    //     filter: (f) => f.slug!.startsWith("reading-notes/"),
    //     linkToMore: "reading-notes/" as SimpleSlug,
    //   }),
    // ),
    
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Graph(),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
