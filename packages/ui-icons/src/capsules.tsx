import { faCapsules } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Capsules icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Capsules = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCapsules} {...props} />;
};

export default Capsules;
