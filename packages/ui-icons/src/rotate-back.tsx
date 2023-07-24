import { faRotateBack } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * RotateBack icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const RotateBack = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRotateBack} {...props} />;
};

export default RotateBack;
