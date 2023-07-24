import { faRepublican } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Republican icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Republican = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRepublican} {...props} />;
};

export default Republican;
