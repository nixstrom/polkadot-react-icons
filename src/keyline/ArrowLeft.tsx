import * as React from 'react'
import { SVGProps } from 'react'
const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={28}
		height={24}
		viewBox="0 0 28 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M3 11.9914L26 11.9914" fill="none" />
		<path d="M12.1997 22L2 11.9914L12.1997 2" fill="none" />
	</svg>
)
export default ArrowLeft
