import { faSignHanging } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SignHanging icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SignHanging = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSignHanging} {...props} />;
};

export default SignHanging;
