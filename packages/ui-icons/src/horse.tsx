import { faHorse } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Horse icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Horse = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHorse} {...props} />;
};

export default Horse;
