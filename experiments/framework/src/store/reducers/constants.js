export const scenes= [
        {
            id: 0,
            name: 'Dashboard',
            location: '/dashboard/general',
            icon: 'dashboard'
        }, {
            id: 1,
            name: 'Forms',
            location: '/forms',
            icon: 'tasks'
        },
        {
            id: 2,
            name: 'Reports',
            location: '/reports',
            icon: 'registrations'
        },
        {
            id: 3,
            name: 'Organisation',
            location: '/organisation',
            icon: 'organisation'
        },
        {
            id: 4,
            name: 'Settings',
            location: '/settings',
            icon: 'settings'
        }]
export const defaultTabs = [
    {
    label: 'General',
    location: '/dashboard/general',
    icon: 'generelt',
    fixed: true
}, {
    label: 'Fields',
    location: '/dashboard/fields',
    icon: 'felter',
    fixed: true
},
{
    label: 'Workflow',
    location: '/dashboard/workflow',
    icon: 'arbejdsgang',
    fixed: true
},
{
    label: 'Users',
    location: '/dashboard/users',
    icon: 'brugere',
    fixed: true
},
{
    label: 'Operations',
    location: '/dashboard/operations',
    icon: 'handlinger',
    fixed: true
},
{
    label: 'Configuration',
    location: '/dashboard/configuration',
    icon: 'settings',
    fixed: true
},
{
    label: 'Design',
    location: '/dashboard/design',
    icon: 'design',
    fixed: true
}
]

export const formsTabs = [{
    label: 'Forms',
    location: '/forms',
    icon: 'generelt',
    fixed: true
}]
export const reportsTabs = [{
    label: 'Reports',
    location: '/reports',
    icon: 'placeholder',
    fixed: true
}]

export default scenes