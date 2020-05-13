import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        items: ['dashboard'],
    },
    {
        text: 'IDENTITY',
        items: ['addinformation', 'notifications', 'etherscan', 'secretbkp'],
    },
];

export const sideNavItems: SideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Dashboard',
        link: '/dashboard',
    },
    addinformation: {
        icon: 'table',
        text: 'Identity Persona',
        link: '/tables',
    },
    notifications: {
        icon: 'table',
        text: 'Notifications',
        link: '/tables',
    },
    etherscan: {
        icon: 'table',
        text: 'Etherscan',
        link: '/tables',
    },
    secretbkp: {
        icon: 'table',
        text: 'Secret Backup Phrase',
        link: '/tables',
    },
};
