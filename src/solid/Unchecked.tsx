import * as React from 'react'
import { SVGProps } from 'react'
const Unchecked = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 29 29"
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
			d="M1.97656 2.08008C1.97656 1.52779 2.42428 1.08008 2.97656 1.08008H26.9766C27.5288 1.08008 27.9766 1.52779 27.9766 2.08008V26.0801C27.9766 26.6324 27.5288 27.0801 26.9766 27.0801H2.97656C2.42428 27.0801 1.97656 26.6324 1.97656 26.0801V2.08008ZM3.97656 3.08008V25.0801H25.9766V3.08008H3.97656Z"
			stroke="none"
		/>
	</svg>
)
export default Unchecked
