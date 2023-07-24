import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ChevronCircleUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ChevronCircleUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChevronCircleUp} {...props} />;
};

export default ChevronCircleUp;
