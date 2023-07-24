import { faBrain } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Brain icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Brain = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBrain} {...props} />;
};

export default Brain;
