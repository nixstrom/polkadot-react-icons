import * as React from 'react'
import { SVGProps } from 'react'
const CoolingPeriod = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<g>
			<path d="M26 26H2V3.88452H26V26Z" strokeMiterlimit={10} />
			<path d="M9.42337 6.34171V2" strokeMiterlimit={10} />
			<path d="M18.5764 6.34177V2.00006" strokeMiterlimit={10} />
			<path d="M19.2884 18.2949L17.1375 16.1441M17.1375 16.1441L19.2885 13.9931M17.1375 16.1441L11.1802 16.1441M9.00003 13.9931L11.1509 16.144L8.99999 18.295" />
			<path d="M11.9934 21.2884L14.1443 19.1375M14.1443 19.1375L16.2952 21.2885M14.1443 19.1375L14.1443 13.1802M16.2952 11L14.1443 13.1509L11.9934 11" />
		</g>
	</svg>
)
export default CoolingPeriod
