import * as React from 'react'
import { SVGProps } from 'react'
const RelayChain = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M14 26C20.6274 26 26 20.6274 26 14C26 7.37258 20.6274 2 14 2C7.37258 2 2 7.37258 2 14C2 20.6274 7.37258 26 14 26Z" />
		<path d="M14 18C16.2091 18 18 16.2091 18 14C18 11.7909 16.2091 10 14 10C11.7909 10 10 11.7909 10 14C10 16.2091 11.7909 18 14 18Z" />
		<path d="M14.0078 6.01711L13.9907 6" strokeMiterlimit={10} />
		<path d="M14.0078 22L13.9907 21.9829" strokeMiterlimit={10} />
		<path d="M21.9834 14.0086L22.0005 13.9915" strokeMiterlimit={10} />
		<path d="M6 14.0086L6.01711 13.9915" strokeMiterlimit={10} />
		<path d="M19.6507 8.36254L19.6507 8.33691" strokeMiterlimit={10} />
		<path d="M8.34877 19.6641L8.34877 19.6385" strokeMiterlimit={10} />
		<path d="M19.6379 19.6513L19.6636 19.6513" strokeMiterlimit={10} />
		<path d="M8.33596 8.34973L8.36159 8.34973" strokeMiterlimit={10} />
	</svg>
)
export default RelayChain
