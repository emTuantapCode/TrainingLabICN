export const agendaMock = {
    when: {
        title: 'When',
        date:'Tuesday, 27 March', //dayofweek, day month
        start_time: '10:00', //Can edit
        end_time: '15:00', //Can edit
        zone_code: 'AEDT'
    },
    where: {
        title: 'Where',
        location: 'Canberra',
        description: 'Microsoft Offices<br />Level 4, HWL Ebsworth Lawyers Building<br />6 National Circuit<br />Barton, ACT 2600', //Can edit
        link: {
            url: '',
            url_text: 'Register for another city'
        }
    },
    what: {
        title: 'Agenda',
        icon:(<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-3.5 left-0 -translate-x-1/2 -translate-y-1/2">
            <path d="M0.571797 4.28867L7 0.57735L13.4282 4.28867V11.7113L7 15.4226L0.571797 11.7113V4.28867Z" stroke="#9CF3FA"/>
            </svg>),
        items: [
            {   id: '1',
                title: 'Registration',
                description: 'Light refreshments'
            },
            {   id: '2',
                title: 'Microsoft keynote',
                time: '15 mins'
            },
            {   id: '3',
                title: 'The modern threat landscape',
                time: '15 mins',
                description: 'A presentation on the threats and advantages of AI, and the steps you can take to protect your business.'
            },
            {   id: '4',
                title: 'AI-Assisted Defence',
                time: '15 mins',
                description: 'A demonstration of Microsofts new AI Security Copilot.'
            },
            {   id: '5',
                title: 'Bridging the Cyber Security Skills Gap',
                time: '30 mins',
                description: 'Microsoft and LAB³ answer your questions and provide guidance on meeting modern cybersecurity challenges.'
            },
            {   id: '6',
                title: 'Close and Networking',
                time: '10 mins',
                description: 'Microsoft and LAB³ answer your questions and provide guidance on meeting modern cybersecurity challenges.',
            }
        ]
    }   
}