import * as React from 'react'
import { SVGProps } from 'react'
const FullNode = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 26"
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
			d="M8.76626 17.2598C10.0322 17.9219 11.4724 18.2963 13 18.2963C14.5799 18.2963 16.0662 17.8958 17.363 17.1908L19.1268 19.7587C18.6068 20.4154 18.2963 21.2455 18.2963 22.1481C18.2963 24.2755 20.0208 26 22.1481 26C24.2755 26 26 24.2755 26 22.1481C26 20.0208 24.2755 18.2963 22.1481 18.2963C21.6485 18.2963 21.171 18.3914 20.7329 18.5646L19.0053 16.0494C20.931 14.3723 22.1481 11.9023 22.1481 9.14815C22.1481 4.09577 18.0524 0 13 0C7.94762 0 3.85185 4.09577 3.85185 9.14815C3.85185 11.9549 5.11584 14.4664 7.10563 16.1445L5.37872 18.6108C4.91056 18.4084 4.3943 18.2963 3.85185 18.2963C1.72453 18.2963 0 20.0208 0 22.1481C0 24.2755 1.72453 26 3.85185 26C5.97917 26 7.7037 24.2755 7.7037 22.1481C7.7037 21.2897 7.42287 20.4968 6.94807 19.8564L8.76626 17.2598ZM11.1344 7.28263C10.0207 8.39635 10.0207 10.202 11.1344 11.3158C12.2482 12.4295 14.0538 12.4295 15.1676 11.3158C16.2813 10.202 16.2813 8.39635 15.1676 7.28263C14.0538 6.16892 12.2482 6.16892 11.1344 7.28263ZM9.72022 12.73C7.82546 10.8352 7.82546 7.76319 9.72022 5.86842C11.615 3.97366 14.687 3.97366 16.5818 5.86842C18.4765 7.76319 18.4765 10.8352 16.5818 12.73C14.687 14.6247 11.615 14.6247 9.72022 12.73Z"
		/>
	</svg>
)
export default FullNode
