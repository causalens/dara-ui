import { faForward } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Forward icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Forward = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faForward} {...props} />;
};

export default Forward;
