import { ImageProps } from './types';

const Image = ({url, alt, isResponsive = false}: ImageProps) => {
    const newUrl = url.split(/[\s.]+/);
    const ext = newUrl.pop();
    const path = newUrl.join('.');
    return (
        <picture>
            {ext === 'webp' && <source srcSet={url} type="image/webp"></source>}
            {isResponsive && <source srcSet={`${path}x1500.${ext}`} media="(min-width: 1500px)"></source>}
            {isResponsive && <source srcSet={`${path}x1000.${ext}`} media="(min-width: 1000px)"></source>}
            {isResponsive && <source srcSet={`${path}x500.${ext}`} media="(min-width: 500px)"></source>}
            <img src={`${url}`} alt={alt}></img>
        </picture>
    );
};
export default Image