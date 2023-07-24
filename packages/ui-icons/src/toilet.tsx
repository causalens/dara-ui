import { faToilet } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Toilet icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Toilet = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faToilet} {...props} />;
};

export default Toilet;
