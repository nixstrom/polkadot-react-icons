import * as React from 'react'
import { SVGProps } from 'react'
const ExportXsS = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={18}
		height={25}
		viewBox="0 0 18 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M5.61004 4.56349C5.21952 4.17297 5.21952 3.5398 5.61005 3.14928L8.46643 0.292893C8.85672 -0.0973997 9.48943 -0.0976647 9.88005 0.292301L12.7412 3.14868C13.1321 3.53888 13.1326 4.17205 12.7424 4.5629C12.3522 4.95375 11.719 4.95428 11.3282 4.56408L10.1759 3.41375V10.7061V11.7061H8.17595L8.17595 12.612L8.17596 15.4707C8.17596 16.023 8.62368 16.4707 9.17596 16.4707C9.72825 16.4707 10.176 16.023 10.176 15.4707L10.1759 12.612L10.1759 11.659H16.7523C17.3046 11.659 17.7523 12.1067 17.7523 12.659V19.9177V23.0471C17.7523 23.5994 17.3046 24.0471 16.7523 24.0471L1.59963 24.0471C1.04734 24.0471 0.59963 23.5994 0.599626 23.0471L0.599609 19.9177L0.599623 12.659C0.599625 12.1067 1.04734 11.659 1.59962 11.659L8.17593 11.659L8.17593 10.7061V3.41182L7.02426 4.56349C6.63373 4.95401 6.00057 4.95401 5.61004 4.56349Z"
		/>
	</svg>
)
export default ExportXsS
