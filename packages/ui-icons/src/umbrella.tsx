import { faUmbrella } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Umbrella icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Umbrella = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUmbrella} {...props} />;
};

export default Umbrella;
