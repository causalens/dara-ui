import { faHandPointUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandPointUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandPointUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandPointUp} {...props} />;
};

export default HandPointUp;
