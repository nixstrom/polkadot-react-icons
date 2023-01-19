import * as React from 'react'
import { SVGProps } from 'react'
const AccountPortability = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 23"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M8.80473 8.7644L2 8.7644" stroke="black" />
		<path
			className="hello"
			d="M6.16985 11.6807L9.08611 8.7643L6.16985 5.84804"
			stroke="black"
			fill="none"
		/>
		<path
			d="M19.6117 9.64017L20.3804 8.71599C21.6924 7.13869 21.5873 4.82174 20.1379 3.36968C18.5861 1.81497 16.067 1.81497 14.5152 3.36968C13.0658 4.82174 12.9608 7.13869 14.2727 8.71599L15.0413 9.63998C15.5323 10.2302 15.251 11.1304 14.5113 11.3361L13.47 11.6257C10.6189 12.4185 8.64612 15.0149 8.64612 17.9741V20.8286H26V17.9692C26 15.0124 24.0291 12.4182 21.1806 11.6255L20.1415 11.3363C19.402 11.1305 19.1208 10.2304 19.6117 9.64017Z"
			stroke="black"
		/>
	</svg>
)
export default AccountPortability
