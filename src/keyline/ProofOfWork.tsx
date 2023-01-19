import * as React from 'react'
import { SVGProps } from 'react'
const ProofOfWork = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 27 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M13.4059 21.6734C7.10701 21.6734 2 18.7439 2 14.5446V18.8713C2 23.0706 7.10701 26 13.4059 26C19.7049 26 24.8119 23.0706 24.8119 18.8713V14.5456C24.8119 18.7449 19.7049 21.6734 13.4059 21.6734Z"
			stroke="black"
		/>
		<path
			d="M13.4268 17.2079C19.7257 17.2079 24.8328 13.8032 24.8328 9.60396C24.8328 5.40467 19.7257 2 13.4268 2C7.12788 2 2.02087 5.40467 2.02087 9.60396C2.02087 13.8032 7.12788 17.2079 13.4268 17.2079Z"
			stroke="black"
		/>
		<path
			d="M13.4268 17.2079C7.45295 17.2079 2.5598 14.1445 2.06935 10.2465H2.02087V14.5447C2.02087 18.7439 7.12788 21.6734 13.4268 21.6734C19.7257 21.6734 24.8328 18.7439 24.8328 14.5447V10.2465H24.7843C24.2938 14.1445 19.4007 17.2079 13.4268 17.2079Z"
			stroke="black"
		/>
		<path d="M9.60128 12.099L15.3042 8.29703" stroke="black" />
		<path
			d="M12.4526 6.42194L17.0414 9.24751L18.1556 8.58527L15.5364 7.00225L12.47 6.39603L12.4526 6.42194Z"
			stroke="black"
		/>
	</svg>
)
export default ProofOfWork
