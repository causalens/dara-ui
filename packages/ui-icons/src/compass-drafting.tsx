import { faCompassDrafting } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CompassDrafting icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CompassDrafting = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCompassDrafting} {...props} />;
};

export default CompassDrafting;
