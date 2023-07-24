import { faAtlas } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Atlas icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Atlas = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAtlas} {...props} />;
};

export default Atlas;
