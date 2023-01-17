import * as React from 'react'
import { SVGProps } from 'react'
const Remove = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={26}
		height={26}
		viewBox="0 0 26 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26C20.1797 26 26 20.1797 26 13ZM7.80075 14.0774C7.24847 14.0744 6.80318 13.6243 6.80617 13.072C6.80915 12.5197 7.25928 12.0744 7.81156 12.0774L18.2011 12.1336C18.7534 12.1366 19.1987 12.5867 19.1957 13.139C19.1927 13.6912 18.7426 14.1365 18.1903 14.1335L7.80075 14.0774Z"
		/>
	</svg>
)
export default Remove
