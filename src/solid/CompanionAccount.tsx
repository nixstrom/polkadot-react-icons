import * as React from 'react'
import { SVGProps } from 'react'
const CompanionAccount = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={28}
		height={26}
		viewBox="0 0 28 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M7.71072 4.07256C9.943 1.83665 13.5654 1.83665 15.7976 4.07256C17.8826 6.16111 18.0337 9.49345 16.147 11.7621L15.3428 12.7288L16.4197 13.0283C20.1616 14.0692 22.7499 17.4766 22.7499 21.3605V24.5736C22.7499 25.264 22.1902 25.8236 21.4999 25.8236H2C1.30964 25.8236 0.75 25.264 0.75 24.5736V21.3661C0.75 17.4793 3.34123 14.069 7.086 13.0283L8.16474 12.7279L7.36145 11.7622C5.47476 9.49355 5.6258 6.16111 7.71072 4.07256Z"
		/>
		<path
			d="M12.7102 3.74915C13.5175 3.92572 14.2861 4.32795 14.914 4.9568C16.5428 6.5884 16.6608 9.19159 15.1869 10.9639L14.3229 12.0025C13.7715 12.6653 14.0869 13.6766 14.9178 13.9079L16.0858 14.2327C19.2866 15.1231 21.5008 18.0379 21.5008 21.3606V22.927H26V19.7139C26 16.3912 23.7858 13.4764 20.5849 12.586L19.417 12.2612C18.586 12.0299 18.2697 11.0186 18.8221 10.3558L19.6861 9.31717C21.16 7.54489 21.0419 4.94169 19.4132 3.31009C17.6692 1.5633 14.8394 1.5633 13.0955 3.31009C12.9557 3.44984 12.8282 3.59619 12.7102 3.74915Z"
			fill="white"
		/>
	</svg>
)
export default CompanionAccount
