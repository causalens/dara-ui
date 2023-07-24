import { faFireExtinguisher } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FireExtinguisher icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FireExtinguisher = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFireExtinguisher} {...props} />;
};

export default FireExtinguisher;
