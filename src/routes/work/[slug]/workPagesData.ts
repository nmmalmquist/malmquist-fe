import phoneLandingAdminCode from '$lib/assets/portfolio/phone-admin-code-landing.jpg';
import phoneMenuAdminCode from '$lib/assets/portfolio/phone-admin-code-menu.jpg';
import phoneResourcesAdminCode from '$lib/assets/portfolio/phone-admin-code-resources.jpg';
import BRFM1 from '$lib/assets/portfolio/BRFM_Mobile_1.png';
import BRFM2 from '$lib/assets/portfolio/BRFM_Mobile_2.png';
import BRFM3 from '$lib/assets/portfolio/BRFM_Mobile_3.png';
import InsitelyVideo from '$lib/assets/videos/AdminCode.mov';
import BRFMVideo from '$lib/assets/videos/BRFM_Laptop_Video.mov';
import type { WorkPageData } from '$lib/types/WorkPageData';

export const WORK_PAGES_DATA: WorkPageData[] = [
	{
		id: 'cgi-insurance',
		heading: 'CGI',
		subtitle1: 'Industry',
		subtitle2: 'Insurance',
		rolesAndResponsibilities: ['Application Development & Code Design'],
		locationAndYear: 'Nashville, TN @ 2024',
		length: 'Present since November 2023',
		overview: ['This client is a large insurance company located in the south east U.S undergoing a digital transformation. This includes re-vamping their \
			marketing website, quote workflows, customer portal, policy holder application suite, etc.', 
			'We utilize Next.JS, Material UI, Github actions for CI/CD, and Azure for Virtual Private Network and Hosting.',
			'No more information can be shared as they are still a client of CGI.']
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
         The application was entirely serverless using Amazon Web Services. As the are still a client, no more information can be shared.'
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
	},
	{
		id: 'beckett-ridge-family-medicine',
		heading: 'Beckett Ridge Family Medicine',
		subtitle1: 'Private Practice',
		subtitle2: 'Family Medicine',
		rolesAndResponsibilities: ['Application Development', 'Development Operations'],
		locationAndYear: 'Remote - Cincinnati, Ohio @ 2024',
		length: '4 Months',
		overview: [
			`At Beckett Ridge Family Medicine, a multi-million dollar enterprise dedicated to the holistic health of patients\
			 in the Cincinnati, Ohio area, I developed a robust marketing website using the Go programming language. Leveraging\
			  Go's powerful concurrency model and simplicity, I ensured the project achieved optimal performance and efficiency,\
			   free from the unnecessary overhead often associated with bulky JavaScript front-end frameworks. By utilizing\
			    Go templates for front-end development and Tailwind CSS for styling, I created a seamless, responsive,\
				 and visually appealing user experience that aligns with the company's commitment to top-tier patient care\
				  and community wellness. The website is hosted on AWS on an EC2 instance.`
		],
		laptop1Link: BRFMVideo,
		externalLink: 'https://www.beckettridgefamilymedicine.com/',
		phonePicURLs: [BRFM1, BRFM2, BRFM3]
	}
];
