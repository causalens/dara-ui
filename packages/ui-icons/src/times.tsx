import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Times icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Times = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTimes} {...props} />;
};

export default Times;
