import Link from 'next/link';
import React, { forwardRef } from 'react';

const TagA = forwardRef(({ className, href, onClick, children, ...props }, ref) => {
	return (
		<a href={href} className={className || ''} onClick={onClick} ref={ref} {...props}>
			{children}
		</a>
	);
});

const CustomLink = ({ className, href, as, scroll, onClick, children, ...props }) => (
	<Link href={href} as={as} scroll={scroll} passHref>
		<TagA className={className} href={href} onClick={onClick} {...props}>
			{children}
		</TagA>
	</Link>
);

export default CustomLink;
