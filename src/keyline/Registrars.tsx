import * as React from 'react'
import { SVGProps } from 'react'
const Registrars = (props: SVGProps<SVGSVGElement>) => (
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
		<rect x={4} y={2} width={20} height={24} />
		<path d="M11 20L13 22L17 18" />
		<path d="M19.5184 8.23901L11.9806 8.23901M8.49249 8.23902L8.4817 8.23902" />
		<path d="M19.5184 12.2612L11.9806 12.2612M8.49249 12.2612L8.4817 12.2612" />
	</svg>
)
export default Registrars
