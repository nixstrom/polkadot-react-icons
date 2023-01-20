import * as React from 'react'
import { SVGProps } from 'react'
const Podcasts = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			d="M2.91951 20.3041C2.73515 19.9815 2.56533 19.6515 2.41038 19.3151C1.64512 17.6535 1.24274 15.8354 1.24513 13.9832C1.25806 10.6088 2.60762 7.37703 4.99827 4.99554C7.38892 2.61405 10.6258 1.27692 14.0003 1.27695C15.673 1.27052 17.3305 1.59442 18.8777 2.23009C20.425 2.86576 21.8315 3.80068 23.0165 4.9812C24.2016 6.16173 25.1419 7.56463 25.7835 9.10942C26.4251 10.6542 26.7554 12.3105 26.7554 13.9832C26.7582 16.2105 26.1758 18.3883 25.081 20.3041"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
			data-nofill="true"
		/>
		<path
			d="M6.05907 17.3514C5.59587 16.2905 5.35077 15.1449 5.34088 13.9832C5.34087 12.8427 5.56614 11.7134 6.00378 10.6602C6.44142 9.60699 7.0828 8.6506 7.89109 7.84595C8.69937 7.0413 9.65864 6.40425 10.7138 5.97136C11.769 5.53847 12.8993 5.31827 14.0398 5.32342C16.3374 5.32342 18.5411 6.23548 20.1666 7.85923C21.7922 9.48297 22.7068 11.6856 22.7094 13.9832C22.6992 15.1441 22.4544 16.2888 21.992 17.3492"
			stroke="black"
			strokeWidth={2.5}
			fill="none"
			data-nofill="true"
		/>
		<path
			d="M11.5739 17.7573L10.7591 16.7776C9.36829 15.1056 9.47968 12.6495 11.0161 11.1102C12.6611 9.46216 15.3315 9.46216 16.9765 11.1102C18.5129 12.6495 18.6243 15.1056 17.2335 16.7776L16.4188 17.7571C15.8984 18.3828 16.1965 19.337 16.9806 19.555L18.0844 19.862C21.1067 20.7025 23.198 23.4547 23.198 26.5917V26.678H4.802V26.5865C4.802 23.4522 6.89121 20.7022 9.91079 19.8618L11.0123 19.5553C11.7963 19.3371 12.0943 18.3829 11.5739 17.7573Z"
			stroke="black"
			strokeWidth={2.5}
		/>
	</svg>
)
export default Podcasts
