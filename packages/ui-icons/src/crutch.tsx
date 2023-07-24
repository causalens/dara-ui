import { faCrutch } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Crutch icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Crutch = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCrutch} {...props} />;
};

export default Crutch;
