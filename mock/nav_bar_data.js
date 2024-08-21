import React from 'react';
export const nav_bar_dataMock = {
    navs: [
        { id: '1',
          title: 'Trang chủ'
        },
        {
            id: '2',
            title: 'Hoạt động'
        },
        {
            id: '3',
            title: 'Câu lạc bộ'
        },
        {
            id: '4',
            title: 'Công việc'
        }
    ],
    icons: [
        {
            id: '1',
            link: (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="1.5rem"
                height="1.5rem"
                className="text-blue-500 h-8 w-8 hover:text-blue-700"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
                        clipRule="evenodd"
                    />
                </svg>
            )
        },
        {
            id: '2',
            link: (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="1.5rem"
                height="1.5rem"
                className="text-blue-500 h-8 w-8 hover:text-blue-700"
            >
                    <path
                        fillRule="evenodd"
                        d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 0 0-.266.112L8.78 21.53A.75.75 0 0 1 7.5 21v-3.955a48.842 48.842 0 0 1-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z"
                        clipRule="evenodd"
                    />
                </svg>
            )
        },
        {
            id: '3',
            link: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="1.5rem"
                    height="1.5rem"
                    className="text-blue-500 hover:text-blue-700"
                >
                    <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                    />
                </svg>
            )
        }
    ],
    
     HamburgerIcon : {
        link: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                width="1.5rem"
                height="1.5rem"
                className="hover:text-blue-700"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
                />
            </svg>
        )
    }
    
    
}