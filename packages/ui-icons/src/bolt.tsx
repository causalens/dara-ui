import { faBolt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Bolt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Bolt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBolt} {...props} />;
};

export default Bolt;
