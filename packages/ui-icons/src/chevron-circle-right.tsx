import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ChevronCircleRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ChevronCircleRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChevronCircleRight} {...props} />;
};

export default ChevronCircleRight;
