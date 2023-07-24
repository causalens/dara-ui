import { faRssSquare } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * RssSquare icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const RssSquare = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRssSquare} {...props} />;
};

export default RssSquare;
