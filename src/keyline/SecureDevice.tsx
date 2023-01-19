import * as React from 'react'
import { SVGProps } from 'react'
const SecureDevice = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 20 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M18.5109 2H2V26H18.5109V2Z" stroke="black" strokeWidth={2.5} />
		<path d="M9.30548 22.7122H11.2053" stroke="black" strokeWidth={2.5} />
		<path
			d="M8.01105 9.94757L8.01105 8.25744C8.01105 7.66224 8.24749 7.09142 8.66835 6.67055C9.08922 6.24969 9.66005 6.01324 10.2552 6.01324C10.8489 6.01554 11.4175 6.25299 11.8365 6.67361C12.2555 7.09423 12.4908 7.66374 12.4908 8.25744V9.94757"
			stroke="black"
			strokeWidth={2.5}
		/>
		<path
			d="M12.834 10.0771H7.67682C7.12453 10.0771 6.67682 10.5248 6.67682 11.0771V13.9479C6.67682 14.5002 7.12453 14.9479 7.67682 14.9479H12.834C13.3863 14.9479 13.834 14.5002 13.834 13.9479V11.0771C13.834 10.5248 13.3863 10.0771 12.834 10.0771Z"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default SecureDevice
