import * as React from 'react'
import { SVGProps } from 'react'
const BlogPost = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M21.8977 3.21835C22.8359 2.2802 24.3573 2.2802 25.2964 3.21835C26.2345 4.15651 26.2345 5.67794 25.2964 6.61704L18.1979 13.7155L13.5345 14.9764L14.7993 10.3177L21.8977 3.2193V3.21835Z"
			stroke="black"
		/>
		<path
			d="M18.1978 13.7156L13.5344 14.9765L14.7991 10.3178L21.8975 3.21941C22.2515 2.86454 22.6884 2.64463 23.1462 2.5578V2H2V25.1962L10.651 20.2005H23.1462V8.76716L18.1978 13.7156Z"
			stroke="black"
		/>
		<path d="M10.1708 14.9766H6.32574" stroke="black" />
		<path d="M15.8356 8.25095H5.98218" stroke="black" />
	</svg>
)
export default BlogPost
