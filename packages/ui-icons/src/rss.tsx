import { faRss } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Rss icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Rss = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRss} {...props} />;
};

export default Rss;
