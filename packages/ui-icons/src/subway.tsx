import { faSubway } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Subway icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Subway = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSubway} {...props} />;
};

export default Subway;
