import * as React from 'react'
import { SVGProps } from 'react'
const SignATransaction = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M9.31907 24.7504H1.28955"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
		<path
			d="M22.6599 11.3802L26.0364 14.7567L17.6232 23.17L13.1 24.3123L14.2467 19.7935L22.6599 11.3802Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M12.9304 2.00269L16.2097 5.28203L12.9304 8.56689"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
		/>
		<path
			d="M15.3611 5.28467L1.95577 5.28468"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M5.23512 15.1311L1.95577 11.8462L5.23512 8.56689"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
		/>
		<path
			d="M2.76658 11.8463L16.2054 11.8463"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default SignATransaction
