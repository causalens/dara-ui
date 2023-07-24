import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowUpRightFromSquare icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowUpRightFromSquare = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowUpRightFromSquare} {...props} />;
};

export default ArrowUpRightFromSquare;
