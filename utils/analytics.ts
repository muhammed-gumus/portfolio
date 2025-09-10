/**
 * Google Analytics tracking utilities
 * This file provides convenient functions to track various user interactions
 */

export interface GAEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

/**
 * Send a custom event to Google Analytics
 */
export const trackEvent = (event: GAEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      ...event.custom_parameters,
    });
  }
};

/**
 * Track resume download specifically
 */
export const trackResumeDownload = () => {
  // Send custom resume event
  trackEvent({
    action: 'resume',
    category: 'engagement',
    label: 'Resume PDF Download',
    value: 1,
    custom_parameters: {
      file_name: 'Resume-FrontendMG.pdf',
      file_extension: 'pdf',
      link_text: 'Resume',
      description: 'Frontend Developer Resume Download',
      action_type: 'download',
      page_location: window.location.href
    },
  });

  // Also trigger a page_view event with resume context for GA4 conversion tracking
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: 'Resume Download',
      page_location: window.location.href,
      custom_parameters: {
        resume_download: true,
        file_type: 'pdf'
      }
    });
  }
};

/**
 * Track project interactions
 */
export const trackProjectClick = (projectName: string, projectUrl?: string) => {
  trackEvent({
    action: 'project_click',
    category: 'portfolio',
    label: projectName,
    custom_parameters: {
      project_name: projectName,
      project_url: projectUrl,
    },
  });
};

/**
 * Track contact form interactions
 */
export const trackContactAction = (action: 'view' | 'submit' | 'email_click') => {
  trackEvent({
    action: `contact_${action}`,
    category: 'contact',
    label: action.charAt(0).toUpperCase() + action.slice(1),
  });
};

/**
 * Track navigation between sections
 */
export const trackNavigation = (section: string) => {
  trackEvent({
    action: 'navigation',
    category: 'user_engagement',
    label: section,
    custom_parameters: {
      section_name: section,
    },
  });
};

/**
 * Track scroll depth for engagement measurement
 */
export const trackScrollDepth = (percentage: number) => {
  trackEvent({
    action: 'scroll_depth',
    category: 'engagement',
    label: `${percentage}%`,
    value: percentage,
  });
};

/**
 * Track theme changes
 */
export const trackThemeChange = (theme: 'dark' | 'light') => {
  trackEvent({
    action: 'theme_change',
    category: 'user_preference',
    label: theme,
    custom_parameters: {
      theme_selected: theme,
    },
  });
};
