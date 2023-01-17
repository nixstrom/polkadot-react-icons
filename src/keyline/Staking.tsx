import * as React from 'react'
import { SVGProps } from 'react'
const Staking = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={26}
		height={22}
		viewBox="0 0 26 22"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M24 9.95803V13C24 17.0501 19.0751 19.875 13 19.875C6.92487 19.875 2 17.0501 2 13V9.95803" />
		<path d="M13 16.6667C19.0751 16.6667 24 13.3834 24 9.33333C24 5.28325 19.0751 2 13 2C6.92487 2 2 5.28325 2 9.33333C2 13.3834 6.92487 16.6667 13 16.6667Z" />
		<path d="M10 10.5335L13.178 12.9725L16.356 10.5335" />
		<path d="M13.1998 12.203L13.1998 6" />
	</svg>
)
export default Staking
