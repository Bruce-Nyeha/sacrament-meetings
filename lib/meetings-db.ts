import type { SacramentMeeting } from './types'; 

const meetings: SacramentMeeting[] = [
    {
        id: 1,
        date: '2026-05-03',
        meetingType: 'regular',
        presiding: 'Bishop Smith',
        conducting: 'Brother Jones',
        openingHymn: { number: 2, title: 'The Spirit of God' },
        openingPrayer: 'Sister Williams',
        wardBusiness: [{ description: 'Sustaining of new Primary President' }],
        stakeBusiness: false,
        sacramentHymn: { number: 169, title: 'In Remembrance of Thy Suffering' },
        speakers: [
            { name: 'Sister Brown', topic: 'Faith in Jesus Christ', type: 'speaker' },
            { name: 'Youth Choir', topic: '', type: 'musical-number' }
        ],
        closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
        closingPrayer: 'Brother Davis',
        announcements: 'Ward temple night: May 10'
    },
    {
        id: 2,
        date: '2026-05-10',
        meetingType: 'testimony',
        presiding: 'Bishop Samuel',
        conducting: 'Brother Daniel',
        openingHymn: { number: 3, title: 'Now Let Us Rejoice' },
        openingPrayer: 'Sister Johnson',
        wardBusiness: [],
        stakeBusiness: false,
        sacramentHymn: { number: 100, title: 'I Stand All Amazed' },
        speakers: [],
        closingHymn: { number: 44, title: 'Come, Come, Ye Saints' },
        closingPrayer: 'Brother Davis',
        announcements: 'Gathering for youth activity: May 15'
    },
    {
        id: 3,
        date: '2026-05-17',
        meetingType: 'stake',      
        presiding: 'Stake President Johnson',
        conducting: 'Brother Smith',
        openingHymn: { number: 5, title: 'The Spirit of God' },
        openingPrayer: 'Sister Brown',
        wardBusiness: [],
        stakeBusiness: true,
        sacramentHymn: { number: 169, title: 'In Remembrance of Thy Suffering' },
        speakers: [
            { name: 'Stake Choir', topic: '', type: 'musical-number' },
            { name: 'Brother Thompson', topic: 'The Importance of Service', type: 'speaker' }
        ],
        closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
        closingPrayer: 'Sister Davis',
        announcements: 'Stake conference: May 20'
    },
    {
        id: 4,
        date: '2026-05-24',
        meetingType: 'general',
        presiding: 'President Anderson',
        conducting: 'Brother Lee',
        openingHymn: { number: 6, title: 'Come, Follow Me' },
        openingPrayer: 'Sister Martinez',
        wardBusiness: [],
        stakeBusiness: false,
        sacramentHymn: { number: 100, title: 'I Stand All Amazed' },
        speakers: [
            { name: 'Sister Wilson', topic: 'The Power of Prayer', type: 'speaker' },
            { name: 'Youth Choir', topic: '', type: 'musical-number' }
        ],
        closingHymn: { number: 44, title: 'Come, Come, Ye Saints' },
        closingPrayer: 'Brother Davis',
        announcements: 'Ward service project: May 30'
    }
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
    if (date) return meetings.filter(m => m.date === date);
    return meetings;
}

export function getMeetingsById(id: number): SacramentMeeting | null {
    return meetings.find(m => m.id === id) ?? null;
}
