import { useEffect } from "react";

const SITE_URL = (import.meta.env.VITE_SITE_URL || "").replace(/\/+$/, "");

function updateMeta(attribute, key, value) {
  let element = document.head.querySelector(
    `meta[${attribute}="${key}"]`
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", value);
}

function removeMeta(attribute, key) {
  document.head
    .querySelector(`meta[${attribute}="${key}"]`)
    ?.remove();
}

function SEO({
  title,
  description,
  path = "/",
  robots = "index, follow",
}) {
  useEffect(() => {
    document.title = title;

    updateMeta("name", "description", description);
    updateMeta("name", "robots", robots);

    updateMeta("property", "og:type", "website");
    updateMeta("property", "og:title", title);
    updateMeta("property", "og:description", description);

    updateMeta("name", "twitter:card", "summary");
    updateMeta("name", "twitter:title", title);
    updateMeta("name", "twitter:description", description);

    if (SITE_URL) {
      const canonicalUrl =
        `${SITE_URL}${path === "/" ? "/" : path}`;

      let canonical = document.head.querySelector(
        'link[rel="canonical"]'
      );

      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }

      canonical.setAttribute("href", canonicalUrl);

      updateMeta("property", "og:url", canonicalUrl);
    } else {
      // Never create localhost as the production canonical URL.
      document.head
        .querySelector('link[rel="canonical"]')
        ?.remove();

      removeMeta("property", "og:url");
    }
  }, [title, description, path, robots]);

  return null;
}

export default SEO;
