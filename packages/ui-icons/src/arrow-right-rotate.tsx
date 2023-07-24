import { faArrowRightRotate } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowRightRotate icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowRightRotate = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowRightRotate} {...props} />;
};

export default ArrowRightRotate;
