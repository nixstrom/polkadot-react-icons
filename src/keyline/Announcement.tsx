import * as React from 'react'
import { SVGProps } from 'react'
const Announcement = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M13.4009 21.0053C18.387 21.5294 22.8539 17.9122 23.378 12.9261C23.9021 7.93998 20.2849 3.47306 15.2988 2.94896C10.3127 2.42487 5.84576 6.04205 5.32166 11.0282C5.06161 13.5023 5.82119 15.8486 7.26172 17.6487L4.7449 23.6804L10.0308 19.9645C11.0454 20.5136 12.1823 20.8772 13.4009 21.0053Z" />
		<path d="M14.5327 13.1188L14.5255 7.64001" strokeMiterlimit={10} />
		<path d="M14.543 16.0295L14.5259 16.0124" strokeMiterlimit={10} />
	</svg>
)
export default Announcement
