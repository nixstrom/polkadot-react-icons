import * as React from 'react'
import { SVGProps } from 'react'
const MobileApp = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 19 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0 1.33008C0 0.777793 0.447715 0.330078 1 0.330078H17.5109C18.0632 0.330078 18.5109 0.777793 18.5109 1.33008V25.3301C18.5109 25.8824 18.0632 26.3301 17.5109 26.3301H1C0.447715 26.3301 0 25.8824 0 25.3301V1.33008ZM8.30524 21.0425C7.75295 21.0425 7.30524 21.4902 7.30524 22.0425C7.30524 22.5948 7.75295 23.0425 8.30524 23.0425H10.205C10.7573 23.0425 11.205 22.5948 11.205 22.0425C11.205 21.4902 10.7573 21.0425 10.205 21.0425H8.30524Z"
		/>
	</svg>
)
export default MobileApp
