import * as React from 'react'
import { SVGProps } from 'react'
const Session = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 21 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M14.5998 1.01227C14.5998 1.56455 14.1521 2.01227 13.5998 2.01227L11.4367 2.01227V5.36492C16.6217 5.91699 20.6606 10.3052 20.6606 15.6367C20.6606 21.3419 16.0356 25.9669 10.3303 25.9669C4.62503 25.9669 0 21.3419 0 15.6367C0 10.2324 4.14981 5.79747 9.43668 5.34447V2.01227L7.30139 2.01227C6.74911 2.01227 6.30139 1.56455 6.30139 1.01227C6.30139 0.459984 6.74911 0.0122685 7.30139 0.0122685L10.2796 0.012268C10.3308 0.00419301 10.3832 0 10.4367 0C10.4901 0 10.5426 0.00419298 10.5938 0.012268L13.5998 0.0122675C14.1521 0.0122674 14.5998 0.459983 14.5998 1.01227ZM10.4508 9.26596C9.89856 9.26596 9.45084 9.71368 9.45084 10.266V15.7494L7.38768 18.2528C7.03644 18.679 7.0972 19.3092 7.5234 19.6605C7.9496 20.0117 8.57984 19.951 8.93109 19.5248L11.2225 16.7443C11.3701 16.5652 11.4508 16.3404 11.4508 16.1083V10.266C11.4508 9.71368 11.0031 9.26596 10.4508 9.26596Z"
		/>
	</svg>
)
export default Session
