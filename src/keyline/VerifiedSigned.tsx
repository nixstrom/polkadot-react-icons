import * as React from 'react'
import { SVGProps } from 'react'
const VerifiedSigned = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 29 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M23.7977 18.8845L27.5541 16.0759L24.6776 12.4389L25.6682 7.90114L21.1003 6.88196L18.8608 2.73581L14.7391 4.80927L10.315 2.99604L8.5659 7.19308L4.03035 8.56006L5.47433 12.9155L2.94779 16.8249L6.90883 19.3033L7.57423 23.9244L12.1973 23.3636L15.7447 26.5351L18.8686 23.1989L23.637 23.4364L23.7977 18.8845Z"
			stroke="black"
			strokeMiterlimit={10}
		/>
		<path
			d="M10.5771 14.3475L13.7592 17.3196L19.5911 11.421"
			stroke="black"
			fill="none"
		/>
	</svg>
)
export default VerifiedSigned
