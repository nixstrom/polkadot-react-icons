import * as React from 'react'
import { SVGProps } from 'react'
const Remove = (props: SVGProps<SVGSVGElement>) => (
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
			d="M1.98828 14.375C1.98828 21.5547 7.80858 27.375 14.9883 27.375C22.168 27.375 27.9883 21.5547 27.9883 14.375C27.9883 7.1953 22.168 1.375 14.9883 1.375C7.80858 1.375 1.98828 7.1953 1.98828 14.375ZM9.78893 15.3154C9.23666 15.3124 8.79137 14.8623 8.79436 14.31C8.79734 13.7577 9.24747 13.3125 9.79975 13.3154L20.1893 13.3716C20.7416 13.3746 21.1869 13.8247 21.1839 14.377C21.1809 14.9293 20.7308 15.3746 20.1785 15.3716L9.78893 15.3154Z"
			stroke="none"
		/>
	</svg>
)
export default Remove
