import { faSitemap } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Sitemap icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Sitemap = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSitemap} {...props} />;
};

export default Sitemap;
