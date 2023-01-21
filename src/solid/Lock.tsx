import * as React from 'react'
import { SVGProps } from 'react'
const Lock = (props: SVGProps<SVGSVGElement>) => (
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
			d="M7.12134 8.41856C7.12134 4.87369 9.99503 2 13.5399 2C17.0848 2 19.9585 4.87369 19.9585 8.41858L19.9585 9.66943H24.0798C24.6321 9.66943 25.0798 10.1171 25.0798 10.6694V26.0002C25.0798 26.5525 24.6321 27.0002 24.0798 27.0002H3C2.44772 27.0002 2 26.5525 2 26.0002V10.6694C2 10.1171 2.44772 9.66943 3 9.66943H7.12133L7.12134 8.41857V8.41856ZM17.9585 9.66943H9.12133L9.12134 8.41858L8.12134 8.41857H9.12134C9.12134 5.97826 11.0996 4 13.5399 4C15.9802 4 17.9585 5.97826 17.9585 8.41857L17.9585 9.66943Z"
			stroke="none"
		/>
	</svg>
)
export default Lock
