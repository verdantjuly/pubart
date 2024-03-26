
export type IconBuilder<T> = (value: T) => string;

export class IconSize {
    static inButton = 14;
    static inNavigate = 16;
}

// 모든 아이콘은 'https://svgomg.net'에 의해 한번씩 압축되어야 합니다.
export function Icon({name, size = 18, width = size, height = size, fill, className}: {
    name: string,
    width?: number,
    height?: number,
    size?: number,
    fill?: boolean,
    className?: string,
}) {
    const rWidth = width;
    const rHeight = height;

    if (name == "logo") {
        return <svg className={className} width={rWidth} height={rHeight} viewBox="0 0 50 50"><defs><clipPath id="A"><path d="M0 0h50v50H0z"/></clipPath></defs><g clip-path="url(#A)"><path d="M2 48V25A22.98 22.98 0 0 1 25 2v23h23a22.98 22.98 0 0 1-23 23z" fill="#40b1fc" stroke="#000" stroke-linejoin="round" stroke-width="4"/></g></svg>;
    }
    if (name == "title-logo") {
        return <svg className={className} width={rWidth} height={rHeight} viewBox="0 0 165 50"><defs><clipPath id="a"><path d="M0 0h165v50H0z"/></clipPath></defs><g clip-path="url(#a)"><path d="M2 48V25A22.981 22.981 0 0 1 25 2v23h23a22.982 22.982 0 0 1-23 23Z" fill="#40b1fc" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/><path style="fill: var(--text); stroke: none;" d="M54.989 14.5h8.87a9.326 9.326 0 0 1 4.379.964 6.594 6.594 0 0 1 2.8 2.7 8.16 8.16 0 0 1 .956 4 7.9 7.9 0 0 1-.979 3.987 6.764 6.764 0 0 1-2.836 2.679 9.495 9.495 0 0 1-4.426.964h-5.7V26h4.96a4.993 4.993 0 0 0 2.3-.478 3.131 3.131 0 0 0 1.387-1.34 4.274 4.274 0 0 0 .454-2.021 4.227 4.227 0 0 0-.454-2.013 3.056 3.056 0 0 0-1.387-1.316 5.176 5.176 0 0 0-2.311-.462h-3.313v18.817h-4.7Zm36.532 0v14.743a7.948 7.948 0 0 1-1.167 4.309 7.857 7.857 0 0 1-3.3 2.906 11.067 11.067 0 0 1-4.92 1.042 11 11 0 0 1-4.916-1.042 7.877 7.877 0 0 1-3.282-2.906 7.948 7.948 0 0 1-1.167-4.309V14.5h4.7v14.352a4.616 4.616 0 0 0 .58 2.311 4.146 4.146 0 0 0 1.64 1.613 4.978 4.978 0 0 0 2.444.588 5.011 5.011 0 0 0 2.46-.588 4.092 4.092 0 0 0 1.637-1.614 4.666 4.666 0 0 0 .572-2.311V14.5Zm1.609 0h9.025a10.407 10.407 0 0 1 4.121.729 5.556 5.556 0 0 1 2.546 2.037 5.477 5.477 0 0 1 .854 3.063 4.859 4.859 0 0 1-.525 2.287 4.63 4.63 0 0 1-1.441 1.653 5.776 5.776 0 0 1-2.123.917v.219a5.149 5.149 0 0 1 2.444.752 5.1 5.1 0 0 1 1.833 1.919 5.75 5.75 0 0 1 .689 2.859 5.9 5.9 0 0 1-.893 3.228 5.983 5.983 0 0 1-2.655 2.217 10.168 10.168 0 0 1-4.254.807h-9.62Zm8.666 18.817a5.906 5.906 0 0 0 2.2-.353 2.629 2.629 0 0 0 1.277-.987 2.738 2.738 0 0 0 .407-1.512 3.208 3.208 0 0 0-.454-1.692 2.938 2.938 0 0 0-1.307-1.151 4.67 4.67 0 0 0-2-.4h-4.087v6.095Zm-.345-9.306a4.243 4.243 0 0 0 1.778-.36 2.916 2.916 0 0 0 1.238-1.018 2.7 2.7 0 0 0 .447-1.551 2.681 2.681 0 0 0-.392-1.465 2.53 2.53 0 0 0-1.152-.956 4.485 4.485 0 0 0-1.825-.337h-3.713v5.687Zm8.55 13.176 8.147-22.687h4l8.158 22.687h-3.682l-6.392-18.535h-.188l-6.409 18.535Zm16.028-8.884v2.883h-11.782v-2.883Zm4.962-13.8h8.084a9.664 9.664 0 0 1 4.363.885 5.948 5.948 0 0 1 2.64 2.5 7.717 7.717 0 0 1 .877 3.745 7.425 7.425 0 0 1-.877 3.674 5.951 5.951 0 0 1-2.656 2.452 9.8 9.8 0 0 1-4.363.877h-6.126v-2.993h5.8a6.68 6.68 0 0 0 2.71-.47 3.176 3.176 0 0 0 1.541-1.362 4.445 4.445 0 0 0 .494-2.178 4.786 4.786 0 0 0-.494-2.264 3.192 3.192 0 0 0-1.559-1.418 6.556 6.556 0 0 0-2.71-.486h-4.278v19.722h-3.448Zm16.811 22.684h-3.933l-5.48-10.231h3.823Zm-.381-22.687H165v2.961h-7.05l-.016 19.725h-3.445l.016-19.725h-7.1Z"/></g></svg>
    }
     if (name == "home") {
        return fill
            ? <svg className={className} width={rWidth} height={rHeight} viewBox="0 0 50 50"><defs><clipPath id="a"><path d="M0 0h50v50H0z"/></clipPath></defs><g clip-path="url(#a)"><path d="M25 0a3 3 0 0 1 2 1l22 17a3 3 0 0 1 1 2v28a3 3 0 0 1-2 2H32a3 3 0 0 1-2-2V35h-9v13a3 3 0 0 1-3 2H3a3 3 0 0 1-3-2V20a3 3 0 0 1 1-2L23 1a3 3 0 0 1 2-1Z"/></g></svg>
            : <svg className={className} width={rWidth} height={rHeight} viewBox="0 0 50 50"><defs><clipPath id="a"><path d="M0 0h50v50H0z"/></clipPath></defs><g clip-path="url(#a)"><path d="M25 0a3 3 0 0 1 2 1l22 17a3 3 0 0 1 1 2v28a3 3 0 0 1-2 2H32a3 3 0 0 1-2-2V35h-9v13a3 3 0 0 1-3 2H3a3 3 0 0 1-3-2V20a3 3 0 0 1 1-2L23 1a3 3 0 0 1 2-1Zm20 21L25 6 5 21v24h11V32a3 3 0 0 1 2-2h14a3 3 0 0 1 3 2v13h10Z"/></g></svg>
    }
    if (name == "navigate") {
        return fill
            ? <svg className={className} width={rWidth} height={rHeight} viewBox="0 0 50 50"><defs><clipPath id="a"><path d="M0 0h50v50H0z"/></clipPath></defs><g clip-path="url(#a)"><path d="M25 0A25 25 0 1 1 0 25 25 25 0 0 1 25 0Z"/><path d="m11 40-1-1 10-19 19-10 1 1-10 19-19 10Zm14-19a4 4 0 0 0-3 1 4 4 0 0 0-1 3 4 4 0 0 0 1 3 4 4 0 0 0 3 1 4 4 0 0 0 3-1 4 4 0 0 0 1-3 4 4 0 0 0-1-3 4 4 0 0 0-3-1Z" fill="#fff"/></g></svg>
            : <svg className={className} width={rWidth} height={rHeight} viewBox="0 0 50 50"><defs><clipPath id="a"><path d="M0 0h50v50H0z"/></clipPath></defs><g clip-path="url(#a)"><path d="M0 25A25 25 0 0 1 25 0a25 25 0 0 1 25 25 25 25 0 0 1-25 25A25 25 0 0 1 0 25Zm25 20a20 20 0 0 0 14-6 20 20 0 0 0 6-14 20 20 0 0 0-5-14L30 30 11 40a20 20 0 0 0 14 5ZM11 11a20 20 0 0 0-6 14 20 20 0 0 0 5 14l10-19 19-10a20 20 0 0 0-14-5 20 20 0 0 0-14 6Zm11 11a4 4 0 0 0 0 6 4 4 0 0 0 6 0 4 4 0 0 0 0-6 4 4 0 0 0-3-1 4 4 0 0 0-3 1Z"/></g></svg>    
    }
    if (name == "user") {
        return fill
            ? <svg className={className} width={rWidth} height={rHeight} viewBox="0 0 50 50"><defs><clipPath id="a"><path d="M0 0h50v50H0z"/></clipPath></defs><g clip-path="url(#a)"><path d="M25.5 0A12.5 12.5 0 1 1 13 12.5 12.5 12.5 0 0 1 25.5 0ZM19 28h12a19 19 0 0 1 19 19v12a19 19 0 0 1-19 19H19A19 19 0 0 1 0 59V47a19 19 0 0 1 19-19Z"/></g></svg>
            : <svg className={className} width={rWidth} height={rHeight} viewBox="0 0 50 50"><defs><clipPath id="a"><path d="M0 0h50v50H0z"/></clipPath></defs><g clip-path="url(#a)"><path d="M25.5 5a7.5 7.5 0 1 0 7.5 7.5A7.5 7.5 0 0 0 25.5 5m0-5A12.5 12.5 0 1 1 13 12.5 12.5 12.5 0 0 1 25.5 0ZM19 33A14 14 0 0 0 5 47v12a14 14 0 0 0 14 14h12a14 14 0 0 0 14-14V47a14 14 0 0 0-14-14H19m0-5h12a19 19 0 0 1 19 19v12a19 19 0 0 1-19 19H19A19 19 0 0 1 0 59V47a19 19 0 0 1 19-19Z"/></g></svg>
    }
    if (name == "menu") {
        return <svg className={className} width={rWidth} height={rHeight} viewBox="0 0 50 50"><defs><clipPath id="a"><path d="M0 0h50v50H0z"/></clipPath></defs><g clip-path="url(#a)"><path d="M48 10H2a2 2 0 0 1 0-4h46a2 2 0 0 1 0 4ZM48 27H2a2 2 0 0 1 0-4h46a2 2 0 0 1 0 4ZM48 44H2a2 2 0 0 1 0-4h46a2 2 0 0 1 0 4Z"/></g></svg>
    }

    throw new Error("주어진 이름에 해당하는 아이콘이 존재하지 않습니다.");
}