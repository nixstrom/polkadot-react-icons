import * as React from 'react'
import { SVGProps } from 'react'
const Isolated = (props: SVGProps<SVGSVGElement>) => (
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
			d="M17.1279 4.99121C17.1279 7.47649 19.1426 9.49121 21.6279 9.49121C24.1132 9.49121 26.1279 7.47649 26.1279 4.99121C26.1279 2.50593 24.1132 0.491211 21.6279 0.491211C19.1426 0.491211 17.1279 2.50593 17.1279 4.99121ZM4.62793 15.4912C2.14265 15.4912 0.12793 13.4765 0.12793 10.9912C0.12793 8.50593 2.14265 6.49121 4.62793 6.49121C7.11321 6.49121 9.12793 8.50593 9.12793 10.9912C9.12793 13.4765 7.11321 15.4912 4.62793 15.4912ZM0.12793 21.9912C0.12793 24.4765 2.14265 26.4912 4.62793 26.4912C7.11321 26.4912 9.12793 24.4765 9.12793 21.9912C9.12793 19.5059 7.11321 17.4912 4.62793 17.4912C2.14265 17.4912 0.12793 19.5059 0.12793 21.9912ZM11.1279 21.9912C11.1279 24.4765 13.1426 26.4912 15.6279 26.4912C18.1132 26.4912 20.1279 24.4765 20.1279 21.9912C20.1279 19.5059 18.1132 17.4912 15.6279 17.4912C13.1426 17.4912 11.1279 19.5059 11.1279 21.9912Z"
		/>
	</svg>
)
export default Isolated
