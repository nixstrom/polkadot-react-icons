import * as React from 'react'
import { SVGProps } from 'react'
const Randomness = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 28 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M21.6898 2.30572C21.2993 1.91519 21.2993 1.28203 21.6898 0.891511C22.0804 0.500995 22.7135 0.501009 23.104 0.891542L26.9472 4.73491C27.1348 4.92245 27.2401 5.17681 27.2401 5.44203C27.2401 5.70724 27.1348 5.9616 26.9472 6.14913L23.104 9.99211C22.7135 10.3826 22.0803 10.3826 21.6898 9.99207C21.2993 9.60153 21.2993 8.96837 21.6898 8.57785L23.8258 6.442H21.9605C19.5787 6.442 17.3603 7.65314 16.0723 9.6567L14.4582 12.1675L16.0723 14.6783C17.3603 16.6818 19.5787 17.893 21.9605 17.893H23.8258L21.6898 15.7571C21.2993 15.3666 21.2993 14.7334 21.6898 14.3429C22.0803 13.9524 22.7135 13.9523 23.104 14.3429L26.9472 18.1858C27.1348 18.3734 27.2401 18.6277 27.2401 18.8929C27.2401 19.1582 27.1348 19.4125 26.9472 19.6L23.104 23.4434C22.7135 23.834 22.0804 23.834 21.6898 23.4435C21.2993 23.0529 21.2993 22.4198 21.6898 22.0292L23.826 19.893H21.9605C18.8981 19.893 16.0459 18.3358 14.3899 15.7598L13.2694 14.0167L12.1487 15.76C10.4927 18.336 7.64045 19.8932 4.57808 19.8932H1.25928C0.706991 19.8932 0.259277 19.4455 0.259277 18.8932C0.259277 18.3409 0.706993 17.8932 1.25928 17.8932H4.57808C6.95993 17.8932 9.17833 16.6821 10.4663 14.6785L12.0806 12.1675L10.4663 9.65643C9.17833 7.65287 6.95993 6.44173 4.57808 6.44174L1.25928 6.44174C0.706993 6.44174 0.259277 5.99402 0.259277 5.44174C0.259277 4.88945 0.706991 4.44174 1.25928 4.44174L4.57808 4.44174C7.64045 4.44173 10.4927 5.99891 12.1487 8.57492L13.2694 10.3182L14.3899 8.57518C16.0459 5.99918 18.8981 4.442 21.9605 4.442L23.826 4.442L21.6898 2.30572Z"
		/>
	</svg>
)
export default Randomness
