import * as React from 'react'
import { SVGProps } from 'react'
const Rust = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="28"
		height="28"
		viewBox="0 0 26 26"
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
			d="M14.1228 23.1572C13.9332 22.9465 13.663 22.8262 13.3795 22.8262H12.5605C12.2815 22.8262 12.0152 22.9427 11.826 23.1476L10.0026 25.1211C9.68546 25.4643 9.17283 25.5422 8.76809 25.3085L4.15875 22.6471C3.74929 22.4107 3.56137 21.9198 3.70826 21.4704L4.54937 18.8972C4.6378 18.6266 4.60675 18.3312 4.46399 18.085L4.07147 17.4078C3.93215 17.1675 3.69915 16.996 3.42829 16.9343L0.778037 16.331C0.322913 16.2274 0 15.8227 0 15.356V10.0326C0 9.55944 0.331664 9.15102 0.794785 9.05391L3.44481 8.49826C3.72438 8.43964 3.96553 8.26426 4.10745 8.01636L4.49406 7.34103C4.63135 7.1012 4.66328 6.81525 4.58226 6.55105L3.78389 3.94735C3.64716 3.50143 3.83684 3.02022 4.24106 2.78753L8.85174 0.133377C9.26124 -0.102354 9.77986 -0.0192896 10.0953 0.332545L11.877 2.32019C12.0667 2.53179 12.3375 2.65269 12.6216 2.65269H13.4418C13.7194 2.65269 13.9846 2.53727 14.1737 2.33406L16.008 0.363619C16.3254 0.0227204 16.836 -0.0539608 17.2395 0.178703L21.8431 2.83339C22.2518 3.06904 22.4402 3.5582 22.2951 4.00707L21.4794 6.53241C21.3925 6.80129 21.4235 7.09437 21.5646 7.33918L21.9917 8.08014C22.1306 8.32127 22.3638 8.49357 22.6351 8.55561L25.2229 9.1473C25.6776 9.25126 26 9.65573 26 10.1221V15.9206C26 16.3951 25.6665 16.8043 25.2017 16.9L22.1909 17.5201C21.8425 17.5919 21.5584 17.8433 21.4449 18.1805L21.4146 18.2705C21.3477 18.4694 21.345 18.6843 21.4069 18.8847L22.2244 21.5303C22.3623 21.9767 22.1728 22.4591 21.7678 22.6922L17.1573 25.3463C16.7484 25.5817 16.2307 25.4993 15.9151 25.1486L14.1228 23.1572ZM9.62963 7.13941C9.07734 7.13941 8.62963 7.58712 8.62963 8.13941V12.5997V16.8061C8.62963 17.3584 9.07734 17.8061 9.62963 17.8061C10.1819 17.8061 10.6296 17.3584 10.6296 16.8061V13.5997H10.6344H10.642H10.6496H10.6571H10.6648H10.6724H10.68H10.6876H10.6953H10.703H10.7106H10.7183H10.726H10.7337H10.7415H10.7492H10.757H10.7647H10.7725H10.7803H10.788H10.7958H10.8037H10.8115H10.8193H10.8272H10.835H10.8429H10.8507H10.8586H10.8665H10.8744H10.8823H10.8903H10.8982H10.9061H10.9141H10.9221H10.93H10.938H10.946H10.954H10.962H10.97H10.978H10.9861H10.9941H11.0022H11.0102H11.0183H11.0264H11.0345H11.0426H11.0507H11.0588H11.0669H11.075H11.0832H11.0913H11.0995H11.1076H11.1158H11.124H11.1322H11.1403H11.1485H11.1567H11.165H11.1732H11.1814H11.1896H11.1979H11.2061H11.2144H11.2226H11.2309H11.2392H11.2474H11.2557H11.264H11.2723H11.2806H11.2889H11.2973H11.3056H11.3139H11.3222H11.3306H11.3389H11.3473H11.3556H11.364H11.3724H11.3807H11.3891H11.3975H11.4059H11.4143H11.4227H11.4311H11.4395H11.4479H11.4563H11.4647H11.4731H11.4816H11.49H11.4984H11.5069H11.5153H11.5238H11.5322H11.5407H11.5491H11.5576H11.5661H11.5745H11.583H11.5915H11.6H11.6084H11.6169H11.6254H11.6339H11.6424H11.6509H11.6594H11.6679H11.6764H11.6849H11.6934H11.7019H11.7105H11.719H11.7275H11.736H11.7445H11.7531H11.7616H11.7701H11.7786H11.7872H11.7957H11.8042H11.8128H11.8213H11.8298H11.8384H11.8469H11.8555H11.864H11.8725H11.8811H11.8896H11.8982H11.9067H11.9152H11.9238H11.9323H11.9409H11.9494H11.958H11.9665H11.9751H11.9836H11.9921H12.0007H12.0092H12.0178H12.0263H12.0348H12.0434H12.0519H12.0605H12.069H12.0775H12.0861H12.0946H12.1031H12.1117H12.1202H12.1287H12.1372H12.1458H12.1543H12.1628H12.1713H12.1798H12.1883H12.1968H12.2054H12.2139H12.2224H12.2309H12.2394H12.2479H12.2564H12.2648H12.2733H12.2818H12.2903H12.2988H12.3072H12.3157H12.3242H12.3327H12.3411H12.3496H12.358H12.3665H12.3749H12.3834H12.3918H12.4002H12.4087H12.4171H12.4255H12.4339H12.4423H12.4508H12.4592H12.4676H12.4759H12.4843H12.4927H12.5011H12.5095H12.5178H12.5262H12.5346H12.5429H12.5513H12.5596H12.5679H12.5763H12.5846H12.5929H12.6012H12.6095H12.6178H12.6261H12.6344H12.6427H12.651H12.6592H12.6675H12.6758H12.684H12.6923H12.7005H12.7087H12.7169H12.7252H12.7334H12.7416H12.7498H12.7579H12.7661H12.7743H12.7825H12.7906H12.7988H12.8069H12.815H12.8232H12.8313H12.8394H12.8475H12.8556H12.8637H12.8717H12.8798H12.8879H12.8959H12.9039H12.912H12.92H12.928H12.936H12.944H12.952H12.96H12.9679H12.9759H12.9838H12.9918H12.9997H13.0076H13.0155H13.0234H13.0313H13.0392H13.0471H13.0481L16.5595 17.4625C16.931 17.8712 17.5634 17.9013 17.9721 17.5299C18.3808 17.1584 18.4109 16.5259 18.0394 16.1172L15.7064 13.5508C16.4556 13.4281 17.0797 13.0799 17.5356 12.5674C18.0951 11.9385 18.3429 11.129 18.333 10.3568C18.3232 9.58497 18.0557 8.78634 17.5006 8.16817C16.9296 7.5324 16.0991 7.13941 15.0906 7.13941H9.62963ZM10.6344 11.5997H10.6296V9.13941H15.0906C15.5488 9.13941 15.8325 9.30394 16.0126 9.50448C16.2084 9.72261 16.3289 10.0391 16.3332 10.3823C16.3376 10.7251 16.2257 11.0308 16.0413 11.2381C15.8731 11.4272 15.5886 11.5997 15.0906 11.5997H15.0855H15.0804H15.0753H15.0702H15.0652H15.0601H15.0551H15.0501H15.0451H15.0402H15.0352H15.0303H15.0254H15.0205H15.0157H15.0108H15.006H15.0012H14.9964H14.9917H14.9869H14.9822H14.9775H14.9728H14.9682H14.9635H14.9589H14.9543H14.9497H14.9451H14.9406H14.936H14.9315H14.927H14.9225H14.9181H14.9136H14.9092H14.9048H14.9004H14.896H14.8916H14.8873H14.883H14.8787H14.8744H14.8701H14.8659H14.8616H14.8574H14.8532H14.849H14.8449H14.8407H14.8366H14.8324H14.8283H14.8243H14.8202H14.8161H14.8121H14.8081H14.8041H14.8001H14.7961H14.7922H14.7882H14.7843H14.7804H14.7765H14.7726H14.7687H14.7649H14.7611H14.7572H14.7534H14.7496H14.7459H14.7421H14.7384H14.7346H14.7309H14.7272H14.7235H14.7199H14.7162H14.7126H14.7089H14.7053H14.7017H14.6981H14.6946H14.691H14.6875H14.6839H14.6804H14.6769H14.6734H14.6699H14.6665H14.663H14.6596H14.6562H14.6527H14.6493H14.646H14.6426H14.6392H14.6359H14.6325H14.6292H14.6259H14.6226H14.6193H14.616H14.6128H14.6095H14.6063H14.6031H14.5998H14.5966H14.5935H14.5903H14.5871H14.5839H14.5808H14.5777H14.5745H14.5714H14.5683H14.5652H14.5622H14.5591H14.556H14.553H14.5499H14.5469H14.5439H14.5409H14.5379H14.5349H14.5319H14.529H14.526H14.5231H14.5201H14.5172H14.5143H14.5114H14.5085H14.5056H14.5027H14.4999H14.497H14.4941H14.4913H14.4885H14.4857H14.4828H14.48H14.4772H14.4744H14.4717H14.4689H14.4661H14.4634H14.4606H14.4579H14.4552H14.4524H14.4497H14.447H14.4443H14.4416H14.4389H14.4363H14.4336H14.4309H14.4283H14.4256H14.423H14.4204H14.4178H14.4151H14.4125H14.4099H14.4073H14.4047H14.4021H14.3996H14.397H14.3944H14.3919H14.3893H14.3868H14.3842H14.3817H14.3792H14.3767H14.3741H14.3716H14.3691H14.3666H14.3641H14.3616H14.3592H14.3567H14.3542H14.3517H14.3493H14.3468H14.3444H14.3419H14.3395H14.3371H14.3346H14.3322H14.3298H14.3273H14.3249H14.3225H14.3201H14.3177H14.3153H14.3129H14.3105H14.3081H14.3057H14.3034H14.301H14.2986H14.2962H14.2939H14.2915H14.2892H14.2868H14.2844H14.2821H14.2797H14.2774H14.2751H14.2727H14.2704H14.268H14.2657H14.2634H14.2611H14.2587H14.2564H14.2541H14.2518H14.2495H14.2471H14.2448H14.2425H14.2402H14.2379H14.2356H14.2333H14.231H14.2287H14.2264H14.2241H14.2218H14.2195H14.2172H14.2149H14.2126H14.2103H14.208H14.2057H14.2034H14.2011H14.1988H14.1965H14.1942H14.1919H14.1896H14.1873H14.185H14.1827H14.1804H14.1782H14.1759H14.1736H14.1713H14.169H14.1667H14.1644H14.1621H14.1598H14.1575H14.1552H14.1529H14.1505H14.1482H14.1459H14.1436H14.1413H14.139H14.1367H14.1344H14.132H14.1297H14.1274H14.1251H14.1227H14.1204H14.1181H14.1158H14.1134H14.1111H14.1087H14.1064H14.104H14.1017H14.0993H14.097H14.0946H14.0923H14.0899H14.0875H14.0852H14.0828H14.0804H14.078H14.0756H14.0732H14.0708H14.0684H14.066H14.0636H14.0612H14.0588H14.0564H14.054H14.0515H14.0491H14.0467H14.0442H14.0418H14.0393H14.0369H14.0344H14.0319H14.0295H14.027H14.0245H14.022H14.0195H14.017H14.0145H14.012H14.0095H14.007H14.0045H14.0019H13.9994H13.9968H13.9943H13.9917H13.9892H13.9866H13.984H13.9814H13.9789H13.9763H13.9737H13.9711H13.9684H13.9658H13.9632H13.9605H13.9579H13.9552H13.9526H13.9499H13.9472H13.9446H13.9419H13.9392H13.9365H13.9338H13.931H13.9283H13.9256H13.9228H13.9201H13.9173H13.9145H13.9118H13.909H13.9062H13.9034H13.9006H13.8977H13.8949H13.8921H13.8892H13.8864H13.8835H13.8806H13.8777H13.8748H13.8719H13.869H13.8661H13.8632H13.8602H13.8573H13.8543H13.8513H13.8483H13.8454H13.8423H13.8393H13.8363H13.8333H13.8302H13.8272H13.8241H13.821H13.8179H13.8148H13.8117H13.8086H13.8055H13.8023H13.7992H13.796H13.7928H13.7896H13.7864H13.7832H13.78H13.7768H13.7735H13.7703H13.767H13.7637H13.7604H13.7571H13.7538H13.7504H13.7471H13.7437H13.7404H13.737H13.7336H13.7302H13.7267H13.7233H13.7199H13.7164H13.7129H13.7094H13.7059H13.7024H13.6989H13.6953H13.6918H13.6882H13.6846H13.681H13.6774H13.6738H13.6701H13.6665H13.6628H13.6591H13.6554H13.6517H13.648H13.6443H13.6405H13.6367H13.6329H13.6291H13.6253H13.6215H13.6177H13.6138H13.6099H13.606H13.6021H13.5982H13.5942H13.5903H13.5863H13.5823H13.5783H13.5743H13.5703H13.5662H13.5622H13.5581H13.554H13.5499H13.5457H13.5416H13.5374H13.5332H13.529H13.5248H13.5206H13.5163H13.5121H13.5078H13.5035H13.4992H13.4948H13.4905H13.4833H13.4762H13.469H13.4619H13.4547H13.4475H13.4403H13.433H13.4258H13.4185H13.4112H13.4039H13.3966H13.3893H13.382H13.3747H13.3673H13.3599H13.3525H13.3451H13.3377H13.3303H13.3229H13.3154H13.308H13.3005H13.293H13.2855H13.278H13.2705H13.2629H13.2554H13.2478H13.2402H13.2326H13.225H13.2174H13.2098H13.2022H13.1945H13.1869H13.1792H13.1715H13.1638H13.1561H13.1484H13.1407H13.1329H13.1252H13.1174H13.1096H13.1018H13.094H13.0862H13.0784H13.0706H13.0628H13.0549H13.0471H13.0392H13.0313H13.0234H13.0155H13.0076H12.9997H12.9918H12.9838H12.9759H12.9679H12.96H12.952H12.944H12.936H12.928H12.92H12.912H12.9039H12.8959H12.8879H12.8798H12.8717H12.8637H12.8556H12.8475H12.8394H12.8313H12.8232H12.815H12.8069H12.7988H12.7906H12.7825H12.7743H12.7661H12.7579H12.7498H12.7416H12.7334H12.7252H12.7169H12.7087H12.7005H12.6923H12.684H12.6758H12.6675H12.6592H12.651H12.6427H12.6344H12.6261H12.6178H12.6095H12.6012H12.5929H12.5846H12.5763H12.5679H12.5596H12.5513H12.5429H12.5346H12.5262H12.5178H12.5095H12.5011H12.4927H12.4843H12.4759H12.4676H12.4592H12.4508H12.4423H12.4339H12.4255H12.4171H12.4087H12.4002H12.3918H12.3834H12.3749H12.3665H12.358H12.3496H12.3411H12.3327H12.3242H12.3157H12.3072H12.2988H12.2903H12.2818H12.2733H12.2648H12.2564H12.2479H12.2394H12.2309H12.2224H12.2139H12.2054H12.1968H12.1883H12.1798H12.1713H12.1628H12.1543H12.1458H12.1372H12.1287H12.1202H12.1117H12.1031H12.0946H12.0861H12.0775H12.069H12.0605H12.0519H12.0434H12.0348H12.0263H12.0178H12.0092H12.0007H11.9921H11.9836H11.9751H11.9665H11.958H11.9494H11.9409H11.9323H11.9238H11.9152H11.9067H11.8982H11.8896H11.8811H11.8725H11.864H11.8555H11.8469H11.8384H11.8298H11.8213H11.8128H11.8042H11.7957H11.7872H11.7786H11.7701H11.7616H11.7531H11.7445H11.736H11.7275H11.719H11.7105H11.7019H11.6934H11.6849H11.6764H11.6679H11.6594H11.6509H11.6424H11.6339H11.6254H11.6169H11.6084H11.6H11.5915H11.583H11.5745H11.5661H11.5576H11.5491H11.5407H11.5322H11.5238H11.5153H11.5069H11.4984H11.49H11.4816H11.4731H11.4647H11.4563H11.4479H11.4395H11.4311H11.4227H11.4143H11.4059H11.3975H11.3891H11.3807H11.3724H11.364H11.3556H11.3473H11.3389H11.3306H11.3222H11.3139H11.3056H11.2973H11.2889H11.2806H11.2723H11.264H11.2557H11.2474H11.2392H11.2309H11.2226H11.2144H11.2061H11.1979H11.1896H11.1814H11.1732H11.165H11.1567H11.1485H11.1403H11.1322H11.124H11.1158H11.1076H11.0995H11.0913H11.0832H11.075H11.0669H11.0588H11.0507H11.0426H11.0345H11.0264H11.0183H11.0102H11.0022H10.9941H10.9861H10.978H10.97H10.962H10.954H10.946H10.938H10.93H10.9221H10.9141H10.9061H10.8982H10.8903H10.8823H10.8744H10.8665H10.8586H10.8507H10.8429H10.835H10.8272H10.8193H10.8115H10.8037H10.7958H10.788H10.7803H10.7725H10.7647H10.757H10.7492H10.7415H10.7337H10.726H10.7183H10.7106H10.703H10.6953H10.6876H10.68H10.6724H10.6648H10.6571H10.6496H10.642H10.6344Z"
		/>
	</svg>
)
export default Rust
