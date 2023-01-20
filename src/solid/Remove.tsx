import * as React from 'react'
import { SVGProps } from 'react'
const Remove = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 27 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0.988281 13.375C0.988281 20.5547 6.80858 26.375 13.9883 26.375C21.168 26.375 26.9883 20.5547 26.9883 13.375C26.9883 6.1953 21.168 0.375 13.9883 0.375C6.80858 0.375 0.988281 6.1953 0.988281 13.375ZM8.78893 14.3154C8.23666 14.3124 7.79137 13.8623 7.79436 13.31C7.79734 12.7577 8.24747 12.3125 8.79975 12.3154L19.1893 12.3716C19.7416 12.3746 20.1869 12.8247 20.1839 13.377C20.1809 13.9293 19.7308 14.3746 19.1785 14.3716L8.78893 14.3154Z"
		/>
	</svg>
)
export default Remove
