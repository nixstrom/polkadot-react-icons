import * as React from 'react'
import { SVGProps } from 'react'
const DerivationPath = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M5.57671 18.5456L5.57671 14.3724L22.2757 14.3724L22.2757 18.6534"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
		/>
		<path
			d="M14.0215 9.44831L14.0215 14.0507"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M2 22.3774C2 24.4342 3.6674 26.1016 5.72424 26.1016C7.78108 26.1016 9.44848 24.4342 9.44848 22.3774C9.44848 20.3206 7.78108 18.6532 5.72424 18.6532C3.6674 18.6532 2 20.3206 2 22.3774Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M18.5515 22.3774C18.5515 24.4342 20.2189 26.1016 22.2758 26.1016C24.3326 26.1016 26 24.4342 26 22.3774C26 20.3206 24.3326 18.6532 22.2758 18.6532C20.2189 18.6532 18.5515 20.3206 18.5515 22.3774Z"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M10.2973 5.72424C10.2973 7.78108 11.9647 9.44848 14.0215 9.44848C16.0784 9.44848 17.7458 7.78108 17.7458 5.72424C17.7458 3.6674 16.0784 2 14.0215 2C11.9647 2 10.2973 3.6674 10.2973 5.72424Z"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default DerivationPath
