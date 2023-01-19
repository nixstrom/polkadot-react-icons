import * as React from 'react'
import { SVGProps } from 'react'
const Disconnected = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M11.4498 8.99997L6.72975 8.99997C4.11756 8.99997 1.99996 11.1176 1.99996 13.7298V13.7298C1.99996 16.342 4.11756 18.4596 6.72975 18.4596L11.4498 18.4596"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
		/>
		<path
			d="M16.4966 18.4971L21.2701 18.4971C23.8823 18.4971 25.9999 16.3795 25.9999 13.7673V13.7673C25.9999 11.1551 23.8823 9.03753 21.2701 9.03753L16.4966 9.03753"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
		/>
		<path
			d="M20.1082 13.7365L7.86182 13.7365"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
		/>
		<path
			d="M2.99982 2L24.9998 26"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
		/>
	</svg>
)
export default Disconnected
