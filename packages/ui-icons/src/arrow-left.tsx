import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowLeft icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowLeft = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowLeft} {...props} />;
};

export default ArrowLeft;
