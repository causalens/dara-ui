import { faArrowRotateBack } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowRotateBack icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowRotateBack = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowRotateBack} {...props} />;
};

export default ArrowRotateBack;
