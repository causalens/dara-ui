import { faCampground } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Campground icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Campground = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCampground} {...props} />;
};

export default Campground;
