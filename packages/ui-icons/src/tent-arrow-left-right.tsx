import { faTentArrowLeftRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TentArrowLeftRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TentArrowLeftRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTentArrowLeftRight} {...props} />;
};

export default TentArrowLeftRight;
