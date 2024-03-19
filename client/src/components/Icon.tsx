
// 모든 아이콘은 'https://svgomg.net'에 의해 한번씩 압축되어야 합니다.
export function Icon({name, size = 50, width = size, height = size}: {
    name: string,
    width?: number,
    height?: number,
    size?: number,
}) {
    const rWidth = width;
    const rHeight = height;

    if (name == "logo") {
        return <svg width={rWidth} height={rHeight} viewBox="0 0 50 50"><defs><clipPath id="A"><path d="M0 0h50v50H0z"/></clipPath></defs><g clip-path="url(#A)"><path d="M2 48V25A22.98 22.98 0 0 1 25 2v23h23a22.98 22.98 0 0 1-23 23z" fill="#40b1fc" stroke="#000" stroke-linejoin="round" stroke-width="4"/></g></svg>;
    } else {
        throw new Error("주어진 이름에 해당하는 아이콘이 존재하지 않습니다.");
    }
}