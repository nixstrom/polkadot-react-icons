import * as React from 'react'
import { SVGProps } from 'react'
const BondedWithTimer = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 27 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M11.3808 0.75C8.02701 0.75 5.30819 3.46882 5.30818 6.82266V6.82267L5.30818 7.57593H2C1.30964 7.57593 0.75 8.13557 0.75 8.82593V22.4707C0.75 23.161 1.30964 23.7207 2 23.7207H12.5203C13.8692 25.8423 16.2407 27.2501 18.941 27.2501C23.14 27.2501 26.544 23.8461 26.544 19.6471C26.544 16.5408 24.6811 13.8696 22.0115 12.6897V8.82593C22.0115 8.13557 21.4519 7.57593 20.7615 7.57593H17.4535L17.4535 6.82267C17.4535 3.46883 14.7347 0.75 11.3808 0.75ZM14.9535 7.57593L14.9535 6.82267C14.9535 4.84954 13.354 3.25 11.3808 3.25C9.40772 3.25 7.80818 4.84954 7.80818 6.82267H6.55818L7.80818 6.82268L7.80818 7.57593H14.9535ZM18.941 14.5442C16.1227 14.5442 13.8381 16.8289 13.8381 19.6471C13.8381 22.4654 16.1227 24.7501 18.941 24.7501C21.7593 24.7501 24.044 22.4654 24.044 19.6471C24.044 16.8289 21.7593 14.5442 18.941 14.5442ZM19.063 15.8928C18.3727 15.8928 17.813 16.4524 17.813 17.1428V19.4043L17.0354 20.3478C16.5964 20.8805 16.6723 21.6683 17.2051 22.1074C17.7378 22.5464 18.5256 22.4704 18.9646 21.9377L20.0276 20.6479C20.212 20.4241 20.3129 20.143 20.3129 19.853V17.1428C20.3129 16.4524 19.7533 15.8928 19.063 15.8928Z"
		/>
	</svg>
)
export default BondedWithTimer
