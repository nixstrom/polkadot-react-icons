import * as React from 'react'
import { SVGProps } from 'react'
const Elections = (props: SVGProps<SVGSVGElement>) => (
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
			d="M9.86963 0C9.31734 0 8.86963 0.447715 8.86963 1V3.76318H4.77523C4.37085 3.76318 4.00627 4.00673 3.85144 4.3803L0.0771181 13.4868C0.0268098 13.6082 0.000915527 13.7383 0.000915527 13.8697V14.8765C0.000915527 14.9502 0.00890136 15.0221 0.0240556 15.0913L2.95196e-06 24.9974C-0.00064203 25.263 0.10443 25.518 0.292035 25.706C0.479641 25.8941 0.734363 25.9998 1 25.9998H24.8716C25.4239 25.9998 25.8716 25.5521 25.8716 24.9998V14.9197C25.8722 14.9053 25.8725 14.8909 25.8725 14.8765V13.8706C25.8725 13.7404 25.8471 13.6114 25.7976 13.4909L22.0592 4.38345C21.9051 4.00821 21.5397 3.76318 21.1341 3.76318H17.0029V1C17.0029 0.447715 16.5552 0 16.0029 0H9.86963ZM10.8696 8.53185V2H15.0029V8.53185H10.8696ZM2.00243 23.9998L2.02216 15.8765H23.8716V23.9998H2.00243Z"
		/>
	</svg>
)
export default Elections
