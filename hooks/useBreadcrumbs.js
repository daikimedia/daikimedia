// hooks/useBreadcrumbs.js
'use client';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export const useBreadcrumbs = () => {
    const pathname = usePathname();

    const breadcrumbs = useMemo(() => {
        // Base URL
        const baseUrl = 'https://www.daikimedia.com';

        // Always start with Home
        const crumbs = [{ name: 'Home', url: baseUrl }];

        // Split pathname and filter empty strings
        const pathSegments = pathname.split('/').filter(segment => segment);

        // Build breadcrumbs for each segment
        let currentPath = '';
        pathSegments.forEach((segment, index) => {
            currentPath += `/${segment}`;

            // Convert segment to readable name
            let name = segment
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');

            // Custom mappings for specific routes
            const routeMappings = {
                'learn': 'Learn',
                'what-is-seo-company': 'What is SEO Company',
                'about': 'About Us',
                'contact': 'Contact',
                'services': 'Services',
                'portfolio': 'Portfolio',
                'blog': 'Blog',
                // Add more mappings as needed
            };

            if (routeMappings[segment]) {
                name = routeMappings[segment];
            }

            crumbs.push({
                name: name,
                url: `${baseUrl}${currentPath}`
            });
        });

        return crumbs;
    }, [pathname]);

    return breadcrumbs;
};