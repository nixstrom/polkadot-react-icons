import * as React from 'react'
import { SVGProps } from 'react'
const ArrowUp = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 22 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M20.2856 11.8995C20.6721 12.294 21.3052 12.3006 21.6998 11.9141C22.0943 11.5276 22.1008 10.8945 21.7144 10.5L11.723 0.300227C11.535 0.108317 11.2777 0.000116007 11.0091 0C10.7404 -0.000115938 10.483 0.107863 10.2949 0.299611L0.286239 10.4993C-0.100575 10.8935 -0.0945878 11.5267 0.299613 11.9135C0.693813 12.3003 1.32695 12.2943 1.71376 11.9001L10.0086 3.4469L10.0086 25C10.0086 25.5523 10.4563 26 11.0086 26C11.5609 26 12.0086 25.5523 12.0086 25L12.0086 3.44986L20.2856 11.8995Z"
		/>
	</svg>
)
export default ArrowUp
