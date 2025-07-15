import React from 'react';
import { cn } from '../../utils/cn';

interface LogoProps {
	className?: string;
}

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
};

const Wrapper = ({ children, className = "" }: WrapperProps) => (
  <div className={cn(`absolute w-[43.75%] h-[43.75%] aspect-[14/5] inset-1/2 -translate-x-1/2 -translate-y-1/2`, className)}>
    {children}
  </div>
);

const Logo: React.FC<LogoProps> = ({ className }) => {

	return (
		<div className={cn(`relative w-[80px] h-[80px] rounded-full bg-[#fff] shadow-[0px_0px_6px_0px_#00000040]`, className)}>
			{/* 頭頂 */}
			<Wrapper className="overflow-hidden">
				<div
					className="absolute bg-[#333] w-full h-[70%] top-[8%] rounded-[50%] -rotate-[18deg]"
					style={{
						clipPath: 'inset(0px 0px 40% 0px)',
					}}
				/>
				<div
					className="absolute bg-[#fff] w-[101%] h-[56%] top-[25%] -right-[1%] rounded-[50%] z-[2] -rotate-[13deg]"
					style={{
						clipPath: 'inset(0px 0px 45% 0px)',
					}}
				/>
			</Wrapper>

			{/* 眼睛 */}
			<Wrapper className="z-[3]">
				<div className="absolute bg-[#333] w-[20%] h-[20%] right-[20%] top-1/2 -translate-y-1/2 rounded-[50%] z-[3]" />
			</Wrapper>

			{/* 嘴 */}
			<Wrapper className="-rotate-[8deg] z-0">
				<div className="absolute bg-[#333] w-[40%] h-[20%] bottom-[35%] -right-[20%] rounded-[50%]" />
				<div className="absolute bg-[#fff] w-[15%] h-[25%] bottom-[31%] right-[5%] z-[1]" />
				<div className="absolute bg-[#fff] w-[35%] h-[20%] bottom-[22%] -right-[24%] z-[1]" />
			</Wrapper>

			{/* 下巴 */}
			<Wrapper className="aspect-[14/5] overflow-hidden">
				<div
					className="absolute bg-[#333] w-full h-full bottom-0 right-0 rounded-br-[50%]"
					style={{
						clipPath: 'inset(57% 0px 0 1%)',
					}}
				/>
				<div
					className="absolute bg-[#fff] w-[200%] h-[200%] top-[-117%] -right-[15%] rounded-[35%] z-[2]"
					style={{
						clipPath: 'inset(86% 0px 0px 0px)',
					}}
				/>
			</Wrapper>
		</div>
	);
};

export default Logo;
