import { faOtter } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Otter icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Otter = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faOtter} {...props} />;
};

export default Otter;
