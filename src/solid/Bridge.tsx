import * as React from 'react'
import { SVGProps } from 'react'
const Bridge = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 24 15"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M1 0.396484C0.734783 0.396484 0.480428 0.501842 0.292891 0.68938C0.105354 0.876917 0 1.13127 0 1.39649L8.4281e-05 13.3965C8.81553e-05 13.9488 0.447798 14.3965 1.00008 14.3965L3.74999 14.3965C4.07721 14.3965 4.38368 14.2364 4.57063 13.9679L4.57024 13.9685L4.56973 13.9692C4.56973 13.9692 4.57039 13.9683 4.57172 13.9664L4.58767 13.9445C4.60362 13.9229 4.63016 13.8877 4.66721 13.8407C4.74138 13.7467 4.85728 13.6064 5.01438 13.435C5.32929 13.0914 5.80543 12.6279 6.43821 12.1636C7.70173 11.2366 9.5715 10.3182 12.039 10.3182C14.5055 10.3182 16.3539 11.2358 17.5954 12.1596C18.2176 12.6226 18.6835 13.0848 18.9908 13.4272C19.1441 13.598 19.2568 13.7378 19.3288 13.8313C19.3648 13.878 19.3905 13.913 19.4058 13.9344L19.4211 13.956L19.4218 13.9568L19.4218 13.9569L19.4218 13.9569C19.6078 14.2317 19.918 14.3965 20.25 14.3965L22.9986 14.3965C23.5508 14.3965 23.9985 13.9488 23.9986 13.3966L24 1.39664C24 1.1314 23.8947 0.877014 23.7071 0.689452C23.5196 0.50189 23.2652 0.396516 23 0.396516L1 0.396484ZM4.57063 13.9679L4.57087 13.9676L4.57128 13.967C4.57106 13.9673 4.57084 13.9676 4.57063 13.9679Z"
		/>
	</svg>
)
export default Bridge
