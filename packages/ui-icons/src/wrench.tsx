import { faWrench } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Wrench icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Wrench = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWrench} {...props} />;
};

export default Wrench;
