import { faHandDots } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandDots icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandDots = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandDots} {...props} />;
};

export default HandDots;
