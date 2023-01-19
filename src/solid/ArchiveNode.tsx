import * as React from 'react'
import { SVGProps } from 'react'
const ArchiveNode = (props: SVGProps<SVGSVGElement>) => (
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
			d="M8.76626 17.2598C10.0322 17.9219 11.4724 18.2963 13 18.2963C14.5799 18.2963 16.0662 17.8958 17.363 17.1908L19.1268 19.7587C18.6068 20.4154 18.2963 21.2455 18.2963 22.1481C18.2963 24.2755 20.0208 26 22.1481 26C24.2755 26 26 24.2755 26 22.1481C26 20.0208 24.2755 18.2963 22.1481 18.2963C21.6485 18.2963 21.171 18.3914 20.7329 18.5646L19.0053 16.0494C20.931 14.3723 22.1481 11.9023 22.1481 9.14815C22.1481 4.09577 18.0524 0 13 0C7.94762 0 3.85185 4.09577 3.85185 9.14815C3.85185 11.9549 5.11584 14.4664 7.10563 16.1445L5.37872 18.6108C4.91056 18.4084 4.3943 18.2963 3.85185 18.2963C1.72453 18.2963 0 20.0208 0 22.1481C0 24.2755 1.72453 26 3.85185 26C5.97917 26 7.7037 24.2755 7.7037 22.1481C7.7037 21.2897 7.42287 20.4968 6.94807 19.8564L8.76626 17.2598ZM15.8737 7.68858C16.2642 7.29806 16.2642 6.66489 15.8737 6.27437C15.4832 5.88384 14.85 5.88384 14.4595 6.27437L13.1238 7.61003L11.7882 6.27437C11.3977 5.88384 10.7645 5.88384 10.374 6.27437C9.98344 6.66489 9.98344 7.29806 10.374 7.68858L11.7096 9.02425L10.374 10.3599C9.98348 10.7504 9.98347 11.3836 10.374 11.7741C10.7645 12.1646 11.3977 12.1646 11.7882 11.7741L13.1238 10.4385L14.4595 11.7741C14.85 12.1646 15.4832 12.1646 15.8737 11.7741C16.2642 11.3836 16.2642 10.7504 15.8737 10.3599L14.5381 9.02425L15.8737 7.68858Z"
		/>
	</svg>
)
export default ArchiveNode
