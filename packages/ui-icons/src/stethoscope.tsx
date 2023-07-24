import { faStethoscope } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Stethoscope icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Stethoscope = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faStethoscope} {...props} />;
};

export default Stethoscope;
