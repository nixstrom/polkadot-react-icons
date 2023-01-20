import * as React from 'react'
import { SVGProps } from 'react'
const Success = (props: SVGProps<SVGSVGElement>) => (
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
			d="M0 13C0 5.8203 5.8203 0 13 0C20.1797 0 26 5.8203 26 13C26 20.1797 20.1797 26 13 26C5.8203 26 0 20.1797 0 13ZM19.4659 9.78706C19.8542 9.39432 19.8506 8.76116 19.4579 8.37287C19.0651 7.98457 18.432 7.98817 18.0437 8.38091L12.1143 14.3781L9.21652 11.6715C8.81291 11.2946 8.18011 11.3162 7.80313 11.7198C7.42615 12.1234 7.44774 12.7562 7.85135 13.1332L11.4595 16.5032C11.855 16.8726 12.4727 16.8603 12.8532 16.4755L19.4659 9.78706Z"
		/>
	</svg>
)
export default Success
