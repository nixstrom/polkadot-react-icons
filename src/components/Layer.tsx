import * as React from 'react'
import { SVGProps } from 'react'
const Layer = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={29}
		height={29}
		viewBox="0 0 29 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g clipPath="url(#clip0_0_1959)">
			<path
				d="M21.0795 14.4643L25.5914 16.7899L14.5296 22.3075L3.06934 16.4003L7.57697 14.1519"
				stroke="black"
				strokeWidth={2.5}
				strokeMiterlimit={10}
				strokeLinejoin="round"
			/>
			<path
				d="M25.5914 12.2147L14.5296 17.7323L3.06934 11.825L14.1311 6.30737L25.5914 12.2147Z"
				stroke="black"
				strokeWidth={2.5}
				strokeMiterlimit={10}
				strokeLinejoin="round"
			/>
		</g>
		<defs>
			<clipPath id="clip0_0_1959">
				<rect
					width={28}
					height={28}
					fill="white"
					transform="translate(0.325195 0.307617)"
				/>
			</clipPath>
		</defs>
	</svg>
)
export default Layer
