import { useEffect } from 'react';

const SEO = ({
  title,
  description,
  keywords = '',
  canonical = '',
  ogImage = 'https://logixfleet.ai/og-image.png',
  ogType = 'website'
}) => {
  const siteName = 'LogixFleet';
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | Fleet & Delivery Management Software for Africa`;
  const baseUrl = 'https://logixfleet.ai';

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Helper function to update or create meta tags
    const updateMetaTag = (selector, attribute, content) => {
      let element = document.querySelector(selector);
      if (element) {
        element.setAttribute(attribute, content);
      } else {
        element = document.createElement('meta');
        const [attrName, attrValue] = selector.replace('meta[', '').replace(']', '').split('=');
        element.setAttribute(attrName, attrValue.replace(/"/g, ''));
        element.setAttribute(attribute, content);
        document.head.appendChild(element);
      }
    };

    // Update meta description
    if (description) {
      updateMetaTag('meta[name="description"]', 'content', description);
      updateMetaTag('meta[name="title"]', 'content', fullTitle);
      updateMetaTag('meta[property="og:description"]', 'content', description);
      updateMetaTag('meta[name="twitter:description"]', 'content', description);
    }

    // Update title tags
    updateMetaTag('meta[property="og:title"]', 'content', fullTitle);
    updateMetaTag('meta[name="twitter:title"]', 'content', fullTitle);

    // Update keywords
    if (keywords) {
      updateMetaTag('meta[name="keywords"]', 'content', keywords);
    }

    // Update canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', `${baseUrl}${canonical}`);
      }
      updateMetaTag('meta[property="og:url"]', 'content', `${baseUrl}${canonical}`);
      updateMetaTag('meta[name="twitter:url"]', 'content', `${baseUrl}${canonical}`);
    }

    // Update OG image
    if (ogImage) {
      updateMetaTag('meta[property="og:image"]', 'content', ogImage);
      updateMetaTag('meta[name="twitter:image"]', 'content', ogImage);
    }

    // Update OG type
    updateMetaTag('meta[property="og:type"]', 'content', ogType);

  }, [fullTitle, description, keywords, canonical, ogImage, ogType]);

  return null;
};

export default SEO;
