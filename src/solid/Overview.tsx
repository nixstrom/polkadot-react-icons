import * as React from 'react'
import { SVGProps } from 'react'
const Overview = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M0 8.8804V22.8633C0 23.4156 0.447715 23.8633 1 23.8633H8.5C9.05228 23.8633 9.5 23.4156 9.5 22.8633V16.3633C9.5 15.811 9.94772 15.3633 10.5 15.3633H14C14.5523 15.3633 15 15.811 15 16.3633V22.8633C15 23.4156 15.4477 23.8633 16 23.8633H23C23.5523 23.8633 24 23.4156 24 22.8633V8.8804C24 8.55606 23.8427 8.25185 23.578 8.06438L12.578 0.27271C12.2317 0.0274091 11.7683 0.0274095 11.422 0.27271L0.421983 8.06438C0.157309 8.25185 0 8.55606 0 8.8804Z" />
	</svg>
)
export default Overview
