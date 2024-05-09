import phoneLandingAdminCode from '$lib/assets/portfolio/phone-admin-code-landing.jpg';
import phoneMenuAdminCode from '$lib/assets/portfolio/phone-admin-code-menu.jpg';
import phoneResourcesAdminCode from '$lib/assets/portfolio/phone-admin-code-resources.jpg';
import InsitelyVideo from '$lib/assets/videos/AdminCode.mov';
import type { WorkPageData } from '$lib/types/WorkPageData';

export const WORK_PAGES_DATA: WorkPageData[] = [
	{
		id: 'cgi-insurance',
		heading: 'CGI',
		subtitle1: 'Industry',
		subtitle2: 'Insurance',
		rolesAndResponsibilities: ['Application Development & Code Design'],
		locationAndYear: 'Nashville, TN @ 2024',
		length: 'Currently working...',
		overview: ['Overview data']
	},
	{
		id: 'cgi-accounting',
		heading: 'CGI',
		subtitle1: 'Industry',
		subtitle2: 'Accounting',
		rolesAndResponsibilities: ['Application Development'],
		locationAndYear: 'Nashville, TN @ 2023',
		length: '4 months',
		overview: [
			'This client with CGI was in the accounting industry. The project was to create a registration system for the company.\
         The application was entirely serverless usin Amazon Web Services.'
		]
	},
	{
		id: 'mbusi',
		heading: 'Mercedez-Benz U.S International',
		subtitle1: 'MBUSI',
		subtitle2: 'RPA Development',
		rolesAndResponsibilities: ['RPA Developer & Business Analyst'],
		locationAndYear: 'Vance, AL @ 2021 - 2022',
		length: '10 months',
		overview: [
			'I automated many repetitive accounting tasks that required multiple manual hours a week by accounting professionals. We used BluePrism as the main RPA development tool.'
		]
	},
	{
		id: 'insitely',
		heading: 'Insitely',
		subtitle1: 'State of Alabama Legislature',
		subtitle2: 'Admin Code',
		rolesAndResponsibilities: ['Capstone Application Development Support'],
		locationAndYear: 'Tuscaloosa, AL @ 2023',
		length: '4 Months',
		overview: [
			'Insitely is a technology consulting company that teamed up with The \
            University of Alabama to give senior capstone students the opportunity \
         to contribute to an enterprise level application. The ongoing project at Insitely was for the U.S Alabama Legislature.\
          They needed a website to manage all of the Admin Code, \
         thus making their record keeping system electronic while increasing outreach to stake holders needing access and/or modifiy the admin code. ',
			'Being in the UA capstone program, I led a team of 4 to contribute 3 main features to the application. The features include and File CRUD system,\
             blog style pages, search for Agencies, mobile nav, and some of the footer '
		],
		laptop1Link: InsitelyVideo,
		externalLink: 'https://admincode.legislature.state.al.us/',
		phonePicURLs: [phoneLandingAdminCode, phoneResourcesAdminCode, phoneMenuAdminCode]
	}
];
