import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UpRightAndDownLeftFromCenter icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UpRightAndDownLeftFromCenter = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUpRightAndDownLeftFromCenter} {...props} />;
};

export default UpRightAndDownLeftFromCenter;
