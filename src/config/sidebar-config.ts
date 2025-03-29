// src/config/sidebar-config.ts

export interface SidebarItem {
    label: string;
    icon: string;
    route?: string;
    children?: SidebarItem[];
    roles: string[];
}

export const sidebarItems: SidebarItem[] = [
    {
        label: 'dashboard',
        icon: 'vlfhomer',
        children: [
            { label: 'admin-dashboard', route: '/', icon: '', roles: ['admin'] }
        ],
        roles: ['admin'],
        
    },
    {
        label: 'schools',
        icon: 'vvyxyrur',
        route: '/ehtimami/schools',
        roles: ['admin']
    },
    {
        label: 'classes',
        icon: 'amdfceua',
        route: '/ehtimami/classes',
        roles: ['admin']
    },
    {
        label: 'teachers',
        icon: 'azdvtwlw',
        route: '/ehtimami/teachers',
        roles: ['admin']
    },
    {
        label: 'chat',
        icon: 'zqhvubpn',
        route: '/ehtimami/chat',
        roles: ['admin']
    },
    {
        label: 'trip-dispatch',
        icon: 'zbpiqezx',
        route: '/ehtimami/trip-dispatch',
        roles: ['admin']
    },
    {
        label: 'livemap',
        icon: 'pjafmnfz',
        route: '/ehtimami/livemap',
        roles: ['admin']
    },
    {
        label: 'staff',
        icon: 'zvgtwjbo',
        route: '/ehtimami/staff',
        roles: ['admin']
    },
    {
        label: 'mailbox',
        icon: 'uothebdx',
        route: '/ehtimami/mailbox',
        roles: ['admin']
    },
    {
        label: 'todo_list',
        icon: 'yqbaahfi',
        route: '/ehtimami/todolist',
        roles: ['admin']
    },
    {
        label: 'notes',
        icon: 'weynygnn',
        route: '/ehtimami/notes',
        roles: ['admin']
    },
    {
        label: 'scrumboard',
        icon: 'nejoxqhx',
        route: '/ehtimami/scrumboard',
        roles: ['admin']
    },
    {
        label: 'contacts',
        icon: 'zyknqdyx',
        route: '/ehtimami/contacts',
        roles: ['admin']
    },
    {
        label: 'invoice',
        icon: 'jwpaspoo',
        children: [
            { label: 'list', route: '/ehtimami/invoice/list', icon: '', roles: ['admin'] },
            { label: 'preview', route: '/ehtimami/invoice/preview', icon: '', roles: ['admin'] },
            { label: 'add', route: '/ehtimami/invoice/add', icon: '', roles: ['admin'] },
            { label: 'edit', route: '/ehtimami/invoice/edit', icon: '', roles: ['admin'] }
        ],
        roles: ['admin']
    },
    {
        label: 'calendar',
        icon: 'aswjckcz',
        route: '/ehtimami/calendar',
        roles: ['admin']
    },
    {
        label: 'organization',
        icon: 'mzcapxae',
        children: [
            { label: 'regions-sites', route: '/settings-configuration/org-chart', icon: '', roles: ['admin'] },
            { label: 'organization-chart', route: '/settings-configuration/org-chart', icon: '', roles: ['admin'] },
            { label: 'timezone', route: '/settings-configuration/org-chart', icon: '', roles: ['admin'] },
            { label: 'HR', route: '/settings-configuration/org-chart', icon: '', roles: ['admin'] },
            { label: 'calendar', route: '/settings-configuration/org-chart', icon: '', roles: ['admin'] }
        ],
        roles: ['admin']
    },
    {
        label: 'components',
        icon: '',
        children: [
            { label: 'tabs', route: '/components/tabs', icon: '', roles: ['admin'] },
            { label: 'accordions', route: '/components/accordions', icon: '', roles: ['admin'] },
            { label: 'modals', route: '/components/modals', icon: '', roles: ['admin'] },
            { label: 'cards', route: '/components/cards', icon: '', roles: ['admin'] },
            { label: 'carousel', route: '/components/carousel', icon: '', roles: ['admin'] },
            { label: 'countdown', route: '/components/countdown', icon: '', roles: ['admin'] },
            { label: 'counter', route: '/components/counter', icon: '', roles: ['admin'] },
            { label: 'sweet_alerts', route: '/components/sweetalert', icon: '', roles: ['admin'] },
            { label: 'timeline', route: '/components/timeline', icon: '', roles: ['admin'] },
            { label: 'notifications', route: '/components/notifications', icon: '', roles: ['admin'] },
            { label: 'media_object', route: '/components/media-object', icon: '', roles: ['admin'] },
            { label: 'list_group', route: '/components/list-group', icon: '', roles: ['admin'] },
            { label: 'pricing_tables', route: '/components/pricing-table', icon: '', roles: ['admin'] },
            { label: 'lightbox', route: '/components/lightbox', icon: '', roles: ['admin'] }
        ],
        roles: ['admin']
    },
    {
        label: 'elements',
        icon: '',
        children: [
            { label: 'alerts', route: '/elements/alerts', icon: '', roles: ['admin'] },
            { label: 'avatar', route: '/elements/avatar', icon: '', roles: ['admin'] },
            { label: 'badges', route: '/elements/badges', icon: '', roles: ['admin'] },
            { label: 'breadcrumbs', route: '/elements/breadcrumbs', icon: '', roles: ['admin'] },
            { label: 'buttons', route: '/elements/buttons', icon: '', roles: ['admin'] },
            { label: 'button_groups', route: '/elements/buttons-group', icon: '', roles: ['admin'] },
            { label: 'color_library', route: '/elements/color-library', icon: '', roles: ['admin'] },
            { label: 'dropdown', route: '/elements/dropdown', icon: '', roles: ['admin'] },
            { label: 'infobox', route: '/elements/infobox', icon: '', roles: ['admin'] },
            { label: 'jumbotron', route: '/elements/jumbotron', icon: '', roles: ['admin'] },
            { label: 'loader', route: '/elements/loader', icon: '', roles: ['admin'] },
            { label: 'pagination', route: '/elements/pagination', icon: '', roles: ['admin'] },
            { label: 'popovers', route: '/elements/popovers', icon: '', roles: ['admin'] },
            { label: 'progress_bar', route: '/elements/progress-bar', icon: '', roles: ['admin'] },
            { label: 'search', route: '/elements/search', icon: '', roles: ['admin'] },
            { label: 'tooltips', route: '/elements/tooltips', icon: '', roles: ['admin'] },
            { label: 'treeview', route: '/elements/treeview', icon: '', roles: ['admin'] },
            { label: 'typography', route: '/elements/typography', icon: '', roles: ['admin'] }
        ],
        roles: ['admin']
    },
    {
        label: 'charts',
        icon: 'vlfhomer',
        route: '/charts',
        roles: ['admin']
    },
    {
        label: 'widgets',
        icon: '',
        route: '/widgets',
        roles: ['admin']
    },
    {
        label: 'font_icons',
        icon: '',
        route: '/font-icons',
        roles: ['admin']
    },
    {
        label: 'drag_and_drop',
        icon: '', 
        route: '/dragndrop',
        roles: ['admin']
    },
    {
        label: 'tables',
        icon: '',
        route: '/tables',
        roles: ['admin']
    },
    {
        label: 'datatables',
        icon: '',
        children: [
            { label: 'basic', route: '/datatables/basic', icon: '', roles: ['admin'] },
            { label: 'advanced', route: '/datatables/advanced', icon: '', roles: ['admin'] },
            { label: 'skin', route: '/datatables/skin', icon: '', roles: ['admin'] },
            { label: 'order_sorting', route: '/datatables/order-sorting', icon: '', roles: ['admin'] },
            { label: 'columns_filter', route: '/datatables/columns-filter', icon: '', roles: ['admin'] },
            { label: 'multi_column', route: '/datatables/multi-column', icon: '', roles: ['admin'] },
            { label: 'multiple_tables', route: '/datatables/multiple-tables', icon: '', roles: ['admin'] },
            { label: 'alt_pagination', route: '/datatables/alt-pagination', icon: '', roles: ['admin'] },
            { label: 'checkbox', route: '/datatables/checkbox', icon: '', roles: ['admin'] },
            { label: 'range_search', route: '/datatables/range-search', icon: '', roles: ['admin'] },
            { label: 'export', route: '/datatables/export', icon: '', roles: ['admin'] },
            { label: 'sticky_header', route: '/datatables/sticky-header', icon: '', roles: ['admin'] },
            { label: 'clone_header', route: '/datatables/clone-header', icon: '', roles: ['admin'] },
            { label: 'column_chooser', route: '/datatables/column-chooser', icon: '', roles: ['admin'] }
        ],
        roles: ['admin']
    },
    {
        label: 'forms',
        icon: '',
        children: [
            { label: 'basic', route: '/forms/basic', icon: '', roles: ['admin'] },
            { label: 'input_group', route: '/forms/input-group', icon: '', roles: ['admin'] },
            { label: 'layouts', route: '/forms/layouts', icon: '', roles: ['admin'] },
            { label: 'validation', route: '/forms/validation', icon: '', roles: ['admin'] },
            { label: 'input_mask', route: '/forms/input-mask', icon: '', roles: ['admin'] },
            { label: 'select2', route: '/forms/select2', icon: '', roles: ['admin'] },
            { label: 'touchspin', route: '/forms/touchspin', icon: '', roles: ['admin'] },
            { label: 'checkbox_and_radio', route: '/forms/checkbox-radio', icon: '', roles: ['admin'] },
            { label: 'switches', route: '/forms/switches', icon: '', roles: ['admin'] },
            { label: 'wizards', route: '/forms/wizards', icon: '', roles: ['admin'] },
            { label: 'file_upload', route: '/forms/file-upload', icon: '', roles: ['admin'] },
            { label: 'quill_editor', route: '/forms/quill-editor', icon: '', roles: ['admin'] },
            { label: 'markdown_editor', route: '/forms/markdown-editor', icon: '', roles: ['admin'] },
            { label: 'date_and_range_picker', route: '/forms/date-picker', icon: '', roles: ['admin'] },
            { label: 'clipboard', route: '/forms/clipboard', icon: '', roles: ['admin'] }
        ],
        roles: ['admin']
    },
    {
        label: 'documentation',
        icon: '',
        route: '/',
        roles: ['admin']
    }
];
