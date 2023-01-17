import * as React from 'react'
import { SVGProps } from 'react'
const BackUp = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={28}
		height={28}
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0.75 14C0.75 6.68223 6.68223 0.75 14 0.75C21.3178 0.75 27.25 6.68223 27.25 14C27.25 20.8969 21.9806 26.563 15.2481 27.192L15.2481 12.3004L16.7823 13.832C17.2709 14.3198 18.0623 14.3191 18.5501 13.8305C19.0378 13.342 19.0371 12.5505 18.5486 12.0628L14.8831 8.40345C14.3949 7.91607 13.6042 7.91631 13.1163 8.40397L9.45404 12.0644C8.96577 12.5525 8.96557 13.3439 9.45361 13.8322C9.94164 14.3205 10.7331 14.3207 11.2214 13.8326L12.7481 12.3066V27.1916C6.01746 26.5609 0.75 20.8956 0.75 14Z"
		/>
	</svg>
)
export default BackUp
