import { faStapler } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Stapler icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Stapler = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faStapler} {...props} />;
};

export default Stapler;
