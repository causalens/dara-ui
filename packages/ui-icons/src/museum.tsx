import { faMuseum } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Museum icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Museum = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMuseum} {...props} />;
};

export default Museum;
