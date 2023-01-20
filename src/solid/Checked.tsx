import * as React from 'react'
import { SVGProps } from 'react'
const Checked = (props: SVGProps<SVGSVGElement>) => (
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
			d="M0 1C0 0.447715 0.447715 0 1 0H25C25.5523 0 26 0.447715 26 1V25C26 25.5523 25.5523 26 25 26H1C0.447715 26 0 25.5523 0 25V1ZM18.9316 10.7031C19.3199 10.3103 19.3163 9.67718 18.9236 9.28888C18.5308 8.90059 17.8977 8.90419 17.5094 9.29693L11.58 15.2941L8.68222 12.5876C8.27861 12.2106 7.64581 12.2322 7.26883 12.6358C6.89185 13.0394 6.91344 13.6722 7.31705 14.0492L10.9252 17.4192C11.3207 17.7886 11.9384 17.7764 12.3189 17.3915L18.9316 10.7031Z"
		/>
	</svg>
)
export default Checked
