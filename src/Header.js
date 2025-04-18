import React from 'react';

const style = {
    container: {
        display: 'flex',
        flexWrap: 'wrap-reverse',
        alignItems: 'flex-start',
        borderBottom: '2px solid #333',
        paddingTop: 13,
        paddingBottom: 13

    },

    logoContainer: {
        height: 40,
        paddingBottom: 7
    },

    logoImg: {
        width: 'inherit',
        height: '100%',
        border: 'none'
    },

    menuContainer: {
        marginTop: 5,
        flexGrow: 1
    },

    selected: { color: '#00f' }
};

const menuList = [
    { label: '회사소개', href: '/intro' },
    { label: '회사연혁', href: '/history' },
    { label: '핵심기술', href: '/technologies' },
    { label: '제품', href: '/products' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'NAVER Café', href: 'https://cafe.naver.com/futureevfamily'},
    { label: 'NAVER BLOG', href: 'https://blog.naver.com/future-ev'}
];

export default props => (
    <div className="full-width" style={ style.container }>
        <div style={ style.menuContainer }>
            { menuList.map(menuItem =>
                <h2 className="menu-label">
                    <a
                        href={ menuItem.href }
                        style={ props.selected == menuItem.href ?
                            style.selected : {} }
                    >
                        { menuItem.label }
                    </a>
                </h2>
            )}
        </div>

        <a href="/">
            <div style={ style.logoContainer }>
                <img src="/images/logo.png" style={ style.logoImg }></img>
            </div>
        </a>
    </div>
);