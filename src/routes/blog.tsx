import { createFileRoute, Outlet } from "@tanstack/react-router";

// Layout route for /blog. The listing lives in blog.index.tsx and individual
// articles in blog.$slug.tsx; this route simply renders the matched child so
// that shared article URLs (e.g. /blog/mon-article) display the article
// instead of the blog index.
export const Route = createFileRoute("/blog")({
  component: () => <Outlet />,
});
