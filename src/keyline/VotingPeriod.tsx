import * as React from 'react'
import { SVGProps } from 'react'
const VotingPeriod = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={28}
		height={28}
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M26.0027 25.9999L1.99998 25.9999L2.00009 5.22553L26.0027 5.22553L26.0027 25.9999Z" />
		<path d="M8.36707 6.6583V2" />
		<path d="M19.681 6.6583V2" />
		<path d="M15.3665 8.64696L6.72153 17.292L11.2508 21.8212L14.7127 21.8212L21.6267 14.9071L15.3665 8.64696Z" />
		<path d="M21.6031 21.8198L6.07577 21.8198" strokeMiterlimit={10} />
	</svg>
)
export default VotingPeriod
