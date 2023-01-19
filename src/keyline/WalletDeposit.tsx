import * as React from 'react'
import { SVGProps } from 'react'
const WalletDeposit = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 23 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M20.9449 2H2V17.9603H20.9449V2Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M20.009 6.25403H14.2704C12.2125 6.25403 10.5443 7.92228 10.5443 9.98016C10.5443 12.0381 12.2125 13.7063 14.2704 13.7063H20.009C20.5317 13.7063 20.9555 13.2826 20.9555 12.7598V7.2005C20.9555 6.67778 20.5317 6.25403 20.009 6.25403Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M14.213 22.741L11.0732 26L7.93884 22.741"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
		/>
		<path d="M11.0732 25L11.0732 18.3316" stroke="black" strokeWidth={2.5} />
		<path
			d="M14.0181 10.0181L14 10"
			stroke="black"
			strokeWidth={2.5}
			strokeMiterlimit={10}
		/>
	</svg>
)
export default WalletDeposit
