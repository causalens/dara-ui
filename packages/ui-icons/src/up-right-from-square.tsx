import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UpRightFromSquare icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UpRightFromSquare = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUpRightFromSquare} {...props} />;
};

export default UpRightFromSquare;
