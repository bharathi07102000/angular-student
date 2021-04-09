import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit } from '@angular/core';

//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    collapse?: string;
    icontype: string;
    // icon: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [{
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'nc-icon nc-bank'
    },{
        path: '/components',
        title: 'Resourses',
        type: 'sub',
        collapse: 'components',
        icontype: 'nc-icon nc-layout-11',
        children: [
            {path: 'grid', title: 'UG', ab:'*'},
            {path: 'panels', title: 'PG', ab:'*'},
            // {path: 'buttons', title: 'Area', ab:'A'},
            // {path: 'sweet-alert', title: 'Categories', ab:'C'},
            // {path: 'icons', title: 'Settings', ab:'S'}
        ]
    },{
        path: '/forms',
        title: 'Laboratory',
        type: 'sub',
        collapse: 'forms',
        icontype: 'nc-icon nc-ruler-pencil',
        children: [
            {path: 'regular', title: 'UG', ab:'*'},
            {path: 'extended', title: 'PG', ab:'*'},
            // {path: 'validation', title: 'Validation Forms', ab:'VF'},
            // {path: 'wizard', title: 'Wizard', ab:'W'}
        ]
    },{
        path: '/tables',
        title: 'Schedules',
        type: 'sub',
        collapse: 'tables',
        icontype: 'nc-icon nc-single-copy-04',
        children: [
            {path: 'regular', title: 'class', ab:'CT'},
            {path: 'extended', title: 'Internal', ab:'IAT'},
            {path: 'datatables.net', title: 'Semester', ab:'SE'}
        ]
     },
    //  {
    //     path: '/maps',
    //     title: 'Maps',
    //     type: 'sub',
    //     collapse: 'maps',
    //     icontype: 'nc-icon nc-pin-3',
    //     children: [
    //         {path: 'google', title: 'Google Maps', ab:'GM'},
    //         {path: 'fullscreen', title: 'Full Screen Map', ab:'FSM'},
    //         {path: 'vector', title: 'Vector Map', ab:'VM'}
    //     ]
    // },
    {
        path: '/widgets',
        title: 'Placement',
        type: 'link',
        icontype: 'nc-icon nc-box'

    },
    // {
    //     path: '/charts',
    //     title: 'Charts',
    //     type: 'link',
    //     icontype: 'nc-icon nc-chart-bar-32'

    // },{
    //     path: '/calendar',
    //     title: 'Calendar',
    //     type: 'link',
    //     icontype: 'nc-icon nc-calendar-60'
    // },{
    //     path: '/pages',
    //     title: 'Pages',
    //     collapse: 'pages',
    //     type: 'sub',
    //     icontype: 'nc-icon nc-book-bookmark',
    //     children: [
    //         {path: 'timeline', title: 'Timeline Page', ab:'T'},
    //         {path: 'user', title: 'User Page', ab:'UP'},
    //         {path: 'login', title: 'Login Page', ab:'LP'},
    //         {path: 'register', title: 'Register Page', ab:'RP'},
    //         {path: 'lock', title: 'Lock Screen Page', ab:'LSP'}
    //     ]
    // }
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent {
    public menuItems: any[];
    isNotMobileMenu(){
        if( window.outerWidth > 991){
            return false;
        }
        return true;
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    ngAfterViewInit(){
    }
}
