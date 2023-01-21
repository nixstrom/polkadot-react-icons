import * as React from 'react'
import { SVGProps } from 'react'
const XcmMessage = (props: SVGProps<SVGSVGElement>) => (
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
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M6.61535 9C3.51408 9 1 11.5141 1 14.6154C1 17.7166 3.51408 20.2307 6.61535 20.2307C9.37434 20.2307 11.6686 18.241 12.1414 15.6182L15.7693 15.6182V19.2307C15.7693 19.783 16.217 20.2307 16.7693 20.2307H26C26.5523 20.2307 27 19.783 27 19.2307V10C27 9.44772 26.5523 9 26 9H16.7693C16.217 9 15.7693 9.44772 15.7693 10V13.6182L12.1424 13.6182C11.6719 10.9926 9.37631 9 6.61535 9ZM22.3847 14.6182C22.3847 14.0659 21.937 13.6182 21.3847 13.6182L15.7758 13.6182V15.6182L21.3847 15.6182C21.937 15.6182 22.3847 15.1704 22.3847 14.6182Z"
			stroke="none"
		/>
	</svg>
)
export default XcmMessage
