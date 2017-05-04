export const scenes= [
        {
            id: 0,
            name: 'Dashboard',
            location: '/dashboard/general',
            icon: 'dashboard'
        }, {
            id: 1,
            name: 'Opgaver',
            location: '/dashboard/tasks',
            icon: 'tasks'
        },
        {
            id: 2,
            name: 'Registreringer',
            location: '/registreringer',
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
            name: 'Indstillinger',
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
    label: 'Actions',
    location: '/dashboard/actions',
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

export const tasksTabs = [{
    label: 'Tasks',
    location: '/tasks',
    icon: 'placeholder',
    fixed: false
}]
export const registreringerTabs = [{
    label: 'Regisreringer',
    location: '/regisreringer',
    icon: 'placeholder',
    fixed: true
}]

export default scenes;