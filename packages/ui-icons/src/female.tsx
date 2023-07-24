import { faFemale } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Female icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Female = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFemale} {...props} />;
};

export default Female;
