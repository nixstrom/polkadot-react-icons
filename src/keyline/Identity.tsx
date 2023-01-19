import * as React from 'react'
import { SVGProps } from 'react'
const Identity = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 27 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<rect
			x={1.46045}
			y={1.47864}
			width={24.079}
			height={25.0421}
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M7.23943 22.6682H19.7605"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
		<path
			d="M15.15 10.8446L15.6821 10.2128C16.6391 9.07668 16.5628 7.39603 15.5068 6.35126C14.3964 5.25263 12.6086 5.25263 11.4982 6.35126C10.4422 7.39603 10.3659 9.07668 11.3229 10.2128L11.8549 10.8445C12.2069 11.2624 12.0073 11.9044 11.4804 12.0491L10.7114 12.2603C8.66075 12.8235 7.23943 14.6878 7.23943 16.8144V18.8156H19.7605V16.8109C19.7605 14.6861 18.3406 12.8233 16.2918 12.2602L15.5244 12.0493C14.9976 11.9045 14.7981 11.2625 15.15 10.8446Z"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default Identity
