import * as React from 'react'
import { SVGProps } from 'react'
const Time = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0 13C0 5.8203 5.8203 0 13 0C20.1797 0 26 5.8203 26 13C26 20.1797 20.1797 26 13 26C5.8203 26 0 20.1797 0 13ZM14.0002 5.34783C14.0001 4.79554 13.5524 4.34783 13.0001 4.34784C12.4479 4.34784 12.0001 4.79556 12.0002 5.34785L12.0002 13.9227C12.0002 14.283 12.194 14.6154 12.5075 14.7929C12.821 14.9704 13.2058 14.9656 13.5147 14.7802L18.1301 12.0112C18.6037 11.727 18.7573 11.1128 18.4732 10.6392C18.189 10.1656 17.5748 10.012 17.1012 10.2961L14.0002 12.1566L14.0002 5.34783Z"
		/>
	</svg>
)
export default Time
