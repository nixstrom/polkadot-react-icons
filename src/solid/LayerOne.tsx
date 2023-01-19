import * as React from 'react'
import { SVGProps } from 'react'
const LayerOne = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 24 14"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M23.2472 5.91599C23.975 6.29116 23.9681 7.33422 23.2353 7.69971L12.6838 12.9628C12.3986 13.1051 12.0626 13.1028 11.7793 12.9568L0.752839 7.27315C0.0250039 6.89799 0.0319157 5.85492 0.764657 5.48943L11.3162 0.226346C11.6014 0.0840724 11.9374 0.086298 12.2207 0.232338L23.2472 5.91599Z" />
	</svg>
)
export default LayerOne
