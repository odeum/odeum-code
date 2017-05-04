
export const defaultTabs = [{
    label: 'General',
    location: '/dashboard/general',
    icon: 'generelt',
    fixed: true
}, {
    label: 'Felter',
    location: '/dashboard/fields',
    icon: 'felter',
    fixed: true
},
{
    label: 'Arbejdsgang',
    location: '/dashboard/workflow',
    icon: 'arbejdsgang',
    fixed: true
},
{
    label: 'Brugere',
    location: '/dashboard/users',
    icon: 'brugere',
    fixed: true
},
{
    label: 'Handlinger',
    location: '/dashboard/actions',
    icon: 'handlinger',
    fixed: true
},
{
    label: 'Konfiguration',
    location: '/dashboard/config',
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
//TODO Add the scenes here and rename the file Constants
export default defaultTabs;