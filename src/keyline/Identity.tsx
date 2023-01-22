import * as React from 'react'
import { SVGProps } from 'react'
const Identity = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 29 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M13.8545 20.2304C18.7322 20.2304 22.6855 16.2762 22.6855 11.3994C22.6855 6.52259 18.7322 2.56836 13.8545 2.56836C8.97671 2.56836 5.02344 6.52259 5.02344 11.3994C5.02344 16.2762 8.97767 20.2304 13.8545 20.2304Z"
			strokeMiterlimit={10}
		/>
		<path
			d="M19.7679 17.9447C18.612 18.9901 17.1845 19.7389 15.5967 20.0567L19.3551 26.5684L23.3967 24.2346L19.7679 17.9447Z"
			strokeMiterlimit={10}
		/>
		<path d="M20.0234 17.5684V16.7297C20.0234 14.8227 18.659 13.15 16.6877 12.6393L15.9673 12.4523C15.4554 12.3201 15.2606 11.74 15.6003 11.3597L16.1318 10.7641C17.0391 9.74814 16.9667 8.25515 15.9644 7.31941C14.8916 6.31801 13.1494 6.31801 12.0766 7.31941C11.0743 8.25515 11.0019 9.74814 11.9092 10.7641L12.4407 11.3597C12.7804 11.74 12.5866 12.3201 12.0747 12.4523L11.3562 12.6384C9.38592 13.1491 8.02344 14.8208 8.02344 16.7261L8.02344 17.5684" />
	</svg>
)
export default Identity
