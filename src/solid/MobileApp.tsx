import * as React from 'react'
import { SVGProps } from 'react'
const MobileApp = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 19 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M1.51758 0.94458H17.1695C17.7218 0.94458 18.1695 1.3923 18.1695 1.94458V25.6031C18.1695 26.1554 17.7218 26.6031 17.1695 26.6031H1.51758C0.965293 26.6031 0.517578 26.1554 0.517578 25.6031V1.94458C0.517578 1.3923 0.965293 0.94458 1.51758 0.94458ZM8.32817 22.0883C7.77589 22.0883 7.32817 22.536 7.32817 23.0883C7.32817 23.6406 7.77589 24.0883 8.32817 24.0883H10.3593C10.9116 24.0883 11.3593 23.6406 11.3593 23.0883C11.3593 22.536 10.9116 22.0883 10.3593 22.0883H8.32817Z"
		/>
	</svg>
)
export default MobileApp
