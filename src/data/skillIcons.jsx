import React from 'react';

// This file contains high-quality SVG logos for individual skills.

export const SKILL_ICONS = {
    Python: (props) => (
        <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
            <path fill="#3776AB" d="M64 128c35.346 0 64-28.654 64-64S99.346 0 64 0 0 28.654 0 64s28.654 64 64 64z"/>
            <path fill="#FFD43B" d="M64 95.3c-14.237 0-21.2-8.188-21.2-16.9V64h12.6v14.4c0 4.612 2.562 8.1 8.6 8.1s8.6-3.488 8.6-8.1V64h12.6v14.4c0 8.712-6.963 16.9-21.2 16.9zM42.8 50.5c0-8.713 6.963-16.9 21.2-16.9s21.2 8.187 21.2 16.9V64H73.6V50.5c0-4.612-2.563-8.1-8.6-8.1s-8.6 3.488-8.6 8.1V64H42.8V50.5z"/>
            <circle fill="#fff" cx="54.4" cy="84.9" r="4.2"/>
            <circle fill="#fff" cx="73.6" cy="43.1" r="4.2"/>
        </svg>
    ),
    RStudio: (props) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10.5" fill="#75AADB" stroke="#5A95C5" strokeWidth="1"/>
            <path d="M9.5 17V7h4c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2h-4Zm1.5-1.5h2.5c.28 0 .5-.22.5-.5v-5c0-.28-.22-.5-.5-.5H11v6Z" fill="white"/>
        </svg>
    ),
    AWS: (props) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.3 15.2c.4-.2.8-.4 1.2-.7 1.5-1 2-2.7 1.6-4.4-.3-1.5-1.7-2.6-3.3-2.6-1.2 0-2.3.6-2.9 1.6-.6 1-.7 2.2-.4 3.3.3 1.2 1.2 2.1 2.4 2.5.5.2 1 .3 1.4.3Z" fill="#FF9900"/>
            <path d="M16.4 18.3c-1.1 0-2.2-.3-3.2-.8-.4-.2-.8-.4-1.2-.7-.5-.3-1-.5-1.5-.5-.7 0-1.4.4-1.8 1-.4.7-.4 1.5.1 2.2.5.7 1.3 1 2.2 1h7.8c1.3 0 2.5-.8 3-2.1.5-1.3.1-2.8-1-3.7-.4-.4-.9-.7-1.4-.9Z" fill="#232F3E"/>
        </svg>
    ),
    Figma: (props) => (
         <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="#F24E1E"></path>
            <path d="M9 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" fill="#FF7262"></path>
            <path d="M9 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" fill="#A259FF"></path>
            <path d="M15 9a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z" fill="#1ABCFE"></path>
            <path d="M15 15a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" fill="#0ACF83"></path>
        </svg>
    ),
    Excel: (props) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2h20v20H2V2Z" fill="#107C41"></path>
            <path d="m15.5 12-3.5 4h-2.5l3.5-4-3.5-4h2.5l3.5 4Z" fill="white"></path>
        </svg>
    ),
    Asana: (props) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="7" r="3" fill="#FB92A4"/>
            <circle cx="18" cy="17" r="3" fill="#FB92A4"/>
            <circle cx="6" cy="17" r="3" fill="#FB92A4"/>
        </svg>
    ),
    Notion: (props) => (
        <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5,3h-10C3.67,3,3,3.67,3,4.5v15C3,20.33,3.67,21,4.5,21h15c0.83,0,1.5-0.67,1.5-1.5V9.41l-6.5-6.41z M14,10h5v9H5V5h8v5H14z M7,8v2h6V8H7z M7,12v2h6v-2H7z M7,16v2h4v-2H7z"/>
        </svg>
    ),
    MongoDB: (props) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,18c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S15.31,18,12,18z" fill="#47A248"/>
            <path d="M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4c1.1,0,2.1-0.45,2.83-1.17C14.45,15.1,14,16,12.5,16c-2.21,0-4-1.79-4-4s1.79-4,4-4c1.5,0,2.8,0.84,3.5,2.06C14.8,8.45,13.45,8,12,8z" fill="#3FA037"/>
        </svg>
    ),
};
