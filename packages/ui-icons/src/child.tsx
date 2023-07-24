import { faChild } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Child icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Child = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChild} {...props} />;
};

export default Child;
