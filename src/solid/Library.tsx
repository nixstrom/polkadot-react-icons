import * as React from 'react'
import { SVGProps } from 'react'
const Library = (props: SVGProps<SVGSVGElement>) => (
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
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M16.1225 2.06911C15.5891 2.21205 15.2725 2.76039 15.4154 3.29386L21.6271 26.4761C21.77 27.0095 22.3184 27.3261 22.8518 27.1832L26.7155 26.1479C27.249 26.005 27.5656 25.4566 27.4226 24.9232L21.211 1.74094C21.068 1.20747 20.5197 0.890892 19.9862 1.03383L16.1225 2.06911ZM1.29297 0.999804C0.740684 0.999804 0.292969 1.44752 0.292969 1.9998V25.9998C0.292969 26.5521 0.740684 26.9998 1.29297 26.9998H5.29297C5.84525 26.9998 6.29297 26.5521 6.29297 25.9998V1.9998C6.29297 1.44752 5.84525 0.999804 5.29297 0.999804H1.29297ZM9 0.999804C8.44771 0.999804 8 1.44752 8 1.9998V25.9998C8 26.5521 8.44771 26.9998 9 26.9998H13C13.5523 26.9998 14 26.5521 14 25.9998V1.9998C14 1.44752 13.5523 0.999804 13 0.999804H9Z"
			stroke="none"
		/>
	</svg>
)
export default Library
