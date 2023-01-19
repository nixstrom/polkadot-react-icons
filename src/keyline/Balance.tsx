import * as React from 'react'
import { SVGProps } from 'react'
const Balance = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M26 2H2V22.219H26V2Z" stroke="black" />
		<path
			d="M15.6374 8.8382H13.4541C13.0244 8.83934 12.6127 9.01097 12.309 9.31551C12.0054 9.62005 11.8346 10.0327 11.834 10.4631V10.4826C11.8346 10.913 12.0054 11.3256 12.309 11.6302C12.6127 11.9347 13.0244 12.1064 13.4541 12.1075H14.5371C14.7507 12.1067 14.9623 12.148 15.1599 12.2293C15.3575 12.3106 15.5371 12.4302 15.6884 12.5811C15.8398 12.7321 15.9598 12.9115 16.0418 13.1091C16.1237 13.3066 16.1659 13.5185 16.1659 13.7324C16.1664 13.9465 16.1248 14.1586 16.0432 14.3566C15.9617 14.5545 15.8419 14.7343 15.6907 14.8857C15.5396 15.0371 15.36 15.1571 15.1624 15.2388C14.9648 15.3205 14.753 15.3622 14.5393 15.3616H12.1719"
			stroke="black"
		/>
		<path d="M13.9959 8.79425V7.63696" stroke="black" />
		<path d="M13.9959 16.5815V15.514" stroke="black" />
	</svg>
)
export default Balance
