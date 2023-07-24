import { faArrowLeftRotate } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowLeftRotate icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowLeftRotate = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowLeftRotate} {...props} />;
};

export default ArrowLeftRotate;
