import * as React from 'react'
import { SVGProps } from 'react'
const Users = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M9.95233 11.4719L8.92866 10.2412C7.18155 8.14076 7.32148 5.05539 9.25155 3.12174C11.318 1.05141 14.6726 1.05141 16.7391 3.12174C18.6691 5.05539 18.8091 8.14076 17.062 10.2412L16.0385 11.4716C15.3847 12.2576 15.7593 13.4563 16.7443 13.7303L18.1309 14.1159C21.9276 15.1717 24.5547 18.6291 24.5547 22.5698V26.371H1.44531V22.5633C1.44531 18.6259 4.06981 15.1713 7.86305 14.1156L9.24678 13.7306C10.2316 13.4565 10.6061 12.2578 9.95233 11.4719Z"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default Users
