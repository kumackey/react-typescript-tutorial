import {FC} from 'react';

export type FooterInfo = {
    copyrightOwner: string;
    styles: {
        backgroundColor: string;
        fontFamily: string;
        lineHeight: string;
    };
};
type Props = {
    children: React.ReactNode;
    footerInfo: FooterInfo;
};
export const Footer: FC<Props> = (
    {
        children,
        footerInfo: {copyrightOwner, styles}
    }) => {
    return (
        <footer style={styles}>
            {children}
        </footer>
    )
};