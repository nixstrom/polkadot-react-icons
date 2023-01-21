import * as React from 'react'
import { SVGProps } from 'react'
const Stablecoin = (props: SVGProps<SVGSVGElement>) => (
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
			d="M2 9C2 6.79086 3.79086 5 6 5C8.20914 5 10 6.79086 10 9C10 11.2091 8.20914 13 6 13C3.79086 13 2 11.2091 2 9ZM18 9C18 6.79086 19.7909 5 22 5C24.2091 5 26 6.79086 26 9C26 11.2091 24.2091 13 22 13C19.7909 13 18 11.2091 18 9ZM8.87079 22.75L12.7679 16H4C3.44771 16 3 15.5523 3 15C3 14.4477 3.44771 14 4 14H14.5H14.5276H24C24.5523 14 25 14.4477 25 15C25 15.5523 24.5523 16 24 16H16.2546L20.1304 22.7522C20.308 23.0616 20.3073 23.4423 20.1285 23.7511C19.9497 24.0599 19.6199 24.25 19.2631 24.25H9.73682C9.37955 24.25 9.04942 24.0594 8.87079 23.75C8.69216 23.4406 8.69216 23.0594 8.87079 22.75Z"
			stroke="none"
		/>
	</svg>
)
export default Stablecoin
