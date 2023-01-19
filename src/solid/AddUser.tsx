import * as React from 'react'
import { SVGProps } from 'react'
const AddUser = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 27 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M22.0031 7.00659V1.00659" stroke="black" />
		<path d="M25.0031 4.00659L19.0031 4.00659" stroke="black" />
		<path d="M8.55356 11.7489L7.64425 10.6557C6.09233 8.78997 6.21663 6.0493 7.93107 4.33168C9.7667 2.49264 12.7465 2.49264 14.5821 4.33168C16.2965 6.0493 16.4208 8.78997 14.8689 10.6557L13.9598 11.7487C13.3791 12.4469 13.7118 13.5117 14.5867 13.755L15.8184 14.0975C19.1909 15.0354 21.5245 18.1065 21.5245 21.607V24.2335C21.5245 24.6477 21.1887 24.9836 20.7745 24.9836H1.74719C1.33284 24.9836 0.996948 24.6477 0.996948 24.2333V21.6012C0.996948 18.1037 3.32823 15.035 6.69769 14.0973L7.92683 13.7553C8.80166 13.5118 9.13426 12.4471 8.55356 11.7489Z" />
	</svg>
)
export default AddUser
