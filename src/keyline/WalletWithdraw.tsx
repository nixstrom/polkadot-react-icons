import * as React from 'react'
import { SVGProps } from 'react'
const WalletWithdraw = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 23 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M20.8458 10.1229H1.99995V25.9998H20.8458V10.1229Z" />
		<path d="M19.9147 14.3546H14.2061C12.159 14.3546 10.4995 16.0141 10.4995 18.0613C10.4995 20.1084 12.159 21.7679 14.2061 21.7679H19.9147C20.4347 21.7679 20.8562 21.3464 20.8562 20.8264V15.2961C20.8562 14.7761 20.4347 14.3546 19.9147 14.3546Z" />
		<path
			d="M11.7695 9.62805L11.7695 3M8.64611 5.24169L11.7695 1.99976L14.8874 5.24169"
			fill="none"
			data-nofill="true"
		/>
		<path d="M14.0181 18.0181L14 18" strokeMiterlimit={10} />
	</svg>
)
export default WalletWithdraw
