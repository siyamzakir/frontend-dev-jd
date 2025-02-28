export const demoMenus = [
    {
        id: 1,
        name: "Main Home",
        children: [
            {
                name: "Dashboard",
                id: 6,
                isActive: false,
                href: "#",
                target: "_self",
                icon: "<i class='icon-grid'></i>",
                children: [
                    {
                        id: 2,
                        name: "Home",
                        href: "#",
                        target: "_self",
                        isActive: false,
                    },
                    {
                        id: 3,
                        name: "Home Boxed",
                        href: "#",
                        target: "_self",
                        isActive: false,
                    },
                    {
                        id: 4,
                        name: "Home Menu Icon Hover",
                        href: "#",
                        target: "_self",
                        isActive: false,
                    },
                    {
                        id: 5,
                        name: "Home Menu Icon Default",
                        href: "#",
                        target: "_self",
                        isActive: false,
                    },
                ],
            },
        ],
    },
    {
        id: 8,
        name: "All Pages",
        children: [],
        /* children: [
            {
                id: 9,
                name: "eCommerce",
                href: "#",
                target: "_self",
                isActive: false,
                children: [
                    {
                        id: 10,
                        name: "All Products",
                        href: "#",
                        target: "_self",
                        isActive: false,
                    },
                    {
                        id: 11,
                        name: "Product Details",
                        href: "#",
                        target: "_self",
                        isActive: false,
                    },
                    {
                        id: 12,
                        name: "Add Product",
                        href: "#",
                        target: "_self",
                        isActive: false,
                    },
                ],
                icon: '<i class="icon-shopping-cart"></i>',
            },
            {
                id: 13,
                name: "Category",
                href: "#",
                target: "_self",
                isActive: false,
                children: [
                    {
                        id: 14,
                        name: "Add New Category",
                        href: "#",
                        target: "_self",
                        isActive: false,
                    },
                    {
                        id: 15,
                        name: "All Categories",
                        href: "#",
                        target: "_self",
                        isActive: false,
                    },
                ],
                icon: '<i class="icon-layers"></i>',
            },
            {
                id: 16,
                name: "Attributes",
                href: "#",
                target: "_self",
                isActive: false,
                children: [
                    {
                        id: 17,
                        name: "Add New Attribute",
                        href: "#",
                        target: "_self",
                        isActive: false,
                    },
                    {
                        id: 18,
                        name: "All Attributes",
                        href: "#",
                        target: "_self",
                        isActive: false,
                    },
                ],
                icon: '<i class="icon-box"></i>',
            },
            {
                id: 19,
                name: "Order",
                href: "#",
                target: "_self",
                isActive: false,
                icon: '<i class="icon-file-plus"></i>',
                children: [
                    {
                        id: 20,
                        name: "All Orders",
                        href: "#",
                        target: "_self",
                        isActive: false,
                    },
                    {
                        id: 21,
                        name: "Create Order",
                        href: "#",
                        target: "_self",
                        isActive: false,
                    },
                ],
            },
            {
                id: 22,
                name: "Roles",
                href: "#",
                target: "_self",
                isActive: false,
                icon: '<i class="icon-user-plus"></i>',
                children: [
                    {
                        id: 23,
                        name: "All Roles",
                        href: "#",
                        target: "_self",
                        isActive: false,
                    },
                    {
                        id: 24,
                        name: "Create Role",
                        href: "#",
                        target: "_self",
                        isActive: false,
                    },
                ],
            },
        ], */
    },
    {
        id: 25,
        name: "Settings",
        children: [
            /* {
                id: 26,
                name: "General",
                href: "#",
                target: "_self",
                isActive: false,
                icon: '<i class="icon-settings"></i>',
                children: [
                    {
                        id: 27,
                        name: "General Settings",
                        href: "#",
                        target: "_self",
                        isActive: false,
                    },
                    {
                        id: 28,
                        name: "Email Settings",
                        href: "#",
                        target: "_self",
                        isActive: false,
                    },
                ],
            },
            {
                id: 29,
                name: "Users",
                href: "#",
                target: "_self",
                isActive: false,
                icon: '<i class="icon-user"></i>',
                children: [
                    {
                        id: 30,
                        name: "All Users",
                        href: "#",
                        target: "_self",
                        isActive: false,
                    },
                    {
                        id: 31,
                        name: "Create User",
                        href: "#",
                        target: "_self",
                        isActive: false,
                    },
                ],
            }, */
            {
                id: 38,
                name: "Menu Category",
                href: "#",
                target: "_self",
                isActive: false,
                icon: `<i class="icon-layers"></i>`,
                children: [
                    {
                        id: 39,
                        name: "All Categories",
                        href: "/admin/menu-category",
                        target: "_self",
                        isActive: false,
                    },
                    {
                        id: 40,
                        name: "Create Category",
                        href: "/admin/menu-category/create", //create-menu",
                        target: "_self",
                        isActive: false,
                    },
                ],
            },
            {
                id: 35,
                name: "Admin Menus",
                href: "#",
                target: "_self",
                isActive: false,
                icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor"><path d="M624.6 325.2c-12.3-12.4-29.7-19.2-48.4-17.2-43.3-1-49.7-34.9-37.5-98.8 22.8-57.5-14.9-131.5-87.4-130.8-77.4 .7-81.7 82-130.9 82-48.1 0-54-81.3-130.9-82-72.9-.8-110.1 73.3-87.4 130.8 12.2 63.9 5.8 97.8-37.5 98.8-21.2-2.3-37 6.5-53 22.5-19.9 19.7-19.3 94.8 42.6 102.6 47.1 5.9 81.6-42.9 61.2-87.8-47.3-103.7 185.9-106.1 146.5-8.2-.1 .1-.2 .2-.3 .4-26.8 42.8 6.8 97.4 58.8 95.2 52.1 2.1 85.4-52.6 58.8-95.2-.1-.2-.2-.3-.3-.4-39.4-97.9 193.8-95.5 146.5 8.2-4.6 10-6.7 21.3-5.7 33 4.9 53.4 68.7 74.1 104.9 35.2 17.8-14.8 23.1-65.6 0-88.3zm-303.9-19.1h-.6c-43.4 0-62.8-37.5-62.8-62.8 0-34.7 28.2-62.8 62.8-62.8h.6c34.7 0 62.8 28.1 62.8 62.8 0 25-19.2 62.8-62.8 62.8z"/></svg>`,
                children: [
                    {
                        id: 37,
                        name: "All Menus",
                        href: "/admin/menus",
                        target: "_self",
                        isActive: false,
                    },
                    {
                        id: 36,
                        name: "Create Menu",
                        href: "/admin/menus/create", //create-menu",
                        target: "_self",
                        isActive: false,
                    },
                ],
            },
            /* {
                id: 32,
                name: "Location",
                href: "#",
                target: "_self",
                isActive: false,
                icon: '<i class="icon-map-pin"></i>',
                children: [
                    {
                        id: 33,
                        name: "All Locations",
                        href: "#",
                        target: "_self",
                        isActive: false,
                    },
                    {
                        id: 34,
                        name: "Create Location",
                        href: "#",
                        target: "_self",
                        isActive: false,
                    },
                ],
            }, */
        ],
    },
];
