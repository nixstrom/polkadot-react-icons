import * as React from 'react'
import { SVGProps } from 'react'
const QrCode = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M18.32 2.375H26V10.055" fill="none" data-nofill="true" />
		<path
			d="M9.67999 26.375L1.99999 26.375L1.99999 17.735"
			fill="none"
			data-nofill="true"
		/>
		<path
			d="M26 18.695L26 26.375L18.32 26.375"
			fill="none"
			data-nofill="true"
		/>
		<path d="M2 10.055L2 2.37496L9.68 2.37496" fill="none" data-nofill="true" />
		<path d="M12.0001 6.37503H6.00006V12.375H12.0001V6.37503Z" />
		<path d="M22.0002 6.37506H16.0002V12.3751H22.0002V6.37506Z" />
		<path d="M22.0002 16.375H16.0002V22.375H22.0002V16.375Z" />
		<path d="M12.0001 16.375H6.00012V22.375H12.0001V16.375Z" />
	</svg>
)
export default QrCode
